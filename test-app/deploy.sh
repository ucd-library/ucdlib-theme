#! /bin/bash

set -e

PROJECT_ID=digital-ucdavis-edu
GCR_PROJECT_ID=ucdlib-pubreg

CONTAINER_NAME=ucdlib-theme-demo
DEPLOYMENT_NAME=ucdlib-theme-demo
IMAGE=gcr.io/$GCR_PROJECT_ID/$CONTAINER_NAME

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
npm run dist

gcloud config set project $PROJECT_ID
gcloud builds submit --tag $IMAGE

gcloud beta run deploy $DEPLOYMENT_NAME \
  --image $IMAGE \
  --platform managed \
  --memory=1Gi \
  --region=us-central1