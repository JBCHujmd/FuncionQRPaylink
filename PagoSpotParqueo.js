import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class PagoSpotParqueo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 30.00,
      ticketPrice: 0.75,
      quantity: 1,
      total: 0.75,
    };
  }

  handlePurchase = () => {
    const { quantity } = this.state;
    const { route, navigation } = this.props;
    const addTickets = route.params?.addTickets;

    if (addTickets) {
      addTickets(quantity);
    }

    navigation.navigate('ListaParqueo');
  };

  handleQuantityChange = (quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      this.setState({
        quantity: parsedQuantity,
        total: parsedQuantity * this.state.ticketPrice,
      });
    } else {
      this.setState({
        quantity: 1,
        total: this.state.ticketPrice,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>COMPRAR NUEVO PARQUEO</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>SALDO</Text>
          <Text style={styles.balance}>${this.state.balance.toFixed(2)}</Text>
        </View>
        <Text style={styles.subtitle}>¿CUANTOS PARQUEOS DESEA COMPRAR?</Text>
        <Picker
          selectedValue={this.state.quantity.toString()}
          style={styles.picker}
          onValueChange={(itemValue) => this.handleQuantityChange(itemValue)}
        >
          {[...Array(10).keys()].map(i => (
            <Picker.Item key={i + 1} label={(i + 1).toString()} value={(i + 1).toString()} />
          ))}
        </Picker>
        <Text style={styles.total}>TOTAL: ${this.state.total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.purchaseButton} onPress={this.handlePurchase}>
          <Text style={styles.purchaseButtonText}>COMPRAR</Text>
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
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
    position: 'absolute',
    top: 40,
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 18,
  },
  balance: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: 100,
    color: 'black',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  total: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  purchaseButton: {
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 16,
  },
});