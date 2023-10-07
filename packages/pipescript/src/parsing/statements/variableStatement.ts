import ts from 'typescript';

import {
    PipescriptNode,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptWorkflow,
} from '../../types';
import { WorkflowBuilder } from '../builder';
import { parseExpression } from '../expressions/expression';
import { getPipescriptType } from '../pipescriptType';

export const parseVariableStatement = (builder: WorkflowBuilder, t: ts.VariableStatement) => {
    const {
        workflow: { outputs, nodes, workflows },
        typeChecker,
        file,
    } = builder;

    const isExport = t.modifiers?.some(x => x.kind === ts.SyntaxKind.ExportKeyword);
    // if (!isExport) {
    //     return;
    // }

    const declarations = t.declarationList.declarations.map(d => {
        const { name: declarationName, initializer } = d;
        const type = typeChecker.getTypeAtLocation(d);

        // console.log(`visitFile type`, { d, type });
        // TODO: these are workflow outputs
        const varName = declarationName.getText(file);
        const varType = getPipescriptType(file, type);
        const nodeId = builder.getNextNodeId();

        const initializerInfo = (() => {
            if (!initializer) {
                return;
            }

            // if (
            //     initializer?.kind === ts.SyntaxKind.NumericLiteral
            //     || initializer?.kind === ts.SyntaxKind.StringLiteral
            //     || initializer?.kind === ts.SyntaxKind.ObjectLiteralExpression
            // ) {
            //     const init = initializer as LiteralExpression;
            //     const outputPipe: PipescriptPipeValue = {
            //         kind: `data`,
            //         json: init.text,
            //     };

            //     return {
            //         outputPipe,
            //     };
            // }

            const { expressionValue } = parseExpression(
                builder,
                initializer,
                // varName,
                // varType,
            );

            const inputPipe: PipescriptPipe = {
                name: varName,
                ...expressionValue,
            };
            const outputPipe: PipescriptPipeValue = {
                kind: `workflow-input`,
                workflowInputNames: [varName],
            };

            return {
                inputPipe,
                outputPipe,
            };
        })();

        const outputVar: PipescriptWorkflow[`outputs`][number] = {
            name: varName,
            type: varType,
            pipe: !initializer
                ? undefined
                : {
                      kind: `node`,
                      sourceNodeId: nodeId,
                      sourceNodeOutputName: varName,
                  },
        };

        const workflowUri = `${varName}-declaration`;
        const workflow: PipescriptWorkflow = {
            workflowUri,
            name: workflowUri,
            inputs: [
                ...(!initializerInfo?.inputPipe
                    ? []
                    : [
                          {
                              name: varName,
                              type: varType,
                          },
                      ]),
            ],
            outputs: [
                {
                    name: varName,
                    type: varType,
                    pipe: initializerInfo?.outputPipe,
                },
            ],
            nodes: [],
        };

        const node: undefined | PipescriptNode = {
            nodeId,
            implementation: {
                kind: `workflow`,
                workflowUri,
            },
            inputPipes: [...(!initializerInfo?.inputPipe ? [] : [initializerInfo.inputPipe])],
        };

        return { outputVar, workflow, node };
    });

    workflows.push(...declarations.map(x => x.workflow!).filter(x => x));
    nodes.push(...declarations.map(x => x.node!).filter(x => x));
    if (isExport) {
        outputs.push(...declarations.map(x => x.outputVar));
    }
};
