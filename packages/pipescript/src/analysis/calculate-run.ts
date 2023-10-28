import {
    PipescriptBuiltinOperator,
    PipescriptNodeInstance,
    PipescriptNodeInstance_Operator,
    PipescriptNodePipeConnectionInstance,
} from '../types';

// TODO: handle cycles

type RunContext = {
    visited: Set<unknown>;
    lazy: boolean;
};

export const calculateRun = (
    allNodeInstances: PipescriptNodeInstance[],
    context: RunContext = { visited: new Set(), lazy: false },
) => {
    const rootNodes = allNodeInstances.filter(x => !x.parent);

    rootNodes.forEach(node => {
        calculateRunValue_nodeOutput(node, context);
    });
};

export const calculateRunValue_nodeOutput = (node: PipescriptNodeInstance, context: RunContext) => {
    // all outputs must be evaluated (but may return undefined)
    node.outputs.forEach(output => {
        calculateRunValue_input(output, context);
    });

    if (!context.lazy) {
        node.children.forEach(x => {
            calculateRunValue_nodeOutput(x, context);
        });
        node.inputs.forEach(x => {
            calculateRunValue_input(x, context);
        });
    }
};

const calculateRunValue_input = (
    input: Omit<PipescriptNodePipeConnectionInstance, `outflowPipes`>,
    context: RunContext,
) => {
    if (context.visited.has(input)) {
        return input.runs;
    }
    context.visited.add(input);
    input.runs = undefined;

    const inflowPipe = input.inflowPipe;
    if (!inflowPipe) {
        return;
    }
    const { source } = inflowPipe;
    if (source.kind === `data`) {
        input.runs = { value: JSON.parse(source.json) };
        return;
    }
    if (source.kind === `input`) {
        input.runs = { value: source.input.runs?.value };
        return;
    }
    if (source.kind === `output`) {
        input.runs = { value: source.output.runs?.value };
        return;
    }
    if (source.kind === `operator-output`) {
        input.runs = { value: calculateRunValue_operator(source.nodeInstance, context) };
        return;
    }

    const _never: never = undefined as typeof source as never;
};

const calculateRunValue_operator = (
    nodeInstance: PipescriptNodeInstance_Operator,
    context: RunContext,
) => {
    const calculateArgs_index = (index: number) => {
        const x = nodeInstance.inputs[index];
        if (x == null) {
            return undefined;
        }
        calculateRunValue_input(x, context);
        return x.runs?.value as number;
    };

    const operator: PipescriptBuiltinOperator = nodeInstance.operator;

    // lazy
    if (operator === `conditional-ternary`) {
        const condition = !!calculateArgs_index(0);
        if (condition) {
            return calculateArgs_index(1);
        }
        return calculateArgs_index(2);
    }
    if (operator === `&&`) {
        const condition = !!calculateArgs_index(0);
        if (condition) {
            return calculateArgs_index(1);
        }
        return condition;
    }
    if (operator === `||`) {
        const condition = !!calculateArgs_index(0);
        if (!condition) {
            return calculateArgs_index(1);
        }
        return condition;
    }

    // unary
    const a = calculateArgs_index(0) as number;

    switch (operator) {
        case `=`:
            return a;
        case `declaration`:
            return a;
        case `!`:
            return !a;
        case `++`:
            return a + 1;
        case `--`:
            return a - 1;
    }

    // binary
    const b = calculateArgs_index(1) as number;

    switch (operator) {
        case `+`:
            return a + b;
        case `-`:
            return a - b;
        case `*`:
            return a * b;
        case `/`:
            return a / b;
        case `%`:
            return a % b;
        case `<`:
            return a < b;
        case `>`:
            return a > b;
        case `<=`:
            return a <= b;
        case `>=`:
            return a >= b;
        case `==`:
            return a === b;
        case `!=`:
            return a !== b;
    }

    const _never: never = undefined as typeof operator as never;

    return undefined;
};
