const postgresCommand = require("database/postgres-command")

const {noteTagsSchema} = require("database/name-schema")
const placeholderSets = require("./../util/placeholder-set")
const insertTagsRelations = require("./../util/insert-tags-relations")

const {
  name,
  columns: {
    noteId
  }
} = noteTagsSchema

const DELETE_ALL_TAG_RELATIONS = `DELETE FROM ${name} WHERE ${noteId} = $1`

async function updateTagsRelations(noteId, tagsIds){
  await postgresCommand(DELETE_ALL_TAG_RELATIONS, [noteId])
  tagsIds && await insertTagsRelations(noteId, tagsIds)
}

module.exports = updateTagsRelations
