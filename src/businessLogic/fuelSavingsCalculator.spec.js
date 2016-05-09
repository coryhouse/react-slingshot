import {expect} from 'chai';
import calculator from './fuelSavingsCalculator';

describe('Fuel Savings Calculator', () => {
  describe('necessaryDataIsProvidedToCalculateSavings', () => {
    it('returns false when necessary data isn\'t provided', () => {
      // arrange
      const settings = {
        newMpg: 20
      };

      // assert
      expect(calculator().necessaryDataIsProvidedToCalculateSavings(settings)).to.equal(false);
    });

    it('returns true when necessary data is provided', () => {
      // arrange
      const settings = {
        newMpg: 20,
        tradeMpg: 10,
        newPpg: 1.50,
        tradePpg: 1.50,
        milesDriven: 100
      };

      // assert
      expect(calculator().necessaryDataIsProvidedToCalculateSavings(settings)).to.equal(true);
    });
  });

  describe('milesPerMonth', () => {
    it('converts a weekly timeframe to a monthly timeframe', () => {
      // arrange
      const milesPerWeek = 100;

      // act
      const milesPerMonth = calculator().calculateMilesDrivenPerMonth(milesPerWeek, 'week');

      // assert
      expect(milesPerMonth).to.equal(433.3333333333333);
    });

    it('returns a monthly timeframe untouched', () => {
      // arrange
      const milesPerMonth = 300;

      // act
      const milesPerMonthCalculated = calculator().calculateMilesDrivenPerMonth(milesPerMonth, 'month');

      // assert
      expect(milesPerMonthCalculated).to.equal(milesPerMonth);
    });

    it('converts a yearly timeframe to a monthly timeframe', () => {
      // arrange
      const milesPerYear = 1200;

      // act
      const milesPerMonth = calculator().calculateMilesDrivenPerMonth(milesPerYear, 'year');

      // assert
      expect(milesPerMonth).to.equal(100);
    });
  });

  describe('calculateSavingsPerMonth', () => {
    it('returns 29.93 in savings per month with these settings', () => {
      // arrange
      const settings = {
        tradePpg: 3.75,
        tradeMpg: 24,
        newPpg: 3.75,
        newMpg: 38,
        milesDriven: 120,
        milesDrivenTimeframe: 'week'
      };

      // act
      const savingsPerMonth = calculator().calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal(29.93);
    });

    it('returns 40.83 in savings per month with these settings', () => {
      // arrange
      const settings = {
        tradePpg: 4.15,
        tradeMpg: 24,
        newPpg: 3.75,
        newMpg: 38,
        milesDriven: 550,
        milesDrivenTimeframe: 'month'
      };

      // act
      const savingsPerMonth = calculator().calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal(40.83);
    });

    it('returns -157.12 in loss per month with these settings', () => {
      // arrange
      const settings = {
        tradePpg: 3.15,
        tradeMpg: 40,
        newPpg: 3.75,
        newMpg: 18,
        milesDriven: 14550,
        milesDrivenTimeframe: 'year'
      };

      // act
      const savingsPerMonth = calculator().calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal(-157.12);
    });
  });
});
