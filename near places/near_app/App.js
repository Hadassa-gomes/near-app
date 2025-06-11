import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlacesListScreen from './screens/PlacesListScreen';
import PlaceDetailScreen from './screens/PlaceDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Places" component={PlacesListScreen} />
        <Stack.Screen name="Detail" component={PlaceDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

