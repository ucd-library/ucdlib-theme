const path = require('path');
const fs = require('fs-extra');
const appBuild = require('@ucd-lib/cork-app-build');

let preview = './js';
let previewFolder = path.join(__dirname, preview);
if( fs.existsSync(previewFolder) ) {
  fs.removeSync(previewFolder);
}
fs.mkdirSync(previewFolder);

// copy resources
fs.copy(
  path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/js/solid.min.js'), 
  path.join(__dirname, 'js/solid.min.js')
);
fs.copy(
  path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js'), 
  path.join(__dirname, 'js/fontawesome.min.js')
);

let cssFolder = path.join(__dirname, 'css');
if( fs.existsSync(cssFolder) ) {
  fs.removeSync(cssFolder);
}
fs.mkdirSync(cssFolder);

fs.copy(
  path.join(__dirname, 'node_modules/@ucd-lib/theme-sass/style-ucdlib.css'), 
  path.join(__dirname, 'css/style-ucdlib.css')
);
fs.copy(
  path.join(__dirname, 'node_modules/prismjs/themes/prism.css'), 
  path.join(__dirname, 'css/prism.css')
);
fs.copy(
  path.join(__dirname, 'fonts.css'), 
  path.join(__dirname, 'css/fonts.css')
);

let config = appBuild.watch({
  // root directory, all paths below will be relative to root
  root : __dirname,
  // path to your entry .js file
  entry : './index.js',
  // folder where bundle.js will be written
  preview : preview,
  clientModules : 'node_modules'
});

config = [config, appBuild.watch({
  root : __dirname,
  entry : 'components.js',
  preview,
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