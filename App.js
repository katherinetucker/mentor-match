'use strict';

import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card.js'
import NoCards from './NoCards.js'
import Hero from './Hero.js'
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
        <View>
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
        </View>
        <Actions/>
      </View>
    )
  }
})
