import { Image, FlatList, Text, View, StyleSheet } from 'react-native';
import { Time } from './Time';

/*<Time
        brasao="https://logodetimes.com/times/gremio/logo-gremio-256.png"
        nome="Grêmio"
        apelido="Imortal Tricolor"
        titulos="3"
      />
      <Time
        brasao="https://logodetimes.com/times/internacional/logo-internacional-256.png"
        nome="Internacional"
        apelido="Imortal Tricolor"
        titulos="2"
      />
      <Time
        brasao="https://logodetimes.com/times/avai/logo-avai-256.png"
        nome="Avaí"
        apelido="Imortal Tricolor"
        titulos="0"
      />
      <Time
        brasao="https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png"
        nome="Corinthians"
        apelido="Imortal Tricolor"
        titulos="2"
      />
      <Time
        brasao="https://logodetimes.com/times/flamengo/logo-flamengo-256.png"
        nome="Flamengo"
        apelido="Urubu                  "
        titulos="3"
      />
      <Time
        brasao="https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png"
        nome="Palmeiras"
        apelido="Imortal Tricolor"
        titulos="3"
      />*/
export default function App() {
  const times = [
    {
      nome: 'Gremio',
      apelido: 'Imortal Tricolor',
      brasao: 'https://logodetimes.com/times/gremio/logo-gremio-256.png',
      titulos: 3,
    },
    {
      nome: 'Internacional',
      apelido: 'Colorado',
      brasao:
        'https://logodetimes.com/times/internacional/logo-internacional-256.png',
      titulos: 2,
    },
    {
      nome: 'Avaí',
      apelido: 'Leão da ilha',
      brasao: 'https://logodetimes.com/times/avai/logo-avai-256.png',
      titulos: 0,
    },
    {
      nome: 'Corinthians',
      apelido: 'Colorado',
      brasao:
        'https://logodetimes.com/times/corinthians/logo-do-corinthians-256.png',
      titulos: 2,
    },
    {
      nome: 'Flamengo',
      apelido: 'Urubu',
      brasao: 'https://logodetimes.com/times/flamengo/logo-flamengo-256.png',
      titulos: 2,
    },
    {
      nome: 'Palmeiras',
      apelido: 'Colorado',
      brasao: 'https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png',
      titulos: 3,
    },
  ];
  return (
          
    <View style={styles.container}>
      <View style={styles.frases}>
        <Text style={styles.capa}>Times de futebol</Text>
        <Text style={styles.libertadores}>Libertadores</Text>
      </View>
      <FlatList
      
        data={times}
        renderItem={({ item }) => (
          <Time
            
            brasao={item.brasao}
            nome={item.nome}
            apelido={item.apelido}
            titulos={item.titulos}
            
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alligItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  capa: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  frases: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  libertadores: {
    fontSize: 22,
    marginLeft: 75,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#c0c0c0',
  },
});
