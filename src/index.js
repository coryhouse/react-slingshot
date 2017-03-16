/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';  // NOTE - rrV4 -
import { NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'; // NOTE - rrV4 -
import configureStore, { history } from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

// import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';


const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <div>
          <NavLink to="/" activeStyle={{ color: 'blue' }}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={{ color: 'blue' }}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={{ color: 'blue' }}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
