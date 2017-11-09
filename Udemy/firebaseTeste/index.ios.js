import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAXEUVWiWg_mL1eyKXd8Prps35ZcWK7EV4",
      authDomain: "authentication-cc2cc.firebaseapp.com",
      databaseURL: "https://authentication-cc2cc.firebaseio.com",
      projectId: "authentication-cc2cc",
      storageBucket: "authentication-cc2cc.appspot.com",
      messagingSenderId: "439796382206"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    let funcionarios = firebase.database().ref("funcionarios");
    funcionarios.child("001").child("nome").set("Guilherme")
  }

  render() {
    return (
      <View>
      <Button onPress={this.salvarDados()} title="salvar"/>
        <Text>
         App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('firebaseTeste', () => App);
