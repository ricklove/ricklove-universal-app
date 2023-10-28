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
    PipescriptNodePipeConnectionInstance,
    PipescriptPipe,
    PipescriptPipeValue,
    PipescriptType,
    PipescriptVariable,
    PipescriptWorkflow,
    PipescriptWorkflowInput,
} from '../types';

export const calculatePipeEndpointIdForNode = ({
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

export const calculatePipeEndpointIdForWorkflow = ({
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

export const calculatePipeEndpointIdForPipeSource = ({
    pipe,
    workflow,
}: {
    pipe: undefined | PipescriptPipeValue;
    workflow: PipescriptWorkflow;
}) => {
    if (!pipe) {
        return undefined;
    }

    if (pipe.kind === `workflow-operator`) {
        return [`operator`].map(name =>
            calculatePipeEndpointIdForWorkflow({
                workflowUri: workflow.workflowUri,
                direction: `out`,
                name,
            }),
        );
    }

    if (pipe.kind === `workflow-input`) {
        return [pipe.workflowInputName].map(name =>
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

export type PipeEndpointsRegistryType = {
    hostObservable: Observable<View>;
    hostView: null | View;
    endpoints: {
        [id: string]: undefined | Subject<{ x: number; y: number }>;
    };
};
export const PipeEndpointsRegistry = createContext<PipeEndpointsRegistryType>({
    hostObservable: new Subject(),
    hostView: null,
    endpoints: {},
});

const getOrCreateEndpointSubject = (registry: PipeEndpointsRegistryType, id: string) => {
    return (
        registry.endpoints[id]
        ?? (registry.endpoints[id] = new BehaviorSubject({
            x: 0,
            y: 0,
        }))
    );
};

export const PipeView = ({
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
        const init = new Subject<void>();
        combineLatest([sourceEndpoint, destinationEndpoint, init]).subscribe(
            ([source, destination]) => {
                console.log(`PipeView draw`, { source, destination });
                setPosition({ source, destination });
            },
        );

        // initial
        console.log(`initial`);
        init.next();
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
                        <View className='absolute'>
                            <View className='w-[1000px] text-[4px] rotate-45'>
                                <Text className='text-white'>{`(${sourceId})=>(${destinationId})`}</Text>
                                {/* <Text className='text-white'>{`(${position.source.x},${position.source.y})=>(${position.destination.x},${position.destination.y})`}</Text> */}
                            </View>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

export const PipeEndpointView = ({ id }: { id: string; }) => {
    const size = 12;

    const registry = useContext(PipeEndpointsRegistry);
    const moveContext = useContext(MoveableContext);

    const targetRef = useRef(null as null | View);

    useLayoutEffect(() => {
        // console.log(`PipeEndpointView useLayoutEffect`, { registry });

        const calculate = () => {
            const h = registry.hostView;
            if (!h) {
                console.log(`PipeEndpointView useLayoutEffect - host NOT READY`, { registry });
                return;
            }
            const t = targetRef.current;
            if (!t) {
                console.log(`PipeEndpointView useLayoutEffect - component NOT READY`, { registry });
                return;
            }

            t.measureLayout(h, (left, top, width, height) => {
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
        };

        calculate();
        registry.hostObservable.subscribe(h => {
            calculate();
        });
    }, [
        !!targetRef.current,
        moveContext.position.x,
        moveContext.position.y,
        moveContext.position.scale,
    ]);

    const debug = true;
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
                {debug && (
                    <View className='absolute pt-1 rotate-90'>
                        <Text
                            className='text-blue-400'
                        >{id}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};