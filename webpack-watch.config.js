const path = require('path');
const fs = require('fs-extra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let preview = './dev';
let previewFolder = path.join(__dirname, preview);
if( fs.existsSync(previewFolder) ) {
  fs.removeSync(previewFolder);
}

let config = require('@ucd-lib/cork-app-build').watch({
  // root directory, all paths below will be relative to root
  root : __dirname,
  // path to your entry .js file
  entry : './index.js',
  // folder where bundle.js will be written
  preview : preview,
  clientModules : 'node_modules'
});

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
          "node_modules/patternlab-sitefarm-one/source/sass",
          "node_modules/breakpoint-sass/stylesheets", 
          "node_modules/sass-toolkit/stylesheets"]
      }
    }
  }
}
if( !Array.isArray(config) ) config = [config];
config.forEach(conf => {
  
  // make our stylesheet
  conf.entry = [conf.entry, path.join(__dirname, './styles/style.scss')];
  conf.module.rules.push({
    test: /\.s[ac]ss$/i,
    issuer: { not: [ /\.js$/ ] },
    use: [
      { loader: MiniCssExtractPlugin.loader},
      loaderOptions.css,
      loaderOptions.scss,
    ]
  });

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

  conf.plugins = [
    new MiniCssExtractPlugin({
      filename: './styles.css'
    })
  ]
});

module.exports = config;