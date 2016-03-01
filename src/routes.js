import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App            from './components/App';
import NotFoundPage   from './components/NotFoundPage.js';
import SamplePage     from './components/SamplePage.js';

import FuelSavingsApp from './containers/FuelSavingsApp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FuelSavingsApp} />
    <Route path="samplePage" component={SamplePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
