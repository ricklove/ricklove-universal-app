import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, PointerEvent } from 'react-native';

export type MouseEvent = PointerEvent & {
    clientX?: number;
    clientY?: number;
    pointerId?: number;
    buttons?: number;
};
export type WheelEvent = PointerEvent & { deltaX: number; deltaY: number; deltaZ: number };
export type MouseHost = View & {
    setPointerCapture: (pointerId: number) => void;
    releasePointerCapture: (pointerId: number) => void;
    onwheel?: (e: WheelEvent) => void;
};

export enum MouseButton {
    Left = 1,
    Right = 2,
    Middle = 4,
    All = 7,
}

export const MoveableView = ({
    children,
    position: initPosition,
    onMove,
    mouseButton = MouseButton.All,
    className,
}: {
    children: JSX.Element;
    position: { x: number; y: number; scale: number };
    onMove: (position: { x: number; y: number; scale: number }) => void;
    mouseButton?: MouseButton;
    className?: string;
}) => {
    const [position, setPosition] = useState({
        x: initPosition.x,
        y: initPosition.y,
        scale: initPosition.scale,
        dragPointerId: undefined as undefined | number,
        xDragStart: undefined as undefined | number,
        yDragStart: undefined as undefined | number,
        xPointerDragStart: undefined as undefined | number,
        yPointerDragStart: undefined as undefined | number,
    });

    const startDrag = useStableCallback((e: MouseEvent) => {
        if (!((e.buttons ?? 0) & mouseButton)) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        const xPointer = e.clientX ?? 0;
        const yPointer = e.clientY ?? 0;
        console.log(`startDrag`, { xPointer, yPointer, e, position });

        hostRef.current?.setPointerCapture(e.pointerId ?? 0);

        setPosition(s => ({
            ...s,
            dragPointerId: e.pointerId,
            xDragStart: s.x,
            yDragStart: s.y,
            xPointerDragStart: xPointer,
            yPointerDragStart: yPointer,
        }));
    });
    const endDrag = useStableCallback((e: MouseEvent) => {
        if (position.dragPointerId === undefined) {
            return;
        }
        hostRef.current?.releasePointerCapture(position.dragPointerId);

        e.stopPropagation();
        e.preventDefault();

        const xPointer = e.clientX ?? 0;
        const yPointer = e.clientY ?? 0;
        console.log(`endDrag`, { xPointer, yPointer, e, position });

        setPosition(s => ({
            ...s,
            x: (s.xDragStart ?? 0) + xPointer - (s.xPointerDragStart ?? 0),
            y: (s.yDragStart ?? 0) + yPointer - (s.yPointerDragStart ?? 0),
            dragPointerId: undefined,
            xPointerDragStart: undefined,
            yPointerDragStart: undefined,
        }));
    });

    const moveDrag = useStableCallback((e: MouseEvent) => {
        if (position.dragPointerId === undefined) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

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
        const deltaY = e.deltaY;
        if (!deltaY) {
            return;
        }

        setPosition(s => ({
            ...s,
            scale: s.scale * Math.pow(0.9, deltaY > 0 ? 1 : -1),
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

    return (
        <View>
            <Pressable
                ref={hostRef}
                onPointerUp={e => endDrag(e)}
                onPointerDown={e => startDrag(e)}
                onPointerMove={e => moveDrag(e)}
            >
                <View
                    className={className}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                    }}
                >
                    <Pressable>{children}</Pressable>
                </View>
            </Pressable>
        </View>
    );
};
