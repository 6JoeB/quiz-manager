import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components'

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`
class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                    <LoginButton/>
                    <LogoutButton/>
                </Nav>
            </Container>
        )
    }
}

export default NavBar
// const Navbar = () => {
//     const { isAuthenticated } = useAuth0();

//     return (
//         <>
//             <nav class="nav-bar">
//                 <a class="navlink " href="#">Quizzes</a>
//                 <LoginButton/>
//                 <LogoutButton/>
//             </nav> 
//         </>

//     )
// }

// export default Navbar