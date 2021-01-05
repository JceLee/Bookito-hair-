import React, { useState, useEffect } from "react";
import { firebaseAuth } from "../../../config/fbConfig";
import { sign_out } from "../../../actions/currentUser";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      .then(function () {});
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Link onClick={signOut} to={"/"}>
        {" "}
        SignOut{" "}
      </Link>
    </>
  );
}
