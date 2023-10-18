import {
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
    // TODO: a file with imports is actually a node, not a workflow, since only a node has specific inputs
    const imports = `${workflow.inputs.map(x => `import ${x.name} from '${x.name}'`)}`;

    const functions = workflow.workflows?.map(x => generateFunction(x));

    const content = `
${imports}
${functions}

    ${workflow.outputs.map(x => x.name)}
    
    `;
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
