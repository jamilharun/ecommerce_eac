import React, { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom'


export const AuthProvider = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    const [loggedIn, setLoggedId] = useState(false)


const loginAuth = (newValue) => {

        setUserData(newValue)
        
        console.log(userData);
        
        setLoggedId(true)
    }

    const logoutAuth = () => {
        setUserData(null)
        setLoggedId(false)
    }

    // const logoutAuth = (removeValue) => {
    //     setUserData(removeValue)
    // }
    return (

        <AuthProvider.Provider value={{userData,  loginAuth, loggedIn}}>
            {children}
        </AuthProvider.Provider>
    )
    
}


