const notesResolver = require("./notes-resolver")

const resolvers = {
  Query: {
    notes: notesResolver,
  },
}

module.exports = resolvers
