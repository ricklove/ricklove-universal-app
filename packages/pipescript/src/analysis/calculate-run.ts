import { PipescriptNodeInstance, PipescriptNodeInstance_Operator } from '../types';

export const calculateOperator = (nodeInstance: PipescriptNodeInstance_Operator) => {
    const args = nodeInstance.inputs.map(x => x.runs?.value);
    const [a, b, c] = args as number[];

    switch (nodeInstance.operator) {
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
        case `++`:
            return a + 1;
        case `--`:
            return a - 1;
        case `!`:
            return !a;
        case `<`:
            return a < b;
        case `>`:
            return a > b;
        case `<=`:
            return a <= b;
        case `>=`:
            return a >= b;
        case `==`:
            return a == b;
        case `!=`:
            return a != b;
        case `=`:
            return a;
        case `declaration`:
            return a;
        case `conditional-ternary`:
            return a ? b : c;
    }

    return undefined;
};

export const calculateNodeRun = (allNodeInstances: PipescriptNodeInstance[]) => {
    allNodeInstances.forEach(node => {
        node.inputs.forEach(input => {
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
                input.runs = { value: calculateOperator(source.nodeInstance) };
                return;
            }
            // input.runs={value : inflowPipe.source.}
        });
        node.outputs.forEach(output => {
            const inflowPipe = output.inflowPipe;
            if (!inflowPipe) {
                return;
            }
            const { source } = inflowPipe;
            if (source.kind === `data`) {
                output.runs = { value: JSON.parse(source.json) };
                return;
            }
            if (source.kind === `input`) {
                output.runs = { value: source.input.runs?.value };
                return;
            }
            if (source.kind === `output`) {
                output.runs = { value: source.output.runs?.value };
                return;
            }
            if (source.kind === `operator-output`) {
                output.runs = { value: calculateOperator(source.nodeInstance) };
                return;
            }
            // input.runs={value : inflowPipe.source.}
        });
    });
};
