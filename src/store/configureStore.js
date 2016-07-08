// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const isProduction = 'production' === process.env.NODE_ENV;

let enhancer;

if (!isProduction) {
  enhancer = compose(
    // Add other middleware on this line...
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  );
}


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (!isProduction && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
