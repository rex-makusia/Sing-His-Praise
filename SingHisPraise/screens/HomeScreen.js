import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const hymns = [
    { id: '1', title: 'Amazing Grace', lyrics: 'Amazing Grace, how sweet the sound...' },
    { id: '2', title: 'How Great Thou Art', lyrics: 'O Lord my God, when I in awesome wonder...' },
    { id: '3', title: 'Blessed Assurance', lyrics: 'Blessed assurance, Jesus is mine...' },
    { id: '4', title: 'It Is Well', lyrics: 'When peace like a river attendeth my way...' },
];

export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredHymns, setFilteredHymns] = useState(hymns);

    // Function to filter hymns
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredHymns(hymns);
        } else {
            const filtered = hymns.filter((hymn) =>
                hymn.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredHymns(filtered);
        }
    };

    return (
        <View className="flex-1 bg-gray-100 p-4">
            {/* Header */}
            <View className="mb-6">
                <Text className="text-3xl font-extrabold text-center text-blue-600">
                    Sing His Praise
                </Text>
                <Text className="text-center text-gray-600 mt-2">
                    Find and sing your favorite hymns with ease!
                </Text>
            </View>

            {/* Search Bar */}
            <View className="flex-row items-center bg-white rounded-lg shadow-md p-2 mb-4">
                <FontAwesome name="search" size={20} color="gray" className="mr-2" />
                <TextInput
                    placeholder="Search hymns..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                    className="flex-1 text-gray-800"
                />
            </View>

            {/* Hymn List */}
            <FlatList
                data={filteredHymns}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HymnViewer', { title: item.title, lyrics: item.lyrics })}
                        className="bg-white rounded-lg shadow-md p-4 mb-4 flex-row items-center"
                    >
                        <FontAwesome name="music" size={24} color="blue" className="mr-4" />
                        <View>
                            <Text className="text-lg font-semibold text-blue-700">{item.title}</Text>
                            <Text className="text-sm text-gray-500 mt-1">Tap to view the lyrics</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 16 }}
                ListEmptyComponent={
                    <Text className="text-center text-gray-500 mt-4">No hymns found</Text>
                }
            />
        </View>
    );
}
