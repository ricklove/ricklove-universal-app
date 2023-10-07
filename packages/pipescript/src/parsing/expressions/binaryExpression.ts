import { BinaryExpression } from 'typescript';

import { ExpressionParseResult, parseExpression } from './expression';
import { PipescriptNode, PipescriptWorkflow } from '../../types';
import { WorkflowBuilder } from '../builder';
import { getPipescriptType } from '../pipescriptType';

export const parseBinaryExpression = (
    builder: WorkflowBuilder,
    t: BinaryExpression,
): ExpressionParseResult => {
    const expressionTypeRaw = builder.typeChecker.getTypeAtLocation(t);
    const expressionType = getPipescriptType(builder.file, expressionTypeRaw);
    // const expressionTextSimple = expressionText.replace(/[^A-Za-z0-9]+/g, `_`);
    const { left, right, operatorToken } = t;
    const operatorText = operatorToken.getText(builder.file);

    const { expressionValue: expressionValue_left, expressionType: expressionType_left } =
        parseExpression(builder, left);

    const { expressionValue: expressionValue_right, expressionType: expressionType_right } =
        parseExpression(builder, right);

    const expressionNodeId = `${builder.nextNodeId++}`;

    if (operatorText === `=` && expressionValue_left.kind === `node`) {
        const assignmentVarName = expressionValue_left.sourceNodeOutputName;
        const expressionOutputName = assignmentVarName;
        const expressionWorkflowUri = `${assignmentVarName}${operatorText}`;

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
                        kind: `workflow-input`,
                        workflowInputNames: [`value`],
                    },
                },
            ],
            nodes: [],
        };

        const expressionNode: PipescriptNode = {
            nodeId: expressionNodeId,
            implementation: {
                kind: `workflow`,
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
        builder.workflow.nodes.push(expressionNode);

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
    const expressionWorkflowUri = `${operatorText}`;

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
                    kind: `workflow-input`,
                    workflowInputNames: [`left`, `right`],
                },
            },
        ],
        nodes: [],
    };

    const expressionNode: PipescriptNode = {
        nodeId: expressionNodeId,
        implementation: {
            kind: `workflow`,
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
    builder.workflow.nodes.push(expressionNode);

    return {
        expressionValue: {
            kind: `node`,
            sourceNodeId: expressionNodeId,
            sourceNodeOutputName: expressionOutputName,
        },
        expressionType,
    };
};