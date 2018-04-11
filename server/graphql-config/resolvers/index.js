const notesResolver = require("./notes-resolver")
const insertTagsResolver = require("./insert-tags-resolver")

const resolvers = {
  Query: {
    notes: notesResolver,
  },
  Mutation: {
    insertTags: insertTagsResolver
  }
}

module.exports = resolvers
