import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert} from 'react-native';
import { LinearGradient } from 'expo';
import * as firebase from 'firebase';


export const red = '#DD5630'
export const yellow = '#FFAB00'
export const primaryGradientArray = [red, yellow]

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  _storeData = async () => {
    try {
        await AsyncStorage.setItem('loggedin', true);
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('loggedin');
      if (value !== null) {
        // We have data!!
        Alert.alert(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  onLogin() {
    const username = this.state.username
    const password = this.state.password
    firebase.auth().signInWithEmailAndPassword(username, password)
    this._storeData();
    this._retrieveData();
    Alert.alert('succes')
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <LinearGradient colors={ primaryGradientArray } style={styles.container}>
      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Text style={styles.title}>Forgot Password?</Text>
      <Button
        title={'Login'}
        style={styles.input}
        onPress={this.onLogin.bind(this)}
      />
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
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
});
