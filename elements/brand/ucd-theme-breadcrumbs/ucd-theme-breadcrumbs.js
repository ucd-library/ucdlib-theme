import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-breadcrumbs.tpl.js";

export default class UcdThemeBreadcrumbs extends LitElement {

  static get properties() {
    return {
      links: {type: Array}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.links;
  }

  firstUpdated(){
    this.lastElement = this.links[this.links.length - 1];
    this.requestUpdate();
  }

}

customElements.define('ucd-theme-breadcrumbs', UcdThemeBreadcrumbs);

