import {notesSchema} from "./../../database/schema.js"

function createNotesTable(db){
  const notesColumns = notesSchema.columns
  const createTable = (
    `CREATE TABLE ${notesSchema.name} (
      ${notesColumns.id.name} ${notesColumns.id.type} PRIMARY KEY,
      ${notesColumns.title.name} ${notesColumns.title.type},
      ${notesColumns.summary.name} ${notesColumns.summary.type},
      ${notesColumns.file.name} ${notesColumns.file.type},
      ${notesColumns.creationDate.name} ${notesColumns.creationDate.type}
    );`
  )
  return db.connect(createTable)
}

export default createNotesTable
