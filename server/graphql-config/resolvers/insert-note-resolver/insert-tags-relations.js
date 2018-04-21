const flatten = require("lodash/flatten")
const times = require("lodash/times")
const postgresCommand = require("database/postgres-command")
const {noteTagsSchema} = require("database/name-schema")
const commandWithPlaceholders = require("./command-with-placeholders")

const {
  name,
  columns: {
    noteId,
    tagId
  }
} = noteTagsSchema

const INSERT_COMMAND_VALUE_COUNT = 2
const INSERT_TAG_RELATIONS = (
  `INSERT INTO ${name}
  (${noteId}, ${tagId})
  VALUES`
)

async function insertTagsRelations(noteId, tagsIds){
  const tagsRelationsValues = tagsIds.map((tagId) => {
    return [noteId, tagId]
  })

  const command = commandWithPlaceholders(
    INSERT_TAG_RELATIONS,
    tagsIds.length,
    INSERT_COMMAND_VALUE_COUNT
  )

  await postgresCommand(
    command, flatten(tagsRelationsValues)
  )
}

module.exports = insertTagsRelations
