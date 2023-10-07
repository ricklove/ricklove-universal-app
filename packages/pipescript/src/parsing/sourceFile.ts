import ts, { Expression, ExpressionStatement } from 'typescript';

import { createBuilder } from './builder';
import { parseExpression } from './expressions/expression';
import { getPipescriptType } from './pipescriptType';
import { parseVariableStatement } from './variableStatement';
import { PipescriptWorkflow } from '../types';

export const parseSourceFile = (
    filename: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
): PipescriptWorkflow => {
    // console.log(`visitFile`, { file });
    const builder = createBuilder(filename, file, typeChecker);
    const {
        findNodeSource,
        workflow: { outputs, nodes, workflows },
    } = builder;

    const statements = [] as ts.Node[];
    file.forEachChild(x => statements.push(x));

    const unhandledAsDeclaration = [] as ts.Node[];

    // order of declarations does not matter
    file.forEachChild(n => {
        if (n.kind === ts.SyntaxKind.VariableStatement) {
            const t = n as ts.VariableStatement;
            parseVariableStatement(builder, t);
            return;
        }

        unhandledAsDeclaration.push(n);
    });

    // non declarations
    file.forEachChild(n => {
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
                            sourceNodeId: findNodeSource(varName)?.nodeId ?? ``,
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

        const hasBeenHandled = !unhandledAsDeclaration.includes(n);
        if (hasBeenHandled) {
            return;
        }

        console.log(`visitFile: UNKNOWN file statement`, {
            kind: ts.SyntaxKind[n?.kind ?? 0],
            kindRaw: n?.kind,
        });
    });

    return builder.workflow;
};
