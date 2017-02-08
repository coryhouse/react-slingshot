import NumberFormatter from './numberFormatter';

describe('Number Formatter', () => {
  describe('getCurrencyFormattedNumber', () => {
    it('returns $5.50 when passed 5.5', () => {
      expect(NumberFormatter.getCurrencyFormattedNumber(5.5)).toEqual('$5.50');
    });
  });

  describe('isInt', () => {
    it('returns true when passed 0', () => {
      expect(NumberFormatter.isInt(0)).toEqual(true);
    });

    it('returns false when passed an empty string', () => {
      expect(NumberFormatter.isInt('')).toEqual(false);
    });

    it('returns true when passed int as a string', () => {
      expect(NumberFormatter.isInt('5')).toEqual(true);
    });
  });

  describe('scrubFormatting', () => {
    it('strips commas and decimals', () => {
      expect(NumberFormatter.scrubFormatting('1,234.56')).toEqual('123456');
    });
  });

  describe('getFormattedNumber', () => {
    it('returns 0 if passed 0', () => {
      expect(NumberFormatter.getFormattedNumber(0)).toEqual(0);
    });

    it('returns empty string if passed empty string', () => {
      expect(NumberFormatter.getFormattedNumber('')).toEqual('');
    });
  });
});
