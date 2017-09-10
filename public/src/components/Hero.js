import React from 'react';
import {View, Image, Button, TouchableHighlight} from 'react-native';

import styles from '../style/card.js'

class Hero extends React.Component {

  render() {
    return (
      <View style={styles.hero}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        </View>
      </View>
    )
  }
}

export default Hero;
