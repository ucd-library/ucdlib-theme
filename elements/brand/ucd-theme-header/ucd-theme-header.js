import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-header.tpl.js";

import { Mixin, MutationObserverElement } from "../../utils/index.js";

/**
 * @class UcdThemeHeader
 * @classdesc Component class for displaying the site header
 *  PatternLab Url:
 *    http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-header
 * 
 */
export default class UcdThemeHeader extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      siteName: {type: String, attribute: "site-name"},
      slogan: {type: String},
      figureSrc: {type: String, attribute: "figure-src"},
      siteUrl: {type: String, attribute: "site-url"},
      _hasSlottedBranding: {type: Boolean, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._hasSlottedBranding = false;
    this.siteName = "";
    this.slogan = "";
    this.figureSrc = "";
    this.siteUrl = "/";

    this._ucdLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="16.157"><path fill="#022851" d="M58.865 4.877c.101.661 1.101 5.405 1.101 5.405h-2.194l1.093-5.405zm-8.328 11.03h5.806l.438-1.947h4.144l.554 1.947h5.806L61.846.403h-6.087l-5.222 15.504zM36.284.402h5.624c5.107 0 9.007 2.277 9.007 7.974 0 4.591-3.18 7.529-7.645 7.529l-6.986-.009V.402zm5.524 11.052h.376c1.843 0 3.207-1.072 3.207-3.096 0-2.179-1.21-3.395-3.234-3.395h-.349v6.491zM32.941.888l.296 2.545c.071.604.426 2.052-.011 1.858-.276-.121-.502-.776-.726-1.36-.114-.295-.658-1.695-.801-1.799-.685-.501-2.401-1.064-3.561-1.069-3.521-.013-5.847 2.509-5.847 6.982 0 3.208 1.582 7.061 5.607 7.061 1.441 0 4.201-.443 4.952-2.436.339-.9.65-1.703.876-1.459.166.177-.05.899-.15 1.289-.474 1.847-.501 2.406-.65 2.479-1.818.885-4.15 1.178-6.191 1.178-6.485 0-8.726-3.678-8.726-7.354 0-6.379 4.032-9.021 10.286-8.791 1.58.058 3.163.334 4.646.876M13.784 1.171L12.745.819c-.35-.306.075-.391.075-.391s1.5.271 5.24-.036c0 0 .328.062.103.319l-1.228.511c-.798.338-.798.143-.798.994l-.007 7.902c0 6.178-6.47 6.039-7.73 6.039-.6 0-6.488 0-6.488-4.961V2.834c0-1.46.159-1.419-.338-1.591L.071.695S-.183.347.269.368c1.227.06 3.004.316 7.133.024 0 0 .362.085.125.342l-1.201.339c-.95.414-.825.098-.849 1.045l.028 8.248c0 2.021 1.07 4.524 4.395 4.524 4.585 0 4.627-3.854 4.627-4.71l.009-8.167c.049-.77-.052-.551-.752-.842M87.65 14.715l1.6-4.111.281.23c.982.781 2.316 1.443 3.574 1.471 1.127.023 1.676-.268 1.527-1.191-.113-.693-.916-.812-1.417-.91l-1.103-.213c-2.143-.39-3.941-1.673-3.941-4.104 0-3.677 3.262-5.737 6.544-5.737 1.726 0 3.306.424 4.786 1.36L98.11 5.156c-.762-.533-1.918-1.285-3.377-1.337-.482-.018-1.58.229-1.229 1.312.152.462.833.657 1.252.755l1.241.292c2.325.526 4.003 1.81 4.003 4.432 0 3.699-3.281 5.529-6.542 5.529-1.901 0-4.106-.527-5.808-1.424M80.979.403h5.492v15.504h-5.492zM74.684.402h5.72l-5.843 15.503h-4.644L64.09.402h5.704l2.442 9.354z"/></svg>`;
  }

  /**
   * @method updated
   * @description Lit lifecycle method called after element has updated.
   * @param {Map} props - Properties updated in cycle
   */
  updated( props ){

    // Check if we're using the default branding div
    const brandProps = ['siteName', 'slogan', 'figureSrc'];
    if ( brandProps.map(p => props.has(p)).filter(Boolean).length ) {
      if ( brandProps.map(p => this[p]).filter(Boolean).length ) {
        this._hasSlottedBranding = false;
      } else {
        this._hasSlottedBranding = true;
      }
    }
  }

  _onChildListMutation(){
    let primaryNav = this.querySelector('ucd-theme-primary-nav');
    if ( primaryNav ) {
      primaryNav.setAttribute('slot', 'primary-nav');
    } else {
      console.warn("No 'ucd-theme-primary-nav' child element found!");
    }
  }

}

customElements.define('ucd-theme-header', UcdThemeHeader);