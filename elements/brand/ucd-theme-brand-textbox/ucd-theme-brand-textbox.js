import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-brand-textbox.tpl.js";

/**
 * @class UcdThemeBrandTextbox
 * @classdesc Component class for displaying a collapsible content in a colored box
 * Pattern Lab Url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-branding-textbox-collapse
 * @property {String} brandColor - A UCD brand color slug
 * @property {Boolean} collapsible - Content can be collapsed/expanded
 * @property {Boolean} collapsed - Content is collapsed
 * 
 * @examples
 * <ucd-theme-brand-textbox collapsible brand-color="primary">
 *  <p>hello world!</p>
 * </ucd-theme-brand-textbox>
 */
export default class UcdThemeBrandTextbox extends LitElement {

  static get properties() {
    return {
      brandColor: {type: String, attribute: 'brand-color'},
      collapsible: {type: Boolean},
      collapsed: {type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.collapsible = false;
    this.collapsed = false;
    this.brandColor = "";
    this.render = render.bind(this);
  }

  /**
   * @method _getBaseClasses
   * @description Returns CSS classes for this element's first child
   * @private
   * @returns {Object}
   */
  _getBaseClasses(){
    const out = {
      "brand-textbox": true,
      "category-brand__background": true,
    };
    out[`category-brand--${this.brandColor}`] = this.brandColor;
    out['brand-textbox--collapsible'] = this.collapsible;
    out['brand-textbox--closed'] = this.collapsible && this.collapsed;

    return out;
  }

  /**
   * @method _onSlotchange
   * @param {Event} e
   * @description fires when a slot value changes. 
   * assigns category-brand__background class so that slotted children are correct color
   * @private
   */
  _onSlotchange(e){
    const childNodes = e.target.assignedNodes({flatten: true});
    childNodes.forEach(child => {
      if ( child.nodeType === Node.ELEMENT_NODE ){
        child.classList.add('category-brand__background');
      }
    });
  }

}

customElements.define('ucd-theme-brand-textbox', UcdThemeBrandTextbox);