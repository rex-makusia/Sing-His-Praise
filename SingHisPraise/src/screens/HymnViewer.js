import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HymnViewer({ route }) {
    const { title, lyrics } = route.params;

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
                {title}
            </Text>
            <ScrollView>
                <Text style={{ fontSize: 16, lineHeight: 24 }}>
                    {lyrics}
                </Text>
            </ScrollView>
        </View>
    );
}
