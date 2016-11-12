import webpack from 'webpack';
import config from '../webpack.config.analyzer';

const compiler = webpack(config);

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }

  console.log(stats); // eslint-disable-line no-console
});
