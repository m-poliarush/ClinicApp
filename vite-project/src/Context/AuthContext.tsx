import { createContext, useContext, useEffect, useState } from 'react';
import { LoginRequest } from '../Api/LoginRequest';
import type{ AuthContextType, LoginRequestProps, LoginResponse } from '../TypeModel/Types';
import { RegisterRequest } from '../Api/RegisterRequest';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<LoginResponse | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    }, []);

    const login = async (data : LoginRequestProps) => {
            const response: LoginResponse = await LoginRequest(data);
            setUser(response);
            localStorage.setItem('user', JSON.stringify(response));
        }
 
const registration = async (data: LoginRequestProps) => {
    const response: string = await RegisterRequest(data);
}

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, registration }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext)!;