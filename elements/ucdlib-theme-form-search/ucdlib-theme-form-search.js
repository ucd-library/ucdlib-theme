import { LitElement } from 'lit';
import {render, styles } from "./ucdlib-theme-form-search.tpl.js";

export default class UcdlibThemeFormSearch extends LitElement {

  static get properties() {
    return {
      value: {type: String},
      placeholder: {type: String},
      formAction: {type: String, attribute: "form-action"},
      formClass: {type: String, attribute: "form-class"},
      labelText: {type: String, attribute: "label-text"},
      inputClass: {type: String, attribute: "input-class"}
    }
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

  _onSubmit(e){
    if ( !this.formAction ) {
      e.preventDefault();
      e.stopPropagation();
      this._dispatchSearchEvent();
    }
  }

  _onInput(e){
    this.value = e.target.value;
  }

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