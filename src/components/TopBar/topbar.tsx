import React, { useContext } from 'react';

import { MdPowerSettingsNew } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Container, Button } from './styles';
import { Auth } from '../../contexts/auth';

const TopBar: React.FC = () => {
  const { signOut } = useContext(Auth);
  const history = useHistory();
  const handleSignOut = () => {
    signOut();
    history.push('/');
  };
  return (
    <Container>
      <Button onClick={() => handleSignOut()} type="button">
        <MdPowerSettingsNew size={27} color="#fff" />
      </Button>
    </Container>
  );
};

export default TopBar;
