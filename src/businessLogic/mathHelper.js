class MathHelper {
  static roundNumber(numberToRound, numberOfDecimalPlaces) {
    if (numberToRound === 0) {
      return 0;
    }

    if (!numberToRound) {
      return '';
    }

    const scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
    return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces)) / Math.pow(10, numberOfDecimalPlaces);
  }

  static addArray(values) { // adds array of values passed.
    const total = values.reduce((previousValue, currentValue) => {
      return previousValue + parseInt(this.convertToPennies(currentValue), 10); // do math in pennies to assure accuracy.
    }, 0);

    return total / 100; // convert back into dollars
  }

  static convertToPennies(value) {
    if (value === 0) {
      return 0;
    }

    let dollarValue = parseFloat(value);
    dollarValue = this.roundNumber(dollarValue, 2); // round to 2 decimal places.
    const dollarValueContainsDecimal = (dollarValue.toString().indexOf('.') !== -1);
    return (dollarValueContainsDecimal) ? parseInt(dollarValue.toString().replace('.', ''), 10) : parseInt(dollarValue, 10) * 100;
  }
}

export default MathHelper;
