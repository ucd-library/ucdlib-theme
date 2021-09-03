const createBrowser = require('../../utils/create-browser');
const wait = require('../../utils/wait');
const assert = require('assert');
let page, browser;

describe('ucd-theme-pagination', function(){
/*    
  <ucd-theme-pagination
    current-page="50"
    max-pages="100"
    ellipses
    use-hash>
  </ucd-theme-pagination> 
  <ucd-theme-pagination
    current-page="33"
    max-pages="33"
    ellipses
    base-path="/foo/bar/">
  </ucd-theme-pagination>  
  <ucd-theme-pagination
    current-page="4"
    max-pages="10">
  </ucd-theme-pagination>
  <ucd-theme-pagination
    current-page="50"
    max-pages="100"
    use-hash>
  </ucd-theme-pagination>  
*/
  before(async function() {
    let resp = await createBrowser({
      elements : 'ucd-theme-pagination',
      body: ` <ucd-theme-pagination
                current-page="16"
                max-pages="20"
                xs-screen>
              </ucd-theme-pagination>
              <ucd-theme-pagination
              current-page="50"
              max-pages="100"
              ellipses
              use-hash>
            </ucd-theme-pagination> 
            <ucd-theme-pagination
              current-page="33"
              max-pages="33"
              ellipses
              base-path="/foo/bar/">
            </ucd-theme-pagination>  
            <ucd-theme-pagination
              current-page="4"
              max-pages="10">
            </ucd-theme-pagination>
            <ucd-theme-pagination
              current-page="50"
              max-pages="100"
              use-hash>
            </ucd-theme-pagination>  
              `,
    
      puppeteer : {
        headless: true
      }
    });
    page = resp.page;
    browser = resp.browser;
  });

  it('should give mobile view on page ', async function(){
    let ele = await page.$('ucd-theme-pagination');

    
  });

  after(function() {
    browser.close();
  });
});