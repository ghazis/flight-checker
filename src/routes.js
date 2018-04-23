import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from './pages/MainPage.js';
import LoadingPage from './pages/LoadingPage.js';

export default (
      <Switch>
        <Route exact path='/home' component={MainPage} />
        <Route path='/loading' component={LoadingPage} />
      </Switch>
);