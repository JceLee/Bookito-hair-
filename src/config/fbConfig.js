import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB12lo5h6HnQVSeRqpUdsQDVIjrk7XblFM',
  authDomain: 'lookup-91667.firebaseapp.com',
  databaseURL: 'https://lookup-91667.firebaseio.com',
  projectId: 'lookup-91667',
  storageBucket: 'lookup-91667.appspot.com',
  messagingSenderId: '780648292032',
  appId: '1:780648292032:web:e3f073a4f4e27de6545725',
  measurementId: 'G-1725NCPMFS',
};

firebase.initializeApp(firebaseConfig);



export const firebaseDB = firebase;
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // The signed-in user info.
    return result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};