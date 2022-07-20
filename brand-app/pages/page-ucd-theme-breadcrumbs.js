import { LitElement } from 'lit';
import {render, styles} from "./page-ucd-theme-breadcrumbs.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/brand/ucd-theme-breadcrumbs/ucd-theme-breadcrumbs";


export default class PageUcdThemeBreadcrumbs extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement, MdElement) {

  static get properties() {
    return {
      linksEx: {type: Object}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.linksEx = 
    [
      {"linkTitle": "Hello", "url": "#"},
      {"linkTitle": "There", "url": "#"},
      {"linkTitle": "Friend", "url": "#"}
    ];
  }

}

customElements.define('page-ucd-theme-breadcrumbs', PageUcdThemeBreadcrumbs);