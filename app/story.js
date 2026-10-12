import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StoryScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800' }}
        style={styles.storyImage}
      />
      
      <Text style={styles.title}>Our Little{"\n"}Coffee Story</Text>

      <Text style={styles.paragraph}>
        Brew & Bloom started with a simple idea: coffee should be more than a drink. It should be a moment to slow down, connect, and enjoy the little things.
      </Text>

      <Text style={styles.paragraph}>
        We carefully select quality beans and turn them into handcrafted coffee with love.
      </Text>

      <TouchableOpacity style={styles.visitButton} onPress={() => router.push('/menu')}>
        <Text style={styles.visitButtonText}>Visit Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, backgroundColor: '#F5EFE6', alignItems: 'center' },
  storyImage: { width: '100%', height: 250, borderRadius: 20, marginBottom: 25 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#3E2723', textAlign: 'center', marginBottom: 20, fontFamily: 'serif', lineHeight: 42 },
  paragraph: { fontSize: 16, color: '#5D4037', textAlign: 'center', lineHeight: 26, marginBottom: 18 },
  visitButton: { marginTop: 10, backgroundColor: '#C87D46', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 25 },
  visitButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});