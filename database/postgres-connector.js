const pg = require('pg')

async function connectToPostgres(connectionString){
  // https://node-postgres.com/guides/upgrading
  const pool = new pg.Pool({
      connectionString
  })
  return await pool.connect()
}

module.exports = connectToPostgres
