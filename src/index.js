/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router'; NOTE - rrV4 -
import { Route } from 'react-router';  // NOTE - rrV4 -
import createHistory from 'history/createBrowserHistory'; // NOTE - rrV4 -
// import routes from './routes'; NOTE - rrv4 -
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

// import { syncHistoryWithStore } from 'react-router-redux'; NOTE - rrV4 -
import { ConnectedRouter } from 'react-router-redux'; // NOTE - rrV4 -

const store = configureStore();
const history = createHistory(); // NOTE - rrV4 -

render(
  <Provider store={store}>
    {/* <Router history={history} routes={routes} /> NOTE - rrv4 - */}
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App}>
          {/* <IndexRoute component={HomePage}/> */}
          <Route path="fuel-savings" component={FuelSavingsPage}/>
          <Route path="about" component={AboutPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
