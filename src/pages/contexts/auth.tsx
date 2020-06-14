import React, { createContext, useEffect, useState } from 'react';
import api from '../../services/api';
// import { Container } from './styles';
interface Admin {
  isLogged: boolean;
  token: string | null;
  refresh_token: string | null;
  signIn(email:string, password:string): Promise<void>;
}
interface Response{
  token:string,
  refreshToken:string
}
const Auth = createContext({} as Admin);

const AuthContext: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>('');
  const [refreshToken, setRefreshToken] = useState<string | null>('');

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post<Response>('/admins/login', { email, password });
      const { token: loggedToken, refreshToken: loggedRefreshToken } = response.data;
      setToken(loggedToken);
      setRefreshToken(loggedRefreshToken);
    } catch (err) {
      alert(err.response.data);
    }
  };

  useEffect(() => {
    async function loadTokens() {
      const loadedToken = localStorage.getItem('@TOKEN');
      const loadedRefreshToken = localStorage.getItem('@REFRESH_TOKEN');
      setToken(loadedToken);
      setRefreshToken(loadedRefreshToken);
    }
    loadTokens();
  }, []);
  return (
    <Auth.Provider
      value={{
        isLogged: !!token,
        refresh_token: refreshToken,
        token,
        signIn,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
