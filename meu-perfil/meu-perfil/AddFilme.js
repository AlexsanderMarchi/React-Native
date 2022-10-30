import { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export function AddFilme({ navigation }) {
  const [ filme, setFilme ] = useState({
    nome: null,
    ano: null,
    poster: null,
  });

  adicionarFilme = () => {
    navigation.navigate('Filmes', { filme });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <TextInput
          style={styles.textoImput}
          placeholder="Digite o nome"
          onChangeText={(nome) =>
            setFilme({
              ...filme,
              nome: nome
            })
          }
        />

        <TextInput
          style={styles.textoImput}
          placeholder="Digite o ano"
          keyboardType="numeric"
          onChangeText={(ano) =>
            setFilme({
              ...filme,
              ano: Number(ano)
            })
          }
        />

        <TextInput
          style={styles.textoImput}
          placeholder="Digite o endereço da imagem"
          onChangeText={(poster) =>
            setFilme({
              ...filme,
              poster: poster
            })
          }
        />
      </View>

      <Pressable style={styles.botaoIsolado} onPress={adicionarFilme}>
        <Text style={styles.textoBotoes}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F0F8FF',
  },

  botaoIsolado: {
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#2196f3',
    width: 320,
    height: 45,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },

  textos: {
    //display:'flex',
    //justifyContent:'center',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  textoBotoes: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  textoImput: {
    fontWeight: 'bold',
    color: '000000',
    fontSize: 17,
    marginBottom: 30,
    borderWidth: 1,
    width: 350,
    height: 50,
    backgroundColor: '#F8F8FF',
    //justifyContent: 'center',
    //paddingRight: 20
  },
});
