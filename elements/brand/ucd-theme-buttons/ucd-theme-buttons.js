import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-buttons.tpl.js";


/**
 * @class UcdThemeSearchPopup
 * @classdesc UI component class for displaying a search popup to be used in the site header
 *  
 * Patternlab URL: 
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-search-popup
 * 
 * @property {String} buttonText - The hidden innertext of the popup button.
 * @property {Boolean} opened - Whether the popup is open or not.
 * 
 * @example
 * <ucd-theme-search-popup>
 *   <ucd-theme-search-form
 *     @search="${e => console.log(e.detail.searchTerm)}">
 *   </ucd-theme-search-form>
 * </ucd-theme-search-popup>
 * 
 * <ucd-theme-search-popup>
 *   <input placeholder="A custom search element">
 * </ucd-theme-search-popup>
 */
export default class UcdThemeSearchPopup extends LitElement {

  static get properties() {
    return {
      buttonText: {type: String, attribute: "button-text"},
      opened: {type: Boolean},
      _defaultForm: {type: Boolean, state: true}
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

customElements.define('ucd-theme-search-popup', UcdThemeSearchPopup);