const postgresConnector = require("./postgres-connector")
const config = require("./../config")

async function postgresCommand(command, values = []){
  const client = await postgresConnector(config.database.path)
  return await new Promise((resolve, reject) => {
    client.query(command, values, (err, res) => {
      if (err) reject(err)
      else resolve(res)
      client.end()
    })
  })
}

module.exports = postgresCommand
