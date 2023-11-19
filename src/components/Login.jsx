import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { Navigate } from "react-router-dom";



const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    // if (isAuthenticated) {
    //     return <Navigate to='/profile'/> 
    // }

    return <button className='navMenu' onClick={() => loginWithRedirect()}><CiLogin className='navMenuIcon'/> Log In</button>;
};

export default LoginButton;