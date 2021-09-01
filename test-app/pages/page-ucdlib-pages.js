import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-pages.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-pages/ucdlib-pages";

export default class PageUcdlibPages extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement, MdElement) {

  static get properties() {
    return {
      example1Selected: {type: String}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._example1Pages = ["page1", "page2", "page3"];
    this.example1Selected = this._example1Pages[0];
  }

  _example1Click(){
    const prefix="page";
    let n = parseInt(this.example1Selected.split(prefix)[1]); 
    if ( n >= this._example1Pages.length) n = 0;
    this.example1Selected = this._example1Pages[n];
  }

}

customElements.define('page-ucdlib-pages', PageUcdlibPages);