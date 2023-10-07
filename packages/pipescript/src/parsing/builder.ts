import ts from 'typescript';

import { PipescriptType, PipescriptWorkflow } from '../types';

export const createWorkflowBuilder = (
    workflowUri: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
    autoCapture: boolean,
) => {
    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptWorkflow[`nodes`] = [];

    const workflow: Required<PipescriptWorkflow> = {
        workflowUri,
        name: workflowUri,
        inputs: [],
        outputs,
        workflows,
        nodes,
    };

    const findNodeSource = (varName: string, varType: PipescriptType) => {
        const node = nodes.findLast(x => {
            const implementation = x.implementation;
            if (implementation.kind !== `workflow`) {
                return false;
            }

            const workflow = workflows.find(w => w.workflowUri === implementation.workflowUri);
            const workflowOutput = workflow?.outputs.find(o => o.name === varName);

            return !!workflowOutput;
        });

        if (!node && autoCapture) {
            workflow.inputs.push({
                name: varName,
                type: varType,
            });
            workflow.outputs.push({
                name: varName,
                type: varType,
            });
        }

        return node;
    };

    const builder = {
        workflow,
        nextNodeId: 1,
        findNodeSource,
        file,
        typeChecker,
    };

    return builder;
};
export type WorkflowBuilder = ReturnType<typeof createWorkflowBuilder>;
