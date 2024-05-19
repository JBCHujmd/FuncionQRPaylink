import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class PagoSpotParqueo extends React.Component {
  handlePurchase = () => {
    // Lógica para comprar un nuevo parqueo
    // Por ahora, solo navegamos de vuelta a la lista
this.props.navigation.navigate('ListaParqueo');
};

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra un Nuevo Parqueo</Text>
      <TouchableOpacity style={styles.purchaseButton} onPress={this.handlePurchase}>
        <Text style={styles.purchaseButtonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  color: 'white',
  fontSize: 20,
  marginVertical: 20,
},
purchaseButton: {
  backgroundColor: '#D32F2F',
  padding: 15,
  borderRadius: 5,
},
purchaseButtonText: {
  color: 'white',
  fontSize: 16,
},
});