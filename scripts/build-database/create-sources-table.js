const postgresCommand = require("./../../database/postgres-command")
const { sourcesSchema } = require("./../../database/schema.js")

const {
  columns: {
    id,
    name,
    type,
    location
  }
} = sourcesSchema

function createSourcesTable(){
  const createTable = (
    `CREATE TABLE ${sourcesSchema.name} (
      ${id.name} ${id.type} PRIMARY KEY,
      ${name.name} ${name.type},
      ${type.name} ${type.type},
      ${location.name} ${location.type}
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createSourcesTable
