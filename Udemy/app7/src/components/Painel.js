import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '0', num2: '1' };
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        console.log("teste", resultado);
    }

    atualizaValor() {
        console.log()
    }

    render() {
        return (
            <View>
                <Entrada num1={this.state.num1} num2={this.state.num2} atualizaValor={this.atualizaValor.bind(this)}/>
                <Operacao />
                <Comando acao={this.calcular.bind(this)}/>
            </View>
        );
    }
}

export { Painel };