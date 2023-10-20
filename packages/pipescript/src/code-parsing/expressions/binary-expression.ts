import { BinaryExpression } from 'typescript';

import { ExpressionParseResult, parseExpression } from './expression';
import { PipescriptBuiltinOperator, PipescriptNode, PipescriptWorkflow } from '../../types';
import { WorkflowBuilder } from '../builder';
import { getPipescriptType } from '../pipescript-type';

export const parseBinaryExpression = (
    builder: WorkflowBuilder,
    t: BinaryExpression,
): ExpressionParseResult => {
    const expressionTypeRaw = builder.typeChecker.getTypeAtLocation(t);
    const expressionType = getPipescriptType(builder.file, expressionTypeRaw);
    // const expressionTextSimple = expressionText.replace(/[^A-Za-z0-9]+/g, `_`);
    const { left, right, operatorToken } = t;
    const operatorText = operatorToken.getText(builder.file) as PipescriptBuiltinOperator;

    const { expressionValue: expressionValue_left, expressionType: expressionType_left } =
        parseExpression(builder, left);

    const { expressionValue: expressionValue_right, expressionType: expressionType_right } =
        parseExpression(builder, right);

    const expressionNodeId = builder.getNextNodeId();

    // console.log(`parseBinaryExpression`, {
    //     operatorText,
    //     expressionValue_left,
    //     expressionType_left,
    //     expressionValue_right,
    //     expressionType_right,
    // });

    if (operatorText === `=`) {
        const assignmentVarName =
            expressionValue_left.kind === `node`
                ? expressionValue_left.sourceNodeOutputName
                : expressionValue_left.kind === `workflow-input`
                ? expressionValue_left.workflowInputName
                : undefined;

        if (!assignmentVarName) {
            throw new Error(`Missing ${assignmentVarName}`);
        }

        const expressionOutputName = assignmentVarName;
        const expressionWorkflowUri = `${builder.workflow.workflowUri}/${assignmentVarName}${operatorText}`;

        const expressionWorkflow: PipescriptWorkflow = {
            workflowUri: expressionWorkflowUri,
            name: expressionWorkflowUri,
            inputs: [
                {
                    name: `old`,
                    type: expressionType_left,
                    ignored: true,
                },
                {
                    name: `value`,
                    type: expressionType_right,
                },
            ],
            outputs: [
                {
                    name: expressionOutputName,
                    type: expressionType,
                    pipe: {
                        kind: `workflow-operator`,
                    },
                },
            ],
            body: {
                kind: `operator`,
                operator: operatorText,
            },
        };

        const expressionNode: PipescriptNode = {
            nodeId: expressionNodeId,
            implementation: {
                workflowUri: expressionWorkflowUri,
            },
            inputPipes: [
                {
                    name: `old`,
                    ...expressionValue_left,
                },
                {
                    name: `value`,
                    ...expressionValue_right,
                },
            ],
        };

        builder.workflow.workflows.push(expressionWorkflow);
        builder.workflow.body.nodes.push(expressionNode);

        return {
            expressionValue: {
                kind: `node`,
                sourceNodeId: expressionNodeId,
                sourceNodeOutputName: expressionOutputName,
            },
            expressionType,
        };
    }

    const expressionOutputName = `value`;
    const expressionWorkflowUri = `${builder.workflow.workflowUri}/${operatorText}`;

    const expressionWorkflow: PipescriptWorkflow = {
        workflowUri: expressionWorkflowUri,
        name: expressionWorkflowUri,
        inputs: [
            {
                name: `left`,
                type: expressionType_left,
            },
            {
                name: `right`,
                type: expressionType_right,
            },
        ],
        outputs: [
            {
                name: expressionOutputName,
                type: expressionType,
                pipe: {
                    kind: `workflow-operator`,
                },
            },
        ],
        body: {
            kind: `operator`,
            operator: operatorText,
        },
    };

    const expressionNode: PipescriptNode = {
        nodeId: expressionNodeId,
        implementation: {
            workflowUri: expressionWorkflowUri,
        },
        inputPipes: [
            {
                name: `left`,
                ...expressionValue_left,
            },
            {
                name: `right`,
                ...expressionValue_right,
            },
        ],
    };

    builder.workflow.workflows.push(expressionWorkflow);
    builder.workflow.body.nodes.push(expressionNode);

    return {
        expressionValue: {
            kind: `node`,
            sourceNodeId: expressionNodeId,
            sourceNodeOutputName: expressionOutputName,
        },
        expressionType,
    };
};
