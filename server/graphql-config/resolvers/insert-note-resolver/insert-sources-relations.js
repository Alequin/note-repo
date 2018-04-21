const flatten = require("lodash/flatten")
const postgresCommand = require("database/postgres-command")
const {noteSourcesSchema} = require("database/name-schema")
const placeholderSet = require("./../util/placeholder-set")

const {
  name,
  columns: {
    noteId,
    sourceId
  }
} = noteSourcesSchema

const INSERT_COMMAND_VALUE_COUNT = 2
const INSERT_SOURCE_RELATIONS = (
  `INSERT INTO ${name}
  (${noteId}, ${sourceId})
  VALUES `
)

async function insertTagsRelations(noteId, sourcesIds){
  const sourcesRelationsValues = sourcesIds.map((sourceId) => {
    return [noteId, sourceId]
  })
  await postgresCommand(
    insertSourcesRelationsCommand(sourcesIds.length), flatten(sourcesRelationsValues)
  )
}

function insertSourcesRelationsCommand(sourceCount){
  return INSERT_SOURCE_RELATIONS + placeholderSet(sourceCount, INSERT_COMMAND_VALUE_COUNT)
}

module.exports = insertTagsRelations
