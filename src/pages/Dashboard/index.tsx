import React from 'react';

import { Container, Content } from './styles';
import TopBar from '../../components/TopBar/topbar';
import MenuLateral from '../../components/MenuLateral';

const Dashboard: React.FC = ({ children }) => (
  <Container>
    <MenuLateral />
    <TopBar />
    <Content>
      {children}

    </Content>
  </Container>

);

export default Dashboard;
