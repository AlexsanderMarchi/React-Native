import { View, Text, Image, StyleSheet } from 'react-native';


export function ComponenteLista({ poster, nome, ano}) {

return (
  <View style={styles.container}>
  <Image style={styles.poster} source={{uri: poster}}/>
  <Text style={styles.nome}>{nome}</Text>
  <Text style={styles.ano}>{ano}</Text>
  </View>
)


};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F8F8FF',
    borderWidth: 0.5,
    borderBottomWidth: 4,
    borderColor: '#c9c9c9',
    borderRadius: 10,
    marginVertical: 22,
    marginHorizontal: 26

  },
  poster: {
    borderRadius: 10,
    width: 340,
    height: 150,
  },

  nome:{
    marginTop: 20,
    fontWeight: 'bold',
    color: '000000',
    fontSize: 21,
  },

  ano:{
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 17,
    marginBottom: 20
  },
  
  });