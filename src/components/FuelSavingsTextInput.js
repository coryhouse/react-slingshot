import React from 'react';
import PropTypes from 'prop-types';

const FuelSavingsTextInput = ({name, value, placeholder, onChange}) => {
  return (
    <input
      className="small"
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
  );
};

const { string, func, number, oneOfType } = PropTypes;

FuelSavingsTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ])
};

export default FuelSavingsTextInput;
