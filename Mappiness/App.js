import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes';
import { AppConsumer, AppProvider } from './components/userContext';

console.disableYellowBox = true;

export default class App extends React.Component {


  render() {
    return (
      <AppProvider>
              <AppNavigator />
      </AppProvider>
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
