import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Box extends Component {
  _firePressed(id) {//外で定義するの必要？
    this.props.onPressed(id);
  }

  render() {
    let id = this.props.boxId;
    return (
      <TouchableHighlight onPress={ () => this._firePressed(id)} >
        <View style={styles.box}/>
      </TouchableHighlight>
    );
  }
}

Box.propTypes = {
  boxId: PropTypes.string.isRequired,
  onPressed: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'powderblue',
  },
});
