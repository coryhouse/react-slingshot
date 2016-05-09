// This script removes demo app files
import rimraf from 'rimraf';
import fs from 'fs';
import colors from 'colors'; // eslint-disable-line no-unused-vars

/* eslint-disable no-console */

const pathsToRemove = [
  './src/actions/*',
  './src/businessLogic',
  './src/components/*',
  './src/constants/*',
  './src/containers/*',
  './src/images',
  './src/reducers/*',
  './src/store/store.spec.js',
  './src/styles',
  './src/routes.js',
  './src/index.js'
];

function removePath(path, callback) {
  rimraf(path, error => {
    if (error) throw new Error(error);
    callback();
  });
}

function createSpecFile() {
  const fileContent = '// Must have at least one test file in this directory or Mocha will throw an error.';
  fs.writeFile('./src/components/emptyTest.spec.js', fileContent, error => {
    if (error) throw new Error(error);
  });
}

function createEntryPoint() {
  fs.writeFile('./src/index.js', '// Set up your application entry point here...', error => {
    if (error) throw new Error(error);
  });
}

function createRootReducer() {
  fs.writeFile('./src/reducers/index.js', '// Set up your root reducer here...\n import { combineReducers } from \'redux\';\n export default combineReducers;', error => {
    if (error) throw new Error(error);
  });
}

let numPathsRemoved = 0;
pathsToRemove.map(path => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) { // All paths have been processed
      // Now we can create files since we're done deleting.
      createSpecFile();
      createEntryPoint();
      createRootReducer();
    }
  });
});

console.log('Demo app removed.'.green);
