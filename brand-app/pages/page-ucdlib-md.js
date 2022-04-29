import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-md.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

export default class PageUcdlibMd extends Mixin(LitElement)
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

customElements.define('page-ucdlib-md', PageUcdlibMd);