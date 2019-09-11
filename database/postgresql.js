const { Pool } = require('pg')
const config = require('../credentials/postgresql/credentials.js')
const pg = new Pool(config);



module.exports = pg;