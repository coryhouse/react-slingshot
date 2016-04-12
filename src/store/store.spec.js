import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../reducers';
import calculator from '../businessLogic/fuelSavingsCalculator';
import dateHelper from '../businessLogic/dateHelper';

const initialState = {
  fuelSavingsAppState: {
    newMpg: null,
    tradeMpg: null,
    newPpg: null,
    tradePpg: null,
    milesDriven: null,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
    }
  }
};


describe('Store', function() {
  it('should display results when necessary data is provided', function () {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'month',
      displayResults: false,
      dateModified: dateHelper.getFormattedDateTime(new Date()),
      necessaryDataIsProvidedToCalculateSavings: true,
      savings: calculator().calculateSavings(store.getState().fuelSavingsAppState)
    };

    expect(actual.fuelSavingsAppState).to.deep.equal(expected);
  });

  it('should not display results when necessary data is not provided', function() {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      // { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' }
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: null,
      tradePpg: 1.5,
      milesDriven: 100,
      milesDrivenTimeframe: 'month',
      displayResults: false,
      dateModified: dateHelper.getFormattedDateTime(new Date()),
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: { annual: 0, monthly: 0, threeYear: 0 }
    };


    expect(actual.fuelSavingsAppState).to.deep.equal(expected);
  });


  it('should handle a flurry of actions', function () {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
      { type: ActionTypes.SAVE_FUEL_SAVINGS, settings: store.getState() },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'week' },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newMpg', value: 20 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'newPpg', value: 1.50 }
    ];
    actions.forEach(action => store.dispatch(action));

    const lastGoodSavings = calculator().calculateSavings(store.getState().fuelSavingsAppState);

    const moreActions = [
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'tradePpg', value: 0 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
      { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'year' }
    ];

    // actions.push(...moreActions);
    moreActions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 0,
      milesDriven: 100,
      milesDrivenTimeframe: 'year',
      displayResults: false,
      dateModified: dateHelper.getFormattedDateTime(new Date()),
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: lastGoodSavings
    };

    expect(actual.fuelSavingsAppState).to.deep.equal(expected);
  });
});
