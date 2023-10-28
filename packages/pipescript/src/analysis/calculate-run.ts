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
    visited: Set<unknown>;
    lazy: boolean;
};

export const calculateRun = (
    dataset: PipescriptNodeInstanceDataset,
    context: RunContext = { visited: new Set(), lazy: false },
) => {
    dataset.rootNodeInstances.forEach(node => {
        calculateRunValue_nodeOutput(node, context);
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
        connection.runs = {
            override: value,
            value: value,
            dependencies: [],
        };
    }
    const { runs } = connection;
    runs.override = value;

    const allConnections = connection.nodeInstance.dataset.allNodeInstances.flatMap(x => [
        ...x.inputs,
        ...x.outputs,
    ]);

    const visited = new Set<PipescriptNodePipeConnectionInstance>();
    const updateDependents = (dependencies: typeof runs.dependencies) => {
        const deps = new Set(dependencies);
        const dependents = allConnections.filter(
            x => !visited.has(x) && x.runs?.dependencies.some(d => deps.has(d)),
        );
        dependents.forEach(d => visited.add(d));
        dependents.forEach(d => calculateRunValue_input(d, context));
        dependents.forEach(d => updateDependents(d.runs?.dependencies ?? []));
    };

    updateDependents(runs.dependencies);
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

    input.runs = undefined;

    const inflowPipe = input.inflowPipe;
    if (!inflowPipe) {
        return;
    }
    const { source } = inflowPipe;
    if (source.kind === `data`) {
        input.runs = {
            value: JSON.parse(source.json),
            dependencies: [],
        };
        return;
    }
    if (source.kind === `input`) {
        input.runs = { value: source.input.runs?.value, dependencies: [source.input] };
        return;
    }
    if (source.kind === `output`) {
        input.runs = { value: source.output.runs?.value, dependencies: [source.output] };
        return;
    }
    if (source.kind === `operator-output`) {
        input.runs = calculateRunValue_operator(source.nodeInstance, context);
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
