
const postgresCommand = require("database/postgres-command")
const {tagsSchema: {name: tagsTable}} = require("database/schema")

const TAGS_SQL_COMMAND = `SELECT * FROM ${tagsTable}`

async function tagsResolver(_parent, _args){
  const {rows} = await postgresCommand(TAGS_SQL_COMMAND)
  return rows
}

module.exports = tagsResolver
