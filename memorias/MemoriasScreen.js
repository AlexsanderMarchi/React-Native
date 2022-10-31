import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useContext, useState, useEffect } from 'react';
//componentes
import { MemoriasLista } from './Componentes/MemoriasLista';
//Contexto
import {MemoriasContext} from './Contexto/MemoriasContext';


export function Memorias({navigation }) {


  const [memorias, setMemorias] = useContext(MemoriasContext);


  const teste = [
    {
      foto: 'https://image.api.playstation.com/vulcan/img/rnd/202109/0713/yde6GT9WPbcAUL1QyqjumHs9.png',
      titulo: 'titulo',
      descricao: 'descricao',
      localizacao: 'localizacao',
      ano: 2022
    },
    {
      foto: 'https://image.api.playstation.com/vulcan/img/rnd/202109/0713/yde6GT9WPbcAUL1QyqjumHs9.png',
      titulo: 'titulo',
      descricao: 'descricao',
      localizacao: 'localizacao', 
      ano: 2022
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={memorias}
        renderItem={({ item }) => (
          <MemoriasLista
            foto={item.foto}
            titulo={item.titulo}
            descricao={item.descricao}
            localizacao={item.localizacao}
            ano={item.ano}
          />
        )}
      />

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Adicionar Nova Memoria')}>
        <Text style={styles.textoBotao}>Adcionar Nova Memória</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  botao: {
    height: 40,
    width: 350,
    backgroundColor: '#9424eb',
    borderRadius: 6,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
});
