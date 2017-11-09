import React from 'react';
import { View } from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Numero num={props.num1} />
        <Numero num={props.num2} />
    </View>
)
