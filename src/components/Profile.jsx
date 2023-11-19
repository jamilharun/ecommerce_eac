import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext } from "react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading ...</div>;
    }

    const userAuth = createContext({user, isAuthenticated});

    return (
    isAuthenticated && (
        <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.sub}</h2>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
    )
    );
};

export default Profile;