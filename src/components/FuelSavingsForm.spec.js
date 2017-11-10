import React from 'react';
import { shallow } from 'enzyme';
import FuelSavingsForm from './FuelSavingsForm';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import FuelSavingsResults from './FuelSavingsResults';

/* Object builder. Could use test data builder pattern too.
   More info: http://blog.codeleak.pl/2014/06/test-data-builders-and-object-mother.html
   Returns fuel savings object. Overrides default values
   for any properties sent in on args object.
   Example: To get a fuel savings object like the
   default below, but with newMpg set to 10, call with
   getFuelSavings({ newMpg: 10});
*/
function getFuelSavings(args) {
  const defaultFuelSavings = {
    newMpg: 20,
    tradeMpg: 10,
    newPpg: 1.50,
    tradePpg: 1.50,
    milesDriven: 100,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  };

  return {
    ...defaultFuelSavings,
    ...args
  };
}

describe('<FuelSavingsForm />', () => {
  it('should contain <FuelSavingsTextInput /> components', () => {
    const fuelSavings = getFuelSavings();
    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={jest.fn()}
      fuelSavings={fuelSavings}
    />);
    const allInputs = wrapper.find(FuelSavingsTextInput);

    expect(allInputs.length).toEqual(5);
    expect(allInputs.at(0).props().name).toEqual('newMpg');
    expect(allInputs.at(0).props().value).toEqual(fuelSavings.newMpg);
    expect(allInputs.at(1).props().name).toEqual('tradeMpg');
    expect(allInputs.at(1).props().value).toEqual(fuelSavings.tradeMpg);
    expect(allInputs.at(2).props().name).toEqual('newPpg');
    expect(allInputs.at(2).props().value).toEqual(fuelSavings.newPpg);
    expect(allInputs.at(3).props().name).toEqual('tradePpg');
    expect(allInputs.at(3).props().value).toEqual(fuelSavings.tradePpg);
    expect(allInputs.at(4).props().name).toEqual('milesDriven');
    expect(allInputs.at(4).props().value).toEqual(fuelSavings.milesDriven);
  });

  it('should contain options to change miles driven timeframe', () => {
    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={jest.fn()}
      fuelSavings={getFuelSavings()}
    />);
    const expectedOption1 = '<option value="week">Week</option>';
    const expectedOption2 = '<option value="month">Month</option>';
    const expectedOption3 = '<option value="year">Year</option>';

    expect(wrapper.find('select').childAt(0).html()).toEqual(expectedOption1);
    expect(wrapper.find('select').childAt(1).html()).toEqual(expectedOption2);
    expect(wrapper.find('select').childAt(2).html()).toEqual(expectedOption3);
  });

  it('should contain <FuelSavingsResults /> when necessary conditions are met', () => {
    const fuelSavings = getFuelSavings({
      necessaryDataIsProvidedToCalculateSavings: true,
      savings: {
        monthly: 10,
        annual: 120,
        threeYear: 360
      }
    });

    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={jest.fn()}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <FuelSavingsResults /> when necessary conditions are not met', () => {
    const fuelSavings = getFuelSavings();
    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={jest.fn()}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings} />;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should handle save button click', () => {
    const onSaveClick = jest.fn();
    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={onSaveClick}
      onChange={jest.fn()}
      fuelSavings={getFuelSavings()}
    />);

    expect(onSaveClick).not.toBeCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(onSaveClick).toBeCalled();
  });

  it('should submit appState', () => {
    const fuelSavings = getFuelSavings();
    const onSaveClick = jest.fn();
    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={onSaveClick}
      onChange={jest.fn()}
      fuelSavings={fuelSavings}
    />);

    expect(onSaveClick).not.toBeCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(onSaveClick).toBeCalled();
  });


  it('should call onChange when text input changes', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={onChange}
      fuelSavings={getFuelSavings()}
    />);

    const changeEvent = { target: { name: 'newMpg', value: '20' } };

    expect(onChange).not.toBeCalled();
    wrapper.find(FuelSavingsTextInput).first().simulate('change', changeEvent);
    expect(onChange).toBeCalledWith(changeEvent);
  });

  it('should call onChange when timeframe changes', () => {
    const onChange = jest.fn();
    const fuelSavings = getFuelSavings();

    const wrapper = shallow(<FuelSavingsForm
      onSaveClick={jest.fn()}
      onChange={onChange}
      fuelSavings={fuelSavings}
    />);

    const changeEvent = { target: { name: 'timeframe', value: 'year' } };

    expect(onChange).not.toBeCalled();
    wrapper.find('select').simulate('change', changeEvent);
    expect(onChange).toBeCalledWith(changeEvent);
  });
});
