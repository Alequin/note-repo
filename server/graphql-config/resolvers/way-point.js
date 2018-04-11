const postgresCommand = require("./../../../database/postgres-command")
const {
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema,
  noteSourcesSchema
} = require("./../../../database/schema")

module.exports = {
  postgresCommand,
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema,
  noteSourcesSchema
}
