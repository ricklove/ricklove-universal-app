import ts, { PostfixUnaryExpression } from 'typescript';

import { ExpressionParseResult, parseExpression } from './expression';
import { PipescriptNode, PipescriptWorkflow } from '../../types';
import { WorkflowBuilder } from '../builder';
import { getPipescriptType } from '../pipescript-type';

export const parsePostfixUnaryExpression = (
    builder: WorkflowBuilder,
    t: PostfixUnaryExpression,
): ExpressionParseResult => {
    const expressionTypeRaw = builder.typeChecker.getTypeAtLocation(t);
    const expressionType = getPipescriptType(builder.file, expressionTypeRaw);
    // const expressionTextSimple = expressionText.replace(/[^A-Za-z0-9]+/g, `_`);
    const { operand, operator } = t;
    const operatorText = operator === ts.SyntaxKind.PlusPlusToken ? `++` : `--`;

    const { expressionValue: expressionValue_left, expressionType: expressionType_left } =
        parseExpression(builder, operand);

    const expressionNodeId = builder.getNextNodeId();

    if (expressionValue_left.kind !== `node`) {
        throw new Error(`parsePostfixUnaryExpression: only identified postfix is implemented`);
    }

    const assignmentVarName = expressionValue_left.sourceNodeOutputName;
    const expressionOutputName = `old`;
    const expressionWorkflowUri = `${builder.workflow.workflowUri}/${assignmentVarName}${operatorText}`;

    const expressionWorkflow: PipescriptWorkflow = {
        workflowUri: expressionWorkflowUri,
        name: expressionWorkflowUri,
        inputs: [
            {
                name: `old`,
                type: expressionType_left,
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
            {
                name: assignmentVarName,
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
        workflowUri: expressionWorkflowUri,
        inputPipes: [
            {
                name: `old`,
                ...expressionValue_left,
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
