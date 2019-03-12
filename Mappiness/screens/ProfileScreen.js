import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
      test = () => {
        const uid = firebase.auth().currentUser.uid
        Alert.alert(uid)
      }

    render() {
        return (
            <View>
                <Button title="Push me" onPress={this.test} />
            </View>
        );
    }
}