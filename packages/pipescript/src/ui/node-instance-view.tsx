import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { BehaviorSubject, Subject } from 'rxjs';

import { MouseButton, MoveableView } from './moveable-view';
import { PipeEndpointView, PipeView } from './pipes';
import { getTypeName } from './work-names';
import { calculateRunValue_connectionOverride } from '../analysis/calculate-run';
import {
    PipescriptNodeInstance,
    PipescriptNodePipeConnectionInstance,
    PipescriptPipeValueInstance,
    PipescriptType,
} from '../types';

export const NodeInstancesView = ({
    nodeInstances,
    full = false,
    hideTitles = false,
}: {
    nodeInstances: PipescriptNodeInstance[];
    full?: boolean;
    hideTitles?: boolean;
}) => {
    return (
        <RunValueContext.Provider value={createRunValue()}>
            <View testID='NodeInstancesView:View' className='flex-row'>
                {nodeInstances.map(x => (
                    <React.Fragment key={x.key}>
                        <NodeView nodeInstance={x} />
                    </React.Fragment>
                ))}
            </View>
            <RootComponentsView />
        </RunValueContext.Provider>
    );
};

const RootComponentsView = () => {
    const { Components } = useContext(RunValueContext);

    const [rootComponents, setRootComponents] = useState({} as Record<string, () => JSX.Element>);
    useEffect(() => {
        Components.subscribe(x => {
            console.log(`RootComponentsView: Components.subscribe`, { x });
            setRootComponents({ ...x });
        });
    }, []);

    return (
        <View testID='RootComponentsView:View' className='flex-row'>
            {[...Object.entries(rootComponents)].map(([k, V]) => (
                <React.Fragment key={k}>
                    <V />
                </React.Fragment>
            ))}
        </View>
    );
};

const NodeView = ({ nodeInstance }: { nodeInstance: PipescriptNodeInstance }) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        scale: 1,
    });
    const moveNode = useStableCallback((value: { x: number; y: number; scale: number }) => {
        setPosition(value);
        console.log(`NodeView`, { nodeInstance });
    });

    const workflow = nodeInstance.workflow;

    return (
        <View className='p-1'>
            <MoveableView
                position={{
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                }}
                onMove={moveNode}
                mouseButton={MouseButton.Middle}
            >
                <View className='flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded p-1'>
                    <Text className='text-yellow-400 self-center'>{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text>

                    <View className='flex-col flex-1'>
                        <View className='flex-col justify-start items-start'>
                            {workflow.inputs.map(input => (
                                <React.Fragment key={input.name}>
                                    <NodeConnection
                                        variable={input}
                                        connection={nodeInstance.inputs.find(
                                            x => x.workflowInput === input,
                                        )}
                                        hideOutput={nodeInstance.workflow.body.kind !== `nodes`}
                                    />
                                </React.Fragment>
                            ))}
                        </View>
                        <View className='flex-1'>
                            <View className='flex-row'>
                                <View className='flex-1' />
                                <View className='flex-row flex-wrap'>
                                    {nodeInstance.children.length && (
                                        <>
                                            {nodeInstance.children.map(x => (
                                                <React.Fragment key={x.key}>
                                                    <NodeView nodeInstance={x} />
                                                </React.Fragment>
                                            ))}
                                        </>
                                    )}
                                    {workflow.body.kind === `operator` && (
                                        <>
                                            <Text className='text-blue-600'>
                                                {workflow.body.operator}
                                            </Text>
                                        </>
                                    )}
                                </View>
                                <View className='flex-1 justify-start items-end'>
                                    <Text className='text-white text-[10px]'>⛏</Text>
                                </View>
                            </View>
                        </View>
                        <View className='flex-col justify-end items-end'>
                            {workflow.outputs.map(output => (
                                <React.Fragment key={output.name}>
                                    <NodeConnection
                                        variable={output}
                                        connection={nodeInstance.outputs.find(
                                            x => x.workflowOutput === output,
                                        )}
                                        hideInput={nodeInstance.workflow.body.kind !== `nodes`}
                                    />
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
                </View>
            </MoveableView>
        </View>
    );
};

const getPipeConnectionKey = (
    connection: PipescriptNodePipeConnectionInstance,
    direction: `in` | `out`,
) => {
    return `${connection.key}:${direction}`;
};

const getPipeKey = (
    pipeSide: PipescriptPipeValueInstance[`source`] | PipescriptPipeValueInstance[`destination`],
    direction: `in` | `out`,
) => {
    if (pipeSide.kind === `input`) {
        return getPipeConnectionKey(pipeSide.input, direction);
    }
    if (pipeSide.kind === `output`) {
        return getPipeConnectionKey(pipeSide.output, direction);
    }
    if (pipeSide.kind === `data`) {
        return undefined;
    }
    if (pipeSide.kind === `operator-output`) {
        return undefined;
    }
    if (pipeSide.kind === `operator-input`) {
        return undefined;
    }

    return undefined;
};

const PipeValueView = ({
    pipeValue,
    side,
}: {
    pipeValue: undefined | PipescriptPipeValueInstance;
    side: `inflow` | `outflow`;
}) => {
    const { source, destination } = pipeValue ?? {};
    if (!source || !destination) {
        return <></>;
    }

    const sourceId = getPipeKey(source, `out`);
    const destinationId = getPipeKey(destination, `in`);
    if (!sourceId || !destinationId) {
        return <></>;
    }

    return <PipeView sourceId={sourceId} destinationId={destinationId} side={side} />;
};

const NodeConnection = ({
    variable,
    connection,
    hideInput,
    hideOutput,
}: {
    variable: {
        name: string;
        type?: PipescriptType;
        ignored?: boolean;
    };
    connection: undefined | PipescriptNodePipeConnectionInstance;
    hideInput?: boolean;
    hideOutput?: boolean;
}) => {
    return (
        <View className='flex-column'>
            <View className='flex-row justify-start items-center'>
                <View className='flex-column'>
                    {!hideInput && connection && (
                        <React.Fragment key={connection.key}>
                            <View className='flex-row justify-start items-center'>
                                <PipeEndpointView id={getPipeConnectionKey(connection, `in`)} />
                                <PipeValueView pipeValue={connection.inflowPipe} side='inflow' />
                            </View>
                        </React.Fragment>
                    )}
                </View>
                <View className='pl-1' />
                <Text
                    className={`text-blue-300 ${variable.ignored ? `line-through opacity-50` : ``}`}
                >{`${variable.name}`}</Text>
                {variable.type && (
                    <>
                        <Text className='text-white'>:</Text>
                        <Text className='pl-1 text-green-800'>{`${getTypeName(
                            variable.type,
                        )}`}</Text>
                    </>
                )}
                <View className='pl-1' />
                <View className='flex-column'>
                    {!hideOutput && connection && (
                        <React.Fragment key={connection.key}>
                            <PipeEndpointView id={getPipeConnectionKey(connection, `out`)} />
                            {connection.outflowPipes.map(
                                outflowPipe =>
                                    outflowPipe && (
                                        <React.Fragment key={outflowPipe.key}>
                                            <PipeValueView pipeValue={outflowPipe} side='outflow' />
                                        </React.Fragment>
                                    ),
                            )}
                        </React.Fragment>
                    )}
                </View>
            </View>
            {connection && (
                <>
                    <NodeConnectionValue connection={connection} />
                    {connection.inflowPipe?.pipe.kind === `data` && (
                        <View className='m-[1px] bg-purple-100 opacity-50'>
                            <Text className='px-1 min-w-[60px] text-purple-400'>
                                {connection.inflowPipe?.pipe.json}
                            </Text>
                        </View>
                    )}
                </>
            )}
        </View>
    );
};

const createRunValue = () => ({
    ValueChanged: new Subject<void>(),
    Components: new BehaviorSubject({} as Record<string, () => JSX.Element>),
});
export const RunValueContext = createContext(createRunValue());

const NodeConnectionValue = ({
    connection,
}: {
    connection: PipescriptNodePipeConnectionInstance;
}) => {
    const runValueContext = useContext(RunValueContext);

    const [runValue, setRunValue] = useState(connection.runs?.value);
    const [hasOverride, setHasOverride] = useState(!!connection.runs?.override);

    useEffect(() => {
        const sub = runValueContext.ValueChanged.subscribe(() => {
            console.log(`NodeConnectionValue: ValueChanged.subscribe`, {
                value: connection.runs?.value,
                connection,
            });
            setRunValue(connection.runs?.value);
            setHasOverride(connection.runs?.override !== undefined);
        });
        return () => {
            sub.unsubscribe();
        };
    }, []);

    const changeValue = (value: unknown) => {
        calculateRunValue_connectionOverride(connection, value);
        runValueContext.ValueChanged.next();
    };

    return (
        <>
            <ValueEditorContainer
                id={connection.key}
                value={runValue}
                hasOverride={hasOverride}
                onChange={changeValue}
            />
        </>
    );
};

const ValueEditorContainer = ({
    id,
    value,
    hasOverride,
    onChange,
}: {
    id: string;
    value: unknown;
    hasOverride: boolean;
    onChange: (value: unknown) => void;
}) => {
    const runValueContext = useContext(RunValueContext);

    const changeValue = useStableCallback((v: unknown) => {
        toggleEdit(false);
        onChange(v);
    });

    const toggleEdit = useStableCallback((visible: boolean) => {
        console.log(`ValueEditor: toggleEdit`, { visible });
        const newShowEdit = visible;

        const components = runValueContext.Components.value;
        if (newShowEdit) {
            components[id] = () => (
                <ValueEditor
                    id={id}
                    value={value}
                    onChange={changeValue}
                    onCancel={() => toggleEdit(false)}
                />
            );
        } else {
            delete components[id];
        }
        runValueContext.Components.next(components);
    });

    return (
        <>
            <Pressable onPressIn={() => toggleEdit(true)}>
                <View className={`m-[1px] ${hasOverride ? `bg-green-100 ` : `bg-purple-100`}`}>
                    <Text
                        className={`px-1 min-w-[60px] ${
                            hasOverride ? `text-green-600` : `text-purple-600`
                        }`}
                    >
                        {JSON.stringify(value)}
                    </Text>
                </View>
            </Pressable>
        </>
    );
};

const ValueEditor = ({
    id,
    value: valueRaw,
    onChange,
    onCancel,
}: {
    id: string;
    value: unknown;
    onChange: (value: unknown) => void;
    onCancel: () => void;
}) => {
    const [value, setValue] = useState(JSON.stringify(valueRaw));
    const save = useStableCallback(() => {
        onChange(JSON.parse(value));
    });
    const clear = useStableCallback(() => {
        onChange(undefined);
    });
    const cancel = useStableCallback(() => {
        onCancel();
    });

    return (
        <View className='absolute flex-col bg-gray-100 p-2 rounded z-10'>
            <TextInput className='bg-white' value={value} onChangeText={x => setValue(x)} />
            <View className='flex-row justify-between'>
                <Pressable onPress={cancel}>
                    <View className='bg-gray-200 p-1 m-1'>
                        <Text>Cancel</Text>
                    </View>
                </Pressable>

                <Pressable onPress={clear}>
                    <View className='bg-red-200 p-1 m-1'>
                        <Text>Clear</Text>
                    </View>
                </Pressable>

                <Pressable onPress={save}>
                    <View className='bg-blue-200 p-1 m-1'>
                        <Text>Save</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};
