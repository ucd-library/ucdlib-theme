import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-quick-links.tpl.js";

import { Mixin, MutationObserverElement } from "../../utils/index.js";

/**
 * @class UcdThemeQuickLinks
 * @classdesc Component class for displaying a quick links nav
 *  Patternlab Url:
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-2-columns
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-highlight
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-home-site
 * @property {String} title - Text to be displayed instead of "Quick Links"
 */
export default class UcdThemeQuickLinks extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      title: {type: String},
      styleModifiers: {type: String, attribute: "style-modifiers"},
      open: {type: Boolean},
      _links: {type: Array, state: true},
      _customIcons: {type: Boolean, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.title = "Quick Links";
    this.styleModifiers = "";
    this.open = false;
    this._links = [];

    this._classPrefix = "quick-links";
    this._mobileBreakPoint = 992;
    this._customIcons = false;
  }

  /**
  * @method isDesktop
  * @description Is the desktop view currently active?
  * @returns {Boolean}
  */
  isDesktop(){
    return window.innerWidth >= this._mobileBreakPoint;
  }

  /**
   * @method isMobile
   * @description Is the mobile view currently active?
   * @returns {Boolean}
   */
  isMobile(){
    return !this.isDesktop();
  }

  /**
   * @method _getNavClasses
   * @private
   * @description Get classes to be applied to the 'nav' element
   * @returns {Object}
   */
  _getNavClasses(){
    let classes = {};
    classes[`${this._classPrefix}__menu`] = true;
    
    if ( this.styleModifiers ) {
      this.styleModifiers.split(" ").forEach(mod => {
        if (mod) classes[`${this._classPrefix}--${mod}`] = true;
      });
    }

    return classes;
  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Fires when light dom child list changes. Injected by MutationObserverElement mixin.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    
    // remove any slotted icons created from a previous render
    this.querySelectorAll('slot').forEach(ele => ele.remove());
    this._customIcons = false;

    let links = [];
    this.querySelectorAll('a').forEach((child, index) => {
      if (child.tagName !== "A")  return;
      let link = {};

      // if first child exists, we assume it is an icon
      if ( 
        child.childElementCount > 0 && 
        index < 3 &&
        child.children[0].tagName !== 'A'
      ){
        this._customIcons = true;
        let icon = child.children[0].cloneNode(true);
        let iconSlot = `icon-${index}`;
        icon.setAttribute('slot', iconSlot);
        this.appendChild(icon);
        link.iconSlot = iconSlot;
      }

      if ( child.href ) link.href = child.href;
      link.text = child.innerText;

      links.push(link);
    });

    if ( links.length > 0 ) this._links = links;
  }
  

}

customElements.define('ucd-theme-quick-links', UcdThemeQuickLinks);