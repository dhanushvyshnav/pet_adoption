// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        window.sessionStorage.clear();

        setIsLogin(false);

    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated, setIsLogin, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
