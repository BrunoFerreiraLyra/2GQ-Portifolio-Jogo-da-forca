import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Academico() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloSecao}>FORMAÇÃO ACADÊMICA</Text>
      <View style={styles.linhaDivisoria} />

      <View style={styles.itemContainer}>
        <Text style={styles.instituicao}>Universidade Católica de Pernambuco (UNICAP)</Text>
        <Text style={styles.curso}>Bacharelado em Ciência da Computação</Text>
        <Text style={styles.periodo}>Status: Cursando o 5º período</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 25, backgroundColor: '#ffffff' },
  tituloSecao: { fontSize: 16, fontWeight: 'bold', color: '#1f2937', letterSpacing: 1, marginTop: 10 },
  linhaDivisoria: { height: 1.5, backgroundColor: '#1f2937', marginVertical: 15, width: '100%' },
  itemContainer: { marginBottom: 20 },
  instituicao: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 5 },
  curso: { fontSize: 16, color: '#4b5563', marginBottom: 5 },
  periodo: { fontSize: 14, color: '#6b7280', fontStyle: 'italic' },
});