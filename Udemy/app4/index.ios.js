import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class app4 extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('app4', () => app4);
