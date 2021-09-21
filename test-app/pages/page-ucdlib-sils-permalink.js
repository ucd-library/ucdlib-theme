import { html, LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-sils-permalink.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-sils-permalink/ucdlib-sils-permalink.js";

export default class PageUcdlibSilsPermalinks extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement) {

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('page-ucdlib-sils-permalink', PageUcdlibSilsPermalinks);
