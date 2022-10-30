import { View, StyleSheet, FlatList } from 'react-native';
import { ComponenteLista } from './ComponenteLista';


export function Viagens({ route }) {
  //const { nome } = route.params;

  const viagensLista = [
    {
      nome: 'Rio de Janeiro - Rock in Rio',
      poster: 'https://static.wixstatic.com/media/842a3e_8f0fa879b92c4a4fb6dc2708d4ee5649~mv2.png/v1/fit/w_895%2Ch_555%2Cal_c/file.png',
      ano: 2022,
    },
    {
      nome: 'Curitiba',
      poster: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/37/f4/70/jardim-botanico.jpg?w=1200&h=-1&s=1.png',
      ano: 2022,
    },
    {
      nome: 'Foz do Iguaçu',
      poster: 'https://estradas.com.br/wp-content/uploads/2019/12/Turismo_Foz_do_Iguacu_7_Maravilhas_do_Mundo.png',
      ano: 2019,
    },
    {
      nome: 'Gramado',
      poster: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2019/11/73056848_3080902371983605_8657328684778127360_o.jpg?quality=70&strip=info&w=920&w=636.png',
      ano: 2017,
    },
    {
      nome: 'Porto Seguro',
      poster: 'https://s2.glbimg.com/W-qK4ZQp6X_C6zZi-gebti9h0Ko=/0x0:1700x1065/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2015/07/03/arraial-aerea.certa.jpg',
      ano: 2016,
    },
    {
      nome: 'Rio de Janeiro',
      poster: 'https://www.leaders-in-law.com/wp-content/uploads/2017/05/Brazil-Rio-de-Janeiro.jpg',
      ano: 2014,
    },
    {
      nome: 'Santos',
      poster: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e4/1f/96/jardins-da-orla-da-praia.jpg?w=600&h=400&s=1.png',
      ano: 2009,
    },
    
  ];
    
  return (
    <View style={styles.container}>
      <FlatList
      
        data={viagensLista}
        renderItem={({ item }) => (
          <ComponenteLista
            
            poster={item.poster}
            nome={item.nome}
            ano={item.ano}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  display: 'flex',
  flex: 1,
  backgroundColor: '#F0F8FF',
  },
})