import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FuelSavingsTextInput from './FuelSavingsTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('<FuelSavingsTextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100,
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
  });

  it('should handle change', () => {
    const props = {
      name: 'newMpg',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100,
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', { target: { value: 101 } });
    expect(props.onChange).toBeCalledWith('newMpg', 101);
  });
});
