// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, number, bool, string } = PropTypes;

export const fuelSavings = shape({
  newMpg: PropTypes.oneOf[number,string],
  tradeMpg: PropTypes.oneOf[number,string],
  newPpg: PropTypes.oneOf[number,string],
  tradePpg: PropTypes.oneOf[number,string],
  milesDriven: PropTypes.oneOf[number,string],
  milesDrivenTimeframe: string,
  displayResult: bool,
  dateModified: string,
  necessaryDataIsProvidedToCalculateSavings: bool,
  savings: savings
});

export const savings = shape({
  monthly: PropTypes.oneOf[number,string],
  annual: PropTypes.oneOf[number,string],
  threeYear: PropTypes.oneOf[number,string],
});
