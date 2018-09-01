import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';

const rootReducer = combineReducers({
  fuelSavings,
});

export default rootReducer;
