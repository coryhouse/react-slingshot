// Define prompts for use with npm 'prompts' module in setup script

// exit "cleanly" on Ctrl+C https://github.com/terkelg/prompts/issues/252
const enableTerminalCursor = () => {
  process.stdout.write('\x1B[?25h');
  process.stdout.write('\n')
}
function onState({aborted}) {
  if (aborted) {
    enableTerminalCursor();
    process.exit(1);
  }
}


module.exports = {
  deleteGit: {
    type: 'toggle',
    name: 'shouldDeleteGit',
    message: 'Delete the git repository?',
    initial: true,
    active: 'yes',
    inactive: 'no',
    onState,
  },
  packageJson: [
    {
      type: 'text',
      name: 'projectName',
      message: 'Project name',
      intial: 'new-project',
      validate: (value) =>
        !!value.match(/^[^._][a-z0-9-_~]+$/)
        || 'Limited to: lowercase letters, numbers, period, hyphen, underscore, and tilde; cannot begin with period or underscore.',
        onState,
    },
    {
      type: 'text',
      name: 'version',
      message: 'Version',
      initial: '0.1.0',
      onState,
    },
    {
      type: 'text',
      name: 'author',
      message: 'Author',
      onState,
    },
    {
      type: 'text',
      name: 'license',
      message: 'License',
      initial: 'MIT',
      onState,
    },
    {
      type: 'text',
      name: 'description',
      message: 'Project description',
      onState,
    },
  ],
};
