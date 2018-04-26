const times = require("lodash/times")

const postgresCommand = require("database/postgres-command")
const {tagsSchema} = require("database/name-schema")

const {
  name: tagsTable,
  columns
} = tagsSchema

async function insertTags(tags){
  const command = (
    `INSERT INTO ${tagsTable} (${columns.name.name})
    VALUES ${insertValuesPlaceholders(tags.length)}
    RETURNING ${columns.id}, ${columns.name}`
  )
  return (await postgresCommand(command, tags)).rows
}

function insertValuesPlaceholders(count){
  return times(count, (number) => `($${number + 1})`).join(", ")
}

module.exports = insertTags
