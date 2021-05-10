import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-collapse.tpl.js";

/**
 * @class UcdThemeCollapse
 * @classdesc UI component class for a collapsable panel box
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-collapse
 * 
 * @property {String} title - The panel title
 * @property {Boolean} opened - Whether the panel content is expanded
 * 
 * @example
 * html`
 *   <ucd-theme-collapse title="I am the panel title">
 *     I am the content.
 *   </ucd-theme-collapse>
 * `
 */
export default class UcdThemeCollapse extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      opened: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.title = "";
    this.opened = false;
  }

  /**
   * @method open
   * @description Expands the panel content
   */
  open() {
    this.opened = true;
  }

  /**
   * @method close
   * @description Collapses the panel content
   */
  close(){
    this.opened = false;
  }

  /**
   * @method toggle
   * @description Toggles the visibility of the panel content
   */
  toggle(){
    this.opened = !this.opened;
  }

  /**
   * @method _onTitleClick
   * @description Attached to the panel title
   */
  _onTitleClick(){
    this.toggle();
    this._dispatchToggleEvent();
  }

  /**
   * @method _onTitleKeyUp
   * @description Attached to the panel title
   * 
   * @param {Event} e - keyup event
   */
  _onTitleKeyUp(e){
    if( e.which !== 13 ) return;
    this.toggle();
    this._dispatchToggleEvent();
  }

  /**
   * @method _dispatchToggleEvent
   * @description Emits custom 'accordion-toggle' event when user toggles content visibilty.
   */
  _dispatchToggleEvent(){
    let e = new CustomEvent('accordion-toggle', {
      detail: { 
        message: 'Content area has been expanded or collapsed', 
        isOpen: this.opened
      },
      bubbles: true,
      composed: true });
    this.dispatchEvent(e);
  }

}

customElements.define('ucd-theme-collapse', UcdThemeCollapse);