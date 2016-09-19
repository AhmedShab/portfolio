import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import About from './About';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/about" component={About}/>
  </Route>
);
