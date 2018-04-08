const postgresCommand = require("./../../database/postgres-command")

async function findNotes(){
  const command = "SELECT * FROM notes;"
  const {rows} = await postgresCommand(command)
  return rows
}

module.exports = findNotes
