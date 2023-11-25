import React, { useContext } from 'react'
import { AuthProvider } from '../components/UserProvider';


export const useUser = () =>{
    const context = useContext(AuthProvider);
    if (!context) {
        console.error('useUser must be use within auth Provider');
    }
    return context;
}