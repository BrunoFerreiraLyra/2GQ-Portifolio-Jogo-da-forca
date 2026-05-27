import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function Projetos() {
  const abrirLinkExterno = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link:", err));
  };

  const ProjetoItem = ({ nome, tech, link }) => (
    <View style={styles.projetoItem}>
      <View style={styles.projetoTextoContainer}>
        <Text style={styles.projetoNome}>{nome}</Text>
        <Text style={styles.projetoTech}>{tech}</Text>
      </View>
      <TouchableOpacity style={styles.botaoGithub} onPress={() => abrirLinkExterno(link)}>
        <Text style={styles.textoBotaoGithub}>GitHub 🔗</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloSecao}>MEUS PROJETOS</Text>
      <View style={styles.linhaDivisoria} />

      <ProjetoItem 
        nome="Projeto Java" 
        tech="Java / Backend" 
        link="https://github.com/BrunoFerreiraLyra/Projeto-Java" 
      />
      <ProjetoItem 
        nome="Cubo Mágico 3D" 
        tech="Graphics / 3D Geometry" 
        link="https://github.com/BrunoFerreiraLyra/Cubo_Magico_3D" 
      />
      <ProjetoItem 
        nome="Projeto Integrador Cellabox" 
        tech="Full Stack / Mobile / Web" 
        link="https://github.com/BrunoFerreiraLyra/Projeto-Integrador-Cellabox" 
      />
      <ProjetoItem 
        nome="Team Build Pokemon" 
        tech="Strategy / Data Analysis" 
        link="https://github.com/BrunoFerreiraLyra" 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 25, backgroundColor: '#ffffff' },
  tituloSecao: { fontSize: 16, fontWeight: 'bold', color: '#1f2937', letterSpacing: 1, marginTop: 10 },
  linhaDivisoria: { height: 1.5, backgroundColor: '#1f2937', marginVertical: 15, width: '100%' },
  projetoItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  projetoTextoContainer: { flex: 1, paddingRight: 10 },
  projetoNome: { fontSize: 16, fontWeight: '600', color: '#111827' },
  projetoTech: { fontSize: 13, color: '#9ca3af', marginTop: 4 },
  botaoGithub: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#f3f4f6', borderRadius: 6, borderWidth: 1, borderColor: '#d1d5db' },
  textoBotaoGithub: { fontSize: 12, fontWeight: '600', color: '#374151' },
});