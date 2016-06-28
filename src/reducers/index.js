import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
