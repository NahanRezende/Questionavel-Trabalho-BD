import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { DashBoard } from '../pages/DashBoard';
import { CreateSurvey } from '../pages/CreateSurvey';
import { ListSurveys } from '../pages/ListSurveys';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/create-survey" exact component={CreateSurvey} />
        <Route path="/list-surveys" exact component={ListSurveys} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
