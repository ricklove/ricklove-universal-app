import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';

import { PipescriptWorkflow } from '../types';

type MouseEvent = PointerEvent & { clientX?: number; clientY?: number; pointerId?: number };
type WheelEvent = PointerEvent & { deltaX: number; deltaY: number; deltaZ: number };
type MouseHost = View & {
    setPointerCapture: (pointerId: number) => void;
    releasePointerCapture: (pointerId: number) => void;
    onwheel?: (e: WheelEvent) => void;
};

export const WorkflowView = ({ workflow }: { workflow: PipescriptWorkflow }) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        scale: 1,
        isDragging: false,
        xDragStart: undefined as undefined | number,
        yDragStart: undefined as undefined | number,
        xPointerDragStart: undefined as undefined | number,
        yPointerDragStart: undefined as undefined | number,
    });

    const startDrag = useStableCallback((e: MouseEvent) => {
        const xPointer = e.clientX ?? 0;
        const yPointer = e.clientY ?? 0;
        console.log(`startDrag`, { xPointer, yPointer, e, position });

        hostRef.current?.setPointerCapture(e.pointerId ?? 0);

        setPosition(s => ({
            ...s,
            isDragging: true,
            xDragStart: s.x,
            yDragStart: s.y,
            xPointerDragStart: xPointer,
            yPointerDragStart: yPointer,
        }));
    });
    const endDrag = useStableCallback((e: MouseEvent) => {
        if (!position.isDragging || !position.xPointerDragStart) {
            return;
        }

        const xPointer = e.clientX ?? 0;
        const yPointer = e.clientY ?? 0;
        console.log(`endDrag`, { xPointer, yPointer, e, position });

        hostRef.current?.releasePointerCapture(e.pointerId ?? 0);

        setPosition(s => ({
            ...s,
            x: (s.xDragStart ?? 0) + xPointer - (s.xPointerDragStart ?? 0),
            y: (s.yDragStart ?? 0) + yPointer - (s.yPointerDragStart ?? 0),
            isDragging: false,
            xPointerDragStart: undefined,
            yPointerDragStart: undefined,
        }));
    });

    const moveDrag = useStableCallback((e: MouseEvent) => {
        if (!position.isDragging || !position.xPointerDragStart) {
            return;
        }

        const xPointer = e.clientX ?? 0;
        const yPointer = e.clientY ?? 0;
        console.log(`moveDrag`, { xPointer, yPointer, e, position });

        setPosition(s => ({
            ...s,
            x: (s.xDragStart ?? 0) + xPointer - (s.xPointerDragStart ?? 0),
            y: (s.yDragStart ?? 0) + yPointer - (s.yPointerDragStart ?? 0),
        }));
    });

    const scrollWheel = useStableCallback((e: WheelEvent) => {
        console.log(`onwheel`, { e, position });
        setPosition(s => ({
            ...s,
            scale: s.scale * Math.pow(0.9, e.deltaY > 0 ? 1 : -1),
        }));
    });

    const hostRef = useRef(null as null | MouseHost);
    useEffect(() => {
        const host = hostRef.current;
        if (!host) {
            return;
        }

        console.log(`host`, { host });
        host.onwheel = scrollWheel;
        return () => {
            host.onwheel = undefined;
        };
    }, [!hostRef.current]);

    console.log(`translate(${position.x}, ${position.y})`);
    return (
        <View className='w-full h-full relative overflow-hidden'>
            <Pressable
                ref={hostRef}
                className='w-full h-full absolute overflow-hidden bg-gray-800 block'
                onPointerDown={e => startDrag(e)}
                onPointerUp={e => endDrag(e)}
                onPointerMove={e => moveDrag(e)}
            >
                <View
                    className='bg-gray-600'
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                    }}
                >
                    <Text>test</Text>
                </View>
            </Pressable>
        </View>
    );
};
