import mathHelper from './mathHelper';
import NumberFormatter from './numberFormatter';

// This file uses the factory function pattern instead of a class.
// Just showing an alternative to using a class.
// This declares a function with a private method.
// The public function returns an object literal.
// Could arguably be called FuelSavingCalculatorFactory.
const fuelSavingsCalculator = function () {
  // private
  const calculateMonthlyCost = function (milesDrivenPerMonth, ppg, mpg) {
    const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
    return gallonsUsedPerMonth * ppg;
  };

  // public
  return {
    calculateMilesDrivenPerMonth: function (milesDriven, milesDrivenTimeframe) {
      const monthsPerYear = 12;
      const weeksPerYear = 52;

      switch (milesDrivenTimeframe) {
        case 'week':
          return (milesDriven * weeksPerYear) / monthsPerYear;
        case 'month':
          return milesDriven;
        case 'year':
          return milesDriven / monthsPerYear;
        default:
          throw new Error(`Unknown milesDrivenTimeframe passed: ${milesDrivenTimeframe}`);
      }
    },

    calculateSavingsPerMonth: function (settings) {
      if (!settings.milesDriven) {
        return 0;
      }

      const milesDrivenPerMonth = this.calculateMilesDrivenPerMonth(settings.milesDriven, settings.milesDrivenTimeframe);
      const tradeFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.tradePpg, settings.tradeMpg);
      const newFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.newPpg, settings.newMpg);
      const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

      return mathHelper.roundNumber(savingsPerMonth, 2);
    },


    necessaryDataIsProvidedToCalculateSavings: function (settings) {
      return settings.newMpg > 0
        && settings.tradeMpg > 0
        && settings.newPpg > 0
        && settings.tradePpg > 0
        && settings.milesDriven > 0;
    },

    calculateSavings: function (settings) {
      const monthlySavings = this.calculateSavingsPerMonth(settings);

      return {
        monthly: NumberFormatter.getCurrencyFormattedNumber(monthlySavings),
        annual: NumberFormatter.getCurrencyFormattedNumber(monthlySavings * 12),
        threeYear: NumberFormatter.getCurrencyFormattedNumber(monthlySavings * 12 * 3)
      };
    }
  };
};

export default fuelSavingsCalculator;
