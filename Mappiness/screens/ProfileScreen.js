import React, {Component} from 'react';
import { StyleSheet, View, Text,Switch, TextInput, Button, Alert,TouchableHighlight,TouchableOpacity,ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { Avatar, Badge, Icon, withBadge,ListItem } from 'react-native-elements'
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

      const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
   
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         
        },
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        
        },
      ]
      
      return (
        <View style={styles.container}>
          <AppConsumer>
            {(context) => (
            <ScrollView ref={(ref) => { this.context = context; }}>
             <View style={styles.profileAvatar}> 
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
            </View>
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
                <View style={{flexDirection: "row",padding: 2,marginTop: 0,marginBottom: 30,}}>
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
                <View><Text style={{fontSize:20,paddingLeft: 30,marginTop: 10,marginBottom: 10,fontWeight:'bold',color:'#FFD304'}}>Badges</Text></View>
                <View style={{flex: 1,paddingBottom: 40,flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}> 
                  {
                    list.map((l, i) => (
                    <View  key={i} style={styles.badgesBox}>   
                      <Avatar
                        rounded
                        source={{
                          uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                        }}
                        size={110}
                      />
                      <Text style={{flexDirection: 'row', justifyContent: 'flex-end',marginTop: 10,}}>{l.name}</Text>
                      <Badge
                        status="primary"
                        value="vrij gespeeld!"
                        containerStyle={{ position: 'absolute', top: 10, right: 0 }}
                      />
                    </View>  
                    ))
                  }
                </View>  
            </ScrollView>
            )}
          </AppConsumer>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 30,
      flex: 1,
    },
    profileAvatar:{
      alignItems: 'center',
      justifyContent: 'center',
    }
    ,profileButtons: {
      marginTop: 20,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
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
    },
    badgesBox:
    {
      alignItems: 'center',
      padding: 10,
      marginBottom: 20,
    }
  });
  