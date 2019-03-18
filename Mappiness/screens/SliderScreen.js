import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { Avatar, Badge, Icon, withBadge,ListItem,Slider } from 'react-native-elements'

export default class SliderScreen extends React.Component {

    static navigationOptions = {
        title: 'emotie kiezen',
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
                </View>
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
  