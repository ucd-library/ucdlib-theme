import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-search-popup.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/brand/ucd-theme-search-popup/ucd-theme-search-popup.js";
import "../../elements/brand/ucd-theme-search-form/ucd-theme-search-form.js";

export default class PageUcdThemeSearchPopup extends Mixin(LitElement)
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

customElements.define('page-ucd-theme-search-popup', PageUcdThemeSearchPopup);