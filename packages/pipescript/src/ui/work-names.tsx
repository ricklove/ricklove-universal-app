import { Text } from 'react-native';

import { PipescriptType, PipescriptWorkflowInput } from '../types';

export const getTypeName = (type: PipescriptType) => {
    if (type.kind === `simple`) {
        return type.type;
    }

    return JSON.stringify(type);
};

export const WorkflowInputName = ({ input }: { input: PipescriptWorkflowInput }) => {
    return (
        <Text
            className={`text-blue-300 ${input.ignored ? `line-through opacity-50` : ``}`}
        >{`${input.name}`}</Text>
    );
};
