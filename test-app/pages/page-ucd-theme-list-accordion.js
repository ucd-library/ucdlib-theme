import { LitElement } from 'lit';
import { render, styles } from './page-ucd-theme-list-accordion.tpl.js';
import { Mixin, MainDomElement } from '../../elements/utils/index.js';
import { BrandedPageElement, MdElement } from '../utils/index.js';

import '../../elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion.js';

export default class PageUcdThemeListAccordion extends Mixin(LitElement).with(
  MainDomElement,
  BrandedPageElement,
  MdElement
) {
  static get properties() {
    return {};
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define(
  'page-ucd-theme-list-accordion',
  PageUcdThemeListAccordion
);
