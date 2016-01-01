// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsCalculatorForm from '../components/FuelSavingsCalculatorForm';
import * as FuelSavingsActions from '../actions/fuelSavingsActions';

class App extends React.Component {
  render() {
    const { fuelSavings, actions } = this.props;

    return (
        <FuelSavingsCalculatorForm fuelSavings={fuelSavings} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FuelSavingsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
