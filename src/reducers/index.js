import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import genderSelectReducer from './genderSelectReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  genderSelect: genderSelectReducer,
  routing: routerReducer
});

export default rootReducer;
