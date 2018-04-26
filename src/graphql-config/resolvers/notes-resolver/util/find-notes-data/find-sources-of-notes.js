const set = require("lodash/set")

const postgresCommand = require("database/postgres-command")
const {sourcesSchema, noteSourcesSchema} = require("database/name-schema")

const noteSourcesTable = noteSourcesSchema.name
const sourcesTable = sourcesSchema.name

const noteSourcesColumns = noteSourcesSchema.columns
const sourceColumns = sourcesSchema.columns

async function findTagsOfNotes(notes){
  return await Promise.all(
    notes.map(findTags)
  )
}

async function findTags(note){
  const query = `SELECT * FROM ${sourcesTable} INNER JOIN ${noteSourcesTable}
  ON ${sourcesTable}.${sourceColumns.id} = ${noteSourcesTable}.${noteSourcesColumns.sourceId}
  WHERE ${noteSourcesTable}.${noteSourcesColumns.noteId} = $1`

  const sources = await postgresCommand(query, [note.id])
  return set(note, "sources", sources.rows)
}

module.exports = findTagsOfNotes
