import accessDatabase from "./../../database/accessDatabase.js"
import constructDatabase from "./../../database/constructDatabase.js"

import createNotesTable from "./createNotesTable.js"
import createTagsTable from "./createTagsTable.js"
import createSourcesTable from "./createSourcesTable.js"
import createNoteTagsTable from "./createNoteTagsTable.js"
import createNoteSourcesTable from "./createNoteSourcesTable.js"

const makeTable = (database, name, tableBuilder) => {
  const promise = tableBuilder(database)
  console.log(name + " table created")
  return promise
}

constructDatabase.dropDb()
  .then(() => {
    return constructDatabase.createDb()
  })
  .then(() => {
    return makeTable(accessDatabase, "Notes", createNotesTable)
  })
  .then(() => {
    return makeTable(accessDatabase, "Tags", createTagsTable)
  })
  .then(() => {
    return makeTable(accessDatabase, "Note Tags", createNoteTagsTable)
  })
  .then(() => {
    return makeTable(accessDatabase, "Source", createSourcesTable)
  })
  .then(() => {
    return makeTable(accessDatabase, "Note Source", createNoteSourcesTable)
  })
  .catch((err) => {
    console.log(err);
  })
