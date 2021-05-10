import React, {Component} from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./HomeScreen";

export default class App extends React.Component() {
  render(){
    return(
      <View>
        <HomeScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
