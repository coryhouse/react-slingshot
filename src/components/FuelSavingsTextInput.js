import React, { Component, PropTypes } from 'react';

class FuelSavingsTextInput extends Component {
	constructor(props, context) {
		super(props, context);

		//why: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(this.props.name, e.target.value);
	}

	render() {
		return (
			<input className="small"
				type="text"
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={this.handleChange} />
		);
	}
}

FuelSavingsTextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default FuelSavingsTextInput;