import { LitElement } from 'lit-element';
import render from "./ucdlib-theme-message-area.tpl.js";

export default class UcdlibThemeMessageArea extends LitElement {

  static get properties() {
    return {
      title : {type: String},
      buttonText : {type: String, attribute: 'button-text'}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

  _onBtnClicked() {
    this.dispatchEvent(new CustomEvent('click'));
  }

}

customElements.define('ucdlib-theme-message-area', UcdlibThemeMessageArea);