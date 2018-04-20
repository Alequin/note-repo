const postgresCommand = require("_common/database/postgres-command")
const { sourcesSchema } = require("_common/database/schema")

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
