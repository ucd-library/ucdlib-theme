import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-search-popup.tpl.js";

import { MutationObserverController } from '../../utils/controllers';

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
    this.mutationObserver = new MutationObserverController(this);
    this.buttonText = "Toggle Search";
    this.opened = false;
    this._defaultForm = false;

  }

  /**
   * @method open
   * @description Displays the search input if in desktop view
   */
  open(){
    this.opened = true;
  }

  /**
   * @method close
   * @description Hides the search input if in desktop view
   */
  close(){
    this.opened = false;
  }

  /**
   * @method _onBtnClick
   * @description Attached to popup button
   * @private
   */
  _onBtnClick(){
    this.opened = !this.opened;
  }

  /**
   * @method _onChildListMutation
   * @description Fires when there are changes to this element's non-shadow DOM children
   * @private
   */
  _onChildListMutation(){
    if ( this.querySelector('ucd-theme-search-form') ){
      this._defaultForm = true;
    } else {
      this._defaultForm = false;
    }
  }

}

customElements.define('ucd-theme-search-popup', UcdThemeSearchPopup);