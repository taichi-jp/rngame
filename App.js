import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Box from './Box'

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
    console.log(this.state.gameover);
    let tmp = { ...this.state.data };
    if(!tmp.box1 && !tmp.box2 && !tmp.box3 && !tmp.box4 && !tmp.box5 && !tmp.box6 && !tmp.box7 && !tmp.box8 &&
    !tmp.box9 && !tmp.box10 && !tmp.box11 && !tmp.box12 && !tmp.box13 && !tmp.box14 && !tmp.box15 && !tmp.box16 && !this.state.gameover) {
      this.setState({
        data: initialData,
        gameover: true,
      });
    }
  }

  _onPress(num) {
    let tmp = { ...this.state.data };
    idx = 'box' + num.toString();
    tmp[idx] = false;
    this.setState({
      data: tmp,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box1 && <TouchableHighlight onPress={ () => this._onPress(1)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box2 && <TouchableHighlight onPress={ () => this._onPress(2)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box3 && <TouchableHighlight onPress={ () => this._onPress(3)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box4 && <TouchableHighlight onPress={ () => this._onPress(4)} ><View style={styles.box2}/></TouchableHighlight>}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box5 && <TouchableHighlight onPress={ () => this._onPress(5)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box6 && <TouchableHighlight onPress={ () => this._onPress(6)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box7 && <TouchableHighlight onPress={ () => this._onPress(7)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box8 && <TouchableHighlight onPress={ () => this._onPress(8)} ><View style={styles.box2}/></TouchableHighlight>}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box9 && <TouchableHighlight onPress={ () => this._onPress(9)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box10 && <TouchableHighlight onPress={ () => this._onPress(10)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box11 && <TouchableHighlight onPress={ () => this._onPress(11)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box12 && <TouchableHighlight onPress={ () => this._onPress(12)} ><View style={styles.box2}/></TouchableHighlight>}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>{this.state.data.box13 && <TouchableHighlight onPress={ () => this._onPress(13)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box14 && <TouchableHighlight onPress={ () => this._onPress(14)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box15 && <TouchableHighlight onPress={ () => this._onPress(15)} ><View style={styles.box2}/></TouchableHighlight>}</View>
          <View style={styles.box}>{this.state.data.box16 && <TouchableHighlight onPress={ () => this._onPress(16)} ><View style={styles.box2}/></TouchableHighlight>}</View>
        </View>
        <View style={styles.button}>{this.state.gameover && <Text style={styles.retry}>Retry!</Text>}</View>
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
  box2: {
    width: 60,
    height: 60,
    backgroundColor: 'powderblue',
  },
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
