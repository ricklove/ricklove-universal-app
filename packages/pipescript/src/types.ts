// Serializable types

/** function definition, operator definition, class constructors, code documents, modules, repos, etc */
export type PipescriptWorkflow = {
    /** uri, should be sufficient to find implementation
     *
     * - internal stored workflows use uuid
     * - external stored workflows use full path
     */
    workflowId: string;
    /** functionName, fileName, etc */
    name: string;
    /** parameters, scope captures, imports */
    inputs: PipescriptValue[];
    /** returns, scope capture mutations, exports */
    outputs: PipescriptValue[];

    /** body = function calls, assignments */
    nodes: PipescriptNode[];

    /** nested workflows */
    workflows: PipescriptWorkflow[];
};

/** variable */
export type PipescriptValue = {
    name: string;
    type: PipescriptType;
};

/** type */
export type PipescriptType =
    | {
          kind: `simple`;
          nullable: boolean;
          array: boolean;
          value: `int` | `float` | `string` | `bool`;
      }
    | {
          kind: `object`;
          nullable: boolean;
          array: boolean;
          fields: PipescriptValue[];
      }
    | {
          /** partially applied functions, function callbacks, promises, observables, object methods, etc */
          kind: `node`;
          nullable: boolean;
          array: boolean;
          node: PipescriptNode;
      };

/** function call, expressions */
export type PipescriptNode = {
    workflowId: string;
    inputs: {
        name: string;
        /** auto assigned unique id
         *
         * - workspace scoped incrementing id in storage */
        pipeId: string;
    }[];
    outputs: {
        name: string;
        /** the pipeId of the destination input
         *
         * - only one output can ever use a specific pipeId */
        pipeIds: string[];
    }[];
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
