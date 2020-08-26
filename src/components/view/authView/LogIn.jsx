import React, {useEffect, useState} from 'react';
import { Link } from "@reach/router";
import { Modal, Button } from 'antd';
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";
import {firebaseAuth, generateUserDocument} from '../../../config/fbConfig';
import {useDispatch, useSelector} from "react-redux";
import {sign_in_with_google} from "../../../actions/signIn";

export default function LogIn() {
    const [isLoginShowing, setIsLoginShowing] = useState(false);

    const signedInUser = useSelector((state) => state.signedInUser.signedInUser);
    const dispatch = useDispatch();

    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () => {
        firebaseAuth.signInWithPopup(provider).then(function(result) {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            console.log(user.email);
            dispatch(sign_in_with_google(user));
            generateUserDocument(user);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...

        }).then( function() {
            handleLoginCancel();
            directProfile();
        });
    };

    const history = useHistory();

    const directProfile = () => {
        history.push('/client_profile');
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

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div>
            <p onClick={showLoginModal}>
                Sign In
            </p>

            <Modal
                title='Sign In'
                visible={isLoginShowing}
                onOk={handleLoginOk}
                okText='Continue'
                onCancel={handleLoginCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div>
                    <div>
                        <button onClick={handleGoogleSignIn}>
                            Sign in with Google
                        </button>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn}>
                            Sign in with Facebook
                        </button>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn}>
                            Sign in with Apple
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}