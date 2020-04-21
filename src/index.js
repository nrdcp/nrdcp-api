const express = require('express');
const apicache = require('apicache');

const { homeSensorLatestHandler } = require('./home-sensor');

const app = express();
const cache = apicache.middleware;

app.get('/', (req, res) => {
  res.send('api I am');
});

app.get('/v1/home-sensor/latest', cache('10 minutes'), homeSensorLatestHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port', port);
});
