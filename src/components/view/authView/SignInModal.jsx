import React, { useState } from "react";
import { Modal, Divider, Button, Layout } from "antd";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { firebaseAuth, firebaseStore } from "../../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  sign_in_with_facebook,
  sign_in_with_google,
} from "../../../actions/signIn";

export default function SignInModal() {
  const [isLoginShowing, setIsLoginShowing] = useState(false);
  const currentUser = useSelector((state) => state.signIn.currentUser);
  const dispatch = useDispatch();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();

  const signInWithGoogle = () => {
    firebaseAuth
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const user = result.user;
        generateUserDocument(user).then(function (result) {
          dispatch(sign_in_with_google(result));
        });
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      })
      .then(function () {
        handleLoginCancel();
      });
  };

  const signInWithFaceBook = () => {
    firebaseAuth
      .signInWithPopup(faceBookProvider)
      .then(function (result) {
        // The signed-in user info.
        const user = result.user;
        generateUserDocument(user).then(function (result) {
          dispatch(sign_in_with_facebook(result));
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      })
      .then(function () {
        handleLoginCancel();
      });
  };

  const generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = firebaseStore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL, uid } = user;
      const isDesigner = false;
      const fname = displayName;
      const lname = "";
      const location = "Vancouver, BC, Canada";
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
          {
            id: 1,
            service: "Men Cut",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 2,
            service: "Women Cut",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 3,
            service: "Kids Cut",
            price: 15,
            description: "The price may differ",
          },
        ],
        Style: [
          {
            id: 4,
            service: "Men Style",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 5,
            service: "Women Style",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 6,
            service: "Kids Style",
            price: 15,
            description: "The price may differ",
          },
        ],
        Perms: [
          {
            id: 7,
            service: "Men Perms",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 8,
            service: "Women Perms",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 9,
            service: "Kids Perms",
            price: 15,
            description: "The price may differ",
          },
        ],
        Colors: [
          {
            id: 10,
            service: "Men Colors",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 11,
            service: "Women Colors",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 12,
            service: "Kids Colors",
            price: 15,
            description: "The price may differ",
          },
        ],
        Clinic: [
          {
            id: 13,
            service: "Men Clinic",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 14,
            service: "Women Clinic",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 15,
            service: "Kids Clinic",
            price: 15,
            description: "The price may differ",
          },
        ],
        Promo: [
          {
            id: 16,
            service: "Men Promo",
            price: 35,
            description: "The price may differ",
          },
          {
            id: 17,
            service: "Women Promo",
            price: 40,
            description: "The price may differ",
          },
          {
            id: 18,
            service: "Kids Promo",
            price: 15,
            description: "The price may differ",
          },
        ],
      };
      const works = [];
      try {
        await userRef.set({
          isDesigner,
          displayName,
          email,
          photoURL,
          location,
          fname,
          lname,
          phone,
          gender,
          hours,
          services,
          uid,
          works,
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

  const history = useHistory();

  const directProfile = () => {
    history.push("/client_profile");
  };

  const showLoginModal = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const handleLoginCancel = () => {
    setIsLoginShowing(!isLoginShowing);
  };

  const testAccount = (name) => {
    const user = {
      email: "",
      displayName: name,
      photoURL: "",
      uid: name,
    };
    generateUserDocument(user).then(function (result) {
      dispatch(sign_in_with_facebook(result));
    });
  };

  return (
    <div className="signInModalWrapper">
      <p onClick={showLoginModal}>Sign In</p>
      <Modal
        className="signInModal"
        visible={isLoginShowing}
        footer={null}
        title={"Sign In"}
        closable={false}
        onCancel={handleLoginCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div className="signUpBody">
          <h4 className="signUpTitle">Welcome back</h4>
          <label>Sign in with your Google account or Facebook account</label>
          <div>
            <button
              onClick={signInWithGoogle}
              className="loginBtn googleButton"
            >
              Sign in with Google
            </button>
          </div>
          <div>
            <button
              onClick={signInWithFaceBook}
              className="loginBtn facebookButton"
            >
              Sign in with Facebook
            </button>
          </div>
          <p className="loginOptionInfo">
            Bookito don't provide other methods to sign in for this moment.
          </p>
          <Divider> OR </Divider>
          <div>
            <p> Don't have an account? </p>
          </div>
        </div>
        <div>
          <button onClick={() => testAccount("Gina")}>Log in with Gina</button>
        </div>
        <div>
          <button onClick={() => testAccount("KangMin")}>
            Log in with KangMin
          </button>
        </div>
      </Modal>
    </div>
  );
}

{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("joshua")}*/
}
{
  /*  >*/
}
{
  /*    Log in with Joshua*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("Gina")}*/
}
{
  /*  >*/
}
{
  /*    Log in with Gina*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("KangMin")}*/
}
{
  /*  >*/
}
{
  /*    Log in with KangMin*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("Yongju")}*/
}
{
  /*  >*/
}
{
  /*    Log in with Yongju*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("JW")}*/
}
{
  /*  >*/
}
{
  /*    Login with JW*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <button*/
}
{
  /*      onClick={() => testAccount("Erica")}*/
}
{
  /*  >*/
}
{
  /*    Login with Erica*/
}
{
  /*  </button>*/
}
{
  /*</div>*/
}
