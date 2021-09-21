import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-sils-permalink.tpl.js";

/**
 * @class UcdlibSilsPermalink
 * @description This component allows you to easily add individual objects from
 * the UC SILS catalog into your webpage.
 * @property {String} href - Pointer to the permalink
 * @property {String} cite - Specify the citation style
 *
 * <ucdlib-sils-permalink href="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126"/>
 */

export default class UcdlibSilsPermalink extends LitElement {
  static get properties() {
    return {
      href:{type:String},
      cite:{type: String,
            state: "title"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render=render.bind(this);
  }
}

customElements.define('ucdlib-sils-permalink',UcdlibSilsPermalink);
