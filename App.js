import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Box from './components/Box'
import RetryButton from './components/RetryButton'

export default class Game extends Component {
  constructor(props) {
    super(props);
    let rand = "box" + (Math.floor( Math.random() * 16 ) + 1).toString() ;
    this.state = {
      data: initialData,
      gameover: false,
      miss: rand,
    };
  }

  componentDidUpdate() {
    console.log(this.state.data);
    console.log(this.state.miss);
  }

  _onPress(id) {
    let tmp = { ...this.state.data };
    if(id === this.state.miss) {
      for(let i = 1; i <= 16; i++){
        let boxid = "box" + i.toString();
        tmp[boxid] = false;
      }
      tmp[id] = true;
      this.setState({
        data: tmp,
        gameover: true,
      });
    } else {
      tmp[id] = false;
      this.setState({
        data: tmp,
        gameover: false,
      });
    }
  }

  _onRetry() {
    this.setState({
      data: initialData,
      gameover: false,
      miss: "box" + (Math.floor( Math.random() * 16 ) + 1).toString(),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box1 && <Box boxId='box1' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box2 && <Box boxId='box2' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box3 && <Box boxId='box3' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box4 && <Box boxId='box4' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box5 && <Box boxId='box5' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box6 && <Box boxId='box6' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box7 && <Box boxId='box7' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box8 && <Box boxId='box8' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box9 && <Box boxId='box9' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box10 && <Box boxId='box10' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box11 && <Box boxId='box11' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box12 && <Box boxId='box12' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box13 && <Box boxId='box13' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box14 && <Box boxId='box14' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box15 && <Box boxId='box15' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
          <View style={styles.box}>{this.state.data.box16 && <Box boxId='box16' missId={this.state.miss} onPressed={this._onPress.bind(this)} />}</View>
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
    // backgroundColor: 'steelblue',
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
