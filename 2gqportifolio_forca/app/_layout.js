// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ 
      headerStyle: { backgroundColor: '#3b82f6' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="index" options={{ title: 'Meu Portfólio' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre o App' }} />
      <Stack.Screen name="academico" options={{ title: 'Formação Acadêmica' }} />
      <Stack.Screen name="profissional" options={{ title: 'Experiência Profissional' }} />
      <Stack.Screen name="projetos" options={{ title: 'Meus Projetos' }} />
      <Stack.Screen name="forca" options={{ title: 'Jogo da Forca' }} />
    </Stack>
  );
}
