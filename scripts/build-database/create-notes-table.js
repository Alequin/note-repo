const postgresCommand = require("./../../database/postgres-command")
const {notesSchema} = require("./../../database/schema.js")

const {
  name,
  columns: {
    id,
    title,
    summary,
    content,
    creationDate
  }
} = notesSchema

function createNotesTable(){
  const createTable = (
    `CREATE TABLE ${name} (
      ${id.name} ${id.type} PRIMARY KEY,
      ${title.name} ${title.type},
      ${summary.name} ${summary.type},
      ${content.name} ${content.type},
      ${creationDate.name} ${creationDate.type}
    );`
  )
  return postgresCommand(createTable)
}

module.exports = createNotesTable
