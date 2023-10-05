import { describe, expect, it } from 'bun:test';

import { convertTypescriptToPipescript } from '../core';
import { PipescriptNode, PipescriptWorkflow } from '../types';

const expectSingleCodeFileWorkflow = (
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

const expectProjectWorkflow = (
    files: { filename: string; code: string }[],
    workflow: PipescriptWorkflow,
) => {
    expect(convertTypescriptToPipescript(files)).toEqual(workflow);
};

describe(`simple files`, () => {
    const expectedConstantDeclarationWorkflow = (
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

    const expectedConstantDeclarationNode = (name: string, nodeId: number): PipescriptNode => {
        return {
            nodeId: `${nodeId}`,
            implementation: {
                kind: `workflow`,
                workflowUri: expectedConstantDeclarationWorkflow(name, 42).workflowUri,
            },
            inputPipes: [],
        };
    };

    it(`should parse a const value`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
const answer = 42;
        `,
            {
                workflowUri: `file.ts`,
                name: `file.ts`,
                inputs: [],
                outputs: [],
                workflows: [expectedConstantDeclarationWorkflow(`answer`, 42)],
                nodes: [expectedConstantDeclarationNode(`answer`, 1)],
            },
        );
    });

    it(`should parse an exported const value`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
export const answer = 42;
        `,
            {
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
                workflows: [expectedConstantDeclarationWorkflow(`answer`, 42)],
                nodes: [expectedConstantDeclarationNode(`answer`, 1)],
            },
        );
    });

    it(`should parse a const value that is later exported`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
const answer = 42;
export { answer };
        `,
            {
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
                workflows: [expectedConstantDeclarationWorkflow(`answer`, 42)],
                nodes: [expectedConstantDeclarationNode(`answer`, 1)],
            },
        );
    });

    it(`should parse a const value that is exported before declaration`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
export { answer };
const answer = 42;
        `,
            {
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
                workflows: [expectedConstantDeclarationWorkflow(`answer`, 42)],
                nodes: [expectedConstantDeclarationNode(`answer`, 1)],
            },
        );
    });

    it(`should parse multiple declarations exported before in different order`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
export { notAnswer, answer };
const answer = 42;
const notAnswer = 43;
        `,
            {
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
                    expectedConstantDeclarationWorkflow(`answer`, 42),
                    expectedConstantDeclarationWorkflow(`notAnswer`, 43),
                ],
                nodes: [
                    expectedConstantDeclarationNode(`answer`, 1),
                    expectedConstantDeclarationNode(`notAnswer`, 2),
                ],
            },
        );
    });

    //     it(`should parse assignments`, () => {
    //         expectSingleCodeFileWorkflow(
    //             `file.ts`,
    //             `
    // const a: number = 42;
    // export const b = a;
    //         `,
    //             {
    //                 workflowUri: `file.ts`,
    //                 name: `file.ts`,
    //                 inputs: [],
    //                 outputs: [
    //                     {
    //                         name: `b`,
    //                         type: {
    //                             kind: `simple`,
    //                             type: `int`,
    //                         },
    //                     },
    //                 ],
    //                 outputPipes: [
    //                     {
    //                         name: `b`,
    //                         kind: `node`,
    //                         sourceNodeId: `2`,
    //                         sourceNodeOutputName: `b`,
    //                     },
    //                 ],
    //                 workflows: [],
    //                 nodes: [
    //                     {
    //                         nodeId: `1`,
    //                         inputPipes: [],
    //                         implementation: {
    //                             kind: `data`,
    //                             output: {
    //                                 name: `data`,
    //                                 type: {
    //                                     kind: `simple`,
    //                                     type: `int`,
    //                                 },
    //                             },
    //                             json: JSON.stringify(42),
    //                         },
    //                     },
    //                     {
    //                         nodeId: `2`,
    //                         inputPipes: [
    //                             {
    //                                 name: `a`,
    //                                 kind: `node`,
    //                                 sourceNodeId: `1`,
    //                                 sourceNodeOutputName: `data`,
    //                             },
    //                         ],
    //                         implementation: {
    //                             kind: `assignment`,
    //                         },
    //                     },
    //                 ],
    //             },
    //         );
    //     });
});
