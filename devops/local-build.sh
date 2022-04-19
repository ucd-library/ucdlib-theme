#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR/../brand-app

webpack --config webpack-watch.config.js

cp node_modules/@fortawesome/fontawesome-free/js/solid.min.js js/solid.min.js
cp node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js js/fontawesome.min.js

if [[ -d css ]]; then
  rm -rf css
fi
mkdir css

cp node_modules/@ucd-lib/theme-sass/style-ucdlib.css css/style-ucdlib.css
cp node_modules/prismjs/themes/prism.css css/prism.css
cp fonts.css css/fonts.css

repo=$(basename -s .git $(git config --get remote.origin.url))
branch=$(git rev-parse --abbrev-ref HEAD)

tag=$(git tag --points-at HEAD)

export DOCKER_BUILDKIT=1
docker build \
  --build-arg BUILDKIT_INLINE_CACHE=1 \
  -t local-dev/${repo}-brand-app -t local-dev/${repo}-brand-app:${branch}\
  $(git rev-parse --show-toplevel)/brand-app
