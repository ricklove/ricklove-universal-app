import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';

import { MouseButton, MoveableView } from './moveable-view';
import { WorkFlowView } from './work-flow-view';
import { PipescriptWorkflow } from '../types';

export const WorkCanvasView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
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
            >
                <View className=''>
                    <WorkFlowView workflow={workflow} full />
                </View>
            </MoveableView>
        </View>
    );
};
