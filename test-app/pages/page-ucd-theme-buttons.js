import { LitElement } from 'lit';
import { render, styles } from './page-ucd-theme-buttons.tpl.js';
import { Mixin, MainDomElement } from '../../elements/utils/mixins';
import { BrandedPageElement, MdElement } from '../utils/index.js';

import '../../elements/brand/ucd-theme-buttons/ucd-theme-buttons.js';

export default class PageUcdThemeButtons extends Mixin(LitElement).with(
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

customElements.define('page-ucdlib-theme-buttons', PageUcdThemeButtons);
