import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#2C1B14' },
          headerTintColor: '#E8D8C8',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#F5EFE6' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Brew & Bloom', headerShown: false }} />
        <Stack.Screen name="menu" options={{ title: 'Our Menu' }} />
        <Stack.Screen name="item-detail" options={{ title: 'Item Details' }} />
        <Stack.Screen name="story" options={{ title: 'Our Story' }} />
      </Stack>
    </>
  );
}