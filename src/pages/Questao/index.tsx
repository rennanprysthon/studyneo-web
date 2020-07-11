import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QuestaoList from './QuestaoList';
import QuestaoAdd from './QuestaoAdd';
import QuestaoContext from './QuestaoContext';

const Questao: React.FC = () => (
  <QuestaoContext>

    <Switch>
      <Route component={QuestaoAdd} path="/questoes/add" />
      <Route component={QuestaoList} path="/" />
    </Switch>
  </QuestaoContext>
);

export default Questao;
