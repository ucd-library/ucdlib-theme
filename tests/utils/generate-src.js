const { createFsFromVolume, Volume} = require('memfs');
const webpack = require('webpack');
const path = require('path');

/**
 * @function generateSrc
 * @description dynamically create a return webpack bundle source
 * for provided elements
 * 
 * @param {String|Array} elements elements to generate bundle for
 * @returns {String}
 */
module.exports = function generateSrc(elements) {
  const ROOT_DIR = path.resolve(__dirname, '..', '..');

  if( !Array.isArray(elements) ) {
    elements = [elements];
  }

  return new Promise((resolve, reject) => {
    const fs = createFsFromVolume(new Volume());

    const compiler = webpack({
      entry : elements.map(element => path.join(ROOT_DIR, 'elements', element, element+'.js')),
      output : {
        filename: 'bundle.js',
        path : '/'
      },
      resolve: {
        modules: ["node_modules", path.resolve(ROOT_DIR, 'elements')]
      }
    });

    compiler.outputFileSystem = fs;
    compiler.run((err, stats) => {  
      compiler.close((closeErr) => {
        fs.readFile('/bundle.js', 'utf-8', (err, content) => {
          resolve(content);
        });
      });
    });
  });
};