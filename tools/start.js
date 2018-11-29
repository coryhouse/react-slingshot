/* eslint-disable no-console */

import {chalkError, chalkSuccess} from "./chalkConfig";
import fs from 'fs';
import dotenv from 'dotenv';
import {execSync} from 'child_process';

let config = {
  NODE_ENV: null
};

if (fs.existsSync('.env')) {
  const buf = Buffer.from(fs.readFileSync('.env'));
  config = Object.assign({}, config, dotenv.parse(buf));
}

const env = process.env.NODE_ENV || config.NODE_ENV;

if (!env) {
  console.log(chalkError("NODE_ENV is undefended. Define NODE_ENV within the `.env` file or set NODE_ENV manually. \r\n"));
  process.exit();
}

console.log(chalkSuccess(`Starting app in ${env} mode...`));

if (env === "production") {
  execSync('npm run start:prod', {stdio: "inherit"});
} else {
  execSync('npm run start:dev', {stdio: "inherit"});
}

process.exit();
