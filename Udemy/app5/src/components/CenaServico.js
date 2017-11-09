import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                backgroundColor='#19D1C8'
            />
            <BarraNavegacao voltar navigator={this.props.navigator} cor={'#19D1C8'} />

            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={detalheServico} />
                <Text style={{ marginLeft: 15, color: '#19D1C8', fontSize: 26, fontWeight: 'bold' }}>Nossos Servicos</Text>
            </View>

            <View style={styles.detalheServico} >
                <Text style={styles.txtServico}>Desenvolvimento</Text>
            </View>
            <View style={styles.detalheServico} >
                <Text style={styles.txtServico}>Consultoria</Text>
            </View>
            <View style={styles.detalheServico} >
                <Text style={styles.txtServico}>Processos</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  detalhesServico: {
      marginTop: 20,
      padding: 20
  },
  txtServico: {
      fontSize: 18
  }
});
