import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                backgroundColor='#B9C941'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} cor={'#B9C941'} />

            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={detalheClientes} />
                <Text style={{ marginLeft: 15, color: '#B9C941', fontSize: 26, fontWeight: 'bold' }}>Nossos Clientes</Text>
            </View>
            <View style={{ marginLeft: 25, marginVertical: 20 }}>
                <Image source={cliente1} />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Nossos Clientes</Text>
            </View>
            <View style={{ marginLeft: 25, marginVertical: 20 }}>
                <Image source={cliente2} />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Nossos Clientes</Text>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
