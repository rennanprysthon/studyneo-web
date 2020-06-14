import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';
// import { Container } from './styles';
interface Admin {
  isLogged: boolean;
  token: string ;
  refresh_token: string;
  signIn(email:string, password:string): Promise<void>;
  signOut():void
}
interface Response{
  token:string,
  refreshToken:string
}
export const Auth = createContext({} as Admin);

const AuthContext: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post<Response>('/admin/login', { email, password });
      const { token: loggedToken, refreshToken: loggedRefreshToken } = response.data;
      setToken(loggedToken);
      setRefreshToken(loggedRefreshToken);
      localStorage.setItem('@TOKEN', loggedToken);
      localStorage.setItem('@REFRESH_TOKEN', loggedRefreshToken);
    } catch (err) {
      alert(err.response.data[0].message);
    }
  };

  const signOut = async () => {
    await localStorage.clear();
    setToken('');
    setRefreshToken('');
  };
  useEffect(() => {
    const loadedToken = localStorage.getItem('@TOKEN');
    const loadedRefreshToken = localStorage.getItem('@REFRESH_TOKEN');
    if (loadedToken && loadedRefreshToken) {
      setToken(loadedToken);
      setRefreshToken(loadedRefreshToken);
    }
  }, []);
  return (
    <Auth.Provider
      value={{
        isLogged: token.length > 0,
        refresh_token: refreshToken,
        token,
        signIn,
        signOut,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
