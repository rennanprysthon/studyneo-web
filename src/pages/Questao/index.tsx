import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QuestaoList from './QuestaoList';
import QuestaoAdd from './QuestaoAdd';

const Questao: React.FC = () => (
  <Switch>
    <Route component={QuestaoAdd} path="/questoes/add" />
    <Route component={QuestaoList} path="/" />
  </Switch>
);

export default Questao;
