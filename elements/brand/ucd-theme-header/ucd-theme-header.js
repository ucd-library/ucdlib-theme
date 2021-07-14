import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-header.tpl.js";

/**
 * @class UcdThemeHeader
 * @classdesc Component class for displaying the site header
 *  PatternLab Url:
 *    http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-header
 * 
 * @property {Boolean} hideUCDBar - Hides top bar with UCD logo
 */
export default class UcdThemeHeader extends LitElement {

  static get properties() {
    return {
      hideUCDBar: {type: Boolean, attribute: "hide-ucd-bar"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.hideUCDBar = false;
  }

}

customElements.define('ucd-theme-header', UcdThemeHeader);