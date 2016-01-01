import chai from 'chai';
import cheerio from 'cheerio';
import FuelSavingsResults from './FuelSavingsResults';
import React from 'react';
import ReactDOMServer from 'react/lib/ReactDOMServer';

chai.should();

/*This test file displays how to test a React component's HTML
  outside of the browser. It uses Cheerio, which is a handy
  server-side library that mimics jQuery. So to test a React
  components HTML for a given state we do the following:
  1. Instantiate the component and pass the desired prop values
  2. Use ReactDOMServer to generate the resulting HTML
  3. Use Cheerio to load the HTML into a fake DOM
  4. Use Cheerio to query the DOM using jQuery style selectors
  5. Assert that certain DOM elements exist with expected values.
 */
describe('Fuel Savings Calculator Results Component', () => {
	describe('Savings label', () => {
		it('displays as savings when savings exist', () => {
			//arrange
			var props = {
				savings: {
					monthly: '10',
					annual: '120',
					threeYear: '360'
				}
			};

			var sut = React.createElement(FuelSavingsResults, props);

			//act
			var html = ReactDOMServer.renderToStaticMarkup(sut);
			let $ = cheerio.load(html);
			var fuelSavingsLabel = $('.fuel-savings-label').html();

			//assert
			fuelSavingsLabel.should.equal('Savings');
		});

		it('display as loss when savings don\'t exist', () => {
			//arrange
			var props = {
				savings: {
					monthly: '-10',
					annual: '-120',
					threeYear: '-360'
				}
			};

			var sut = React.createElement(FuelSavingsResults, props);

			//act
			var html = ReactDOMServer.renderToStaticMarkup(sut);
			let $ = cheerio.load(html);
			var fuelSavingsLabel = $('.fuel-savings-label').html();

			//assert
			fuelSavingsLabel.should.equal('Loss');
		});
	});
});
