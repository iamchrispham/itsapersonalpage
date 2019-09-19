const pgClient = require('../database/postgresql.js')
const fetchGitData = require('./api/github.js')
// const socket = require('./MUD/index.js');
const stream = require('stream');


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

const retroRoute = (req, res) => {
  var { postData } = req.body;
  console.log(`Route: retroRoute: ${postData}`)
  res.status(201).send(`Post Data: ${postData}`)
}

module.exports = {
  getAllRepos,
  getReposByName,
  retroRoute
}