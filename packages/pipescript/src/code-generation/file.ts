import { PipescriptRuntimeContext, loadRuntime } from '../analysis/load-data';
import {
    PipescriptBuiltinOperator,
    PipescriptNode,
    PipescriptNodeInstance,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
    PipescriptWorkflowOutput,
} from '../types';

const indent = (text: string, depth: number = 1) => {
    if (!text) {
        return ``;
    }
    return text
        .split(`\n`)
        .map(x => `${[...new Array(depth)].map(x => `    `)}${x}\n`)
        .join(``);
};

const operatorExpressions = [
    // assignment
    ...([`declaration`, `=`] as const).map(operator => ({
        operator,
        template: (argNames: string[]) => `${argNames[0]}`,
    })),
    // prefix unary
    ...([`!`] as const).map(operator => ({
        operator,
        template: (argNames: string[]) => `${operator}${argNames[0]}`,
    })),
    // postfix unary
    ...([`++`, `--`] as const).map(operator => ({
        operator,
        template: (argNames: string[]) => `${argNames[0]}${operator}`,
    })),
    // binary
    ...([`+`, `-`, `*`, `/`, `%`, `&&`, `||`, `==`, `!=`, `<`, `>`, `<=`, `>=`] as const).map(
        operator => ({
            operator,
            template: (argNames: string[]) => `${argNames[0]} ${operator} ${argNames[1]}`,
        }),
    ),
    // custom
    ...([`conditional-ternary`] as const).map(operator => ({
        operator,
        template: (argNames: string[]) => `${argNames[0]} ? ${argNames[1]} : ${argNames[2]}`,
    })),
] satisfies {
    operator: PipescriptBuiltinOperator;
    template: (argNames: string[]) => string;
}[];

/** Convert workflow to typescript file with exports
 *
 * - nested workflows are functions
 * - outputs are exports
 * - rootNodes are flat code
 *
 */
export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
    const { dataset, context } = loadRuntime(workflow);

    const builder: Builder = {
        ...context,
        declaredWorkflows: [],
    };

    const nestedFunctionDeclarations =
        workflow.workflows
            ?.map(w => convertWorkflowToFunctionDeclaration(w, builder))
            .filter(x => x)
            .map(x => x!) ?? [];

    const content = `${nestedFunctionDeclarations.map(x => x.content).join(`\n\n`)}`;

    // const { content } = convertNodesToFile(rootNodeInstances, workflow, builder);

    return {
        content,
    };
};

type Builder = PipescriptRuntimeContext & {
    declaredWorkflows: {
        workflow: PipescriptWorkflow;
        getCallExpression: (args: string[]) => string;
    }[];
};

const convertWorkflowToFunctionDeclaration = (
    workflow: PipescriptWorkflow,
    builder: Builder,
): undefined | { content: string } => {
    if (builder.declaredWorkflows.find(x => x.workflow === workflow)) {
        return;
    }

    const functionName = getFunctionName(workflow);

    const create_getCallExpression = () => {
        if (workflow.body.kind === `operator`) {
            const { operator } = workflow.body;
            const fun = operatorExpressions.find(f => f.operator === operator);
            if (!fun) {
                return () => `/* missing operator ${operator}*/`;
            }
            return fun.template;
        }

        return (args: string[]) => {
            return `${functionName}(${args.join(`, `)})`;
        };
    };

    const declaration: Builder[`declaredWorkflows`][number] = {
        workflow,
        getCallExpression: create_getCallExpression(),
    };
    builder.declaredWorkflows.push(declaration);

    if (workflow.body.kind === `operator`) {
        return;
    }

    const nestedFunctionDeclarations =
        workflow.workflows
            ?.map(w => convertWorkflowToFunctionDeclaration(w, builder))
            .filter(x => x)
            .map(x => x!) ?? [];

    const statements = workflow.body.nodes.map(node => {
        const nodeInstance = builder.allNodeInstances.find(x => x.node === node);
        const workflow = nodeInstance?.workflow;
        if (!workflow) {
            return `/* missing workflow ${node.workflowUri} */`;
        }
        const fun = builder.declaredWorkflows.find(x => x.workflow === workflow);
        if (!fun) {
            return `/* missing workflow function ${node.workflowUri} */`;
        }
        const args = nodeInstance.inputs.map(x => {
            const source = x.inflowPipe?.source;
            if (!source) {
                return `undefined /* disconnected */`;
            }
            if (source.kind === `data`) {
                return source.json;
            }
            if (source.kind === `input`) {
                // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
                return source.input.name;
            }
            if (source.kind === `output`) {
                // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
                return source.output.name;
            }
            if (source.kind === `operator-output`) {
                // TODO: this should not be possible
                return `undefined /* an operator cannot an argument of the same node */`;
            }

            return `undefined /* unknown source.kind ${(source as { kind: string }).kind} */`;
        });
        const funCall = fun.getCallExpression(args);
        const outputsItems = nodeInstance.outputs.map(x => {
            // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
            return x.name;
        });
        const outputsExpression =
            outputsItems.length > 1
                ? `{ ${outputsItems.join(`, `)} }`
                : outputsItems.length
                ? `${outputsItems[0]}`
                : `/* missing output item */ _unknown`;
        return `const ${outputsExpression} = ${funCall};`;
    });

    const returnStatement = (() => {
        if (!workflow.outputs.length) {
            return undefined;
        }

        // if (workflow.outputs.length === 1) {
        //     return `return ${workflow.outputs.map(x => x.name).join(`, `)};`;
        // }

        return `return { ${workflow.outputs.map(x => x.name).join(`, `)} };`;
    })();

    const parameters = workflow.inputs.map(x => generateDeclaration(x));
    const parametersCode =
        parameters.join(`, `).length > 40
            ? `\n${indent(`${parameters.join(`,\n`)},`)}\n`
            : parameters.join(`, `);

    const content = `function ${functionName}(${parametersCode}) {
${indent(nestedFunctionDeclarations.map(x => x.content).join(`\n\n`))}${indent(
        [...statements, returnStatement].filter(x => x).join(`\n`),
    )}}`;

    return {
        content,
    };
};

const getFunctionName = (workflow: PipescriptWorkflow) => {
    const functionName = workflow.workflowUri.replace(/[^A-Za-z0-9]+/g, `_`);
    return functionName;
};

const generateDeclaration = (x: PipescriptVariable): string => {
    return `${x.name}${x.type.nullable ? `?` : ``}: ${generateType(x.type)}${
        x.type.array ? `[]` : ``
    }`;
};

const generateType = (type: PipescriptType): string => {
    if (type.kind === `literal`) {
        if (type.type === `string`) {
            return `\`${type.value}\``;
        }
        return `${type.value}`;
    }

    if (type.kind === `simple`) {
        if (type.type === `int` || type.type === `float`) {
            return `number`;
        }
        return `${type.type}`;
    }

    if (type.kind === `object`) {
        return `{${type.fields.map(x => generateDeclaration(x)).join(`,\n`)}}`;
    }

    if (type.kind === `type`) {
        return type.name;
    }

    if (type.kind === `node`) {
        return `/* TODO: function callbacks */ fun_${type.node.nodeId}`;
    }

    return `unknown`;
};
