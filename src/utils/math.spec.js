import {roundNumber, addArray, convertToPennies} from './math';

describe('Math Helper', () => {
  describe('roundNumber', () => {
    it('returns 0 when passed null', () => {
      expect(roundNumber(null)).toEqual('');
    });

    it('returns 0 when passed 0', () => {
      expect(roundNumber(0)).toEqual(0);
    });

    it('rounds up to 1.56 when passed 1.55555 rounded to 2 digits', () => {
      expect(roundNumber(1.55555, 2)).toEqual(1.56);
    });

    it('rounds up to -1.56 when passed -1.55555 rounded to 2 digits', () => {
      expect(roundNumber(-1.55555, 2)).toEqual(-1.56);
    });
  });

  describe('addArray', () => {
    it('returns 0 when passed empty array', () => {
      expect(addArray([])).toEqual(0);
    });

    // it('returns null when passed null', () => {
    // 	should.not.exist(MathHelper.addArray(null));
    // });

    it('returns 6 when passed [2,4]', () => {
      expect(addArray([2, 4])).toEqual(6);
    });

    it('returns 7 when passed [-6, 11, 2]', () => {
      expect(addArray([-6, 11, 2])).toEqual(7);
    });
  });

  describe('convertToPennies', () => {
    it('returns 142 when passed 1.42', () => {
      expect(convertToPennies(1.42)).toEqual(142);
    });

    it('returns 0 when passed 0', () => {
      expect(convertToPennies(0)).toEqual(0);
    });

    it('rounds down to 132 when passed 1.3242', () => {
      expect(convertToPennies(1.3242)).toEqual(132);
    });

    it('rounds up to 133 when passed 1.325', () => {
      expect(convertToPennies(1.325)).toEqual(133);
    });
  });
});
