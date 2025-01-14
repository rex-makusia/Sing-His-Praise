import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { fetchHymns } from '../database/db';

export default function HomeScreen({ navigation }) {
    const [hymns, setHymns] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchHymns(setHymns);
    }, []);

    const filteredHymns = hymns.filter((hymn) =>
        hymn.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View className="flex-1 p-4 bg-gray-100">
            <Text className="text-2xl font-bold text-center mb-4">Sing His Praise</Text>
            <TextInput
                placeholder="Search hymns..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="bg-white p-2 rounded shadow mb-4"
            />
            <FlatList
                data={filteredHymns}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HymnViewer', { title: item.title, lyrics: item.lyrics })}
                        className="bg-white p-4 mb-2 rounded shadow"
                    >
                        <Text className="text-lg font-semibold">{item.title}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text className="text-center">No hymns found.</Text>}
            />
        </View>
    );
}
// Update a hymn
export const updateHymn = (id, title, lyrics) => {
    db.transaction((tx) => {
        tx.executeSql(
            `UPDATE hymns SET title = ?, lyrics = ? WHERE id = ?;`,
            [title, lyrics, id],
            () => console.log('Hymn updated'),
            (error) => console.log('Error updating hymn:', error)
        );
    });
};

// Delete a hymn
export const deleteHymn = (id) => {
    db.transaction((tx) => {
        tx.executeSql(
            `DELETE FROM hymns WHERE id = ?;`,
            [id],
            () => console.log('Hymn deleted'),
            (error) => console.log('Error deleting hymn:', error)
        );
    });
};
