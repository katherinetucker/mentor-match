'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  render() {
    var image = this.props.image;
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
}


let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
  {
    name: '1',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/yichen.jpg',
    
  },
  {
    name: '2',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/chris.png'
  },
  {
    name: '3',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/kevin.jpg'
  },
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
        this.setState({
          cards: this.state.cards.concat(Cards),
          outOfCards: true
        })
    }

  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        smoothTransition={true}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
