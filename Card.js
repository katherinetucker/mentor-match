import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

import styles from './css/card.js'

class Card extends React.Component {

  render() {
    const mentoredText = this.props.mentoredCount && 'Mentored '
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
      </View>
    )
  }
}

export default Card;
