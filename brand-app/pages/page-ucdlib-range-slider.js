import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-range-slider.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

export default class PageUcdlibRangeSlider extends Mixin(LitElement)
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

  _onRangeSliderChange(e) {
    // do something with e.detail, ie {min: 1971, max: 2010, includeUnknown: true}
  }

}

customElements.define('page-ucdlib-range-slider', PageUcdlibRangeSlider);