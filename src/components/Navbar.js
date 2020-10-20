import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <nav class="nav-bar">
                <a class="navlink " href="#">Home</a>
                <LoginButton/>
                <LogoutButton/>
            </nav> 
        </>

    )
}

export default Navbar