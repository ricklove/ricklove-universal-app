import ts, {
    CompilerHost,
    CompilerOptions,
    LiteralExpression,
    NumericLiteral,
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

const visitFile = (
    filename: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
): PipescriptWorkflow => {
    // console.log(`visitFile`, { file });

    const outputs: PipescriptWorkflow[`outputs`] = [];
    const workflows: PipescriptWorkflow[`workflows`] = [];
    const nodes: PipescriptWorkflow[`nodes`] = [];
    let nextNodeId = 1;

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
                const nodeId = !initializer ? `` : `${nextNodeId++}`;

                const initializerInfo = (() => {
                    if (
                        initializer?.kind === ts.SyntaxKind.NumericLiteral
                        || initializer?.kind === ts.SyntaxKind.StringLiteral
                        || initializer?.kind === ts.SyntaxKind.ObjectLiteralExpression
                    ) {
                        const init = initializer as LiteralExpression;
                        const pipe: PipescriptPipeValue = {
                            kind: `data`,
                            json: init.text,
                        };

                        return {
                            pipe,
                        };
                    }
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

                const workflow: PipescriptWorkflow = {
                    workflowUri: `${varName}-declaration`,
                    name: `${varName}-declaration`,
                    inputs: [],
                    outputs: [
                        {
                            name: varName,
                            type: varType,
                            pipe: initializerInfo?.pipe,
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
                              workflowUri: `${varName}-declaration`,
                          },
                          inputPipes: [],
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
                    const varName = e.name.text;
                    const type = typeChecker.getTypeAtLocation(e);
                    const varType = getType(file, type);

                    outputs.push({
                        name: varName,
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

    return {
        workflowUri: filename,
        name: filename,
        inputs: [],
        outputs,
        workflows,
        nodes,
    };
};

const getType = (file: ts.SourceFile, type: undefined | ts.Type): PipescriptType => {
    if (!type) {
        return {
            kind: `unknown`,
        };
    }

    if (type.isLiteral()) {
        const getValueType = (value: string | number | PseudoBigInt) => {
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

    console.log(`getType`, { flags: type?.flags });

    if (type.flags & ts.TypeFlags.String) {
        return {
            kind: `simple`,
            type: `string`,
        };
    }
    if (type.flags & ts.TypeFlags.Number) {
        return {
            kind: `simple`,
            type: `float`,
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
