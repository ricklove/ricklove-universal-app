import { exampleA } from '@bc2/example-a';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(s => s + 1);
    };

    return (
        <View style={styles.container}>
            <Text>{`Open up App.tsx to start working on your app! ... ${exampleA}`}</Text>
            <Pressable onPress={increment}>
                <Text>{`Increment count:${count}`}</Text>
            </Pressable>
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#fff`,
        alignItems: `center`,
        justifyContent: `center`,
    },
});
