import React from 'react';
import { signIn } from '../api';

const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        console.info("Login clicked")
        await signIn();
    };

    return (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
    );
};

export default GoogleLoginButton;
