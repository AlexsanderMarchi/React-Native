import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
//import { CarrinhoContext} from './contexts/CarrinhoContext';
import {useState} from 'react';
export function CarrinhoLista({
  nomeProduto,
  restaurante,
  valor,
}) 
{

return(
    <View style={styles.container}>
      <View >
        <Text style={styles.produto}>{nomeProduto}</Text>
        <Text style={styles.restaurante}>{restaurante}</Text>
      </View>
        <Text style={styles.valor}>R$ {valor}</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:100,
    borderBottomWidth: 3,
    borderColor: '#c0c0c0',
  },
  produto:{
    fontWeight: 'bold',
    color: '000000',
    fontSize: 20,
  },
  restaurante:{
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 15,
  },
  valor:{
    fontWeight: 'bold',
    color: '000000',
    fontSize: 40,
  },
})
