import React from 'react';
import {Text, View, Image} from 'react-native';
import Hero from './Hero.js';

import styles from '../style/card.js'

class Card extends React.Component {

  render() {
    const mentoredText = this.props.mentoredCount && 'Mentored '
      + this.props.mentoredCount
      + (this.props.mentoredCount > 1 ? ' people' : ' person');

    return (
      <View style={styles.card}>
        <Hero image={this.props.image}/>
        <View style={styles.lookingFor}>
          <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={3} >{this.props.mentorLookingFor}</Text>
        </View>
        <View style={styles.profileData}>
        </View>
      </View>
    )
  }
}

export default Card;
