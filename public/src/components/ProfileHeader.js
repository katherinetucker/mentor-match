import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import styles from '../style/card.js'

class ProfileHeader extends React.Component {
  render() {
    return (
      <View style={styles.profileHeader}>
        <TouchableHighlight style={styles.profileHeaderImageButton} onPress={this.handleViewProfile}>
          <Image style={styles.profileHeaderImage} source={require('../img/profile-page-person.png')} />
        </TouchableHighlight>
        <Image style={styles.profileHeaderImage} source={require('../img/profile-page-logo.png')} />
        <TouchableHighlight style={styles.profileHeaderImageButton} onPress={this.handleViewProfile}>
          <Image style={styles.profileHeaderImage} source={require('../img/profile-page-chat-icon.png')} />
        </TouchableHighlight>
      </View>
    )
  }
}

export default ProfileHeader;
