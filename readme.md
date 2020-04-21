# nrdcp API

## endpoints

### /v1/home-sensor/latest

## setting up

check correct project is set with `gcloud config list project`
if not, update with `export GOOGLE_CLOUD_PROJECT=$(gcloud config get-value core/project)`

associate with service account (needs at least BigQuery User and Viewer permissions)
`export GOOGLE_APPLICATION_CREDENTIALS=/Users/${USER}/gcp/keys/big-query-api-key.json`

install dependencies `npm install`

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

## todo

* explore cloudbuild config
* cors
* git
* logging





