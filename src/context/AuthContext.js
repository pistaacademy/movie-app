import React, { createContext } from "react";
import { signInUser } from "../api/auth";

const AuthContext = createContext();

const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

const handleLogin = async (email, password) => {

    setAuthInfo({ ...authInfo, isPending: true });
    const {error, user } = await signInUser({email, password})
    if(error) {
        setAuthInfo({ ...authInfo, isPending: false, error });
    }
    setAuthInfo({ profile: {...user}, isPending: false, isLoggedIn: true, error: '' });

    localStorage.setItem('auth-token', user.token);

}

export default function AuthProvider({ children }) {

    const [authInfo, setAuthInfo] = useState({...defaultAuthInfo});

    return (
        <AuthContext.Provider value={{ authInfo, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

// handleLogout, isAuth