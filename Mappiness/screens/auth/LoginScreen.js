import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert} from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo';
export const red = '#DD5630'
export const yellow = '#FFAB00'
export const primaryGradientArray = [red, yellow]
export default class LoginScreen extends React.Component {   
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
        this.props.navigation.navigate("Home");
      }
      
    render() {
        const {navigate} = this.props.navigation;
        return (
            <React.Fragment>
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
                <Button title="SignUp" onPress={() => this.props.navigation.navigate('Signup')} />
                <Button title="Go to map" onPress={() => this.props.navigation.navigate('Home')}/>
            </React.Fragment>
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
