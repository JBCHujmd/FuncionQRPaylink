import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaParqueo from './ListaParqueo';
import PagoSpotParqueo from './PagoSpotParqueo';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaParqueo">
        <Stack.Screen name="ListaParqueo" component={ListaParqueo} options={{ headerShown: false }} />
        <Stack.Screen name="PagoSpotParqueo" component={PagoSpotParqueo} options={{ title: 'Compra de Parqueo', headerShown: false}} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
