import ts from 'typescript';

import { parseBody } from './body';
import { createWorkflowBuilder } from './builder';
import { PipescriptWorkflow } from '../types';

export const parseSourceFile = (
    filename: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
): PipescriptWorkflow => {
    // console.log(`visitFile`, { file });
    const builder = createWorkflowBuilder(filename, file, typeChecker);
    parseBody(builder, file);
    return builder.workflow;
};
