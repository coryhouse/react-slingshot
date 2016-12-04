import webpack from 'webpack';
import config from '../webpack.config.prod';

webpack(config).run((error) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Your app is compiled!');
  }
  return 0;
});
