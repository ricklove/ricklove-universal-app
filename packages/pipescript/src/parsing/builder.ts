import ts from 'typescript';

import { PipescriptWorkflow } from '../types';

export const createBuilder = (
    filename: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
) => {
    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptWorkflow[`nodes`] = [];

    const result = {
        workflowUri: filename,
        name: filename,
        inputs: [],
        outputs,
        workflows,
        nodes,
    };

    const findNodeSource = (varName: string) => {
        const node = nodes.findLast(x => {
            const implementation = x.implementation;
            if (implementation.kind !== `workflow`) {
                return false;
            }

            const workflow = workflows.find(w => w.workflowUri === implementation.workflowUri);
            const workflowOutput = workflow?.outputs.find(o => o.name === varName);

            return !!workflowOutput;
        });
        return node;
    };

    const builder = {
        workflow: result,
        nextNodeId: 1,
        findNodeSource,
        file,
        typeChecker,
    };

    return builder;
};
export type WorkflowBuilder = ReturnType<typeof createBuilder>;
