const set = require("lodash/set")
const map = require("lodash/map")
const postgresCommand = require("./../../../database/postgres-command")
const buildWhereClause = require("./util/build-where-clause")

async function notesResolver(_, {id, title, tags, ignoreCase}){
  const requestedNotes = await notes(id, title, ignoreCase)
  return await Promise.all(
    map(requestedNotes, findTagsForNote)
  )
}

async function notes(id, title, ignoreCase){
  const command = `SELECT * FROM notes WHERE ${buildWhereClause({id, title}, {ignoreCase})};`;
  const {rows} = await postgresCommand(command)
  return rows
}

async function findTagsForNote(note){
  const {id} = note
  const tags = await postgresCommand(`SELECT * FROM tags WHERE id = '${id}';`)
  return set(note, "tags", tags.rows)
}

module.exports = notesResolver
