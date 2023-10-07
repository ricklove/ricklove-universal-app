import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';
import { Subject, delay } from 'rxjs';

import { MouseButton, MoveableView } from './moveable-view';
import { PipeEndpointsRegistry, PipeEndpointsRegistryType, WorkFlowView } from './work-flow-view';
import { PipescriptWorkflow } from '../types';

export const WorkCanvasView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
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
            >
                <View ref={viewRef} className='w-full h-full justify-center items-center'>
                    <PipeEndpointsRegistry.Provider value={context.current}>
                        <WorkFlowView workflow={workflow} full />
                    </PipeEndpointsRegistry.Provider>
                </View>
            </MoveableView>
        </View>
    );
};
