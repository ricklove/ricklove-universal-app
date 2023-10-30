import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';
import { Subject, delay } from 'rxjs';

import { MouseButton, MoveableContext, MoveableView } from './moveable-view';
import { NodeInstancesView } from './node-instance-view';
import { PipeEndpointsRegistryContext, PipeViewHost, createPipeEndpointsRegistry } from './pipes';
import { WorkFlowView } from './work-flow-view';
import { loadRuntime } from '../analysis/load-data';
import { PipescriptWorkflow } from '../types';

export const WorkCanvasView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
    const nodeInstancesDatasetRef = useRef(loadRuntime(workflow).dataset);
    const nodeInstances = nodeInstancesDatasetRef.current.rootNodeInstances;

    const tabs = [`work-flow`, `node-instances`] as const;
    const [tab, setTab] = useState(`node-instances` as (typeof tabs)[number]);

    return (
        <View className='bg-slate-900 w-full h-full overflow-hidden'>
            <MoveableView
                position={{
                    x: 0,
                    y: 0,
                    scale: 1,
                }}
                onMove={() => {
                    // ignore
                }}
                mouseButton={MouseButton.Middle}
                enableScaling
                wholeCanvas
                outerClassName='w-full h-full'
                innerClassName='w-full h-full'
                HeaderComponent={useStableCallback(() => (
                    <View className='flex-row'>
                        {tabs.map(x => (
                            <React.Fragment key={x}>
                                <Pressable onPress={() => setTab(x)}>
                                    <View
                                        className={`p-1 m-1 border-solid border-[1px] border-gray-800 ${
                                            tab === x ? `` : `opacity-50`
                                        }`}
                                    >
                                        <Text
                                            className={`text-gray-800 ${
                                                tab === x ? `` : `opacity-50`
                                            }`}
                                        >
                                            {x}
                                        </Text>
                                    </View>
                                </Pressable>
                            </React.Fragment>
                        ))}
                    </View>
                ))}
            >
                <PipeViewContextHost>
                    <View className='w-full h-full justify-center items-center'>
                        {tab === `work-flow` && <WorkFlowView workflow={workflow} full />}
                        {tab === `node-instances` && (
                            <NodeInstancesView nodeInstances={nodeInstances} full />
                        )}
                    </View>
                </PipeViewContextHost>
            </MoveableView>
        </View>
    );
};

const PipeViewContextHost = ({ children }: { children: JSX.Element }) => {
    const viewRef = useRef(null as null | View);
    const hostRef = useRef(new Subject<View>());
    const context = useRef(createPipeEndpointsRegistry());

    const [pipes, setPipes] = useState(context.current.pipes.value);

    useLayoutEffect(() => {
        if (!viewRef.current) {
            return;
        }
        context.current.hostView = viewRef.current;
        hostRef.current.next(viewRef.current);

        const sub = context.current.pipes.subscribe(v => {
            setPipes(v);
        });
        setPipes(pipes);
        return () => {
            sub.unsubscribe();
        };
    }, [!viewRef.current]);

    return (
        <PipeEndpointsRegistryContext.Provider value={context.current}>
            <View ref={viewRef} className='w-full h-full'>
                <MoveableContext.Consumer>
                    {({ position: containerPosition }) => (
                        <MoveableContext.Provider
                            value={{
                                position: {
                                    x: 0,
                                    y: 0,
                                    scale: containerPosition.scale,
                                },
                                wholeCanvas: true,
                            }}
                        >
                            <PipeViewHost />
                            {children}
                        </MoveableContext.Provider>
                    )}
                </MoveableContext.Consumer>
            </View>
        </PipeEndpointsRegistryContext.Provider>
    );
};
