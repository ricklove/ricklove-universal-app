import { hashCode } from './hash';
import {
    convertWorkflowToFunctionDeclaration,
    create_getCallExpression,
} from '../code-generation/file';
import {
    PipescriptBuiltinOperator,
    PipescriptNodeInstance,
    PipescriptNodeInstanceDataset,
    PipescriptNodeInstance_Operator,
    PipescriptNodePipeConnectionInputInstance,
    PipescriptNodePipeConnectionInstance,
} from '../types';

// TODO: handle cycles

type RunContext = {
    visited: Set<Omit<PipescriptNodePipeConnectionInstance, `outflowPipes`>>;
    lazy: boolean;
};

export const calculateRun = (
    dataset: PipescriptNodeInstanceDataset,
    context: RunContext = { visited: new Set(), lazy: false },
) => {
    dataset.rootNodeInstances.forEach(node => {
        calculateRunValue_nodeOutput(node, context);
    });

    calculateRun_names(dataset);
    recordRun(dataset);
};
const recordRun = (dataset: PipescriptNodeInstanceDataset) => {
    dataset.allNodeInstances.forEach(node => {
        const runValue = {
            inputs: node.inputs.map(x => ({
                name: x.runs?.nameInScope ?? x.name,
                value: x.runs?.value,
            })),
            inner: node.children.flatMap(c =>
                c.outputs.map(x => ({
                    name: x.runs?.nameInScope ?? x.name,
                    value: x.runs?.value,
                })),
            ),
            outputs: node.outputs.map(x => ({
                name: x.runs?.nameInScope ?? x.name,
                value: x.runs?.value,
            })),
        };
        const key = `${hashCode(runValue)}`;
        node.runs = node.runs ?? [];
        if (node.runs.some(x => x.key === key)) {
            // delete old to move last to the top
            node.runs.splice(
                node.runs.findIndex(x => x.key === key),
                1,
            );
            // don't add new
            // return;
        }

        const code =
            node.workflow.body.kind === `operator`
                ? {
                      content: `${create_getCallExpression(node.workflow)(
                          node.workflow.inputs.map(workflowInput => {
                              const nodeInput = node.inputs.find(
                                  x => x.workflowInput === workflowInput,
                              );

                              const valueRaw = nodeInput?.runs?.value;
                              const value =
                                  typeof valueRaw !== `object` ? `${valueRaw}` : undefined;

                              const name = nodeInput?.runs?.nameInScope ?? workflowInput.name;
                              return value ? `${name}(${value})` : name;
                          }),
                      )}`,
                  }
                : convertWorkflowToFunctionDeclaration(node.workflow, node.dataset);
        node.runs.unshift({
            key,
            code: code?.content,
            ...runValue,
        });
    });
};

export const calculateRunValue_nodeOutput = (node: PipescriptNodeInstance, context: RunContext) => {
    // all outputs must be evaluated (but may return undefined)
    node.outputs.forEach(output => {
        calculateRunValue_input(output, context);
    });

    if (!context.lazy) {
        node.children.forEach(x => {
            calculateRunValue_nodeOutput(x, context);
        });
        node.inputs.forEach(x => {
            calculateRunValue_input(x, context);
        });
    }
};

export const calculateRunValue_connectionOverride = (
    connection: PipescriptNodePipeConnectionInstance,
    value: unknown,
    context: RunContext = { visited: new Set(), lazy: false },
) => {
    if (!connection.runs) {
        connection.runs = createRun(connection, context);
    }
    const { runs } = connection;
    runs.override = value;

    console.log(`calculateRunValue_connectionOverride`, { connection });

    const allConnections = connection.nodeInstance.dataset.allNodeInstances.flatMap(x => [
        ...x.inputs,
        ...x.outputs,
    ]);

    const visited = new Set<PipescriptNodePipeConnectionInstance>();
    const updateDependents = (c: PipescriptNodePipeConnectionInstance) => {
        calculateRunValue_input(c, context);

        const dependents = allConnections.filter(
            x => !visited.has(x) && x.runs?.dependencies.includes(c),
        );
        console.log(`updateDependents`, { c, dependents });
        dependents.forEach(d => visited.add(d));
        dependents.forEach(d => updateDependents(d));
    };

    updateDependents(connection);
    calculateRun_names(connection.nodeInstance.dataset);
    recordRun(connection.nodeInstance.dataset);
};

const calculateRun_names = (dataset: PipescriptNodeInstanceDataset) => {
    const contexts = new Map<PipescriptNodeInstance, RunContext>();

    const global = { outputs: [] } as unknown as PipescriptNodeInstance;

    const allNodesSorted = [] as PipescriptNodeInstance[];

    const addNodeRecursive = (parent: PipescriptNodeInstance) => {
        if (allNodesSorted.includes(parent)) {
            return;
        }

        allNodesSorted.push(parent);
        [...parent.children].reverse().forEach(x => addNodeRecursive(x));
        parent.inputs.forEach(x => {
            if (x.inflowPipe?.source.kind === `input`) {
                addNodeRecursive(x.inflowPipe.source.input.nodeInstance);
            }
        });
    };
    dataset.rootNodeInstances.forEach(x => {
        addNodeRecursive(x);
    });
    dataset.allNodeInstances.forEach(x => {
        addNodeRecursive(x);
    });

    allNodesSorted.forEach(x => {
        const parent = x.parent ?? global;
        const context =
            contexts.get(parent)
            ?? contexts
                .set(parent, {
                    visited: new Set(),
                    lazy: false,
                })
                .get(parent)!;
        x.outputs.forEach(o => {
            context.visited.add(o);

            if (!o.runs) {
                o.runs = createRun(o, context);
            }
            o.runs.nameInScope = getUniqueName(o, context);
        });
    });
};

const getUniqueName = (
    connection: Omit<PipescriptNodePipeConnectionInstance, `outflowPipes`>,
    context: RunContext,
) => {
    let n = connection.name;

    while ([...context.visited].some(x => x !== connection && x.name === n)) {
        n = `${n}_${connection.nodeInstance.key}`;
    }

    return n;
};

const createRun = (
    connection: Omit<PipescriptNodePipeConnectionInstance, `outflowPipes`>,
    context: RunContext,
): Required<PipescriptNodePipeConnectionInstance>[`runs`] => {
    // const nameInScope = getUniqueName(connection, context);
    const nameInScope = connection.name;
    return {
        nameInScope,
        override: undefined,
        value: undefined,
        dependencies: [],
    };
};

const calculateRunValue_input = (
    input: Omit<PipescriptNodePipeConnectionInstance, `outflowPipes`>,
    context: RunContext,
) => {
    if (context.visited.has(input)) {
        return input.runs;
    }
    context.visited.add(input);
    if (input.runs?.override !== undefined) {
        input.runs.value = input.runs.override;
        return;
    }

    input.runs = createRun(input, context);

    const inflowPipe = input.inflowPipe;
    if (!inflowPipe) {
        return;
    }
    const { source } = inflowPipe;
    if (source.kind === `data`) {
        input.runs = {
            ...input.runs,
            value: JSON.parse(source.json),
            dependencies: [],
        };
        return;
    }
    if (source.kind === `input`) {
        input.runs = {
            ...input.runs,
            value: source.input.runs?.value,
            dependencies: [source.input],
        };
        return;
    }
    if (source.kind === `output`) {
        input.runs = {
            ...input.runs,
            value: source.output.runs?.value,
            dependencies: [source.output],
        };
        return;
    }
    if (source.kind === `conditional-output`) {
        if (!source.condition.runs?.value) {
            input.runs = {
                ...input.runs,
                value: source.default.runs?.value,
                dependencies: [source.condition, source.default],
            };
            return;
        }

        input.runs = {
            ...input.runs,
            value: source.output.runs?.value,
            dependencies: [source.condition, source.output],
        };
        return;
    }
    if (source.kind === `operator-output`) {
        input.runs = {
            ...input.runs,
            ...calculateRunValue_operator(source.nodeInstance, context),
        };
        return;
    }

    const _never: never = undefined as typeof source as never;
};

const calculateRunValue_operator = (
    nodeInstance: PipescriptNodeInstance_Operator,
    context: RunContext,
) => {
    const calculateArgs_index = (
        index: number,
    ): {
        value: number;
        dependencies: PipescriptNodePipeConnectionInstance[];
    } => {
        const x = nodeInstance.inputs[index];
        if (x == null) {
            return {
                value: undefined as unknown as number,
                dependencies: [x as PipescriptNodePipeConnectionInputInstance],
            };
        }
        calculateRunValue_input(x, context);
        return {
            value: x.runs?.value as number,
            dependencies: [x as PipescriptNodePipeConnectionInputInstance],
        };
    };

    const operator: PipescriptBuiltinOperator = nodeInstance.operator;

    // lazy
    const aResult = calculateArgs_index(0);
    const a = aResult.value;
    const dependencies = [...aResult.dependencies];

    if (operator === `&&`) {
        if (a) {
            const v = calculateArgs_index(1);
            return {
                value: v?.value,
                dependencies: [...dependencies, ...v.dependencies],
            };
        }
        return aResult;
    }
    if (operator === `||`) {
        if (!a) {
            const v = calculateArgs_index(1);
            return {
                value: v?.value,
                dependencies: [...dependencies, ...v.dependencies],
            };
        }
        return aResult;
    }
    if (operator === `conditional-ternary`) {
        if (a) {
            const v = calculateArgs_index(1);
            return {
                value: v?.value,
                dependencies: [...dependencies, ...v.dependencies],
            };
        }
        const v = calculateArgs_index(2);
        return {
            value: v?.value,
            dependencies: [...dependencies, ...v.dependencies],
        };
    }

    // unary
    switch (operator) {
        case `=`:
            return aResult;
        case `declaration`:
            return aResult;
        case `!`:
            return { dependencies, value: !a };
        case `++`:
            return { dependencies, value: a + 1 };
        case `--`:
            return { dependencies, value: a - 1 };
    }

    // binary
    const bResult = calculateArgs_index(1);
    const b = bResult.value;
    dependencies.push(...bResult.dependencies);

    switch (operator) {
        case `+`:
            return { dependencies, value: a + b };
        case `-`:
            return { dependencies, value: a - b };
        case `*`:
            return { dependencies, value: a * b };
        case `/`:
            return { dependencies, value: a / b };
        case `%`:
            return { dependencies, value: a % b };
        case `<`:
            return { dependencies, value: a < b };
        case `>`:
            return { dependencies, value: a > b };
        case `<=`:
            return { dependencies, value: a <= b };
        case `>=`:
            return { dependencies, value: a >= b };
        case `==`:
            return { dependencies, value: a === b };
        case `!=`:
            return { dependencies, value: a !== b };
    }

    const _never: never = undefined as typeof operator as never;

    return undefined;
};
