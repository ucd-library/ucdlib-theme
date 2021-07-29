import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-header.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/brand/ucd-theme-header/ucd-theme-header.js";
import "../../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js";

export default class PageUcdThemeHeader extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement, MdElement) {  

  static get properties() {
    return {
      
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('page-ucd-theme-header', PageUcdThemeHeader);