const notesResolver = require("./notes-resolver")
const tagsResolver = require("./tags-resolver")

const insertTagsResolver = require("./insert-tags-resolver")
const updateTagsResolver = require("./update-tags-resolver")

const insertSourcesResolver = require("./insert-sources-resolver")
const updateSourcesResolver = require("./update-sources-resolver")

const resolvers = {
  Query: {
    notes: notesResolver,
    tags: tagsResolver
  },
  Mutation: {
    insertTags: insertTagsResolver,
    updateTags: updateTagsResolver,
    insertSources: insertSourcesResolver,
    updateSources: updateSourcesResolver
  }
}

module.exports = resolvers
