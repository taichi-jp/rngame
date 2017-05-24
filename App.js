import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Box from './components/Box'
import RetryButton from './components/RetryButton'

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      gameover: false,
    };
  }

  componentDidUpdate() {
    console.log(this.state.data);
    let tmp = { ...this.state.data };
    let go = !tmp.box1 && !tmp.box2 && !tmp.box3 && !tmp.box4 && !tmp.box5 && !tmp.box6 && !tmp.box7 && !tmp.box8 &&
      !tmp.box9 && !tmp.box10 && !tmp.box11 && !tmp.box12 && !tmp.box13 && !tmp.box14 && !tmp.box15 && !tmp.box16 && !this.state.gameover;
    if(go) {
      this.setState({
        data: tmp,
        gameover: true,
      });
    }
  }

  _onPress(id) {
    let tmp = { ...this.state.data };
    tmp[id] = false;
    this.setState({
      data: tmp,
      gameover: false,
    });
  }

  _onRetry() {
    this.setState({
      data: initialData,
      gameover: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box1 && <Box boxId='box1' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box2 && <Box boxId='box2' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box3 && <Box boxId='box3' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box4 && <Box boxId='box4' onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box5 && <Box boxId='box5' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box6 && <Box boxId='box6' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box7 && <Box boxId='box7' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box8 && <Box boxId='box8' onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box9 && <Box boxId='box9' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box10 && <Box boxId='box10' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box11 && <Box boxId='box11' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box12 && <Box boxId='box12' onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box13 && <Box boxId='box13' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box14 && <Box boxId='box14' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box15 && <Box boxId='box15' onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box16 && <Box boxId='box16' onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.button}>
          {this.state.gameover && <RetryButton onPressed={this._onRetry.bind(this)} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 65,
    height: 65,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'steelblue',
  },
  button: {
    width: 200,
    height: 70,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
  },
});

const initialData = {
  box1: true,
  box2: true,
  box3: true,
  box4: true,
  box5: true,
  box6: true,
  box7: true,
  box8: true,
  box9: true,
  box10: true,
  box11: true,
  box12: true,
  box13: true,
  box14: true,
  box15: true,
  box16: true,
}

AppRegistry.registerComponent('Game', () => Game);
