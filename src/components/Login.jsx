import React from 'react';
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function Login() {
  const [isLoginShowing, setIsLoginShowing] = useState(false);

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
      <Button
        className='login'
        onClick={showLoginModal}
        shape='round'
        placement='bottomRight'
      >
        Login
      </Button>
      <Modal
        title='Login'
        visible={isLoginShowing}
        onOk={handleLoginOk}
        onCancel={handleLoginCancel}
      >
        <p>Login!</p>
      </Modal>
    </div>
  );
}
