//Apenas necessario ter o App.js e o package.json.

import { useState } from 'react'; //react, biblioteca básica do react
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native'; /*react-native,
biblioteca do react especifico para mobile*/

//Sempre criar componente App, pois pode dar erro no futuro se for outro nome.
export default function App() {
  /*useState retorna dois valores, o objeto e uma função para atualizar ele.*/
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResultado] = useState(0);
  //setValorA é usado para mudar o valor do ValorA
  //{1>1 ? tituloDoApp : '1 não é maior que 1'}

  //function somar(){ }
  somar = () => {
    setResultado(Number(valorA) + Number(valorB));
  };
  dividir = () => {
    setResultado(Number(valorA) / Number(valorB));
  };
  multiplicar = () => {
    setResultado(Number(valorA) * Number(valorB));
  };
  subtrair = () => {
    setResultado(Number(valorA) - Number(valorB));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Minha Calculadora</Text>

        <TextInput
          placeholder="Informe o valor A"
          onChangeText={setValorA}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Informe o valor B"
          onChangeText={setValorB}
          keyboardType="numeric"
        />

        <Button onPress={somar} title="+" />
        <Button onPress={subtrair} title="-" />
        <Button onPress={dividir} title="/" />
        <Button onPress={multiplicar} title="X" />

        <Text>Resultado: {resultado}</Text>
      </View>
    </SafeAreaView> //componente apenas para IOS
  ); //é o display do app
}

const styles = StyleSheet.create({
  //De fora para dentro, o estilo, é Padding, e se for para fora, o estilo é Margin.
  container: {
    paddingTop: 30,
    padding: 40,
  },
});
