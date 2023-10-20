import { PipescriptNode, PipescriptWorkflow } from '../types';

export const expectedDeclarationFromLiteralWorkflow = (
    name: string,
    value: unknown,
): PipescriptWorkflow => {
    return {
        workflowUri: `${name}-declaration`,
        name: `${name}-declaration`,
        inputs: [],
        outputs: [
            {
                name,
                type: {
                    kind: `simple`,
                    type: `int`,
                },
                pipe: {
                    kind: `data`,
                    json: JSON.stringify(value),
                },
            },
        ],
        body: {
            kind: `nodes`,
            nodes: [],
        },
    };
};
export const expectedDeclarationFromLiteralNode = (
    name: string,
    nodeId: number,
): PipescriptNode => {
    return {
        nodeId: `${nodeId}`,
        implementation: {
            workflowUri: expectedDeclarationFromLiteralWorkflow(name, 42).workflowUri,
        },
        inputPipes: [],
    };
};

export const expectedDeclarationFromVariableWorkflow = (name: string): PipescriptWorkflow => {
    return {
        workflowUri: `${name}-declaration`,
        name: `${name}-declaration`,
        inputs: [
            {
                name,
                type: {
                    kind: `simple`,
                    type: `int`,
                },
            },
        ],
        outputs: [
            {
                name,
                type: {
                    kind: `simple`,
                    type: `int`,
                },
                pipe: {
                    kind: `workflow-input`,
                    workflowInputNames: [name],
                },
            },
        ],
        body: {
            kind: `nodes`,
            nodes: [],
        },
    };
};
export const expectedDeclarationFromVariableNode = (
    name: string,
    nodeId: number,
    sourceVarName: string,
    sourceNodeId: number,
): PipescriptNode => {
    return {
        nodeId: `${nodeId}`,
        implementation: {
            workflowUri: expectedDeclarationFromVariableWorkflow(name).workflowUri,
        },
        inputPipes: [
            {
                name,
                kind: `node`,
                sourceNodeId: `${sourceNodeId}`,
                sourceNodeOutputName: sourceVarName,
            },
        ],
    };
};
