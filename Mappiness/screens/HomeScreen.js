import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, Image } from 'react-native';
import * as firebase from 'firebase';
import { Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Firebase from '../base';
import { MapView, Permissions, Location } from 'expo';
const EmojiHappy = require('../assets/icons/emoji/happy.png');
const listIcon = require('../assets/icons/list.png');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    static navigationOptions = {
      header: null,
    };

    constructor(props){
      super(props);
      this.state = {
          region: null,
          location: {
              latitude: 53,
              longitude: 3,
          },
          loc: {
              latitude: 53,
              longitude: 3,
          },
          userCoords: [
              {
                  latitude: 1,
                  longitude: 2
              }
          ]
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
        // const uid = firebase.auth().currentUser.uid;
        // firebase.database().ref(`users/${uid}/currentlocation`).set(this.state.loc);

        firebase.database().ref('users').on('value', (snapshot) => {
            let userCoords = [];
            snapshot.forEach((child) => {
                const tmp = child.val()
                userCoords.push(tmp.currentlocation)
            })
            this.setState({userCoords: userCoords})
            console.log(this.state.userCoords)
        })
    }

    render() {
        return (
            <React.Fragment>
                <MapView
                    initialRegion={this.state.region}
                    showCompass={true}
                    showsUserLocation={false}
                    rotateEnabled={true}
                    style={{flex: 1}}
                >

                    <MapView.Marker coordinate={this.state.loc}>
                        <Image
                            source={EmojiHappy}
                            style={{
                                width: 45,
                                height: 45,
                            }}
                        />
                    </MapView.Marker>

                    <MapView.Marker coordinate={{
                        latitude: 50.925318,
                        longitude: 3.670027,
                    }}/>

                    {this.state.userCoords.map(item => {
                        <MapView.Marker coordinate={item}>
                            <Image
                                source={EmojiHappy}
                                style={{
                                    width: 45,
                                    height: 45,
                                }}
                            />
                        </MapView.Marker>
                    })}

                </MapView>

                <Avatar
                    rounded
                    source={{uri: "https://credly.com/web/addons/shared_addons/themes/credly/img/avatar_default_large.png"}}
                    activeOpacity={0.2}
                    size={50}
                    style={styles.avatar}
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Avatar
                    source={listIcon}
                    activeOpacity={0.2}
                    size={50}
                    style={styles.listIcon}
                    overlayContainerStyle={{backgroundColor: 'transparent'}}
                    onPress={() => this.props.navigation.navigate('Chat')}
                />
            </React.Fragment>
        )
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
    },
    avatar: {
      position: 'absolute',
      top: 60,
      right: 20,
      width: 50,
      height: 50,
    },
    listIcon: {
      position: 'absolute',
      bottom: 40,
      right: 20,
      width: 50,
      height: 50,
    }
  });
  