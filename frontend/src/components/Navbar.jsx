import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Links from "./Links";

const Nav = styled.nav.attrs({
	className: "nav-bar navbar-expand-lg navbar-dark ",
})`
	margin-bottom: 20 px;
`;

class NavBar extends Component {
	render() {
		return (
			<Nav>
				<Links />
				<LoginButton />
				<LogoutButton />
			</Nav>
		);
	}
}

export default NavBar;
