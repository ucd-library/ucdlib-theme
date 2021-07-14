import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-theme-test-app.tpl.js";
import {Mixin, MainDomElement} from '../elements/utils/index.js';

import "../elements/ucdlib/ucdlib-pages/ucdlib-pages.js";

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

    window.addEventListener('hashchange', e => {
      this.selectedPage = window.location.hash.replace(/^#/, '');
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
  }

  _onSelectChange() {
    window.location.hash = this.querySelector('#elementSelector').value;
  }

}

customElements.define('ucdlib-theme-test-app', UcdlibThemeTestApp);