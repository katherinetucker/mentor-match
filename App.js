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
    organization: '',
    mentoredCount: 0,
    mentorLookingFor: '',
    menteeLookingFor: '',
    mentorRating: 0,
  },
  {
    name: '2',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/chris.png',
    organization: 'AutoZone Digital IT',
    mentoredCount: 0,
    mentorLookingFor: '',
    menteeLookingFor: '',
    mentorRating: 0,
  },
  {
    name: '3',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/kevin.jpg',
    organization: '',
    mentoredCount: 0,
    mentorLookingFor: '',
    menteeLookingFor: '',
    mentorRating: 0,
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
  },
  render() {
    return (
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
    padding: 50,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
    borderRadius: 150,
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
