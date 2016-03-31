import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';

const FuelSavingsPage = (props) => (
  <FuelSavingsForm
    saveFuelSavings={props.actions.saveFuelSavings}
    calculateFuelSavings={props.actions.calculateFuelSavings}
    appState={props.appState}
  />
);

FuelSavingsForm.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelSavingsPage);
