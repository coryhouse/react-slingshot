import React, { PropTypes } from 'react';
import { Route } from 'react-router';
import { Switch, NavLink } from 'react-router-dom';
// 'Switch' & 'NavLink' imports have moved from the 'react-router' API to 'react-router-dom' since rrV4;
// Also, IndexLink is replaced by NavLink with the activeStyle attr.
// Switch is required for NotFoundPage to be the last case scenario.

import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
