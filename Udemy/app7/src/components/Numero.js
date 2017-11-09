import React from 'react';
import { TextInput, StyleSheet, VIEW } from 'react-native';

export default props => (
    <TextInput style={styles.numero} value={props.num} onChangeText={valor => console.log(valor)}/>
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
}) ;