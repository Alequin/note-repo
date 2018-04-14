const insertTags = require("./insert-tags")
const { postgresCommand, tagsSchema } = require("./../way-point")

const {
  name: tagsTable,
  columns
} = tagsSchema

module.exports = async (_parent, {names}) => {
  return await insertTags(names)
}
