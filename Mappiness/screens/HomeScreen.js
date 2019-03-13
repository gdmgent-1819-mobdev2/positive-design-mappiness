import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, Image } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo';

import Firebase from '../base';
import { MapView, Permissions, Location } from 'expo';
const EmojiHappy = require('../assets/icons/emoji/happy.png');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props){
      super(props);
      this.state = {
        region: null,
        location: {
          latitude: 53,
          longitude: 3,
        }
      }
      this._getLocationAsync();
    }
  
    _getLocationAsync =  async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted')
          console.log('Permission to access location was denied');
      let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,

        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
      this.setState({region: region})
      this.setState({loc: {
        latitude: region.latitude,
        longitude: region.longitude,
        }})
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${uid}/currentlocation`).set(this.state.loc);
    }

    render() {
      return (
        <MapView
          initialRegion={this.state.region}
          showCompass={true}
          showsUserLocation={false}
          rotateEnabled={true}
          style={{flex: 1}}
        >

            <MapView.Marker coordinate={this.state.loc} >
                <Image
                    source={EmojiHappy}
                    style={{
                        width: 45,
                        height: 45,
                    }}
                />
            </MapView.Marker>

        </MapView>
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
    mark: {
        width: 50,
        display: 'none',
    }
  });
  