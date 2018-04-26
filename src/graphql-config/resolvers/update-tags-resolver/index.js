const reject = require("lodash/reject")
const isEmpty = require("lodash/isEmpty")

const postgresCommand = require("database/postgres-command")
const {tagsSchema} = require("database/name-schema")

const {
  name: tagsTable,
  columns: {
    id,
    name
  }
} = tagsSchema

const TAG_UPDATE_COMMAND = (
  `UPDATE ${tagsTable}
  SET ${name} = $1
  WHERE ${name} = $2
  RETURNING ${id}, ${name}`
)

async function updateTagsResolver(_parent, {tags}){
  const newTags = await updateTags(tags)
  return reject(newTags, isEmpty)
}

async function updateTags(tags){
  const newTags = tags.map(async (tags) => {
    console.log(TAG_UPDATE_COMMAND);
    const {rows} = await postgresCommand(
      TAG_UPDATE_COMMAND,
      [
        newName(tags),
        oldName(tags)
      ]
    )
    return rows[0] || null
  })
  return await Promise.all(newTags)
}

function oldName(tags){
  return tags[`old${name}`]
}

function newName(tags){
  return tags[`new${name}`]
}

module.exports = updateTagsResolver
