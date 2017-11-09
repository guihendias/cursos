import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }
  
  getEscolhaComputador(numero) {
    switch (numero) {
      case 0:
        return 'pedra';
      case 1:
        return 'papel';
      case 2:
      default:
      return 'tesoura';   
    }
  }

  comparaResultado(escolhaComputador, escolhaUsuario) {
    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
         return 'Empate';
      }

      if (escolhaUsuario === 'papel') {
         return 'Voce ganhou';
      }

      if (escolhaUsuario === 'tesoura') {
         return 'Voce perdeu';
      }
    } else if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'pedra') {
         return 'Voce perdeu';
      }

      if (escolhaUsuario === 'papel') {
         return 'Empate';
      }

      if (escolhaUsuario === 'tesoura') {
         return 'Voce ganhou';
      }
    } else if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'pedra') {
         return 'Voce ganhou';
      }

      if (escolhaUsuario === 'papel') {
         return 'Voce perdeu';
      }

      if (escolhaUsuario === 'tesoura') {
         return 'Empate';
      }
    }
  }

  jokenpo(escolhaUsuario) {
    const numero = Math.floor(Math.random() * 3);
    const escolhaComputador = this.getEscolhaComputador(numero);
    const resultado = this.comparaResultado(escolhaComputador, escolhaUsuario);

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }


  render() {
    const { escolhaComputador, escolhaUsuario, resultado } = this.state;

    return (
     <View style={{ paddingTop: 20 }}>
      <Topo />
      <View style={styles.btnPanel}>
          <Button style={{ flex: 1 }} title="pedra" onPress={() => this.jokenpo('pedra')} />
          <Button style={{ flex: 1 }} title="papel" onPress={() => this.jokenpo('papel')} />
          <Button style={{ flex: 1 }} title="tesoura" onPress={() => this.jokenpo('tesoura')} />
      </View>
      <View style={{ alignItems: 'center' }} >
        <Text style={styles.txtResultado}>{resultado}</Text>
        <Icone escolha={escolhaComputador} jogador="Computador" />
        <Icone escolha={escolhaUsuario} jogador="Usuario" />
      </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold', 
    color: 'red', 
    height: 60
  }, 
  btnPanel: {
    marginVertical: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('app3', () => app3);
