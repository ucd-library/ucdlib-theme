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
      navType: {type: String, attribute: "nav-type"},
      styleModifiers: {type: String, attribute: "style-modifiers"},
      hoverDelay: {type: Number, attribute: "hover-delay"},
      animationDuration: {type: Number, attribute: "animation-duration"},
      navItems: {type: Array},
      maxDepth: {type: Number, attribute: "max-depth"},
      _megaIsOpen: {type: Boolean, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.navType = "superfish";
    this.styleModifiers = "";
    this.hoverDelay = 300;
    this.animationDuration = 300;
    this.navItems = [];
    this.maxDepth = 2;

    this._classPrefix = "primary-nav";
    this._mobileBreakPoint = 992;
    this._acceptedNavTypes = ['superfish', 'mega'];
    this._megaIsOpen = false;
  }

  /**
   * @method getNavClasses
   * @description Get classes to be applied to the top-level 'nav' element
   * @returns {String}
   */
  getNavClasses(){
    let navType = this._acceptedNavTypes[0];
    if ( this._acceptedNavTypes.includes(this.navType.toLowerCase()) ) navType = this.navType;
    
    this.navType ? `${this._classPrefix}--${this.navType}` : "";
    let styleModifiers = "";
    if ( this.styleModifiers ) {
      styleModifiers = this.styleModifiers.split(" ").map(mod => `${this._classPrefix}--${mod}`).join(" ");
    }
    let megaIsOpen = this.isMegaMenu() && this._megaIsOpen ? 'is-hover' : '';
    return `${this._classPrefix} ${this._classPrefix}--${navType} ${styleModifiers} ${megaIsOpen}`;
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
    } else if ( ele.tagName === 'LI' ) {
      linkText = ele.innerText;
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
        id="nav--${location.join("-")}"
        .key=${location}
        @mouseenter=${this._onItemMouseenter} 
        @mouseleave=${this._onItemMouseleave}
        class="depth-${depth} ${navItem.isOpen ? 'sf--hover' : ''} ${navItem.isClosing ? 'closing': ''}">
        <div class="submenu-toggle__wrapper ${depth === 0 ? `${this._classPrefix}__top-link` : ''}">
          <a 
            href=${navItem.href} 
            @focus=${this._onItemFocus}>
            ${navItem.linkText}<span class="${this._classPrefix}__submenu-indicator"></span>
          </a>
          <button 
          @click=${() => this._toggleMobileMenu(location)}
          class="submenu-toggle ${navItem.isOpen ? 'submenu-toggle--open' : ''}" 
          ?disabled=${navItem.isTransitioning}
          aria-label="Toggle Submenu">
          <span class="submenu-toggle__icon"></span>
        </button>
        </div>
        <ul class="menu ${navItem.isOpen ? "menu--open" : ""}" style=${styleMap(this.getItemMobileStyles(location))}>
          ${navItem.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
        </ul>
      </li>
    `;
    }

    // render as normal link
    return html`
      <li id="nav--${location.join("-")}" .key=${location} class="depth-${depth}">
        <div class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
          ${navItem.href ? html`
            <a href=${navItem.href}>${navItem.linkText}</a>
          ` : html`
            <span class="${this._classPrefix}__nolink">${navItem.linkText}</span>
          `}
        </div>
      </li>
    `;
  }

  /**
   * @method _toggleMobileMenu
   * @description Expands/collapses mobile subnavs with animation on user click.
   * @param {Array} navLocation - Array coordinates of corresponding nav item
   */
  async _toggleMobileMenu(navLocation){
    if ( window.innerWidth >= this._mobileBreakPoint ) return;
    let navItem = this.getNavItem(navLocation);
    if ( navItem.isOpen ) {
      this.closeSubNav(navLocation);
    } else {
      this.openSubNav(navLocation);
    }
  }

  /**
   * @method _onNavMouseenter
   * @description Attached to top-level nav element. Opens mega menu in desktop view
   */
  _onNavMouseenter(){
    if ( 
      window.innerWidth < this._mobileBreakPoint || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    this._megaTimeout = setTimeout(() => {
      this.openSubNav();
    }, this.hoverDelay);
  }

  /**
   * @method _onNavMouseleave
   * @description Attached to top-level nav element. Closes mega menu in desktop view
   */
  _onNavMouseleave(){
    if ( 
      window.innerWidth < this._mobileBreakPoint || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    
    this._megaTimeout = setTimeout(() => {
      this.closeSubNav();
    }, this.hoverDelay);
  }

  _onNavFocusin(){
    if ( 
      window.innerWidth < this._mobileBreakPoint || 
      !this.isMegaMenu() ) 
      return;
    
    if ( this._megaIsOpen ) return;
    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    
    this._megaTimeout = setTimeout(() => {
      this.closeSubNav();
    }, this.hoverDelay);

  }


  /**
   * @method _onItemMouseenter
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseenter(e){
    if ( window.innerWidth < this._mobileBreakPoint || this.isMegaMenu() ) return;
    this.openSubNav(e.target.key);
  }

  /**
   * @method _onItemFocus
   * @description Bound to nav a elements
   * @param {Event} e 
   */
  _onItemFocus(e){
    if ( window.innerWidth < this._mobileBreakPoint ) return;
    const LI = e.target.parentElement.parentElement;
    this.openSubNav(LI.key);
  }

  /**
   * @method openSubNav
   * @description Opens the specified subnav
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns 
   */
  async openSubNav(navLocation){

    // mega menu
    if ( this.isMegaMenu() ){
      this._megaIsOpen = true;
      return;
    }

    // non-mega menu
    if ( 
      typeof navLocation !== 'object' ||
      !Array.isArray(navLocation) ||
      navLocation.length === 0
    ) return;
    let navItem = this.getNavItem(navLocation);
    if ( !navItem ) return;

    // Open on mobile
    if ( window.innerWidth < this._mobileBreakPoint ) {
      let nav = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
      if ( !nav ) return;
      let ul = nav.querySelector('ul');
      if ( !ul ) return;
      if ( navItem.isTransitioning ) return;
      navItem.isTransitioning = true;

      // Get expanded height
      navItem.mobileStyles.display = "block";
      navItem.mobileStyles.height = 0 + "px";
      this.requestUpdate();
      await this.updateComplete;
      const expandedHeight = ul.scrollHeight + "px";

      // Set expanded height
      navItem.mobileStyles.height = expandedHeight;
      this.requestUpdate();
      await this.updateComplete;

      // Remove transition state after animation duration
      this._completeMobileTransition(navItem);


    // Open on desktop
    } else {
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
  }

  /**
   * @method _completeMobileTransition
   * @description Sets timeout to remove animation styles from mobile transition
   * @param {Object} navItem - Member 'navItems' element property.
   */
  _completeMobileTransition(navItem){
    navItem.timeout = setTimeout(() => {
      navItem.mobileStyles = {};
      navItem.isOpen = !navItem.isOpen;
      navItem.isTransitioning = false;
      this.requestUpdate();
    }, this.animationDuration);
  }

  /**
   * @method isMegaMenu
   * @description Does this element use the mega menu?
   * @returns {Boolean}
   */
  isMegaMenu(){
    if ( this.navType.toLowerCase().trim() === 'mega') return true;
    return false;
  }

  /**
   * @method _onItemMouseleave
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseleave(e){
    if ( window.innerWidth < this._mobileBreakPoint || this.isMegaMenu() ) return;
    this.closeSubNav(e.target.key);
  }

  /**
   * @method _onNavFocusout
   * @description Attached to the top-level nav element. Closes subnav if it doesn't contain focused link.
   */
  _onNavFocusout(){
    if ( window.innerWidth < this._mobileBreakPoint ) return;
    if ( this.isMegaMenu() ) {
      if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
      requestAnimationFrame(() => {
        const focusedEle = this.renderRoot.activeElement;
        if ( focusedEle ) return;
        this._megaTimeout = setTimeout(() => {
          this.closeSubNav();
        }, this.hoverDelay);
      });

    } else {
      requestAnimationFrame(() => {
        const focusedEle = this.renderRoot.activeElement;
        if ( !focusedEle ) {
          this.closeAllSubNavs();
          return;
        }
        
        let ele = focusedEle;
        while ( 
          ele &&
          ele.tagName !== this.tagName &&
          !Array.isArray(ele.key) 
        ){
          ele = ele.parentElement;
        }
        if ( !ele.key ) return;
        let navLocation = [...ele.key];
        let currentIndex = navLocation.pop();
        let navSiblings = navLocation.length == 0 ? this.navItems : this.getNavItem(navLocation).subItems;
        navSiblings.forEach((sibling, i) => {
          if ( i !== currentIndex) {
            sibling.isOpen = false;
            this.closeAllSubNavs(sibling.subItems, false);
          }
        });
        this.requestUpdate();
      });

    }

  }

  /**
   * @method closeSubNav
   * @description Closes a subnav given its coordinates 
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns 
   */
  async closeSubNav(navLocation){

    // mega menu
    if ( this.isMegaMenu() ){
      this._megaIsOpen = false;
      return;
    }

    if ( 
      typeof navLocation !== 'object' ||
      !Array.isArray(navLocation) ||
      navLocation.length === 0
    ) return;
    let navItem = this.getNavItem(navLocation);
    if ( !navItem ) return;

    // Open on mobile
    if ( window.innerWidth < this._mobileBreakPoint ) {
      let nav = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
      if ( !nav ) return;
      let ul = nav.querySelector('ul');
      if ( !ul ) return;
      if ( navItem.isTransitioning ) return;
      navItem.isTransitioning = true;

      // Set expanded height
      navItem.mobileStyles.height = ul.scrollHeight + "px";
      navItem.mobileStyles.display = "block";
      this.requestUpdate();
      await this.updateComplete;

      // Set height to 0
      requestAnimationFrame(() => {
        navItem.mobileStyles.height = "0px";
        this.requestUpdate();
      });

      // Remove transition state after animation duration
      this._completeMobileTransition(navItem);
    

    // Open on desktop
    } else {
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
    
  }

  /**
   * @method closeAllSubNavs
   * @description Recursively closes all nav submenus within specified menu.
   * @param {Array} navItems - The subItems property of any object within the 'navItems' element property.
   * @param {Boolean} requestUpdate - Should an update be requested after each subnav closing?
   */
  closeAllSubNavs(navItems, requestUpdate=true){
    if ( !navItems ) navItems = this.navItems;
    navItems.forEach((navItem) => {
      if ( navItem.isOpen ) {
        navItem.isOpen = false;
        if ( requestUpdate ) this.requestUpdate();
      }
      if ( navItem.subItems ) {
        this.closeAllSubNavs(navItem.subItems);
      }
    });
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

  /**
   * @method getItemMobileStyles
   * @description Returns inline styles on a nav element (used for mobile transition animation)
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Object} - Style map
   */
  getItemMobileStyles(location) {
    if ( window.innerWidth >= this._mobileBreakPoint ) return {};
    let navItem = this.getNavItem(location);
    if ( !navItem.mobileStyles ) return {};
    return navItem.mobileStyles;
  }

  /**
   * @method clearMobileStyles
   * @description Removes inline styles on a nav element (used for mobile transition animation)
   * @param {Object} navItem - Member of the this.navItems array
   */
  clearMobileStyles(navItem){
    if (
      navItem &&
      navItem.mobileStyles && 
      Object.keys(navItem.mobileStyles).length > 0 
    ) {
      navItem.mobileStyles = {};
      this.requestUpdate();
    }
  }

}

customElements.define('ucd-theme-primary-nav', UcdThemePrimaryNav);