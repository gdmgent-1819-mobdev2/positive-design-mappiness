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
      region: {
        latitude: 50.925360,
        longitude: 3.670080,
        latitudeDelta: 0.022,
        longitudeDelta: 0.0421,
      }
    }
  }

  _getLocationAsync =  async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    // Arvellon Cursor
  }

  render() {
    return (
      <MapView
        initialRegion={this.state.region}
        showCompass={true}
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
