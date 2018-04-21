const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require("./graphql-config/types")
const resolvers = require("./graphql-config/resolvers")

const {serverConfig} = require("config")

const app = express();

const PORT = serverConfig.port || 3000

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
