import React, { useContext } from 'react';
// import { Container } from './styles';
import { Auth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(Auth);
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => signOut()}>Sign out</button>
    </div>

  );
};

export default Dashboard;
