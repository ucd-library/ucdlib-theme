const path = require('path');
const fs = require('fs-extra');
const appBuild = require('@ucd-lib/cork-app-build');

let preview = './js';
let previewFolder = path.join(__dirname, preview);
if( fs.existsSync(previewFolder) ) {
  fs.removeSync(previewFolder);
}

let config = appBuild.dist({
  // root directory, all paths below will be relative to root
  root : __dirname,
  // path to your entry .js file
  entry : './index.js',
  // folder where bundle.js will be written
  dist : preview,
  clientModules : 'node_modules'
});

config = [...config, ...appBuild.dist({
  root : __dirname,
  entry : 'components.js',
  dist : preview,
  modern : 'external.js',
  ie : 'external-ie.js',
  clientModules : 'node_modules'
})];

let loaderOptions = {
  css: {
    loader: 'css-loader',
    options : {
      url: false
    }
  },
  scss: {
    loader: 'sass-loader',
    options: {
      implementation: require("sass"),
      sassOptions: {
        includePaths: [
          "node_modules/breakpoint-sass/stylesheets", 
          "node_modules/sass-toolkit/stylesheets"]
      }
    }
  }
};

config.forEach(conf => {
  
  // import select scss partials to put in web component shadowdom
  conf.module.rules.push({
    test: /\.s[ac]ss$/i,
    issuer: /\.js$/,
    use: [
      {loader: "to-string-loader"},
      loaderOptions.css,
      loaderOptions.scss,
    ]
  });
});

module.exports = config;