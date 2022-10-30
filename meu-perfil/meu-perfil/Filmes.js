import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { ComponenteLista } from './ComponenteLista';

export function Filmes({ route }) {
  //const { nome } = route.params;

  const [filmesLista, setFilmeslista] = useState ([
    {
      nome: 'Pulp Fiction',
      ano: 1994,
      poster:
        'https://ae01.alicdn.com/kf/H6d77c0d35b2e4c92bc87a410961cdc99J.jpg?width=848&height=1200&hash=2048.png',
      
    },
    {
      nome: 'Clube da Luta',
      ano: 1999,
      poster:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/16/10/fightclub2.jpg?quality=50&width=640&auto=webp.png',
      
    },
    {
      nome: 'Rocky',
      no: 1976,
      poster:
        'https://uproxx.com/wp-content/uploads/2020/11/rocky_philadelphiasteps.jpg?w=1024.png',
      
    },
    {
      nome: 'Matrix',
      ano: 1999,
      poster:
        'https://nofilmschool.com/sites/default/files/styles/structured_16x9/public/the_matrix_explained.jpg?itok=xlkv7Gbk.png',
      
    },
    {
      nome: 'The Good, The Bad and The Ugly',
      ano: 1965,
      poster: 'https://images7.alphacoders.com/400/400818.png',
      
    },
    {
      nome: 'Once Upon a Time... In Hollywood',
      ano: 2019,
      poster:
        'https://images.bauerhosting.com/legacy/media/5d7f/b914/6d81/745a/addd/2232/once-upon-hollywood-pitt-qualley.jpg?q=80&w=850&ar=16:9&fit=crop&crop=top.png',
     
    },
  ]);

  useEffect(() => {
    if (route.params) {
      console.log(route.params)
      const { filme } = route.params;
      setFilmeslista([filme, ...filmesLista]);
    }
  }, []);

  return (
    
    <View style={styles.container}>
      <FlatList
        data={filmesLista}
        renderItem={({ item }) => (
          <ComponenteLista
            
            nome={item.nome}
            ano={item.ano}
            poster={item.poster}
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
/*
  botaoIsolado: {
    marginLeft: 30,
    marginTop: 20,
    backgroundColor: '#2196f3',
    width: 320,
    height: 45,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },

  textoBotoes: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  */
});
