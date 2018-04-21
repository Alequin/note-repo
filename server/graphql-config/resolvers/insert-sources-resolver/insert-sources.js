const reduce = require("lodash/reduce")
const size = require("lodash/size")

const postgresCommand = require("database/postgres-command")
const {sourcesSchema} = require("database/schema")

const placeholderSet = require("./../util/placeholder-set")

const sourcesTable = sourcesSchema.name

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

const INSERT_COMMAND_VALUE_COUNT = 3
const BASE_INSERT_COMMAND = `INSERT INTO ${sourcesTable}
(${name.name}, ${islink.name}, ${location.name}) VALUES`



async function insertSources(sources){
  console.log(commandPlaceholders(sources));
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
  return placeholderSet(sources.length, INSERT_COMMAND_VALUE_COUNT)
}

module.exports = insertSources
