import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';
import { BehaviorSubject, Observable, Subject, combineLatest, zip } from 'rxjs';

import { MouseButton, MoveableContext, MoveableView } from './moveable-view';
import {
    PipescriptNode,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

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
