import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = useCallback(() => {
        localStorage.removeItem('accessToken');
        setUser(null);
    }, []);

    const loadUser = useCallback(async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const response = await api.get('/user/me');
                setUser(response.data);
            } catch (error) {
                logout();
            }
        }
        setLoading(false);
    }, [logout]);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    const login = useCallback(async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        localStorage.setItem('accessToken', response.data.accessToken);
        await loadUser();
    }, [loadUser]);

    const signup = useCallback(async (name, email, password) => {
        return await api.post('/auth/signup', { name, email, password });
    }, []);

    // For Google Login, we just set the token manually after redirect
    const setToken = useCallback(async (token) => {
        localStorage.setItem('accessToken', token);
        await loadUser();
    }, [loadUser]);

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, setToken, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);