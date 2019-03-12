import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat',
    };

    render() {
      return (
        <View>
          <Text>Hier komt de chat!</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  