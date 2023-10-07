import ts, { Identifier, LiteralExpression } from 'typescript';

import {
    PipescriptNode,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptWorkflow,
} from '../../types';
import { parseBody } from '../body';
import { WorkflowBuilder, createWorkflowBuilder } from '../builder';
import { parseExpression } from '../expressions/expression';
import { getPipescriptType } from '../pipescriptType';

export const parseIfStatement = (builder: WorkflowBuilder, t: ts.IfStatement) => {
    const {
        workflow: { outputs, nodes, workflows },
        typeChecker,
        file,
    } = builder;

    const { expressionValue: expressionValue_condition, expressionType: expressionType_condition } =
        parseExpression(builder, t.expression);

    const ifBodyBuilder = createWorkflowBuilder(`if-body`, file, typeChecker, true);
    parseBody(ifBodyBuilder, t.thenStatement);

    const expressionNodeId = `${builder.nextNodeId++}`;
    const expressionWorkflow = ifBodyBuilder.workflow;
    const expressionWorkflowUri = expressionWorkflow.workflowUri;
    expressionWorkflow.inputs.unshift({
        name: `condition`,
        type: expressionType_condition,
    });

    // const expressionWorkflowUri = `if`;

    // const expressionWorkflow: PipescriptWorkflow = {
    //     workflowUri: expressionWorkflowUri,
    //     name: expressionWorkflowUri,
    //     inputs: [
    //         {
    //             name: `condition`,
    //             type: expressionType_condition,
    //         },
    //     ],
    //     outputs: [
    //         // {
    //         //     name: expressionOutputName,
    //         //     type: expressionType,
    //         //     pipe: {
    //         //         kind: `workflow-input`,
    //         //         workflowInputNames: [`old`],
    //         //     },
    //         // },
    //         // {
    //         //     name: assignmentVarName,
    //         //     type: expressionType,
    //         //     pipe: {
    //         //         kind: `workflow-input`,
    //         //         workflowInputNames: [`old`],
    //         //     },
    //         // },
    //     ],
    //     nodes: [],
    // };

    const expressionNode: PipescriptNode = {
        nodeId: expressionNodeId,
        implementation: {
            kind: `workflow`,
            workflowUri: expressionWorkflowUri,
        },
        inputPipes: [
            {
                name: `condition`,
                ...expressionValue_condition,
            },
        ],
    };

    builder.workflow.workflows.push(expressionWorkflow);
    builder.workflow.nodes.push(expressionNode);
};
