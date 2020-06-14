import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { Auth } from '../contexts/auth';

const Routes: React.FC = () => {
  const { isLogged } = useContext(Auth);

  return (
    <BrowserRouter>
      {
        isLogged ? <AppRoutes /> : <AuthRoutes />
      }
    </BrowserRouter>

  );
};
export default Routes;
