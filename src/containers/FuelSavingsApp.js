import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import * as actions from '../actions/fuelSavingsActions';

class FuelSavingsApp extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  }

  save = () => {
    this.props.actions.saveFuelSavings(this.props.appState);
  }

  onTimeframeChange = (e) => {
    this.props.actions.calculateFuelSavings(this.props, 'milesDrivenTimeframe', e.target.value);
  };

  fuelSavingsKeypress = (name, value) => {
    this.props.actions.calculateFuelSavings(this.props, name, value);
  };

  render () {
    const settings = this.props.appState;

    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
              <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={settings.newMpg} /></td>
            </tr>
            <tr>
              <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
              <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg} /></td>
            </tr>
            <tr>
              <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
              <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={settings.newPpg} /></td>
            </tr>
            <tr>
              <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
              <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg} /></td>
            </tr>
            <tr>
              <td><label htmlFor="milesDriven">Miles Driven</label></td>
              <td>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven} /> miles per
                <select name="milesDrivenTimeframe" onChange={this.onTimeframeChange} value={settings.milesDrivenTimeframe}>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Date Modified</label></td>
              <td>{settings.dateModified}</td>
            </tr>
          </tbody>
        </table>

        <hr/>

        {settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings} /> : null}
        <input type="submit" value="Save" onClick={this.save} />

        <hr />
        <Link to="/SamplePage">Go to some other route</Link>
        <br />
        <br />
        <Link to="/foobarbaz">Go to not found route</Link>
      </div>
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
)(FuelSavingsApp);
