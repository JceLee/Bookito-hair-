import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// firebase.initializeApp({
//   apiKey: "AIzaSyB12lo5h6HnQVSeRqpUdsQDVIjrk7XblFM",
//   authDomain: "lookup-91667.firebaseapp.com",
//   databaseURL: "https://lookup-91667.firebaseio.com",
//   projectId: "lookup-91667",
//   storageBucket: "lookup-91667.appspot.com",
//   messagingSenderId: "780648292032",
//   appId: "1:780648292032:web:e3f073a4f4e27de6545725",
//   measurementId: "G-1725NCPMFS"
// });

firebase.initializeApp({
  apiKey: "AIzaSyBPXmL_e5GrHLghlPanrtE2ji2kechiMY4",
  authDomain: "testserver3-c5044.firebaseapp.com",
  databaseURL: "https://testserver3-c5044.firebaseio.com",
  projectId: "testserver3-c5044",
  storageBucket: "testserver3-c5044.appspot.com",
  messagingSenderId: "306359785634",
  appId: "1:306359785634:web:b2037bd731b971f9435ffb",
  measurementId: "G-Q2HJELY53K",
});

export const firebaseStore = firebase.firestore();
export const firebaseAuth = firebase.auth();
