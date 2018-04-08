const set = require("lodash/set")
const map = require("lodash/map")
const postgresCommand = require("./../../../database/postgres-command")
const buildWhereClause = require("./util/build-where-clause")

const NOTE_SQL_QUERY = `SELECT * FROM notes`
const TAG_SQL_QUERY = `SELECT * FROM tags`

async function notesResolver(_, {id, title, tags, ignoreCase}){
  const requestedNotes = await notes(id, title, ignoreCase)
  return await Promise.all(
    map(requestedNotes, findTagsForNote)
  )
}

async function notes(id, title, ignoreCase){
  const criteria = buildWhereClause({id, title}, {ignoreCase});
  const command = criteria ? `${NOTE_SQL_QUERY} WHERE ${criteria}` : NOTE_SQL_QUERY;
  const {rows} = await postgresCommand(command)
  return rows
}

async function findTagsForNote(note){
  const {id} = note
  const tags = await postgresCommand(`${TAG_SQL_QUERY} WHERE id = '${id}'`)
  return set(note, "tags", tags.rows)
}

module.exports = notesResolver
