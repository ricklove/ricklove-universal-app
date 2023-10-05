import { expect } from 'bun:test';

import { convertTypescriptToPipescript } from '../core';
import { PipescriptNode, PipescriptWorkflow } from '../types';

export const expectSingleCodeFileWorkflow = (
    filename: string,
    code: string,
    workflow: PipescriptWorkflow,
) => {
    const actual = convertTypescriptToPipescript([{ filename, code }]).workflows?.[0];
    const expected = workflow;
    try {
        expect(actual).toEqual(expected);
    } catch (err) {
        console.log(`
        --- FAIL ---
        `);
        console.log(err);

        const actualJson = JSON.stringify(actual);
        const expectedJson = JSON.stringify(expected);
        expect(actualJson).toEqual(expectedJson);
    }
};

export const expectProjectWorkflow = (
    files: { filename: string; code: string }[],
    workflow: PipescriptWorkflow,
) => {
    expect(convertTypescriptToPipescript(files)).toEqual(workflow);
};

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
        nodes: [],
    };
};
export const expectedDeclarationFromLiteralNode = (
    name: string,
    nodeId: number,
): PipescriptNode => {
    return {
        nodeId: `${nodeId}`,
        implementation: {
            kind: `workflow`,
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
                    workflowInputName: name,
                },
            },
        ],
        nodes: [],
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
            kind: `workflow`,
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
