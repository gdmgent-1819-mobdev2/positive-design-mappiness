import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBgLNAtnnYME9U5kkT006jc5yEY7Em53bA",
    authDomain: "mappines-975ab.firebaseapp.com",
    databaseURL: "https://mappines-975ab.firebaseio.com",
    projectId: "mappines-975ab",
    storageBucket: "mappines-975ab.appspot.com",
    messagingSenderId: "367592872707"
}
firebase.initializeApp(config);
export default firebase;


// let userRef = firebase.database().ref('Emotion').push(this.emotionObject);

//emotionObject will exist of userId and clicked emotion

//firebase.auth().signInWithEmailAndPassword(email, password) // checks if user is in the database


// let userFriendRef = firebase.database().ref('Friends').push(this.friendObject);
//friendObject will exist of userId and friends name , username , age and status


// let userRef = firebase.database().ref('lastLocation').push(personObject);

//personObject will exist of userId, Name, LastName and lastknow location

/*  
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentUser = user.email;
    }
});

id = firebase.auth().currentUser.uuid //Gives currentuser id as reference for the achievements display
let achievementRef = firebase.database().ref('Achievements).push(achievement)
*/