const jsdoc2md = require('jsdoc-to-markdown');
const path = require('path');
const fs = require('fs');

const ELE_ROOTS = [
  path.join(__dirname, 'elements', 'brand'),
  path.join(__dirname, 'elements', 'ucdlib')
];
const DOC_ROOT = path.join(__dirname, 'brand-app', 'pages');

console.log('Generating docs for:');
ELE_ROOTS.forEach(async function(ELE_ROOT) {
  let elements = fs.readdirSync(ELE_ROOT);
  for( let element of elements ) {
    if( !fs.statSync(path.join(ELE_ROOT, element)).isDirectory() ) continue;
    if( !fs.existsSync(path.join(DOC_ROOT, 'page-'+element+'.js')) ) continue;

    console.log('  - '+element);

    let md = await jsdoc2md.render({ 
      files: path.join(ELE_ROOT, element, element+'.js') , 
      "heading-depth" : 3});
    fs.writeFileSync(path.join(DOC_ROOT, element+'.md'), md);
  }
});
