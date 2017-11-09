import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                backgroundColor='#61BD8C'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} cor={'#61BD8C'} />

            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', color: '#61BD8C' }}>
                <Image source={detalheContato} />
                <Text style={{ marginLeft: 15, color: '#B9C941', fontSize: 26, fontWeight: 'bold' }}>Nossos Clientes</Text>
            </View>

            <View style={styles.detalheContatos} >
                <Text style={styles.txtContatos}>Tel: (11) 1234-1234</Text>
                <Text style={styles.txtContatos}>Cel: (11) 091823-1234</Text>
                <Text style={styles.txtContatos}>Email: guilherme@dias.com</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  detalhesContatos: {
      marginTop: 20,
      padding: 20
  },
  txtContatos: {
      fontSize: 18
  }
});
