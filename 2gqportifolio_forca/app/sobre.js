import { View, Text, StyleSheet } from 'react-native';
export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tecnologias Utilizadas:</Text>
      <Text style={styles.item}>• React Native (Framework Mobile)</Text>
      <Text style={styles.item}>• Expo SDK 54</Text>
      <Text style={styles.item}>• Expo Router (Navegação baseada em arquivos)</Text>
      <Text style={styles.item}>• JavaScript ES6+</Text>
      <Text style={styles.item}>• StyleSheet (Estilização Nativa)</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  item: { fontSize: 16, marginBottom: 10, color: '#374151' }
});