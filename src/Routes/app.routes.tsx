import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Questao from '../pages/Questao';

const AppRoutes: React.FC = () => (
  <Dashboard>
    <Switch>
      <Route component={Questao} path="/questoes" />
      <Route component={Home} exact path="/" />
    </Switch>
  </Dashboard>
);

export default AppRoutes;
