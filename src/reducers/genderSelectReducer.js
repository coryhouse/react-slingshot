import {GENDER_SELECTED} from '../constants/genderSelectActionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function genderSelectReducer(state = initialState.genderSelect, action) {
  
    // console.log("Ran reducer with", state, action);
    switch (action.type) {

      case GENDER_SELECTED:
        // Save the gender selected.
        return objectAssign({}, state, { gender: action.gender});
     
      default:
        return state;
    }
  }