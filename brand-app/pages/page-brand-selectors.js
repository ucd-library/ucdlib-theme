import { LitElement } from 'lit';
import {render, styles} from "./page-brand-selectors.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement } from "../utils/index.js";


export default class PageBrandSelectors extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement ) {

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

customElements.define('page-brand-selectors', PageBrandSelectors);