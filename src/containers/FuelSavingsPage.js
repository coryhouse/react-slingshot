import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';

class FuelSavingsPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    return (
      <FuelSavingsForm
        saveFuelSavings={this.props.actions.saveFuelSavings}
        calculateFuelSavings={this.props.actions.calculateFuelSavings}
        appState={this.props.appState}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
