import { useStableCallback } from '@ricklove-universal/cl/src/utils/stable-callback';
import { useContext, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import { RunValueContext } from './node-instance-view';

export const ValueEditor = ({
    id,
    value,
    hasOverride,
    onChange,
}: {
    id: string;
    value: unknown;
    hasOverride: boolean;
    onChange: (value: unknown) => void;
}) => {
    const runValueContext = useContext(RunValueContext);

    const changeValue = useStableCallback((v: unknown) => {
        toggleEdit(false);
        onChange(v);
    });

    const toggleEdit = useStableCallback((visible: boolean) => {
        console.log(`ValueEditor: toggleEdit`, { visible });
        const newShowEdit = visible;

        const components = runValueContext.Components.value;
        if (newShowEdit) {
            components[id] = () => (
                <ValueEditModal
                    id={id}
                    value={value}
                    onChange={changeValue}
                    onCancel={() => toggleEdit(false)}
                />
            );
        } else {
            delete components[id];
        }
        runValueContext.Components.next(components);
    });

    return (
        <>
            <Pressable onPressIn={() => toggleEdit(true)}>
                <ValueViewer value={value} mode={hasOverride ? `override` : undefined} />
            </Pressable>
        </>
    );
};

export type ValueViewerMode = undefined | `override` | `input` | `output` | `inner`;
export const ValueViewer = ({ value, mode }: { value: unknown; mode?: ValueViewerMode }) => {
    return (
        <>
            <View
                className={`m-[1px] ${
                    mode === `override`
                        ? `bg-green-100`
                        : mode === `input`
                        ? `bg-green-100`
                        : mode === `output`
                        ? `bg-green-100`
                        : `bg-gray-100`
                }`}
            >
                <Text
                    className={`px-1 min-w-[60px] ${
                        mode === `override`
                            ? `text-green-600`
                            : mode === `input`
                            ? `text-green-600`
                            : mode === `output`
                            ? `text-green-600`
                            : `text-gray-600`
                    }`}
                >
                    {JSON.stringify(value)}
                </Text>
            </View>
        </>
    );
};

const ValueEditModal = ({
    id,
    value: valueRaw,
    onChange,
    onCancel,
}: {
    id: string;
    value: unknown;
    onChange: (value: unknown) => void;
    onCancel: () => void;
}) => {
    const [value, setValue] = useState(JSON.stringify(valueRaw));
    const save = useStableCallback(() => {
        onChange(JSON.parse(value));
    });
    const clear = useStableCallback(() => {
        onChange(undefined);
    });
    const cancel = useStableCallback(() => {
        onCancel();
    });

    return (
        <View className='absolute flex-col bg-gray-100 p-2 rounded z-10'>
            <TextInput className='bg-white' value={value} onChangeText={x => setValue(x)} />
            <View className='flex-row justify-between'>
                <Pressable onPress={cancel}>
                    <View className='bg-gray-200 p-1 m-1'>
                        <Text>Cancel</Text>
                    </View>
                </Pressable>

                <Pressable onPress={clear}>
                    <View className='bg-red-200 p-1 m-1'>
                        <Text>Clear</Text>
                    </View>
                </Pressable>

                <Pressable onPress={save}>
                    <View className='bg-blue-200 p-1 m-1'>
                        <Text>Save</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};
