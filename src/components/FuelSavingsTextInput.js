import React from 'react';
import PropTypes from 'prop-types';

const FuelSavingsTextInput = ({name, id, value, placeholder, onChange}) => {
  return (
    <input
      className="small"
      id={id}
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
  id: string,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ])
};

export default FuelSavingsTextInput;
