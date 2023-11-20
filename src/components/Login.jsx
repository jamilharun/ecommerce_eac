import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { Navigate } from "react-router-dom";
// import { client } from "../utils/sanity";



const LoginButton = () => {
    // const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    // if (isAuthenticated) {
    //     const doc = {
    //         sub: user.sub,
    //         _type: 'user',
    //         name: user.name,
    //         image: user.picture,
    //         email: user.email
    //     };
    //     client.createIfNotExist(doc).then(()=>{
    //         Navigate('/', { replace: true}) 
    //     })
    // }

    return (
        <button className='navMenu' onClick={() => {}}>
            <CiLogin className='navMenuIcon'/>
            Log In
        
        </button>
    
    )
};

export default LoginButton;