import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {calculateFuelSavings, saveFuelSavings} from '../../actions/fuelSavingsActions';
import FuelSavingsForm from '../FuelSavingsForm';

export class FuelSavingsPage extends React.Component {
  saveFuelSavings = () => {
    this.props.saveFuelSavings(this.props.fuelSavings);
  }

  calculateFuelSavings = e => {
    this.props.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  }

  render() {
    return (
      <FuelSavingsForm
        onSaveClick={this.saveFuelSavings}
        onChange={this.calculateFuelSavings}
        fuelSavings={this.props.fuelSavings}
      />
    );
  }
}

FuelSavingsPage.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

const mapDispatchToProps = {
  calculateFuelSavings,
  saveFuelSavings,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuelSavingsPage);
