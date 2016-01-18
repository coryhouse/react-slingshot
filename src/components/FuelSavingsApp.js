import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

function buildFuelSavingsKeypress(props) {
  return function fuelSavingsKeypress(name, value) {
    props.actions.calculateFuelSavings(props, name, value);
  };
}

function buildOnTimeframeChange(props) {
  return function onTimeframeChange(e) {
    props.actions.calculateFuelSavings(props, 'milesDrivenTimeframe', e.target.value);
  };
}

function buildSave(props) {
  return function save() {
    props.actions.saveFuelSavings(props.fuelSavingsAppState);
  };
}

const FuelSavingsCalculatorForm = (props) => {
  const fuelSavingsKeypress = buildFuelSavingsKeypress(props);
  const onTimeframeChange = buildOnTimeframeChange(props);
  const save = buildSave(props);
  const settings = props.fuelSavingsAppState;

  return (
    <div>
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newMpg" value={settings.newMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newPpg" value={settings.newPpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <FuelSavingsTextInput onChange={fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven} /> miles per
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={settings.milesDrivenTimeframe}>
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
      <input type="submit" value="Save" onClick={save} />
    </div>
  );
};

FuelSavingsCalculatorForm.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default FuelSavingsCalculatorForm;
