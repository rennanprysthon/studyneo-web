import React from 'react';
import { Route } from 'react-router-dom';
// import { Container } from './styles';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => <Route component={Login} path="/" />;

export default AuthRoutes;
