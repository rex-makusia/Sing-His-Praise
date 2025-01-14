import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeDatabase, insertHymn } from './src/database/db';

export default function App() {
  useEffect(() => {
    // Initialize the database
    initializeDatabase();

    // Optional: Prepopulate hymns
    insertHymn('Amazing Grace', 'Amazing Grace, how sweet the sound...');
    insertHymn('How Great Thou Art', 'O Lord my God, when I in awesome wonder...');
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl">Welcome to Sing His Praise</Text>
    </View>
  );
}
