
const {postgresCommand, tagsSchema} = require("./../way-point")

const TAGS_SQL_COMMAND = `SELECT * FROM ${tagsSchema.name}`

async function tagsResolver(){
  const {rows} = await postgresCommand(TAGS_SQL_COMMAND)
  return rows
}

module.exports = tagsResolver
