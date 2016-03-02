import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

// Destrucuring props for brevity below.
const FuelSavingsForm = ({saveFuelSavings, calculateFuelSavings, appState}) => {
  const onTimeframeChange = function (e) {
    calculateFuelSavings(appState, 'milesDrivenTimeframe', e.target.value);
  };

  const fuelSavingsKeypress = function (name, value) {
    calculateFuelSavings(appState, name, value);
  };

  return (
    <div>
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newMpg" value={appState.newMpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={appState.tradeMpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newPpg" value={appState.newPpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradePpg" value={appState.tradePpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <FuelSavingsTextInput onChange={fuelSavingsKeypress} name="milesDriven" value={appState.milesDriven}/> miles
            per
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={appState.milesDrivenTimeframe}>
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
      <input type="submit" value="Save" onClick={() => saveFuelSavings(appState)}/>
    </div>
  );
};

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default FuelSavingsForm;
