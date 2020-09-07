import React, { useState } from "react";
import { Modal } from "antd";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { firebaseAuth, firebaseStore } from "../../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  sign_in_with_facebook,
  sign_in_with_google,
} from "../../../actions/signIn";

export default function LogIn() {
  const [isLoginShowing, setIsLoginShowing] = useState(false);
  const currentUser = useSelector((state) => state.signedInUser.signedInUser);
  const dispatch = useDispatch();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();

  const signInWithGoogle = () => {
    firebaseAuth
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // The signed-in user info.
        const user = result.user;
        generateUserDocument(user).then(function (result) {
          dispatch(sign_in_with_google(result));
        });
      })
      .catch(function (error) {
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
      })
      .then(function () {
        handleLoginCancel();
        directProfile();
      });
  };

  const signInWithFaceBook = () => {
    firebaseAuth
      .signInWithPopup(faceBookProvider)
      .then(function (result) {
        // The signed-in user info.
        const user = result.user;
        console.log("facebook1");
        console.log(user);
        console.log("facebook12");
        generateUserDocument(user).then(function (result) {
          dispatch(sign_in_with_facebook(result));
        });
      })
      .catch(function (error) {
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
      })
      .then(function () {
        handleLoginCancel();
        directProfile();
      });
  };

  const generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = firebaseStore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      const isDesigner = false;
      const fname = "";
      const lname = "";
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
        Cut: [
          { serviceName: "female cut", price: 35, description: "sample data" },
        ],
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
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
      const userDocument = await firebaseStore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data(),
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const testAppointment = () => {
    const appointment = {
      customerId: currentUser.uid,
      designerId: currentUser.uid,
      dateExample: firebase.firestore.Timestamp.fromDate(
        new Date("October 30, 2020")
      ),
      services: {
        Cut: [
          { serviceName: "female cut", price: 35, description: "sample data" },
        ],
      },
      review: { rate: 4.5, content: "very good" },
    };
    firebaseStore
      .collection("appointments")
      .add(appointment)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const history = useHistory();

  const directProfile = () => {
    history.push("/client_profile");
  };

  const showLoginModal = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const handleLoginOk = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const handleLoginCancel = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  return (
    <div>
      <p onClick={showLoginModal}>Sign In</p>

      <Modal
        title="Sign In"
        visible={isLoginShowing}
        onOk={handleLoginOk}
        okText="Continue"
        onCancel={handleLoginCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div>
          <div>
            <button
              onClick={signInWithGoogle}
              className="loginBtn loginBtn--google"
            >
              Sign in with Google
            </button>
          </div>
          <div>
            <button
              onClick={signInWithFaceBook}
              className="loginBtn loginBtn--facebook"
            >
              Sign in with Facebook
            </button>
          </div>
          <div>
            <button onClick={testAppointment}>TestAppointment</button>
          </div>
          <div>
            <button onClick={testAppointment}>TestReview</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
