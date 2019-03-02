import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import Login from './components/Login'
import Firebase from './base';

export const red = '#DD5630'
export const yellow = '#FFAB00'
export const primaryGradientArray = [red, yellow]

export default class App extends React.Component {
  render() {
    return (
      <Login></Login>
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
  title: {
    color: '#fff',
  },
});
