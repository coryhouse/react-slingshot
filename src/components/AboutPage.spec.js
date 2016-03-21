import chai from 'chai';
import cheerio from 'cheerio';
import AboutPage from './AboutPage';
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
describe('About Page Component', () => {
	describe('Page header', () => {
		it('should be called \'About\'', () => {
			//arrange
			const sut = React.createElement(AboutPage);

			//act
			const html = ReactDOMServer.renderToStaticMarkup(sut);
			const $ = cheerio.load(html);
			let header = $('h2').html();

			//assert
			header.should.equal('About');
		});
	});
});
