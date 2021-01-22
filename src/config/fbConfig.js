import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyB12lo5h6HnQVSeRqpUdsQDVIjrk7XblFM",
  authDomain: "lookup-91667.firebaseapp.com",
  databaseURL: "https://lookup-91667.firebaseio.com",
  projectId: "lookup-91667",
  storageBucket: "lookup-91667.appspot.com",
  messagingSenderId: "780648292032",
  appId: "1:780648292032:web:e3f073a4f4e27de6545725",
  measurementId: "G-1725NCPMFS",
});

// firebase.initializeApp({
//   apiKey: "AIzaSyBp73EsAcCWm38YqoiDmrVXdxf7JnmSSFE",
//   authDomain: "bookito-ac024.firebaseapp.com",
//   databaseURL: "https://bookito-ac024.firebaseio.com",
//   projectId: "bookito-ac024",
//   storageBucket: "bookito-ac024.appspot.com",
//   messagingSenderId: "162806589160",
//   appId: "1:162806589160:web:57deb16e7891c337ec8b5d",
//   measurementId: "G-BJDQ4BQ20C",
// });

// firebase.initializeApp({
//   apiKey: "AIzaSyBPXmL_e5GrHLghlPanrtE2ji2kechiMY4",
//   authDomain: "testserver3-c5044.firebaseapp.com",
//   databaseURL: "https://testserver3-c5044.firebaseio.com",
//   projectId: "testserver3-c5044",
//   storageBucket: "testserver3-c5044.appspot.com",
//   messagingSenderId: "306359785634",
//   appId: "1:306359785634:web:b2037bd731b971f9435ffb",
//   measurementId: "G-Q2HJELY53K",
// });

// firebase.initializeApp({
//     apiKey: "AIzaSyA6elFb7R0JMUkT05FKlLky9VJ85ZZ1cjU",
//     authDomain: "testserver4-e2b2a.firebaseapp.com",
//     databaseURL: "https://testserver4-e2b2a.firebaseio.com",
//     projectId: "testserver4-e2b2a",
//     storageBucket: "testserver4-e2b2a.appspot.com",
//     messagingSenderId: "88499523933",
//     appId: "1:88499523933:web:ac6256decfcab8f3eb58b4",
//     measurementId: "G-88P5D89FHK",
//   });

export const firebaseOrigin = firebase;
export const firebaseStore = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const firebaseDate = firebase.database();
export const firebaseStorage = firebase.storage();
