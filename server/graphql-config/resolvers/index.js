const notesResolver = require("./notes-resolver")
const tagsResolver = require("./tags-resolver")
const insertTagsResolver = require("./insert-tags-resolver")
const insertSourcesResolver = require("./insert-sources-resolver")

const resolvers = {
  Query: {
    notes: notesResolver,
    tags: tagsResolver
  },
  Mutation: {
    insertTags: insertTagsResolver,
    insertSources: insertSourcesResolver
  }
}

module.exports = resolvers
