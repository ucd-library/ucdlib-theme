const createBrowser = require('../../utils/create-browser');
const wait = require('../../utils/wait');
const assert = require('assert');
var page, browser;

describe('ucd-theme-primary-nav', function(){
  before(async function() {
    let resp = await createBrowser({
      elements : 'ucd-theme-primary-nav',
      body: `    
        <ucd-theme-primary-nav nav-type="mega" style-modifiers="justify">
            <ul link-text="Lord of the Rings">
                <li><a href="">Wizards</a></li>
                <li><a href="">Ents</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Orcs</a></li>
                <li><a href="">Elves</a></li>
                <li><a href="">Dwarves</a></li>
            </ul>
                
            <ul href="#" link-text="Wheel of Time">
                <li><a href="#">Aes Sedai</a></li>
                <li><a href="#">Ta'veren</a></li>
                <li><a href="#">Warders</a></li>
                <li><a href="">Ogiers</a></li>
            </ul>

            <ul link-text="Kingkiller Chronicle">
                <li><a href="">Humans</a></li>
                <li><a href="">Fae</a></li>
            </ul>
        </ucd-theme-primary-nav> 
            `,
      puppeteer : {
        headless: true
      }
    });
    page = resp.page;
    browser = resp.browser;
  });
});