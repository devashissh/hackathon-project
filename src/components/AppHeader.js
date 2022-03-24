import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './../pages/Home';
import Page from './../pages/Page';

const AppHeader = () => (
  <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Page' component={Page} />
      </Switch>
    </Router>
);

export default AppHeader;
