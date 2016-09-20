import React from 'react';
import {shallow} from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'About';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).toEqual(expected);
  });

  it('should link to an unknown route path', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
