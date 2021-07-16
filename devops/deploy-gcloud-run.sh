#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR/../test-app

PROJECT_ID=digital-ucdavis-edu
GCR_PROJECT_ID=ucdlib-pubreg

CONTAINER_NAME=ucdlib-theme-demo
DEPLOYMENT_NAME=ucdlib-theme-demo
IMAGE=gcr.io/$GCR_PROJECT_ID/$CONTAINER_NAME

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
npm run dist
node ../docs.js

gcloud config set project $PROJECT_ID
gcloud builds submit --tag $IMAGE

gcloud beta run deploy $DEPLOYMENT_NAME \
  --image $IMAGE \
  --platform managed \
  --memory=1Gi \
  --region=us-central1