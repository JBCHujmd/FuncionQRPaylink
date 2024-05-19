import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SpotParqueo from './SpotParqueo';

export default class ListaParqueo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingSpots: [
        new SpotParqueo('1', '10/03/2024'),
        new SpotParqueo('2', '11/03/2024'),
        new SpotParqueo('3', '12/03/2024'),
        new SpotParqueo('4', '13/03/2024'),
      ],
    };
  }

  componentDidUpdate(prevProps) {
    const { route } = this.props;
    if (route.params?.removeId && route.params.removeId !== prevProps.route.params?.removeId) {
      this.handleRemoveTicket(route.params.removeId);
    }
  }

  handleQRCodePress = (id, date) => {
    this.props.navigation.navigate('QRCodeScreen', { id, date });
  };

  handleRemoveTicket = (id) => {
    this.setState((prevState) => ({
      parkingSpots: prevState.parkingSpots.filter(spot => spot.id !== id),
    }));
  };

  handleAddTickets = (quantity) => {
    const today = new Date().toLocaleDateString();
    this.setState((prevState) => {
      const newSpots = [];
      for (let i = 0; i < quantity; i++) {
        const newId = (prevState.parkingSpots.length + newSpots.length + 1).toString();
        newSpots.push(new SpotParqueo(newId, today));
      }
      return {
        parkingSpots: [...prevState.parkingSpots, ...newSpots],
      };
    });
  };


  renderItem = ({ item }) => (
    <View style={styles.parkingItem}>
      <Text style={styles.parkingText}>{item.id}</Text>
      <Text style={styles.parkingText}>{item.date}</Text>
      <TouchableOpacity onPress={() => this.handleQRCodePress(item.id, item.date)}>
        <Ionicons name="qr-code-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/LogoDaviplata.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>PARQUEOS DISPONIBLES</Text>
        <FlatList
          data={this.state.parkingSpots}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={styles.parkingList}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('PagoSpotParqueo')}>
          <Ionicons name="add-circle-outline" size={50} color="white" />
          <Text style={styles.addButtonText}>COMPRAR NUEVO PARQUEO</Text>
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
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#D32F2F',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
  },
  parkingList: {
    width: '100%',
    flexGrow: 0,
  },
  parkingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#424242',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  parkingText: {
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});