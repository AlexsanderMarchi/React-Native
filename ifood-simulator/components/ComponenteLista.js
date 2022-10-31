import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import { useContext } from 'react';
export function ComponenteLista({
  imagem,
  nomeProduto,
  restaurante,
  valor,
  navigation,
}) {
  //hook nao pode ser usado dentro de função

  const [carrinho, setCarrinho] = useContext(CarrinhoContext);

  adicionarProduto = () => {
    setCarrinho([...carrinho, {nomeProduto,restaurante,valor}]); //  atualizando o contexto PORRA!!!!!!
    navigation.navigate('Carrinho');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={{ uri: imagem }} />
      <View style={styles.frases}>
        <Text style={styles.nomeProduto}>{nomeProduto}</Text>
        <Text style={styles.restaurante}>{restaurante}</Text>
        <Text style={styles.valor}>R$ {valor}</Text>

        <Pressable
          style={styles.botao}
          onPress={adicionarProduto}>
          <Text style={styles.fraseBotao}>COMPRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#F8F8FF',
    borderWidth: 0.5,
    borderBottomWidth: 4,
    borderColor: '#c9c9c9',
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 12,
    flexDirection: 'row',
  },
  imagem: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 7,
    width: 140,
    height: 120,
  },
  nomeProduto: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '000000',
    fontSize: 20,
  },

  restaurante: {
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 15,
    marginTop: 2,
  },
  valor: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: '000000',
    fontSize: 40,
  },

  botao: {
    //backgroundColor: '#2196f3',
    width: 150,
    height: 45,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    marginBottom: 20,
  },
  fraseBotao: {
    marginTop: 10,
    fontSize: 16,
    color: '#ff0000',
    //fontWeight: 'bold',
    letterSpacing: 2,
  },
});
