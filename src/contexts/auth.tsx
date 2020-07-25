import React, {
  createContext, useEffect, useState, useCallback,
} from 'react';
import { useToasts } from 'react-toast-notifications';
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
  const { addToast } = useToasts();
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const signIn = async (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      addToast('Preencha os campos de E-Mail e Senha.', { appearance: 'warning', autoDismiss: true });
      return;
    }
    try {
      const response = await api.post<Response>('/admin/login', { email, password });
      const { token: loggedToken, refreshToken: loggedRefreshToken } = response.data;
      setToken(loggedToken);
      setRefreshToken(loggedRefreshToken);
      localStorage.setItem('@TOKEN', loggedToken);
      localStorage.setItem('@REFRESH_TOKEN', loggedRefreshToken);
    } catch (err) {
      addToast('E-Mail ou senha inválidos, tente novamente.', { appearance: 'error', autoDismiss: true });
    }
  };

  const signOut = useCallback(
    async () => {
      await localStorage.clear();
      setToken('');
      setRefreshToken('');
    }, [],
  );

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
