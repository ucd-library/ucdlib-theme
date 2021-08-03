import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-best-practice-factoid.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

export default class PageUcdBestPracticeFactoid extends Mixin(LitElement)
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

customElements.define('page-ucd-best-practice-factoid', PageUcdBestPracticeFactoid);
