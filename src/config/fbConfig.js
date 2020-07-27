import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {createStore, combineReducers, compose} from 'redux'
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from "react-redux-firebase"
import { createFirestoreInstance, firestoreReducer} from "redux-firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB12lo5h6HnQVSeRqpUdsQDVIjrk7XblFM",
    authDomain: "lookup-91667.firebaseapp.com",
    databaseURL: "https://lookup-91667.firebaseio.com",
    projectId: "lookup-91667",
    storageBucket: "lookup-91667.appspot.com",
    messagingSenderId: "780648292032",
    appId: "1:780648292032:web:e3f073a4f4e27de6545725",
    measurementId: "G-1725NCPMFS"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

// function for adding user
export const addUser = (email, phone) => {
    return db.collection('user')
        .add({

        })
}

export const getDesignerList = () => {
    db.collection('designers').get()
        .then(docs=>{
            docs.forEach(doc=>{
                console.log(doc.data())
            })
        })
    return db.collection('designers')
        .doc().collection('name').get();
}
