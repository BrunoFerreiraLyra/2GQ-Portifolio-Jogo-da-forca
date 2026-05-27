import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { palavras, codigosBandeiras } from '../utils/palavras';

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// No React Native, precisamos mapear as imagens locais previamente
const imagensForca = {
  0: require('../assets/images/erro-0.png'),
  1: require('../assets/images/erro-1.png'),
  2: require('../assets/images/erro-2.png'),
  3: require('../assets/images/erro-3.png'),
  4: require('../assets/images/erro-4.png'),
  5: require('../assets/images/erro-5.png'),
  6: require('../assets/images/erro-6.png'),
};

export default function JogoDaForca() {
  const [palavraAtual, setPalavraAtual] = useState("");
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [statusDoJogo, setStatusDoJogo] = useState("jogando"); 

  const iniciarNovoJogo = () => {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    setPalavraAtual(palavras[indiceAleatorio]);
    setLetrasTentadas([]);
    setErros(0);
    setStatusDoJogo("jogando");
  };

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  useEffect(() => {
    if (!palavraAtual) return; 

    if (erros >= 6) {
      setStatusDoJogo("derrota");
      return;
    }

    const todasLetrasDescobertas = palavraAtual
      .split('')
      .every((letra) => letrasTentadas.includes(letra));

    if (todasLetrasDescobertas && letrasTentadas.length > 0) {
      setStatusDoJogo("vitoria");
    }
  }, [letrasTentadas, erros, palavraAtual]);

  const lidarComClique = (letra) => {
    if (letrasTentadas.includes(letra) || statusDoJogo !== "jogando") return;

    setLetrasTentadas((prev) => [...prev, letra]);

    if (!palavraAtual.includes(letra)) {
      setErros((prev) => prev + 1);
    }
  };

  if (!palavraAtual) {
    return (
      <View style={styles.main}>
        <Text>Carregando jogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <Text style={styles.titulo}>Jogo da Forca - Países</Text>
      
      {/* Botão Voltar */}
      <View style={styles.topoContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.botaoVoltar}>
            <Text style={styles.textoBotaoVoltar}>⬅ Voltar ao Portfólio</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Área da Forca e Boneco */}
      <View style={styles.forcaArea}>
        <Image 
          source={imagensForca[erros > 6 ? 6 : erros]} 
          style={styles.imagemBase} 
          resizeMode="contain"
        />
      </View>

      {/* Exibição da Palavra */}
      <View style={styles.palavraContainer}>
        {palavraAtual.split('').map((letra, index) => {
          const revelada = letrasTentadas.includes(letra) || statusDoJogo === "derrota";
          return (
            <View key={index} style={styles.letraCaixa}>
              <Text style={styles.letraTexto}>
                {revelada ? letra : ""}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Interface de Fim de Jogo */}
      {statusDoJogo !== "jogando" && (
        <View style={styles.mensagemFim}>
          <Text style={[styles.textoFimBase, statusDoJogo === "vitoria" ? styles.textoVitoria : styles.textoDerrota]}>
            {statusDoJogo === "vitoria" ? "Vitória!" : "Derrota!"}
          </Text>

          <Image 
            source={{ uri: `https://flagcdn.com/w160/${codigosBandeiras[palavraAtual]}.png` }} 
            style={styles.bandeira}
          />

          <Text style={styles.nomePais}>
            {palavraAtual.charAt(0) + palavraAtual.slice(1).toLowerCase()}
          </Text>

          <TouchableOpacity onPress={iniciarNovoJogo} style={styles.botaoReiniciar}>
            <Text style={styles.textoBotaoReiniciar}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Teclado Virtual */}
      <View style={styles.teclado}>
        {alfabeto.map((letra) => {
          const jaTentou = letrasTentadas.includes(letra);
          const acertou = jaTentou && palavraAtual.includes(letra);
          const errou = jaTentou && !palavraAtual.includes(letra);
          const tecladoTravado = statusDoJogo !== "jogando";

          return (
            <TouchableOpacity
              key={letra}
              onPress={() => lidarComClique(letra)}
              disabled={jaTentou || tecladoTravado} 
              style={[
                styles.tecla,
                acertou && styles.teclaCorreta,
                errou && styles.teclaErrada
              ]}
            >
              <Text style={[
                styles.teclaTexto,
                (acertou || errou) && styles.teclaTextoBranca
              ]}>
                {letra}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff', // Substitui o fundo padrão para combinar
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  topoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  botaoVoltar: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
  },
  textoBotaoVoltar: {
    color: '#4b5563',
    fontWeight: '600',
    fontSize: 14,
  },
  forcaArea: {
    width: 250,
    height: 300,
    marginVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 2, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemBase: {
    width: '100%',
    height: '100%',
  },
  palavraContainer: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  letraCaixa: {
    width: 40,
    height: 50,
    borderBottomWidth: 4,
    borderBottomColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  letraTexto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 600,
    marginTop: 20,
  },
  tecla: {
    width: 45, // Ajustado ligeiramente para caber melhor na tela do celular
    height: 45,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teclaCorreta: {
    backgroundColor: '#22c55e',
  },
  teclaErrada: {
    backgroundColor: '#ef4444',
    opacity: 0.6,
  },
  teclaTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
  },
  teclaTextoBranca: {
    color: '#ffffff',
  },
  mensagemFim: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
    padding: 25,
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    width: '90%',
  },
  textoFimBase: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textoVitoria: {
    color: '#16a34a',
  },
  textoDerrota: {
    color: '#dc2626',
  },
  nomePais: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginVertical: 10,
    letterSpacing: 1,
  },
  bandeira: {
    width: 160,
    height: 100, 
    borderRadius: 4,
    marginTop: 10,
  },
  botaoReiniciar: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotaoReiniciar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});