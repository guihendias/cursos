import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ListaItens: []
    };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(resp => this.setState({ ListaItens: resp.data }))
      .catch(() => console.log('Erro'));
  }

  render() {
    const { ListaItens } = this.state;

    return (
        <ScrollView style={{ paddingTop: 25, backgroundColor: '#DDD' }} >
        {ListaItens.map(item => (
            <Itens key={item.titulo} item={item} />
          )
        )}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
