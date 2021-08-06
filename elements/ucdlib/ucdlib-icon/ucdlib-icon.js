import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-icon.tpl.js";

export default class UcdlibIcon extends LitElement {

  static get properties() {
    return {
      
    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('ucdlib-icon', UcdlibIcon);