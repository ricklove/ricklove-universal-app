import ts from 'typescript';

import { PipescriptNode } from '../../types';
import { parseBody } from '../body';
import { WorkflowBuilder, createWorkflowBuilder } from '../builder';
import { parseExpression } from '../expressions/expression';

export const parseIfStatement = (builder: WorkflowBuilder, t: ts.IfStatement) => {
    const { typeChecker, file } = builder;

    const { expressionValue: expressionValue_condition, expressionType: expressionType_condition } =
        parseExpression(builder, t.expression);

    const ifBodyBuilder = createWorkflowBuilder(
        `${builder.workflow.workflowUri}/if-body`,
        file,
        typeChecker,
    );
    parseBody(ifBodyBuilder, t.thenStatement);

    const expressionNodeId = builder.getNextNodeId();
    const expressionWorkflow = ifBodyBuilder.workflow;
    const expressionWorkflowUri = expressionWorkflow.workflowUri;

    // expressionWorkflow.inputs.forEach(input=>{
    //     expressionWorkflow.
    // });

    expressionWorkflow.inputs.unshift({
        name: `condition`,
        type: expressionType_condition,
    });

    const expressionNode: PipescriptNode = {
        nodeId: expressionNodeId,
        implementation: {
            kind: `workflow`,
            workflowUri: expressionWorkflowUri,
        },
        inputPipes: [
            {
                name: `condition`,
                ...expressionValue_condition,
            },
            ...expressionWorkflow.inputs
                .filter(x => x.name !== `condition`)
                .map(x => ({
                    name: x.name,
                    ...builder.findPipeSource(x.name, x.type),
                })),
        ],
    };

    console.log(`expressionNode`, { expressionNode, expressionWorkflow });

    builder.workflow.workflows.push(expressionWorkflow);
    builder.workflow.nodes.push(expressionNode);
};
