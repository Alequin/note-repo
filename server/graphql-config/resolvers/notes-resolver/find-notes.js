const set = require("lodash/set")
const map = require("lodash/map")

const buildWhereClause = require("./util/build-where-clause")
const findNotesData = require("./util/find-notes-data")

const {postgresCommand} = require("./../way-point")
const {notesSchema, tagsSchema, noteTagsSchema} = require("./../../../../database/schema")

const NOTE_SQL_QUERY = `SELECT * FROM ${notesSchema.name}`

const noteTagsTable = noteTagsSchema.name
const tagTable = tagsSchema.name

const noteTagsColumns = noteTagsSchema.columns
const tagColumns = tagsSchema.columns

async function findNotes(id, title, ignoreCase){
  const requestedNotes = await notes(id, title, ignoreCase)
  return await findNotesData(requestedNotes)
}

async function notes(id, title, ignoreCase){
  const criteria = buildWhereClause({id, title}, {ignoreCase});
  const command = criteria ? `${NOTE_SQL_QUERY} WHERE ${criteria}` : NOTE_SQL_QUERY;
  const {rows} = await postgresCommand(command)
  return rows
}

module.exports = findNotes
