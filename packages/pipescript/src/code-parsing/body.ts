import ts, { Expression, ExpressionStatement } from 'typescript';

import { WorkflowBuilder } from './builder';
import { parseExpression } from './expressions/expression';
import { getPipescriptType } from './pipescript-type';
import { parseIfStatement } from './statements/if-statement';
import { parseVariableStatement } from './statements/variable-statement';
import { PipescriptWorkflow } from '../types';

export const parseBody = (builder: WorkflowBuilder, body: ts.Node): PipescriptWorkflow => {
    const {
        findPipeSource,
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
        // console.log(`visitFile: body statement`, {
        //     kind: ts.SyntaxKind[n?.kind ?? 0],
        //     kindRaw: n?.kind,
        // });

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
            // console.log(`visitFile: body expression statement`, {
            //     kind: ts.SyntaxKind[n?.kind ?? 0],
            //     kindRaw: n?.kind,
            //     expressionKind: ts.SyntaxKind[t.expression.kind],
            // });
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

                    const pipe = findPipeSource(varName, varType);
                    // console.log(`parseBody: ExportDeclaration`, {
                    //     varName,
                    //     varType,
                    //     pipe,
                    //     nodes: builder.workflow.body.nodes.flatMap(
                    //         x =>
                    //             builder.workflow.workflows.find(
                    //                 w => w.workflowUri === x.workflowUri,
                    //             )?.outputs,
                    //     ),
                    // });
                    outputs.push({
                        name: exportedName,
                        type: varType,
                        pipe,
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
