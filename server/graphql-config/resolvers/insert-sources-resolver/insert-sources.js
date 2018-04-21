const reduce = require("lodash/reduce")
const size = require("lodash/size")

const postgresCommand = require("database/postgres-command")
const {sourcesSchema} = require("database/schema")

const placeholderSet = require("./placeholder-set")

const sourcesTable = sourcesSchema.name

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

const BASE_INSERT_COMMAND = `INSERT INTO ${sourcesTable}
(${name.name}, ${islink.name}, ${location.name}) VALUES`

async function insertSources(sources){
  const command = (
    `${BASE_INSERT_COMMAND}
      ${commandPlaceholders(sources)}
      RETURNING ${id.name}, ${name.name}, ${islink.name}, ${location.name}`
  )

  const placeholderValues = reduce(sources, (accumulator, {name, islink, location}) => {
    return [...accumulator, name, islink, location]
  }, [])

  const {rows} = await postgresCommand(command, placeholderValues)
  return rows
}

function commandPlaceholders(sources){
  const placeholders = sources.map((source, index) => {
    const keyCount = size(source)
    const maxPlaceholderForSet = index + keyCount
    return placeholderSet(maxPlaceholderForSet, keyCount)
  })
  return placeholders.join(", ")
}

module.exports = insertSources
