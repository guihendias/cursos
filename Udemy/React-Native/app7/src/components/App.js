import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import { Topo, Resultado, Painel } from './';

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
)
