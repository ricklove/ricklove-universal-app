import { parseProgram } from './code-parsing/program';
import { parseSourceFile } from './code-parsing/source-file';
import { PipescriptNode, PipescriptWorkflow } from './types';

export const convertTypescriptToPipescript = (
    fileCode: { filename: string; code: string }[],
): PipescriptWorkflow => {
    // console.log(`convertTypescriptToPipescript`, { typescriptCode });
    const { program, sourceFiles, typeChecker } = parseProgram(fileCode);
    // program.getSourceFiles;

    const sourceFileWorkflows = sourceFiles.map(x =>
        parseSourceFile(x.filename, x.sourceFile, typeChecker),
    );

    // TODO: execution order of multiple file imports

    // const rootWorkflow: PipescriptWorkflow = {
    //     workflowUri: `main`,
    //     name: `main`,
    //     body: {
    //         kind: `nodes`,
    //         nodes: [],
    //     },
    //     inputs: [],
    //     outputs: [],
    // };
    // const workflows = [rootWorkflow, ...sourceFileWorkflows];

    const rootWorkflow = sourceFileWorkflows[0];
    const workflows = sourceFileWorkflows;

    const rootNode: PipescriptNode = {
        workflowUri: rootWorkflow.workflowUri,
        nodeId: `main`,
        inputPipes: [],
    };

    return {
        name: ``,
        workflowUri: ``,
        inputs: [],
        outputs: [],
        body: {
            kind: `nodes`,
            nodes: [rootNode],
        },
        workflows,
    };
};
