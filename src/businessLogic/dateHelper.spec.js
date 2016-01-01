import chai from 'chai';
import DateHelper from './dateHelper';

chai.should();

describe('Date Helper', () => {
    describe('getFormattedDateTime', () => {
        it('returns mm/dd hh:mm:ss formatted time when passed a date', () => {
            //arrange
            //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
            let date = new Date(99,0,24,11,33,30,0);

            //assert
            DateHelper.getFormattedDateTime(date).should.equal('1/24 11:33:30');
        });

        it('pads single digit minute and second values with leading zeros', () => {
            //arrange
            //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
            let date = new Date(99,0,4,11,3,2,0);

            //assert
            DateHelper.getFormattedDateTime(date).should.equal('1/4 11:03:02');
        });
    });
});
