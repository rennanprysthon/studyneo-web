import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import { Container } from './styles';
import OverviewList from './OverviewList';
import OverviewAdd from './OverviewAdd';

const Home: React.FC = () => (
  <Switch>
    <Route component={OverviewAdd} path="/overview/add" />
    <Route component={OverviewAdd} path="/overview/edit/:overview_id" />
    <Route component={OverviewList} exact path="/" />
  </Switch>
);
export default Home;
