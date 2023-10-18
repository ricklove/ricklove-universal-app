import ts, { CompilerHost, CompilerOptions, ScriptTarget } from 'typescript';

// based on MIT License:
// https://github.com/dsherret/ts-ast-viewer/blob/d3ed6d6a13e1132ac1219c6c6b7aba671d05bdc6/site/src/compiler/createSourceFile.ts#L9
export const parseProgram = (fileCode: { filename: string; code: string }[]) => {
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
