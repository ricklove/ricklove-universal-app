import { PipescriptNode, PipescriptPipe, PipescriptPipeValue, PipescriptWorkflow } from '../types';

export const loadRuntime = (
    workflowRaw: PipescriptWorkflow,
): { workflow: PipescriptWorkflow; context: PipescriptRuntimeContext } => {
    const workflow = workflowRaw as PipescriptWorkflow;
    workflow.runtime = {
        container: undefined,
        usages: [],
    };

    const getWorkflowsRecursive = (w: PipescriptWorkflow): PipescriptWorkflow[] => {
        return [w, ...(w.workflows?.flatMap(w2 => getWorkflowsRecursive(w2)) ?? [])];
    };

    const allWorkflows = getWorkflowsRecursive(workflow);
    const allNodes = allWorkflows.flatMap(w => (w.body.kind === `nodes` ? w.body.nodes : []));
    const allPipes_workflowOutputs = allWorkflows
        .flatMap(w => w.outputs.flatMap(o => o.pipe))
        .filter(x => x)
        .map(x => x!);
    const allPipes_nodeInputs = allNodes
        .flatMap(n => n.inputPipes)
        .filter(x => x)
        .map(x => x!);
    const allPipes = [...allPipes_workflowOutputs, ...allPipes_nodeInputs];

    const context: PipescriptRuntimeContext = {
        allWorkflows,
        allWorkflowsMap: new Map(allWorkflows.map(x => [x.workflowUri, x])),
        allNodes,
        allNodesMap: new Map(allNodes.map(x => [x.nodeId, x])),
        allPipes,
    };

    workflow.workflows?.forEach(w => {
        loadRuntime_workflow(w, workflow, context);
    });

    return {
        workflow,
        context,
    };
};

export type PipescriptRuntimeContext = {
    allWorkflows: PipescriptWorkflow[];
    allWorkflowsMap: Map<string, PipescriptWorkflow>;
    allNodes: PipescriptNode[];
    allNodesMap: Map<string, PipescriptNode>;
    allPipes: PipescriptPipeValue[];
};

const loadRuntime_workflow = (
    workflow: PipescriptWorkflow,
    container: PipescriptWorkflow,
    context: PipescriptRuntimeContext,
) => {
    workflow.runtime = {
        container,
        usages: context.allNodes.filter(n => n.implementation.workflowUri === workflow.workflowUri),
    };

    workflow.outputs.forEach(x => {
        x.runtime = {
            workflow,
        };

        if (x.pipe) {
            loadRuntime_pipe(
                x.pipe,
                {
                    kind: `workflow-output`,
                    name: x.name,
                    workflowOutput: x,
                },
                workflow,
                context,
            );
        }
    });

    if (workflow.body.kind === `nodes`) {
        workflow.body.nodes.forEach(n => {
            loadRuntime_node(n, workflow, context);
        });
    }

    workflow.workflows?.forEach(w => {
        loadRuntime_workflow(w, workflow, context);
    });

    workflow.inputs.forEach(x => {
        x.runtime = {
            workflow,
            outflowPipes: context.allPipes.filter(
                p =>
                    p.runtime?.source.kind === `workflow-input`
                    && p.runtime.source.workflowInput === x,
            ),
        };
    });
};

const loadRuntime_node = (
    node: PipescriptNode,
    container: PipescriptWorkflow,
    context: PipescriptRuntimeContext,
) => {
    const workflow = context.allWorkflowsMap.get(node.implementation.workflowUri);
    if (!workflow) {
        throw Error(`missing workflow ${node.implementation.workflowUri}`);
    }
    node.implementation.runtime = {
        workflow,
        output:
            node.implementation.runtime?.workflow.outputs.map(output => ({
                output,
                outflowPipes: context.allPipes.filter(
                    p =>
                        p.runtime?.source.kind === `node-output`
                        && p.runtime.source.nodeWorkflowOutput === output,
                ),
            })) ?? [],
    };

    node.inputPipes.forEach(p =>
        loadRuntime_pipe(
            p,
            {
                kind: `node-input`,
                name: p.name,
                node: node,
                nodeWorkflowInput:
                    workflow.inputs.find(x => x.name === p.name)
                    || (() => {
                        throw new Error(`Missing workflow input ${p.name}`);
                    })(),
            },
            container,
            context,
        ),
    );
};

const loadRuntime_pipe = (
    pipe: PipescriptPipeValue,
    destination: Required<PipescriptPipeValue>[`runtime`][`destination`],
    container: PipescriptWorkflow,
    context: PipescriptRuntimeContext,
) => {
    if (pipe.kind === `node`) {
        const sourceNode = context.allNodesMap.get(pipe.sourceNodeId);
        const sourceNodeWorkflowOutput =
            context.allWorkflowsMap
                .get(sourceNode?.implementation.workflowUri ?? ``)
                ?.outputs.find(o => o.name === pipe.sourceNodeOutputName) || undefined;

        if (!sourceNode || !sourceNodeWorkflowOutput) {
            throw Error(`missing node output ${pipe.sourceNodeId} ${pipe.sourceNodeOutputName}`);
        }

        pipe.runtime = {
            destination,
            source: {
                kind: `node-output`,
                name: pipe.sourceNodeOutputName,
                node: sourceNode,
                nodeWorkflowOutput: sourceNodeWorkflowOutput,
            },
        };
        return;
    }
    if (pipe.kind === `workflow-input`) {
        const workflowInput = container.inputs.find(y => y.name === pipe.workflowInputName);

        if (!workflowInput) {
            throw Error(`missing workflow input ${pipe.workflowInputName}`);
        }

        pipe.runtime = {
            destination,
            source: {
                kind: `workflow-input`,
                workflowInput,
            },
        };
        return;
    }

    if (pipe.kind === `workflow-operator`) {
        // No runtime
        return;
    }

    if (pipe.kind === `data`) {
        // No runtime
        return;
    }
    return;
};
