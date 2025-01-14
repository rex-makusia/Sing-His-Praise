import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { fetchHymns } from '../database/db';

export default function HomeScreen({ navigation }) {
    const [hymns, setHymns] = useState([]);

    useEffect(() => {
        // Fetch hymns from the database
        fetchHymns(setHymns);
    }, []);

    return (
        <View className="flex-1 p-4 bg-gray-100">
            <Text className="text-2xl font-bold text-center mb-4">Sing His Praise</Text>
            <FlatList
                data={hymns}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HymnViewer', { title: item.title, lyrics: item.lyrics })}
                        className="bg-white p-4 mb-2 rounded shadow"
                    >
                        <Text className="text-lg font-semibold">{item.title}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text className="text-center">No hymns available.</Text>}
            />
        </View>
    );
}
