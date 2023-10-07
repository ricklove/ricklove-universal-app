import ts, { Expression, ExpressionStatement } from 'typescript';

import { parseBody } from './body';
import { createBuilder } from './builder';
import { PipescriptWorkflow } from '../types';

export const parseSourceFile = (
    filename: string,
    file: ts.SourceFile,
    typeChecker: ts.TypeChecker,
): PipescriptWorkflow => {
    // console.log(`visitFile`, { file });
    const builder = createBuilder(filename, file, typeChecker);
    parseBody(builder, file);
    return builder.workflow;
};
