import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ValueViewer, ValueViewerMode } from './value-view';

export type SheetViewData = {
    header: { name: string; mode: ValueViewerMode }[];
    rows: { cells: unknown[] }[];
};
export const SheetView = ({ data }: { data: SheetViewData }) => {
    return (
        <View testID='SheetView' className='flex-col'>
            <View className='flex-row'>
                {data.header.map(x => (
                    <React.Fragment key={x.name}>
                        <View className='flex-1'>
                            <Text>{x.name}</Text>
                        </View>
                    </React.Fragment>
                ))}
            </View>
            <ScrollView className='flex-col max-h-[25vh]'>
                {data.rows.map((r, i) => (
                    <React.Fragment key={i}>
                        <View className='flex-row'>
                            {r.cells.map((x, j) => (
                                <React.Fragment key={j}>
                                    <View className='flex-1'>
                                        <ValueViewer value={x} mode={data.header[j].mode} />
                                    </View>
                                </React.Fragment>
                            ))}
                        </View>
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
};
