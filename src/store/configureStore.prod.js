//Remember to keep the production/development version of this file in sync.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  // Middleware you want to use in production:
  //applyMiddleware(d1, d2, d3),
  // Other store enhancers if you use any
)(createStore);

export default function configureStore(initialState) {
  // Add middleware
  return finalCreateStore(rootReducer, initialState);
}
