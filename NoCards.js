import React from 'react';
import {Text, View, Image, Dimensions, Button} from 'react-native';

import styles from './css/card.js'

class NoCards extends React.Component {
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

export default NoCards;
