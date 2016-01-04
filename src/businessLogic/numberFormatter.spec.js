import NumberFormatter from './numberFormatter';
import chai from 'chai';

chai.should();

describe('Number Formatter', () => {
	describe('getCurrencyFormattedNumber', () => {
		it('returns $5.50 when passed 5.5', () => {
			NumberFormatter.getCurrencyFormattedNumber(5.5).should.equal("$5.50");
		});
	});

	describe('isInt', () => {
		it('returns true when passed 0', () => {
			NumberFormatter.isInt(0).should.equal(true);
		});

		it('returns false when passed an empty string', () => {
			NumberFormatter.isInt('').should.equal(false);
		});

		it('returns true when passed int as a string', () => {
			NumberFormatter.isInt('5').should.equal(true);
		});
	});

	describe('scrubFormatting', () => {
		it('strips commas and decimals', () => {
			NumberFormatter.scrubFormatting('1,234.56').should.equal('123456');
		});
	});

	describe('getFormattedNumber', () => {
		it('returns 0 if passed 0', () => {
			NumberFormatter.getFormattedNumber(0).should.equal(0);
		});
	});
});
