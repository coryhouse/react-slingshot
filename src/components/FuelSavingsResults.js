import React from 'react';
import PropTypes from 'prop-types';
import {scrubFormatting} from '../utils/numberFormat';

const FuelSavingsResults = ({savings}) => {
  const savingsExist = scrubFormatting(savings.monthly) > 0;
  const savingsClass = savingsExist ? 'savings' : 'loss';
  const resultLabel = savingsExist ? 'Savings' : 'Loss';

  return (
    <table id="fuelSavingsResults">
      <tbody>
        <tr>
          <td className="fuel-savings-label">{resultLabel}</td>
          <td>
          <table>
            <tbody>
            <tr>
              <td>Monthly</td>
              <td>1 Year</td>
              <td>3 Year</td>
            </tr>
            <tr>
              <td className={savingsClass}>{savings.monthly}</td>
              <td className={savingsClass}>{savings.annual}</td>
              <td className={savingsClass}>{savings.threeYear}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

FuelSavingsResults.propTypes = {
  savings: PropTypes.object.isRequired
};

export default FuelSavingsResults;
