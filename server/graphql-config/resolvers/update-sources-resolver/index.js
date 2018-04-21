const reject = require("lodash/reject")
const isEmpty = require("lodash/isEmpty")

const postgresCommand = require("database/postgres-command")
const {sourcesSchema} = require("database/schema")

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

const UPDATE_SOURCE_TAG = (
  `UPDATE ${sourcesSchema.name}
  SET ${name.name} = $1, ${islink.name} = $2, ${location.name} = $3
  WHERE ${name.name} = $4
  RETURNING ${id.name}, ${name.name}, ${islink.name}, ${location.name}`
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
    [`${name.name}`]: nextName,
    [`${islink.name}`]: nextIslink,
    [`${location.name}`]: nextLocation
  } = update
  return [nextName, nextIslink, nextLocation]
}

module.exports = updateSourcesResolver
