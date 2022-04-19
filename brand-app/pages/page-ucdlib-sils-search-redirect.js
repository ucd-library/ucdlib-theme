import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-sils-search-redirect.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-sils-search-redirect/ucdlib-sils-search-redirect";

export default class PageUcdlibSilsSearchRedirect extends Mixin(LitElement)
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

customElements.define('page-ucdlib-sils-search-redirect', PageUcdlibSilsSearchRedirect);