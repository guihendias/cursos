import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

export default class Icone extends Component {
    render() {
      const images = {
        pedra: require('../../img/pedra.png'),
        papel: require('../../img/papel.png'),
        tesoura: require('../../img/tesoura.png')
      };
  
      const { jogador, escolha } = this.props;
      const url = images[escolha];
  
      if (!escolha)
        return false;
  
      return ( 
        <View style={{ marginBottom: 25 }} >
          <Text>{jogador}</Text>
          <Image source={url} />
        </View>
      );
    }
  }
