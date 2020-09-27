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
  apiKey: "AIzaSyBp73EsAcCWm38YqoiDmrVXdxf7JnmSSFE",
  authDomain: "bookito-ac024.firebaseapp.com",
  databaseURL: "https://bookito-ac024.firebaseio.com",
  projectId: "bookito-ac024",
  storageBucket: "bookito-ac024.appspot.com",
  messagingSenderId: "162806589160",
  appId: "1:162806589160:web:57deb16e7891c337ec8b5d",
  measurementId: "G-BJDQ4BQ20C",
});

export const firebaseStore = firebase.firestore();
export const firebaseAuth = firebase.auth();
