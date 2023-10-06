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
import { useEffect, useRef as useRef2, useState } from "react";
import { View, Pressable } from "react-native";
var MoveableView = ({
  children,
  position: initPosition,
  onMove,
  mouseButton = 7 /* All */,
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
  const startDrag = useStableCallback((e) => {
    if (!((e.buttons ?? 0) & mouseButton)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`startDrag`, { xPointer, yPointer, e, position });
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
  const endDrag = useStableCallback((e) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    hostRef.current?.releasePointerCapture(position.dragPointerId);
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`endDrag`, { xPointer, yPointer, e, position });
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + xPointer - (s.xPointerDragStart ?? 0),
      y: (s.yDragStart ?? 0) + yPointer - (s.yPointerDragStart ?? 0),
      dragPointerId: void 0,
      xPointerDragStart: void 0,
      yPointerDragStart: void 0
    }));
  });
  const moveDrag = useStableCallback((e) => {
    if (position.dragPointerId === void 0) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const xPointer = e.clientX ?? 0;
    const yPointer = e.clientY ?? 0;
    console.log(`moveDrag`, { xPointer, yPointer, e, position });
    setPosition((s) => ({
      ...s,
      x: (s.xDragStart ?? 0) + xPointer - (s.xPointerDragStart ?? 0),
      y: (s.yDragStart ?? 0) + yPointer - (s.yPointerDragStart ?? 0)
    }));
  });
  const scrollWheel = useStableCallback((e) => {
    console.log(`onwheel`, { e, position });
    const deltaY = e.deltaY;
    if (!deltaY) {
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
  return <View><Pressable
    ref={hostRef}
    onPointerUp={(e) => endDrag(e)}
    onPointerDown={(e) => startDrag(e)}
    onPointerMove={(e) => moveDrag(e)}
  ><View
    className={className}
    style={{
      transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`
    }}
  ><Pressable>{children}</Pressable></View></Pressable></View>;
};

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
    className="bg-red-400 w-10 h-10"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvdWkvd29yay1jYW52YXMtdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjay50cyIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS9tb3ZlYWJsZS12aWV3LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9waXBlc2NyaXB0L3NyYy91aS93b3JrLWZsb3ctdmlldy50c3giLCAiLi4vLi4vLi4vcGFja2FnZXMvcGlwZXNjcmlwdC9zcmMvZGF0YS9hc3NpZ25tZW50cy0wMDAxLnRzIiwgIi4uLy4uLy4uL3BhY2thZ2VzL2FwcC9zcmMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckJhY2tncm91bmRDb2xvci50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlLnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHBvLXN0YXR1cy1iYXIvc3JjL3NldFN0YXR1c0JhckhpZGRlbi50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zZXRTdGF0dXNCYXJTdHlsZS50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXhwby1zdGF0dXMtYmFyL3NyYy9zdHlsZVRvQmFyU3R5bGUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4cG8tc3RhdHVzLWJhci9zcmMvc2V0U3RhdHVzQmFyVHJhbnNsdWNlbnQudHMiLCAiLi4vLi4vLi4vcGFja2FnZXMvY2wvc3JjL2luZGV4LnRzeCIsICIuLi8uLi8uLi9wYWNrYWdlcy9jbC9zcmMvZGVzaWduL3RhaWx3aW5kL3RoZW1lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvY2wvc3JjL3V0aWxzL3N0YWJsZS1jYWxsYmFjayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IE1vdXNlQnV0dG9uLCBNb3ZlYWJsZVZpZXcgfSBmcm9tICcuL21vdmVhYmxlLXZpZXcnO1xuaW1wb3J0IHsgV29ya0Zsb3dWaWV3IH0gZnJvbSAnLi93b3JrLWZsb3ctdmlldyc7XG5pbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JrQ2FudmFzVmlldyA9ICh7IHdvcmtmbG93IH06IHsgd29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgPE1vdmVhYmxlVmlld1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbW91c2VCdXR0b249e01vdXNlQnV0dG9uLk1pZGRsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSBmdWxsIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9Nb3ZlYWJsZVZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8qKiBFbnN1cmUgdGhlIGl0ZW0gaXMgYWx3YXlzIHRoZSBsYXN0IHJlbmRlcmVkIHZhbHVlICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlID0gPFQ+KHN0YWJsZTogVCkgPT4ge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGFibGUpO1xuICAgIHJlZi5jdXJyZW50ID0gc3RhYmxlO1xuICAgIHJldHVybiByZWY7XG59O1xuXG4vKiogRW5zdXJlIHRoZSBjYWxsYmFjayBpcyBhbHdheXMgdGhlIGxhc3QgcmVuZGVyZWQgY2FsbGJhY2ssIHNvIGl0IGhhcyByZWZlcmVuY2UgdG8gdGhlIGxhc3Qgc3RhdGVcbiAqXG4gKiBObyBuZWVkIGZvciBkZXBlbmRlbmNpZXMsIHRoaXMgd2lsbCBzaW1wbHkgaGF2ZSBhY2Nlc3MgdG8gdGhlIHZhbHVlcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIHJlbmRlclxuICogd2hlbiBpdCB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGxhc3QgcmVuZGVyLlxuICovXG5leHBvcnQgY29uc3QgdXNlU3RhYmxlQ2FsbGJhY2sgPSA8VEFyZ3MgZXh0ZW5kcyB1bmtub3duW10sIFRSZXR1cm4+KFxuICAgIHN0YWJsZTogKC4uLmFyZ3M6IFRBcmdzKSA9PiBUUmV0dXJuLFxuKSA9PiB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YWJsZSk7XG4gICAgcmVmLmN1cnJlbnQgPSBzdGFibGU7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB1c2VSZWYoKC4uLmFyZ3M6IFRBcmdzKSA9PiByZWYuY3VycmVudCguLi5hcmdzKSk7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmN1cnJlbnQ7XG59O1xuIiwgImltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSAnQHJpY2tsb3ZlLXVuaXZlcnNhbC9jbC9zcmMvdXRpbHMvc3RhYmxlLWNhbGxiYWNrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBQcmVzc2FibGUsIFBvaW50ZXJFdmVudCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE1vdXNlRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7XG4gICAgY2xpZW50WD86IG51bWJlcjtcbiAgICBjbGllbnRZPzogbnVtYmVyO1xuICAgIHBvaW50ZXJJZD86IG51bWJlcjtcbiAgICBidXR0b25zPzogbnVtYmVyO1xufTtcbmV4cG9ydCB0eXBlIFdoZWVsRXZlbnQgPSBQb2ludGVyRXZlbnQgJiB7IGRlbHRhWDogbnVtYmVyOyBkZWx0YVk6IG51bWJlcjsgZGVsdGFaOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIE1vdXNlSG9zdCA9IFZpZXcgJiB7XG4gICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICByZWxlYXNlUG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbndoZWVsPzogKGU6IFdoZWVsRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZW51bSBNb3VzZUJ1dHRvbiB7XG4gICAgTGVmdCA9IDEsXG4gICAgUmlnaHQgPSAyLFxuICAgIE1pZGRsZSA9IDQsXG4gICAgQWxsID0gNyxcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVhYmxlVmlldyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgcG9zaXRpb246IGluaXRQb3NpdGlvbixcbiAgICBvbk1vdmUsXG4gICAgbW91c2VCdXR0b24gPSBNb3VzZUJ1dHRvbi5BbGwsXG4gICAgY2xhc3NOYW1lLFxufToge1xuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgICBwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc2NhbGU6IG51bWJlciB9O1xuICAgIG9uTW92ZTogKHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBzY2FsZTogbnVtYmVyIH0pID0+IHZvaWQ7XG4gICAgbW91c2VCdXR0b24/OiBNb3VzZUJ1dHRvbjtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHg6IGluaXRQb3NpdGlvbi54LFxuICAgICAgICB5OiBpbml0UG9zaXRpb24ueSxcbiAgICAgICAgc2NhbGU6IGluaXRQb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgZHJhZ1BvaW50ZXJJZDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeERyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeURyYWdTdGFydDogdW5kZWZpbmVkIGFzIHVuZGVmaW5lZCB8IG51bWJlcixcbiAgICAgICAgeFBvaW50ZXJEcmFnU3RhcnQ6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBudW1iZXIsXG4gICAgICAgIHlQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQgYXMgdW5kZWZpbmVkIHwgbnVtYmVyLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCEoKGUuYnV0dG9ucyA/PyAwKSAmIG1vdXNlQnV0dG9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHhQb2ludGVyID0gZS5jbGllbnRYID8/IDA7XG4gICAgICAgIGNvbnN0IHlQb2ludGVyID0gZS5jbGllbnRZID8/IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGFydERyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24gfSk7XG5cbiAgICAgICAgaG9zdFJlZi5jdXJyZW50Py5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCA/PyAwKTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgZHJhZ1BvaW50ZXJJZDogZS5wb2ludGVySWQsXG4gICAgICAgICAgICB4RHJhZ1N0YXJ0OiBzLngsXG4gICAgICAgICAgICB5RHJhZ1N0YXJ0OiBzLnksXG4gICAgICAgICAgICB4UG9pbnRlckRyYWdTdGFydDogeFBvaW50ZXIsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogeVBvaW50ZXIsXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbmREcmFnID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmRyYWdQb2ludGVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuY3VycmVudD8ucmVsZWFzZVBvaW50ZXJDYXB0dXJlKHBvc2l0aW9uLmRyYWdQb2ludGVySWQpO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgZW5kRHJhZ2AsIHsgeFBvaW50ZXIsIHlQb2ludGVyLCBlLCBwb3NpdGlvbiB9KTtcblxuICAgICAgICBzZXRQb3NpdGlvbihzID0+ICh7XG4gICAgICAgICAgICAuLi5zLFxuICAgICAgICAgICAgeDogKHMueERyYWdTdGFydCA/PyAwKSArIHhQb2ludGVyIC0gKHMueFBvaW50ZXJEcmFnU3RhcnQgPz8gMCksXG4gICAgICAgICAgICB5OiAocy55RHJhZ1N0YXJ0ID8/IDApICsgeVBvaW50ZXIgLSAocy55UG9pbnRlckRyYWdTdGFydCA/PyAwKSxcbiAgICAgICAgICAgIGRyYWdQb2ludGVySWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHhQb2ludGVyRHJhZ1N0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5UG9pbnRlckRyYWdTdGFydDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3ZlRHJhZyA9IHVzZVN0YWJsZUNhbGxiYWNrKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5kcmFnUG9pbnRlcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB4UG9pbnRlciA9IGUuY2xpZW50WCA/PyAwO1xuICAgICAgICBjb25zdCB5UG9pbnRlciA9IGUuY2xpZW50WSA/PyAwO1xuICAgICAgICBjb25zb2xlLmxvZyhgbW92ZURyYWdgLCB7IHhQb2ludGVyLCB5UG9pbnRlciwgZSwgcG9zaXRpb24gfSk7XG5cbiAgICAgICAgc2V0UG9zaXRpb24ocyA9PiAoe1xuICAgICAgICAgICAgLi4ucyxcbiAgICAgICAgICAgIHg6IChzLnhEcmFnU3RhcnQgPz8gMCkgKyB4UG9pbnRlciAtIChzLnhQb2ludGVyRHJhZ1N0YXJ0ID8/IDApLFxuICAgICAgICAgICAgeTogKHMueURyYWdTdGFydCA/PyAwKSArIHlQb2ludGVyIC0gKHMueVBvaW50ZXJEcmFnU3RhcnQgPz8gMCksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNjcm9sbFdoZWVsID0gdXNlU3RhYmxlQ2FsbGJhY2soKGU6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYG9ud2hlZWxgLCB7IGUsIHBvc2l0aW9uIH0pO1xuICAgICAgICBjb25zdCBkZWx0YVkgPSBlLmRlbHRhWTtcbiAgICAgICAgaWYgKCFkZWx0YVkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBvc2l0aW9uKHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBzY2FsZTogcy5zY2FsZSAqIE1hdGgucG93KDAuOSwgZGVsdGFZID4gMCA/IDEgOiAtMSksXG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvc3RSZWYgPSB1c2VSZWYobnVsbCBhcyBudWxsIHwgTW91c2VIb3N0KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBob3N0ID0gaG9zdFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBob3N0YCwgeyBob3N0IH0pO1xuICAgICAgICBob3N0Lm9ud2hlZWwgPSBzY3JvbGxXaGVlbDtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhvc3Qub253aGVlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICB9LCBbIWhvc3RSZWYuY3VycmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICA8UHJlc3NhYmxlXG4gICAgICAgICAgICAgICAgcmVmPXtob3N0UmVmfVxuICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXtlID0+IGVuZERyYWcoZSl9XG4gICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17ZSA9PiBzdGFydERyYWcoZSl9XG4gICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17ZSA9PiBtb3ZlRHJhZyhlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weCkgc2NhbGUoJHtwb3NpdGlvbi5zY2FsZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQcmVzc2FibGU+e2NoaWxkcmVufTwvUHJlc3NhYmxlPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvUHJlc3NhYmxlPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tICdAcmlja2xvdmUtdW5pdmVyc2FsL2NsL3NyYy91dGlscy9zdGFibGUtY2FsbGJhY2snO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFByZXNzYWJsZSwgUG9pbnRlckV2ZW50IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgTW92ZWFibGVWaWV3IH0gZnJvbSAnLi9tb3ZlYWJsZS12aWV3JztcbmltcG9ydCB7IFBpcGVzY3JpcHROb2RlLCBQaXBlc2NyaXB0VHlwZSwgUGlwZXNjcmlwdFdvcmtmbG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRUeXBlTmFtZSA9ICh0eXBlOiBQaXBlc2NyaXB0VHlwZSkgPT4ge1xuICAgIGlmICh0eXBlLmtpbmQgPT09IGBzaW1wbGVgKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFdvcmtGbG93VmlldyA9ICh7XG4gICAgd29ya2Zsb3csXG4gICAgZnVsbCxcbn06IHtcbiAgICB3b3JrZmxvdzogUGlwZXNjcmlwdFdvcmtmbG93O1xuICAgIGZ1bGw/OiBib29sZWFuO1xufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbHVtbiByZWxhdGl2ZSBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSByb3VuZGVkXG4gICAgICAgICAgICAke2Z1bGwgPyBgdy1bMTAwdnddIGgtWzEwMHZoXWAgOiBgbWluLXctWzIwMHB4XSBtaW4taC1bMTAwcHhdYH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQteWVsbG93LTQwMCBzZWxmLWNlbnRlcic+e2Ake3dvcmtmbG93Lm5hbWV9YH08L1RleHQ+XG5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT0nZmxleC1yb3cgZmxleC0xJz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5pbnB1dHMubWFwKGlucHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PntpbnB1dC5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXgtMSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cub3V0cHV0cy5tYXAob3V0cHV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e291dHB1dC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMiBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRwdXQucGlwZS5raW5kID09PSBgZGF0YWAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtcHVycGxlLTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3V0cHV0LnBpcGUuanNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSdwci0xJz5cdUQ4M0RcdUREMzU8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMwMCc+e2Ake291dHB1dC5uYW1lfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPjo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAnPlxuICAgICAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5ub2Rlcy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bi5ub2RlSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgbm9kZT17bn0gY29udGFpbmVyPXt3b3JrZmxvd30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57YCR7d29ya2Zsb3cud29ya2Zsb3dVcml9YH08L1RleHQ+XG5cbiAgICAgICAgICAgIHsvKiB7d29ya2Zsb3cud29ya2Zsb3dzPy5tYXAodyA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dy5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgc2NhbGUtNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtGbG93VmlldyB3b3JrZmxvdz17d30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX0gKi99XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcblxuY29uc3QgTm9kZVZpZXcgPSAoeyBub2RlLCBjb250YWluZXIgfTogeyBub2RlOiBQaXBlc2NyaXB0Tm9kZTsgY29udGFpbmVyOiBQaXBlc2NyaXB0V29ya2Zsb3cgfSkgPT4ge1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgICAgICB4OiBub2RlLmxheW91dD8ucG9zaXRpb24ueCA/PyAwLFxuICAgICAgICB5OiBub2RlLmxheW91dD8ucG9zaXRpb24ueSA/PyAwLFxuICAgICAgICBzY2FsZTogbm9kZS5sYXlvdXQ/LnNjYWxlID8/IDEsXG4gICAgfSk7XG4gICAgY29uc3QgbW92ZU5vZGUgPSB1c2VTdGFibGVDYWxsYmFjaygodmFsdWU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNjYWxlOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3b3JrZmxvdyA9ICgoKSA9PiB7XG4gICAgICAgIGlmIChub2RlLmltcGxlbWVudGF0aW9uLmtpbmQgPT09IGB3b3JrZmxvd2ApIHtcbiAgICAgICAgICAgIGNvbnN0IGltcCA9IG5vZGUuaW1wbGVtZW50YXRpb247XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLndvcmtmbG93cz8uZmluZCh3ID0+IHcud29ya2Zsb3dVcmkgPT09IGltcC53b3JrZmxvd1VyaSk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3ZlYWJsZVZpZXdcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiBwb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIHNjYWxlOiBwb3NpdGlvbi5zY2FsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdmU9e21vdmVOb2RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1yZWQtNDAwIHctMTAgaC0xMCdcbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3AtMiBmbGV4LWNvbHVtbiBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtmbG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNDAwIHNlbGYtY2VudGVyJz57d29ya2Zsb3cubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMiB0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPiN7bm9kZS5ub2RlSWR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICB7d29ya2Zsb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtcm93IGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J2ZsZXgtY29sIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29ya2Zsb3cuaW5wdXRzLm1hcChpbnB1dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2lucHV0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2lucHV0Lm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrRmxvd1ZpZXcgd29ya2Zsb3c9e3dvcmtmbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPSdmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrZmxvdy5vdXRwdXRzLm1hcChvdXRwdXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvdXRwdXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9J3AtMiBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMzAwJz57YCR7b3V0cHV0Lm5hbWV9YH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz46PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0ncGwtMSB0ZXh0LWdyZWVuLTgwMCc+e2Ake2dldFR5cGVOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtWy0xOHB4XSc+XHVEODNEXHVERDM1PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7LyogPFRleHQgY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy00MDAgc2VsZi1jZW50ZXInPntub2RlLmltcGxlbWVudGF0aW9uLn08L1RleHQ+ICovfVxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L01vdmVhYmxlVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgeyBQaXBlc2NyaXB0V29ya2Zsb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG5hbWUgPSBgYW5zd2VyYDtcbmNvbnN0IHZhbHVlID0gNDI7XG5jb25zdCBub2RlSWQgPSAxO1xuXG5leHBvcnQgY29uc3QgZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3c6IFBpcGVzY3JpcHRXb3JrZmxvdyA9IHtcbiAgICB3b3JrZmxvd1VyaTogYGZpbGUudHNgLFxuICAgIG5hbWU6IGBmaWxlLnRzYCxcbiAgICBpbnB1dHM6IFtdLFxuICAgIG91dHB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogYGFuc3dlcmAsXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAga2luZDogYHNpbXBsZWAsXG4gICAgICAgICAgICAgICAgdHlwZTogYGludGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlwZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGBub2RlYCxcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlSWQ6IGAxYCxcbiAgICAgICAgICAgICAgICBzb3VyY2VOb2RlT3V0cHV0TmFtZTogYGFuc3dlcmAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgd29ya2Zsb3dzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdvcmtmbG93VXJpOiBgJHtuYW1lfS1kZWNsYXJhdGlvbmAsXG4gICAgICAgICAgICBuYW1lOiBgJHtuYW1lfS1kZWNsYXJhdGlvbmAsXG4gICAgICAgICAgICBpbnB1dHM6IFtdLFxuICAgICAgICAgICAgb3V0cHV0czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogYHNpbXBsZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgaW50YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGlwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogYGRhdGFgLFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbjogSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbm9kZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZUlkOiBgJHtub2RlSWR9YCxcbiAgICAgICAgICAgIGltcGxlbWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAga2luZDogYHdvcmtmbG93YCxcbiAgICAgICAgICAgICAgICB3b3JrZmxvd1VyaTogYCR7bmFtZX0tZGVjbGFyYXRpb25gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0UGlwZXM6IFtdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuIiwgImltcG9ydCB7IFdvcmtDYW52YXNWaWV3LCBleGFtcGxlRGVjbGFyYXRpb25Xb3JrZmxvdyB9IGZyb20gJ0ByaWNrbG92ZS11bml2ZXJzYWwvcGlwZXNjcmlwdCc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxXb3JrQ2FudmFzVmlldyB3b3JrZmxvdz17ZXhhbXBsZURlY2xhcmF0aW9uV29ya2Zsb3d9IC8+O1xufTtcbiIsICJpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gYmFja2dyb3VuZENvbG9yIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIGFuaW1hdGVkIGB0cnVlYCB0byBhbmltYXRlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSwgYGZhbHNlYCB0byBjaGFuZ2UgaW1tZWRpYXRlbHkuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGFuaW1hdGVkOiBib29sZWFuKSB7XG4gIFN0YXR1c0Jhci5zZXRCYWNrZ3JvdW5kQ29sb3IoYmFja2dyb3VuZENvbG9yLCBhbmltYXRlZCk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yLlxuICogQHBhcmFtIHZpc2libGUgSWYgdGhlIG5ldHdvcmsgYWN0aXZpdHkgaW5kaWNhdG9yIHNob3VsZCBiZSB2aXNpYmxlLlxuICogQHBsYXRmb3JtIGlvc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJOZXR3b3JrQWN0aXZpdHlJbmRpY2F0b3JWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgU3RhdHVzQmFyLnNldE5ldHdvcmtBY3Rpdml0eUluZGljYXRvclZpc2libGUodmlzaWJsZSk7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyQW5pbWF0aW9uIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG4vLyBAbmVlZHNBdWRpdFxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgc3RhdHVzIGJhci5cbiAqIEBwYXJhbSBoaWRkZW4gSWYgdGhlIHN0YXR1cyBiYXIgc2hvdWxkIGJlIGhpZGRlbi5cbiAqIEBwYXJhbSBhbmltYXRpb24gQW5pbWF0aW9uIHRvIHVzZSB3aGVuIHRvZ2dsaW5nIGhpZGRlbiwgZGVmYXVsdHMgdG8gYCdub25lJ2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckhpZGRlbihoaWRkZW46IGJvb2xlYW4sIGFuaW1hdGlvbjogU3RhdHVzQmFyQW5pbWF0aW9uKSB7XG4gIFN0YXR1c0Jhci5zZXRIaWRkZW4oaGlkZGVuLCBhbmltYXRpb24pO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuaW1wb3J0IHN0eWxlVG9CYXJTdHlsZSBmcm9tICcuL3N0eWxlVG9CYXJTdHlsZSc7XG5cbi8vIEBuZWVkc0F1ZGl0XG4vKipcbiAqIFNldCB0aGUgYmFyIHN0eWxlIG9mIHRoZSBzdGF0dXMgYmFyLlxuICogQHBhcmFtIHN0eWxlIFRoZSBjb2xvciBvZiB0aGUgc3RhdHVzIGJhciB0ZXh0LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJTdHlsZShzdHlsZTogU3RhdHVzQmFyU3R5bGUpIHtcbiAgU3RhdHVzQmFyLnNldEJhclN0eWxlKHN0eWxlVG9CYXJTdHlsZShzdHlsZSkpO1xufVxuIiwgImltcG9ydCB7IEFwcGVhcmFuY2UsIENvbG9yU2NoZW1lTmFtZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IFN0YXR1c0JhclN0eWxlIH0gZnJvbSAnLi9TdGF0dXNCYXIudHlwZXMnO1xuXG5mdW5jdGlvbiBnZXRDb2xvclNjaGVtZSgpIHtcbiAgaWYgKEFwcGVhcmFuY2UpIHtcbiAgICByZXR1cm4gQXBwZWFyYW5jZS5nZXRDb2xvclNjaGVtZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnbGlnaHQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlVG9CYXJTdHlsZShcbiAgc3R5bGU6IFN0YXR1c0JhclN0eWxlID0gJ2F1dG8nLFxuICBjb2xvclNjaGVtZTogQ29sb3JTY2hlbWVOYW1lID0gZ2V0Q29sb3JTY2hlbWUoKVxuKTogJ2xpZ2h0LWNvbnRlbnQnIHwgJ2RhcmstY29udGVudCcge1xuICBpZiAoIWNvbG9yU2NoZW1lKSB7XG4gICAgY29sb3JTY2hlbWUgPSAnbGlnaHQnO1xuICB9XG5cbiAgbGV0IHJlc29sdmVkU3R5bGUgPSBzdHlsZTtcbiAgaWYgKHN0eWxlID09PSAnYXV0bycpIHtcbiAgICByZXNvbHZlZFN0eWxlID0gY29sb3JTY2hlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB9IGVsc2UgaWYgKHN0eWxlID09PSAnaW52ZXJ0ZWQnKSB7XG4gICAgcmVzb2x2ZWRTdHlsZSA9IGNvbG9yU2NoZW1lID09PSAnbGlnaHQnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlZFN0eWxlID09PSAnbGlnaHQnID8gJ2xpZ2h0LWNvbnRlbnQnIDogJ2RhcmstY29udGVudCc7XG59XG4iLCAiaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gQG5lZWRzQXVkaXRcbi8qKlxuICogU2V0IHRoZSB0cmFuc2x1Y2VuY3kgb2YgdGhlIHN0YXR1cyBiYXIuXG4gKiBAcGFyYW0gdHJhbnNsdWNlbnQgV2hldGhlciB0aGUgYXBwIGNhbiBkcmF3IHVuZGVyIHRoZSBzdGF0dXMgYmFyLiBXaGVuIGB0cnVlYCwgY29udGVudCB3aWxsIGJlXG4gKiByZW5kZXJlZCB1bmRlciB0aGUgc3RhdHVzIGJhci4gVGhpcyBpcyBhbHdheXMgYHRydWVgIG9uIGlPUyBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBAcGxhdGZvcm0gYW5kcm9pZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJUcmFuc2x1Y2VudCh0cmFuc2x1Y2VudDogYm9vbGVhbikge1xuICBTdGF0dXNCYXIuc2V0VHJhbnNsdWNlbnQodHJhbnNsdWNlbnQpO1xufVxuIiwgImltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ2V4cG8tc3RhdHVzLWJhcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByZXNzYWJsZSwgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnQocyA9PiBzICsgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4LWNvbCBmbGV4LTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC0xMDAnPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPSd0ZXh0LWN5YW4tNzAwJz5FeGFtcGxlVmlldyAuLi48L1RleHQ+XG4gICAgICAgICAgICA8UHJlc3NhYmxlIG9uUHJlc3M9e2luY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2BJbmNyZW1lbnQgY291bnQ6JHtjb3VudH1gfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD4wMDM8L1RleHQ+XG4gICAgICAgICAgICA8L1ByZXNzYWJsZT5cbiAgICAgICAgICAgIDxTdGF0dXNCYXIgc3R5bGU9J2F1dG8nIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICApO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ3RhaWx3aW5kY3NzJztcblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWU6IENvbmZpZ1tgdGhlbWVgXSA9IHtcbiAgICAvLyBlZGl0IHlvdXIgdGFpbHdpbmQgdGhlbWUgaGVyZSFcbiAgICAvLyBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FkZGluZy1jdXN0b20tc3R5bGVzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsUUFBQUEsYUFBMkM7OztBQ0ZwRCxTQUFTLGNBQWM7QUFjaEIsSUFBTSxvQkFBb0IsQ0FDN0IsV0FDQztBQUNELFFBQU0sTUFBTSxPQUFPLE1BQU07QUFDekIsTUFBSSxVQUFVO0FBQ2QsUUFBTSxXQUFXLE9BQU8sSUFBSSxTQUFnQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDaEUsU0FBTyxTQUFTO0FBQ3BCOzs7QUNwQkEsU0FBZ0IsV0FBVyxVQUFBQyxTQUFRLGdCQUFnQjtBQUNuRCxTQUFTLE1BQVksaUJBQStCO0FBc0I3QyxJQUFNLGVBQWUsQ0FBQztBQUFBLEVBQ3pCO0FBQUEsRUFDQSxVQUFVO0FBQUEsRUFDVjtBQUFBLEVBQ0EsY0FBYztBQUFBLEVBQ2Q7QUFDSixNQU1NO0FBQ0YsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJLFNBQVM7QUFBQSxJQUNyQyxHQUFHLGFBQWE7QUFBQSxJQUNoQixHQUFHLGFBQWE7QUFBQSxJQUNoQixPQUFPLGFBQWE7QUFBQSxJQUNwQixlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixtQkFBbUI7QUFBQSxJQUNuQixtQkFBbUI7QUFBQSxFQUN2QixDQUFDO0FBRUQsUUFBTSxZQUFZLGtCQUFrQixDQUFDLE1BQWtCO0FBQ25ELFFBQUksR0FBRyxFQUFFLFdBQVcsS0FBSyxjQUFjO0FBQ25DO0FBQUEsSUFDSjtBQUVBLE1BQUUsZ0JBQWdCO0FBQ2xCLE1BQUUsZUFBZTtBQUVqQixVQUFNLFdBQVcsRUFBRSxXQUFXO0FBQzlCLFVBQU0sV0FBVyxFQUFFLFdBQVc7QUFDOUIsWUFBUSxJQUFJ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Q0k7QUFBQSxVQUNBLE1BQU07QUFBQSxZQUNGLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNWO0FBQUEsVUFDQSxNQUFNO0FBQUEsWUFDRixNQUFNO0FBQUEsWUFDTixNQUFNLEtBQUssVUFBVSxLQUFLO0FBQUEsVUFDOUI7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BQ0EsT0FBTyxDQUFDO0FBQUEsSUFDWjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsTUFDSSxRQUFRLEdBQUcsTUFBTTtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sYUFBYSxHQUFHLElBQUk7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsWUFBWSxDQUFDO0FBQUEsSUFDakI7QUFBQSxFQUNKO0FBQ0o7OztBQ3JETyxJQUFNLE1BQU0sTUFBTTtBQUNyQixTQUFPLENBQUMsZUFBZSxVQUFVLDRCQUE0QjtBQUNqRTs7O0FDSkEsU0FBUyxpQkFBaUI7OztBQ0ExQixTQUFTLGFBQUFDLGtCQUFpQjs7O0FDQTFCLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNBMUIsU0FBUyxhQUFBQyxrQkFBaUI7OztBQ0ExQixTQUFTLGtCQUFtQzs7O0FDQTVDLFNBQVMsYUFBQUMsa0JBQWlCOzs7QUNDMUIsU0FBUyxZQUFBQyxpQkFBZ0I7QUFDekIsU0FBUyxhQUFBQyxZQUFXLFFBQUFDLE9BQU0sUUFBQUMsYUFBWTs7O0FDQS9CLElBQU0sZ0JBQWlDO0FBQUE7QUFBQTtBQUc5QzsiLAogICJuYW1lcyI6IFsiVmlldyIsICJ1c2VSZWYiLCAidXNlUmVmIiwgIlJlYWN0IiwgInVzZVN0YXRlIiwgIlZpZXciLCAiVGV4dCIsICJWaWV3IiwgIlRleHQiLCAiUmVhY3QiLCAidXNlU3RhdGUiLCAidmFsdWUiLCAiVmlldyIsICJTdGF0dXNCYXIiLCAiU3RhdHVzQmFyIiwgIlN0YXR1c0JhciIsICJTdGF0dXNCYXIiLCAidXNlU3RhdGUiLCAiUHJlc3NhYmxlIiwgIlRleHQiLCAiVmlldyJdCn0K
