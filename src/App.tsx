import React from 'react';

import Routes from './Routes';
import AuthContext from './contexts/auth';
import GlobalStyles from './styles/GlobalStyles';

const App:React.FC = () => (
  <AuthContext>
    <Routes />

    <GlobalStyles />
  </AuthContext>
);

export default App;
