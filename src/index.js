const express = require('express');
const cors = require('cors');
const responseCachePlugin = require('apollo-server-plugin-response-cache');
const { ApolloServer } = require('apollo-server-express');

const { getDataSources } = require('./data-sources');
const { typeDefs, resolvers } = require('./graphql-modules');

const app = express();

app.get('/', (req, res) => {
  res.send('api I am');
});

const port = process.env.PORT || 8080;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: getDataSources,
  plugins: [responseCachePlugin()],
});

app.use(cors());

apollo.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log('Listening on port', port);
});
