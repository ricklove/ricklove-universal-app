import exampleDeclarationWorkflowJson from './src/tests/code/0004-mutation/06.ts.workflow.json';
// import exampleDeclarationWorkflowJson from './src/tests/code/0005-logic/01.ts.workflow.json';
import { PipescriptWorkflow } from './src/types';
export { WorkCanvasView } from './src/ui/work-canvas-view';
export const exampleDeclarationWorkflow = exampleDeclarationWorkflowJson as PipescriptWorkflow;
