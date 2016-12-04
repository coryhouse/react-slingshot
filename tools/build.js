/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config.prod';

console.log('Generating bundle...');

webpack(config).run((error, stats) => {
  console.log(chalkSuccess('Your app is compiled!'));
  return 0;
});
