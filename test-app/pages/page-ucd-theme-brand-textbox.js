import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-brand-textbox.tpl.js";
import { Mixin, MainDomElement } from '../../elements/utils/mixins';
import { BrandedPageElement, MdElement } from '../utils/index.js';

import "../../elements/brand/ucd-theme-brand-textbox/ucd-theme-brand-textbox";

export default class PageUcdThemeBrandTextbox extends Mixin(LitElement).with(
  MainDomElement,
  BrandedPageElement,
  MdElement
) {

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

customElements.define('page-ucd-theme-brand-textbox', PageUcdThemeBrandTextbox);