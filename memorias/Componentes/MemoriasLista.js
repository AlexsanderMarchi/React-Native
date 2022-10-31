import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export function MemoriasLista({ foto, titulo, descricao, localizacao, ano }) {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={{ uri: foto }} />
      <View style={styles.descricaoView}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <View style={styles.localizacaoView}>
          <Entypo name="location-pin" size={24} color="#9424eb" />
          <Text style={styles.localizacao}>{localizacao},</Text>
          <Text style={styles.localizacao}> em {ano}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //alignItems: 'center',
    marginVertical: 20,
    borderBottomWidth: 2,
    borderWidth: 0.2,
    borderRadius: 7,
    borderColor: '#c0c0c0',
    marginHorizontal: 35,
  },
  foto: {
    height: 200,
    width: 320,
    borderRadius: 6,
  },
  descricaoView: {
    marginLeft: 10,
    marginVertical: 10,
  },
  titulo: {
    marginVertical: 5,
    fontWeight: 'bold',
    color: '000000',
    fontSize: 27,
  },
  descricao: {
    marginBottom: 5,
    fontSize: 18,
  },


  localizacaoView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  localizacao: {
    marginLeft: 2,
    color: '#9424eb',
    fontSize: 18,
  },
});
