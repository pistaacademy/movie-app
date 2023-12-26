import React, { createContext, useEffect, useState } from "react";
import { getIsAuth, signInUser } from "../api/auth";

export const AuthContext = createContext();

const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

export default function AuthProvider({ children }) {

    const [authInfo, setAuthInfo] = useState({...defaultAuthInfo});

    const handleLogin = async (email, password) => {

        setAuthInfo({ ...authInfo, isPending: true });
        const {error, user } = await signInUser({email, password})
        if(error) {
            setAuthInfo({ ...authInfo, isPending: false, error });
        }
        setAuthInfo({ profile: {...user}, isPending: false, isLoggedIn: true, error: '' });
    
        localStorage.setItem('auth-token', user.token);
    
    }

    const isAuth = async () => {
        const token = localStorage.getItem('auth-token')
        if (!token) return;

        setAuthInfo({ ...authInfo, isPending: true });
        const {error, user} = await getIsAuth(token)
        if (error) {
            return setAuthInfo({ ...authInfo, isPending: false, error });
        }
        setAuthInfo({ profile: {...user}, isPending: false, isLoggedIn: true, error: '' });
    }

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setAuthInfo({...defaultAuthInfo});
    }

    useEffect(() => {
        isAuth();
    },[]);

    return (
        <AuthContext.Provider value={{ authInfo, handleLogin, isAuth,handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

// handleLogout, isAuth