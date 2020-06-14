import React from 'react';
import Routes from './Routes';
import AuthContext from './contexts/auth';

const App:React.FC = () => (
  <AuthContext>
    <Routes />
  </AuthContext>
);

export default App;
