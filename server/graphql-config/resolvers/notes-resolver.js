const postgresCommand = require("./../../../database/postgres-command")
const buildWhereClause = require("./util/build-where-clause")

async function notesResolver(_, {id, title, ignoreCase}){
  const command = `SELECT * FROM notes WHERE ${buildWhereClause({id, title}, {ignoreCase})};`;
  const {rows} = await postgresCommand(command)
  return rows
}

module.exports = notesResolver
