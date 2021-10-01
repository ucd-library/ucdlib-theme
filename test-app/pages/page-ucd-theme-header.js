import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-header.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/brand/ucd-theme-header/ucd-theme-header.js";
import "../../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js";
import "../../elements/brand/ucd-theme-quick-links/ucd-theme-quick-links.js";
import "../../elements/brand/ucd-theme-search-popup/ucd-theme-search-popup.js";
import "../../elements/brand/ucd-theme-search-form/ucd-theme-search-form.js";
import "../../elements/ucdlib/ucdlib-branding-bar/ucdlib-branding-bar.js";

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