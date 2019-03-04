import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Login from '../../components/Login'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <React.Fragment>
                <Login/>
                <Button title="Go to map" onPress={() => this.props.navigation.navigate('Home')}/>
            </React.Fragment>
        );
    }
}