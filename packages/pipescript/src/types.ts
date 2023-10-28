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

    tree?: {
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
    // logical
    | `&&`
    | `||`
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

    tree?: {
        workflow: PipescriptWorkflow;
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
export type PipescriptNodeInstanceDataset = {
    allNodeInstances: PipescriptNodeInstance[];
    rootNodeInstances: PipescriptNodeInstance[];
};

export type PipescriptNodeInstance = {
    dataset: PipescriptNodeInstanceDataset;
    key: string;
    node: PipescriptNode;
    workflow: PipescriptWorkflow;
    inputs: PipescriptNodePipeConnectionInputInstance[];
    outputs: PipescriptNodePipeConnectionOutputInstance[];

    parent: undefined | PipescriptNodeInstance;
    children: PipescriptNodeInstance[];
    operator?: PipescriptBuiltinOperator;
};

export type PipescriptNodeInstance_Operator = {
    node: PipescriptNode;
    workflow: PipescriptWorkflow;
    inputs: Omit<PipescriptNodePipeConnectionInputInstance, `outflowPipes`>[];
    outputs: Omit<PipescriptNodePipeConnectionOutputInstance, `inflowPipe`>[];

    operator: PipescriptBuiltinOperator;
};

export type PipescriptNodePipeConnectionInstance_InputOrOutput =
    | PipescriptNodePipeConnectionInputInstance
    | PipescriptNodePipeConnectionOutputInstance;

export type PipescriptNodePipeConnectionInputInstance = PipescriptNodePipeConnectionInstance & {
    kind: `workflow-input`;
    workflowInput: PipescriptWorkflowInput;
};
export type PipescriptNodePipeConnectionOutputInstance = PipescriptNodePipeConnectionInstance & {
    kind: `workflow-output`;
    workflowOutput: PipescriptWorkflowOutput;
};

export type PipescriptNodePipeConnectionInstance = {
    key: string;
    name: string;
    inflowPipe: undefined | PipescriptPipeValueInstance;
    outflowPipes: PipescriptPipeValueInstance[];

    nodeInstance: PipescriptNodeInstance;

    runs?: {
        value: unknown;
        override?: unknown;
        dependencies: PipescriptNodePipeConnectionInstance[];
    };
};

export type PipescriptPipeValueInstance = {
    key: string;
    pipe: PipescriptPipeValue;
    source:
        | {
              kind: `input`;
              input: PipescriptNodePipeConnectionInputInstance;
          }
        | {
              kind: `output`;
              output: PipescriptNodePipeConnectionOutputInstance;
          }
        | {
              // needed?
              kind: `operator-output`;
              nodeInstance: PipescriptNodeInstance_Operator;
          }
        | {
              kind: `data`;
              //   name: `data`;
              json: string;
          };
    destination:
        | {
              kind: `input`;
              input: PipescriptNodePipeConnectionInputInstance;
          }
        | {
              kind: `output`;
              output: PipescriptNodePipeConnectionOutputInstance;
          }
        | {
              // needed?
              kind: `operator-input`;
              node: PipescriptNodeInstance_Operator;
          };
};
