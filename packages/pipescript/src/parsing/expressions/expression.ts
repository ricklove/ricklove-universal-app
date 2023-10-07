import ts, {
    BinaryExpression,
    Expression,
    Identifier,
    LiteralExpression,
    ParenthesizedExpression,
    PostfixUnaryExpression,
} from 'typescript';

import { parseBinaryExpression } from './binaryExpression';
import { parsePostfixUnaryExpression } from './postfixUnaryExpression';
import { PipescriptPipeValue, PipescriptType } from '../../types';
import { WorkflowBuilder } from '../builder';
import { getPipescriptType } from '../pipescriptType';

export type ExpressionParseResult = {
    expressionValue: PipescriptPipeValue;
    expressionType: PipescriptType;
};

export const parseExpression = (
    builder: WorkflowBuilder,
    expression: Expression,
): ExpressionParseResult => {
    // const expressionText = expression.getText(builder.file);
    const expressionTypeRaw = builder.typeChecker.getTypeAtLocation(expression);
    const expressionType = getPipescriptType(builder.file, expressionTypeRaw);

    if (expression.kind === ts.SyntaxKind.Identifier) {
        const init = expression as Identifier;
        const initVarName = init.text;
        return {
            expressionValue: {
                kind: `node`,
                sourceNodeId: builder.findNodeSource(initVarName)?.nodeId ?? ``,
                sourceNodeOutputName: initVarName,
            },
            expressionType,
        };
    }

    if (
        expression.kind === ts.SyntaxKind.NumericLiteral
        || expression.kind === ts.SyntaxKind.StringLiteral
        || expression.kind === ts.SyntaxKind.ObjectLiteralExpression
    ) {
        const init = expression as LiteralExpression;
        const outputPipe: PipescriptPipeValue = {
            kind: `data`,
            json: init.text,
        };

        return {
            expressionValue: outputPipe,
            expressionType,
        };

        // return {
        //     expressionNodeId: builder.findNodeSource(initVarName)?.nodeId ?? ``,
        //     expressionOutputName: initVarName,
        //     expressionType,
        // };
    }

    if (expression.kind === ts.SyntaxKind.BinaryExpression) {
        return parseBinaryExpression(builder, expression as BinaryExpression);
    }

    if (expression.kind === ts.SyntaxKind.PostfixUnaryExpression) {
        return parsePostfixUnaryExpression(builder, expression as PostfixUnaryExpression);
    }

    if (expression.kind === ts.SyntaxKind.ParenthesizedExpression) {
        const t = expression as ParenthesizedExpression;
        const { expression: expressionInner } = t;
        return parseExpression(builder, expressionInner);
    }

    console.log(`UNKNOWN expression`, {
        kind: ts.SyntaxKind[expression?.kind ?? 0],
        kindRaw: expression?.kind,
    });
    throw new Error(`Not Implemented`);
};
