import chai, {should} from 'chai';
import Calculator from './fuelSavingsCalculator';

describe('Fuel Savings Calculator', () => {
  describe('necessaryDataIsProvidedToCalculateSavings', () => {
    it('returns false when necessary data isn\'t provided', () => {
      //arrange
      let settings = {
        newMpg: 20
      };

      //assert
      Calculator().necessaryDataIsProvidedToCalculateSavings(settings).should.equal(false);
    });

    it('returns true when necessary data is provided', () => {
      //arrange
      let settings = {
        newMpg: 20,
        tradeMpg: 10,
        newPpg: 1.50,
        tradePpg: 1.50,
        milesDriven: 100
      };

      //assert
      Calculator().necessaryDataIsProvidedToCalculateSavings(settings).should.equal(true);
    });
  });

  describe("milesPerMonth", () => {
    it("converts a weekly timeframe to a monthly timeframe", () => {
      //arrange
      const milesPerWeek = 100;

      //act
      const milesPerMonth = Calculator().calculateMilesDrivenPerMonth(milesPerWeek, 'week');

      //assert
      milesPerMonth.should.equal(433.3333333333333);
    });

    it("returns a monthly timeframe untouched", () => {
      //arrange
      const milesPerMonth = 300;

      //act
      const milesPerMonthCalculated = Calculator().calculateMilesDrivenPerMonth(milesPerMonth, 'month');

      //assert
      milesPerMonthCalculated.should.equal(milesPerMonth);
    });

    it("converts a yearly timeframe to a monthly timeframe", () => {
      //arrange
      const milesPerYear = 1200;

      //act
      const milesPerMonth = Calculator().calculateMilesDrivenPerMonth(milesPerYear, 'year');

      //assert
      milesPerMonth.should.equal(100);
    });
  });

  describe("calculateSavingsPerMonth", () => {
    it("returns 29.93 in savings per month with these settings", () => {
      //arrange
      const settings = {
        tradePpg: 3.75,
        tradeMpg: 24,
        newPpg: 3.75,
        newMpg: 38,
        milesDriven: 120,
        milesDrivenTimeframe: 'week'
      };

      //act
      const savingsPerMonth = Calculator().calculateSavingsPerMonth(settings);

      //assert
      savingsPerMonth.should.equal(29.93);
    });

    it("returns 40.83 in savings per month with these settings", () => {
      //arrange
      const settings = {
        tradePpg: 4.15,
        tradeMpg: 24,
        newPpg: 3.75,
        newMpg: 38,
        milesDriven: 550,
        milesDrivenTimeframe: 'month'
      };

      //act
      const savingsPerMonth = Calculator().calculateSavingsPerMonth(settings);

      //assert
      savingsPerMonth.should.equal(40.83);
    });

    it("returns -157.12 in loss per month with these settings", () => {
      //arrange
      const settings = {
        tradePpg: 3.15,
        tradeMpg: 40,
        newPpg: 3.75,
        newMpg: 18,
        milesDriven: 14550,
        milesDrivenTimeframe: 'year'
      };

      //act
      const savingsPerMonth = Calculator().calculateSavingsPerMonth(settings);

      //assert
      savingsPerMonth.should.equal(-157.12);
    });
  });
});
