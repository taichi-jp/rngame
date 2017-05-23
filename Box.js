import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Box extends Component {
  render() {
    return (
      <View style={styles.box} />
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'powderblue',
  },
});
