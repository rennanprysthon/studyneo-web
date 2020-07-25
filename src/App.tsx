import React from 'react';

import { ToastProvider } from 'react-toast-notifications';
import Routes from './Routes';
import AuthContext from './contexts/auth';
import GlobalStyles from './styles/GlobalStyles';

const App:React.FC = () => (

  <ToastProvider>
    <AuthContext>
      <Routes />

      <GlobalStyles />
    </AuthContext>
  </ToastProvider>
);

export default App;
