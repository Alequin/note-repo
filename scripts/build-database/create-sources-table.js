const postgresCommand = require("./../../database/postgres-command")
const { sourcesSchema } = require("./../../database/schema.js")

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

function createSourcesTable(){
  const createTable = (
    `CREATE TABLE ${sourcesSchema.name} (
      ${id.name} ${id.type} PRIMARY KEY,
      ${name.name} ${name.type},
      ${islink.name} ${islink.type},
      ${location.name} ${location.type}
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createSourcesTable
