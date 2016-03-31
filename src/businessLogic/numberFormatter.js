import MathHelper from './mathHelper';

class NumberFormatter {
  static getCurrencyFormattedNumber(value) {
    return (value !== null) ? '$' + this.getFormattedNumber(value) : '';
  }

  static getFormattedNumber(value) {
    if (value === 0) {
      return 0;
    }

    if (!value) {
      return '';
    }

    if (!this.isInt(this.scrubFormatting(value))) {
      return ''; // if it's not a number after scrubbing formatting, just return empty.
    }

    // round if more than 2 decimal points
    let roundedValue = MathHelper.roundNumber(value, 2);
    
    // add commas for 1,000's. RegEx from
    // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    roundedValue = roundedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const roundedValueContainsDecimalPlace = (roundedValue.indexOf('.') !== -1);

    if (roundedValueContainsDecimalPlace) {
      const numbersToTheRightOfDecimal = roundedValue.split('.')[1];

      switch (numbersToTheRightOfDecimal.length) {
        case 0:
          // no decimal necessary since no numbers after decimal
          return roundedValue.replace('.', '');
        case 1:
          return roundedValue + '0';
        default:
          return roundedValue;
      }
    }
    return roundedValue;
  }

  static isInt(n) {
    if (n === '' || n === null) {
      return false;
    }

    return n % 1 === 0;
  }

  static scrubFormatting(value) {
    return value.toString().replace('$', '').replace(',', '').replace('.', '');
  }
}

export default NumberFormatter;
