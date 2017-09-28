import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FuelSavingsPage } from './FuelSavingsPage';
import FuelSavingsForm from '../components/FuelSavingsForm';

Enzyme.configure({ adapter: new Adapter() });

describe('<FuelSavingsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      saveFuelSavings: () => {},
      calculateFuelSavings: () => {},
    };
    const fuelSavings = {};
    const wrapper = shallow(
      <FuelSavingsPage actions={actions} fuelSavings={fuelSavings} />
    );

    expect(wrapper.find(FuelSavingsForm).length).toEqual(1);
  });
});
