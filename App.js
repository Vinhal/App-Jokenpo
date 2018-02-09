/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Topo from  './src/components/topo';
import Icone from './src/components/icone';


export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {escolhaUsuario : '', escolhaComputador : '', resultado : ''};
  };

  jokenpo(escolha){

    const nro = Math.floor(Math.random() * 3);
    
    let escolhaPC = ''
    switch(nro){
      case 0: escolhaPC = 'pedra'; break;
      case 1: escolhaPC = 'papel'; break;
      case 2: escolhaPC = 'tesoura'; break;

    }

    let resultado = ''

    if(escolha === 'pedra'){
      if (escolhaPC === 'pedra'){
        resultado = "Empate"
      }
      if (escolhaPC === 'papel'){
        resultado = "Perdeu"
      }
      if (escolhaPC === 'tesoura'){
        resultado = "Ganhou"
      }      
    }
    if(escolha === 'papel'){
      if (escolhaPC === 'pedra'){
        resultado = "Ganhou"
      }
      if (escolhaPC === 'papel'){
        resultado = "Empate"
      }
      if (escolhaPC === 'tesoura'){
        resultado = "Perdeu"
      }      
    }
    if(escolha === 'tesoura'){
      if (escolhaPC === 'pedra'){
        resultado = "Perdeu"
      }
      if (escolhaPC === 'papel'){
        resultado = "Ganhou"
      }
      if (escolhaPC === 'tesoura'){
        resultado = "Empate"
      }      
    }

    this.setState({ escolhaUsuario : escolha, escolhaComputador : escolhaPC, resultado});
  };

  render() {
    return (
      <View>
        
        <Topo/>
      
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title = 'pedra' onPress = {() => {this.jokenpo('pedra')}}/>
          </View>
          <View style={styles.btnEscolha}><
            Button title = 'papel' onPress = {() => {this.jokenpo('papel')}}/>
          </View>
          <View style={styles.btnEscolha}>
            <Button title = 'tesoura' onPress = {() => {this.jokenpo('tesoura')}}/>
          </View>
        </View>
        
        
        <View style={styles.palco}>

            <Text style={styles.texto}>{this.state.resultado}</Text>
            
            <Icone escolha={this.state.escolhaUsuario} jogador = 'Usuário'/>
            <Icone escolha={this.state.escolhaComputador} jogador = 'Computador'/>

        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  palco:{
    alignItems: 'center',
  },
  btnEscolha:{
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  texto:{
    fontSize: 27,
    fontWeight: 'bold',
    color: 'red',
  },
});
