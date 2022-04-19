import { LitElement } from 'lit';
import { render, styles } from './page-ucd-theme-collapse.tpl.js';
import { Mixin, MainDomElement } from '../../elements/utils/mixins';
import { BrandedPageElement, MdElement } from '../utils/index.js';

import '../../elements/brand/ucd-theme-collapse/ucd-theme-collapse.js';

export default class PageUcdThemeCollapse extends Mixin(LitElement).with(
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

customElements.define('page-ucd-theme-collapse', PageUcdThemeCollapse);
