import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity } from 'react-native';
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

    state = {isSwitchOn: false}

    showCalculation = () => {
      if (this.state.isSwitchOn) {
        // do something
      } else {
        // do something else
      }
    }
 
    render() {
      return (
        <View style={styles.container}>
          <Avatar
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.2}
            size={120}
          />
          <Text style={{marginTop: 20,fontWeight:'bold'}}>
               NAME PERSON
          </Text>
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
            <View style={{flexDirection: "row",padding: 2,marginTop: 40}}>
                <View style={{flex: 1,marginLeft:30}}>
                    <Text style={styles.profileInfo}>Email</Text>
                    <Text style={styles.profileInfo}>Nummer</Text>
                    <Text style={styles.profileInfo}>Adres</Text>
                </View>
                <View style={{flex: 2}}>
                    <Text style={{marginBottom: 15}}>Test</Text>
                    <Text style={{marginBottom: 15}}>Test</Text>
                    <Text style={{marginBottom: 15}}>Test</Text>
                </View>
            </View>
            <View style={{flexDirection: "row",padding: 2,marginTop: 40}}>
                <View style={{flex: 3,marginLeft:30}}>
                    <Text style={[styles.profileInfo , styles.border]}>Verder lopen in achtergrond</Text>
                    <Text style={[styles.profileInfo , styles.border]}>Verberg Naam</Text>
                    <Text style={[styles.profileInfo , styles.border]}>Update wanneer de app is gesloten</Text>
                </View>
                <View style={{flex: 1}}>
                  
                  <Switch onValueChange={isSwitchOn => this.setState({isSwitchOn})} value={this.state.isSwitchOn}/>
                  <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                  
                  <Switch onValueChange={isSwitchOn2 => this.setState({isSwitchOn2})} value={this.state.isSwitchOn2}/>
                  <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                  
                  <Switch onValueChange={isSwitchOn3 => this.setState({isSwitchOn3})} value={this.state.isSwitchOn3}/>
                  <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                
                  </View>
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
      color: 'white',
      fontWeight: 'bold',
    },
    profileInfo:{
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#707070',
      fontSize: 15,
    },
    border:{
      paddingRight: 5,
      paddingBottom: 20,
      paddingTop: 5,
    },
    buttonSwitch:
    {
      marginTop: 30,
    }
  });
  