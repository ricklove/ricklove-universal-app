import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';

import { MouseButton, MoveableView } from './moveable-view';
import { PipeEndpointsRegistry, WorkFlowView } from './work-flow-view';
import { PipescriptWorkflow } from '../types';

export const WorkCanvasView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
    const viewRef = useRef(null as null | View);
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
                    <PipeEndpointsRegistry.Provider value={{ hostRef: viewRef, endpoints: {} }}>
                        <WorkFlowView workflow={workflow} full />
                    </PipeEndpointsRegistry.Provider>
                </View>
            </MoveableView>
        </View>
    );
};
