import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Conta } from './Conta';
let conta = new Conta(7320.92);
export default function App() {
  const [n1, setN1] = useState(0);
  const [valorConta, setValorConta] = useState(conta.saldo);

  sacar = (n1) => {
    if (n1 > 0 && n1 < conta.saldo) {
      setValorConta(conta.sacar(n1));
    }
    this.inputTeste.clear();
    setN1(0);
  };
  depositar = (n1) => {
    if (n1 > 0) {
      setValorConta(conta.depositar(n1));
    }
    this.inputTeste.clear();
    setN1(0);
  };

  formatNumber = (amount, decimalCount = 2, decimal = ',', thousands = '.') => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      dw;
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '')
      );
    } catch (e) {
      console.log(e);
    }
  };
  conta.saldo = 10;
  return (
    <View style={styles.container}>
      <View style={styles.cima}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://imgur.com/PXXhIq4.png',
          }}
        />
        <Text style={styles.textoSaldo}> SALDO ATUAL NA CONTA </Text>
        <Text style={styles.saldo}>R$ {valorConta} </Text>
        <Text style={styles.textoImput}>
          Digite o valor abaixo e escolha uma das operações bancárias:
        </Text>
      </View>
      <View style={styles.divImput}>
        <FontAwesome5
          style={styles.emote}
          name="money-bill"
          size={18}
          color="gray"
        />
        <TextInput
          ref={(input) => (this.inputTeste = input)}
          style={styles.input}
          placeholder={'0.00'}
          onChangeText={setN1}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.botoesDiv}>
        <Pressable style={styles.botaoSacar} onPress={() => sacar(n1)}>
          <Text style={styles.textoBotoes}>SACAR</Text>
        </Pressable>

        <Pressable style={styles.botaoDepositar} onPress={() => depositar(n1)}>
          <Text style={styles.textoBotoes}>DEPOSITAR</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  cima: {
    paddingTop: 40,
    padding: 20,
  },
  logo: {
    marginTop: 40,
    height: 50,
  },
  textoSaldo: {
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 22,
    paddingTop: 40,
    textAlign: 'center',
  },
  saldo: {
    fontWeight: 'bold',
    color: '000000',
    fontSize: 50,
    paddingTop: 15,
    textAlign: 'center',
  },
  textoImput: {
    fontWeight: 'bold',
    color: '000000',
    fontSize: 17,
    paddingTop: 70,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
  },
  divImput: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 15,
  },
  emote: {
    paddingLeft: 20,
  },
  input: {
    width: 305,
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 2,
    backgroundColor: '#F5F5F5',
    marginTop: 'auto',
    marginLeft: 20,
  },
  botoesDiv: {
    paddingTop: 40,
    alignItems: 'center',
  },
  botaoSacar: {
    backgroundColor: '#e72e20',
    width: 330,
    height: 45,
    alignItems: 'center',
    borderRadius: 5,
    borderBottomWidth: 3,
    borderColor: '#DCDCDC',
  },
  textoBotoes: {
    marginTop: 10,
    color: '#ffffff',
  },
  botaoDepositar: {
    marginTop: 30,
    backgroundColor: '#e72e20',
    width: 330,
    height: 45,
    alignItems: 'center',
    borderRadius: 5,
    borderBottomWidth: 3,
    borderColor: '#DCDCDC',
  },
});
