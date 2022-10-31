import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  StyleSheet,
  Vibration,
} from 'react-native';
//Para pegar as imagens
import * as ImagePicker from 'expo-image-picker';
//Hooks
import { useState, useContext } from 'react';
//Icone da imagem (Adicionar foto)
import { FontAwesome } from '@expo/vector-icons';
//Contexto
import { MemoriasContext } from './Contexto/MemoriasContext';

/*
Componente para adicionar novas memorias, ou seja, 
pega as informações e joga pro objeto memorias
*/
export function AddMemoria({ navigation }) {
  //Estados para pegar as informações inseridas
  const [titulo, setTitulo] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [foto, setFoto] = useState(null);
  const [ano, setAno] = useState(null);

  //Contexto onde ficara salvo as informações dos input
  const [memorias, setMemorias] = useContext(MemoriasContext);

  //Usada para esperar o usuario escolher a foto, por isso Async(dessincronizado)
  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, //Habilitar edicao
      aspect: [4, 3], //Tamanho da foto
      quality: 1, //Qualidade da foto
    });

    //condicional caso o usario desista de escolher a foto
    if (!result.cancelled) {
      setFoto(result.uri);
    }
  };

  //função para salvar as novas informações com as ja existente
  addMemoriaNova = () => {
    //spread (...) para atualizar e não sobscrever a lista de objetos
    setMemorias([...memorias, { titulo, descricao, localizacao, foto, ano }]);
    Vibration.vibrate();
    navigation.navigate('Memórias'); //depois ela vai para a tela principal
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={'Titulo'}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Quando aconteceu? (ano)'}
          onChangeText={setAno}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Onde Aconteceu? (cidade)'}
          onChangeText={setLocalizacao}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'conte sobre sua memoria'}
          onChangeText={setDescricao}
        />

        <Pressable
          style={styles.botaoAddFoto}
          title="Escolha uma foto"
          onPress={escolherImagem}>
          <View style={styles.conteudoAddFoto}>
            <FontAwesome name="picture-o" size={24} color="#9424eb" />
            <Text style={styles.textFoto}>Adcionar Foto</Text>
          </View>
        </Pressable>

        {foto && <Image style={styles.imagem} source={{ uri: foto }} />}
      </View>

      <Pressable style={styles.botao} onPress={addMemoriaNova}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //Para os input
  textInput: {
    height: 40,
    width: 350,
    marginVertical: 17,
    borderwidth: 1,
    borderRadius: 1,
    fontColor: 'black',
    backgroundColor: '#DCDCDC',
  },
  //Styles do botao para buscar foto
  imagem: {
    alignItems: 'center',
    height: 150,
    width: 250,
    borderRadius: 6,
    borderWidth: 6,
    borderColor: 'gray',
    marginTop: 20,
  },
  conteudoAddFoto: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  botaoAddFoto: {
    width: 120,
    marginTop: 20,
  },
  textFoto: {
    marginLeft: 10,
    color: '#9424eb',
  },

  //Styles do botao Adicionar
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#9424eb',
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
