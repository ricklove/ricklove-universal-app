import ts, {
    BinaryExpression,
    CompilerHost,
    CompilerOptions,
    Expression,
    Identifier,
    LiteralExpression,
    NumericLiteral,
    ParenthesizedExpression,
    PseudoBigInt,
    ScriptTarget,
    SourceFile,
} from 'typescript';

import {
    PipescriptNode,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
} from './types';

export const convertTypescriptToPipescript = (
    fileCode: { filename: string; code: string }[],
): PipescriptWorkflow => {
    // console.log(`convertTypescriptToPipescript`, { typescriptCode });
    const { program, sourceFiles, typeChecker } = parseProgram(fileCode);
    // program.getSourceFiles;

    const workflows = sourceFiles.map(x => visitFile(x.filename, x.sourceFile, typeChecker));

    return {
        name: ``,
        workflowUri: ``,
        inputs: [],
        outputs: [],
        nodes: [],
        workflows,
    };
};

// based on MIT License:
// https://github.com/dsherret/ts-ast-viewer/blob/d3ed6d6a13e1132ac1219c6c6b7aba671d05bdc6/site/src/compiler/createSourceFile.ts#L9
const parseProgram = (fileCode: { filename: string; code: string }[]) => {
    const sourceFiles = fileCode.map(f => ({
        ...f,
        sourceFile: ts.createSourceFile(
            f.filename,
            f.code,
            ts.ScriptTarget.Latest,
            false,
            ts.ScriptKind.TSX,
        ),
    }));

    const files = Object.fromEntries(sourceFiles.map(x => [x.filename, x.sourceFile]));

    const options: CompilerOptions = {
        strict: true,
        target: ts.ScriptTarget.Latest,
        allowJs: true,
        module: ts.ModuleKind.ESNext,
    };

    const compilerHost: CompilerHost = {
        getSourceFile: (
            fileName: string,
            languageVersion: ScriptTarget,
            onError?: (message: string) => void,
        ) => {
            return sourceFiles.find(x => x.filename === fileName)?.sourceFile;
        },
        // getSourceFileByPath: (...) => {}, // not providing these will force it to use the file name as the file path
        // getDefaultLibLocation: (...) => {},
        getDefaultLibFileName: (defaultLibOptions: CompilerOptions) =>
            `/` + ts.getDefaultLibFileName(defaultLibOptions),
        writeFile: () => {
            // do nothing
        },
        getCurrentDirectory: () => `/`,
        getDirectories: (path: string) => [],
        fileExists: (fileName: string) => !!files[fileName],
        readFile: (fileName: string) => files[fileName]?.getFullText(),
        getCanonicalFileName: (fileName: string) => fileName,
        useCaseSensitiveFileNames: () => true,
        getNewLine: () => `\n`,
        getEnvironmentVariable: () => ``,
    };
    const program = ts.createProgram([...Object.keys(files)], options, compilerHost);
    const typeChecker = program.getTypeChecker();

    return { sourceFiles, typeChecker, program };
};

const createBuilder = (filename: string, file: ts.SourceFile, typeChecker: ts.TypeChecker) => {
    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptWorkflow[`nodes`] = [];

    const result = {
        workflowUri: filename,
        name: filename,
        inputs: [],
        outputs,
        workflows,
        nodes,
    };

    const findNodeSource = (varName: string) => {
        const node = nodes.findLast(x => {
            const implementation = x.implementation;
            if (implementation.kind !== `workflow`) {
                return false;
            }

            const workflow = workflows.find(w => w.workflowUri === implementation.workflowUri);
            const workflowOutput = workflow?.outputs.find(o => o.name === varName);

            return !!workflowOutput;
        });
        return node;
    };

    const builder = {
        workflow: result,
        nextNodeId: 1,
        findNodeSource,
        file,
        typeChecker,
    };

    return builder;
};

type WorkflowBuilder = ReturnType<typeof createBuilder>;

const visitFile = (
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

    // order of declarations does not matter
    file.forEachChild(n => {
        if (n.kind === ts.SyntaxKind.VariableStatement) {
            const t = n as ts.VariableStatement;
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
                const varType = getType(file, type);
                const nodeId = !initializer ? `` : `${builder.nextNodeId++}`;

                const initializerInfo = (() => {
                    if (
                        initializer?.kind === ts.SyntaxKind.NumericLiteral
                        || initializer?.kind === ts.SyntaxKind.StringLiteral
                        || initializer?.kind === ts.SyntaxKind.ObjectLiteralExpression
                    ) {
                        const init = initializer as LiteralExpression;
                        const outputPipe: PipescriptPipeValue = {
                            kind: `data`,
                            json: init.text,
                        };

                        return {
                            outputPipe,
                        };
                    }

                    if (initializer?.kind === ts.SyntaxKind.Identifier) {
                        const init = initializer as Identifier;
                        const initVarName = init.text;
                        const inputPipe: PipescriptPipe = {
                            name: varName,
                            kind: `node`,
                            sourceNodeId: builder.findNodeSource(initVarName)?.nodeId ?? ``,
                            sourceNodeOutputName: initVarName,
                        };
                        const outputPipe: PipescriptPipeValue = {
                            kind: `workflow-input`,
                            workflowInputName: varName,
                        };

                        return {
                            inputPipe,
                            outputPipe,
                        };
                    }

                    if (initializer?.kind === ts.SyntaxKind.BinaryExpression) {
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
                            workflowInputName: varName,
                        };

                        return {
                            inputPipe,
                            outputPipe,
                        };
                    }

                    console.log(`UNKNOWN initializer`, {
                        kind: ts.SyntaxKind[initializer?.kind ?? 0],
                        kindRaw: initializer?.kind,
                    });
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

                const node: undefined | PipescriptNode = !initializer
                    ? undefined
                    : {
                          nodeId,
                          implementation: {
                              kind: `workflow`,
                              workflowUri,
                          },
                          inputPipes: [
                              ...(!initializerInfo?.inputPipe ? [] : [initializerInfo.inputPipe]),
                          ],
                      };

                return { outputVar, workflow, node };
            });

            workflows.push(...declarations.map(x => x.workflow!).filter(x => x));
            nodes.push(...declarations.map(x => x.node!).filter(x => x));
            if (isExport) {
                outputs.push(...declarations.map(x => x.outputVar));
            }
        }
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
                    const varType = getType(file, type);

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
        }
    });

    return builder.workflow;
};

const getType = (file: ts.SourceFile, type: undefined | ts.Type): PipescriptType => {
    if (!type) {
        return {
            kind: `unknown`,
        };
    }

    if (type.isLiteral()) {
        const getValueType = (value: string | number | PseudoBigInt) => {
            // console.log(`getValueType`, { value });
            if (typeof value === `object`) {
                // BigInt
                return `int`;
            }

            return typeof value === `string`
                ? `string`
                : Number.parseInt(value + ``, 10) === value
                ? `int`
                : `float`;
        };

        return {
            kind: `simple`,
            type: getValueType(type.value),
        };

        // return {
        //     kind: `literal`,
        //     value: type.value as string,
        //     type: getValueType(type.value),
        // };
    }

    // console.log(`getType`, {
    //     flagsRaw: type?.flags,
    //     flags: ts.TypeFlags[type.flags],
    // });

    if (type.flags & ts.TypeFlags.String) {
        return {
            kind: `simple`,
            type: `string`,
        };
    }
    if (type.flags & ts.TypeFlags.Number) {
        return {
            kind: `simple`,
            type: `number`,
        };
    }
    if (type.flags & ts.TypeFlags.Boolean) {
        return {
            kind: `simple`,
            type: `bool`,
        };
    }

    console.log(`getType - not handled`, { flags: type?.flags });

    return {
        kind: `type`,
        name: type.pattern?.getText(file) ?? ``,
    };
};

const parseExpression = (
    builder: WorkflowBuilder,
    expression: Expression,
    // varName: string,
    // varType: PipescriptType,
): {
    expressionValue: PipescriptPipeValue;
    expressionType: PipescriptType;
} => {
    const expressionText = expression.getText(builder.file);
    const expressionTypeRaw = builder.typeChecker.getTypeAtLocation(expression);
    const expressionType = getType(builder.file, expressionTypeRaw);

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
        const t = expression as BinaryExpression;
        const expressionTextSimple = expressionText;
        // const expressionTextSimple = expressionText.replace(/[^A-Za-z0-9]+/g, `_`);

        const { left, right, operatorToken } = t;
        const operatorText = operatorToken.getText(builder.file);

        const { expressionValue: expressionValue_left, expressionType: expressionType_left } =
            parseExpression(builder, left);

        const { expressionValue: expressionValue_right, expressionType: expressionType_right } =
            parseExpression(builder, right);

        const expressionNodeId = `${builder.nextNodeId++}`;
        const expressionOutputName = `value`;
        // const expressionWorkflowUri = `${expressionTextSimple}`;
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
                    // pipe: {
                    //     kind:``
                    // }
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
