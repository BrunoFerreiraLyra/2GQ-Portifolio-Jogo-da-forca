import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.main}>
      
      {/* Container da Imagem */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/foto-perfil.jpg')} 
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>

      
      <Text style={styles.title}>Bruno Ferreira de Andrade Lyra</Text>
      <Text style={styles.description}>
        Me chamo Bruno. Tenho 20 anos. Atualmente estou cursando o 5º período de Ciência da Computação na UNICAP.
      </Text>

   
      <View style={styles.projetosContainer}>
        <Link href="/forca" asChild>
          <TouchableOpacity style={styles.botaoProjeto}>
            <Text style={styles.textoBotao}> Jogar Jogo da Forca</Text>
          </TouchableOpacity>
        </Link>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: 200,
    height: 200,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  projetosContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  botaoProjeto: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});