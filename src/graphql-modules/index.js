const deepmerge = require('deepmerge');
const { gql } = require('apollo-server-express');

const {
  resolvers: homeSensorResolvers,
  typeDefs: homeSensorTypeDefs,
} = require('./home-sensor');

const queryTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [queryTypeDefs, homeSensorTypeDefs],
  resolvers: deepmerge({}, homeSensorResolvers),
};
