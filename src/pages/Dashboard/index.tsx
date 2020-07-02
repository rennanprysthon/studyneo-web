import React from 'react';

import { Container } from './styles';
import TopBar from '../../components/TopBar/topbar';
import MenuLateral from '../../components/MenuLateral';

const Dashboard: React.FC = () => (
  <Container>
    <MenuLateral />

    <TopBar />
  </Container>

);

export default Dashboard;
