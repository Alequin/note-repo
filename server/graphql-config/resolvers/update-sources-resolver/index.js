const reject = require("lodash/reject")
const isEmpty = require("lodash/isEmpty")

const postgresCommand = require("database/postgres-command")
const {sourcesSchema} = require("database/name-schema")

const {
  name: sourceTable,
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

const UPDATE_SOURCE_TAG = (
  `UPDATE ${sourceTable}
  SET ${name} = $1, ${islink} = $2, ${location} = $3
  WHERE ${name} = $4
  RETURNING ${id}, ${name}, ${islink}, ${location}`
)

async function updateSourcesResolver(parent, args){
  const newSources = await updateSources(args)
  return reject(newSources, isEmpty)
}

async function updateSources({sources}){
  const newSources = sources.map(async (source) => {
    const oldSource = oldName(source)
    const sqlArgs = [...extractNewSourceValues(source), oldSource]
    const {rows} = await postgresCommand(UPDATE_SOURCE_TAG, sqlArgs)
    return rows[0] || null
  })
  return await Promise.all(newSources)
}

function oldName(args){
  return args[`old${name.name}`]
}

function extractNewSourceValues({update}){
  const {
    [`${name}`]: nextName,
    [`${islink}`]: nextIslink,
    [`${location}`]: nextLocation
  } = update
  return [nextName, nextIslink, nextLocation]
}

module.exports = updateSourcesResolver
