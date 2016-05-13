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
    this.props.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
    this.props.calculateFuelSavings(this.props.fuelSavings, name, value);
  }

  save() {
    this.props.saveFuelSavings(this.props.fuelSavings);
  }

  render() {
    const {fuelSavings} = this.props;

    return (
      <div>
        <h2>Fuel Savings Analysis</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={fuelSavings.newMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={fuelSavings.tradeMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={fuelSavings.newPpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={fuelSavings.tradePpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="milesDriven">Miles Driven</label></td>
            <td>
              <FuelSavingsTextInput
                onChange={this.fuelSavingsKeypress}
                name="milesDriven"
                value={fuelSavings.milesDriven}/>
              miles per
              <select
                name="milesDrivenTimeframe"
                onChange={this.onTimeframeChange}
                value={fuelSavings.milesDrivenTimeframe}>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Date Modified</label></td>
            <td>{fuelSavings.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {fuelSavings.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={fuelSavings.savings}/>}
        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

export default FuelSavingsForm;
