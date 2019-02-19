import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBgLNAtnnYME9U5kkT006jc5yEY7Em53bA",
  authDomain: "mappines-975ab.firebaseapp.com",
  databaseURL: "https://mappines-975ab.firebaseio.com",
  projectId: "mappines-975ab",
  storageBucket: "mappines-975ab.appspot.com",
  messagingSenderId: "367592872707"
};

firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <div>
       
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', height: '100%'}}>
          <View style={{flex: 1, height: '50%', backgroundColor: 'powderblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </div>
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

