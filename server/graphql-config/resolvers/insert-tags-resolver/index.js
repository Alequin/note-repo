const insertTags = require("./insert-tags")
const { postgresCommand, tagsSchema } = require("./../way-point")

const {
  name: tagsTable,
  columns
} = tagsSchema

module.exports = async (parent, {names}) => {
  const x = await insertTags(names)
  console.log(x);
  return x
}
