import { LitElement } from 'lit';
import {render, styles } from "./ucd-theme-search-form.tpl.js";

/**
 * @class UcdThemeSearchForm
 * @classdesc Component class for rendering a basic search form.
 * 
 * Pattern Lab Url: 
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-search-form
 * 
 * @property {String} value - The search string
 * @property {String} placeholder - The input placeholder
 * @property {String} formAction - The action to be taken on form submit (optional)
 * @property {String} formMethod - The http method used on submit (default=POST)
 * @property {String} queryParam - The URL query parameter to use (default=searchterm)
 * 
 * @example
 *  <ucd-theme-form-search form-action="/url/to/post/to"></ucd-theme-form-search>
 *  <ucd-theme-form-search @search="${this._onSearch}"></ucd-theme-form-search>
 */
export default class UcdThemeSearchForm extends LitElement {

  static get properties() {
    return {
      value: {type: String},
      placeholder: {type: String, attribute: "placeholder"},
      formAction: {type: String, attribute: "form-action"},
      formMethod: {type: String, attribute: "form-method"},
      formClass: {type: String, attribute: "form-class"},
      labelText: {type: String, attribute: "label-text"},
      inputClass: {type: String, attribute: "input-class"},
      queryParam: {type: String, attribute: "query-param"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.formAction = "";
    this.formMethod = "POST";
    this.formClass = "";
    this.labelText = "Search";
    this.placeholder = "Search...";
    this.inputClass = "";
    this.value = "";
    this.queryParam = "searchterm";
  }

  /**
   * @method _onSubmit
   * @description Attached to form submit
   * @private
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
   * @private
   * @param {Event} e - input event
   */
  _onInput(e){
    this.value = e.target.value;
  }

  /**
   * @method _dispatchSearchEvent
   * @description Fires 'search' custom event
   * @private
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

customElements.define('ucd-theme-search-form', UcdThemeSearchForm);