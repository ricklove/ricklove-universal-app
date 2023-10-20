// import exampleDeclarationWorkflowJson from './src/tests/code/0001-declarations/01.ts.workflow.json';
// import exampleDeclarationWorkflowJson from './src/tests/code/0002-assignments/03.ts.workflow.json';
import exampleDeclarationWorkflowJson from './src/tests/code/0003-operators/02.ts.workflow.json';
// import exampleDeclarationWorkflowJson from './src/tests/code/0004-mutation/01.ts.workflow.json';
// import exampleDeclarationWorkflowJson from './src/tests/code/0005-logic/02.ts.workflow.json';
import { PipescriptWorkflow } from './src/types';
export { WorkCanvasView } from './src/ui/work-canvas-view';
export const exampleDeclarationWorkflow = exampleDeclarationWorkflowJson as PipescriptWorkflow;
