import {
  notesSchema,
  sourcesSchema,
  noteSourcesSchema
} from "./../../database/schema.js"

function createNoteSourcesTable(db){
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
  return db.connect(createTable)
}

export default createNoteSourcesTable
