import ts from 'typescript';

import { PipescriptNode, PipescriptVariable, PipescriptWorkflow } from '../../types';
import { parseBody } from '../body';
import { WorkflowBuilder, createWorkflowBuilder } from '../builder';
import { parseExpression } from '../expressions/expression';

export const parseIfStatement = (builder: WorkflowBuilder, t: ts.IfStatement) => {
    const { typeChecker, file } = builder;

    const { expressionValue: expressionValue_condition, expressionType: expressionType_condition } =
        parseExpression(builder, t.expression);

    // convert to ternaries (one for each assigned variable)
    // the current builder should be cloned for each branch
    // assignment to captured variable should be a ternary assignment for each possible value
    // if(true){b=42; a=4;}
    // =>
    // b = true ? 42 : b;
    // a = true ? 4 : a;

    // const thenBuilder = createWorkflowBuilder(
    //     `${builder.workflow.workflowUri}/if-then`,
    //     file,
    //     typeChecker,
    //     builder,
    // );

    const parseAtTernary = () => {
        // const preNodes = [...builder.workflow.body.nodes];
        builder.pushScope();
        parseBody(builder, t.thenStatement);
        const thenNodes = builder.popScope().map(x => ({
            ...x,
            workflow: builder.workflow.workflows.find(w => w.workflowUri === x.workflowUri),
        }));
        builder.pushScope();
        if (t.elseStatement) {
            parseBody(builder, t.thenStatement);
        }
        const elseNodes = builder.popScope().map(x => ({
            ...x,
            workflow: builder.workflow.workflows.find(w => w.workflowUri === x.workflowUri),
        }));

        // fix nested if statements, need to recreate another ternary for inner ternary

        const thenOutputs = thenNodes.flatMap(x => x.workflow?.outputs ?? []);
        const elseOutputs = elseNodes.flatMap(x => x.workflow?.outputs ?? []);

        const allOutputs = builder.workflow.body.nodes.flatMap(
            x =>
                builder.workflow.workflows.find(w => w.workflowUri === x.workflowUri)?.outputs
                ?? [],
        );
        builder.workflow.body.nodes.forEach(n => {
            allOutputs.forEach(x => {
                const thenOutput = thenOutputs.find(o => o.name === x.name);
                const elseOutput = elseOutputs.find(o => o.name === x.name);
                if (!thenOutput && !elseOutput) {
                    return;
                }

                const expressionWorkflowUri = `${builder.workflow.workflowUri}/if-output/${x.name}`;
                if (builder.workflow.workflows.some(w => w.workflowUri === expressionWorkflowUri)) {
                    return;
                }

                const expressionNodeId = builder.getNextNodeId();
                const expressionWorkflow: PipescriptWorkflow = {
                    workflowUri: expressionWorkflowUri,
                    name: expressionWorkflowUri,
                    inputs: [
                        {
                            name: `condition`,
                            type: expressionType_condition,
                        },
                        {
                            name: `left`,
                            type: x.type,
                        },
                        {
                            name: `right`,
                            type: x.type,
                        },
                    ],
                    outputs: [
                        {
                            name: x.name,
                            type: x.type,
                            pipe: { kind: `workflow-operator` },
                        },
                    ],
                    body: {
                        kind: `operator`,
                        operator: `conditional-ternary`,
                    },
                };

                const thenSourceNodeId = thenNodes.findLast(
                    n => n.workflow?.outputs.some(o => o.name === x.name),
                )?.nodeId;
                const elseSourceNodeId = elseNodes.findLast(
                    n => n.workflow?.outputs.some(o => o.name === x.name),
                )?.nodeId;
                const expressionNode: PipescriptNode = {
                    nodeId: expressionNodeId,
                    workflowUri: expressionWorkflowUri,
                    inputPipes: [
                        {
                            name: `condition`,
                            ...expressionValue_condition,
                        },
                        ...(!thenSourceNodeId
                            ? []
                            : [
                                  {
                                      name: `left`,
                                      kind: `node`,
                                      sourceNodeOutputName: x.name,
                                      sourceNodeId: thenSourceNodeId,
                                  } as const,
                              ]),
                        ...(!elseSourceNodeId
                            ? []
                            : [
                                  {
                                      name: `right`,
                                      kind: `node`,
                                      sourceNodeOutputName: x.name,
                                      sourceNodeId: elseSourceNodeId,
                                  } as const,
                              ]),
                    ],
                };

                // console.log(`expressionNode`, { expressionNode, expressionWorkflow });

                builder.workflow.workflows.push(expressionWorkflow);
                builder.workflow.body.nodes.push(expressionNode);
            });
        });
    };

    const parseAsWorkflow = () => {
        const ifBodyBuilder = createWorkflowBuilder(
            `${builder.workflow.workflowUri}/if-body`,
            file,
            typeChecker,
        );
        parseBody(ifBodyBuilder, t.thenStatement);

        const expressionNodeId = builder.getNextNodeId();
        const expressionWorkflow = ifBodyBuilder.workflow;
        const expressionWorkflowUri = expressionWorkflow.workflowUri;

        const createTernary = ({ name, type }: PipescriptVariable) => {
            const ternaryNodeId = ifBodyBuilder.getNextNodeId();
            const ternaryWorkflowUri = `${expressionWorkflowUri}/out/${name}`;

            const ternaryWorkflow: PipescriptWorkflow = {
                workflowUri: ternaryWorkflowUri,
                name: ternaryWorkflowUri,
                inputs: [
                    {
                        name: `condition`,
                        type: expressionType_condition,
                    },
                    {
                        name: `left`,
                        type,
                    },
                    {
                        name: `right`,
                        type,
                    },
                ],
                outputs: [
                    {
                        name,
                        type,
                        pipe: { kind: `workflow-operator` },
                    },
                ],
                body: {
                    kind: `operator`,
                    operator: `conditional-ternary`,
                },
            };
            const ternaryNode: PipescriptNode = {
                nodeId: ternaryNodeId,
                workflowUri: ternaryWorkflowUri,
                inputPipes: [
                    {
                        name: `condition`,
                        kind: `workflow-input`,
                        workflowInputName: `condition`,
                    },
                    {
                        name: `left`,
                        ...ifBodyBuilder.findPipeSource(name, type),
                    },
                    {
                        name: `right`,
                        kind: `workflow-input`,
                        workflowInputName: name,
                    },
                ],
            };

            return { ternaryWorkflow, ternaryNode };
        };

        expressionWorkflow.inputs.forEach(input => {
            const inputChangedPipe = ifBodyBuilder.findPipeSource(input.name, input.type);
            if (inputChangedPipe.kind === `workflow-input`) {
                // skip if not a node input
                return;
            }

            // // add ternary for each output
            // const { ternaryNode, ternaryWorkflow } = createTernary(input);
            // expressionWorkflow.workflows.push(ternaryWorkflow);
            // expressionWorkflow.body.nodes.push(ternaryNode);

            // add output
            expressionWorkflow.outputs.push({
                name: input.name,
                type: input.type,
                pipe: ifBodyBuilder.findPipeSource(input.name, input.type),
            });
        });

        expressionWorkflow.body.control = `if`;

        expressionWorkflow.inputs.unshift({
            name: `condition`,
            type: expressionType_condition,
        });

        expressionWorkflow.outputs.forEach(output => {
            if (output.pipe) {
                return;
            }

            output.pipe = ifBodyBuilder.findPipeSource(output.name, output.type);
        });

        const expressionNode: PipescriptNode = {
            nodeId: expressionNodeId,
            workflowUri: expressionWorkflowUri,
            inputPipes: [
                {
                    name: `condition`,
                    ...expressionValue_condition,
                },
                ...expressionWorkflow.inputs
                    .filter(x => x.name !== `condition`)
                    .map(x => ({
                        name: x.name,
                        ...builder.findPipeSource(x.name, x.type),
                    })),
            ],
        };

        // console.log(`expressionNode`, { expressionNode, expressionWorkflow });

        builder.workflow.workflows.push(expressionWorkflow);
        builder.workflow.body.nodes.push(expressionNode);
    };

    // parseAtTernary();
    parseAsWorkflow();
};
