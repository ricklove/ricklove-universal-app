import { PipescriptRuntimeContext, loadRuntime } from '../analysis/load-data';
import {
    PipescriptBuiltinOperator,
    PipescriptNode,
    PipescriptNodeInstance,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
    PipescriptWorkflowOutput,
} from '../types';

const indent = (text: string, depth: number = 1) => {
    return text
        .split(`\n`)
        .map(x => `${[...new Array(depth)].map(x => `    `)}${x}\n`)
        .join(``);
};

const functionBuiltins = [
    {
        operator: `declaration`,
        template: (argNames: string[]) => `${argNames[0]}`,
    },
    {
        operator: `=`,
        template: (argNames: string[]) => `${argNames[0]}`,
    },
    {
        operator: `+`,
        template: (argNames: string[]) => `${argNames[0]} + ${argNames[1]}`,
    },
    {
        operator: `-`,
        template: (argNames: string[]) => `${argNames[0]} - ${argNames[1]}`,
    },
    {
        operator: `*`,
        template: (argNames: string[]) => `${argNames[0]} * ${argNames[1]}`,
    },
    {
        operator: `/`,
        template: (argNames: string[]) => `${argNames[0]} / ${argNames[1]}`,
    },
    {
        operator: `%`,
        template: (argNames: string[]) => `${argNames[0]} % ${argNames[1]}`,
    },
] satisfies {
    operator: PipescriptBuiltinOperator;
    template: (argNames: string[]) => string;
}[];

/** Convert workflow to typescript file with exports
 *
 * - nested workflows are functions
 * - outputs are exports
 * - rootNodes are flat code
 *
 */
export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
    const { rootNodeInstances, context } = loadRuntime(workflow);

    const builder: Builder = {
        ...context,
        declaredWorkflows: [],
    };

    const nestedFunctionDeclarations =
        workflow.workflows
            ?.map(w => convertWorkflowToFunctionDeclaration(w, builder))
            .filter(x => x)
            .map(x => x!) ?? [];

    const content = `${nestedFunctionDeclarations.map(x => x.content).join(`\n\n`)}`;

    // const { content } = convertNodesToFile(rootNodeInstances, workflow, builder);

    return {
        content,
    };
};

type Builder = PipescriptRuntimeContext & {
    declaredWorkflows: {
        workflow: PipescriptWorkflow;
        getCallExpression: (args: string[]) => string;
    }[];
};

const convertWorkflowToFunctionDeclaration = (
    workflow: PipescriptWorkflow,
    builder: Builder,
): undefined | { content: string } => {
    if (builder.declaredWorkflows.find(x => x.workflow === workflow)) {
        return;
    }

    const functionName = getFunctionName(workflow);

    const create_getCallExpression = () => {
        if (workflow.body.kind === `operator`) {
            const { operator } = workflow.body;
            const fun = functionBuiltins.find(f => f.operator === operator);
            if (!fun) {
                return () => `/* missing operator ${operator}*/`;
            }
            return fun.template;
        }

        return (args: string[]) => {
            return `${functionName}(${args.join(`, `)})`;
        };
    };

    const declaration: Builder[`declaredWorkflows`][number] = {
        workflow,
        getCallExpression: create_getCallExpression(),
    };
    builder.declaredWorkflows.push(declaration);

    if (workflow.body.kind === `operator`) {
        return;
    }

    const nestedFunctionDeclarations =
        workflow.workflows
            ?.map(w => convertWorkflowToFunctionDeclaration(w, builder))
            .filter(x => x)
            .map(x => x!) ?? [];

    const statements = workflow.body.nodes.map(node => {
        const nodeInstance = builder.allNodeInstances.find(x => x.node === node);
        const workflow = nodeInstance?.workflow;
        if (!workflow) {
            return `/* missing workflow ${node.workflowUri} */`;
        }
        const fun = builder.declaredWorkflows.find(x => x.workflow === workflow);
        if (!fun) {
            return `/* missing workflow function ${node.workflowUri} */`;
        }
        const args = nodeInstance.inputs.map(x => {
            const source = x.inflowPipe?.source;
            if (!source) {
                return `undefined /* disconnected */`;
            }
            if (source.kind === `data`) {
                return source.json;
            }
            if (source.kind === `input`) {
                // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
                return source.input.name;
            }
            if (source.kind === `output`) {
                // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
                return source.output.name;
            }
            if (source.kind === `operator-output`) {
                // TODO: this should not be possible
                return `undefined /* an operator cannot an argument of the same node */`;
            }

            return `undefined /* unknown source.kind ${(source as { kind: string }).kind} */`;
        });
        const funCall = fun.getCallExpression(args);
        const outputsExpression = nodeInstance.outputs.map(x => {
            // TODO: prevent name conflicts in the function scope - this should be done in the nodeInstance
            return x.name;
        });
        return `const ${outputsExpression} = ${funCall};`;
    });

    const returnStatement = (() => {
        if (!workflow.outputs.length) {
            return undefined;
        }

        // if (workflow.outputs.length === 1) {
        //     return `return ${workflow.outputs.map(x => x.name).join(`, `)};`;
        // }

        return `return { ${workflow.outputs.map(x => x.name).join(`, `)} };`;
    })();

    const parameters = workflow.inputs.map(x => generateDeclaration(x));
    const parametersCode =
        parameters.join(`, `).length > 40
            ? `\n${indent(`${parameters.join(`,\n`)},`)}\n`
            : parameters.join(`, `);

    const content = `function ${functionName}(${parametersCode}) {${indent(
        nestedFunctionDeclarations.map(x => x.content).join(`\n\n`),
    )}${indent([...statements, returnStatement].filter(x => x).join(`\n`))}}`;

    return {
        content,
    };
};

const getFunctionName = (workflow: PipescriptWorkflow) => {
    const functionName = workflow.workflowUri.replace(/[^A-Za-z0-9]+/g, `_`);
    return functionName;
};

const generateDeclaration = (x: PipescriptVariable): string => {
    return `${x.name}${x.type.nullable ? `?` : ``}: ${generateType(x.type)}${
        x.type.array ? `[]` : ``
    }`;
};

const generateType = (type: PipescriptType): string => {
    if (type.kind === `literal`) {
        if (type.type === `string`) {
            return `\`${type.value}\``;
        }
        return `${type.value}`;
    }

    if (type.kind === `simple`) {
        if (type.type === `int` || type.type === `float`) {
            return `number`;
        }
        return `${type.type}`;
    }

    if (type.kind === `object`) {
        return `{${type.fields.map(x => generateDeclaration(x)).join(`,\n`)}}`;
    }

    if (type.kind === `type`) {
        return type.name;
    }

    if (type.kind === `node`) {
        return `/* TODO: function callbacks */ fun_${type.node.nodeId}`;
    }

    return `unknown`;
};

// const convertNodesToFile = (
//     nodeInstances: PipescriptNodeInstance[],
//     workflow: PipescriptWorkflow,
//     context: Builder,
// ): { content: string } => {
//     const functions = convertNestedWorkflowsToFunction(workflow, context);

//     const statements = convertNodesToStatements(nodeInstances, context);
//     const content = `${functions.map(x => x.content).join(`\n\n`)}\n\n${statements?.content ?? ``}`;

//     return {
//         content,
//     };
// };

// const convertNestedWorkflowsToFunction = (workflow: PipescriptWorkflow, context: Builder) => {
//     context.createdWorkflows.push({
//         workflow,
//         getCallExpression: (args: string[]): string => {
//             const { body } = workflow;
//             if (body.kind === `operator`) {
//                 return (
//                     functionBuiltins.find(f => body.operator === f.operator)?.template(args)
//                     ?? `/* missing operator ${body.operator} */`
//                 );
//             }

//             const functionName = getFunctionName(workflow);
//             return `${functionName}(${args.join(`, `)})`;
//         },
//     });

//     const functions =
//         workflow.workflows
//             ?.map(w => convertWorkflowToFunctionDeclaration(w, context))
//             .filter(x => x)
//             .map(x => x!) ?? [];

//     return functions;
// };

// const convertWorkflowToFunctionDeclaration = (
//     workflow: PipescriptWorkflow,
//     context: Builder,
// ): undefined | { content: string } => {
//     if (workflow.body.kind === `operator`) {
//         return;
//     }

//     if (context.createdWorkflows.find(x => x.workflow === workflow)) {
//         return;
//     }

//     const nestedFunctions = convertNestedWorkflowsToFunction(workflow, context);

//     const firstNodeInstance = context.allNodeInstances.find(x => x.workflow === workflow);
//     const statements = !firstNodeInstance
//         ? undefined
//         : convertNodesToStatements([firstNodeInstance], context);

//     const content = `function ${getFunctionName(workflow)}(${workflow.inputs
//         .map(x => generateDeclaration(x))
//         .join(`, `)}){
//         ${nestedFunctions.map(x => x.content).join(`
//         `)}
//         ${statements?.content ?? ``}
//     }`;

//     return {
//         content,
//     };
// };

// const convertNodesToStatements = (
//     nodeInstances: PipescriptNodeInstance[],
//     context: Builder,
// ): undefined | { content: string } => {
//     const statements = nodeInstances.map(nodeInstance => {
//         const fun = context.createdWorkflows.find(x => x.workflow === nodeInstance.workflow);
//         if (!fun) {
//             return `/* missing function: '${nodeInstance.workflow.workflowUri}' */`;
//         }
//         return fun.getCallExpression(nodeInstance.inputs.map(input => input.name));
//     });
//     const content = `${statements.join(`;\n`)}`;

//     return {
//         content,
//     };
// };

// export const convertWorkflowToTypescriptFile = (workflow: PipescriptWorkflow) => {
//     const { rootNodeInstances } = loadRuntime(workflow);

//     // just in time (reverse dependency order)

//     // TODO: a file is actually a node, not a workflow, since it is executed at first import (and has specific input values)
//     // const imports = workflow.inputs.map(x => `import ${x.name} from '${x.name}'`);

//     const generateExportStatements = (output: PipescriptWorkflowOutput) => {
//         const exportName = output.name;
//         const sourceStatements = generateSourceStatements(
//             output.pipe?.runtime?.source,
//             {
//                 nodeId: ``,
//                 implementation: {
//                     workflowUri: workflow.workflowUri,
//                 },
//                 inputPipes: [],
//             },
//             {
//                 statementsMap: new Map(),
//             },
//         );
//         return `${sourceStatements}`;
//     };

//     const content = `${workflow.outputs.map(o => generateExportStatements(o)).join(`\n`)}`;
//     return { fileName: workflow.name, content };
// };

// type SourceStatement = {
//     key: string;
//     expression: string;
//     statements: string[];
//     requirements: { statementKey: string }[];
// };
// type SourceContext = {
//     statementsMap: Map<string, SourceStatement>;
// };

// const generateSourceStatements = (
//     pipeSource: undefined | Required<PipescriptPipeValue>[`runtime`][`source`],
//     nodeContainer: PipescriptNode,
//     context: SourceContext,
// ): SourceStatement => {
//     const returnStatement = (key: string, createStatement: () => Omit<SourceStatement, `key`>) => {
//         const existing = context.statementsMap.get(key);
//         if (existing) {
//             return existing;
//         }
//         return context.statementsMap.set(key, { ...createStatement(), key }).get(key)!;
//     };

//     if (!pipeSource) {
//         return returnStatement(`undefined`, () => ({
//             expression: `undefined /* pipeSource undefined */`,
//             statements: [],
//             requirements: [],
//         }));
//     }

//     if (pipeSource.kind === `data`) {
//         return returnStatement(pipeSource.json, () => ({
//             expression: pipeSource.json,
//             statements: [],
//             requirements: [],
//         }));
//     }

//     if (pipeSource.kind === `workflow-operator`) {
//         if (pipeSource.workflow.body.kind !== `operator`) {
//             throw new Error(`Invalid workflow body: ${pipeSource.workflow.body.kind}`);
//         }
//         const operator = pipeSource.workflow.body.operator;
//         const inputStatements = pipeSource.workflow.inputs.map(input => {
//             const nodeInput = nodeContainer.inputPipes.find(p => p.name === input.name);

//             if (!nodeInput) {
//                 throw new Error(`Missing node input: ${input.name}`);
//             }
//             // TODO: input value

//             // TODO: how to get node container ancestor?
//             return generateSourceStatements();
//         });

//         // TODO: operator
//     }

//     return { expression: ``, statements: [] };
// };

// const convertWorkflowToTypescriptFile_old = (workflow: PipescriptWorkflow) => {
//     loadRuntime(workflow);

//     // TODO: a file is actually a node, not a workflow, since it is executed at first import (and has specific input values)
//     const imports = workflow.inputs.map(x => `import ${x.name} from '${x.name}'`);

//     const functions = workflow.workflows
//         ?.filter(x => x.body.kind === `nodes`)
//         .map(x => generateFunction(x));

//     const isExportedName = (name: string) => {
//         return !!workflow.outputs.find(x => x.name === name);
//     };

//     const getWorkflow = (
//         workflowUri: string,
//         context: PipescriptWorkflow,
//     ): undefined | PipescriptWorkflow => {
//         return context.workflows?.find(w => w.workflowUri === workflowUri);
//     };

//     const allNodes = workflow.body.kind === `nodes` ? workflow.body.nodes : [];
//     const allNodeOutputs = allNodes.flatMap(
//         n =>
//             getWorkflow(n.implementation.workflowUri, workflow)?.outputs.map(x => ({
//                 ...x,
//                 nodeId: n.nodeId,
//             })) ?? [],
//     );

//     // console.log(`allNodeOutputNames`, { allNodeOutputNames });

//     const getNodeValue = (nodeId: string): string => {
//         const node = allNodes.find(x => x.nodeId === nodeId);
//         if (!node) {
//             return `/* getNodeValue: missing node */`;
//         }

//         const { implementation, inputPipes } = node;
//         const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
//         if (!nodeWorkflow) {
//             return `/* getNodeValue: missing workflowUri ${implementation.workflowUri} */`;
//         }
//         const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.operator));

//         if (fun) {
//             return `${fun.template(node.inputPipes.map(x => generatePipeValue(x)))}`;
//         }

//         return `${implementation.workflowUri}(${inputPipes.map(p => p.name).join(`, `)})`;
//     };

//     const getNodeOutputName = (nodeId: string, outputName: string): string => {
//         if (isExportedName(outputName)) {
//             return outputName;
//         }

//         const allMatchingOutputNames = allNodeOutputs.filter(x => x.name === outputName);

//         if (allMatchingOutputNames.length === 1) {
//             // use simple name if unique
//             return outputName;
//         }

//         return `${nodeId.replace(/[^\w]+/g, `_`)}_${outputName}`;
//     };

//     const isNodeOutputInline = (nodeId: string, outputName: string): boolean => {
//         if (isExportedName(outputName)) {
//             return false;
//         }

//         // inline if node has single output and single usage
//         const nodeOutputs = allNodeOutputs.filter(x => x.nodeId === nodeId);
//         return nodeOutputs.length === 1;
//     };

//     const getNodeOutputNameOrInlineValue = (nodeId: string, outputName: string): string => {
//         // if (isExportedName(outputName)) {
//         //     return outputName;
//         // }

//         // // inline if node has single output and single usage
//         // const nodeOutputs = allNodeOutputs.filter(x => x.nodeId === nodeId);
//         // if (nodeOutputs.length === 1) {
//         //     // inline if only one matching output
//         //     return getNodeValue(nodeId);
//         // }

//         return getNodeOutputName(nodeId, outputName);
//     };

//     const getNodeName = (nodeId: string): string => {
//         const node = allNodes.find(x => x.nodeId === nodeId);
//         if (!node) {
//             return `/* getNodeName: missing node */`;
//         }

//         const { implementation, inputPipes } = node;
//         const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
//         if (!nodeWorkflow) {
//             return `/* getNodeName: missing workflowUri ${implementation.workflowUri} */`;
//         }
//         const outputs = nodeWorkflow.outputs;
//         const outputNames =
//             outputs.length <= 1
//                 ? `${getNodeOutputName(node.nodeId, outputs[0].name)}`
//                 : `{ ${outputs.map(o => getNodeOutputName(node.nodeId, o.name)).join(`, `)} }`;
//         const areAllExported = outputs.every(o =>
//             isExportedName(getNodeOutputName(node.nodeId, o.name)),
//         );
//         if (areAllExported) {
//             outputs.forEach(o => markExportedName(o.name));
//         }
//         const constLeft = `${areAllExported ? `export ` : ``}const ${outputNames}`;

//         const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.operator));

//         if (fun) {
//             return `${constLeft}`;
//         }

//         return `${constLeft}`;
//     };

//     const generatePipeValue = (x: PipescriptPipeValue): string => {
//         if (x.kind === `data`) {
//             return x.json;
//         }

//         if (x.kind === `workflow-operator`) {
//             return `/* TODO: operator */`;
//         }

//         if (x.kind === `workflow-input`) {
//             return x.workflowInputName;
//         }

//         if (x.kind === `node`) {
//             return getNodeOutputNameOrInlineValue(x.sourceNodeId, x.sourceNodeOutputName);
//         }

//         return `/* unknown pipe value */`;
//     };

//     const exportedNames = [] as string[];
//     const markExportedName = (name: string) => {
//         if (!isExportedName(name)) {
//             return false;
//         }
//         exportedNames.push(name);
//         return true;
//     };

//     const nodes = allNodes.map(node => {
//         return `${getNodeName(node.nodeId)} = ${getNodeValue(node.nodeId)};`;

//         // const { implementation, inputPipes } = node;
//         // if (implementation.kind === `data`) {
//         //     return `const ${getNodeOutputNameOrInlineValue(node.nodeId, `data`)} = ${
//         //         implementation.json
//         //     };`;
//         // }
//         // if (implementation.kind === `workflow`) {
//         //     const nodeWorkflow = getWorkflow(implementation.workflowUri, workflow);
//         //     if (!nodeWorkflow) {
//         //         return `/* missing workflowUri ${implementation.workflowUri} */`;
//         //     }
//         //     const outputs = nodeWorkflow.outputs;
//         //     const outputNames =
//         //         outputs.length <= 1
//         //             ? `${getNodeOutputNameOrInlineValue(node.nodeId, outputs[0].name)}`
//         //             : `{ ${outputs
//         //                   .map(o => getNodeOutputNameOrInlineValue(node.nodeId, o.name))
//         //                   .join(`, `)} }`;
//         //     const areAllExported = outputs.every(o =>
//         //         isExportedName(getNodeOutputNameOrInlineValue(node.nodeId, o.name)),
//         //     );
//         //     if (areAllExported) {
//         //         outputs.forEach(o => markExportedName(o.name));
//         //     }
//         //     const constLeft = `${areAllExported ? `export ` : ``}const ${outputNames}`;

//         //     const fun = functionBuiltins.find(f => implementation.workflowUri.endsWith(f.operator));

//         //     if (fun) {
//         //         return `${constLeft} = ${fun.template(
//         //             node.inputPipes.map(x => generatePipeValue(x)),
//         //         )};`;
//         //     }

//         //     return `${constLeft} = ${implementation.workflowUri}(${inputPipes
//         //         .map(p => p.name)
//         //         .join(`, `)});`;
//         // }

//         // return `/* unknown node */`;
//     });

//     const exportNames = workflow.outputs
//         .filter(x => !exportedNames.includes(x.name))
//         .filter(x => !x.pipe)
//         .map(x => ({ name: x.name, nameSource: undefined as undefined | string }));
//     exportedNames.push(...exportNames.map(x => x.name));

//     const exportsBodies = workflow.outputs
//         .filter(x => !exportedNames.includes(x.name))
//         .filter(x => x.pipe)
//         .map(x => {
//             const { pipe } = x;

//             if (!pipe) {
//                 return;
//             }
//             if (pipe.kind === `data`) {
//                 return `export ${x.name} = ${pipe.json};`;
//             }

//             if (pipe.kind === `node`) {
//                 exportNames.push({
//                     name: x.name,
//                     nameSource:
//                         pipe.sourceNodeOutputName !== x.name
//                             ? getNodeOutputName(pipe.sourceNodeId, pipe.sourceNodeOutputName)
//                             : undefined,
//                 });
//                 exportedNames.push(x.name);
//                 return;
//             }

//             if (pipe.kind === `workflow-input`) {
//                 return `export ${x.name} = ${pipe.workflowInputName};`;
//             }

//             if (pipe.kind === `workflow-operator`) {
//                 return `export ${x.name} = /* TODO: operator 2 */;`;
//             }

//             return `export unknown;`;
//         })
//         .filter(x => !!x)
//         .map(x => x as string);

//     const content = `
// ${imports.join(`\n`)}
// ${functions?.join(`\n\n`)}
// ${nodes.join(`\n\n`)}
// ${exportsBodies.join(`\n\n`)}
// ${
//     exportNames.length
//         ? `export { ${exportNames
//               .map(x => `${x.nameSource ? `${x.nameSource} as ` : ``}${x.name}`)
//               .join(`, `)} };`
//         : ``
// }
//     `
//         .trim()
//         .split(`\n`)
//         .map(x => x.trimEnd())
//         .join(`\n`)
//         .replace(/\n\n+/g, `\n\n`);
//     return { fileName: workflow.name, content };
// };

// const generateFunction = (workflow: PipescriptWorkflow): string => {
//     const parameters = `${workflow.inputs.map(x => generateDeclaration(x)).join(`, `)}`;

//     const innerFunctions = workflow.workflows?.map(x => generateFunction(x)) ?? [];

//     const content = `
// const ${workflow.name} = (${parameters}) => {
// ${innerFunctions.join(`\n\n`)}
// }
//     `.trim();
//     return content;
// };
