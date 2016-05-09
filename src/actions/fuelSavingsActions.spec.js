import { expect } from 'chai';
import * as ActionCreators from './fuelSavingsActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {
  const appState = {
    newMpg: 20,
    tradeMpg: 10,
    newPpg: 1.50,
    tradePpg: 1.50,
    milesDriven: 100,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  };

  it('should create an action to save fuel savings', () => {
    const expected = {
      type: ActionTypes.SAVE_FUEL_SAVINGS,
      settings: appState
    };

    expect(ActionCreators.saveFuelSavings(appState)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(ActionCreators.saveFuelSavings(appState)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;

    const expected = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      settings: appState,
      fieldName,
      value
    };

    expect(ActionCreators.calculateFuelSavings(appState, fieldName, value)).to.deep.equal(expected);
  });
});
