import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HymnViewer from './src/screens/HymnViewer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Sing His Praise' }} />
        <Stack.Screen name="HymnViewer" component={HymnViewer} options={{ title: 'Hymn Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
