import React, { useState, useEffect } from "react";
import {firebaseAuth, firebaseStore} from "../../../config/fbConfig";
import { sign_out } from "../../../actions/signIn";
import { useDispatch, useSelector } from "react-redux";

export default function SignOut() {
  const [loggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Hi");
  }, [loggedIn]);

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(function () {
        dispatch(sign_out(null));
      })
      .catch(function (error) {
        // An error happened.
      })
      .then(function () {
      });
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <p onClick={signOut}> SignOut </p>
    </>
  );
}
