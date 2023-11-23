import React, { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'


export const AuthProvider = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()

    useEffect(()=>{
        console.log(userData);
        return console.log("user data has been change");
    },[userData])

    if (userData) {
        <Navigate to='/home'/>
    }

    // const loginAuth = (newValue) => {
    //     setUserData(newValue)
    // }

    // const logoutAuth = (removeValue) => {
    //     setUserData(removeValue)
    // }
    return (

        <AuthProvider.Provider value={{userData, setUserData }}>
            {children}
        </AuthProvider.Provider>
    )
    
}