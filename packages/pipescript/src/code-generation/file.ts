import { loadRuntime } from '../analysis/load-data';
import {
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

const functionBuiltins = [
    {
        suffix: `declaration`,
        template: (argNames: string[]) => `${argNames[0]}`,
    },
    {
        suffix: `=`,
        template: (argNames: string[]) => `${argNames[0]}`,
    },
    {
        suffix: `+`,
        template: (argNames: string[]) => `${argNames[0]} + ${argNames[1]}`,
    },
    {
        suffix: `-`,
        template: (argNames: string[]) => `${argNames[0]} - ${argNames[1]}`,
    },
    {
        suffix: `*`,
        template: (argNames: string[]) => `${argNames[0]} * ${argNames[1]}`,
    },
    {
        suffix: `/`,
        template: (argNames: string[]) => `${argNames[0]} / ${argNames[1]}`,
    },
    {
        suffix: `%`,
        template: (argNames: string[]) => `${argNames[0]} % ${argNames[1]}`,
    },
];

export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
    loadRuntime(workflow);

    // TODO: a file is actually a node, not a workflow, since it is executed at first import (and has specific input values)
    const imports = workflow.inputs.map(x => `import ${x.name} from '${x.name}'`);

    const functions = workflow.workflows
        ?.filter(x => x.body.kind === `nodes`)
        .map(x => generateFunction(x));

    const isExportedName = (name: string) => {
        return !!workflow.outputs.find(x => x.name === name);
    };

    const getWorkflow = (
        workflowUri: string,
        context: PipescriptWorkflow,
    ): undefined | PipescriptWorkflow => {
        return context.workflows?.find(w => w.workflowUri === workflowUri);
    };

    const allNodes = workflow.body.kind === `nodes` ? workflow.body.nodes : [];
    const allNodeOutputs = allNodes.flatMap(
        n =>
            getWorkflow(n.implementation.workflowUri, workflow)?.outputs.map(x => ({
                ...x,
                nodeId: n.nodeId,
            })) ?? [],
    );

    // console.log(`allNodeOutputNames`, { allNodeOutputNames });

    const getNodeValue = (nodeId: string): string => {
        const node = allNodes.find(x => x.nodeId === nodeId);
        if (!node) {
            return `/* getNodeValue: missing node */`;
        }

        const { implementation, inputPipes } = node;
        const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
        if (!nodeWorkflow) {
            return `/* getNodeValue: missing workflowUri ${implementation.workflowUri} */`;
        }
        const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.suffix));

        if (fun) {
            return `${fun.template(node.inputPipes.map(x => generatePipeValue(x)))}`;
        }

        return `${implementation.workflowUri}(${inputPipes.map(p => p.name).join(`, `)})`;
    };

    const getNodeOutputName = (nodeId: string, outputName: string): string => {
        if (isExportedName(outputName)) {
            return outputName;
        }

        const allMatchingOutputNames = allNodeOutputs.filter(x => x.name === outputName);

        if (allMatchingOutputNames.length === 1) {
            // use simple name if unique
            return outputName;
        }

        return `${nodeId.replace(/[^\w]+/g, `_`)}_${outputName}`;
    };

    const isNodeOutputInline = (nodeId: string, outputName: string): boolean => {
        if (isExportedName(outputName)) {
            return false;
        }

        // inline if node has single output and single usage
        const nodeOutputs = allNodeOutputs.filter(x => x.nodeId === nodeId);
        return nodeOutputs.length === 1;
    };

    const getNodeOutputNameOrInlineValue = (nodeId: string, outputName: string): string => {
        // if (isExportedName(outputName)) {
        //     return outputName;
        // }

        // // inline if node has single output and single usage
        // const nodeOutputs = allNodeOutputs.filter(x => x.nodeId === nodeId);
        // if (nodeOutputs.length === 1) {
        //     // inline if only one matching output
        //     return getNodeValue(nodeId);
        // }

        return getNodeOutputName(nodeId, outputName);
    };

    const getNodeName = (nodeId: string): string => {
        const node = allNodes.find(x => x.nodeId === nodeId);
        if (!node) {
            return `/* getNodeName: missing node */`;
        }

        const { implementation, inputPipes } = node;
        const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
        if (!nodeWorkflow) {
            return `/* getNodeName: missing workflowUri ${implementation.workflowUri} */`;
        }
        const outputs = nodeWorkflow.outputs;
        const outputNames =
            outputs.length <= 1
                ? `${getNodeOutputName(node.nodeId, outputs[0].name)}`
                : `{ ${outputs.map(o => getNodeOutputName(node.nodeId, o.name)).join(`, `)} }`;
        const areAllExported = outputs.every(o =>
            isExportedName(getNodeOutputName(node.nodeId, o.name)),
        );
        if (areAllExported) {
            outputs.forEach(o => markExportedName(o.name));
        }
        const constLeft = `${areAllExported ? `export ` : ``}const ${outputNames}`;

        const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.suffix));

        if (fun) {
            return `${constLeft}`;
        }

        return `${constLeft}`;
    };

    const generatePipeValue = (x: PipescriptPipeValue): string => {
        if (x.kind === `data`) {
            return x.json;
        }

        if (x.kind === `workflow-operator`) {
            return `/* TODO: operator */`;
        }

        if (x.kind === `workflow-input`) {
            return x.workflowInputName;
        }

        if (x.kind === `node`) {
            return getNodeOutputNameOrInlineValue(x.sourceNodeId, x.sourceNodeOutputName);
        }

        return `/* unknown pipe value */`;
    };

    const exportedNames = [] as string[];
    const markExportedName = (name: string) => {
        if (!isExportedName(name)) {
            return false;
        }
        exportedNames.push(name);
        return true;
    };

    const nodes = allNodes.map(node => {
        return `${getNodeName(node.nodeId)} = ${getNodeValue(node.nodeId)};`;

        // const { implementation, inputPipes } = node;
        // if (implementation.kind === `data`) {
        //     return `const ${getNodeOutputNameOrInlineValue(node.nodeId, `data`)} = ${
        //         implementation.json
        //     };`;
        // }
        // if (implementation.kind === `workflow`) {
        //     const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
        //     if (!nodeWorkflow) {
        //         return `/* missing workflowUri ${implementation.workflowUri} */`;
        //     }
        //     const outputs = nodeWorkflow.outputs;
        //     const outputNames =
        //         outputs.length <= 1
        //             ? `${getNodeOutputNameOrInlineValue(node.nodeId, outputs[0].name)}`
        //             : `{ ${outputs
        //                   .map(o => getNodeOutputNameOrInlineValue(node.nodeId, o.name))
        //                   .join(`, `)} }`;
        //     const areAllExported = outputs.every(o =>
        //         isExportedName(getNodeOutputNameOrInlineValue(node.nodeId, o.name)),
        //     );
        //     if (areAllExported) {
        //         outputs.forEach(o => markExportedName(o.name));
        //     }
        //     const constLeft = `${areAllExported ? `export ` : ``}const ${outputNames}`;

        //     const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.suffix));

        //     if (fun) {
        //         return `${constLeft} = ${fun.template(
        //             node.inputPipes.map(x => generatePipeValue(x)),
        //         )};`;
        //     }

        //     return `${constLeft} = ${implementation.workflowUri}(${inputPipes
        //         .map(p => p.name)
        //         .join(`, `)});`;
        // }

        // return `/* unknown node */`;
    });

    const exportNames = workflow.outputs
        .filter(x => !exportedNames.includes(x.name))
        .filter(x => !x.pipe)
        .map(x => ({ name: x.name, nameSource: undefined as undefined | string }));
    exportedNames.push(...exportNames.map(x => x.name));

    const exportsBodies = workflow.outputs
        .filter(x => !exportedNames.includes(x.name))
        .filter(x => x.pipe)
        .map(x => {
            const { pipe } = x;

            if (!pipe) {
                return;
            }
            if (pipe.kind === `data`) {
                return `export ${x.name} = ${pipe.json};`;
            }

            if (pipe.kind === `node`) {
                exportNames.push({
                    name: x.name,
                    nameSource:
                        pipe.sourceNodeOutputName !== x.name
                            ? getNodeOutputName(pipe.sourceNodeId, pipe.sourceNodeOutputName)
                            : undefined,
                });
                exportedNames.push(x.name);
                return;
            }

            if (pipe.kind === `workflow-input`) {
                return `export ${x.name} = ${pipe.workflowInputName};`;
            }

            if (pipe.kind === `workflow-operator`) {
                return `export ${x.name} = /* TODO: operator 2 */;`;
            }

            return `export unknown;`;
        })
        .filter(x => !!x)
        .map(x => x as string);

    const content = `
${imports.join(`\n`)}
${functions?.join(`\n\n`)}
${nodes.join(`\n\n`)}
${exportsBodies.join(`\n\n`)}
${
    exportNames.length
        ? `export { ${exportNames
              .map(x => `${x.nameSource ? `${x.nameSource} as ` : ``}${x.name}`)
              .join(`, `)} };`
        : ``
}
    `
        .trim()
        .split(`\n`)
        .map(x => x.trimEnd())
        .join(`\n`)
        .replace(/\n\n+/g, `\n\n`);
    return { fileName: workflow.name, content };
};

const generateFunction = (workflow: PipescriptWorkflow): string => {
    const parameters = `${workflow.inputs.map(x => generateDeclaration(x)).join(`, `)}`;

    const innerFunctions = workflow.workflows?.map(x => generateFunction(x)) ?? [];

    const content = `
const ${workflow.name} = (${parameters}) => {
${innerFunctions.join(`\n\n`)}
}
    `.trim();
    return content;
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
        // TODO: function callbacks
        return `/*TODO*/fun_${type.node.nodeId}`;
    }

    return `unknown`;
};
