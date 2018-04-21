const flatten = require("lodash/flatten")
const postgresCommand = require("database/postgres-command")
const {noteSourcesSchema} = require("database/name-schema")
const commandWithPlaceholders = require("./command-with-placeholders")

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
  VALUES`
)

async function insertTagsRelations(noteId, sourcesIds){
  const sourcesRelationsValues = sourcesIds.map((sourceId) => {
    return [noteId, sourceId]
  })
  
  const command = commandWithPlaceholders(
    INSERT_SOURCE_RELATIONS,
    sourcesIds.length,
    INSERT_COMMAND_VALUE_COUNT
  )

  await postgresCommand(
    command, flatten(sourcesRelationsValues)
  )
}


module.exports = insertTagsRelations
