import chai from 'chai';
import MathHelper from './mathHelper';

chai.should();

describe('Math Helper', () => {
	describe('roundNumber', () => {
		it('returns 0 when passed null', () => {
			MathHelper.roundNumber(null).should.equal('');
		});

		it('returns 0 when passed 0', () => {
			MathHelper.roundNumber(0).should.equal(0);
		});

		it('rounds up to 1.56 when passed 1.55555 rounded to 2 digits', () => {
			MathHelper.roundNumber(1.55555, 2).should.equal(1.56);
		});

		it('rounds up to -1.56 when passed -1.55555 rounded to 2 digits', () => {
			MathHelper.roundNumber(-1.55555, 2).should.equal(-1.56);
		});
	});

	describe('addArray', () => {
		it('returns 0 when passed empty array', () => {
			MathHelper.addArray([]).should.equal(0);
		});

		// it('returns null when passed null', () => {
		// 	should.not.exist(MathHelper.addArray(null));
		// });

		it('returns 6 when passed [2,4]', () => {
			MathHelper.addArray([2,4]).should.equal(6);
		});

		it('returns 7 when passed [-6, 11, 2]', () => {
			MathHelper.addArray([-6, 11, 2]).should.equal(7);
		});
	});

	describe('convertToPennies', () => {
		it('returns 142 when passed 1.42', () => {
			MathHelper.convertToPennies(1.42).should.equal(142);
		});

		it('returns 0 when passed 0', () => {
			MathHelper.convertToPennies(0).should.equal(0);
		});

		it('rounds down to 132 when passed 1.3242', () => {
			MathHelper.convertToPennies(1.3242).should.equal(132);
		});

		it('rounds up to 133 when passed 1.325', () => {
			MathHelper.convertToPennies(1.325).should.equal(133);
		});
	});
});
