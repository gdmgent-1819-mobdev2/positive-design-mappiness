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