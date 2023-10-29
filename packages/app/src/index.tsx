import { WorkCanvasView, exampleDeclarationWorkflow } from '@ricklove-universal/pipescript';

export const App = () => {
    const workflow = exampleDeclarationWorkflow;
    return <WorkCanvasView workflow={workflow} />;
};
