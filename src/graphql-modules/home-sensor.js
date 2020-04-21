const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    latestSensorReading: SensorReading!,
  }

  type SensorReading {
    temperature: String,
    humidity: String,
    timestamp: Float,
  }
`;

const resolvers = {
  Query: {
    latestSensorReading: async (parent, args, { dataSources }, info) => {
      info.cacheControl.setCacheHint({ maxAge: 300, scope: 'PUBLIC' });

      const response = await dataSources.homeSensorAPI.getLatestReading();

      return response.data || {};
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
