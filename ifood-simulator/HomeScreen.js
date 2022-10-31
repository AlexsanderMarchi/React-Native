import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import { ComponenteLista } from './components/ComponenteLista';
import { FontAwesome5 } from '@expo/vector-icons';
import { CarrinhoContext } from './contexts/CarrinhoContext';
import { useContext } from 'react';

export function HomeScreen({ navigation }) {
  const [carrinho] = useContext(CarrinhoContext);

  const cardapio = [
    {
      imagem:
        'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2015/09/o-que-um-big-mac-faz-com-seu-corpo-depois-de-1-hora-960x639.jpg',
      nomeProduto: 'Big Mac',
      restaurante: 'McDonalds, Kobrasol',
      valor:32.5,
    },
    {
      imagem:
        'https://www.sabornamesa.com.br/media/k2/items/cache/e3d995a152e18bb86fa197fdc98b26b8_XL.jpg',
      nomeProduto: 'Coxinha do Jefferson',
      restaurante: 'Jeffs Lanchonete',
      valor:4.5,
    },
    {
      imagem:
        'https://img.itdg.com.br/tdg/images/recipes/000/119/770/357545/357545_original.jpg?w=1200',
      nomeProduto: 'Hot Dog do Paulão',
      restaurante: 'Paulão Hot Dog',
      valor:14.2,
    },
  ];

  selecionarCarrinho = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={styles.botaoCarrinho}
          onPress={() => selecionarCarrinho({ cardapio })}>
          <FontAwesome5 name="shopping-cart" size={24} color="red" />
          <Text style={styles.carrinhoItens}>{carrinho.length} items</Text>
        </Pressable>
      </View>
      <FlatList
        data={cardapio}
        renderItem={({ item }) => (
          <ComponenteLista
            imagem={item.imagem}
            nomeProduto={item.nomeProduto}
            restaurante={item.restaurante}
            valor={item.valor}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //flexDirection: 'row',
    marginLeft: 305,
    marginTop: 10,
  },

  botaoCarrinho: {
    display: 'flex',
    flexDirection: 'row',
    //marginLeft:305,
    //marginTop:10
  },

  carrinhoItens: {
    marginLeft: 5,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 10,
  },
});
