/* eslint-disable no-console */
import path from 'path';
import config from '../webpack.config.prod';
import {chalkProcessing, chalkSuccess, chalkError, chalkWarning} from './chalkConfig';
import rimraf from 'rimraf'; 

const configuredTarget = path.resolve(config.output.path);

// Don't clean files that are "too close" to root. By default it is expected
// that the project output would be at least 3 levels below root, like
// /projects/app/dist. This value can be changed by setting the minCleanDepth
// in the config section of package.json.
const minCleanDepth = process.env.npm_package_config_minCleanDepth || 3;

let depth = 0;
configuredTarget.split('/').forEach(function (part) {
  if (part.length) depth++;
});
if (depth < minCleanDepth) {
  console.log(chalkWarning('Not cleaning target, too close to root! Configure a minCleanDepth to override.'));
  process.exit(0);
}

console.log(chalkProcessing('cleaning ' + configuredTarget));
rimraf(configuredTarget, (err) => {
  console.log(err ? chalkError(err) : chalkSuccess('done'));
});





