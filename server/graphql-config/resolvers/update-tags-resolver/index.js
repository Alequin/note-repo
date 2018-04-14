const reject = require("lodash/reject")
const isEmpty = require("lodash/isEmpty")

const {postgresCommand, tagsSchema} = require("./../way-point")

const {
  columns: {
    id,
    name
  }
} = tagsSchema

const TAG_UPDATE_COMMAND = (
  `UPDATE ${tagsSchema.name}
  SET ${name.name} = $1
  WHERE ${name.name} = $2
  RETURNING ${id.name}, ${name.name}`
)

async function updateTagsResolver(_parent, {tags}){
  const newTags = await updateTags(tags)
  return reject(newTags, isEmpty)
}

async function updateTags(tags){
  const newTags = tags.map(async ({oldName, newName}) => {
    const {rows} = await postgresCommand(TAG_UPDATE_COMMAND, [newName, oldName])
    return rows[0] || null
  })
  return await Promise.all(newTags)
}

module.exports = updateTagsResolver
