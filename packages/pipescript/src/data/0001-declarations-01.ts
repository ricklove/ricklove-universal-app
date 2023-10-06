import { PipescriptWorkflow } from '../types';

const name = `answer`;
const value = 42;
const nodeId = 1;

const code = `export const answer = 42;`;

export const exampleDeclarationWorkflow: PipescriptWorkflow = {
    workflowUri: `file.ts`,
    name: `file.ts`,
    inputs: [],
    outputs: [
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
        {
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
        },
    ],
    nodes: [
        {
            nodeId: `${nodeId}`,
            implementation: {
                kind: `workflow`,
                workflowUri: `${name}-declaration`,
            },
            inputPipes: [],
        },
    ],
};
