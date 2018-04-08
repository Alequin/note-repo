const findNotes = require("./../util/find-notes")

const resolvers = {
  Query: {
    notes: async (_, {}) => {return await findNotes()},
  },
}

module.exports = resolvers
