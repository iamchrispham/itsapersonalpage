const request = require('request');
const githubToken = require('../../credentials/github/token.js');
var options = {
  url: `https://api.github.com/users/iamchrispham/repos`,
  headers: {
    'User-Agent': 'request',
    'Authorization': githubToken,
  }
}

const GitHubData = (callback) => {
  request(options, (err, resp, body) => {
    if (err) {
      console.log(err.stack)
      callback(err);
    } else {
      var data = JSON.parse(body);
      callback(null, data);
    }
  })
}

module.exports = GitHubData;