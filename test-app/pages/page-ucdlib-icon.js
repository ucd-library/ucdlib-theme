import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-icon.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-iconset/ucdlib-iconset";
import "../../elements/ucdlib/ucdlib-icon/ucdlib-icon";

export default class PageUcdlibIcon extends Mixin(LitElement)
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

  firstUpdated(){
    const iconsets = this.renderRoot.querySelectorAll('ucdlib-iconset');
    Array.from(iconsets).forEach(iconset => {
      document.head.appendChild(iconset);
    });
  }

}

customElements.define('page-ucdlib-icon', PageUcdlibIcon);