import reducer, {saveFuelSavings, calculateFuelSavings} from './fuelSavingsSlice';
import {getFormattedDateTime} from '../../utils/dates';

describe('Reducers::FuelSavings', () => {
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
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
          monthly: 0,
          annual: 0,
          threeYear: 0
        }
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
          necessaryDataIsProvidedToCalculateSavings: false,
          savings: {
            monthly: 0,
            annual: 0,
            threeYear: 0
          }
        };
      };
      const dateModified = getFormattedDateTime();

      it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();
    
        expect(reducer(undefined, action)).toEqual(expected);
      });

      it('should handle saveFuelSavings', () => {
        const action = saveFuelSavings({dateModified, settings: getAppState() })
        const expected = Object.assign(getAppState(), { dateModified });
    
        expect(reducer(getAppState(), action)).toEqual(expected);
      });

      it('should handle calculateFuelSavings', () => {
        const action = calculateFuelSavings({dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30 });
    
        const expectedMpg = 30;
        const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };
    
        expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
        expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
      });
})