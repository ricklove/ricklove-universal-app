import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';

import { MoveableView } from './moveable-view';
import { PipescriptNode, PipescriptType, PipescriptWorkflow } from '../types';

const getTypeName = (type: PipescriptType) => {
    if (type.kind === `simple`) {
        return type.type;
    }

    return JSON.stringify(type);
};

export const WorkFlowView = ({
    workflow,
    full,
}: {
    workflow: PipescriptWorkflow;
    full?: boolean;
}) => {
    return (
        <View
            className={`flex-column relative border-blue-100 border-solid border-[1px] rounded
            ${full ? `w-[100vw] h-[100vh]` : `min-w-[200px] min-h-[100px]`}`}
        >
            <View className='absolute'>
                {workflow.nodes.map(n => (
                    <React.Fragment key={n.nodeId}>
                        <NodeView node={n} container={workflow} />
                    </React.Fragment>
                ))}
            </View>

            <Text className='text-yellow-400 self-center'>{`${workflow.name}`}</Text>

            <View className='flex-row flex-1'>
                <View className='flex-col flex-1 justify-center'>
                    {workflow.inputs.map(input => (
                        <React.Fragment key={input.name}>
                            <Text>{input.name}</Text>
                        </React.Fragment>
                    ))}
                </View>
                <View className='flex-col flex-1 justify-center items-end'>
                    {workflow.outputs.map(output => (
                        <React.Fragment key={output.name}>
                            <View className='p-2 flex-row justify-center'>
                                {output.pipe && (
                                    <>
                                        {output.pipe.kind === `data` && (
                                            <Text className='text-purple-400'>
                                                {output.pipe.json}
                                            </Text>
                                        )}
                                    </>
                                )}
                                <Text className='pr-1'>🔵</Text>
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

            <Text className='text-yellow-400 self-center'>{`${workflow.workflowUri}`}</Text>

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
        >
            <View
                className='p-2 flex-column bg-slate-600 border-blue-100 border-solid border-[1px] rounded'
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
                        <View className='flex-col justify-center'>
                            {workflow.inputs.map(input => (
                                <React.Fragment key={input.name}>
                                    <Text>{input.name}</Text>
                                </React.Fragment>
                            ))}
                        </View>
                        <View className='flex-1 relative'>
                            <WorkFlowView workflow={workflow} />
                        </View>
                        <View className='flex-col justify-center items-end'>
                            {workflow.outputs.map(output => (
                                <React.Fragment key={output.name}>
                                    <View className='p-2 flex-row justify-center relative'>
                                        <Text className='text-blue-300'>{`${output.name}`}</Text>
                                        <Text className='text-white'>:</Text>
                                        <Text className='pl-1 text-green-800'>{`${getTypeName(
                                            output.type,
                                        )}`}</Text>
                                        <Text className='absolute right-[-18px]'>🔵</Text>
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
