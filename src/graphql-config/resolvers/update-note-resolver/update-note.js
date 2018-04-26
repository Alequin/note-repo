const postgresCommand = require("database/postgres-command")
const {notesSchema} = require("database/name-schema")
const updateTagsRelations = require("./update-tags-relations")
const updateSourcesRelations = require("./update-sources-relations")

const {
  name: noteTableName,
  columns: {
    id,
    title,
    summary,
    content,
  }
} = notesSchema

const UPDATE_NOTE_COMMAND = (
  `UPDATE ${noteTableName}
  SET ${title} = $1, ${summary} = $2, ${content} = $3
  WHERE ${id} = $4
  RETURNING ${id}, ${title}, ${summary}, ${content}`
)

async function updateNote({id, title, summary, content, tagsIds, sourcesIds}){
  const {rows: [note]} = await postgresCommand(
    UPDATE_NOTE_COMMAND,
    [title, summary, content, id]
  )

  await updateTagsRelations(id, tagsIds)
  await updateSourcesRelations(id, sourcesIds)

  return note
}

module.exports = updateNote
