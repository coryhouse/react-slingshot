const prompts = require("prompts");
const questions = require('./setupPrompts');
const {
  deleteGit,
  updatePackage,
  installSuccessMessage,
} = require('./setupHelper');

installSuccessMessage();

(async () => {
  const {shouldDeleteGit} = await prompts(questions.deleteGit)
  const packageJson = await prompts(questions.packageJson);

  shouldDeleteGit ?
    deleteGit(() => updatePackage(packageJson))
    : updatePackage(packageJson);

})();
