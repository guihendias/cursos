import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                backgroundColor='#EC7148'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} cor={'#EC7148'} />

            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={detalheEmpresa} />
                <Text style={{ marginLeft: 15, color: '#EC7148', fontSize: 26, fontWeight: 'bold' }}>A Empresa</Text>
            </View>

            <View style={styles.detalheEmpresa} >
                <Text style={styles.txtEmpresa}>A Atm consultoria esta no mercado a mais de 20 anos...</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  detalhesEmpresa: {
      marginTop: 20,
      padding: 20
  },
  txtEmpresa: {
      fontSize: 18
  }
});
