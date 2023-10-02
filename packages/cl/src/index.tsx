import { exampleA } from '@bc2/example-a';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export const ExampleView = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(s => s + 1);
    };

    return (
        <View className='w-full h-full flex-col flex-1 items-center justify-center bg-red-100'>
            <Text className='text-cyan-700'>{`ExampleView ... ${exampleA} - wait a min, it is retaining state now - cool`}</Text>
            <Pressable onPress={increment}>
                <Text>{`Increment count:${count}`}</Text>
                <Text>003</Text>
            </Pressable>
            <StatusBar style='auto' />
        </View>
    );
};
