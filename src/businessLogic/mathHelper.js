class MathHelper {
  static roundNumber(numberToRound, numberOfDecimalPlaces) {
    if (numberToRound === 0) {
      return 0;
    }

    if (!numberToRound) {
      return '';
    }

    const scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
    return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces))
      / Math.pow(10, numberOfDecimalPlaces);
  }

  static addArray(values) { // adds array of values passed.
    const total = values.reduce((previousValue, currentValue) => (
      // do math in pennies to assure accuracy.
      previousValue + parseInt(this.convertToPennies(currentValue), 10)
    ), 0);

    return total / 100; // convert back into dollars
  }

  static convertToPennies(dollarValue) {
    if (dollarValue === 0) {
      return 0;
    }

    let returnValue = parseFloat(dollarValue);
    returnValue = this.roundNumber(returnValue, 2); // round to 2 decimal places.
    const dollarValueContainsDecimal = (returnValue.toString().indexOf(".") !== -1);
    if (dollarValueContainsDecimal) {
      return parseInt(returnValue.toString().replace('.', ''), 10);
    }
    return parseInt(returnValue, 10) * 100;
  }
}

export default MathHelper;
