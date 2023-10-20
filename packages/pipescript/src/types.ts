// Serializable types

/** function definition, operator definition, class constructors, code documents, modules, repos, etc */
export type PipescriptWorkflow = {
    /** uri, should be sufficient to find implementation
     *
     * - internal stored workflows use uuid
     * - external stored workflows use full path
     */
    workflowUri: string;

    // external

    /** functionName, fileName, etc */
    name: string;
    /** parameters, scope captures, imports */
    inputs: PipescriptWorkflowInput[];
    /** returns, scope capture mutations, exports */
    outputs: PipescriptWorkflowOutput[];

    // internal

    /** connections to output */
    // outputPipes?: PipescriptPipe[];

    /** body = function calls, assignments */
    body:
        | {
              kind: `nodes`;
              nodes: PipescriptNode[];
          }
        | {
              kind: `operator`;
              nodes?: undefined;
              operator: PipescriptBuiltinOperator;
          };

    /** nested workflows */
    workflows?: PipescriptWorkflow[];

    runtime?: {
        container: undefined | PipescriptWorkflow;
        usages: PipescriptNode[];
    };
};

export type PipescriptBuiltinOperator =
    // assignment
    | `declaration`
    | `=`
    // unary
    | '!'
    | '++'
    | '--'
    // binary
    | `+`
    | `-`
    | `*`
    | `/`
    | `%`
    // ternary
    | `conditional-ternary`
    // comparisons
    | '=='
    | '!='
    | '<'
    | '>'
    | '<='
    | '>=';

export type PipescriptWorkflowInput = PipescriptVariable & {
    ignored?: boolean;

    runtime?: {
        workflow: PipescriptWorkflow;
        pipes: PipescriptPipeValue[];
    };
};

export type PipescriptWorkflowOutput = PipescriptVariable & {
    /** connections to output */
    pipe?: PipescriptPipeValue;

    runtime?: {
        workflow: PipescriptWorkflow;
    };
};

/** variable */
export type PipescriptVariable = {
    name: string;
    type: PipescriptType;
};

/** type */
export type PipescriptType = {
    nullable?: boolean;
    array?: boolean;
} & (
    | {
          kind: `unknown`;
      }
    | {
          kind: `literal`;
          value: string | number;
          type: `int` | `float` | `string` | `bool`;
      }
    | {
          kind: `simple`;
          type: `int` | `float` | `number` | `string` | `bool`;
      }
    | {
          kind: `object`;
          fields: PipescriptVariable[];
      }
    | {
          /** ?? partially applied functions, function callbacks, promises, observables, object methods, etc */
          kind: `node`;
          node: PipescriptNode;
      }
    | {
          /** ?? generic types, compile time type algebra */
          kind: `type`;
          name: string;
      }
);

/** function call, expressions */
export type PipescriptNode = {
    /** auto assigned unique id
     *
     * - workspace scoped incrementing id in storage */
    nodeId: string;

    /** node type */
    implementation: PipescriptNodeImplementation;

    /** connected inputs */
    inputPipes: PipescriptPipe[];

    /** workflow canvas position, if pinned */
    layout?: {
        position: {
            x: number;
            y: number;
            z?: number;
        };
        scale?: number;
    };
};

export type PipescriptNodeImplementation = {
    workflowUri: string;

    runtime?: {
        workflow: PipescriptWorkflow;
    };
};

/** passed arguments */
export type PipescriptPipe = {
    name: string;
} & PipescriptPipeValue;

export type PipescriptPipeValue = {
    runtime?: {
        source:
            | {
                  kind: `node-output`;
                  name: string;
                  node: PipescriptNode;
                  nodeWorkflowOutput: PipescriptWorkflowOutput;
              }
            | {
                  kind: `workflow-inputs`;
                  workflowInputs: PipescriptWorkflowInput[];
              }
            | {
                  kind: `data`;
                  name: `data`;
                  json: string;
              };
        destination:
            | {
                  kind: `node-input`;
                  name: string;
                  node: PipescriptNode;
                  nodeWorkflowInput: PipescriptWorkflowInput;
              }
            | {
                  kind: `workflow-output`;
                  name: string;
                  workflowOutput: PipescriptWorkflowOutput;
              };
    };
} & (
    | {
          /** connected to peer node */
          kind: `node`;
          sourceNodeId: string;
          sourceNodeOutputName: string;
      }
    | {
          /** connected to input of parent workflow */
          kind: `workflow-input`;
          workflowInputNames: string[];
      }
    | {
          /** json data
           *
           * serialized data, user input, constants, literals */
          kind: `data`;
          /** json must fulfill output type */
          json: string;
      }
);

// /** arguments, imports */
// export type PipescriptNodeInputConnection = {
//     node: PipescriptNode;
//     value: PipescriptValue;
//     pipe?: PipescriptValuePipe;
// };

// /** arguments */
// export type PipescriptNodeOutputConnection = {
//     node: PipescriptNode;
//     value: PipescriptValue;
//     pipes: PipescriptValuePipe[];
// };

// /** using a variable */
// export type PipescriptValuePipe = {
//     source: PipescriptNodeOutputConnection;
//     destination: PipescriptNodeInputConnection;
// };
