import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

/*
<Button
        title="Veja meus filmes"
        onPress={() => navigation.navigate('Filmes', { nome: 'Alexsander' })}
      />

      <Button
        title="Veja minhas Viagens"
        onPress={() => navigation.navigate('Viagens', { nome: 'Alexsander' })}
      />
*/
export function Home({ navigation }) {
  const name = 'Alexsander';
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagemPerfil}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHbpmJvkDqczg/profile-displayphoto-shrink_200_200/0/1646178143731?e=1664409600&v=beta&t=Y71NhTQN64FfXPckTwumP3ozgwPaSgoic3dCGdgy2SE',
        }}
      />

      <Text style={styles.fraseBV}>Bem-vindo(a) ao perfil de {name}</Text>

      <Text style={styles.descricao}>
        Amante de cinema e de música no geral. Sonho de viajar pelo mundo e de
        ser um bom guitarrista. Lutando para fazer do mundo um lugar menos
        chato.
      </Text>

      <View style={styles.botoes}>
        <Pressable
          style={styles.botaoIsolado}
          onPress={() => navigation.navigate('Filmes')}>
          <Text style={styles.textoBotoes}>Veja meus filmes</Text>
        </Pressable>

        <Pressable
          style={styles.botaoIsolado}
          onPress={() =>
            navigation.navigate('Viagens')
          }>
          <Text style={styles.textoBotoes}>Veja minhas Viagens</Text>
        </Pressable>

        <Pressable
          style={styles.botaoIsolado}
          onPress={() => navigation.navigate('Bandas')}>
          <Text style={styles.textoBotoes}>Veja minhas Musicas</Text>
        </Pressable>

        <Pressable
          style={styles.botaoIsolado}
          onPress={() => navigation.navigate('Livros')}>
          <Text style={styles.textoBotoes}>Veja meus livros</Text>
        </Pressable>
        <Pressable
        style={styles.botaoIsolado}
        onPress={() =>
          navigation.navigate('Adicionar Novo Filme')
        }>
        <Text style={styles.textoBotoes}>Adicionar Novo Filme</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  imagemPerfil: {
    //flex: 1,
    alignItems: 'center',
    width: 120,
    height: 120,
    marginVertical: 40,
    borderRadius: 70,
  },

  fraseBV: {
    fontWeight: 'bold',
    color: '000000',
    fontSize: 21,
    marginBottom: 20,
  },

  descricao: {
    alignContent: 'center',
    fontWeight: 'bold',
    color: '#c0c0c0',
    fontSize: 17,
    paddingHorizontal: 50,
    marginBottom: 40,
  },

  botoes: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 20,
    paddingBottom: 250,
  },

  botaoIsolado: {
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
});
