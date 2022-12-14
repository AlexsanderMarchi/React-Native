import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { useState } from 'react';

export function ListaAmigos({ foto, nome, telefone }) {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;

  const [numeroCurtidas, setNumeroCurtidas] = useState(0);

  return (
    // <View style={styles.container}>
    <View style={styles.arrumarRow}>
      <Image style={styles.foto} source={{ uri: foto }} />
        <Text style={styles.nome}>{nome}</Text>
      <View style={styles.texto}>
      <Text style={styles.telefone}>{telefone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderWidth: 0.2,
    borderColor: '#c0c0c0',
    marginHorizontal: 35,
    height: 'auto',
    width: 352,
    borderRadius: 6,
  },
  foto: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  mensagemView: {
    marginLeft: 10,
    marginVertical: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: '600',
    alignItems:'center'
  },
  mensagem: {
    fontWeight: '500',
    fontSize: 18,
    padding: 10,
  },
  fotonome: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
  },
  cidade: {
    color: '#454748',
    display: 'flex',
    fontWeight: 'bold',
    marginTop: -10, //ESSA MARGIN É FODA
    //AQUI TEM QUE FAZER COM QUE A cidade E A DATA VA PARA O FINAL DA DIREITA
  },
  dataFinalPag: {
    alignItems: 'flex-end',
  },
  arrumarRow: {
    display: 'flex',
    alignItems: 'center',
    width: 150,
    height: 230,
    alignContent:'space-around'
  },
  telefone:{
    fontSize:18,
    marginTop:4,
    color:'grey',
    alignItems:'center',
    
  },
});
