import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Work from './Work';
import Contact from './Contact';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/contact" component={Contact}/>
  </Route>
);
