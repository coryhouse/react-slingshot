import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { createBrowserHistory } from "history";
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();
const connectRouterHistory = connectRouter(history);

function configureAppStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);

  const isProduction = process.env.NODE_ENV === 'production';

  const store = configureStore({
    reducer: createRootReducer(history), // root reducer with router state,
    preloadedState: initialState,
    // customize the default middleware via options if desired
    middleware: [...getDefaultMiddleware(), reactRouterMiddleware],
    devTools: !isProduction,
  })

  if (!isProduction && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(connectRouterHistory(nextRootReducer));
    });
  }

  return store;
}

export default configureAppStore;
