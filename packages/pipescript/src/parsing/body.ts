import ts, { Expression, ExpressionStatement } from 'typescript';

import { WorkflowBuilder } from './builder';
import { parseExpression } from './expressions/expression';
import { getPipescriptType } from './pipescriptType';
import { parseIfStatement } from './statements/ifStatement';
import { parseVariableStatement } from './statements/variableStatement';
import { PipescriptWorkflow } from '../types';

export const parseBody = (builder: WorkflowBuilder, body: ts.Node): PipescriptWorkflow => {
    const {
        findNodeSource,
        workflow: { outputs },
        typeChecker,
        file,
    } = builder;

    const statements = [] as ts.Node[];
    body.forEachChild(x => statements.push(x));

    const unhandledAsOrdered = [] as ts.Node[];

    // TODO: hoisted:
    // - function declarations
    body.forEachChild(n => {
        // if (n.kind === ts.SyntaxKind.VariableStatement) {
        //     const t = n as ts.VariableStatement;
        //     parseVariableStatement(builder, t);
        //     return;
        // }
        // if (n.kind === ts.SyntaxKind.ExpressionStatement) {
        //     const t = n as ExpressionStatement;
        //     parseExpression(builder, t.expression);
        //     return;
        // }
        // const kindName = ts.SyntaxKind[n?.kind ?? 0];
        // if (kindName.includes(`Expression`)) {
        //     parseExpression(builder, n as Expression);
        //     return;
        // }
        // unhandledAsOrdered.push(n);
    });

    // ordered
    body.forEachChild(n => {
        if (n.kind === ts.SyntaxKind.VariableStatement) {
            const t = n as ts.VariableStatement;
            parseVariableStatement(builder, t);
            return;
        }

        if (n.kind === ts.SyntaxKind.IfStatement) {
            const t = n as ts.IfStatement;
            parseIfStatement(builder, t);
            return;
        }

        if (n.kind === ts.SyntaxKind.ExpressionStatement) {
            const t = n as ExpressionStatement;
            parseExpression(builder, t.expression);
            return;
        }

        const kindName = ts.SyntaxKind[n?.kind ?? 0];
        if (kindName.includes(`Expression`)) {
            parseExpression(builder, n as Expression);
            return;
        }

        unhandledAsOrdered.push(n);
    });

    // non ordered
    body.forEachChild(n => {
        if (n.kind === ts.SyntaxKind.ExportDeclaration) {
            const t = n as ts.ExportDeclaration;
            const clause = t.exportClause;
            if (clause?.kind === ts.SyntaxKind.NamedExports) {
                const elements = clause.elements;

                for (const e of elements) {
                    const varName = e.propertyName?.text ?? e.name.text;
                    const exportedName = e.name.text;
                    const type = typeChecker.getTypeAtLocation(e);
                    const varType = getPipescriptType(file, type);

                    outputs.push({
                        name: exportedName,
                        type: varType,
                        pipe: {
                            kind: `node`,
                            sourceNodeId:
                                findNodeSource(varName, varType)?.nodeId ?? `unknown-${varName}`,
                            sourceNodeOutputName: varName,
                        },
                    });
                }
            }
            return;
        }

        if (n.kind === ts.SyntaxKind.EndOfFileToken) {
            return;
        }

        const hasBeenHandled = !unhandledAsOrdered.includes(n);
        if (hasBeenHandled) {
            return;
        }

        console.log(`visitFile: UNKNOWN body statement`, {
            kind: ts.SyntaxKind[n?.kind ?? 0],
            kindRaw: n?.kind,
        });
    });

    return builder.workflow;
};
