import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert,TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import { Avatar } from 'react-native-elements';
export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profiel',
    };

    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    getId = () => {
      const uid = firebase.auth().currentUser.uid
      Alert.alert(uid)
    }
    logout = () => {
      firebase.auth().signOut();
      Alert.alert('uitgelogd');
      this.props.navigation.navigate("Login");


    }
 
    render() {
      return (
        <View style={styles.container}>
          <Avatar
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.2}
            size={100}
          />
          <View style={styles.profileButtons}>
          <TouchableHighlight  style={styles.button} activeOpacity={1}>
            <Text style={styles.textButton}>
                EDIT
            </Text>
          </TouchableHighlight>
          <TouchableHighlight  style={styles.button} onPress={this.logout} activeOpacity={1}>
            <Text style={styles.textButton}>
            LOGOUT
            </Text>
          </TouchableHighlight>
          </View>
          <View>
            <Button style={styles.button} title="Push me" onPress={this.getId} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 30
    },
    profileButtons: {
      marginTop: 20,
      flexDirection:'row',
    },
    button:{
      margin: 10,
      backgroundColor: '#FFD304',
      borderRadius: 8,
      width: 80,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton:
    {
      color: 'white'
    }
  });
  