import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import config from './webpack.config.dev';

config.plugins.push(new BundleAnalyzerPlugin());

export default config;
