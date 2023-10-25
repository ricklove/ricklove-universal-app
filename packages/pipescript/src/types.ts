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
};

export type PipescriptWorkflowOutput = PipescriptVariable & {
    /** connections to output */
    pipe?: PipescriptPipeValue;
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
    workflowUri: string;

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

/** passed arguments */
export type PipescriptPipe = {
    name: string;
} & PipescriptPipeValue;

export type PipescriptPipeValue =
    | {
          /** connected to peer node */
          kind: `node`;
          sourceNodeId: string;
          sourceNodeOutputName: string;
      }
    | {
          /** connected to input of parent workflow */
          kind: `workflow-input`;
          workflowInputName: string;
      }
    | {
          /** connected to output of workflow operator */
          kind: `workflow-operator`;
      }
    | {
          /** json data
           *
           * serialized data, user input, constants, literals */
          kind: `data`;
          /** json must fulfill output type */
          json: string;
      };

// Instances
export type PipescriptNodeInstance = {
    node: PipescriptNode;
    workflow: PipescriptWorkflow;
    inputs: PipescriptNodeInputInstance[];
    outputs: PipescriptNodeOutputInstance[];

    children: PipescriptNodeInstance[];
    operator?: PipescriptNodeOperatorInstance;
};

export type PipescriptNodeInputInstance = {
    name: string;
    workflowInput: PipescriptWorkflowInput;
    inflowPipe: PipescriptPipeValueInstance;
    outflowPipes: PipescriptPipeValueInstance[];

    nodeInstance: PipescriptNodeInstance;
};
export type PipescriptNodeOutputInstance = {
    name: string;
    workflowOutput: PipescriptWorkflowOutput;
    inflowPipe: PipescriptPipeValueInstance;
    outflowPipes: PipescriptPipeValueInstance[];

    nodeInstance: PipescriptNodeInstance;
};
export type PipescriptNodeOperatorInstance = {
    operator: PipescriptBuiltinOperator;
    inputs: PipescriptNodeInputInstance[];
    outputs: PipescriptNodeOutputInstance[];

    nodeInstance: PipescriptNodeInstance;
};

export type PipescriptPipeValueInstance = {
    pipe: PipescriptPipeValue;
    source:
        | {
              kind: `input`;
              input: PipescriptNodeInputInstance;
          }
        | {
              kind: `output`;
              output: PipescriptNodeOutputInstance;
          }
        | {
              kind: `operator`;
              operator: PipescriptNodeOperatorInstance;
          }
        | {
              kind: `data`;
              name: `data`;
              json: string;
          };
    destination:
        | {
              kind: `input`;
              input: PipescriptNodeInputInstance;
          }
        | {
              kind: `output`;
              output: PipescriptNodeOutputInstance;
          }
        | {
              kind: `operator`;
              operator: PipescriptNodeOperatorInstance;
          };
};
