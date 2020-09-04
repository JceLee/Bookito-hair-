// import React, { useState } from 'react';
// import { Divider, Form, Input, Modal, Button } from 'antd';
// import {firebaseAuth} from "../../../config/fbConfig";
// import {sign_in_with_facebook, sign_in_with_google} from "../../../actions/signIn";
//
// export default function SignUp() {
//     const [isSignUpShowing, setIsSignUpShowing] = useState(false);
//
//     const showSignUpModal = () => {
//         setIsSignUpShowing(!isSignUpShowing);
//     };
//
//
//     const handleSignUpCancel = () => {
//         setIsSignUpShowing(!isSignUpShowing);
//     };
//
//     const signUpWithGoogle = () => {
//         firebaseAuth.signInWithPopup(googleProvider).then(function(result) {
//             // The signed-in user info.
//             const user = result.user;
//             console.log("papa1");
//             console.log(result);
//             generateUserDocument(user).then(function (result) {
//                 console.log("papa2");
//                 console.log(result);
//                 dispatch(sign_in_with_google(result));
//             });
//         }).catch(function(error) {
//
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             const credential = error.credential;
//             // ...
//
//             console.log(errorCode);
//             console.log(errorMessage);
//             console.log(email);
//             console.log(credential);
//
//
//         }).then( function() {
//             handleLoginCancel();
//             directProfile();
//         });
//     };
//
//     const signUpWithFaceBook = () => {
//         firebaseAuth.signInWithPopup(faceBookProvider).then(function(result) {
//             // The signed-in user info.
//             const user = result.user;
//             console.log("facebook1");
//             console.log(user);
//             console.log('facebook12');
//             generateUserDocument(user).then(function (result) {
//                 dispatch(sign_in_with_facebook(result));
//             });
//         }).catch(function(error) {
//
//             console.log("22");
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//
//
//             console.log(errorCode);
//             console.log(errorMessage);
//             console.log(email);
//             console.log(credential);
//
//         }).then( function() {
//             handleLoginCancel();
//             directProfile();
//         });
//     };
//
//     return (
//         <div>
//             <div className='inputs'>
//                 <p onClick={showSignUpModal}>
//                     Sign In
//                 </p>
//
//                 <Modal
//                     title='Sign Up'
//                     visible={isSignUpShowing}
//                     onCancel={handleSignUpCancel}
//                     cancelButtonProps={{ style: { display: 'none' } }}
//                 >
//                     <div>
//                         <div>
//                             <button onClick={signUpWithGoogle} className="loginBtn loginBtn--google">
//                                 Sign in with Google
//                             </button>
//                         </div>
//                         <div>
//                             <button onClick={signUpWithFaceBook} className="loginBtn loginBtn--facebook">
//                                 Sign in with Facebook
//                             </button>
//                         </div>
//                     </div>
//                 </Modal>
//             </div>
//         </div>
//     );
// }