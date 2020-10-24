const rimraf = require('rimraf');
const replace = require("replace");
const chalk = require('chalk');

const chalkSuccess = chalk.green;
const chalkProcessing = chalk.blue;
const chalkWarn = chalk.red;

/* eslint-disable no-console */

module.exports = {

  updatePackage(packageJson) {
    console.log(chalkProcessing('Updating package.json settings:'));

    // update package.json with the user's values
    Object.entries(packageJson).forEach(([key, value]) => {
      replace({
        regex: `("${key}"): "(.*?)"`,
        replacement: `$1: ${JSON.stringify(value)}`,
        paths: ['package.json'],
        recursive: false,
        silent: true
      });
    });

    // reset package.json 'keywords' field to empty state
    replace({
      regex: /"keywords": \[[\s\S]+?\]/,
      replacement: `"keywords": []`,
      paths: ['package.json'],
      recursive: false,
      silent: true,
    });

    // remove setup script from package.json
    replace({
      regex: /\s*"setup":.*,/,
      replacement: "",
      paths: ['package.json'],
      recursive: false,
      silent: true,
    });

    // remove all setup scripts from the 'tools' folder
    console.log(chalkSuccess('\nSetup complete! Cleaning up...\n'));
    rimraf('./tools/setup', error => {
      if (error) throw new Error(error);
    });
  },

  deleteGit(onDelete) {
    console.log(chalkWarn("WARNING:  Preparing to delete local git repository..."));

    rimraf('.git', error => {
      if (error) throw new Error(error);
      console.log(chalkSuccess('Original Git repository removed.\n'));
      onDelete();
    });
  },

  installSuccessMessage() {
    console.log(chalkSuccess('Dependencies installed.'));
  },
};
