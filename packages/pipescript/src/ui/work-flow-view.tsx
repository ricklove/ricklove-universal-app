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
    PipeEndpointView,
    PipeView,
    calculatePipeEndpointIdForNode,
    calculatePipeEndpointIdForPipeSource,
    calculatePipeEndpointIdForWorkflow,
} from './pipes';
import { WorkflowInputName, getTypeName } from './work-names';
import {
    PipescriptNode,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

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
                            {workflow.body.nodes?.map(n => (
                                <React.Fragment key={n.nodeId}>
                                    <View className='p-2'>
                                        <NodeView node={n} container={workflow} />
                                    </View>
                                </React.Fragment>
                            ))}
                            {workflow.body.kind === `operator` && (
                                <>
                                    <View className='p-2 flex-row items-center'>
                                        <Text className='pl-1 text-blue-400'>
                                            {workflow.body.operator}
                                        </Text>
                                        <Text className='pl-1' />
                                        <View className=''>
                                            {[
                                                calculatePipeEndpointIdForWorkflow({
                                                    workflowUri: workflow.workflowUri,
                                                    direction: `out`,
                                                    name: `operator`,
                                                }),
                                            ].map(operatorEndpointId => (
                                                <React.Fragment key={operatorEndpointId}>
                                                    <PipeEndpointView id={operatorEndpointId} />
                                                    {workflow.inputs.map(inPipe => (
                                                        <React.Fragment key={inPipe.name}>
                                                            <PipeView
                                                                destinationId={operatorEndpointId}
                                                                sourceId={calculatePipeEndpointIdForWorkflow(
                                                                    {
                                                                        workflowUri:
                                                                            workflow.workflowUri,
                                                                        direction: `in`,
                                                                        name: inPipe.name,
                                                                    },
                                                                )}
                                                            />
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </View>
                                    </View>
                                </>
                            )}
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
        console.log(`NodeView`, { node, container });
    });

    const workflow = (() => {
        return container.workflows?.find(w => w.workflowUri === node.workflowUri);
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
                                            />
                                            {calculatePipeEndpointIdForPipeSource({
                                                workflow: container,
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
