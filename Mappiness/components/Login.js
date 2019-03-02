import React, {Component} from 'react';
import { StyleSheet, Text, View, Input } from 'react-native';
import { LinearGradient } from 'expo';
import Logo from '../assets/images/logo.png';

export const red = '#DD5630'
export const yellow = '#FFAB00'
export const primaryGradientArray = [red, yellow]

export default class Login extends React.Component {
  render() {
    return (
      <LinearGradient colors={ primaryGradientArray } style={styles.container}>
        <Text style={styles.title}>Dit word de Login!!!!</Text>
      </LinearGradient>
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
