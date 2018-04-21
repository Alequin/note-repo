const postgresCommand = require("database/postgres-command")

const {noteSourcesSchema} = require("database/name-schema")
const placeholderSets = require("./../util/placeholder-set")
const insertSourcesRelations = require("./../util/insert-sources-relations")

const {
  name,
  columns: {
    noteId
  }
} = noteSourcesSchema

const DELETE_ALL_SOURCE_RELATIONS = `DELETE FROM ${name} WHERE ${noteId} = $1`

async function updateSourcesRelations(noteId, sourcesIds){
  await postgresCommand(DELETE_ALL_SOURCE_RELATIONS, [noteId])
  sourcesIds && await insertSourcesRelations(noteId, sourcesIds)
}

module.exports = updateSourcesRelations
