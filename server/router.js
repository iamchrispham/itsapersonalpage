const router = require('express').Router();
const { getAllRepos, getReposByName, retroRoute } = require('./controllers.js')


router
  .route('/repos')
  .get(getAllRepos)

router
  .route('/reposByName')
  .get(getReposByName)

router
  .route('/retro')
  .post(retroRoute)

module.exports = router;