import { LitElement } from 'lit';
import render from "./ucdlib-theme-message-area.tpl.js";

import headingStyles from '@ucd-lib/theme-sass/1_base_html/_headings.css.js';
import messageStyles from '@ucd-lib/theme-sass/4_component/_message-area.css.js';

export default class UcdlibThemeMessageArea extends LitElement {

  static get properties() {
    return {
      title : {type: String},
      buttonText : {type: String, attribute: 'button-text'}
    }
  }

  static get styles() {
    return [headingStyles, messageStyles];
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