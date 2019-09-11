const pgClient = require('../database/postgresql.js')
const githubToken = require('../credentials/github/token.js');
const request = require('request');
var options = {
  url: `https://api.github.com/users/iamchrispham/repos`,
  headers: {
    'User-Agent': 'request',
    'Authorization': githubToken,
  }
}

// TODO: data wrangle to insert in database

const getAllRepos = (req, res) => {
  // pgClient.connect((err, client, release) => {
  //   if (err) {
  //     console.log('Error connecting: ', err.stack);
  //   } else {
  //     console.log('Connected to PostgresQL DB');
  //   }
  // })
  // fetch('https://api.github.com/users/iamchrispham/repos')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.error('Error:', err.stack));
  // req.pipe(request('https://api.github.com/users/iamchrispham/repos'))
  request(options, (err, resp, body) => {
    if (err) {
      console.log('Error fetching gitData:', err.stack);
      res.status(404).send('Error grabbing data');
    } else {
      var data = JSON.parse(body);
      console.log('Repository Length:', data.length);
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