import React, {
  createContext, useEffect, useState, useCallback,
} from 'react';
import { useToasts } from 'react-toast-notifications';
import Session from '../api/session';
// import { Container } from './styles';
interface Admin {
  isLogged: boolean;
  token: string ;
  signIn(email:string, password:string): Promise<void>;
  signOut():void
}
interface Response{
  token:string,
}
export const Auth = createContext({} as Admin);
const AuthContext: React.FC = ({ children }) => {
  const { addToast } = useToasts();
  const [token, setToken] = useState('');

  const signIn = async (email: string, password: string) => {
    if (email.length === 0 || password.length === 0) {
      addToast('Preencha os campos de E-Mail e Senha.', { appearance: 'warning', autoDismiss: true });
      return;
    }
    try {
      const loggedToken = await Session.login(email, password);
      setToken(loggedToken);
      localStorage.setItem('@TOKEN', loggedToken);
    } catch (err) {
      addToast('E-Mail ou senha inválidos, tente novamente.', { appearance: 'error', autoDismiss: true });
    }
  };

  const signOut = useCallback(
    async () => {
      await localStorage.clear();
      setToken('');
    }, [],
  );

  useEffect(() => {
    const loadedToken = localStorage.getItem('@TOKEN');
    if (loadedToken) {
      setToken(loadedToken);
    }
  }, []);
  return (
    <Auth.Provider
      value={{
        isLogged: token.length > 0,
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
