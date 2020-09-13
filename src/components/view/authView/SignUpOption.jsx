import React, { useState } from 'react';
import { Divider, Form, Input, Modal, Button } from 'antd';
import {firebaseAuth, firebaseStore} from "../../../config/fbConfig";
import {sign_in_with_facebook, sign_in_with_google} from "../../../actions/signIn";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import SignUp from "./SignUp";

export default function SignUpOption(props) {
  const {handleLoginCancel} = props;
  const [isSignUpOptionShowing, setIsSignUpOptionShowing] = useState(false);
  const dispatch = useDispatch();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();

  const showSignUpOptionModal = () => {
    handleLoginCancel();
    setIsSignUpOptionShowing(!isSignUpOptionShowing);
  };


  const handleSignUpOptionCancel = () => {
    setIsSignUpOptionShowing(!isSignUpOptionShowing);
  };

  const signUpWithGoogle = () => {
    firebaseAuth.signInWithPopup(googleProvider).then(function(result) {
      // The signed-in user info.
      const user = result.user;
      console.log("papa1");
      console.log(result);
      generateUserDocument(user).then(function (result) {
        console.log("papa2");
        console.log(result);
        dispatch(sign_in_with_google(result));
      });
    }).catch(function(error) {

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...

      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);


    }).then( function() {
      handleSignUpOptionCancel();
    });
  };

  const signUpWithFaceBook = () => {
    firebaseAuth.signInWithPopup(faceBookProvider).then(function(result) {
      // The signed-in user info.
      const user = result.user;
      console.log("facebook1");
      console.log(user);
      console.log('facebook12');
      generateUserDocument(user).then(function (result) {
        dispatch(sign_in_with_facebook(result));
      });
    }).catch(function(error) {

      console.log("22");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...


      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);

    }).then( function() {
      handleSignUpOptionCancel();
      directProfile();
    });
  };

  const generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = firebaseStore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL, uid } = user;
      const isDesigner = false;
      const fname = "";
      const lname = "";
      const location = "";
      const phone = "";
      const gender = "";
      const hours = {
        Mon: [{ tradingHours: [16, 42], closed: false }],
        Tue: [{ tradingHours: [16, 42], closed: false }],
        Wed: [{ tradingHours: [16, 42], closed: false }],
        Thu: [{ tradingHours: [16, 42], closed: false }],
        Fri: [{ tradingHours: [16, 42], closed: false }],
        Sat: [{ tradingHours: [16, 42], closed: false }],
        Sun: [{ tradingHours: [16, 42], closed: false }],
      };
      const services = {
        Cut: [{"serviceName" : "female cut", "price" : 35, "description" : "sample data"}],
        Style: [],
        Perm: [],
        Color: [],
        Clinic: [],
        Promo: [],
      };
      try {
        await userRef.set({
          isDesigner,
          displayName,
          email,
          photoURL,
          fname,
          lname,
          phone,
          gender,
          hours,
          services,
          uid,
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firebaseStore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const history = useHistory();

  const directProfile = () => {
    history.push("/client_profile");
  };

  return (
      <div>
        <p onClick={showSignUpOptionModal}>
          Sign Up
        </p>

        <Modal
            className="loginModal"
            visible={isSignUpOptionShowing}
            closable={false}
            onCancel={handleLoginCancel}
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
        >
          <div className="loginModalContent">

            <Divider> OR </Divider>
            <div>
              <button className="loginBtn loginBtn--google">
                <SignUp
                 title = {"Continue with Google"}
                />
              </button>
            </div>
            <div>
              <button onClick={signUpWithFaceBook} className="loginBtn loginBtn--facebook">
                <SignUp
                    title = {"Continue with Facebook"}
                />
              </button>
            </div>
          </div>
        </Modal>
      </div>
  );
}