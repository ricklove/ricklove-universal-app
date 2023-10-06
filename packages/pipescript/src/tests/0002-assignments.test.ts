import { describe, it } from 'bun:test';

import { expectSingleCodeFileWorkflow } from './_utils';
import {
    expectedDeclarationFromLiteralNode,
    expectedDeclarationFromLiteralWorkflow,
    expectedDeclarationFromVariableNode,
    expectedDeclarationFromVariableWorkflow,
} from '../data/_utils';

describe(`assignments`, () => {
    it(`should assign a variable`, () => {
        expectSingleCodeFileWorkflow(
            `file.ts`,
            `
const a = 42;
const b = a;
export { b };
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
            },
        );
    });
});
