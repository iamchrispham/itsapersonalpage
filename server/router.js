const router = require('express').Router();
const { getAllRepos, getReposByName } = require('./controllers.js')


router
  .route('/repos')
  .get(getAllRepos)

router
  .route('/reposByName')
  .get(getReposByName)

module.exports = router;