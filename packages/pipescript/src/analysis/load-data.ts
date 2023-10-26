import {
    PipescriptNode,
    PipescriptNodeInstance,
    PipescriptNodeOperatorInstance,
    PipescriptNodePipeConnectionInputInstance,
    PipescriptNodePipeConnectionOutputInstance,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptPipeValueInstance,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

export const loadRuntime = (
    workflowRaw: PipescriptWorkflow,
): {
    workflow: PipescriptWorkflow;
    context: PipescriptRuntimeContext;
    rootNodeInstance: PipescriptNodeInstance;
} => {
    const workflow = workflowRaw as PipescriptWorkflow;
    workflow.tree = {
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

    // workflow.workflows?.forEach(w => {
    //     loadRuntime_workflow(w, workflow, context);
    // });

    const mainNode = workflow.body.nodes?.[0];
    const mainWorkflow = context.allWorkflowsMap.get(mainNode?.workflowUri ?? ``);

    if (!mainNode) {
        throw Error(`missing mainNode ${workflow.workflowUri}`);
    }
    if (!mainWorkflow) {
        throw Error(`missing mainWorkflow ${workflow.workflowUri}`);
    }

    const rootNodeInstance = createNodeInstances(mainNode, undefined, context);

    return {
        workflow,
        context,
        rootNodeInstance,
    };
};

export type PipescriptRuntimeContext = {
    allWorkflows: PipescriptWorkflow[];
    allWorkflowsMap: Map<string, PipescriptWorkflow>;
    allNodes: PipescriptNode[];
    allNodesMap: Map<string, PipescriptNode>;
    allPipes: PipescriptPipeValue[];
};

const createNodeInstances = (
    node: PipescriptNode,
    container: undefined | PipescriptNodeInstance,
    context: PipescriptRuntimeContext,
): PipescriptNodeInstance => {
    const workflow = context.allWorkflowsMap.get(node.workflowUri);
    if (!workflow) {
        throw Error(`missing workflow ${node.workflowUri}`);
    }
    node.tree = {
        workflow,
    };

    const instance: PipescriptNodeInstance = {
        node,
        workflow,
        inputs: [],
        outputs: [],
        children: [],
    };

    // Create connections (without pipes)
    instance.inputs = workflow.inputs.map(workflowInput => ({
        nodeInstance: instance,
        kind: `workflow-input`,
        workflowInput,
        name: workflowInput.name,
        inflowPipe: undefined,
        outflowPipes: [],
    }));
    instance.outputs = workflow.outputs.map(workflowOutput => ({
        nodeInstance: instance,
        kind: `workflow-output`,
        workflowOutput,
        name: workflowOutput.name,
        inflowPipe: undefined,
        outflowPipes: [],
    }));

    instance.children =
        workflow.body.nodes?.map(n => createNodeInstances(n, instance, context)) ?? [];

    if (workflow.body.kind === `operator`) {
        instance.operator = {
            nodeInstance: instance,
            operator: workflow.body.operator,
            // is this needed? - it should equal the node inputs and outputs
            inputs: workflow.inputs.map(workflowInput => ({
                nodeInstance: instance,
                kind: `workflow-input`,
                workflowInput,
                name: workflowInput.name,
                inflowPipe: undefined,
                outflowPipes: [],
            })),
            outputs: workflow.outputs.map(workflowOutput => ({
                nodeInstance: instance,
                kind: `workflow-output`,
                workflowOutput,
                name: workflowOutput.name,
                inflowPipe: undefined,
                outflowPipes: [],
            })),
        };
    }

    return instance;
};

// const loadRuntime_workflow = (
//     workflow: PipescriptWorkflow,
//     container: PipescriptWorkflow,
//     context: PipescriptRuntimeContext,
// ) => {
//     workflow.tree = {
//         container,
//         usages: context.allNodes.filter(n => n.workflowUri === workflow.workflowUri),
//     };

//     // workflow.outputs.forEach(x => {
//     //     // x.tree = {
//     //     //     workflow,
//     //     // };

//     //     if (x.pipe) {
//     //         loadRuntime_pipe(
//     //             x.pipe,
//     //             {
//     //                 kind: `workflow-output`,
//     //                 name: x.name,
//     //                 workflowOutput: x,
//     //             },
//     //             workflow,
//     //             context,
//     //         );
//     //     }
//     // });

//     if (workflow.body.kind === `nodes`) {
//         workflow.body.nodes.forEach(n => {
//             loadRuntime_node(n, workflow, context);
//         });
//     }

//     // workflow.workflows?.forEach(w => {
//     //     loadRuntime_workflow(w, workflow, context);
//     // });

//     // workflow.inputs.forEach(x => {
//     //     // x.runtime = {
//     //     //     workflow,
//     //     //     outflowPipes: context.allPipes.filter(
//     //     //         p =>
//     //     //             p.runtime?.source.kind === `workflow-input`
//     //     //             && p.runtime.source.workflowInput === x,
//     //     //     ),
//     //     // };
//     // });
// };

// const loadPipeContext: LoadPipeContext = {};

// instance.inputs = workflow.inputs.map(workflowInput => {
//     const nodeInput = node.inputPipes.find(x => workflowInput.name === x.name);
//     // if (!nodeInput) {
//     //     throw new Error(`missing nodeInput: ${workflow.workflowUri} ${workflowInput.name}`);
//     // }

//     // if (!container) {
//     //     throw new Error(`missing container for nodeInputs: ${workflow.workflowUri} ${x.name}`);
//     // }

//     const inputDestination: PipescriptPipeValueInstance[`destination`] =
//         workflow.body.kind === `operator`
//             ? {
//                   kind: `operator-input`,
//                   input: loadPipeContext.getOrCreateWorkflowOperatorInputInstance(workflow),
//               }
//             : {
//                   kind: ``,
//               };

//     return {
//         kind: `workflow-input`,
//         workflowInput,
//         name: workflowInput.name,
//         nodeInstance: instance,
//         inflowPipe: !nodeInput
//             ? undefined
//             : loadRuntime_pipe(nodeInput, inputDestination, workflow, loadPipeContext),
//         outflowPipes: [],
//     } satisfies PipescriptNodePipeConnectionInputInstance;
// });

// if (workflow.body.kind === `operator`) {
//     if (!container) {
//         throw new Error(`missing container for operator: ${workflow.workflowUri}`);
//     }

//     instance.operator = {};
// }

// input: {},
// output:
//     node.implementation.runtime?.workflow.outputs.map(output => ({
//         output,
//         outflowPipes: context.allPipes.filter(
//             p =>
//                 p.runtime?.source.kind === `node-output`
//                 && p.runtime.source.nodeWorkflowOutput === output,
//         ),
//     })) ?? [],

// node.inputPipes.forEach(p =>
//     loadRuntime_pipe(
//         p,
//         {
//             kind: `node-input`,
//             name: p.name,
//             node: node,
//             nodeWorkflowInput:
//                 workflow.inputs.find(x => x.name === p.name)
//                 || (() => {
//                     throw new Error(`Missing workflow input ${p.name}`);
//                 })(),
//         },
//         container,
//         context,
//     ),
// );
// };

type LoadPipeContext = {
    getOrCreateWorkflowInputConnection: (
        workflow: PipescriptWorkflow,
        name: string,
    ) => {
        input: PipescriptNodePipeConnectionInputInstance;
    };
    getOrCreateNodeOutputConnection: (
        workflow: PipescriptWorkflow,
        sourceNodeId: string,
        sourceNodeOutputName: string,
    ) => {
        output: PipescriptNodePipeConnectionOutputInstance;
    };
    getOrCreateWorkflowOperatorInputInstance: (workflow: PipescriptWorkflow) => {
        input: PipescriptNodePipeConnectionInputInstance;
    };
    getOrCreateWorkflowOperatorOutputInstance: (workflow: PipescriptWorkflow) => {
        output: PipescriptNodePipeConnectionOutputInstance;
    };
};
const loadRuntime_pipe = (
    pipeSource: PipescriptPipeValue,
    inputDestination: PipescriptPipeValueInstance[`destination`],
    workflow: PipescriptWorkflow,
    context: LoadPipeContext,
): PipescriptPipeValueInstance => {
    const getSource = (): PipescriptPipeValueInstance[`source`] => {
        if (pipeSource.kind === `data`) {
            return {
                kind: `data`,
                json: pipeSource.json,
            };
        }
        if (pipeSource.kind === `workflow-operator`) {
            if (workflow.body.kind !== `operator`) {
                throw new Error(`loadRuntime_pipe: getSource: workflow.body is not operator`);
            }
            return {
                kind: `operator-output`,
                ...context.getOrCreateWorkflowOperatorOutputInstance(workflow),
            };
        }
        if (pipeSource.kind === `workflow-input`) {
            return {
                kind: `input`,
                ...context.getOrCreateWorkflowInputConnection(
                    workflow,
                    pipeSource.workflowInputName,
                ),
            };
        }
        if (pipeSource.kind === `node`) {
            return {
                kind: `output`,
                ...context.getOrCreateNodeOutputConnection(
                    workflow,
                    pipeSource.sourceNodeId,
                    pipeSource.sourceNodeOutputName,
                ),
            };
        }
        throw new Error(
            `Unknown PipescriptPipeValue.kind ${(pipeSource as unknown as { kind: string }).kind}`,
        );
    };

    const getDestination = (): PipescriptPipeValueInstance[`destination`] => {
        return inputDestination;
        // if (pipeSource.kind === `workflow-operator`) {
        //     if (workflow.body.kind !== `operator`) {
        //         throw new Error(`loadRuntime_pipe: getDestination: workflow.body is not operator`);
        //     }
        //     return {
        //         kind: `operator-input`,
        //         ...context.getOrCreateWorkflowOperatorInputInstance(workflow),
        //     };
        // }
        // if (pipeSource.kind === `workflow-input`) {
        //     return {
        //         kind: `input`,
        //         ...context.getOrCreateWorkflowInputConnection(
        //             workflow,
        //             pipeSource.workflowInputName,
        //         ),
        //     };
        // }
        // if (pipeSource.kind === `node`) {
        //     return {
        //         kind: `output`,
        //         ...context.getOrCreateNodeOutputConnection(
        //             workflow,
        //             pipeSource.sourceNodeId,
        //             pipeSource.sourceNodeOutputName,
        //         ),
        //     };
        // }
        // throw new Error(
        //     `Unknown PipescriptPipeValue.kind ${(pipeSource as unknown as { kind: string }).kind}`,
        // );
    };

    return {
        pipe: pipeSource,
        source: getSource(),
        destination: getDestination(),
    };
};
