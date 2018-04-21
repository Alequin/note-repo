const insertTags = require("./insert-tags")

const postgresCommand = require("database/postgres-command")
const {tagsSchema} = require("database/schema")

const {
  name: tagsTable,
  columns
} = tagsSchema

module.exports = async (_parent, {names}) => {
  return await insertTags(names)
}
