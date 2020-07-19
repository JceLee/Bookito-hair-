import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


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

class Firebase {
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
        })
        return user;
    }

    async login(email, password) {
        const [user, userErr] = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
        })
        return user;
    }
}

export default new firebase();

