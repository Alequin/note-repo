const buildWhereClause = require("./util/build-where-clause")
const findNotesData = require("./util/find-notes-data")

const postgresCommand = require("database/postgres-command")
const {notesSchema, tagsSchema, noteTagsSchema} = require("database/name-schema")

const noteTable = notesSchema.name
const noteTagsTable = noteTagsSchema.name
const tagTable = tagsSchema.name

const noteColumns = notesSchema.columns
const noteTagsColumns = noteTagsSchema.columns
const tagColumns = tagsSchema.columns

async function findNotesWithTags(id, title, tags, ignoreCase){
  const inClause = tagNameInClause(tags)
  const whereClause = buildWhereClause({id, title}, {ignoreCase})
  const criteria = whereClause ?
    `${inClause} AND ${whereClause}` :
    inClause

  const requestedNotes = (await noteWithTagsQuery(criteria)).rows
  return await findNotesData(requestedNotes)
}

function tagNameInClause(valuesToConsider){
  const tagNameColumn = tagColumns.name
  const values = valuesToConsider.map((value) => {
    return `'${value}'`
  })
  return `${tagTable}.${tagNameColumn} IN (${values.join(", ")})`
}

async function noteWithTagsQuery(criteria){
  const query = `SELECT * FROM ${tagTable} INNER JOIN ${noteTagsTable}
  ON ${tagTable}.${tagColumns.id} = ${noteTagsTable}.${noteTagsColumns.tagId}
  INNER JOIN ${noteTable}
  ON ${noteTable}.${noteColumns.id} = ${noteTagsTable}.${noteTagsColumns.noteId}
  WHERE ${criteria}`
  return await postgresCommand(query)
}

module.exports = findNotesWithTags
