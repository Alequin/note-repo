
const {postgresCommand, tagsSchema} = require("./../way-point")

const TAGS_SQL_COMMAND = `SELECT * FROM ${tagsSchema.name}`

async function tagsResolver(_parent, _args){
  const {rows} = await postgresCommand(TAGS_SQL_COMMAND)
  return rows
}

module.exports = tagsResolver
