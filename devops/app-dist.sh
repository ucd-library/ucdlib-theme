#! /bin/bash

set -e
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $ROOT_DIR/../brand-app

webpack --config webpack-dist.config.js

cp node_modules/@fortawesome/fontawesome-free/js/solid.min.js js/solid.min.js
cp node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js js/fontawesome.min.js

if [[ -d css ]]; then
  rm -rf css
fi

cp node_modules/@ucd-lib/theme-sass/style-ucdlib.css css/style-ucdlib.css
cp node_modules/prismjs/themes/prism.css css/prism.css