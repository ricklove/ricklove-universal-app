import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ValueViewer, ValueViewerMode } from './value-view';

export const SheetView = ({
    data,
}: {
    data: {
        header: { name: string; mode: ValueViewerMode }[];
        rows: { cells: unknown[] }[];
    };
}) => {
    return (
        <View className='flex-col'>
            <View className='flex-row'>
                {data.header.map(x => (
                    <React.Fragment key={x.name}>
                        <Text>{x.name}</Text>
                    </React.Fragment>
                ))}
            </View>
            <ScrollView className='flex-col max-h-[25vh]'>
                {data.rows.map((r, i) => (
                    <React.Fragment key={i}>
                        <View className='flex-row'>
                            {r.cells.map((x, j) => (
                                <React.Fragment key={j}>
                                    <ValueViewer value={x} mode={data.header[j].mode} />
                                </React.Fragment>
                            ))}
                        </View>
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
};
