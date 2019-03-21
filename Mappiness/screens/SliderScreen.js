import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,Image } from 'react-native';
import * as firebase from 'firebase';
import { Avatar, Badge, Icon, withBadge,ListItem,Slider } from 'react-native-elements'

const EmojiHappy = require('../assets/icons/emoji/happy.png');
const EmojiSad = require('../assets/icons/emoji/sad.png');
const EmojiCry = require('../assets/icons/emoji/cry.png');
const EmojiShock = require('../assets/icons/emoji/shock.png');

export default class SliderScreen extends React.Component {

    static navigationOptions = {
        title: 'Emotie kiezen',
    };

    constructor(props) {
      super(props);
      this.state = {
        distance: 1,
        minDistance: 1,
        maxDistance: 4
        }   
    }
    onEmoteSubmit = () => {
      const keuze = this.state.distance;
        if(keuze == 1){
          const foto =  'Mappiness/assets/icons/emoji/happy.png'
          const info = {
            keuze,
            foto,
          }
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).child('emotie').push(info)
        }else if(keuze == 2){
          const foto =  'Mappiness/assets/icons/emoji/shock.png'
          const info = {
            keuze,
            foto,
          }
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).child('emotie').push(info)
        }else if(keuze == 3){
          const foto =  'Mappiness/assets/icons/emoji/sad.png'
          const info = {
            keuze,
            foto,
          }
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).child('emotie').push(info)
        }else if(keuze == 4){
          const foto =  'Mappiness/assets/icons/emoji/cry.png'
          const info = {
            keuze,
            foto,
          }
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).child('emotie').push(info)
        }
     
      this.props.navigation.navigate('Home')
    }
    
    render() {
      return (
        <View style={styles.container}>

                {this.state.distance == 1 && (
                  <View>
                    <Image source={EmojiHappy} style={{
                      width: 150,
                      height: 150,
                      }}
                    />
                    <Text style={styles.titleEmo}>Blij</Text>
                  </View>
                )}
                {this.state.distance == 2 && (
                  <View>
                    <Image source={EmojiShock} style={{
                      width: 150,
                      height: 150,
                      }}
                    />
                    <Text style={styles.titleEmo}>Geschroken</Text>
                  </View>
                )}
                {this.state.distance == 3 && (
                  <View>
                    <Image source={EmojiSad} style={{
                      width: 150,
                      height: 150,
                      }}
                    />
                    <Text style={styles.titleEmo}>Gefrustreerd</Text>
                  </View>
                )}
                {this.state.distance == 4 && (
                  <View>
                    <Image source={EmojiCry} style={{
                      width: 150,
                      height: 150,
                      }}
                    />
                    <Text style={styles.titleEmo}>Verdrietig</Text>
                  </View>
                )}


                <Slider
                    style={{ width: 300,marginTop: 50}}
                    step={1}
                    minimumValue={this.state.minDistance}
                    maximumValue={this.state.maxDistance}
                    value={this.state.distance}
                    onValueChange={val => this.setState({ distance: val })}
                    thumbTintColor='rgb(252, 228, 149)'
                    maximumTrackTintColor='#d3d3d3' 
                    minimumTrackTintColor='rgb(252, 228, 149)'
                />
                <View style={styles.textCon}>
                    <TouchableHighlight  onPress={this.onEmoteSubmit} style={styles.EmoticonBtn} activeOpacity={1}>
                    <Text style={{ overflow:'hidden',color:"#FFF" }}>Emotie bevestigen</Text>
                    </TouchableHighlight>
                </View>
            </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    EmoticonBtn:
    {
      backgroundColor: '#FFD304',
      borderRadius: 10,
      width: 150,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    titleEmo:{
      textAlign: 'center',
      marginTop: 30,
      fontWeight: 'bold',
      fontSize: 20,
    }
  });
  