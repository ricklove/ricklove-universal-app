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
import { Subject, combineLatest, zip } from 'rxjs';

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

const getTypeName = (type: PipescriptType) => {
    if (type.kind === `simple`) {
        return type.type;
    }

    return JSON.stringify(type);
};

const WorkflowInputName = ({ input }: { input: PipescriptWorkflowInput }) => {
    return (
        <Text
            className={`text-blue-300 ${input.ignored ? `line-through opacity-50` : ``}`}
        >{`${input.name}`}</Text>
    );
};

export const WorkFlowView = ({
    workflow,
    full = false,
    hideTitles = false,
}: {
    workflow: PipescriptWorkflow;
    full?: boolean;
    hideTitles?: boolean;
}) => {
    // ${full ? `min-w-[20vw] min-h-[20vh]` : `min-w-[20px] min-h-[10px]`}
    return (
        <View
            className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded
            `}
        >
            {!hideTitles && (
                <Text className='text-yellow-400 self-center'>{`${workflow.name}`}</Text>
            )}

            <View className='flex-row flex-1'>
                <View className='flex-col justify-start items-start'>
                    {workflow.inputs.map(input => (
                        <React.Fragment key={input.name}>
                            <View className='p-1 flex-row justify-start items-center'>
                                <WorkflowInputName input={input} />
                                <Text className='text-white'>:</Text>
                                <Text className='pl-1 text-green-800'>{`${getTypeName(
                                    input.type,
                                )}`}</Text>
                                <Text className='pl-1' />
                                <View className=''>
                                    <PipeEndpointView
                                        id={calculatePipeEndpointIdForWorkflow({
                                            workflowUri: workflow.workflowUri,
                                            direction: `in`,
                                            name: input.name,
                                        })}
                                        container={workflow}
                                    />
                                </View>
                                <Text className='pl-1' />
                            </View>
                        </React.Fragment>
                    ))}
                </View>
                <View className='flex-1'>
                    <View className='flex-col justify-center items-center'>
                        <View className='justify-center items-center'>
                            <Text className='text-white animate-bounce text-[8px] absolute top-2'>
                                ⛏
                            </Text>
                        </View>
                        <View className='flex-row'>
                            {workflow.nodes.map(n => (
                                <React.Fragment key={n.nodeId}>
                                    <View className='p-2'>
                                        <NodeView node={n} container={workflow} />
                                    </View>
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
                </View>
                <View className='flex-col justify-end items-end'>
                    {workflow.outputs.map(output => (
                        <React.Fragment key={output.name}>
                            <View className='p-1 flex-row justify-end items-center'>
                                {output.pipe && (
                                    <>
                                        {output.pipe.kind === `data` && (
                                            <Text className='text-purple-400'>
                                                {output.pipe.json}
                                            </Text>
                                        )}
                                    </>
                                )}
                                <Text className='pr-1' />
                                <View className=''>
                                    <PipeEndpointView
                                        id={calculatePipeEndpointIdForWorkflow({
                                            workflowUri: workflow.workflowUri,
                                            direction: `out`,
                                            name: output.name,
                                        })}
                                        container={workflow}
                                    />
                                    {calculatePipeEndpointIdForPipeSource({
                                        workflow,
                                        pipe: output.pipe,
                                    })?.map(sourceId => (
                                        <PipeView
                                            key={sourceId}
                                            destinationId={calculatePipeEndpointIdForWorkflow({
                                                workflowUri: workflow.workflowUri,
                                                direction: `out`,
                                                name: output.name,
                                            })}
                                            sourceId={sourceId}
                                        />
                                    ))}
                                </View>
                                <Text className='pr-1' />
                                <Text className='text-blue-300'>{`${output.name}`}</Text>
                                <Text className='text-white'>:</Text>
                                <Text className='pl-1 text-green-800'>{`${getTypeName(
                                    output.type,
                                )}`}</Text>
                            </View>
                        </React.Fragment>
                    ))}
                </View>
            </View>

            {!hideTitles && (
                <Text className='text-yellow-400 self-center'>{`${workflow.workflowUri}`}</Text>
            )}

            {/* {workflow.workflows?.map(w => (
                <React.Fragment key={w.name}>
                    <View className='absolute left-0 top-0 scale-50'>
                        <WorkFlowView workflow={w} />
                    </View>
                </React.Fragment>
            ))} */}
        </View>
    );
};

const NodeView = ({ node, container }: { node: PipescriptNode; container: PipescriptWorkflow }) => {
    const [position, setPosition] = useState({
        x: node.layout?.position.x ?? 0,
        y: node.layout?.position.y ?? 0,
        scale: node.layout?.scale ?? 1,
    });
    const moveNode = useStableCallback((value: { x: number; y: number; scale: number }) => {
        setPosition(value);
    });

    const workflow = (() => {
        if (node.implementation.kind === `workflow`) {
            const imp = node.implementation;
            return container.workflows?.find(w => w.workflowUri === imp.workflowUri);
        }
    })();
    return (
        <MoveableView
            position={{
                x: position.x,
                y: position.y,
                scale: position.scale,
            }}
            onMove={moveNode}
            mouseButton={MouseButton.Left}
        >
            <View
                className='flex-column bg-zinc-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded'
                style={{
                    left: position.x,
                    top: position.y,
                    // transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                <View className='flex-row justify-center'>
                    {workflow && (
                        <Text className='text-yellow-400 self-center'>{workflow.name}</Text>
                    )}
                    <Text className='pl-2 text-yellow-400 self-center'>#{node.nodeId}</Text>
                </View>
                {workflow && (
                    <View className='flex-row flex-1'>
                        <View className='flex-col justify-start items-start'>
                            {workflow.inputs.map(input => (
                                <React.Fragment key={input.name}>
                                    <View className='p-1 flex-row justify-center items-center relative'>
                                        {(() => {
                                            const inputPipe = node.inputPipes.find(
                                                p => p.name === input.name,
                                            );
                                            if (!inputPipe) {
                                                return undefined;
                                            }

                                            return (
                                                <>
                                                    {inputPipe.kind === `data` && (
                                                        <Text className='ml-[-16px] mr-[16px] text-purple-400'>
                                                            {inputPipe.json}
                                                        </Text>
                                                    )}
                                                </>
                                            );
                                        })()}
                                        <View className='ml-[-8px] mr-[0px]'>
                                            <PipeEndpointView
                                                id={calculatePipeEndpointIdForNode({
                                                    nodeId: node.nodeId,
                                                    direction: `in`,
                                                    name: input.name,
                                                })}
                                                container={container}
                                            />
                                            {calculatePipeEndpointIdForPipeSource({
                                                workflow,
                                                pipe: node.inputPipes.find(
                                                    x => x.name === input.name,
                                                ),
                                            })?.map(sourceId => (
                                                <PipeView
                                                    key={sourceId}
                                                    destinationId={calculatePipeEndpointIdForNode({
                                                        nodeId: node.nodeId,
                                                        direction: `in`,
                                                        name: input.name,
                                                    })}
                                                    sourceId={sourceId}
                                                />
                                            ))}
                                        </View>
                                        <Text className='pl-1' />
                                        <WorkflowInputName input={input} />
                                        {/* <Text className='text-white'>:</Text>
                                        <Text className='pl-1 text-green-800'>{`${getTypeName(
                                            input.type,
                                        )}`}</Text> */}
                                    </View>
                                </React.Fragment>
                            ))}
                        </View>
                        <View className='flex-1'>
                            <WorkFlowView workflow={workflow} hideTitles />
                        </View>
                        <View className='flex-col justify-end items-end'>
                            {workflow.outputs.map(output => (
                                <React.Fragment key={output.name}>
                                    <View className='p-1 flex-row justify-center items-center relative'>
                                        <Text className='text-blue-300'>{`${output.name}`}</Text>
                                        {/* <Text className='text-white'>:</Text>
                                        <Text className='pl-1 text-green-800'>{`${getTypeName(
                                            output.type,
                                        )}`}</Text> */}
                                        <Text className='pr-1' />
                                        <View className='ml-[0px] mr-[-8px]'>
                                            <PipeEndpointView
                                                id={calculatePipeEndpointIdForNode({
                                                    nodeId: node.nodeId,
                                                    direction: `out`,
                                                    name: output.name,
                                                })}
                                                container={container}
                                            />
                                        </View>
                                    </View>
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
                )}
                {/* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */}
            </View>
        </MoveableView>
    );
};

const calculatePipeEndpointIdForNode = ({
    nodeId,
    name,
    direction,
}: {
    nodeId: string;
    name: string;
    direction: `out` | `in`;
}) => {
    return `node:${nodeId}:${direction}:${name}`;
};

const calculatePipeEndpointIdForWorkflow = ({
    workflowUri,
    name,
    direction,
}: {
    workflowUri: string;
    name: string;
    direction: `out` | `in`;
}) => {
    return `workflow:${workflowUri}:${direction}:${name}`;
};

const calculatePipeEndpointIdForPipeSource = ({
    pipe,
    workflow,
}: {
    pipe: undefined | PipescriptPipeValue;
    workflow: PipescriptWorkflow;
}) => {
    if (!pipe) {
        return undefined;
    }

    if (pipe.kind === `workflow-input`) {
        return pipe.workflowInputNames.map(name =>
            calculatePipeEndpointIdForWorkflow({
                workflowUri: workflow.workflowUri,
                direction: `in`,
                name,
            }),
        );
    }

    if (pipe.kind === `node`) {
        return [
            calculatePipeEndpointIdForNode({
                nodeId: pipe.sourceNodeId,
                name: pipe.sourceNodeOutputName,
                direction: `out`,
            }),
        ];
    }

    // if(pipe.kind === `data`){

    // }

    return [];
};

type PipeEndpointsRegistryType = {
    hostRef: { current: null | View };
    endpoints: {
        [id: string]: undefined | Subject<{ x: number; y: number }>;
    };
};
export const PipeEndpointsRegistry = createContext<PipeEndpointsRegistryType>({
    hostRef: { current: null },
    endpoints: {},
});

const getOrCreateEndpointSubject = (registry: PipeEndpointsRegistryType, id: string) => {
    return registry.endpoints[id] ?? (registry.endpoints[id] = new Subject());
};

const PipeView = ({
    sourceId,
    destinationId,
}: {
    sourceId: undefined | string;
    destinationId: string;
}) => {
    const registry = useContext(PipeEndpointsRegistry);

    const destinationEndpoint = getOrCreateEndpointSubject(registry, destinationId);
    const sourceEndpoint = !sourceId ? undefined : getOrCreateEndpointSubject(registry, sourceId);

    const [position, setPosition] = useState({
        source: { x: 0, y: 0 },
        destination: { x: 0, y: 0 },
    });

    useLayoutEffect(() => {
        if (!sourceEndpoint || !destinationEndpoint) {
            console.log(`PipeView !sourceEndpoint || !destinationEndpoint`, {
                sourceId,
                destinationId,
                registry,
                sourceEndpoint,
                destinationEndpoint,
            });
            return;
        }

        combineLatest([sourceEndpoint, destinationEndpoint]).subscribe(([source, destination]) => {
            console.log(`PipeView draw`, { source, destination });
            setPosition({ source, destination });
        });
    }, [!destinationEndpoint, !sourceEndpoint]);

    const debug = false;
    const xDelta = position.destination.x - position.source.x;
    const yDelta = position.destination.y - position.source.y;
    const length = Math.sqrt(xDelta * xDelta + yDelta * yDelta);
    const angle = Math.atan2(yDelta, xDelta);
    return (
        <View className='w-0 h-0 justify-center items-center'>
            <View className='w-0 h-0 absolute'>
                <View
                    style={{
                        transform: `translate(${-xDelta + 4}px,${-yDelta - 2}px)`,
                    }}
                >
                    <View
                        style={{
                            transform: `rotate(${angle}rad)`,
                        }}
                    >
                        <View
                            className='bg-red-400'
                            style={{
                                height: 1,
                                width: length,
                            }}
                        />
                    </View>
                </View>

                {debug && (
                    <>
                        <View className='w-20'>
                            <Text className='text-white'>{`(${position.source.x},${position.source.y})=>(${position.destination.x},${position.destination.y})`}</Text>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

const PipeEndpointView = ({ id, container }: { id: string; container: PipescriptWorkflow }) => {
    const size = 12;

    const registry = useContext(PipeEndpointsRegistry);
    const moveContext = useContext(MoveableContext);

    const targetRef = useRef(null as null | View);

    useLayoutEffect(() => {
        // console.log(`PipeEndpointView useLayoutEffect`, { registry });

        targetRef.current?.measureLayout(registry.hostRef.current!, (left, top, width, height) => {
            console.log(`PipeEndpointView useLayoutEffect measureLayout NEXT`, {
                id,
                left,
                top,
                width,
                height,
                registry,
            });
            const s = getOrCreateEndpointSubject(registry, id);
            s.next({
                x: left + moveContext.position.x,
                y: top + moveContext.position.y,
            });
        });
    }, [moveContext.position.x, moveContext.position.y, moveContext.position.scale]);

    return (
        <View className='w-2 h-2 justify-center items-center'>
            <View ref={targetRef} className='w-0 h-0 absolute pt-1'>
                <View
                    className='bg-blue-400 border-[1px] border-blue-950 rounded-full'
                    style={{
                        width: size,
                        height: size,
                        marginLeft: -size / 2,
                        marginTop: -size / 2,
                    }}
                />
            </View>
        </View>
    );
};
