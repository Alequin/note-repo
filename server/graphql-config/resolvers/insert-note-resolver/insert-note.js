const postgresCommand = require("database/postgres-command")
const {notesSchema} = require("database/name-schema")
const insertTagsRelations = require("./../util/insert-tags-relations")
const insertSourcesRelations = require("./../util/insert-sources-relations")

const {
  name: name,
  columns: {
    id,
    title,
    summary,
    content,
    creationDate
  }
} = notesSchema

const INSERT_NOTE = (
  `INSERT INTO ${name}
  (${title}, ${summary}, ${content})
  VALUES
  ($1, $2, $3)
  RETURNING ${id}, ${creationDate}`
)

async function insertNote({title, summary, content, tagsIds, sourcesIds}){
  const {rows} = await postgresCommand(INSERT_NOTE, [title, summary, content])
  const noteId = parseInt(rows[0][id])

  tagsIds && await insertTagsRelations(noteId, tagsIds)
  sourcesIds && await insertSourcesRelations(noteId, sourcesIds)

  return {
    ...rows[0],
    title,
    summary,
    content,
  }
}

module.exports = insertNote
