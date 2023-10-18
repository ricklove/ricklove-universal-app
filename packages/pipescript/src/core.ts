import { parseProgram } from './parsing/program';
import { parseSourceFile } from './parsing/source-file';
import { PipescriptWorkflow } from './types';

export const convertTypescriptToPipescript = (
    fileCode: { filename: string; code: string }[],
): PipescriptWorkflow => {
    // console.log(`convertTypescriptToPipescript`, { typescriptCode });
    const { program, sourceFiles, typeChecker } = parseProgram(fileCode);
    // program.getSourceFiles;

    const workflows = sourceFiles.map(x => parseSourceFile(x.filename, x.sourceFile, typeChecker));

    return {
        name: ``,
        workflowUri: ``,
        inputs: [],
        outputs: [],
        nodes: [],
        workflows,
    };
};
