import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const LogoutButton = () => {
	const { logout, isAuthenticated, user } = useAuth0();

	return (
		isAuthenticated && (
			<>
				<button className='btn nav-link' onClick={() => logout()}>
					{user.nickname}/Logout
				</button>
			</>
		)
	);
};

export default LogoutButton;
