import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class FuelSavingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateFuelSavings(this.props.appState, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
    this.props.calculateFuelSavings(this.props.appState, name, value);
  }

  save() {
    this.props.saveFuelSavings(this.props.appState);
  }

  render() {
    const {appState} = this.props;

    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={appState.newMpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={appState.tradeMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={appState.newPpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={appState.tradePpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="milesDriven">Miles Driven</label></td>
            <td>
              <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="milesDriven"
                                    value={appState.milesDriven}/>
              miles
              per
              <select name="milesDrivenTimeframe"
                      onChange={this.onTimeframeChange}
                      value={appState.milesDrivenTimeframe}
              >
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Date Modified</label></td>
            <td>{appState.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {appState.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={appState.savings}/>}
        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default FuelSavingsForm;
