/*
listaDeFrutas.forEach(fruta => console.log(fruta))  //Para mostrar cada item do vetor
listaDeFrutas.includes('morango');  //Diz se tem o item no vetor
listaDeFrutas.findIndex(fruta => fruta == 'melancia')  //diz a posição da variavel no vetor
listaDeFrutas.map(fruta => fruta)     //Coringa que retorna
*/
import { useState } from 'react';

import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Comer torrada antes de dormir', feito: false },
    { id: 2, descricao: 'Jogar Fortnite', feito: true },
    { id: 3, descricao: 'Preparar aula da 2° fase', feito: false },
    { id: 4, descricao: 'Dar comida para os gatos', feito: true },
  ]);

  concluirTarefa = (tarefaSelecionada) => {
    setTarefas((prevState) =>
      prevState.map((tarefa) => {
        if (tarefa.id === tarefaSelecionada.id) {
          tarefa.feito = !tarefa.feito; //! sempre trás o valor oposto
          return tarefa;
        }

        return tarefa;
      })
    );
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Tarefas do dia:" style={styles.titulo} />
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <Text
            style={item.feito ? styles.listagem : styles.item}
            on
            onPress={() => {
              concluirTarefa(item);
            }}>
            {item.descricao}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //De fora para dentro, o estilo, é Padding, e se for para fora, o estilo é Margin.
  container: {
    paddingTop: 30,
    padding: 40,
  },

  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },

  item: {
    paddingTop: 5,
  },

  listagem: {
    paddingTop: 5,
    textDecorationLine: 'line-through',
  },
});
