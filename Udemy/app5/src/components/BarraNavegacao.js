import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
        return (
            <View style={[styles.barraTitulo, { backgroundColor: this.props.cor }]} >
                <TouchableHighlight 
                    onPress={() => {
                        this.props.navigator.pop();
                    }}
                >
                    <Image source={btnVoltar} />
                </TouchableHighlight>
                <Text style={styles.titulo}>ATM Consultoria</Text>
            </View>
        );
    }  
    return (
        <View style={styles.barraTitulo} >
         <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        flexDirection: 'row',
        backgroundColor: '#CCC',
        paddingVertical: 26,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 10
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    }
});
