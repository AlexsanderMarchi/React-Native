//Apenas necessario ter o App.js e o package.json.

import { useState } from 'react'; //react, biblioteca básica do react
import { View, Image, StyleSheet } from 'react-native'; /*react-native,
biblioteca do react especifico para mobile*/

//Sempre criar componente App, pois pode dar erro no futuro se for outro nome.
export default function App() {
  /*useState retorna dois valores, o objeto e uma função para atualizar ele.*/
  //const [valorA, setValorA] = useState(0);

  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={{
        uri: 'https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif'
        }}
        />
    </View>
  ); //é o display do app
}

const styles = StyleSheet.create({
  //De fora para dentro, o estilo, é Padding, e se for para fora, o estilo é Margin.
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#000000',
  },
  logo:{
    alignContent:'center',
    height: 50,
  }
});
