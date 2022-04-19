const puppeteer = require('puppeteer');
const fs = require('fs');
const generateSrc = require('./generate-src');
const path = require('path');

const globalCss = generateCss();


/**
 * @function browser
 * @description create a new browser instance with provided body.  generates element src
 * bundle on the fly
 * 
 * @param {Object} opts 
 * @param {String} opts.body page body
 * @param {String|Array} opts.elements custom element names to inject into page
 * 
 * @returns 
 */
module.exports = async function createBrowser(opts) {
  if( process.env.PUPPETEER_SANDBOX === 'true' ) {
    if( !opts.puppeteer ) opts.puppeteer = {};
    if( !opts.puppeteer.args ) opts.puppeteer.args = [];
    opts.puppeteer.args.push('--no-sandbox');
  }

  const browser = await puppeteer.launch(opts.puppeteer);
  const page = await browser.newPage();

  let src = await generateSrc(opts.elements);

  await page.setContent(`<html>
  <head>
    <title>Mocha Testing</title>
    <script>${src}</script>
    <style>${globalCss}</style>
  </head>
  <body>
    ${opts.body}
  </body>
</html>`);

  return {browser, page};
};

function generateCss() {
  const ROOT_DIR = path.resolve(__dirname, '..', '..');
  let fonts = path.resolve(ROOT_DIR, 'brand-app', 'fonts.css');
  let styles = path.resolve(ROOT_DIR, 'elements', 'node_modules/@ucd-lib/theme-sass/style.css');
  
  let css = fs.readFileSync(fonts, 'utf-8')+'\n';
  css += fs.readFileSync(styles, 'utf-8');

  return css;
}