const set = require("lodash/set")

const {postgresCommand, sourcesSchema, noteSourcesSchema} = require("./../../../way-point")

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
  ON ${sourcesTable}.${sourceColumns.id.name} = ${noteSourcesTable}.${noteSourcesColumns.sourceId.name}
  WHERE ${noteSourcesTable}.${noteSourcesColumns.sourceId.name} = $1`

  const sources = await postgresCommand(query, [note.id])
  return set(note, "sources", sources.rows)
}

module.exports = findTagsOfNotes
