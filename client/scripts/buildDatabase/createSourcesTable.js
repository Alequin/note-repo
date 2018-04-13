import {
  sourcesSchema
} from "./../../database/schema.js"

function createSourcesTable(db){
  const sourcesColumns = sourcesSchema.columns
  const createTable = (
    `CREATE TABLE ${sourcesSchema.name} (
      ${sourcesColumns.id.name} ${sourcesColumns.id.type} PRIMARY KEY,
      ${sourcesColumns.name.name} ${sourcesColumns.name.type},
      ${sourcesColumns.islink.name} ${sourcesColumns.islink.type},
      ${sourcesColumns.location.name} ${sourcesColumns.location.type}
    );`
  )
  return db.connect(createTable)
}

export default createSourcesTable
