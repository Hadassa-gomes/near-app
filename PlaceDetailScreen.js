import React from 'react';
import { View, Text } from 'react-native';

export default function PlaceDetailScreen({ route }) {
  const { place } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{place.name}</Text>
      <Text>{place.description}</Text>
      <Text>Lat: {place.latitude}</Text>
      <Text>Lng: {place.longitude}</Text>
    </View>
  );
}
