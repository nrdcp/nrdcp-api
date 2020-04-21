const { BigQuery } = require('@google-cloud/bigquery');

const bigqueryClient = new BigQuery();

const homeSensorLatestHandler = async (req, res, next) => {
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

  try {
    const [rows] = await bigqueryClient.query(queryOptions);

    res.json({
      data: rows[0],
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports.homeSensorLatestHandler = homeSensorLatestHandler;
