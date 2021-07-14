const createBrowser = require('../../utils/create-browser');
const wait = require('../../utils/wait');
const assert = require('assert');
var page, browser;

describe('ucd-theme-collapse', function() {

  before(async function() {
    let resp = await createBrowser({
      elements : 'ucd-theme-collapse',
      body: `<ucd-theme-collapse title="Toggle me please">
        Hello world!
      </ucd-theme-collapse>`,
      puppeteer : {
        headless: true
      }
    });
    page = resp.page;
    browser = resp.browser;
  });

  it('should toggle on click', async function() {
    let ele = await page.$('ucd-theme-collapse');
    await ele.click();

    let resp = await page.evaluate(() => {
      return document.querySelector('ucd-theme-collapse').opened;
    });
    assert(resp === true, 'ucd-theme-collapse open flag not set after click');
  
    await ele.click();

    resp = await page.evaluate(() => {
      return document.querySelector('ucd-theme-collapse').opened;
    });
    assert(resp === false, 'ucd-theme-collapse open flag not set after click');
  });

  after(function() {
    browser.close();
  });
});