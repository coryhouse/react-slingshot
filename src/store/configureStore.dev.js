//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  const logger = createLogger();
  let store = createStore(rootReducer, initialState, compose(
    // Add other middleware on this line...
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f //add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
