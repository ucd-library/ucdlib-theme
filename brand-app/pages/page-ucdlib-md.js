import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-md.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

export default class PageUcdlibMd extends Mixin(LitElement)
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

  /**
   * @method firstUpdated
   * @description Lit method called when element is first updated.
   */
  firstUpdated() {
    document.querySelector('#entered-md').addEventListener('keyup', this._updateDisplayedMarkdown.bind(this));
  }

  /**
   * @method _updateDisplayedMarkdown
   * @description Helper method to update the ucdlib-md element with entered textarea text.
   */
  _updateDisplayedMarkdown() {    
    document.querySelector('#md-renderer').data = document.querySelector('#entered-md').value;
  }

  /**
   * @method disconnectedCallback
   * @description Web Component lifecycle method when the componenent is disposed of
   */
  disconnectedCallback() {
    document.querySelector('#entered-md').removeEventListener('keyup', this._updateDisplayedMarkdown.bind(this));
  }

}

customElements.define('page-ucdlib-md', PageUcdlibMd);