import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { BehaviorSubject, Subject } from 'rxjs';

import { MouseButton, MoveableView } from './moveable-view';
import { PipeEndpointView, PipeView } from './pipes';
import { SheetView, SheetViewData } from './sheet';
import { ValueEditor, ValueViewerMode } from './value-view';
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

    const control = workflow.body.kind === `nodes` ? workflow.body.control : undefined;
    const operator = workflow.body.kind === `operator` ? workflow.body.operator : undefined;

    return (
        <>
            {control && <View className='basis-[100%] h-0' />}
            <View className=''>
                <MoveableView
                    position={{
                        x: position.x,
                        y: position.y,
                        scale: position.scale,
                    }}
                    onMove={moveNode}
                    mouseButton={MouseButton.Middle}
                >
                    <View className='flex-col relative bg-slate-950/75 border-blue-100 border-solid border-[1px] rounded'>
                        <View
                            className={`flex-row items-center px-1 ${
                                control ? `bg-yellow-900` : operator ? `bg-blue-900` : `bg-gray-800`
                            }`}
                        >
                            <Text className='text-gray-400'>{`${
                                nodeInstance.workflow.name.split(`/`).slice(-1)[0]
                            } #${nodeInstance.key}`}</Text>
                            <View className='flex-1' />
                            {control && <Text className='text-yellow-400'>{`${control}`}</Text>}
                            {operator && (
                                <Text className='text-yellow-400'>{`${operator.substring(
                                    0,
                                    3,
                                )}`}</Text>
                            )}
                        </View>
                        <View className='flex-col flex-1'>
                            <View className='flex-col justify-start items-start p-1'>
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
                                    {/* <View className='flex-1' /> */}
                                    <View className='flex-row flex-wrap max-w-[100vw] m-[-1px]'>
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
                                    {/* <View className='flex-1 justify-start items-end'>
                                        <Text className='text-white text-[10px]'>⛏</Text>
                                    </View> */}
                                </View>
                            </View>
                            <View className='flex-col justify-end items-end p-1'>
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
                        <Footer nodeInstance={nodeInstance} />
                    </View>
                </MoveableView>
            </View>
        </>
    );
};

const Footer = ({ nodeInstance }: { nodeInstance: PipescriptNodeInstance }) => {
    const tabs = [`none`, `sheet`, `code`, `both`] as const;
    const [tab, setTab] = useState(
        nodeInstance.workflow.body.kind === `operator`
            ? `code`
            : (`sheet` as (typeof tabs)[number]),
    );

    return (
        <>
            <View className='flex-row'>
                {tabs.map(x => (
                    <React.Fragment key={x}>
                        <Pressable onPress={() => setTab(x)}>
                            <View className={`p-1 bg-gray-200 ${tab === x ? `` : `opacity-50`}`}>
                                <Text>{x}</Text>
                            </View>
                        </Pressable>
                    </React.Fragment>
                ))}
            </View>
            {(tab === `code` || tab === `both`) && (
                <View className='bg-gray-200'>
                    <Text className='whitespace-pre'>{nodeInstance.runs?.[0]?.code}</Text>
                </View>
            )}
            {(tab === `sheet` || tab === `both`) && (
                <View className='bg-gray-200'>
                    <NodeInstanceSheetView nodeInstance={nodeInstance} />
                </View>
            )}
        </>
    );
};

const NodeInstanceSheetView = ({ nodeInstance }: { nodeInstance: PipescriptNodeInstance }) => {
    const runValueContext = useContext(RunValueContext);
    const [runs, setRuns] = useState(undefined as typeof nodeInstance.runs);
    useEffect(() => {
        const sub = runValueContext.ValueChanged.subscribe(x => {
            console.log(`NodeInstanceSheetView: changed`, { runs: nodeInstance.runs });
            setRuns([...(nodeInstance.runs ?? [])]);
        });
        setRuns([...(nodeInstance.runs ?? [])]);
        return () => {
            sub.unsubscribe();
        };
    }, []);

    console.log(`NodeInstanceSheetView: RENDER`, { runs: nodeInstance.runs });

    if (!runs) {
        return (
            <View>
                <Text>Empty</Text>
            </View>
        );
    }
    const allHeaders: SheetViewData[`header`] =
        runs?.flatMap(r => [
            ...r.inputs.map(x => ({ name: x.name, mode: `input` as ValueViewerMode })),
            ...r.inner.map(x => ({ name: x.name, mode: `inner` as ValueViewerMode })),
            ...r.outputs.map(x => ({ name: x.name, mode: `output` as ValueViewerMode })),
        ]) ?? [];

    const headers = [...new Map(allHeaders.map(x => [x.name, x])).values()];

    return (
        <SheetView
            data={{
                header: headers,
                rows: runs.map(r => ({
                    cells: headers.map(h =>
                        h.mode === `input`
                            ? r.inputs.find(x => x.name === h.name)?.value
                            : h.mode === `inner`
                            ? r.inner.find(x => x.name === h.name)?.value
                            : h.mode === `output`
                            ? r.outputs.find(x => x.name === h.name)?.value
                            : undefined,
                    ),
                })),
            }}
        />
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
    if (pipeSide.kind === `conditional-output`) {
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _never: never = pipeSide;

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

    if (source.kind === `conditional-output`) {
        const sourceConditionId = getPipeKey(
            {
                kind: `input`,
                input: source.condition,
            },
            `out`,
        );
        const sourceDefaultId = getPipeKey(
            {
                kind: `input`,
                input: source.default,
            },
            `out`,
        );
        return (
            <>
                <PipeView sourceId={sourceId} destinationId={destinationId} side={side} />
                {/* <PipeView sourceId={sourceConditionId} destinationId={destinationId} side={side} /> */}
                <PipeView sourceId={sourceDefaultId} destinationId={destinationId} side={side} />
            </>
        );
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
                    {connection.runs?.nameInScope
                        && connection.runs?.nameInScope !== connection.name && (
                            <Text className='text-blue-300'>{`${connection.runs.nameInScope}`}</Text>
                        )}
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
            <ValueEditor
                id={connection.key}
                value={runValue}
                hasOverride={hasOverride}
                onChange={changeValue}
            />
        </>
    );
};
