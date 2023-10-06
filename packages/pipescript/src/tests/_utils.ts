import { expect } from 'bun:test';

import { convertTypescriptToPipescript } from '../core';
import { PipescriptWorkflow } from '../types';

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
