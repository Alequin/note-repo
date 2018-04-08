const {GraphQLServer} = require("graphql-yoga")
const findNotes = require("./util/find-notes")

const resolvers = {
  Query: {
    notes: async (_, {}) => {return await findNotes()},
  },
}

const server = new GraphQLServer(
  {
    typeDefs: './server/schema.graphql',
    resolvers
  }
)
server.start(() => console.log('Server is running on localhost:4000'))
