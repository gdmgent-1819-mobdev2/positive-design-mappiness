import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { Avatar, Badge, Icon, withBadge,ListItem } from 'react-native-elements'
import { AppConsumer, AppProvider } from '../components/userContext';


export default class ProfileEditScreen extends React.Component {

    static navigationOptions = {
        title: 'Bewerken',
    };

    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    getId = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).on("value", function(snapshot) {
            const  personData = snapshot.val();
            console.log(personData);
          })
        }
        else{
          this.props.navigation.navigate("Login");
        }
      });
    }
    
    render() {

      return (
        <View style={styles.container}>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 30,
      flex: 1,
    }
  });
  