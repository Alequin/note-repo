const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require("./src/graphql-config/types")
const resolvers = require("./src/graphql-config/resolvers")

const {serverConfig} = require("config")

const app = express();

const PORT = serverConfig.port || 3000

app.use(express.static('build'));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});