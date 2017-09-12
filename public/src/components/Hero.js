import React from 'react';
import {View, Image} from 'react-native';

import styles from '../style/card.js'

class Hero extends React.Component {

  render() {
    return (
      <View style={styles.hero}>
        <View style={{height: 20, backgroundColor: 'white'}}/>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
      </View>
    )
  }
}

export default Hero;
