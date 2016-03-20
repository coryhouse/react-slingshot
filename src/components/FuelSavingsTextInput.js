import React, { Component, PropTypes } from 'react';

import CSSModules from 'react-css-modules';
import styles from './FuelSavingsTextInput.css';

const FuelSavingsTextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input styleName="small"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange} />
	);
};

FuelSavingsTextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default CSSModules(FuelSavingsTextInput, styles);
