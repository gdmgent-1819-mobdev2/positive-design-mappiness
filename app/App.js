import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', height: '100%'}}>
          <View style={{flex: 1, height: '50%', backgroundColor: 'powderblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSplash: {
    flex: 1,
  }
});
