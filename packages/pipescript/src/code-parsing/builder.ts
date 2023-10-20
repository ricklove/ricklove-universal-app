import ts from 'typescript';

import { PipescriptNode, PipescriptPipeValue, PipescriptType, PipescriptWorkflow } from '../types';

export const createWorkflowBuilder = (
    workflowUri: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
) => {
    let nextNodeId = 1;
    const getNextNodeId = () => {
        return `${workflowUri}:${nextNodeId++}`;
    };

    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptNode[] = [];

    const workflow = {
        workflowUri,
        name: workflowUri,
        inputs: [] as PipescriptWorkflow[`inputs`],
        outputs,
        workflows,
        body: { kind: `nodes`, nodes },
    } satisfies Omit<Required<PipescriptWorkflow>, `runtime`>;

    const findNodeSource = (varName: string, varType: PipescriptType) => {
        const node = nodes.findLast(x => {
            const implementation = x.implementation;
            const workflow = workflows.find(w => w.workflowUri === implementation.workflowUri);
            const workflowOutput = workflow?.outputs.find(o => o.name === varName);

            return !!workflowOutput;
        });

        return node;
    };

    const findPipeSource = (varName: string, varType: PipescriptType): PipescriptPipeValue => {
        const nodeSource = findNodeSource(varName, varType);

        if (nodeSource) {
            return {
                kind: `node`,
                sourceNodeId: nodeSource.nodeId,
                sourceNodeOutputName: varName,
            };
        }

        if (!workflow.inputs.find(x => x.name === varName)) {
            workflow.inputs.push({
                name: varName,
                type: varType,
            });
            workflow.outputs.push({
                name: varName,
                type: varType,
            });
        }

        return {
            kind: `workflow-input`,
            workflowInputNames: [varName],
        };
    };

    const builder = {
        workflow,
        getNextNodeId,
        findNodeSource,
        findPipeSource,
        file,
        typeChecker,
    };

    return builder;
};
export type WorkflowBuilder = ReturnType<typeof createWorkflowBuilder>;
