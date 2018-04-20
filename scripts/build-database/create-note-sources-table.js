const postgresCommand = require("_common/database/postgres-command")
const {
  notesSchema,
  sourcesSchema,
  noteSourcesSchema
} = require("_common/database/schema")

function createNoteSourcesTable(){
  const noteSourcesColumns = noteSourcesSchema.columns
  const createTable = (
    `CREATE TABLE ${noteSourcesSchema.name} (
      ${noteSourcesColumns.id.name} ${noteSourcesColumns.id.type} PRIMARY KEY,
      ${noteSourcesColumns.noteId.name} ${noteSourcesColumns.noteId.type}
      REFERENCES ${notesSchema.name}(${notesSchema.columns.id.name}),
      ${noteSourcesColumns.sourceId.name} ${noteSourcesColumns.sourceId.type}
      REFERENCES ${sourcesSchema.name}(${sourcesSchema.columns.id.name})
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createNoteSourcesTable
