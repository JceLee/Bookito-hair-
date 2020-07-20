import React from 'react';
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function SignUp() {
  const [isSignUpShowing, setIsSignUpShowing] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const handleSignUpOk = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const handleSignUpCancel = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  return (
    <div>
      <Button
        className='signUp'
        type='primary'
        onClick={showSignUpModal}
        shape='round'
        placement='bottomRight'
      >
        Sign Up
      </Button>
      <Modal
        title='Sign Up'
        visible={isSignUpShowing}
        onOk={handleSignUpOk}
        onCancel={handleSignUpCancel}
      >
        <p>Sign up!</p>
      </Modal>
    </div>
  );
}
