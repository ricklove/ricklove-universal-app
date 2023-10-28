import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';
import { Subject, delay } from 'rxjs';

import { MouseButton, MoveableView } from './moveable-view';
import { WorkFlowView } from './work-flow-view';
import { PipescriptNodeInstance, PipescriptWorkflow } from '../types';
import { NodeInstancesView } from './node-instance-view';
import { loadRuntime } from '../analysis/load-data';
import { PipeEndpointsRegistry, PipeEndpointsRegistryType } from './pipes';

export const WorkCanvasView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
    const nodeInstancesDatasetRef = useRef(loadRuntime(workflow).dataset);
    const nodeInstances = nodeInstancesDatasetRef.current.rootNodeInstances;

    const viewRef = useRef(null as null | View);
    const hostRef = useRef(new Subject<View>());
    const context = useRef<PipeEndpointsRegistryType>({
        hostObservable: hostRef.current.pipe(delay(250)),
        hostView: null,
        endpoints: {},
    });

    useLayoutEffect(() => {
        if (!viewRef.current) {
            return;
        }
        context.current.hostView = viewRef.current;
        hostRef.current.next(viewRef.current);
    }, [!viewRef.current]);

    const tabs = [`work-flow`, `node-instances`] as const;
    const [tab, setTab] = useState(`work-flow` as typeof tabs[number]);

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
                                    <View className={`p-1 m-1 border-solid border-[1px] border-gray-800 ${tab === x ? `` : `opacity-50`}`}>
                                        <Text
                                            className={`text-gray-800 ${tab === x ? `` : `opacity-50`}`}
                                        >{x}</Text>
                                    </View>
                                </Pressable>
                            </React.Fragment>
                        ))}
                    </View>
                ))}
            >
                <View ref={viewRef} className='w-full h-full justify-center items-center'>
                    <PipeEndpointsRegistry.Provider value={context.current}>
                        {tab === `work-flow` && (
                            <WorkFlowView workflow={workflow} full />
                        )}
                        {tab === `node-instances` && (
                            <NodeInstancesView nodeInstances={nodeInstances} full />
                        )}
                    </PipeEndpointsRegistry.Provider>
                </View>
            </MoveableView>
        </View>
    );
};
