import React, { useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { codigosBandeiras, palavras } from '../utils/palavras';

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
  const { width } = useWindowDimensions();
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

  const nomePaisFormatado = useMemo(() => {
    if (!palavraAtual) return "";

    return palavraAtual.charAt(0) + palavraAtual.slice(1).toLowerCase();
  }, [palavraAtual]);

  const tamanhoCaixaLetra = useMemo(() => {
    const larguraDisponivel = Math.min(width, 600) - 48;
    const tamanhoPorLetra =
      Math.floor(larguraDisponivel / Math.max(palavraAtual.length, 1)) - 4;

    return Math.max(18, Math.min(40, tamanhoPorLetra));
  }, [palavraAtual.length, width]);

  const alturaCaixaLetra = Math.max(34, tamanhoCaixaLetra + 10);
  const tamanhoFonteLetra = Math.max(14, Math.min(32, tamanhoCaixaLetra * 0.7));

  if (!palavraAtual) {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.main, styles.mainCentralizada]}
      >
        <Text style={styles.textoCarregando}>Carregando jogo...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.main}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo} adjustsFontSizeToFit numberOfLines={1}>
        Jogo da Forca - Países
      </Text>

      <View style={styles.topoContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.botaoVoltar}>
            <Text
              style={styles.textoBotaoVoltar}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              ← Voltar ao Portfólio
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.forcaArea}>
        <Image
          source={imagensForca[erros > 6 ? 6 : erros]}
          style={styles.imagemBase}
          resizeMode="contain"
        />
      </View>

      <View style={styles.palavraContainer}>
        {palavraAtual.split('').map((letra, index) => {
          const revelada =
            letrasTentadas.includes(letra) || statusDoJogo === "derrota";

          return (
            <View
              key={`${letra}-${index}`}
              style={[
                styles.letraCaixa,
                {
                  width: tamanhoCaixaLetra,
                  height: alturaCaixaLetra,
                },
              ]}
            >
              <Text
                style={[styles.letraTexto, { fontSize: tamanhoFonteLetra }]}
                adjustsFontSizeToFit
                numberOfLines={1}
              >
                {revelada ? letra : ""}
              </Text>
            </View>
          );
        })}
      </View>

      {statusDoJogo !== "jogando" && (
        <View style={styles.mensagemFim}>
          <Text
            style={[
              styles.textoFimBase,
              statusDoJogo === "vitoria"
                ? styles.textoVitoria
                : styles.textoDerrota,
            ]}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {statusDoJogo === "vitoria" ? "Vitória!" : "Derrota!"}
          </Text>

          <Image
            source={{
              uri: `https://flagcdn.com/w160/${codigosBandeiras[palavraAtual]}.png`,
            }}
            style={styles.bandeira}
          />

          <Text style={styles.nomePais} adjustsFontSizeToFit numberOfLines={1}>
            {nomePaisFormatado}
          </Text>

          <TouchableOpacity
            onPress={iniciarNovoJogo}
            style={styles.botaoReiniciar}
          >
            <Text
              style={styles.textoBotaoReiniciar}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              Jogar Novamente
            </Text>
          </TouchableOpacity>
        </View>
      )}

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
                errou && styles.teclaErrada,
              ]}
            >
              <Text
                style={[
                  styles.teclaTexto,
                  (acertou || errou) && styles.teclaTextoBranca,
                ]}
                adjustsFontSizeToFit
                numberOfLines={1}
              >
                {letra}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  main: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingBottom: 56,
  },
  mainCentralizada: {
    justifyContent: 'center',
  },
  textoCarregando: {
    fontSize: 16,
    color: '#374151',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    maxWidth: '100%',
    textAlign: 'center',
  },
  topoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  botaoVoltar: {
    maxWidth: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
  },
  textoBotaoVoltar: {
    color: '#4b5563',
    fontWeight: '600',
    fontSize: 14,
    maxWidth: '100%',
  },
  forcaArea: {
    width: '100%',
    maxWidth: 250,
    aspectRatio: 5 / 6,
    marginVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
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
    gap: 4,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
  },
  letraCaixa: {
    borderBottomWidth: 4,
    borderBottomColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  letraTexto: {
    width: '100%',
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
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
    width: 45,
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
    maxWidth: 420,
  },
  textoFimBase: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: '100%',
    textAlign: 'center',
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
    maxWidth: '100%',
    textAlign: 'center',
  },
  bandeira: {
    width: 160,
    height: 100,
    borderRadius: 4,
    marginTop: 10,
  },
  botaoReiniciar: {
    maxWidth: '100%',
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
    maxWidth: '100%',
  },
});
