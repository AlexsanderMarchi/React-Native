import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { CarrinhoScreen } from './CarrinhoScreen';
import { CarrinhoContext } from './contexts/CarrinhoContext';
import {useState} from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  const [carrinho, setCarrinho] = useState([]);

  const screenOptions = {
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  return (
    <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Carrinhjo">
          <Stack.Screen
            name="iFood"
            component={HomeScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="Carrinho"
            component={CarrinhoScreen}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoContext.Provider>
  );
}
