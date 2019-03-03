import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import Login from './components/Login'
import Firebase from './base';
import { MapView, Permissions, Location } from 'expo';

export const red = '#DD5630'
export const yellow = '#FFAB00'
export const primaryGradientArray = [red, yellow]

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      region: null,
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
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    }
    this.setState({region: region})
  }

  render() {
    return (
      <MapView
        initialRegion={this.state.region}
        showCompass={true}
        showUserLocation={true}
        rotateEnabled={false}
        style={{flex: 1}}
      />
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
