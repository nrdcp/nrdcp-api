const { BigQuery } = require('@google-cloud/bigquery');

class HomeSensorAPI {
  constructor() {
    this.bigqueryClient = new BigQuery();
  }

  async getLatestReading() {
    const sqlQuery = `SELECT
      temp as temperature,
      humd as humidity,
      UNIX_MILLIS(TIMESTAMP(time)) as timestamp
      FROM pi3_dht22_dataset.dht22_data tbl
      ORDER BY tbl.time DESC
      LIMIT 1`;

    const queryOptions = {
      query: sqlQuery,
      location: 'US',
    };

    const [rows] = await this.bigqueryClient.query(queryOptions);

    return({
      data: rows[0],
    });
  }
}

module.exports.HomeSensorAPI = HomeSensorAPI;
