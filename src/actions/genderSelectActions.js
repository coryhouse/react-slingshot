import * as types from '../constants/genderSelectActionTypes';

export function selectGender(gender) {
    return {
      type: types.GENDER_SELECTED,
      gender
    };
  }
