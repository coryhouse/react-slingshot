// File is used for mocking within jest.
// identity-obj-proxy will return the property name requested as the value
// ex: styles.fooBar === 'fooBar'
// more information: https://facebook.github.io/jest/docs/tutorial-webpack.html
// this is valuable for testing cssModules within Jest, more so as snapshot testing is implemented
module.exports = require('identity-obj-proxy');

