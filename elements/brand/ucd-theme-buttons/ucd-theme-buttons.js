import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-buttons.tpl.js";


/**
 * @class UcdThemeButtons
 * @classdesc UI component class for displaying a search popup to be used in the site header
 *  
 * Patternlab URL: 
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-search-popup
 * 
 * @property {String} buttonText - The hidden innertext of the popup button.
 * @property {Boolean} opened - Whether the popup is open or not.
 * 
 * @example

 */
export default class UcdThemeButton extends LitElement {

  static get properties() {
    return {
      buttonText: {type: String, attribute: "button-text"},  
      background: {type: String, attribute: "background"},
      type: {type: String, attribute: "type"},
      size: {type: String, attribute: "size"},
      attribute: {type:String, attribute: "attribute"},
      input: {type:Boolean, attribute: "input"},
      href: {type:String, attribute: "href"},
      disabled: {type:Boolean, attribute: "disabled"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.buttonText = "Standard Text";
    this.input = false;
    this.background = 'categoryBackground';
    this.type = 'standard';
    this.size = 'lg';
    this.attribute = 'block';
    this.href = '#';
    this.disabled = false;



    this.render = render.bind(this);

  }
  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */ 
  constructClasses() {
    let classes = {};

    if(this.background && this.background != 'undefined'){
      switch (this.background) {
      case 'light' :  'category-brand__background--lighten'; break;
      case 'dark' :  'dark-background'; break;
      default: 'category-brand__background';
      }
      classes['btn--' + this.background] = true;
    }
    if(this.size && this.size != 'undefined') {
      classes['btn--' + this.size] = true;
    }
    if(this.type && this.type != 'undefined' && this.type != 'standard'){
      if(this.type == 'primary' && this.input) this.type = 'primary-input';
      classes['btn--' + this.type] = true;
    }
    if(this.attribute && this.attribute != 'undefined'){
      classes['btn--' + this.attribute] = true;
    }
    if(this.disabled && this.disabled != 'undefined'){
      classes['btn--disabled'] = true;
    }
    console.log(classes);
    return classes;
  }


}

customElements.define('ucd-theme-button', UcdThemeButton);