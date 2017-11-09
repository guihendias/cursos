import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class app5 extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'a': return <CenaPrincipal navigator={navigator} />;
            case 'b': return <CenaClientes navigator={navigator} />;
            case 'c': return <CenaContatos navigator={navigator} />;
            case 'd': return <CenaEmpresa navigator={navigator} />;
            case 'e': return <CenaServico navigator={navigator} />;
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app5', () => app5);
