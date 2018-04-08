const postgresCommand = require("./../../database/postgres-command")
const {tagsSchema} = require("./../../database/schema.js")

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
