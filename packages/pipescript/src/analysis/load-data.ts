import {
    PipescriptBuiltinOperator,
    PipescriptNode,
    PipescriptNodeInstance,
    PipescriptNodeInstance_Operator,
    PipescriptNodePipeConnectionInputInstance,
    PipescriptNodePipeConnectionOutputInstance,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptPipeValueInstance,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';
import { calculateNodeRun, calculateOperator } from './calculate-run';

export const loadRuntime = (
    workflowRaw: PipescriptWorkflow,
): {
    workflow: PipescriptWorkflow;
    context: PipescriptRuntimeContext;
    rootNodeInstances: PipescriptNodeInstance[];
} => {
    const workflow = workflowRaw as PipescriptWorkflow;
    // workflow.tree = {
    //     container: undefined,
    //     usages: [],
    // };

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
        allNodeInstances: [],
    };

    const rootNodeInstances =
        workflow.body.nodes?.map(node => createNodeInstances(node, undefined, context)) ?? [];

    context.allNodeInstances.forEach(node => {
        loadNodeConnections_inflows(node);
    });

    const allInflowPipes = context.allNodeInstances
        .flatMap(x => [...x.inputs.map(y => y.inflowPipe), ...x.outputs.map(y => y.inflowPipe)])
        .filter(x => x)
        .map(x => x!);
    context.allNodeInstances.forEach(node => {
        loadNodeConnections_outflows(node, allInflowPipes);
    });

    calculateNodeRun(context.allNodeInstances);

    return {
        workflow,
        context,
        rootNodeInstances,
    };
};

export type PipescriptRuntimeContext = {
    allWorkflows: PipescriptWorkflow[];
    allWorkflowsMap: Map<string, PipescriptWorkflow>;
    allNodes: PipescriptNode[];
    allNodesMap: Map<string, PipescriptNode>;
    allPipes: PipescriptPipeValue[];

    // created during createNodeInstances
    allNodeInstances: PipescriptNodeInstance[];
};

const createNodeInstances = (
    node: PipescriptNode,
    parent: undefined | PipescriptNodeInstance,
    context: PipescriptRuntimeContext,
): PipescriptNodeInstance => {
    const workflow = context.allWorkflowsMap.get(node.workflowUri);
    if (!workflow) {
        throw Error(`missing workflow ${node.workflowUri}`);
    }
    // node.tree = {
    //     workflow,
    // };

    const instance: PipescriptNodeInstance = {
        key: `${context.allNodeInstances.length}`,
        node,
        workflow,
        inputs: [],
        outputs: [],
        parent,
        children: [],
    };
    context.allNodeInstances.push(instance);

    // Create connections (without pipes)
    instance.inputs = workflow.inputs.map(workflowInput => ({
        key: `${context.allNodeInstances.length}:${workflowInput.name}:workflowInput`,
        nodeInstance: instance,
        kind: `workflow-input`,
        workflowInput,
        name: workflowInput.name,
        inflowPipe: undefined,
        outflowPipes: [],
    }));
    instance.outputs = workflow.outputs.map(workflowOutput => ({
        key: `${context.allNodeInstances.length}:${workflowOutput.name}:workflowOutput`,
        nodeInstance: instance,
        kind: `workflow-output`,
        workflowOutput,
        name: workflowOutput.name,
        inflowPipe: undefined,
        outflowPipes: [],
    }));

    // TODO: handle recursive/cyclical workflows
    instance.children =
        workflow.body.nodes?.map(n => createNodeInstances(n, instance, context)) ?? [];

    if (workflow.body.kind === `operator`) {
        instance.operator = workflow.body.operator;
    }

    return instance;
};

const loadNodeConnections_inflows = (nodeInstance: PipescriptNodeInstance) => {
    // connect inflows
    nodeInstance.inputs.forEach(input => {
        const nodeInput = nodeInstance.node.inputPipes.find(x => x.name === input.name);
        if (!nodeInput) {
            return;
        }

        const getInflowSource = (): undefined | PipescriptPipeValueInstance[`source`] => {
            const pipeSource = nodeInput;
            if (pipeSource.kind === `data`) {
                return {
                    kind: `data`,
                    json: pipeSource.json,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `workflow-operator`) {
                return {
                    kind: `operator-output`,
                    nodeInstance: nodeInstance as PipescriptNodeInstance_Operator,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `workflow-input`) {
                const nodeWorkflowInput = nodeInstance.inputs.find(x => x.name === pipeSource.name);
                if (!nodeWorkflowInput) {
                    console.warn(
                        `loadNodeConnections: getInflowSource: Missing nodeWorkflowInput ${pipeSource.name}`,
                    );
                    return undefined;
                }
                return {
                    kind: `input`,
                    input: nodeWorkflowInput,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `node`) {
                const peerNodeOutput = nodeInstance.parent?.children
                    .find(n2 => n2.node.nodeId === pipeSource.sourceNodeId)
                    ?.outputs.find(x => x.name === pipeSource.sourceNodeOutputName);
                if (!peerNodeOutput) {
                    console.warn(
                        `loadNodeConnections: getInflowSource: Missing peerNodeOutput ${pipeSource.name}`,
                        {
                            pipeSource,
                            childrenOutputs: nodeInstance.children.map(x =>
                                x.outputs.map(o => ({
                                    key: o.key,
                                    name: o.name,
                                    nodeId: o.nodeInstance.node.nodeId,
                                })),
                            ),
                        },
                    );
                    return undefined;
                }
                return {
                    kind: `output`,
                    output: peerNodeOutput,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            console.warn(
                `loadNodeConnections: unknown pipeSource ${(pipeSource as { kind: string }).kind}`,
            );
            return undefined;
        };

        const source = getInflowSource();
        if (!source) {
            return;
        }

        input.inflowPipe = {
            key: `${input.key}:pipe`,
            pipe: nodeInput,
            source,
            destination: {
                kind: `input`,
                input: input,
            },
        };
    });

    nodeInstance.outputs.forEach(output => {
        const workflowOutput = nodeInstance.workflow.outputs.find(x => x.name === output.name);
        const workflowOutputPipe = workflowOutput?.pipe;
        if (!workflowOutputPipe) {
            return;
        }

        const getInflowSource = (): undefined | PipescriptPipeValueInstance[`source`] => {
            const pipeSource = workflowOutputPipe;
            const { name: pipeSourceName } = workflowOutput;
            if (pipeSource.kind === `data`) {
                return {
                    kind: `data`,
                    json: pipeSource.json,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `workflow-operator`) {
                return {
                    kind: `operator-output`,
                    nodeInstance: nodeInstance as PipescriptNodeInstance_Operator,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `workflow-input`) {
                const nodeWorkflowInput = nodeInstance.inputs.find(x => x.name === pipeSourceName);
                if (!nodeWorkflowInput) {
                    console.warn(
                        `loadNodeConnections: getInflowSource: Missing nodeWorkflowInput ${pipeSourceName}`,
                    );
                    return undefined;
                }
                return {
                    kind: `input`,
                    input: nodeWorkflowInput,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            if (pipeSource.kind === `node`) {
                const innerNodeOutput = nodeInstance.children
                    .find(n2 => n2.node.nodeId === pipeSource.sourceNodeId)
                    ?.outputs.find(x => x.name === pipeSourceName);
                if (!innerNodeOutput) {
                    console.warn(
                        `loadNodeConnections: getInflowSource: Missing peerNodeOutput ${pipeSourceName}`,
                    );
                    return undefined;
                }
                return {
                    kind: `output`,
                    output: innerNodeOutput,
                } satisfies PipescriptPipeValueInstance[`source`];
            }
            console.warn(
                `loadNodeConnections: unknown pipeSource ${(pipeSource as { kind: string }).kind}`,
            );
            return undefined;
        };

        const source = getInflowSource();
        if (!source) {
            return;
        }

        output.inflowPipe = {
            key: `${output.key}:pipe`,
            pipe: workflowOutputPipe,
            source,
            destination: {
                kind: `output`,
                output: output,
            },
        };
    });
};

const loadNodeConnections_outflows = (
    nodeInstance: PipescriptNodeInstance,
    allInflowPipes: PipescriptPipeValueInstance[],
) => {
    nodeInstance.inputs.forEach(input => {
        input.outflowPipes = allInflowPipes.filter(
            x => x.source.kind === `input` && x.source.input === input,
        );
    });
    nodeInstance.outputs.forEach(output => {
        output.outflowPipes = allInflowPipes.filter(
            x => x.source.kind === `output` && x.source.output === output,
        );
    });
};
