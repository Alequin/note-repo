const {GraphQLServer} = require("graphql-yoga")
const typeDefs = require("./graphql-config/type-definitions")
const resolvers = require("./graphql-config/resolvers")

const server = new GraphQLServer(
  {
    typeDefs,
    resolvers
  }
)
server.start(() => console.log('Server is running on localhost:4000'))
