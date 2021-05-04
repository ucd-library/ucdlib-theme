import { LitElement } from 'lit';
import render from "./ucdlib-theme-alert.tpl.js";

import alertStyles from '@ucd-lib/theme-sass/4_component/_messaging-alert.css.js';

export default class UcdlibThemeAlert extends LitElement {

  static get properties() {
    return {
      type : {type: String},
      styleModifier : {type: String}
    }
  }

  static get styles() {
    return [alertStyles]
  } 

  constructor() {
    super();
    this.render = render.bind(this);

    // allowed types; success, warning, error
    this.type = '';
    this.styleModifier = '';
  }

  updated(props) {
    if( props.has('type') && this.type ) {
      this.styleModifier = 'alert--'+this.type;
    }
  }

}

customElements.define('ucdlib-theme-alert', UcdlibThemeAlert);