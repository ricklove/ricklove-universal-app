// Serializable types

import { PseudoBigInt } from 'typescript';

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
    inputs: PipescriptVariable[];
    /** returns, scope capture mutations, exports */
    outputs: PipescriptVariable[];

    // internal

    /** connections to output */
    outputPipes: PipescriptPipe[];

    /** body = function calls, assignments */
    nodes: PipescriptNode[];

    /** nested workflows */
    workflows: PipescriptWorkflow[];
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
          type: `int` | `float` | `string` | `bool`;
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

export type PipescriptNodeImplementation =
    | {
          kind: `workflow`;
          workflowUri: string;
      }
    // | {
    //       kind: `code`;
    //       code: string;
    //   }
    | {
          /** json is mapped to single output
           *
           * serialized data, user input, constants, literals */
          kind: `data`;
          /** single output type */
          output: PipescriptVariable;
          /** json must fulfill output type */
          json: string;
      };

/** passed arguments */
export type PipescriptPipe = {
    name: string;
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
          workflowInputName: string;
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
