import { describe, expect, it } from 'bun:test';

import { convertTypescriptToPipescript } from '../core';
import { PipescriptWorkflow } from '../types';

const expectSingleCodeFileWorkflow = (
    filename: string,
    code: string,
    workflow: PipescriptWorkflow,
) => {
    expect(convertTypescriptToPipescript([{ filename, code }]).workflows[0]).toEqual(workflow);
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
                    kind: `data`,
                    json: JSON.stringify(42),
                },
            ],
            workflows: [],
            nodes: [],
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
                        kind: `data`,
                        json: JSON.stringify(42),
                    },
                    {
                        name: `b`,
                        kind: `data`,
                        json: JSON.stringify(43),
                    },
                    {
                        name: `c`,
                        kind: `data`,
                        json: JSON.stringify(44),
                    },
                ],
                workflows: [],
                nodes: [],
            },
        );
    });
});
