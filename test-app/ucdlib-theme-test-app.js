import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-theme-test-app.tpl.js";
import {Mixin, MainDomElement} from '../elements/utils/index.js';

import "../elements/ucdlib/ucdlib-pages/ucdlib-pages.js";
import "../elements/brand/ucd-theme-header/ucd-theme-header";

// Import all of our iconsets:
import "../elements/ucdlib/ucdlib-icons/ucdlib-icons";
import "../elements/ucdlib/ucdlib-icons/academic";

export default class UcdlibThemeTestApp extends Mixin(LitElement)
  .with(MainDomElement) {

  static get properties() {
    return {
      elements : {type: Array},
      selectedPage : {type: String}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();

    this.selectedPage = '';
    this.elements = [];

    window.addEventListener('hashchange', async e => {
      let page = window.location.hash.replace(/^#/, '');
      if( !PAGES.includes('page-'+page) ) return;
      this.selectedPage = page;
      this.renderMd();
    });

    this.render = render.bind(this);
  }

  firstUpdated() {
    let root = this.querySelector('#pages');
    for( let eleName of PAGES ) {
      let ele = document.createElement(eleName);
      ele.id = eleName.replace(/^page-/, '');
      root.appendChild(ele);
    }

    this.elements = PAGES.map(name => name.replace(/^page-/, ''));
    this.selectedPage = window.location.hash.replace(/^#/, '') || PAGES[0].replace(/^page-/, '');
    this.renderMd();
  }

  async renderMd() {
    if( !this.selectedPage ) return;
    const pageEle = this.querySelector('#'+this.selectedPage);
    if ( !pageEle || !pageEle.renderMd ) return;
    try {
      await pageEle.renderMd();
    } catch(e) {
      console.error('Failed to render markdown'+ e);
    }
  }

  _onSelectChange() {
    window.location.hash = this.querySelector('#elementSelector').value;
  }

}

customElements.define('ucdlib-theme-test-app', UcdlibThemeTestApp);