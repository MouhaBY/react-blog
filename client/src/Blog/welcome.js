import React from 'react';
import LoginButton from '../Components/login-button';


export default function Welcome() {
    return (
        <div>
            <h1>Welcome to your Blog</h1>
            <div>
                <p>Join us</p>
                <LoginButton />        
            </div>
        </div>
    )
}
