import { View, StyleSheet, FlatList } from 'react-native';
import { ComponenteLista } from './ComponenteLista';


export function Livros({ route }) {
  //const { nome } = route.params;

  const livrosLista = [
    {
      nome: 'As Crônicas de Gelo e Fogo',
      poster: 'https://s.aficionados.com.br/imagens/defesas-0.jpg',
      ano: 1991,
    },
    {
      nome: 'A Sutil Arte de Ligar o F*da-se',
      poster: 'https://miro.medium.com/max/940/1*gHKM3GHn4sH-Wz3KgirUAQ.jpeg',
      ano: 2016,
    },
    {
      nome: 'Sapiens - Uma Breve História da Humanidade.',
      poster: 'https://4.bp.blogspot.com/-S9SgU4PoG8Y/XM9cRpoB68I/AAAAAAAAQd0/QZtO_AuiqG0f4ytPxyCpcog18r3GAMtmACLcBGAs/s1600/sapiens%2B-%2Bresenha%2Bdo%2Blivro%2B%25284%2529.jpg',
      ano: 2011,
    },
    {
      nome: '1984',
      poster: 'https://pm1.narvii.com/6943/c991db7225546ad19f41c4f2807cf6b4743c0073r1-1280-720v2_hq.jpg',
      ano: 1949,
    },
    {
      nome: 'A Revolução dos Bichos',
      poster: 'https://thumbs.jusbr.com/imgs.jusbr.com/publications/images/a786ec5b0d06923ac0890f63912a76a1',
      ano: 1945,
    },
    {
      nome: 'O Cavaleiro dos Sete Reinos',
      poster: 'https://topico42.com.br/wp-content/uploads/2019/04/O-Cavaleiro-dos-Sete-Reinos.jpg',
      ano: 1998,
    },
    ];
     
  return (
    <View style={styles.container}>
      <FlatList
      
        data={livrosLista}
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