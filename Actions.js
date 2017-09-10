import React from 'react';
import {View, Image, Button, TouchableHighlight} from 'react-native';

import styles from './css/card.js'

class Actions extends React.Component {
  handleUndo() {
    console.log("Undo")
  }
  handleClose() {
    console.log("Close")
  }
  handleLike() {
    console.log("Like")
  }
  handleHamburger() {
    console.log("Hamburger")
  }
  render() {
    return (
      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <Button
            onPress={this.handleUndo}
            title="Undo"
            color="#66b34e"
            accessibilityLabel="Undo the last swipe"
          />
        </View>
        <TouchableHighlight style={styles.actionImageButton} onPress={this.handleClose}>
          <Image source={require('./img/close-icon.png')}  />
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionImageButton} onPress={this.handleLike}>
          <Image source={require('./img/like-icon.png')}  />
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionImageButton} onPress={this.handleHamburger}>
          <Image source={require('./img/hamburger.png')}  />
        </TouchableHighlight>
      </View>
    )
  }
}

export default Actions;
