/* eslint-disable import/default */

import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
