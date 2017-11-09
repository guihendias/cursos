import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultado: ''
        }
    }

    componentWillMount() {
        const numAleatorio = Math.floor(Math.random() * 2);
        const caraOuCoroa = numAleatorio == 0 ? 'cara' : 'coroa'; 

        this.setState({ resultado: caraOuCoroa });
    }

    render() {
        const { resultado } = this.state;

        return (
            <View style={styles.resultado}>
                { resultado == 'cara' && <Image source={cara} />}
                { resultado == 'coroa' && <Image source={coroa} /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})