const express = require('express');
const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

const config = {
  version : pkg.version
};

const router = express.Router();

const assetsDir = path.join(__dirname);
const loaderPath = path.join(assetsDir, 'external-loader-client.js');
let loaderSrc = '';

if( fs.existsSync(loaderPath) ) {
  loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
} else {
  console.warn(`External JS not found on disk! ${loaderPath}`);
}

router.get('/loader.js', (req, res) => {
  // ignorePolyfills, ignoreIcons, ignoreFonts, ignoreCss
  let flags = (req.query.flags || '').toLowerCase().split(',').map(item => item.trim());

  let loaderConfig = {
    version: config.version
  };

  for( let flag of flags ) {
    loaderConfig[flag] = true;
  }

  res.set('Content-Type', 'application/javascript');
  res.set('Cache-Control', 'no-cache');
  res.send(`window.UCD_LIB_THEME_LOADER=${JSON.stringify(loaderConfig)};
${loaderSrc}`);
});

module.exports = router;