import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ItemDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams(); // Receiving data passed via router

  // Interactive State
  const [quantity, setQuantity] = useState(1);

  const totalPrice = (Number(params.price) || 0) * quantity;

  const handleOrder = () => {
    Alert.alert("Order Placed!", `You ordered ${quantity}x ${params.name} for ₱${totalPrice}.`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>{params.icon}</Text>
        <Text style={styles.title}>{params.name}</Text>
        <Text style={styles.desc}>{params.desc}</Text>
        <Text style={styles.price}>₱{params.price}</Text>

        {/* Counter controls */}
        <View style={styles.counterRow}>
          <TouchableOpacity 
            style={styles.counterBtn} 
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.counterBtn} 
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.orderBtn} onPress={handleOrder}>
          <Text style={styles.orderBtnText}>Add to Cart • ₱{totalPrice}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#EFE6D5', justifyContent: 'center' },
  card: { backgroundColor: '#FFFDF9', borderRadius: 24, padding: 30, alignItems: 'center', elevation: 4 },
  icon: { fontSize: 70, marginBottom: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2C1B14', fontFamily: 'serif' },
  desc: { fontSize: 16, color: '#6D4C41', textAlign: 'center', marginVertical: 12 },
  price: { fontSize: 24, fontWeight: 'bold', color: '#C87D46', marginBottom: 20 },
  counterRow: { flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 25 },
  counterBtn: { backgroundColor: '#EFE6D5', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  btnText: { fontSize: 22, fontWeight: 'bold', color: '#3E2723' },
  qtyText: { fontSize: 20, fontWeight: 'bold', color: '#2C1B14' },
  orderBtn: { backgroundColor: '#C87D46', paddingVertical: 16, paddingHorizontal: 30, borderRadius: 30, width: '100%', alignItems: 'center' },
  orderBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});