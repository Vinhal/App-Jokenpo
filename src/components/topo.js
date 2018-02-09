import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

const imagem = require('../../imgs/algar.png');

class Topo extends Component{
    render(){
      return(
        <View style={styles.top}>
          <Image source={imagem}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  top:{
    alignItems: 'center'
  },
});

export default Topo;
