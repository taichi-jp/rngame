import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Animated, Easing } from 'react-native';

export default class Box extends Component {
  _firePressed(id) {
    if(id === this.props.missId) {
      Animated.spring(this.anim, {
        toValue: 0,   // Returns to the start
        velocity: 1.5,  // Velocity makes it move
        tension: -10, // Slow
        friction: 0.5,  // Oscillate a lot
      }).start();
    }
    this.props.onPressed(id);
  }

  render() {
    let id = this.props.boxId;
    this.anim = this.anim || new Animated.Value(0);
    return (
      <TouchableHighlight onPress={ () => this._firePressed(id)} style={styles.box}>
        <Animated.View style={[styles.box, {
          transform: [   // Array order matters
            {scale: this.anim.interpolate({
              inputRange: [1, 1],
              outputRange: [1, 0],
            })},
            {translateX: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 500],
            })},
            {rotate: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [
                '0deg', '360deg' // 'deg' or 'rad'
              ],
            })},
          ]}]} >
          <Image source={require('../images/face.png')} style={styles.boy} />
        </Animated.View>
      </TouchableHighlight>
    );
  }
}

Box.propTypes = {
  boxId: PropTypes.string.isRequired,
  onPressed: PropTypes.func.isRequired,
  missId: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 65,
  },
  boy: {
    width: 60,
    height: 65,
  },
});
