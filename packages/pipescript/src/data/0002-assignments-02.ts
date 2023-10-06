import {
    expectedDeclarationFromLiteralNode,
    expectedDeclarationFromLiteralWorkflow,
    expectedDeclarationFromVariableNode,
    expectedDeclarationFromVariableWorkflow,
} from './_utils';
import { PipescriptWorkflow } from '../types';

export const exampleDeclarationWorkflow: PipescriptWorkflow = {
    workflowUri: `file.ts`,
    name: `file.ts`,
    inputs: [],
    outputs: [
        {
            name: `a`,
            type: {
                kind: `simple`,
                type: `int`,
            },
            pipe: {
                kind: `node`,
                sourceNodeId: `1`,
                sourceNodeOutputName: `a`,
            },
        },
        {
            name: `b`,
            type: {
                kind: `simple`,
                type: `int`,
            },
            pipe: {
                kind: `node`,
                sourceNodeId: `2`,
                sourceNodeOutputName: `b`,
            },
        },
    ],
    workflows: [
        expectedDeclarationFromLiteralWorkflow(`a`, 42),
        expectedDeclarationFromVariableWorkflow(`b`),
    ],
    nodes: [
        expectedDeclarationFromLiteralNode(`a`, 1),
        expectedDeclarationFromVariableNode(`b`, 2, `a`, 1),
    ],
};
