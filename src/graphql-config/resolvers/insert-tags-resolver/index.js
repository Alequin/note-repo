const insertTags = require("./insert-tags")

module.exports = async (_parent, {names}) => {
  return await insertTags(names)
}
