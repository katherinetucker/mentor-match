'use strict';

import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card.js'
import NoCards from './NoCards.js'
import Actions from './Actions.js'
import Cards from './data/cards.json'
import SwipeCards from 'react-native-swipe-cards';
import styles from './css/card.js'

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup(card) {
    console.log("yup")
  },
  handleNope(card) {
    console.log("nope")
  },
  cardRemoved(index) {
    console.log(`The index is ${index}`);
  },
  render() {
    return (
      <View>
        <Text>No more cards</Text>
        <View style={styles.profileData}>
          <Image source={require('./img/close-icon.png')}  />
          <Image source={require('./img/like-icon.png')}  />
          <Image source={require('./img/hamburger.png')}  />
        </View>
        <Actions/>
      </View>
    )
  }
})
