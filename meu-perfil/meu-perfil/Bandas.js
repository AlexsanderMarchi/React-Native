import { View, StyleSheet, FlatList } from 'react-native';
import { ComponenteLista } from './ComponenteLista';

export function Bandas({ route }) {
  //const { nome } = route.params;

  const bandasLista = [
    {
      nome: 'Foo Fighters',
      poster:
        'https://rollingstone.uol.com.br/media/uploads/foo-fighters-tributo-taylor-hawkins-foto-amy-harris-invision-ap.jpg',
      ano: 1994,
    },
    {
      nome: 'Iron Maiden',
      poster:
        'https://igormiranda.com.br/wp-content/uploads/2021/04/Iron-Maiden-Bruce-Dickinson-1-min.jpg',
      ano: 1975,
    },
    {
      nome: 'The Misfits',
      poster:
        'https://ca-times.brightspotcdn.com/dims4/default/8c8dc42/2147483647/strip/true/crop/2048x1152+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F76%2F9f%2Ff4cb3119d4960ef4f6189495b199%2Fla-1514757183-vwgwlfzezm-snap-image',
      ano: 1977,
    },
    {
      nome: 'Black Sabbath',
      poster:
        'https://www.revolvermag.com/sites/default/files/media/images/article/gettyimages-74135789_0.jpg',
      ano: 1968,
    },
    {
      nome: 'Dead Kennedys',
      poster:
        'https://www.noecho.net/uploads/lists/_550x275/dead-kennedys-cover-songs.jpg',
      ano: 1978,
    },
    {
      nome: 'Metallica',
      poster:
        'https://igormiranda.com.br/wp-content/uploads/2021/12/Metallica-01-2021-banda.jpg',
      ano: 1981,
    },
    {
      nome: 'Sepultura',
      poster: 'https://i.ytimg.com/vi/TTexzsi7sek/maxresdefault.jpg',
      ano: 1984,
    },
    {
      nome: 'Hanoi Rocks',
      poster:
        'https://i.pinimg.com/originals/1c/ce/b3/1cceb3a30f3e42ab49ae9ff8176c8f6f.jpg',
      ano: 1979,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={bandasLista}
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
});
