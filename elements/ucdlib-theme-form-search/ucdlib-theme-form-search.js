import { LitElement } from 'lit';
import {render, styles } from "./ucdlib-theme-form-search.tpl.js";

/**
 * @class UcdlibThemeFormSearch
 * @classdesc Component class for rendering a basic search form
 * @param {String} value - The search string
 * @param {String} placeholder - The input placeholder
 * @param {String} formAction - The action to be taken on form submit (optional)
 * @example
 * // Use a form action:
 * html`
 *   <ucdlib-theme-form-search form-action="/url/to/post/to"></ucdlib-theme-form-search>
 * `
 * // Use event listener:
 * html`
 *  <ucdlib-theme-form-search @search="${this._onSearch}"></ucdlib-theme-form-search>
 * `
 */
export default class UcdlibThemeFormSearch extends LitElement {

  static get properties() {
    return {
      value: {type: String},
      placeholder: {type: String, attribute: "placeholder"},
      formAction: {type: String, attribute: "form-action"},
      formClass: {type: String, attribute: "form-class"},
      labelText: {type: String, attribute: "label-text"},
      inputClass: {type: String, attribute: "input-class"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.formAction = "";
    this.formClass = "";
    this.labelText = "Search";
    this.placeholder = "Search...";
    this.inputClass = "";
    this.value = "";
  }

  /**
   * @method _onSubmit
   * @description Attached to form submit
   * @param {Event} e - submit event
   */
  _onSubmit(e){
    if ( !this.formAction ) {
      e.preventDefault();
      e.stopPropagation();
      this._dispatchSearchEvent();
    }
  }

  /**
   * @method _onInput
   * @description Attached to search input change
   * @param {Event} e - input event
   */
  _onInput(e){
    this.value = e.target.value;
  }

  /**
   * @method _dispatchSearchEvent
   * @description Fires 'search' custom event
   */
  _dispatchSearchEvent() {
    let e = new CustomEvent('search', {
      detail: { 
        message: 'A search has been initiated', 
        searchTerm: this.value
      },
      bubbles: true,
      composed: true });
  
    this.dispatchEvent(e);
  }

}

customElements.define('ucdlib-theme-form-search', UcdlibThemeFormSearch);