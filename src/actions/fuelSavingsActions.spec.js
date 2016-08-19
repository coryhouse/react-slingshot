import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './fuelSavingsActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import MockDate from 'mockdate';
import chai, { expect } from 'chai';

import dateHelper from '../utils/dateHelper';

chai.use(sinonChai);

describe('Actions', () => {
  let dateModified;
  before(() => {
    MockDate.set(new Date());
    dateModified = dateHelper.getFormattedDateTime();
  });
  after(() => MockDate.reset());

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
    const dispatch = sinon.spy();
    const expected = {
      type: ActionTypes.SAVE_FUEL_SAVINGS,
      dateModified,
      settings: appState
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveFuelSavings(appState))).to.equal('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveFuelSavings(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).to.have.been.calledWith(expected);
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);
    const expected = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
