import { Image, Text, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export function Time({ brasao, nome, apelido, titulos }) {
  return (
    <View style={styles.container}>
      <Image style={styles.brasao} source={{ uri: brasao }} />
      <View style={styles.frases}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.apelido}>{apelido}</Text>
      </View>
      <Text style={styles.titulos}>{titulos}</Text>
      <FontAwesome5
        style={styles.trofeu}
        name="trophy"
        size={30}
        color="#FBE74C"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  frases: {
    marginLeft: 20,
    marginRight: 120,
  },
  brasao: {
    width: 50,
    height: 50,
    //marginRight: 20,
    //marginVertical:5
  },
  nome: {
    fontSize: 20,
    //fontWeight: 'bold',
  },
  apelido: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#c0c0c0',
  },
  titulos: {
    marginTop: 20,
    //marginLeft: 90,
    marginRight: 7,
  },
  trofeu: {
    marginTop: 7,
  },
});
