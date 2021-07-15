const jsdoc2md = require('jsdoc-to-markdown');
const path = require('path');
const fs = require('fs');

const ELE_ROOT = path.join(__dirname, 'elements', 'brand');
const DOC_ROOT = path.join(__dirname, 'test-app', 'pages');

console.log('Generating docs for:');
(async function() {
  let elements = fs.readdirSync(ELE_ROOT);
  for( let element of elements ) {
    if( !fs.statSync(path.join(ELE_ROOT, element)).isDirectory() ) continue;

    console.log(path.join(DOC_ROOT, 'page-'+element+'.js'));
    if( !fs.existsSync(path.join(DOC_ROOT, 'page-'+element+'.js')) ) continue;

    console.log('  - '+element);

    let md = await jsdoc2md.render({ files: path.join(ELE_ROOT, element, element+'.js') });
    fs.writeFileSync(path.join(DOC_ROOT, element+'.md'), md);
  }
})();
