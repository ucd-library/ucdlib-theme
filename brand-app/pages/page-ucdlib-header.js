import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-header.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-header/ucdlib-header.js";
import "../../elements/ucdlib/ucdlib-primary-nav/ucdlib-primary-nav.js";

export default class PageUcdlibHeader extends Mixin(LitElement)
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

customElements.define('page-ucdlib-header', PageUcdlibHeader);