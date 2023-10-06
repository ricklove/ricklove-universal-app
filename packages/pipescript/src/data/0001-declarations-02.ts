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
            name: `notAnswer`,
            type: {
                kind: `simple`,
                type: `int`,
            },
            pipe: {
                kind: `node`,
                sourceNodeId: `2`,
                sourceNodeOutputName: `notAnswer`,
            },
        },
        {
            name: `answer`,
            type: {
                kind: `simple`,
                type: `int`,
            },
            pipe: {
                kind: `node`,
                sourceNodeId: `1`,
                sourceNodeOutputName: `answer`,
            },
        },
    ],
    workflows: [
        expectedDeclarationFromLiteralWorkflow(`answer`, 42),
        expectedDeclarationFromLiteralWorkflow(`notAnswer`, 43),
    ],
    nodes: [
        expectedDeclarationFromLiteralNode(`answer`, 1),
        expectedDeclarationFromLiteralNode(`notAnswer`, 2),
    ],
};
