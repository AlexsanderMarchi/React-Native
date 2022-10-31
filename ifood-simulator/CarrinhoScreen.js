import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { CarrinhoLista } from './components/CarrinhoLista';
import { CarrinhoContext } from './contexts/CarrinhoContext';
import { useContext, useState, useEffect } from 'react';

export function CarrinhoScreen({ cardapio, navigation }) {
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    let soma = 0;

    carrinho.forEach((cardapio) => {
      console.log(cardapio.valor);
      console.log(cardapio.valor);
      soma += cardapio.valor;
      console.log(soma);
    });

    setValorTotal(soma);
  }, []);

  finalizarPedido = () => {
    setCarrinho([]);
    navigation.navigate('iFood');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <CarrinhoLista
            nomeProduto={item.nomeProduto}
            restaurante={item.restaurante}
            valor={item.valor}
          />
        )}
      />
      <View style={styles.frases}>
        <Text style={styles.fraseTotalPedido}>Total do pedido</Text>
        <Text style={styles.total}>R$ {valorTotal} </Text>
      </View>
      <Pressable style={styles.botao} onPress={finalizarPedido}>
        <Text style={styles.fraseBotao}>COMPRAR</Text>
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
    //backgroundColor: '#F0F8FF',
  },
  botao: {
    width: 340,
    height: 45,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    marginBottom: 40,
  },
  fraseBotao: {
    marginTop: 10,
    fontSize: 16,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  frases: {
    marginTop: 30,
  },
  total: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: '000000',
    fontSize: 40,
  },
  fraseTotalPedido: {
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 15,
    //marginTop: 2,
  },
});
