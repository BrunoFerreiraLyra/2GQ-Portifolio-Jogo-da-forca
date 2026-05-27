
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  
  
  const abrirLinkExterno = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      
  
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          
          <Image
            source={require('../assets/images/foto-perfil.png')} 
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.name} adjustsFontSizeToFit numberOfLines={2}>
          Bruno Ferreira de Andrade Lyra
        </Text>
        <Text style={styles.subtitle}>CIÊNCIA DA COMPUTAÇÃO</Text>

       
        <View style={styles.contatoContainer}>
          <Text style={styles.textoContato}>📞 (81) 98138-1909</Text>
          <Text style={styles.textoContato}>✉ brunoferreiralyra@gmail.com</Text>
        </View>
      </View>


      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>ABOUT ME</Text>
        <View style={styles.linhaDivisoria} />
        <Text style={styles.textoDescricao}>
          Me chamo Bruno. Tenho 20 anos. Atualmente estou cursando o 5º período de Ciência da Computação na UNICAP.
        </Text>
      </View>

   
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>PROJECTS & EXPERTISE</Text>
        <View style={styles.linhaDivisoria} />

    
        <View style={styles.projetoItem}>
          <View style={styles.projetoTextoContainer}>
            <Text style={styles.projetoNome}>Projeto Java</Text>
            <Text style={styles.projetoTech}>Java / Backend</Text>
          </View>
          <TouchableOpacity 
            style={styles.botaoGithub} 
            onPress={() => abrirLinkExterno('https://github.com/BrunoFerreiraLyra/Projeto-Java')}
          >
            <Text style={styles.textoBotaoGithub}>GitHub 🔗</Text>
          </TouchableOpacity>
        </View>

  
        <View style={styles.projetoItem}>
          <View style={styles.projetoTextoContainer}>
            <Text style={styles.projetoNome}>Cubo Mágico 3D</Text>
            <Text style={styles.projetoTech}>Graphics / 3D Geometry</Text>
          </View>
          <TouchableOpacity 
            style={styles.botaoGithub} 
            onPress={() => abrirLinkExterno('https://github.com/BrunoFerreiraLyra/Cubo_Magico_3D')}
          >
            <Text style={styles.textoBotaoGithub}>GitHub 🔗</Text>
          </TouchableOpacity>
        </View>

     
        <View style={styles.projetoItem}>
          <View style={styles.projetoTextoContainer}>
            <Text style={styles.projetoNome}>Projeto Integrador Cellabox</Text>
            <Text style={styles.projetoTech}>Full Stack / Mobile / Web</Text>
          </View>
          <TouchableOpacity 
            style={styles.botaoGithub} 
            onPress={() => abrirLinkExterno('https://github.com/BrunoFerreiraLyra/Projeto-Integrador-Cellabox')}
          >
            <Text style={styles.textoBotaoGithub}>GitHub 🔗</Text>
          </TouchableOpacity>
        </View>

    
        <View style={styles.projetoItem}>
          <View style={styles.projetoTextoContainer}>
            <Text style={styles.projetoNome}>Team Build Pokemon</Text>
            <Text style={styles.projetoTech}>Strategy / Data Analysis</Text>
          </View>
          <TouchableOpacity 
            style={styles.botaoGithub} 
            onPress={() => abrirLinkExterno('https://github.com/BrunoFerreiraLyra')}
          >
            <Text style={styles.textoBotaoGithub}>GitHub 🔗</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.forcaActionContainer}>
        <Link href="/forca" asChild>
          <TouchableOpacity style={styles.botaoJogo}>
            <Text style={styles.textoBotaoJogo}>🎮 Iniciar Jogo da Forca Nativo</Text>
          </TouchableOpacity>
        </Link>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 60,
    paddingHorizontal: 25,
    paddingBottom: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 35,
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70, 
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '600',
    marginTop: 4,
    letterSpacing: 1.5,
  },
  contatoContainer: {
    marginTop: 15,
    alignItems: 'center',
    gap: 4,
  },
  textoContato: {
    fontSize: 14,
    color: '#4b5563',
  },
  secao: {
    marginBottom: 30,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },
  linhaDivisoria: {
    height: 1.5,
    backgroundColor: '#1f2937',
    marginVertical: 8,
    width: '100%',
  },
  textoDescricao: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
    textAlign: 'justify',
  },
  projetoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  projetoTextoContainer: {
    flex: 1,
    paddingRight: 10,
  },
  projetoNome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  projetoTech: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 2,
  },
  botaoGithub: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  textoBotaoGithub: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  forcaActionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  botaoJogo: {
    backgroundColor: '#111827', 
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textoBotaoJogo: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});