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
    // TODO: a file with imports is actually a node, not a workflow, since only a node has specific inputs
    const imports = workflow.inputs.map(x => `import ${x.name} from '${x.name}'`);

    const functions = workflow.workflows
        ?.filter(x => !functionBuiltins.find(f => x.name.endsWith(f.suffix)))
        .map(x => generateFunction(x));

    const isExportedName = (name: string) => {
        return !!workflow.outputs.find(x => x.name === name);
    };

    const getNodeOutputName = (nodeId: string, outputName: string) => {
        if (isExportedName(outputName)) {
            return outputName;
        }
        return `${nodeId.replace(/[^\w]+/g, `_`)}_${outputName}`;
    };

    const generatePipeValue = (x: PipescriptPipeValue): string => {
        if (x.kind === `data`) {
            return x.json;
        }

        if (x.kind === `workflow-input`) {
            return x.workflowInputNames.join(`,`);
        }

        if (x.kind === `node`) {
            return getNodeOutputName(x.sourceNodeId, x.sourceNodeOutputName);
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

    const getWorkflow = (
        workflowUri: string,
        context: PipescriptWorkflow,
    ): undefined | PipescriptWorkflow => {
        return context.workflows?.find(w => w.workflowUri === workflowUri);
    };

    const nodes = workflow.nodes.map(node => {
        const { implementation, inputPipes } = node;
        if (implementation.kind === `data`) {
            return `const ${getNodeOutputName(node.nodeId, `data`)} = ${implementation.json};`;
        }
        if (implementation.kind === `workflow`) {
            const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
            if (!nodeWorkflow) {
                return `/* missing workflowUri ${implementation.workflowUri} */`;
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
            if (fun && fun.suffix === `declaration`) {
                return `${constLeft} = ${generatePipeValue(inputPipes[0])};`;
            }
            if (fun) {
                return `${constLeft} = ${fun.template(
                    node.inputPipes.map(x => generatePipeValue(x)),
                )};`;
            }

            return `${constLeft} = ${implementation.workflowUri}(${inputPipes
                .map(p => p.name)
                .join(`, `)});`;
        }

        return `/* unknown node */`;
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
                return `export ${x.name} = ${pipe.workflowInputNames.join(`, `)};`;
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
