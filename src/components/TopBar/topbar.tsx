import React, { useContext } from 'react';

import { Container } from './styles';
import { Auth } from '../../contexts/auth';

const TopBar: React.FC = () => {
  const { signOut } = useContext(Auth);
  return (
    <Container>
      <ul>
        <li>teste</li>
      </ul>
    </Container>
  );
};

export default TopBar;
