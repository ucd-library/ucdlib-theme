import { html, LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-sils-permalink.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-sils-permalink/ucdlib-sils-permalink.js";

export default class PageUcdlibSilsPermalinks extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement) {

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
    this.new_permalinks = [];
    this.sampleList = [
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/9fle3i/alma9981249369903126',
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/1birqoj/alma990028384910403126',
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/13iosf5/alma9981506184903126',
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/13iosf5/alma990023814310403126',
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/13iosf5/alma9980951153503126',
      'https://search.library.ucdavis.edu/permalink/01UCD_INST/13iosf5/alma990016788810403126'
    ];

    if(sessionStorage.getItem("newPermalink")){
      this.new_permalinks = JSON.parse(sessionStorage.getItem("newPermalink"));
      this.new_permalinks.forEach(function(item, index) {
        item["index"] = index;
      });
    }


    this.render = render.bind(this);

  }

}

customElements.define('page-ucdlib-sils-permalink', PageUcdlibSilsPermalinks);
