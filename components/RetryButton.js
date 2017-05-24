import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class RetryButton extends Component {
  _firePressed() {
    this.props.onPressed();
  }
  
  render() {
    return(
      <TouchableHighlight style={styles.button} onPress={ () => this._firePressed()}>
        <Text style={styles.retry}>Retry!</Text>
      </TouchableHighlight>
    );
  }
}

RetryButton.propTypes = {
  onPressed: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 70,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'skyblue',
  },
  retry: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})
