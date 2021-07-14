import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-primary-nav.tpl.js";
import {Mixin, MainDomElement} from '../../elements/utils/index.js';

import "../../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js";

export default class PageUcdThemePrimaryNav extends Mixin(LitElement)
  .with(MainDomElement) {

  static get properties() {
    return {

    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('page-ucd-theme-primary-nav', PageUcdThemePrimaryNav);