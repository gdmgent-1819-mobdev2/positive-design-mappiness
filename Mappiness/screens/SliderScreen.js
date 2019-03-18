import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { Avatar, Badge, Icon, withBadge,ListItem,Slider } from 'react-native-elements'

export default class SliderScreen extends React.Component {

    static navigationOptions = {
        title: 'Emotie kiezen',
    };

    constructor(props) {
      super(props);
      this.state = {
        distance: 0,
        minDistance: 0,
        maxDistance: 100
    }
    }
    
    
    render() {
      return (
        <View style={styles.container}>
                <Slider
                    style={{ width: 300}}
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
                    <Text style={styles.colorYellow}>
                        {this.state.distance}
                    </Text>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('Home')} style={styles.EmoticonBtn} activeOpacity={1}>
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
    }
  });
  