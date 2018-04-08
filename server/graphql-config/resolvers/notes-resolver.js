const postgresCommand = require("./../../../database/postgres-command")
const buildWhereClause = require("./util/build-where-clause")

async function notesResolver(_, args){
  const command = `SELECT * FROM notes WHERE ${buildWhereClause(args)};`;
  const {rows} = await postgresCommand(command)
  return rows
}

module.exports = notesResolver
