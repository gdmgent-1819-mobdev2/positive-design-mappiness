import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,ScrollView } from 'react-native';
import {AsyncStorage} from 'react-native';
import * as firebase from 'firebase';

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat',
    };
    logout = async() => {
      await AsyncStorage.setItem('IsLoggedIn','no');
      firebase.auth().signOut();
      this.props.navigation.navigate("Login");
    }

    render() {
      return (
        <View>
          <Text>Hier komt de chat!</Text>
          <TouchableHighlight  onPress={this.logout} activeOpacity={1}>
                  <Text >
                  LOGOUT
                  </Text>
                </TouchableHighlight>
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
    }
  });
  