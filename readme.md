# nrdcp GraphQL API

## credentials

check correct project is set with `gcloud config list project`
if not, update with `export GOOGLE_CLOUD_PROJECT=$(gcloud config get-value core/project)`

associate with service account (needs at least BigQuery User and Viewer permissions)
`export GOOGLE_APPLICATION_CREDENTIALS=/Users/${USER}/gcp/keys/big-query-api-key.json`

## run locally

install dependencies `npm install`
run server `npm start`
navigate to `http://localhost:8080/graphql`

## available data

latest Home Sensor reading (SQL query directly on BiqQuery)

```
query {
  latestSensorReading {
    temperature,
    humidity,
    timestamp
  }
}
```

## build image

```
gcloud builds submit --tag gcr.io/$GOOGLE_CLOUD_PROJECT/nrdcp-api
```

## deploy

```
gcloud run deploy nrdcp-api \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/nrdcp-api \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## TODO

* Logging
* Cloudbuild from git hash





