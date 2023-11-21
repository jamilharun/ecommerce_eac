import React from 'react'


export const AuthProvider = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    return (

        <AuthProvider.Provider value={{userData, setUserData}}>
            {children}
        </AuthProvider.Provider>
    )
    
}