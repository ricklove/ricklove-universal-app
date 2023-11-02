import ts from 'typescript';

import {
    PipescriptNode,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptWorkflow,
    PipescriptWorkflowBodyNodes,
} from '../types';

export type WorkflowBuilder = {
    workflow: Omit<Required<PipescriptWorkflow>, `tree` | `body`> & {
        body: PipescriptWorkflowBodyNodes;
    };
    getNextNodeId: () => string;
    findNodeSource: (varName: string, varType: PipescriptType) => undefined | PipescriptNode;
    findPipeSource: (
        varName: string,
        varType: PipescriptType,
        debug?: boolean,
    ) => PipescriptPipeValue;
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
    const higherScopes = [] as PipescriptNode[][];
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

    const findPipeSource = (
        varName: string,
        varType: PipescriptType,
        debug?: boolean,
    ): PipescriptPipeValue => {
        const nodeSource = findNodeSource(varName, varType);

        if (debug) {
            console.log(`findPipeSource`, {
                varName,
                varType,
                nodeSource,
                nodesOutOfScope: [...nodesOutOfScope].map(x => x.workflowUri),
                nodes: [...nodes].map(x => x.workflowUri),
            });
        }

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
            // if (!higherScopes.length) {
            //     workflow.outputs.push({
            //         name: varName,
            //         type: varType,
            //         pipe:{
            //             kind:`node`,
            //             sourceNodeId:
            //         },
            //     });
            // }
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
                x => !nodesOutOfScope.has(x) && !higherScopes.some(s => s.includes(x)),
            );
            higherScopes.push(newNodes);

            console.log(`pushScope`, {
                newNodes: newNodes.map(x => x.workflowUri),
                nodesOutOfScope: [...nodesOutOfScope].map(x => x.workflowUri),
                nodes: nodes.map(x => x.workflowUri),
            });
        },
        popScope: () => {
            const newNodes = nodes.filter(
                x => !nodesOutOfScope.has(x) && !higherScopes.some(s => s.includes(x)),
            );
            const topScopeNodes = newNodes;
            topScopeNodes.forEach(x => nodesOutOfScope.add(x));
            higherScopes.pop();

            console.log(`popScope`, {
                topScopeNodes: topScopeNodes.map(x => x.workflowUri),
                nodesOutOfScope: [...nodesOutOfScope].map(x => x.workflowUri),
                nodes: nodes.map(x => x.workflowUri),
            });
            return topScopeNodes;
        },
    };

    return builder;
};
