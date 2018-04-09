const set = require("lodash/set")

const {postgresCommand} = require("./../../way-point")
const {tagsSchema, noteTagsSchema} = require("./../../../../../database/schema")

const noteTagsTable = noteTagsSchema.name
const tagTable = tagsSchema.name

const noteTagsColumns = noteTagsSchema.columns
const tagColumns = tagsSchema.columns

async function findTagsOfNote(note){
  const query = `SELECT * FROM ${tagTable} INNER JOIN ${noteTagsTable}
  ON ${tagTable}.${tagColumns.id.name} = ${noteTagsTable}.${noteTagsColumns.tagId.name}
  WHERE ${noteTagsTable}.${noteTagsColumns.noteId.name} = $1`

  const tags = await postgresCommand(query, [note.id])
  return set(note, "tags", tags.rows)
}

module.exports = findTagsOfNote
