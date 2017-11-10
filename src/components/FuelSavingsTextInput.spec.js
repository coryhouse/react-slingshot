import React from 'react';
import { shallow } from 'enzyme';
import FuelSavingsTextInput from './FuelSavingsTextInput';

describe('<FuelSavingsTextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);
    const inputType = wrapper.type();
    expect(inputType).toEqual('input');
  });

  it('should handle change', () => {
    const props = {
      name: 'newMpg',
      onChange: jest.fn(),
      placeholder: null,
      value: 100
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);
    const changeEvent = {target: {value: 101}};

    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', changeEvent);
    expect(props.onChange).toBeCalledWith(changeEvent);
  });

  // Example of testing the value of a prop
  it('should apply placeholder', () => {
    const props = {
      name: 'newMpg',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);
    const placeholder = wrapper.find('input').prop('placeholder');
    expect(placeholder).toEqual('Type Here');
  });
});
