import {
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
    // TODO: a file with imports is actually a node, not a workflow, since only a node has specific inputs
    const imports = workflow.inputs.map(x => `import ${x.name} from '${x.name}'`);

    const functions = workflow.workflows
        ?.filter(x => !x.name.endsWith(`declaration`))
        .map(x => generateFunction(x));

    const isExportedName = (name: string) => {
        return !!workflow.outputs.find(x => x.name === name);
    };
    const exportedNames = [] as string[];
    const markExportedName = (name: string) => {
        if (!isExportedName(name)) {
            return false;
        }
        exportedNames.push(name);
        return true;
    };

    const nodes = workflow.nodes.map(x => {
        const { implementation, inputPipes } = x;
        if (implementation.kind === `data`) {
            return `const ${x.nodeId} = ${implementation.json};`;
        }
        if (implementation.kind === `workflow`) {
            if (implementation.workflowUri.endsWith(`declaration`)) {
                const name = inputPipes[0].name;
                return `${
                    markExportedName(name) ? `export ` : ``
                }const ${name} = ${generatePipeValue(inputPipes[0])};`;
            }

            return `const ${x.nodeId} = ${implementation.workflowUri}(${inputPipes
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
                            ? pipe.sourceNodeOutputName
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

const generatePipeValue = (x: PipescriptPipeValue): string => {
    if (x.kind === `data`) {
        return x.json;
    }

    if (x.kind === `workflow-input`) {
        return x.workflowInputNames.join(`,`);
    }

    if (x.kind === `node`) {
        return x.sourceNodeOutputName;
    }

    return `/* unknown pipe value */`;
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
