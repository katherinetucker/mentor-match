'use strict';

import React from 'react';
import {View} from 'react-native';
import Card from './public/src/components/Card.js'
import Actions from './public/src/components/Actions.js'
import Cards from './public/src/data/cards.json'
import SwipeCards from 'react-native-swipe-cards';
import styles from './public/src/style/card.js'

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
      <View style={styles.profile}>
        <SwipeCards
          cards={this.state.cards}
          loop={true}
          smoothTransition={true}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved}
          onClickHandler={null}
          />
        <Actions/>
      </View>
    )
  }
})
