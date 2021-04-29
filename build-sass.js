const sass = require('sass');
const path = require('path');
const fs = require('fs');

const file = 'node_modules/patternlab-sitefarm-one/source/sass/style.scss';
const result = sass.renderSync({
  file: path.join(__dirname, file),
  includePaths : [
    path.join(__dirname, 'node_modules/normalize-scss/sass'),
    path.join(__dirname, 'node_modules/breakpoint-sass/stylesheets'),
    path.join(__dirname, 'node_modules/sass-toolkit/stylesheets'),
    path.join(__dirname, 'node_modules/sass-burger')
  ]
});

if( !fs.existsSync(path.join(__dirname, 'dist')) ) {
  fs.mkdir(path.join(__dirname, 'dist'))
}

fs.writeFileSync(
  path.join(__dirname, 'dist', 'ucd-theme.css'),
  result
);