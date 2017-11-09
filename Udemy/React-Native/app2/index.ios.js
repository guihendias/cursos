import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  const numeroAleatorio = Math.floor(Math.random() * 5);

  const frases = [];
  frases.push('aa');
  frases.push('bb');
  frases.push('cc');
  frases.push('dd');
  frases.push('ee');

  Alert.alert(frases[numeroAleatorio]);
};

const App = () => {
   const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity 
        style={botao} 
        onPress={gerarNovaFrase}
      >
        <Text style={textoBotao} >Nova frase</Text>
      </TouchableOpacity>
    </View>  
  );
};

AppRegistry.registerComponent('app2', () => App);
