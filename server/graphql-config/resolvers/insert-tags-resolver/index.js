const insertTags = require("./insert-tags")

const postgresCommand = require("_common/database/postgres-command")
const {tagsSchema} = require("_common/database/schema")

const {
  name: tagsTable,
  columns
} = tagsSchema

module.exports = async (_parent, {names}) => {
  return await insertTags(names)
}
