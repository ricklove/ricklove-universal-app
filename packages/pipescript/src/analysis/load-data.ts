import { PipescriptNode, PipescriptPipe, PipescriptPipeValue, PipescriptWorkflow } from '../types';

export const loadRuntime = (workflow: PipescriptWorkflow) => {
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

    const context: LoaderContext = {
        allWorkflows,
        allWorkflowsMap: new Map(allWorkflows.map(x => [x.workflowUri, x])),
        allNodes,
        allNodesMap: new Map(allNodes.map(x => [x.nodeId, x])),
        allPipes,
    };

    workflow.workflows?.forEach(w => {
        loadRuntime_workflow(w, workflow, context);
    });
};

type LoaderContext = {
    allWorkflows: PipescriptWorkflow[];
    allWorkflowsMap: Map<string, PipescriptWorkflow>;
    allNodes: PipescriptNode[];
    allNodesMap: Map<string, PipescriptNode>;
    allPipes: PipescriptPipeValue[];
};

const loadRuntime_workflow = (
    workflow: PipescriptWorkflow,
    container: PipescriptWorkflow,
    context: LoaderContext,
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
            pipes: context.allPipes.filter(
                p =>
                    p.runtime?.source.kind === `workflow-inputs`
                    && p.runtime.source.workflowInputs.find(y => y === x),
            ),
        };
    });
};

const loadRuntime_node = (
    node: PipescriptNode,
    container: PipescriptWorkflow,
    context: LoaderContext,
) => {
    const workflow = context.allWorkflowsMap.get(node.implementation.workflowUri);
    if (!workflow) {
        throw Error(`missing workflow ${node.implementation.workflowUri}`);
    }
    node.implementation.runtime = {
        workflow,
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
    context: LoaderContext,
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
        const workflowInputs = pipe.workflowInputNames
            .map(x => container.inputs.find(y => y.name === x))
            .filter(x => x)
            .map(x => x!);

        pipe.runtime = {
            destination,
            source: {
                kind: `workflow-inputs`,
                workflowInputs,
            },
        };
        return;
    }

    if (pipe.kind === `data`) {
        // No runtime
        return;
    }
    return;
};
