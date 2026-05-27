// app/index.js
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const MenuBtn = ({ href, title, icon }) => (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{icon}  {title}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/foto-perfil.jpg')} style={styles.foto} />
      <Text style={styles.nome}>Bruno Ferreira</Text>
      <Text style={styles.cargo}>Ciência da Computação</Text>

      <View style={styles.menu}>
        <MenuBtn href="/sobre" title="Sobre o App" icon="ℹ️" />
        <MenuBtn href="/academico" title="Acadêmico" icon="🎓" />
        <MenuBtn href="/profissional" title="Profissional" icon="💼" />
        <MenuBtn href="/projetos" title="Projetos" icon="💻" />
        <MenuBtn href="/forca" title="Jogar Forca" icon="🎮" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 25, backgroundColor: '#fff' },
  foto: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  nome: { fontSize: 24, fontWeight: 'bold', color: '#111827' },
  cargo: { fontSize: 16, color: '#6b7280', marginBottom: 30 },
  menu: { width: '100%', gap: 15 },
  button: { backgroundColor: '#3b82f6', padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
