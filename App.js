'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
    organization: 'AutoZone Digital IT',
    mentoredCount: 2,
    mentorLookingFor: 'I am passionate about helping people stay driven in their career growth. I want to be that sounding board for people and work through tough situations together.  Learning is bi-directional, and I think I can learn just as much being a mentor as being a mentee. ',
    menteeLookingFor: '',
    mentorRating: 5,
  },
  {
    name: '2',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/chris.png',
    organization: 'AutoZone Digital IT',
    mentoredCount: 30,
    mentorLookingFor: 'Leadership and talent development',
    menteeLookingFor: '',
    mentorRating: 2,
  },
  {
    name: '3',
    image: 'https://raw.githubusercontent.com/cjlyth/mentor-match/master/img/kevin.jpg',
    organization: 'AutoZone Infosec',
    mentoredCount: 0,
    mentorLookingFor: 'Career/Technical',
    menteeLookingFor: 'Leadership',
    mentorRating: 5,
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
          onClickHandler={null}
        />
    )
  }
})
class Card extends React.Component {
  handleUndo() {
    console.log("Undo")
  }
  render() {
    var mentoredText = this.props.mentoredCount && 'Mentored '
      + this.props.mentoredCount
      + (this.props.mentoredCount > 1 ? ' people' : ' person');

    return (
      <View style={styles.card}>
        <View style={styles.hero}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}} >
            <Image style={styles.thumbnail} source={{uri: this.props.image}} />
          </View>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          </View>
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3} >{this.props.mentorLookingFor}</Text>
        </View>
        <View style={styles.profileData}>
        </View>
        <View style={styles.actions}>
          <Button
            onPress={this.handleUndo}
            title="Undo"
            color="#66b34e"
            accessibilityLabel="Undo the last swipe"
          />
          <Image source={require('./img/close-icon.png')}  />
          <Image source={require('./img/like-icon.png')}  />
          <Image source={require('./img/hamburger.png')}  />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: 50,
    backgroundColor: '#66b34e',
    flexDirection: 'row',
    flex: 3,
  },
  lookingFor: {
    backgroundColor: '#e3da74',
    flex: 1,
  },
  profileData: {
    backgroundColor: '#66b34e',
    flex: 3,
  },
  actions: {
    backgroundColor: '#e3da74',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 50,
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    flex: 1,
    width: width,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
