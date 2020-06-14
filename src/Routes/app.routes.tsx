import React from 'react';
import { Route } from 'react-router-dom';
// import { Container } from './styles';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
  <Route component={Dashboard} exact path="/" />
);

export default AppRoutes;
