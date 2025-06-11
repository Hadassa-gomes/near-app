import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function PlacesListScreen({ route, navigation }) {
  const { lat, lng } = route.params;
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`http://<SEU_IP_LOCAL>:3000/places?lat=${lat}&lng=${lng}`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Erro ao buscar lugares:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Lugares Encontrados:</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { place: item })}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


