// ../../packages/pipescript/src/ui/work-canvas-view.tsx
import { View as View3 } from "react-native";

// ../../packages/cl/src/utils/stable-callback.ts
import { useRef } from "react";
var useStableCallback = (stable) => {
  const ref = useRef(stable);
  ref.current = stable;
  const callback = useRef((...args) => ref.current(...args));
  return callback.current;
};

// ../../packages/pipescript/src/ui/moveable-view.tsx
import { createContext, useEffect, useRef as useRef2, useState } from "react";
import { View, Pressable } from "react-native";
var MoveableView = ({
  children,
  position: initPosition,
  onMove,
  mouseButton = 7 /* All */,
  enableScaling = false,
  className
}) => {
  const [position, setPosition] = useState({
    x: initPosition.x,
    y: initPosition.y,
    scale: initPosition.scale,
    dragPointerId: void 0,
    xDragStart: void 0,
    yDragStart: void 0,
    xPointerDragStart: void 0,
    yPointerDragStart: void 0
  });
  const startDrag = useStableCallback((e, contextScale) => {
    if (!((e.buttons ?? 0) & mouseButton)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`startDrag`, { xPointer, yPointer, e, position, contextScale });
    hostRef.current?.setPointerCapture(e.pointerId ?? 0);
    setPosition((s) => ({
      ...s,
      dragPointerId: e.pointerId,
      xDragStart: s.x,
      yDragStart: s.y,
      xPointerDragStart: xPointer,
      yPointerDragStart: yPointer
    }));
  });
  const endDrag = useStableCallback((e, contextScale) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    hostRef.current?.releasePointerCapture(position.dragPointerId);
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`endDrag`, { xPointer, yPointer, e, position, contextScale });
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + (xPointer - (s.xPointerDragStart ?? 0)) / contextScale,
      y: (s.yDragStart ?? 0) + (yPointer - (s.yPointerDragStart ?? 0)) / contextScale,
      dragPointerId: void 0,
      xPointerDragStart: void 0,
      yPointerDragStart: void 0
    }));
  });
  const moveDrag = useStableCallback((e, contextScale) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`moveDrag`, { xPointer, yPointer, e, position, contextScale });
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + (xPointer - (s.xPointerDragStart ?? 0)) / contextScale,
      y: (s.yDragStart ?? 0) + (yPointer - (s.yPointerDragStart ?? 0)) / contextScale
    }));
  });
  const scrollWheel = useStableCallback((e) => {
    console.log(`onwheel`, { e, position });
    const deltaY = e.deltaY;
    if (!deltaY) {
      return;
    }
    if (!enableScaling) {
      return;
    }
    setPosition((s) => ({
      ...s,
      scale: s.scale * Math.pow(0.9, deltaY > 0 ? 1 : -1)
    }));
  });
  const hostRef = useRef2(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }
    console.log(`host`, { host });
    host.onwheel = scrollWheel;
    return () => {
      host.onwheel = void 0;
    };
  }, [!hostRef.current]);
  return <View><ScaleContext.Consumer>{(contextScale) => <Pressable
    ref={hostRef}
    onPointerUp={(e) => endDrag(e, contextScale.scale)}
    onPointerDown={(e) => startDrag(e, contextScale.scale)}
    onPointerMove={(e) => moveDrag(e, contextScale.scale)}
  ><View
    className={className}
    style={{
      transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`
    }}
  ><ScaleContext.Provider value={position}><Pressable>{children}</Pressable></ScaleContext.Provider></View></Pressable>}</ScaleContext.Consumer></View>;
};
var ScaleContext = createContext({ scale: 1 });

// ../../packages/pipescript/src/ui/work-flow-view.tsx
import React2, { useState as useState2 } from "react";
import { View as View2, Text as Text2 } from "react-native";
var getTypeName = (type) => {
  if (type.kind === `simple`) {
    return type.type;
  }
  return JSON.stringify(type);
};
var WorkFlowView = ({
  workflow,
  full
}) => {
  return <View2
    className={`flex-column relative border-blue-100 border-solid border-[1px] rounded
            ${full ? `w-[100vw] h-[100vh]` : `min-w-[200px] min-h-[100px]`}`}
  >
    <Text2 className="text-yellow-400 self-center">{`${workflow.name}`}</Text2>
    <View2 className="flex-row flex-1">
      <View2 className="flex-col flex-1 justify-center">{workflow.inputs.map((input) => <React2.Fragment key={input.name}><Text2>{input.name}</Text2></React2.Fragment>)}</View2>
      <View2 className="flex-col flex-1 justify-center items-end">{workflow.outputs.map((output) => <React2.Fragment key={output.name}><View2 className="p-2 flex-row justify-center">
        {output.pipe && <>{output.pipe.kind === `data` && <Text2 className="text-purple-400">{output.pipe.json}</Text2>}</>}
        <Text2 className="pr-1">{"\u{1F535}"}</Text2>
        <Text2 className="text-blue-300">{`${output.name}`}</Text2>
        <Text2 className="text-white">:</Text2>
        <Text2 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text2>
      </View2></React2.Fragment>)}</View2>
      <View2 className="absolute top-0 left-0"><View2>{workflow.nodes.map((n) => <React2.Fragment key={n.nodeId}><NodeView node={n} container={workflow} /></React2.Fragment>)}</View2></View2>
    </View2>
    <Text2 className="text-yellow-400 self-center">{`${workflow.workflowUri}`}</Text2>
    {
      /* {workflow.workflows?.map(w => (
          <React.Fragment key={w.name}>
              <View className='absolute left-0 top-0 scale-50'>
                  <WorkFlowView workflow={w} />
              </View>
          </React.Fragment>
      ))} */
    }
  </View2>;
};
var NodeView = ({ node, container }) => {
  const [position, setPosition] = useState2({
    x: node.layout?.position.x ?? 0,
    y: node.layout?.position.y ?? 0,
    scale: node.layout?.scale ?? 1
  });
  const moveNode = useStableCallback((value2) => {
    setPosition(value2);
  });
  const workflow = (() => {
    if (node.implementation.kind === `workflow`) {
      const imp = node.implementation;
      return container.workflows?.find((w) => w.workflowUri === imp.workflowUri);
    }
  })();
  return <MoveableView
    position={{
      x: position.x,
      y: position.y,
      scale: position.scale
    }}
    onMove={moveNode}
    mouseButton={1 /* Left */}
  ><View2
    className="p-2 flex-column border-blue-100 border-solid border-[1px] rounded"
    style={{
      left: position.x,
      top: position.y
      // transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  >
    <View2 className="flex-row justify-center">
      {workflow && <Text2 className="text-yellow-400 self-center">{workflow.name}</Text2>}
      <Text2 className="pl-2 text-yellow-400 self-center">
        {"#"}
        {node.nodeId}
      </Text2>
    </View2>
    {workflow && <View2 className="flex-row flex-1">
      <View2 className="flex-col justify-center">{workflow.inputs.map((input) => <React2.Fragment key={input.name}><Text2>{input.name}</Text2></React2.Fragment>)}</View2>
      <View2 className="flex-1"><WorkFlowView workflow={workflow} /></View2>
      <View2 className="flex-col justify-center items-end">{workflow.outputs.map((output) => <React2.Fragment key={output.name}><View2 className="p-2 flex-row justify-center relative">
        <Text2 className="text-blue-300">{`${output.name}`}</Text2>
        <Text2 className="text-white">:</Text2>
        <Text2 className="pl-1 text-green-800">{`${getTypeName(
          output.type
        )}`}</Text2>
        <Text2 className="absolute right-[-18px]">{"\u{1F535}"}</Text2>
      </View2></React2.Fragment>)}</View2>
    </View2>}
    {
      /* <Text className='text-yellow-400 self-center'>{node.implementation.}</Text> */
    }
  </View2></MoveableView>;
};

// ../../packages/pipescript/src/ui/work-canvas-view.tsx
var WorkCanvasView = ({ workflow }) => {
  return <View3 className="bg-slate-900 w-full h-full overflow-hidden"><MoveableView
    position={{
      x: 0,
      y: 0,
      scale: 1
    }}
    onMove={() => {
    }}
    mouseButton={4 /* Middle */}
    enableScaling
  ><View3 className=""><WorkFlowView workflow={workflow} full /></View3></MoveableView></View3>;
};

// ../../packages/pipescript/src/data/assignments-0001.ts
var name = `answer`;
var value = 42;
var nodeId = 1;
var exampleDeclarationWorkflow = {
  workflowUri: `file.ts`,
  name: `file.ts`,
  inputs: [],
  outputs: [
    {
      name: `answer`,
      type: {
        kind: `simple`,
        type: `int`
      },
      pipe: {
        kind: `node`,
        sourceNodeId: `1`,
        sourceNodeOutputName: `answer`
      }
    }
  ],
  workflows: [
    {
      workflowUri: `${name}-declaration`,
      name: `${name}-declaration`,
      inputs: [],
      outputs: [
        {
          name,
          type: {
            kind: `simple`,
            type: `int`
          },
          pipe: {
            kind: `data`,
            json: JSON.stringify(value)
          }
        }
      ],
      nodes: []
    }
  ],
  nodes: [
    {
      nodeId: `${nodeId}`,
      implementation: {
        kind: `workflow`,
        workflowUri: `${name}-declaration`
      },
      inputPipes: []
    }
  ]
};

// ../../packages/app/src/index.tsx
var App = () => {
  return <WorkCanvasView workflow={exampleDeclarationWorkflow} />;
};

// ../../node_modules/expo-status-bar/build/setStatusBarBackgroundColor.js
import { StatusBar } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarNetworkActivityIndicatorVisible.js
import { StatusBar as StatusBar2 } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarHidden.js
import { StatusBar as StatusBar3 } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarStyle.js
import { StatusBar as StatusBar4 } from "react-native";

// ../../node_modules/expo-status-bar/build/styleToBarStyle.js
import { Appearance } from "react-native";

// ../../node_modules/expo-status-bar/build/setStatusBarTranslucent.js
import { StatusBar as StatusBar5 } from "react-native";

// ../../packages/cl/src/index.tsx
import { useState as useState3 } from "react";
import { Pressable as Pressable4, Text as Text4, View as View4 } from "react-native";

// ../../packages/cl/src/design/tailwind/theme.ts
var tailwindTheme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
};
export {
  App,
  tailwindTheme
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjay50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9tb3ZlYWJsZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvZGF0YS9hc3NpZ25tZW50cy0wMDAxLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2FwcC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckJhY2tncm91bmRDb2xvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckhpZGRlbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zdHlsZVRvQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvZGVzaWduL3RhaWx3aW5kL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgV29ya0Zsb3dWaWV3IH0gZnJvbSAnLi93b3JrLWZsb3ctdmlldyc7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JrQ2FudmFzVmlldyA9ICh7IHdvcmtmbG93IH06IHsgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgICAgICBlbmFibGVTY2FsaW5nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3b3JrZmxvd30gZnVsbCAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvTW92ZWFibGVWaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG4vKiogRW5zdXJlIHRoZSBpdGVtIGlzIGFsd2F5cyB0aGUgbGFzdCByZW5kZXJlZCB2YWx1ZSAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZSA9IDxUPihzdGFibGU6IFQpID0+IHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhYmxlKTtcbiAgICByZWYuY3VycmVudCA9IHN0YWJsZTtcbiAgICByZXR1cm4gcmVmO1xufTtcblxuLyoqIEVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIGNhbGxiYWNrLCBzbyBpdCBoYXMgcmVmZXJlbmNlIHRvIHRoZSBsYXN0IHN0YXRlXG4gKlxuICogTm8gbmVlZCBmb3IgZGVwZW5kZW5jaWVzLCB0aGlzIHdpbGwgc2ltcGx5IGhhdmUgYWNjZXNzIHRvIHRoZSB2YWx1ZXMgdGhhdCBleGlzdGVkIGluIHRoZSByZW5kZXJcbiAqIHdoZW4gaXQgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBsYXN0IHJlbmRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVN0YWJsZUNhbGxiYWNrID0gPFRBcmdzIGV4dGVuZHMgdW5rbm93bltdLCBUUmV0dXJuPihcbiAgICBzdGFibGU6ICguLi5hcmdzOiBUQXJncykgPT4gVFJldHVybixcbikgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXNlUmVmKCguLi5hcmdzOiBUQXJncykgPT4gcmVmLmN1cnJlbnQoLi4uYXJncykpO1xuICAgIHJldHVybiBjYWxsYmFjay5jdXJyZW50O1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgUHJlc3NhYmxlLCBQb2ludGVyRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgdHlwZSBNb3VzZUV2ZW50ID0gUG9pbnRlckV2ZW50ICYge1xuICAgIGNsaWVudFg/OiBudW1iZXI7XG4gICAgY2xpZW50WT86IG51bWJlcjtcbiAgICBwb2ludGVySWQ/OiBudW1iZXI7XG4gICAgYnV0dG9ucz86IG51bWJlcjtcbn07XG5leHBvcnQgdHlwZSBXaGVlbEV2ZW50ID0gUG9pbnRlckV2ZW50ICYgeyBkZWx0YVg6IG51bWJlcjsgZGVsdGFZOiBudW1iZXI7IGRlbHRhWjogbnVtYmVyIH07XG5leHBvcnQgdHlwZSBNb3VzZUhvc3QgPSBWaWV3ICYge1xuICAgIHNldFBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcmVsZWFzZVBvaW50ZXJDYXB0dXJlOiAocG9pbnRlcklkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb253aGVlbD86IChlOiBXaGVlbEV2ZW50KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGVudW0gTW91c2VCdXR0b24ge1xuICAgIExlZnQgPSAxLFxuICAgIFJpZ2h0ID0gMixcbiAgICBNaWRkbGUgPSA0LFxuICAgIEFsbCA9IDcsXG59XG5cbmV4cG9ydCBjb25zdCBNb3ZlYWJsZVZpZXcgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIHBvc2l0aW9uOiBpbml0UG9zaXRpb24sXG4gICAgb25Nb3ZlLFxuICAgIG1vdXNlQnV0dG9uID0gTW91c2VCdXR0b24uQWxsLFxuICAgIGVuYWJsZVNjYWxpbmcgPSBmYWxzZSxcbiAgICBjbGFzc05hbWUsXG59OiB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICAgIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH07XG4gICAgb25Nb3ZlOiAocG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4gdm9pZDtcbiAgICBtb3VzZUJ1dHRvbj86IE1vdXNlQnV0dG9uO1xuICAgIGVuYWJsZVNjYWxpbmc/OiBib29sZWFuO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgeDogaW5pdFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGluaXRQb3NpdGlvbi55LFxuICAgICAgICBzY2FsZTogaW5pdFBvc2l0aW9uLnNjYWxlLFxuICAgICAgICBkcmFnUG9pbnRlcklkOiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB5RHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeVBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24sIGNvbnRleHRTY2FsZSB9KTtcblxuICAgICAgICBob3N0UmVmLmN1cnJlbnQ/LnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkID8/IDApO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBkcmFnUG9pbnRlcklkOiBlLnBvaW50ZXJJZCxcbiAgICAgICAgICAgIHhEcmFnU3RhcnQ6IHMueCxcbiAgICAgICAgICAgIHlEcmFnU3RhcnQ6IHMueSxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB4UG9pbnRlcixcbiAgICAgICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB5UG9pbnRlcixcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZERyYWcgPSB1c2VTdGFibGVDYWxsYmFjaygoZTogTW91c2VFdmVudCwgY29udGV4dFNjYWxlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiwgY29udGV4dFNjYWxlIH0pO1xuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICB4OiAocy54RHJhZ1N0YXJ0ID8/IDApICsgKHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArICh5UG9pbnRlciAtIChzLnlQb2ludGVyRHJhZ1N0YXJ0ID8/IDApKSAvIGNvbnRleHRTY2FsZSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50LCBjb250ZXh0U2NhbGU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocG9zaXRpb24uZHJhZ1BvaW50ZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgeFBvaW50ZXIgPSBlLmNsaWVudFggPz8gMDtcbiAgICAgICAgY29uc3QgeVBvaW50ZXIgPSBlLmNsaWVudFkgPz8gMDtcbiAgICAgICAgY29uc29sZS5sb2coYG1vdmVEcmFnYCwgeyB4UG9pbnRlciwgeVBvaW50ZXIsIGUsIHBvc2l0aW9uLCBjb250ZXh0U2NhbGUgfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyAoeFBvaW50ZXIgLSAocy54UG9pbnRlckRyYWdTdGFydCA/PyAwKSkgLyBjb250ZXh0U2NhbGUsXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgKHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCkpIC8gY29udGV4dFNjYWxlLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGxXaGVlbCA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBvbndoZWVsYCwgeyBlLCBwb3NpdGlvbiB9KTtcbiAgICAgICAgY29uc3QgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGlmICghZGVsdGFZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuYWJsZVNjYWxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8U2NhbGVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICAgIHtjb250ZXh0U2NhbGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2hvc3RSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17ZSA9PiBlbmREcmFnKGUsIGNvbnRleHRTY2FsZS5zY2FsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtlID0+IHN0YXJ0RHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlLCBjb250ZXh0U2NhbGUuc2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCkgc2NhbGUoJHtwb3NpdGlvbi5zY2FsZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXNzYWJsZT57Y2hpbGRyZW59PC9QcmVzc2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY2FsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1NjYWxlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgU2NhbGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHNjYWxlOiAxIH0pO1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgUGlwZXNjcmlwdE5vZGUsIFBpcGVzY3JpcHRUeXBlLCBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGdldFR5cGVOYW1lID0gKHR5cGU6IFBpcGVzY3JpcHRUeXBlKSA9PiB7XG4gICAgaWYgKHR5cGUua2luZCA9PT0gYHNpbXBsZWApIHtcbiAgICAgICAgcmV0dXJuIHR5cGUudHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgV29ya0Zsb3dWaWV3ID0gKHtcbiAgICB3b3JrZmxvdyxcbiAgICBmdWxsLFxufToge1xuICAgIHdvcmtmbG93OiBQaXBlc2NyaXB0V29ya2Zsb3c7XG4gICAgZnVsbD86IGJvb2xlYW47XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtY29sdW1uIHJlbGF0aXZlIGJvcmRlci1ibHVlLTEwMCBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIHJvdW5kZWRcbiAgICAgICAgICAgICR7ZnVsbCA/IGB3LVsxMDB2d10gaC1bMTAwdmhdYCA6IGBtaW4tdy1bMjAwcHhdIG1pbi1oLVsxMDBweF1gfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cubmFtZX1gfTwvVGV4dD5cblxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LTEnPlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleC0xIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93LmlucHV0cy5tYXAoaW5wdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5wdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2lucHV0Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleC0xIGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17b3V0cHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ncC0yIGZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge291dHB1dC5waXBlLmtpbmQgPT09IGBkYXRhYCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5qc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3ByLTEnPlx1RDgzRFx1REQzNTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+OjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwbC0xIHRleHQtZ3JlZW4tODAwJz57YCR7Z2V0VHlwZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIGxlZnQtMCc+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93Lm5vZGVzLm1hcChuID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuLm5vZGVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBub2RlPXtufSBjb250YWluZXI9e3dvcmtmbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cblxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntgJHt3b3JrZmxvdy53b3JrZmxvd1VyaX1gfTwvVGV4dD5cblxuICAgICAgICAgICAgey8qIHt3b3JrZmxvdy53b3JrZmxvd3M/Lm1hcCh3ID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt3Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB0b3AtMCBzY2FsZS01MCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0Zsb3dWaWV3IHdvcmtmbG93PXt3fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfSAqL31cbiAgICAgICAgPC9WaWV3PlxuICAgICk7XG59O1xuXG5jb25zdCBOb2RlVmlldyA9ICh7IG5vZGUsIGNvbnRhaW5lciB9OiB7IG5vZGU6IFBpcGVzY3JpcHROb2RlOyBjb250YWluZXI6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi54ID8/IDAsXG4gICAgICAgIHk6IG5vZGUubGF5b3V0Py5wb3NpdGlvbi55ID8/IDAsXG4gICAgICAgIHNjYWxlOiBub2RlLmxheW91dD8uc2NhbGUgPz8gMSxcbiAgICB9KTtcbiAgICBjb25zdCBtb3ZlTm9kZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCh2YWx1ZTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdvcmtmbG93ID0gKCgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUuaW1wbGVtZW50YXRpb24ua2luZCA9PT0gYHdvcmtmbG93YCkge1xuICAgICAgICAgICAgY29uc3QgaW1wID0gbm9kZS5pbXBsZW1lbnRhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXIud29ya2Zsb3dzPy5maW5kKHcgPT4gdy53b3JrZmxvd1VyaSA9PT0gaW1wLndvcmtmbG93VXJpKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgc2NhbGU6IHBvc2l0aW9uLnNjYWxlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW92ZT17bW92ZU5vZGV9XG4gICAgICAgICAgICBtb3VzZUJ1dHRvbj17TW91c2VCdXR0b24uTGVmdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3AtMiBmbGV4LWNvbHVtbiBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57d29ya2Zsb3cubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMiB0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPiN7bm9kZS5ub2RlSWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2lucHV0Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMiBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtWy0xOHB4XSc+XHVEODNEXHVERDM1PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG5hbWUgPSBgYW5zd2VyYDtcbmNvbnN0IHZhbHVlID0gNDI7XG5jb25zdCBub2RlSWQgPSAxO1xuXG5leHBvcnQgY29uc3QgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyA9IHtcbiAgICB3b3JrZmxvd1VyaTogYGZpbGUudHNgLFxuICAgIG5hbWU6IGBmaWxlLnRzYCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogYGFuc3dlcmAsXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAga2luZDogYHNpbXBsZWAsXG4gICAgICAgICAgICAgICAgdHlwZTogYGludGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBub2RlYCxcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlSWQ6IGAxYCxcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlT3V0cHV0TmFtZTogYGFuc3dlcmAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgd29ya2Zsb3dzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdvcmtmbG93VXJpOiBgJHtuYW1lfS1kZWNsYXJhdGlvbmAsXG4gICAgICAgICAgICBuYW1lOiBgJHtuYW1lfS1kZWNsYXJhdGlvbmAsXG4gICAgICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICAgICAgb3V0cHV0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogYHNpbXBsZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgaW50YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbjogSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbm9kZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZUlkOiBgJHtub2RlSWR9YCxcbiAgICAgICAgICAgIGltcGxlbWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYHdvcmtmbG93YCxcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogYCR7bmFtZX0tZGVjbGFyYXRpb25gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0UGlwZXM6IFtdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuIiwgImltcG9ydCB7IFdvcmtDYW52YXNWaWV3LCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvcGlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxXb3JrQ2FudmFzVmlldyB3b3JrZmxvdz17ZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3d9IC8+O1xufTtcbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYmFja2dyb3VuZENvbG9yIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGFuaW1hdGVkIGB0cnVlYCB0byBhbmltYXRlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSwgYGZhbHNlYCB0byBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGFuaW1hdGVkOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yLCBhbmltYXRlZCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICogQHBhcmFtIHZpc2libGUgSWYgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yIHNob3VsZCBiZSB2aXNpYmxlLlxuICogQHBsYXRmb3JtIGlvc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldE5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZSk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyQW5pbWF0aW9uIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBoaWRkZW4gSWYgdGhlIHN0YXR1cyBiYXIgc2hvdWxkIGJlIGhpZGRlbi5cbiAqIEBwYXJhbSBhbmltYXRpb24gQW5pbWF0aW9uIHRvIHVzZSB3aGVuIHRvZ2dsaW5nIGhpZGRlbiwgZGVmYXVsdHMgdG8gYCdub25lJ2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckhpZGRlbihoaWRkZW46IGJvb2xlYW4sIGFuaW1hdGlvbjogU3RhdHVzQmFyQW5pbWF0aW9uKSB7XG4gIFN0YXR1c0Jhci5zZXRIaWRkZW4oaGlkZGVuLCBhbmltYXRpb24pO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuaW1wb3J0IHN0eWxlVG9CYXJTdHlsZSBmcm9tICcuL3N0eWxlVG9CYXJTdHlsZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFyIHN0eWxlIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHN0eWxlIFRoZSBjb2xvciBvZiB0aGUgc3RhdHVzIGJhciB0ZXh0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJTdHlsZShzdHlsZTogU3RhdHVzQmFyU3R5bGUpIHtcbiAgU3RhdHVzQmFyLnNldEJhclN0eWxlKHN0eWxlVG9CYXJTdHlsZShzdHlsZSkpO1xufVxuIiwgImltcG9ydCB7IEFwcGVhcmFuY2UsIENvbG9yU2NoZW1lTmFtZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvclNjaGVtZSgpIHtcbiAgaWYgKEFwcGVhcmFuY2UpIHtcbiAgICByZXR1cm4gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbGlnaHQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlVG9CYXJTdHlsZShcbiAgc3R5bGU6IFN0YXR1c0JhclN0eWxlID0gJ2F1dG8nLFxuICBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWVOYW1lID0gZ2V0Q29sb3JTY2hlbWUoKVxuKTogJ2xpZ2h0LWNvbnRlbnQnIHwgJ2RhcmstY29udGVudCcge1xuICBpZiAoIWNvbG9yU2NoZW1lKSB7XG4gICAgY29sb3JTY2hlbWUgPSAnbGlnaHQnO1xuICB9XG5cbiAgbGV0IHJlc29sdmVkU3R5bGUgPSBzdHlsZTtcbiAgaWYgKHN0eWxlID09PSAnYXV0bycpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW52ZXJ0ZWQnKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZFN0eWxlID09PSAnbGlnaHQnID8gJ2xpZ2h0LWNvbnRlbnQnIDogJ2RhcmstY29udGVudCc7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSB0cmFuc2x1Y2VuY3kgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gdHJhbnNsdWNlbnQgV2hldGhlciB0aGUgYXBwIGNhbiBkcmF3IHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBXaGVuIGB0cnVlYCwgY29udGVudCB3aWxsIGJlXG4gKiByZW5kZXJlZCB1bmRlciB0aGUgc3RhdHVzIGJhci4gVGhpcyBpcyBhbHdheXMgYHRydWVgIG9uIGlPUyBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0VHJhbnNsdWNlbnQodHJhbnNsdWNlbnQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ2V4cG8tc3RhdHVzLWJhcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByZXNzYWJsZSwgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnQocyA9PiBzICsgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC0xMDAnPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWN5YW4tNzAwJz5FeGFtcGxlVmlldyAuLi48L1RleHQ+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2luY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2BJbmNyZW1lbnQgY291bnQ6JHtjb3VudH1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4wMDM8L1RleHQ+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDxTdGF0dXNCYXIgc3R5bGU9J2F1dG8nIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJztcblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWU6IENvbmZpZ1tgdGhlbWVgXSA9IHtcbiAgICAvLyBlZGl0IHlvdXIgdGFpbHdpbmQgdGhlbWUgaGVyZSFcbiAgICAvLyBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FkZGluZy1jdXN0b20tc3R5bGVzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsUUFBQUEsYUFBMkM7OztBQ0ZwRCxTQUFTLGNBQWM7QUFjaEIsSUFBTSxvQkFBb0IsQ0FDN0IsV0FDQztBQUNELFFBQU0sTUFBTSxPQUFPLE1BQU07QUFDekIsTUFBSSxVQUFVO0FBQ2QsUUFBTSxXQUFXLE9BQU8sSUFBSSxTQUFnQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDaEUsU0FBTyxTQUFTO0FBQ3BCOzs7QUNwQkEsU0FBZ0IsZUFBZSxXQUFXLFVBQUFDLFNBQVEsZ0JBQWdCO0FBQ2xFLFNBQVMsTUFBWSxpQkFBK0I7QUFzQjdDLElBQU0sZUFBZSxDQUFDO0FBQUEsRUFDekI7QUFBQSxFQUNBLFVBQVU7QUFBQSxFQUNWO0FBQUEsRUFDQSxjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQjtBQUNKLE1BT007QUFDRixRQUFNLENBQUMsVUFBVSxXQUFXLElBQUksU0FBUztBQUFBLElBQ3JDLEdBQUcsYUFBYTtBQUFBLElBQ2hCLEdBQUcsYUFBYTtBQUFBLElBQ2hCLE9BQU8sYUFBYTtBQUFBLElBQ3BCLGVBQWU7QUFBQSxJQUNmLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLG1CQUFtQjtBQUFBLElBQ25CLG1CQUFtQjtBQUFBLEVBQ3ZCLENBQUM7QUFFRCxRQUFNLFlBQVksa0JBQWtCLENBQUMsR0FBZSxpQkFBeUI7QUFDekUsUUFBSSxHQUFHLEVBQUUsV0FBVyxLQUFLLGNBQWM7QUFDbkM7QUFBQSxJQUNKO0FBRUEsTUFBRSxnQkFBZ0I7QUFDbEIsTUFBRSxlQUFlO0FBRWpCLFVBQU0sV0FBVyxFQUFFLFdBQVc7QUFDOUIsVUFBTSxXQUFXLEVBQUUsV0FBVztBQUM5QixZQUFRLElBQUksYUFBYSxFQUFFLFVBQVUs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LE1BQ1Y7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNGLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLHNCQUFzQjtBQUFBLE1BQzFCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNQO0FBQUEsTUFDSSxhQUFhLEdBQUcsSUFBSTtBQUFBLE1BQ3BCLE1BQU0sR0FBRyxJQUFJO0FBQUEsTUFDYixRQUFRLENBQUM7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNMO0FBQUEsVUFDSTtBQUFBLFVBQ0EsTUFBTTtBQUFBLFlBQ0YsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLE1BQU07QUFBQSxZQUNGLE1BQU07QUFBQSxZQUNOLE1BQU0sS0FBSyxVQUFVLEtBQUs7QUFBQSxVQUM5QjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFDQSxPQUFPLENBQUM7QUFBQSxJQUNaO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxNQUNJLFFBQVEsR0FBRyxNQUFNO0FBQUEsTUFDakIsZ0JBQWdCO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixhQUFhLEdBQUcsSUFBSTtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxZQUFZLENBQUM7QUFBQSxJQUNqQjtBQUFBLEVBQ0o7QUFDSjs7O0FDckRPLElBQU0sTUFBTSxNQUFNO0FBQ3JCLFNBQU8sQ0FBQyxlQUFlLFVBQVUsNEJBQTRCO0FBQ2pFOzs7QUNKQSxTQUFTLGlCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsa0JBQW1DOzs7QUNBNUMsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0MxQixTQUFTLFlBQUFDLGlCQUFnQjtBQUN6QixTQUFTLGFBQUFDLFlBQVcsUUFBQUMsT0FBTSxRQUFBQyxhQUFZOzs7QUNBL0IsSUFBTSxnQkFBaUM7QUFBQTtBQUFBO0FBRzlDOyIsCiAgIm5hbWVzIjogWyJWaWV3IiwgInVzZVJlZiIsICJ1c2VSZWYiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAiVmlldyIsICJUZXh0IiwgIlZpZXciLCAiVGV4dCIsICJSZWFjdCIsICJ1c2VTdGF0ZSIsICJ2YWx1ZSIsICJWaWV3IiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJ1c2VTdGF0ZSIsICJQcmVzc2FibGUiLCAiVGV4dCIsICJWaWV3Il0KfQo=
