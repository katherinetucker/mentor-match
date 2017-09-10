import React from 'react';
import {Text, View} from 'react-native';

import styles from '../style/card.js'

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
