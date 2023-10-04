import { describe, expect, it } from 'bun:test';

import { convertTypescriptToPipescript } from '../core';
import { PipescriptWorkflow } from '../types';

const expectSingleCodeFileWorkflow = (
    filename: string,
    code: string,
    workflow: PipescriptWorkflow,
) => {
    const actual = convertTypescriptToPipescript([{ filename, code }]).workflows[0];
    const expected = workflow;
    expect(actual).toEqual(expected);
};

const expectProjectWorkflow = (
    files: { filename: string; code: string }[],
    workflow: PipescriptWorkflow,
) => {
    expect(convertTypescriptToPipescript(files)).toEqual(workflow);
};

describe(`simple files`, () => {
    it(`should parse an exported const value`, () => {
        expectSingleCodeFileWorkflow(`file.ts`, `export const meaning = 42;`, {
            workflowUri: `file.ts`,
            name: `file.ts`,
            inputs: [],
            outputs: [
                {
                    name: `meaning`,
                    type: {
                        kind: `simple`,
                        type: `int`,
                    },
                },
            ],
            outputPipes: [
                {
                    name: `meaning`,
                    kind: `node`,
                    sourceNodeId: `1`,
                    sourceNodeOutputName: `data`,
                },
            ],
            workflows: [],
            nodes: [
                {
                    nodeId: `1`,
                    implementation: {
                        kind: `data`,
                        output: {
                            name: `data`,
                            type: {
                                kind: `simple`,
                                type: `int`,
                            },
                        },
                        json: JSON.stringify(42),
                    },
                    inputPipes: [],
                },
            ],
        });
    });

    it(`should parse 3 exported const values`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
        export const a = 42;
        export const b = 43;
        export const c = 44;
        `,
            {
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
                    },
                    {
                        name: `b`,
                        type: {
                            kind: `simple`,
                            type: `int`,
                        },
                    },
                    {
                        name: `c`,
                        type: {
                            kind: `simple`,
                            type: `int`,
                        },
                    },
                ],
                outputPipes: [
                    {
                        name: `a`,
                        kind: `node`,
                        sourceNodeId: `1`,
                        sourceNodeOutputName: `data`,
                    },
                    {
                        name: `b`,
                        kind: `node`,
                        sourceNodeId: `2`,
                        sourceNodeOutputName: `data`,
                    },
                    {
                        name: `c`,
                        kind: `node`,
                        sourceNodeId: `3`,
                        sourceNodeOutputName: `data`,
                    },
                ],
                workflows: [],
                nodes: [
                    {
                        nodeId: `1`,
                        inputPipes: [],
                        implementation: {
                            kind: `data`,
                            output: {
                                name: `data`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            json: JSON.stringify(42),
                        },
                    },
                    {
                        nodeId: `2`,
                        inputPipes: [],
                        implementation: {
                            kind: `data`,
                            output: {
                                name: `data`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            json: JSON.stringify(43),
                        },
                    },
                    {
                        nodeId: `3`,
                        inputPipes: [],
                        implementation: {
                            kind: `data`,
                            output: {
                                name: `data`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            json: JSON.stringify(44),
                        },
                    },
                ],
            },
        );
    });

    it(`should parse 2 files`, () => {
        expectProjectWorkflow(
            [
                {
                    filename: `file.ts`,
                    code: `
        export const a = 42;
        export const b = 43;
        export const c = 44;
        `,
                },
                {
                    filename: `file2.ts`,
                    code: `
        export const a = 42;
        export const b = 43;
        export const c = 44;
        `,
                },
            ],
            {
                workflowUri: ``,
                name: ``,
                inputs: [],
                outputs: [],
                outputPipes: [],
                workflows: [
                    {
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
                            },
                            {
                                name: `b`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            {
                                name: `c`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                        ],
                        outputPipes: [
                            {
                                name: `a`,
                                kind: `node`,
                                sourceNodeId: `1`,
                                sourceNodeOutputName: `data`,
                            },
                            {
                                name: `b`,
                                kind: `node`,
                                sourceNodeId: `2`,
                                sourceNodeOutputName: `data`,
                            },
                            {
                                name: `c`,
                                kind: `node`,
                                sourceNodeId: `3`,
                                sourceNodeOutputName: `data`,
                            },
                        ],
                        workflows: [],
                        nodes: [
                            {
                                nodeId: `1`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(42),
                                },
                            },
                            {
                                nodeId: `2`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(43),
                                },
                            },
                            {
                                nodeId: `3`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(44),
                                },
                            },
                        ],
                    },
                    {
                        workflowUri: `file2.ts`,
                        name: `file2.ts`,
                        inputs: [],
                        outputs: [
                            {
                                name: `a`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            {
                                name: `b`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            {
                                name: `c`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                        ],
                        outputPipes: [
                            {
                                name: `a`,
                                kind: `node`,
                                sourceNodeId: `1`,
                                sourceNodeOutputName: `data`,
                            },
                            {
                                name: `b`,
                                kind: `node`,
                                sourceNodeId: `2`,
                                sourceNodeOutputName: `data`,
                            },
                            {
                                name: `c`,
                                kind: `node`,
                                sourceNodeId: `3`,
                                sourceNodeOutputName: `data`,
                            },
                        ],
                        workflows: [],
                        nodes: [
                            {
                                nodeId: `1`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(42),
                                },
                            },
                            {
                                nodeId: `2`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(43),
                                },
                            },
                            {
                                nodeId: `3`,
                                inputPipes: [],
                                implementation: {
                                    kind: `data`,
                                    output: {
                                        name: `data`,
                                        type: {
                                            kind: `simple`,
                                            type: `int`,
                                        },
                                    },
                                    json: JSON.stringify(44),
                                },
                            },
                        ],
                    },
                ],
                nodes: [],
            },
        );
    });

    it(`should parse assignments`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
        const a: number = 42;
        export const b = a;
        `,
            {
                workflowUri: `file.ts`,
                name: `file.ts`,
                inputs: [],
                outputs: [
                    {
                        name: `b`,
                        type: {
                            kind: `simple`,
                            type: `int`,
                        },
                    },
                ],
                outputPipes: [
                    {
                        name: `b`,
                        kind: `node`,
                        sourceNodeId: `2`,
                        sourceNodeOutputName: `b`,
                    },
                ],
                workflows: [],
                nodes: [
                    {
                        nodeId: `1`,
                        inputPipes: [],
                        implementation: {
                            kind: `data`,
                            output: {
                                name: `data`,
                                type: {
                                    kind: `simple`,
                                    type: `int`,
                                },
                            },
                            json: JSON.stringify(42),
                        },
                    },
                    {
                        nodeId: `2`,
                        inputPipes: [
                            {
                                name: `a`,
                                kind: `node`,
                                sourceNodeId: `1`,
                                sourceNodeOutputName: `data`,
                            },
                        ],
                        implementation: {
                            kind: `assignment`,
                        },
                    },
                ],
            },
        );
    });
});
