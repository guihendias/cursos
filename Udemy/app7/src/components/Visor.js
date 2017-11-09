import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {
    
    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }

    render() {
        return (
            <View>
            <TextInput 
                placeholder="Resultado"
                editable={false}
                style={styles.visor}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});