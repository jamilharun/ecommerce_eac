import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
    <button className="navMenu" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        <CiLogout className="navMenuIcon" />
        Log Out
    </button>
    );
};

export default LogoutButton;