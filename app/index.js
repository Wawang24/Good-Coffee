import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section with Overlay */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000' }}
        style={styles.heroBackground}
        imageStyle={{ opacity: 0.6 }}
      >
        <View className="header" style={styles.header}>
          <Text style={styles.brandTitle}>☕ Brew & Bloom</Text>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => router.push('/')}><Text style={styles.navLink}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/story')}><Text style={styles.navLink}>About</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/menu')}><Text style={styles.navLink}>Menu</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Good{"\n"}Coffee.{"\n"}Good{"\n"}Mood.</Text>
          <Text style={styles.heroSubtitle}>
            Freshly roasted beans, handcrafted drinks, and cozy moments made just for you.
          </Text>

          <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/menu')}>
            <Text style={styles.ctaButtonText}>Explore Menu</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#1A0E0A' },
  heroBackground: { width: '100%', minHeight: 750, justifyContent: 'space-between', padding: 20 },
  header: { paddingTop: 40, alignItems: 'center' },
  brandTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF', fontFamily: 'serif' },
  navBar: { flexDirection: 'row', gap: 20, marginTop: 15 },
  navLink: { color: '#E8D8C8', fontSize: 16, fontWeight: '500' },
  heroContent: { marginBottom: 60, alignItems: 'center', textAlign: 'center' },
  heroTitle: { fontSize: 48, fontWeight: '800', color: '#FFFFFF', textAlign: 'center', lineHeight: 56, fontFamily: 'serif' },
  heroSubtitle: { fontSize: 16, color: '#E8D8C8', textAlign: 'center', marginTop: 20, paddingHorizontal: 20, lineHeight: 22 },
  ctaButton: { marginTop: 30, backgroundColor: '#C87D46', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 25 },
  ctaButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});