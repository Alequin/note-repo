import {tagsSchema} from "./../../database/schema.js"

function createTagsTable(db){
  const tagsColumns = tagsSchema.columns
  const createTable = (
    `CREATE TABLE ${tagsSchema.name} (
      ${tagsColumns.id.name} ${tagsColumns.id.type} PRIMARY KEY,
      ${tagsColumns.name.name} ${tagsColumns.name.type}
    );`
  )
  return db.connect(createTable)
}

export default createTagsTable
