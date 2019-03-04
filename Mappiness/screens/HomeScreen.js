import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import { LinearGradient } from 'expo';

import Firebase from '../base';
import { MapView, Permissions, Location } from 'expo';

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
        latitudeDelta: 0.45,
        longitudeDelta: 0.45,
      }
      this.setState({region: region})
    }

    render() {
      return (
        <MapView
          initialRegion={this.state.region}
          showCompass={true}
          showsUserLocation={false}
          rotateEnabled={false}
          style={{flex: 1}}
        >
          <MapView.Marker
              coordinate={{
                latitude: 122.4194,
                longitude: 37.7749,
              }}
          />
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
  });
  