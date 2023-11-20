import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import LogoutButton from "./Logout";


export const userAuth = createContext({});

const Profile = () => {
    // Auth0
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
    return <div>Loading ...</div>;
    }

    


    // =============================
    const [goTOHome, setGoToHome] = useState(false)
    if (goTOHome) {return <Navigate to="/home"/>}

    return (

        // <userAuth.Provider value={sub}>

        // </userAuth.Provider>
    isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.sub}</h2>
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <button onClick={()=> {setGoToHome(true)}}>home </button>
            <LogoutButton/>
        </div> 
        
    )


    );
};

export default Profile;