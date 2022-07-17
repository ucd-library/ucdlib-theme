import {LitElement } from 'lit';
import {render} from "./page-brand-author-profile.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement} from "../utils/index.js";

import "../../elements/brand/ucd-theme-author-profile/ucd-theme-author-profile.js";

export default class PageBrandAuthorProfile extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement) {

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
    this.new_permalinks = [];
    this.hasCustomData = false;
    this.sampleList = [
      'mmlivas@ucdavis.edu',
      'qjhart@ucdavis.edu',
      'spelkey@ucdavis.edu',
      'mjwarren@ucdavis.edu',
      'dfsnapp@ucdavis.edu',
    ];


    this.render = render.bind(this);

  }


}

customElements.define('page-brand-author-profile', PageBrandAuthorProfile);
