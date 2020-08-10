import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import '../../../assets/scss/commonComponents/Auth.scss';

export default function Google() {
    return (
        <>
            <div className='googleLogin'>
                <SignUp />
            </div>
            <div className='googleSignUp'>
                <Login />
            </div>
        </>
    );
}