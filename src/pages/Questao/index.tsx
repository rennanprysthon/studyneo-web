import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QuestaoList from './QuestaoList';
import QuestaoAdd from './QuestaoAdd';

const Questao: React.FC = () => (
  <Switch>
    <Route component={QuestaoAdd} path="/questoes/add" />
    <Route component={QuestaoAdd} exact path="/questoes/edit/:questionId" />
    <Route component={QuestaoList} path="/" />
  </Switch>
);

export default Questao;
