const pgClient = require('../database/postgresql.js')
const fetchGitData = require('./api/github.js')


// TODO: data wrangle to insert in database

const getAllRepos = (req, res) => {
  // pgClient.connect((err, client, release) => {
  //   if (err) {
  //     console.log('Error connecting: ', err.stack);
  //   } else {
  //     console.log('Connected to PostgresQL DB');
  //   }
  // })

  fetchGitData((err, data) => {
    if (err) {
      res.status(404).send('Error retrieving data');
    } else {
      res.status(200).send(data);
    }
  })
}

const getReposByName = (req, res) => {
  console.log(`Route: getReposByName: ${req.body}`)
  res.status(200).send(`getReposByName: ${req.body}`)
}

module.exports = {
  getAllRepos,
  getReposByName
}