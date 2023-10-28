import { PipescriptNodeInstance, PipescriptNodePipeConnectionInputInstance, PipescriptNodePipeConnectionInstance, PipescriptPipeValueInstance, PipescriptType, PipescriptVariable, PipescriptWorkflow, PipescriptWorkflowInput } from "../types";
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
import { MouseButton, MoveableView } from "./moveable-view";
import { PipeEndpointView, PipeView, calculatePipeEndpointIdForPipeSource, calculatePipeEndpointIdForWorkflow } from "./pipes";
import { WorkflowInputName, getTypeName } from "./work-names";

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
        <View className={`flex-row`}>
            {nodeInstances.map(x => (
                <React.Fragment key={x.key}>
                    <NodeView
                        nodeInstance={x}
                    />
                </React.Fragment>
            ))}
        </View>
    )
}

const NodeView = ({
    nodeInstance,
}: {
    nodeInstance: PipescriptNodeInstance;
}) => {
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
        <View
            className={`p-1`}
        >
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
                    className={`flex-column relative bg-slate-950/75 border-blue-100 border-solid border-[1px] m-[-1px] rounded p-1`}
                >
                    <Text className='text-yellow-400 self-center'>{`${nodeInstance.workflow.name} #${nodeInstance.key}`}</Text>

                    <View className='flex-row flex-1'>
                        <View className='flex-col justify-start items-start'>
                            {workflow.inputs.map(input => (
                                <React.Fragment key={input.name}>
                                    <NodeConnection variable={input} connection={nodeInstance.inputs.find(x => x.workflowInput === input)} />
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
                                    {nodeInstance.children.length && (
                                        <View className={`flex-row`}>
                                            {nodeInstance.children.map(x => (
                                                <React.Fragment key={x.key}>
                                                    <NodeView
                                                        nodeInstance={x}
                                                    />
                                                </React.Fragment>
                                            ))}
                                        </View>
                                    )}
                                    {workflow.body.kind === `operator` && (
                                        <React.Fragment>
                                            <NodeConnection variable={{ name: workflow.body.operator }}
                                            //  connectionsIn={nodeInstance.inputs} connectionsOut={nodeInstance.outputs}
                                            />
                                        </React.Fragment>
                                    )}
                                </View>
                            </View>
                        </View>
                        <View className='flex-col justify-end items-end'>
                            {workflow.outputs.map(output => (
                                <React.Fragment key={output.name}>
                                    <NodeConnection variable={output} connection={nodeInstance.outputs.find(x => x.workflowOutput === output)} />
                                </React.Fragment>
                            ))}
                        </View>
                    </View>
                </View>

            </MoveableView>
        </View>
    );
}

const getPipeConnectionKey = (connection: PipescriptNodePipeConnectionInstance, direction: `in` | `out`) => {
    return `${connection.key}:${direction}`;
}

const getPipeKey = (pipeSide: PipescriptPipeValueInstance[`source`] | PipescriptPipeValueInstance[`destination`], direction: `in` | `out`) => {
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
}

const PipeValueView = ({
    pipeValue,
    side,
}: {
    pipeValue: undefined | PipescriptPipeValueInstance;
    side: `inflow` | `outflow`,
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

    return <PipeView sourceId={sourceId} destinationId={destinationId} side={side} />
}

const NodeConnection = ({
    variable,
    connection: connectionRaw,
    connectionsIn: connectionsInRaw,
    connectionsOut: connectionsOutRaw,
}: {
    variable: {
        name: string;
        type?: PipescriptType;
        ignored?: boolean;
    };
    connection?: undefined | PipescriptNodePipeConnectionInstance;
    connectionsIn?: PipescriptNodePipeConnectionInstance[];
    connectionsOut?: PipescriptNodePipeConnectionInstance[];
}) => {

    const connectionsIn = connectionsInRaw ?? (connectionRaw ? [connectionRaw] : []);
    const connectionsOut = connectionsOutRaw ?? (connectionRaw ? [connectionRaw] : []);

    return (
        <View className='flex-row justify-start items-center'>
            <View className='flex-column'>
                {connectionsIn.map(x => (
                    <React.Fragment key={x.key}>
                        <View className='flex-row justify-start items-center'>
                            {x.inflowPipe?.pipe.kind === `data` && (
                                <Text className='text-purple-400 px-1'>
                                    {x.inflowPipe?.pipe.json}
                                </Text>
                            )}
                            {x.runs?.value != null && (
                                <Text className='text-purple-400 px-1'>
                                    {JSON.stringify(x.runs.value)}
                                </Text>
                            )}
                            <PipeEndpointView id={getPipeConnectionKey(x, `in`)} />
                            <PipeValueView pipeValue={x.inflowPipe} side={`inflow`} />
                        </View>
                    </React.Fragment>
                ))}
            </View>
            <Text className='pl-1' />
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
            <Text className='pl-1' />
            <View className='flex-column'>
                {connectionsOut.map(x => (
                    <React.Fragment key={x.key}>
                        <PipeEndpointView id={getPipeConnectionKey(x, `out`)} />
                        {x.outflowPipes.map(outflowPipe => outflowPipe && (
                            <React.Fragment key={outflowPipe.key}>
                                <PipeValueView pipeValue={outflowPipe} side={`outflow`} />
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </View>
        </View>
    );
}