import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert} from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo';
import {AsyncStorage} from 'react-native';

export const red = '#FFE308'
export const yellow = '#FFA700'
const EmojiHappy = require('../../assets/images/logo.png');
export const primaryGradientArray = [red, yellow]
export default class LoginScreen extends React.Component {   
      constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
        this._getLoggedIn();
      }
      static navigationOptions = {
        header: null,
      };
      _getLoggedIn = async() => {
        const value = await AsyncStorage.getItem('IsLoggedIn');
        if(value == 'hai'){
          this.props.navigation.navigate("Home");
        }
        else{
          this.props.navigation.navigate("Login");

        }
      }
      onLogin = async() => {
        await AsyncStorage.setItem('IsLoggedIn','hai');
        const username = this.state.username
        const password = this.state.password
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(()=>{
            this.props.navigation.navigate("Home");
        })
        .then(() => {
          this.props.navigation.navigate("Home");
        })
        .catch((error) => {
            // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // show errors in console
              Alert.alert(errorMessage + errorCode);
         });
      }
      onProfile(){
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
          this.props.navigation.navigate('Profile')
          }
          else{
            Alert.alert('Gelieve in te loggen')
            this.props.navigation.navigate("Login");
          }
        });
      }
      onPasswordForget(){
        firebase.auth().sendPasswordResetEmail(this.state.username)
        .then(() => {
          alert('Please check your email...')
        })  .catch((error) => {
          // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // show errors in console
            alert(errorMessage + errorCode + ' Gelieve geldig email in te geven');
          });
      }
      
    render() {
        const {navigate} = this.props.navigation;
        return (
            <React.Fragment>
                <LinearGradient colors={ primaryGradientArray } style={styles.container}>
                    <Image
                        source={EmojiHappy}
                        style={{
                            width: 200,
                            height: 200,
                            marginBottom: 50,
                        }}
                    />
                    <View>
                      <Text style={{fontSize: 30,marginBottom: 40,color: 'white',fontWeight: 'bold'}}>Mappiness</Text>
                    </View>
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
                    <Text style={styles.title} onPress={this.onPasswordForget.bind(this)}>
                    Forgot Password?
                    </Text>
                      <TouchableHighlight  style={styles.loginButton} onPress={this.onLogin.bind(this)} activeOpacity={1}>
                        <Text style={styles.login}>
                            Login
                        </Text>
                      </TouchableHighlight>
                      <Text style={{color:'white',marginTop: 25}} onPress={() => this.props.navigation.navigate('Signup')}>
                         Geen account? Klik hier!
                      </Text>
                </LinearGradient>
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
      textAlign: 'right',
      alignSelf: 'stretch',
      marginRight: 40,
    },
    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 10
    },
    login:{
      color: 'white',
      fontWeight: "bold"
    },
    loginButton:
    {
      marginTop: 40,
      borderWidth: 2,
      borderColor: "#FFF",
      width: 100,
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
