import React, { useState } from 'react';
import { Modal, Button } from 'antd';

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
            <Button className='login' onClick={showLoginModal} shape='round'>
                Login
            </Button>
            <Modal
                title='Login'
                visible={isLoginShowing}
                onOk={handleLoginOk}
                okText='Continue'
                onCancel={handleLoginCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <p>Login!</p>
            </Modal>
        </div>
    );
}