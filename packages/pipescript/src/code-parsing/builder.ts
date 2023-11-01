import ts from 'typescript';

import { PipescriptNode, PipescriptPipeValue, PipescriptType, PipescriptWorkflow } from '../types';

export type WorkflowBuilder = {
    workflow: Omit<Required<PipescriptWorkflow>, `tree` | `body`> & {
        body: { kind: `nodes`; nodes: PipescriptNode[] };
    };
    getNextNodeId: () => string;
    findNodeSource: (varName: string, varType: PipescriptType) => undefined | PipescriptNode;
    findPipeSource: (varName: string, varType: PipescriptType) => PipescriptPipeValue;
    file: ts.SourceFile;
    typeChecker: ts.TypeChecker;
    pushScope: () => void;
    popScope: () => PipescriptNode[];
};
export const createWorkflowBuilder = (
    workflowUri: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
): WorkflowBuilder => {
    let nextNodeId = 1;
    const getNextNodeId = () => {
        return `${workflowUri}:${nextNodeId++}`;
    };

    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptNode[] = [];
    const scopes = [] as PipescriptNode[][];
    const nodesOutOfScope = new Set<PipescriptNode>();

    const workflow = {
        workflowUri,
        name: workflowUri,
        inputs: [] as PipescriptWorkflow[`inputs`],
        outputs,
        workflows,
        body: { kind: `nodes`, nodes },
    } satisfies Omit<Required<PipescriptWorkflow>, `tree`>;

    const findNodeSource = (varName: string, varType: PipescriptType) => {
        const node = nodes
            .filter(x => !nodesOutOfScope.has(x))
            .findLast(x => {
                const workflow = workflows.find(w => w.workflowUri === x.workflowUri);
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
            workflowInputName: varName,
        };
    };

    const builder = {
        workflow,
        getNextNodeId,
        findNodeSource,
        findPipeSource,
        file,
        typeChecker,
        pushScope: () => {
            const newNodes = nodes.filter(
                x => !nodesOutOfScope.has(x) && !scopes.some(s => s.includes(x)),
            );
            scopes.push(newNodes);
        },
        popScope: () => {
            const topScopeNodes = scopes.pop() ?? [];
            topScopeNodes.forEach(x => nodesOutOfScope.add(x));
            return topScopeNodes;
        },
    };

    return builder;
};
