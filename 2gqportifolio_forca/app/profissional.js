import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Profissional() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloSecao}>EXPERIÊNCIA PROFISSIONAL</Text>
      <View style={styles.linhaDivisoria} />

      <View style={styles.itemContainer}>
        <Text style={styles.titulo}>Em busca de novos desafios</Text>
        <Text style={styles.descricao}>
          Atualmente focando no aprimoramento acadêmico e no desenvolvimento de projetos práticos (como este aplicativo). 
          Estou em busca da primeira oportunidade de estágio ou trabalho na área de desenvolvimento de software, 
          onde eu possa aplicar meus conhecimentos em programação e aprender com uma equipe experiente.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 25, backgroundColor: '#ffffff' },
  tituloSecao: { fontSize: 16, fontWeight: 'bold', color: '#111827', letterSpacing: 1, marginTop: 10 },
  linhaDivisoria: { height: 1.5, backgroundColor: '#3b82f6', marginVertical: 15, width: '100%' },
  itemContainer: { marginTop: 10 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 10 },
  descricao: { fontSize: 15, color: '#4b5563', lineHeight: 24, textAlign: 'justify' },
});
