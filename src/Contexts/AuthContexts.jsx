// src/Contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const username = localStorage.getItem('username');
        if (storedToken && email && username) {
            setToken(storedToken);
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const login = (newToken) => {
        setToken(newToken);
        setIsLoggedIn(true);
        localStorage.setItem('token', newToken); // Token speichern
    };

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token'); // Token entfernen
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, setIsLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
