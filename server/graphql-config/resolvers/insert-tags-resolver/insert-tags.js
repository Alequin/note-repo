const times = require("lodash/times")
const { postgresCommand, tagsSchema } = require("./../way-point")

const {
  name: tagsTable,
  columns
} = tagsSchema

async function insertTags(tags){
  const command = (
    `INSERT INTO ${tagsTable} (${columns.name.name})
    VALUES ${insertValuesPlaceholders(tags.length)}
    RETURNING ${columns.id.name}, ${columns.name.name}`
  )
  return (await postgresCommand(command, tags)).rows
}

function insertValuesPlaceholders(count){
  return times(count, (number) => `($${number + 1})`).join(", ")
}

module.exports = insertTags
