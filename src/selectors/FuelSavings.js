import calculator from '../utils/fuelSavingsCalculator';
import dateHelper from '../utils/dateHelper';

// select is pass all of state, this will allow for a smoother refactor to a library such as reselect in the future
export const getFuelSavings = ({ fuelSavings }) => (
  // returning clone to ensure no mutations
  Object.assign({}, fuelSavings, {
    dateModified: dateHelper.getFormattedDateTime(fuelSavings.dateModified),
    savings: calculator().necessaryDataIsProvidedToCalculateSavings(fuelSavings) ? calculator().calculateSavings(fuelSavings) : fuelSavings.savings,
  })
);
