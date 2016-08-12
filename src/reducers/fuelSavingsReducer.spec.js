import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './fuelSavingsReducer';

describe('Reducers::FuelSavings', () => {
  const now = new Date();
  const getInitialState = () => {
    return {
      newMpg: '',
      tradeMpg: '',
      newPpg: '',
      tradePpg: '',
      milesDriven: '',
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
    };
  };

  const getAppState = () => {
    return {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, settings: getAppState(), dateModified: now };
    const expected = Object.assign(getAppState(), {dateModified: now});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;

    expect(reducer(getAppState(), action).newMpg).to.equal(expectedMpg);
  });
});
