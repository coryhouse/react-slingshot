import rimraf from 'rimraf';
import {chalkSuccess, chalkProcessing} from '../chalkConfig';
import replace from 'replace';
import prompt from 'prompt';
import prompts from './setupPrompts';

/* eslint-disable no-console */

console.log(chalkSuccess('Dependencies installed.'));

// remove the original git repository
rimraf('.git', error => {
  if (error) throw new Error(error);
});
console.log(chalkSuccess('Original Git repository removed.\n'));

// prompt the user for updates to package.json
console.log(chalkProcessing('Updating package.json settings:'));
prompt.start();
prompt.get(prompts, function(err, result) {
  // parse user responses
  // default values provided for fields that will cause npm to complain if left empty
  const responses = [
    {
      key: 'name',
      value: result.projectName || 'new-project'
    },
    {
      key: 'version',
      value: result.version || '0.1.0'
    },
    {
      key: 'author',
      value: result.author
    },
    {
      key: 'license',
      value: result.license || 'MIT'
    },
    {
      key: 'description',
      value: result.description
    },
    // simply use an empty URL here to clear the existing repo URL
    {
      key: 'url',
      value: ''
    }
  ];

  // update package.json with the user's values
  responses.forEach(res => {
    replace({
      regex: `("${res.key}"): "(.*?)"`,
      replacement: `$1: "${res.value}"`,
      paths: ['package.json'],
      recursive: false,
      silent: true
    });
  });

  // remove all setup scripts from the 'tools' folder
  console.log(chalkSuccess('\nSetup complete! Cleaning up...\n'));
  rimraf('./tools/setup', error => {
    if (error) throw new Error(error);
  });
});
