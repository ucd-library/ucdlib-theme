import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-primary-nav.tpl.js";
import { styleMap } from 'lit/directives/style-map.js';

import Mixin from "../../utils/mixin";
import { MutationObserverElement } from "../../utils/mutation-observer";

/**
 * @class UcdThemePrimaryNav
 * @classdesc Component class for displaying a primary site nav
 * Pattern Lab Url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html
 * 
 * @property {String} styleModifier - Apply an alternate style with a keyword:
 *  'superfish' - The default
 *  'mega' - Hovering over any top-level link opens a single nav with all subnav links
 * @property {Number} hoverDelay - How long (ms) after hover will menu open/close
 * @property {Number} animationDuration - How long (ms) for a menu to fade in/out
 * @property {Number} maxDepth - Maximum number of submenus to show
 * 
 * @example
 * html`
 *  <ucd-theme-primary-nav>
 *    <a href="#">link 1</a>
 *    <a href="#">link 2</a>
 *    <ul link-title="link with subnav" href="#">
 *      <li><a href="#">subnav link 1</a></li>
 *    </ul>
 *  </ucd-theme-primary-nav>
 * `
 */
export default class UcdThemePrimaryNav extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      styleModifier: {type: String, attribute: "style-modifier"},
      hoverDelay: {type: Number, attribute: "hover-delay"},
      animationDuration: {type: Number, attribute: "animation-duration"},
      navItems: {type: Array},
      maxDepth: {type: Number, attribute: "max-depth"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.styleModifier = "superfish";
    this.hoverDelay = 300;
    this.animationDuration = 300;
    this.navItems = [];
    this.maxDepth = 2;

    this._classPrefix = "primary-nav";
  }

  /**
   * @method _onChildListMutation
   * @description Fires when light dom child list changes. Injected by MutationObserverElement mixin.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    const children = Array.from(this.children);

    let navItems = children.map((child) => this._makeNavItemTree(child)).filter(navItem => navItem.linkText);
    if ( navItems.length ) this.navItems = navItems;
  }

  /**
   * @method _makeNavItemTree
   * @description Extracts menu item data from DOM Element
   * @param {DOM Node} ele - Element
   * @returns {Object} Formatted object describing the menu item and its children
   */
  _makeNavItemTree(ele){
    let linkText, href, subItems = [], isOpen=false, mobileStyles={};
    if ( ele.tagName === 'LI' && ele.children.length > 0) ele = ele.children[0];

    if ( ele.tagName === 'A' ) {
      linkText = ele.innerText;
      href = ele.href;
    } else if ( ele.tagName === 'OL' || ele.tagName === 'UL' ) {
      linkText = ele.getAttribute('link-text');
      href = ele.getAttribute('href');

      for (const child of Array.from(ele.children)) {
        let childItem = this._makeNavItemTree(child);
        if ( childItem.linkText ) subItems.push(childItem);
      }
    }

    if ( linkText ) linkText = linkText.trim();
    return {linkText, href, subItems, isOpen, mobileStyles};

  }

  /**
   * @method _renderNavItem
   * @description Renders a menu item and all its children to the specified max depth
   * @param {Object} navItem - An item from the 'navItems' element property
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]
   * @returns {TemplateResult}
   */
  _renderNavItem(navItem, location){
    const depth = location.length - 1;

    // Render item and its subnav
    if ( this._hasSubNav(navItem) && depth < this.maxDepth) {
      return html`
      <li 
        .key=${location}
        @mouseenter=${this._onItemMouseenter} 
        @mouseleave=${this._onItemMouseleave}
        class="${navItem.isOpen ? 'sf--hover' : ''} ${navItem.isClosing ? 'closing': ''}">
        <div class="submenu-toggle__wrapper ${depth === 0 ? `${this._classPrefix}__top-link` : ''}">
          <a href=${navItem.href}>${navItem.linkText}<span class="${this._classPrefix}__submenu-indicator"></span></a>
          <button 
          @click=${(e) => this._toggleMobileMenu(e.target, location)}
          class="submenu-toggle ${navItem.isOpen ? 'submenu-toggle--open' : ''}" 
          aria-label="Toggle Submenu">
          <span class="submenu-toggle__icon"></span>
        </button>
        </div>
        <ul class="menu" style=${styleMap(this.getItemMobileStyles(location))}>
          ${navItem.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
        </ul>
      </li>
    `;
    }

    // render as normal link
    return html`
      <li .key=${location} class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
        ${navItem.href ? html`
          <a href=${navItem.href}>${navItem.linkText}</a>
        ` : html`
          <span class="${this._classPrefix}__nolink">${navItem.linkText}</span>
        `}
      </li>
    `;
  }

  // this is a disaster
  async _toggleMobileMenu(ele, navLocation){
    if ( window.innerWidth >= 992 ) return;
    let ul = ele.parentElement.nextElementSibling;
    if ( !ul || ul.tagName !== 'UL' ) return;
    let navItem = this.getNavItem(navLocation);
    
    // collapse menu
    if ( navItem.isOpen ) {
      navItem.mobileStyles.height = ul.scrollHeight + "px";
      navItem.mobileStyles.display = "block";
      navItem.mobileStyles.transition = "height 300ms";
      this.requestUpdate();
      await this.updateComplete;
      navItem.mobileStyles.height = "0px";
      this.requestUpdate();
      await this.updateComplete;
      let onClose = () => {
        console.log("hello");
        ul.removeEventListener('transitionend', onClose);
        navItem.mobileStyles = {};
        navItem.isOpen = !navItem.isOpen;
        this.requestUpdate();
      };
      ul.addEventListener('transitionend', onClose);


    // expand menu
    } else {
      navItem.mobileStyles.display = "block";
      navItem.mobileStyles.height = 0 + "px";
      this.requestUpdate();
      await this.updateComplete;
      navItem.mobileStyles.height = ul.scrollHeight + "px";
      let onOpen = () => {
        ul.removeEventListener('transitionend', onOpen);
        //if (navItem.mobileStyles.height) delete navItem.mobileStyles.height;
        navItem.isOpen = !navItem.isOpen;
        this.requestUpdate();
      };
      ul.addEventListener('transitionend', onOpen);

      

    }
    this.requestUpdate();

  }

  /**
   * @method _onItemMouseenter
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseenter(e){
    if ( window.innerWidth < 992 ) return;
    let navLocation = e.target.key;
    let navItem = this.getNavItem(navLocation);
    this.clearMobileStyles(navItem);
    if ( navItem.isClosing ) {
      navItem.isClosing = false;
      this.requestUpdate();
    }
    if ( navItem.timeout ) clearTimeout(navItem.timeout);
    if ( navItem.isOpen ) return;

    
    navItem.timeout = setTimeout(() => {
      navItem.isOpen = true;
      this.requestUpdate();
    }, this.hoverDelay);
    
    
  }

  /**
   * @method _onItemMouseleave
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   * @returns 
   */
  _onItemMouseleave(e){
    if ( window.innerWidth < 992 ) return;
    let navLocation = e.target.key;
    let navItem = this.getNavItem(navLocation);
    this.clearMobileStyles(navItem);
    if ( navItem.timeout ) clearTimeout(navItem.timeout);
    if ( !navItem.isOpen ) return;

    navItem.isClosing = true;
    this.requestUpdate();
    navItem.timeout = setTimeout(() => {
      navItem.isOpen = false;
      navItem.isClosing = false;
      this.requestUpdate();
    }, this.hoverDelay + this.animationDuration);
  }

  /**
   * @method _hasSubNav
   * @description Utility function for determining if a menu has subitems
   * @param {Object} navItem - A member of the navItems array.
   * @returns {Boolean}
   */
  _hasSubNav(navItem){
    if ( navItem && navItem.subItems && navItem.subItems.length) return true;
    return false;
  }

  /**
   * @method getNavItem
   * @description Retrieves an item from the navItems array.
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Object}
   */
  getNavItem(location){
    let accessor = "this.navItems";
    if ( location && location.length > 0) {
      accessor += "[" + location.join("].subItems[") + "]";
    }
    return eval(accessor);
  }

  getItemMobileStyles(location) {
    if ( window.innerWidth >= 992 ) return {};
    let navItem = this.getNavItem(location);
    if ( !navItem.mobileStyles ) return {};
    return navItem.mobileStyles;
  }

  clearMobileStyles(navItem){
    if (navItem.mobileStyles && Object.keys(navItem.mobileStyles).length > 0 ) {
      navItem.mobileStyles = {};
      this.requestUpdate();
    }
  }

}

customElements.define('ucd-theme-primary-nav', UcdThemePrimaryNav);