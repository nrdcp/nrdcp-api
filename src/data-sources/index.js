
const { HomeSensorAPI } = require('./home-sensor');

const getDataSources = () => ({
  homeSensorAPI: new HomeSensorAPI(),
});

module.exports.getDataSources = getDataSources;
