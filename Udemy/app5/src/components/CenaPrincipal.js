import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
            backgroundColor='#CCC'
            />
            <BarraNavegacao />
            <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                <View style={{ marginVertical: 25 }} >
                    <Image source={logo} />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'flex-end' }}>
                    <TouchableHighlight
                    underlayColor={'#B9C941'}
                    activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.push({ id: 'b' });
                        }}
                    >
                        <Image source={menuCliente} style={{ marginRight: 15 }} />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'c' });
                        }}
                    >
                       <Image source={menuContato} style={{ marginLeft: 15 }} />
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row' }} >
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.push({ id: 'd' });
                    }}
                >    
                    <Image source={menuEmpresa} style={{ marginRight: 15 }} />
                </TouchableHighlight>    
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigator.push({ id: 'e' });
                    }}
                >    
                    <Image source={menuServico} style={{ marginLeft: 15 }} />
                </TouchableHighlight>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
