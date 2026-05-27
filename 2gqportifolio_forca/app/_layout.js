// app/_layout.js
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Tela inicial (Currículo) - Esconde o cabeçalho padrão */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      
      {/* Tela do Jogo - Esconde o cabeçalho também para fazermos o nosso */}
      <Stack.Screen name="forca" options={{ headerShown: false }} />
    </Stack>
  );
}