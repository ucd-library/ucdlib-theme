#! /bin/bash

set -e

TAG=${1:-main}
REGISTRY=us-west1-docker.pkg.dev/digital-ucdavis-edu/pub
IMAGE=$REGISTRY/ucdlib-theme-app:$TAG

gcloud beta run deploy ucdlib-theme-app \
  --image=$IMAGE \
  --platform=managed \
  --memory=1Gi \
  --region=us-central1 \
  --project=digital-ucdavis-edu