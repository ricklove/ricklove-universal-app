import { describe, it } from 'bun:test';

import {
    expectSingleCodeFileWorkflow,
    expectedDeclarationFromLiteralNode,
    expectedDeclarationFromLiteralWorkflow,
} from './_utils';

describe(`declarations`, () => {
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
                workflows: [expectedDeclarationFromLiteralWorkflow(`answer`, 42)],
                nodes: [expectedDeclarationFromLiteralNode(`answer`, 1)],
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
                workflows: [expectedDeclarationFromLiteralWorkflow(`answer`, 42)],
                nodes: [expectedDeclarationFromLiteralNode(`answer`, 1)],
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
                workflows: [expectedDeclarationFromLiteralWorkflow(`answer`, 42)],
                nodes: [expectedDeclarationFromLiteralNode(`answer`, 1)],
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
                workflows: [expectedDeclarationFromLiteralWorkflow(`answer`, 42)],
                nodes: [expectedDeclarationFromLiteralNode(`answer`, 1)],
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
                    expectedDeclarationFromLiteralWorkflow(`answer`, 42),
                    expectedDeclarationFromLiteralWorkflow(`notAnswer`, 43),
                ],
                nodes: [
                    expectedDeclarationFromLiteralNode(`answer`, 1),
                    expectedDeclarationFromLiteralNode(`notAnswer`, 2),
                ],
            },
        );
    });
});
