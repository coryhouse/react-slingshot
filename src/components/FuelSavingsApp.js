import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class FuelSavingsCalculatorForm extends React.Component {
  constructor(props) {
    super(props);

    //why all the binds below? See here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
    this.props.actions.saveFuelSavings = this.props.actions.saveFuelSavings.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.save = this.save.bind(this);
  }

  fuelSavingsKeypress(name, value) {
    this.props.actions.calculateFuelSavings(this.props, name, value);
  }

  onTimeframeChange(e) {
    this.props.actions.calculateFuelSavings(this.props, 'milesDrivenTimeframe', e.target.value);
  }

  save() {
    this.props.actions.saveFuelSavings(this.props.fuelSavingsAppState);
  }

  render() {
    let settings = this.props.fuelSavingsAppState;

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
      </div>
    );
  }
}

FuelSavingsCalculatorForm.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default FuelSavingsCalculatorForm;
