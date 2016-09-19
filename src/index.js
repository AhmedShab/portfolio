import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import App from './components/App';
import routes from './components/routes';
require('!style!css!sass!../style/style.scss');

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
);
