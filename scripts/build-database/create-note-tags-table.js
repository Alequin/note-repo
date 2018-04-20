const postgresCommand = require("_common/database/postgres-command")

const {
  notesSchema,
  tagsSchema,
  noteTagsSchema
} = require("_common/database/schema")

function createNoteTagsTable(db){
  const noteTagsColumns = noteTagsSchema.columns
  const createTable = (
    `CREATE TABLE ${noteTagsSchema.name} (
      ${noteTagsColumns.id.name} ${noteTagsColumns.id.type} PRIMARY KEY,
      ${noteTagsColumns.noteId.name} ${noteTagsColumns.noteId.type}
      REFERENCES ${notesSchema.name}(${notesSchema.columns.id.name}),
      ${noteTagsColumns.tagId.name} ${noteTagsColumns.tagId.type}
      REFERENCES ${tagsSchema.name}(${tagsSchema.columns.id.name})
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createNoteTagsTable
