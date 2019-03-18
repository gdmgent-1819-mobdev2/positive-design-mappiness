import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Avatar } from 'react-native-elements';
import { AppConsumer, AppProvider } from '../components/userContext';


export default class ProfileScreen extends React.Component {
    componentDidMount() {
      this.context.watchPersonData(); 
    }

    static navigationOptions = {
        title: 'Profiel',
    };

    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
    }
    getId = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = firebase.auth().currentUser.uid
          firebase.database().ref("users/" + uid).on("value", function(snapshot) {
            const  personData = snapshot.val();
            console.log(personData);
          })
        }
        else{
          this.props.navigation.navigate("Login");
        }
      });
    }
    
    logout = async() => {
      await AsyncStorage.setItem('IsLoggedIn','no');
      firebase.auth().signOut();
      Alert.alert('uitgelogd');
      this.props.navigation.navigate("Login");
    }

    state = {isSwitchOn: false}

    showCalculation = () => {
      if (this.state.isSwitchOn) {
        // do something
        Alert.alert('test');
      } else {

        // do something else
      }
    }
 
    render() {
      return (
          <AppConsumer>
            {(context) => (
            <View style={styles.container}  ref={(ref) => { this.context = context; }}>
              <Avatar
                rounded
                source={{uri: "https://credly.com/web/addons/shared_addons/themes/credly/img/avatar_default_large.png"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.2}
                size={120}
              />
              <Text style={{marginTop: 20,fontWeight:'bold'}}>
                  {context.personData.Naam}
              </Text>
              <View style={styles.profileButtons}>
              <TouchableHighlight  style={styles.button} activeOpacity={1}>
                <Text style={styles.textButton}>
                    EDIT
                </Text>
              </TouchableHighlight>
              <TouchableHighlight  style={styles.button} onPress={this.logout} activeOpacity={1}>
                <Text style={styles.textButton}>
                LOGOUT
                </Text>
              </TouchableHighlight>
              </View>
              <View>
                <Button style={styles.button} title="Push me" onPress={this.getId} />
              </View>
                <View style={{flexDirection: "row",padding: 2,marginTop: 40}}>
                    <View style={{flex: 1,marginLeft:30}}>
                        <Text style={styles.profileInfo}>Voornaam</Text>
                        <Text style={styles.profileInfo}>Familienaam</Text>
                        <Text style={styles.profileInfo}>Email</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={{marginBottom: 15}}>{context.personData.Naam}</Text>
                        <Text style={{marginBottom: 15}}>{context.personData.FamilieNaam}</Text>
                        <Text style={{marginBottom: 15}}>{context.personData.Email}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row",padding: 2,marginTop: 40}}>
                    <View style={{flex: 3,marginLeft:30}}>
                        <Text style={[styles.profileInfo , styles.border]}>Verder lopen in achtergrond</Text>
                        <Text style={[styles.profileInfo , styles.border]}>Verberg Naam</Text>
                        <Text style={[styles.profileInfo , styles.border]}>Update bij gesloten app</Text>
                    </View>
                    <View style={{flex: 1}}>
                      
                      <Switch onValueChange={isSwitchOn => this.setState({isSwitchOn})} value={this.state.isSwitchOn}/>
                      <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                      
                      <Switch onValueChange={isSwitchOn2 => this.setState({isSwitchOn2})} value={this.state.isSwitchOn2}/>
                      <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                      
                      <Switch onValueChange={isSwitchOn3 => this.setState({isSwitchOn3})} value={this.state.isSwitchOn3}/>
                      <TouchableOpacity style={styles.buttonSwitch} onPress={this.showCalculation}></TouchableOpacity>
                    
                      </View>
                </View>
                <View>
                <Text>dkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkdkjgkdbgfskbnfskjbnfjksnbmkekjbfkezjbfzebfjhezbzekhjbg</Text>
                </View>
              
            </View>
            )}
          </AppConsumer>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 30
    },
    profileButtons: {
      marginTop: 20,
      flexDirection:'row',
    },
    button:{
      margin: 10,
      backgroundColor: '#FFD304',
      borderRadius: 8,
      width: 80,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton:
    {
      color: 'white',
      fontWeight: 'bold',
    },
    profileInfo:{
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#707070',
      fontSize: 15,
    },
    border:{
      paddingRight: 5,
      paddingBottom: 20,
      paddingTop: 5,
    },
    buttonSwitch:
    {
      marginTop: 25,
    }
  });
  