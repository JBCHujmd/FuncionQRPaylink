import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class QRCodeScreen extends React.Component {
  handleRemoveTicket = () => {
    const { route, navigation } = this.props;
    const { id } = route.params;

    // Navegar de vuelta a ListaParqueo con el ID del ticket a eliminar
    navigation.navigate('ListaParqueo', { removeId: id });
  };

  render() {
    const { route } = this.props;
    const { id, date } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>TU QR DE PAGO</Text>
        <Text style={styles.date}>{date}</Text>
        <QRCode
          value={`Parking Spot ID: ${id}, Date: ${date}`}
          size={200}
          color="black"
          backgroundColor="white"
        />
        <TouchableOpacity style={styles.removeButton} onPress={this.handleRemoveTicket}>
          <Text style={styles.removeButtonText}>Regresar</Text>
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
  date: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  removeButton: {
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
