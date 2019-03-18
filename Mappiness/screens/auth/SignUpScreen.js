import React from 'react';
import { StyleSheet, View, Text, TextInput,Input, Button, Alert,Image,TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';

import { LinearGradient } from 'expo';
export const red = '#FFE308'
export const yellow = '#FFA700'
const EmojiHappy = require('../../assets/images/logo.png');
export const primaryGradientArray = [red, yellow]

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password: "",
            passwordConfirm: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
         };
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('loggedin', true);
        } catch (error) {
          // Error saving data
        }
      };
    onSignUpPress = () => {
        /*
        if(this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match!")  
            return;
        }

        if(this.state.email == ""){
            Alert.alert("Email Empty!")
            return;
        }
        
        if(this.state.firstName == "" || this.state.lastName == ""){
            Alert.alert("First & Last Name!")
            return;
        }
        */
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            const Naam =  this.state.firstName;
            const FamilieNaam =  this.state.lastName;
            const Email =  this.state.email;
            const Tel =  this.state.phoneNumber;
            
            const userid = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users').child(userid).set({
                Naam,
                FamilieNaam,
                Email,
                Tel
            });
            this.props.navigation.navigate("Home");
        });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login");

    }

    render() {
        return (
        <React.Fragment>
            <LinearGradient colors={ primaryGradientArray } style={styles.container}>
                    <Image
                        source={EmojiHappy}
                        style={{
                            width: 100,
                            height: 100,
                            marginBottom: 30,
                            marginTop: 30,
                        }}
                    />   
                    <View>
                      <Text style={{fontSize: 30,marginBottom: 30,color: 'white',fontWeight: 'bold'}}>Mappiness</Text>
                    </View> 
                <View style={{paddingTop:0, alignItems:"center"}}>
                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email: text})}}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
                style={styles.input}
                />
                <View style={{padding:10}}/>

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text})}}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                style={styles.input}
                />
                <View style={{padding:10}}/>

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm: text})}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                style={styles.input}
                /><View style={{padding:10}}/>

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.displayName}
                onChangeText={(text) => { this.setState({firstName: text})}}
                placeholder="First Name"
                secureTextEntry={false}
                autoCorrect={false}
                keyboardType="default"
                textContentType="username"
                style={styles.input}
                /><View style={{padding:10}}/>
                
                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.displayName}
                onChangeText={(text) => { this.setState({lastName: text})}}
                placeholder="Last Name"
                secureTextEntry={false}
                autoCorrect={false}
                keyboardType="default"
                textContentType="username"
                style={styles.input}
                /><View style={{padding:10}}/>

                {/*<TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.phoneNumber}
                onChangeText={(text) => { this.setState({phoneNumber: text})}}
                placeholder="123-456-7890"
                secureTextEntry={false}
                autoCorrect={false}
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                maxLength={12}
                />*/}
                <TouchableHighlight  style={styles.RegButton} onPress={this.onSignUpPress} activeOpacity={1}>
                        <Text style={styles.login}>
                            Registreren
                        </Text>
                </TouchableHighlight>
                <Text style={{color:'white',marginTop: 25}} onPress={this.onBackToLoginPress}>
                    Reeds een account? Klik hier!
                </Text>
            </View>
            </LinearGradient>
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
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
    RegButton:
    {
      borderWidth: 2,
      borderColor: "#FFF",
      width: 150,
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });



/*
        .then(() => { 
            //firebase.auth().currentUser.updatePhoneNumber({
                //phoneCredential: parseInt(this.state.phoneNumber)
                //reauthenticate(AuthCredential)
            //})           <==== this has to be done in profile settings after authenticating the user

            firebase.auth().currentUser.updateProfile({
                displayName: this.state.firstName+' '+this.state.lastName,
                photoURL: ""
              }).then(function() {
                console.log("Profile updated successfully!");
                var displayName = firebase.auth().currentUser.displayName;
                // "https://example.com/jane-q-user/profile.jpg"
                var photoURL = firebase.auth().currentUser.photoURL;
              }, function(error) {
                // An error happened.
                Alert.alert(error.message);
              });

        }


*/