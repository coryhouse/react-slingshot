import React from 'react';
import PropTypes from 'prop-types';
import {scrubFormatting} from '../utils/numberFormat';

// This is a stateless functional component. (Also known as pure or dumb component)
// More info: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
// And https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d
// Props are being destructured below to extract the savings object to shorten calls within component.
const FuelSavingsResults = ({savings}) => {
  const savingsExist = scrubFormatting(savings.monthly) > 0;
  const savingsClass = savingsExist ? 'savings' : 'loss';
  const resultLabel = savingsExist ? 'Savings' : 'Loss';

  // You can even exclude the return statement below if the entire component is
  // composed within the parentheses. Return is necessary here because some
  // variables are set above.
  return (
    <table>
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
