import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import FuelSavingsResults from './FuelSavingsResults';

describe('<FuelSavingsResults />', () => {
  it('should display savings when savings exist', () => {
    const savings = {
      monthly: '10',
      annual: '120',
      threeYear: '360'
    };

    const wrapper = shallow(<FuelSavingsResults savings={savings}/>);
    // console.log(wrapper.debug()); // View shallowly rendered component
    const actual = wrapper.find('.fuel-savings-label').text();
    const expected = 'Savings';

    expect(actual).to.equal(expected);
  });

  it('should give values a \'savings\' class when savings exist', () => {
    const savings = {
      monthly: '10',
      annual: '120',
      threeYear: '360'
    };

    const wrapper = shallow(<FuelSavingsResults savings={savings}/>);

    const actual = wrapper.find('.savings').length;
    const expected = 3;

    expect(actual).to.equal(expected);
  });

  it('should display loss when savings don\'t exist', () => {
    const savings = {
      monthly: '-10',
      annual: '-120',
      threeYear: '-360'
    };

    const wrapper = shallow(<FuelSavingsResults savings={savings}/>);

    const actual = wrapper.find('.fuel-savings-label').text();
    const expected = 'Loss';

    expect(actual).to.equal(expected);
  });

  it('should give values a \'loss\' class when savings don\'t exist', () => {
    const savings = {
      monthly: '-10',
      annual: '-120',
      threeYear: '-360'
    };

    const wrapper = shallow(<FuelSavingsResults savings={savings}/>);
    const actual = wrapper.find('.loss').length;
    const expected = 3;

    expect(actual).to.equal(expected);
  });
});
