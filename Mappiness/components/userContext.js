import React, {Component} from 'react';
import * as firebase from 'firebase';


const initialState = {
    personData: {},
}
export const UserContext = React.createContext();
export const AppConsumer = UserContext.Consumer;
export class AppProvider extends React.Component {

    constructor(props) {
      super(props);
      this.state = initialState;
    }
  
    setPersonData = (personData) => {
      this.setState({personData: personData});
    }
  
    watchPersonData = () => {
     const userid = firebase.auth().currentUser.uid;
        firebase.database().ref("users/" + userid).on("value", function(snapshot) {
        let personData = snapshot.val();
        this.setPersonData(personData);
        console.log(personData)
      }.bind(this), function(error) { });
    }
  
    render() {
      return (
        <UserContext.Provider value={{
          personData: this.state.personData,
          watchPersonData: this.watchPersonData,
        }}>
          {this.props.children}
        </UserContext.Provider>
      )
    }
  }