const postgresCommand = require("_common/database/postgres-command")
const {tagsSchema} = require("_common/database/schema")

const {
  columns: {
    id,
    name,
  }
} = tagsSchema

function createTagsTable(){
  const createTable = (
    `CREATE TABLE ${tagsSchema.name} (
      ${id.name} ${id.type} PRIMARY KEY,
      ${name.name} ${name.type}
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createTagsTable
