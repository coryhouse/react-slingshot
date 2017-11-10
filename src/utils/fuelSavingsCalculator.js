import {roundNumber} from './math';
import {getCurrencyFormattedNumber} from './numberFormat';

// Private
function calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
  const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
  return gallonsUsedPerMonth * ppg;
}

// Public
export function calculateMilesDrivenPerMonth(milesDriven, milesDrivenTimeframe) {
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
}

export function calculateSavingsPerMonth(settings) {
  if (!settings.milesDriven) {
    return 0;
  }

  const milesDrivenPerMonth = calculateMilesDrivenPerMonth(settings.milesDriven, settings.milesDrivenTimeframe);
  const tradeFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.tradePpg, settings.tradeMpg);
  const newFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.newPpg, settings.newMpg);
  const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

  return roundNumber(savingsPerMonth, 2);
}

export function necessaryDataIsProvidedToCalculateSavings(settings) {
  return settings.newMpg > 0
    && settings.tradeMpg > 0
    && settings.newPpg > 0
    && settings.tradePpg > 0
    && settings.milesDriven > 0;
}

export function calculateSavings(settings) {
  const monthlySavings = calculateSavingsPerMonth(settings);

  return {
    monthly: getCurrencyFormattedNumber(monthlySavings),
    annual: getCurrencyFormattedNumber(monthlySavings * 12),
    threeYear: getCurrencyFormattedNumber(monthlySavings * 12 * 3)
  };
}
