const createBrowser = require('../../utils/create-browser');
const wait = require('../../utils/wait');
const assert = require('assert');
var page, browser;

describe('ucd-theme-quick-links', function(){
  before(async function() {
    let resp = await createBrowser({
      elements : 'ucd-theme-quick-links',
      body: `     
            <ucd-theme-quick-links 
                title="Favorite Things">
                <a href="#">Raindrops on roses</a>
                <a href="#">Whiskers on kittens</a>
                <a href="#">Bright copper kettles</a>
                <a href="#">Warm woolen mittens</a>
            </ucd-theme-quick-links>
            `,
      puppeteer : {
        headless: true
      }
    });
    page = resp.page;
    browser = resp.browser;
  });
});