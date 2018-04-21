const flatten = require("lodash/flatten")
const times = require("lodash/times")
const postgresCommand = require("database/postgres-command")
const {noteTagsSchema} = require("database/name-schema")
const placeholderSet = require("./../util/placeholder-set")

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
  VALUES `
)

async function insertTagsRelations(noteId, tagsIds){
  const tagsRelationsValues = tagsIds.map((tagId) => {
    return [noteId, tagId]
  })
  console.log(insertTagsRelationsCommand(tagsIds.length));
  console.log(flatten(tagsRelationsValues));

  await postgresCommand(
    insertTagsRelationsCommand(tagsIds.length), flatten(tagsRelationsValues)
  )
}

function insertTagsRelationsCommand(tagsCount){
  return INSERT_TAG_RELATIONS + placeholderSet(tagsCount, INSERT_COMMAND_VALUE_COUNT)
}

module.exports = insertTagsRelations
