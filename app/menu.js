import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

// Sample API items mimicking the screenshot menu items
const MENU_DATA = [
  { id: '1', name: 'Classic Latte', price: 140, icon: '☕', desc: 'Rich espresso blended with smooth steamed milk.' }, //[cite: 4]
  { id: '2', name: 'Cheesecake', price: 180, icon: '🍰', desc: "Creamy cheesecake that's perfect with coffee." }, //[cite: 1]
  { id: '3', name: 'Matcha Latte', price: 150, icon: '🌿', desc: 'Earthy premium matcha with silky steamed milk.' }, //[cite: 2]
  { id: '4', name: 'Butter Croissant', price: 95, icon: '🥐', desc: 'Flaky, buttery, freshly baked every morning.' }, //[cite: 2]
  { id: '5', name: 'Iced Caramel', price: 155, icon: '🧊', desc: 'Chilled coffee with creamy milk and caramel.' }, //[cite: 3]
  { id: '6', name: 'Mocha Dream', price: 165, icon: '🤎', desc: 'Espresso, chocolate, and milk topped with foam.' } //[cite: 3]
];

export default function MenuScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Component Lifecycle Demonstration (useEffect for API fetch)
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(MENU_DATA);
      setLoading(false);
    }, 800); // Simulate network API delay

    return () => clearTimeout(timer); // Lifecycle cleanup
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#C87D46" />
        <Text style={{ marginTop: 10, color: '#5C4033' }}>Brewing Menu...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionHeader}>Our Favorites</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => router.push({ pathname: '/item-detail', params: item })}
        >
          <Text style={styles.cardIcon}>{item.icon}</Text>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDesc}>{item.desc}</Text>
          <Text style={styles.cardPrice}>₱{item.price}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#EFE6D5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFE6D5' },
  sectionHeader: { fontSize: 32, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', marginBottom: 20, fontFamily: 'serif' },
  card: { backgroundColor: '#FFFDF9', borderRadius: 20, padding: 25, alignItems: 'center', marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  cardIcon: { fontSize: 50, marginBottom: 15 },
  cardTitle: { fontSize: 24, fontWeight: 'bold', color: '#2C1B14', fontFamily: 'serif', marginBottom: 8 },
  cardDesc: { fontSize: 15, color: '#6D4C41', textAlign: 'center', marginBottom: 15, lineHeight: 20 },
  cardPrice: { fontSize: 22, fontWeight: 'bold', color: '#C87D46', fontFamily: 'serif' }
});