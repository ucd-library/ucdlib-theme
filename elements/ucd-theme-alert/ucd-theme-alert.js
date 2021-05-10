import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-alert.tpl.js";

/**
 * @class UcdThemeAlert
 * @classdesc UI component class for displaying a basic non-dismissable alert.
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=viewall-molecules-messaging
 * 
 * @property {String} type - Optional modifier. 'success', 'warning', or 'error'
 * 
 * @example
 * html`
 *   <ucd-theme-alert>I am an alert!</ucd-theme-alert>
 *   <ucd-theme-alert type='error'>I am a red alert!</ucd-theme-alert>
 * `
 */
export default class UcdThemeAlert extends LitElement {

  static get properties() {
    return {
      type : {type: String},
      _styleModifier : {type: String}
    };
  }

  static get styles() {
    return styles();
  } 

  constructor() {
    super();
    this.render = render.bind(this);
    this.type = '';
    this.styleModifier = '';
  }

  /**
   * @method updated
   * @description Lit lifecycle method called after element has been updated
   * @param {Map} props - Properties that have changed
   */
  updated(props) {
    if( props.has('type') && this.type ) {
      this._styleModifier = 'alert--'+this.type;
    }
  }

}

customElements.define('ucd-theme-alert', UcdThemeAlert);