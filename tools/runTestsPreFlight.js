import glob from 'glob';
import yargs from 'yargs';

const args = yargs.argv;
const globPattern = args.glob;

glob(globPattern, {}, (err, files) => {
  if (files.length === 0) {
    const noTestsMessage = `No tests found matching the glob ${globPattern}. \
Create at least one test or disable tests (not recommended).`;

    console.warn(noTestsMessage); // eslint-disable-line no-console
    process.exit(1); // Returning 1 instead of the normal 0 so that the npm "test" script does not run.
  }
});
