import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-branding-bar.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-branding-bar/ucdlib-branding-bar";


export default class PageUcdlibBrandingBar extends Mixin(LitElement)
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

customElements.define('page-ucdlib-branding-bar', PageUcdlibBrandingBar);