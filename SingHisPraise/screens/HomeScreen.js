import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const hymns = [
    { id: '1', title: 'Amazing Grace', lyrics: 'Amazing Grace, how sweet the sound...' },
    { id: '2', title: 'How Great Thou Art', lyrics: 'O Lord my God, when I in awesome wonder...' },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
                Sing His Praise
            </Text>
            <FlatList
                data={hymns}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Button
                        title={item.title}
                        onPress={() => navigation.navigate('HymnViewer', { title: item.title, lyrics: item.lyrics })}
                    />
                )}
            />
        </View>
    );
}
