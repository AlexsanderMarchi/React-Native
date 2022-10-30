import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Viagens } from './Viagens';
import { Filmes } from './Filmes';
import { Bandas } from './Bandas';
import { Livros } from './Livros';
import { AddFilme } from './AddFilme';

export default function App() {
  const Stack = createNativeStackNavigator();

  //const usado para estilizar o cabeçalho
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#1fabe0',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  //initialRouteName='Meu Perfil' diz a tela inicial assim q entra no app
  //options={screenOptions} diz o estilo do cabeçalho da pagina (header)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Meu Perfil"
          component={Home}
          options={screenOptions}
        />
        <Stack.Screen
          name="Viagens"
          component={Viagens}
          options={screenOptions}
        />
        <Stack.Screen
          name="Filmes"
          component={Filmes}
          options={screenOptions}
        />
        <Stack.Screen
          name="Bandas"
          component={Bandas}
          options={screenOptions}
        />
        <Stack.Screen
          name="Livros"
          component={Livros}
          options={screenOptions}
        />
        <Stack.Screen
          name="Adicionar Novo Filme"
          component={AddFilme}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
