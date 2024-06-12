import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const authState = sessionStorage.getItem('isAuthenticated') === 'true';
        const loginState = sessionStorage.getItem('isLogin') === 'true';
        setIsAuthenticated(authState);
        setIsLogin(loginState);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        setIsLogin(true);
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('isLogin', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        setIsLogin(false);
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('isLogin');
        sessionStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated, setIsLogin, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const DataContext = () => {
    return useContext(AuthContext);
};
