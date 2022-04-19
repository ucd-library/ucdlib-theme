import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-primary-nav.tpl.js";
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Mixin, NavElement } from "../../utils/mixins";
import { MutationObserverController, BreakPointsController } from '../../utils/controllers';

/**
 * @class UcdThemePrimaryNav
 * @classdesc Component class for displaying a primary site nav
 * 
 * Pattern Lab Url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html
 * 
 * @property {String} navType - The primary style type of the nav:
 *  'superfish' - The default
 *  'mega' - Hovering over any top-level link opens a single nav with all subnav links
 * @property {String} styleModifiers - Apply alternate styles with a space-separated list.
 *  e.g. 'justify' for 'primary-nav--justify'
 * @property {Number} hoverDelay - How long (ms) after hover will menu open/close
 * @property {Number} animationDuration - How long (ms) for a menu to fade in/out
 * @property {Number} maxDepth - Maximum number of submenus to show
 * 
 * @example
 *  <ucd-theme-primary-nav>
 *    <a href="#">link 1</a>
 *    <a href="#">link 2</a>
 *    <ul link-title="link with subnav" href="#">
 *      <li><a href="#">subnav link 1</a></li>
 *    </ul>
 *  </ucd-theme-primary-nav>
 */
export default class UcdThemePrimaryNav extends Mixin(LitElement)
  .with(NavElement) {

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
    this.mutationObserver = new MutationObserverController(this, {subtree: true, childList: true});
    this.breakPoints = new BreakPointsController(this);

    this.navType = "superfish";
    this.styleModifiers = "";
    this.hoverDelay = 300;
    this.animationDuration = 300;

    this._classPrefix = "primary-nav";
    this._acceptedNavTypes = ['superfish', 'mega'];
    this._megaIsOpen = false;
  }

  /**
   * @method openMegaNav
   * @description Opens the meganav menu
   */
  openMegaNav() {
    this._megaIsOpen = true;
  }
    
  /**
   * @method closeMegaNav
   * @description Closes the meganav menu
   */
  closeMegaNav(){
    this._megaIsOpen = false;
  }

  /**
   * @method openSubNav
   * @description Opens the specified subnav
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   */
  async openSubNav(navLocation){

    // non-mega menu
    if ( 
      typeof navLocation !== 'object' ||
      !Array.isArray(navLocation) ||
      navLocation.length === 0
    ) return;
    let navItem = this.getNavItem(navLocation);
    if ( !navItem ) return;

    // Open on mobile
    if ( this.breakPoints.isMobile() ) {
      let nav = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
      if ( !nav ) return;
      let ul = nav.querySelector('ul');
      if ( !ul ) return;
      if ( navItem.isTransitioning ) return;
      navItem.isTransitioning = true;

      // Get expanded height
      navItem.inlineStyles.display = "block";
      navItem.inlineStyles.height = 0 + "px";
      this.requestUpdate();
      await this.updateComplete;
      const expandedHeight = ul.scrollHeight + "px";

      // Set expanded height
      navItem.inlineStyles.height = expandedHeight;
      this.requestUpdate();
      await this.updateComplete;

      // Remove transition state after animation duration
      this._completeMobileTransition(navItem);


    // Open on desktop
    } else {

      // mega menu
      if ( this.isMegaMenu() ){
        return;
      }

      this.clearItemInlineStyles(navItem);
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
   * @method closeSubNav
   * @description Closes a subnav given its coordinates 
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   */
  async closeSubNav(navLocation){

    if ( 
      typeof navLocation !== 'object' ||
      !Array.isArray(navLocation) ||
      navLocation.length === 0
    ) return;
    let navItem = this.getNavItem(navLocation);
    if ( !navItem ) return;

    // close on mobile
    if ( this.breakPoints.isMobile() ) {
      let nav = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
      if ( !nav ) return;
      let ul = nav.querySelector('ul');
      if ( !ul ) return;
      if ( navItem.isTransitioning ) return;
      navItem.isTransitioning = true;

      // Set expanded height
      navItem.inlineStyles.height = ul.scrollHeight + "px";
      navItem.inlineStyles.display = "block";
      this.requestUpdate();
      await this.updateComplete;

      // Set height to 0 by requesting all of the animation frames :-(
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navItem.inlineStyles.height = "0px";
          this.requestUpdate();
  
          requestAnimationFrame(() => {
            // Remove transition state after animation duration
            this._completeMobileTransition(navItem);
          });

        });
      });
    

    // close on desktop
    } else {

      // mega menu
      if ( this.isMegaMenu() ){
        return;
      }


      this.clearItemInlineStyles(navItem);
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
   * @method isMegaMenu
   * @description Does this element use the mega menu?
   * @returns {Boolean}
   */
  isMegaMenu(){
    if ( this.navType.toLowerCase().trim() === 'mega') return true;
    return false;
  }

  /**
   * @method _getNavClasses
   * @private
   * @description Get classes to be applied to the top-level 'nav' element
   * @returns {String}
   */
  _getNavClasses(){
    let navType = this._acceptedNavTypes[0];
    if ( this._acceptedNavTypes.includes(this.navType.toLowerCase()) ) navType = this.navType;
    
    let styleModifiers = "";
    if ( this.styleModifiers ) {
      styleModifiers = this.styleModifiers.split(" ").map(mod => `${this._classPrefix}--${mod}`).join(" ");
    }
    let megaIsOpen = this.isMegaMenu() && this._megaIsOpen ? 'is-hover' : '';
    return `${this._classPrefix} ${this._classPrefix}--${navType} ${styleModifiers} ${megaIsOpen}`;
  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Fires when light dom child list changes. Injected by MutationObserverController.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    let navItems = this.parseNavChildren();
    if ( navItems.length ) this.navItems = navItems;
  }

  /**
   * @method _renderNavItem
   * @private
   * @description Renders a menu item and all its children to the specified max depth
   * @param {Object} navItem - An item from the 'navItems' element property
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]
   * @returns {TemplateResult}
   */
  _renderNavItem(navItem, location){
    const depth = location.length - 1;

    // Render item and its subnav
    if ( this.itemHasSubNav(navItem) && depth < this.maxDepth) {
      return html`
      <li 
        id="nav--${location.join("-")}"
        .key=${location}
        .hasnav=${true}
        @mouseenter=${this._onItemMouseenter} 
        @mouseleave=${this._onItemMouseleave}
        class=${classMap(this._makeLiClassMap(navItem, depth))}>
        <div class="submenu-toggle__wrapper ${depth === 0 ? `${this._classPrefix}__top-link` : ''}">
          <a 
            href=${ifDefined(navItem.href ? navItem.href : null)}
            tabindex=${this._setTabIndex(depth)}
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
        <ul class="menu ${navItem.isOpen ? "menu--open" : ""}" style=${styleMap(this._getItemMobileStyles(location))}>
          ${navItem.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
        </ul>
      </li>
    `;
    }

    // render as normal link
    return html`
      <li id="nav--${location.join("-")}" .key=${location} class=${classMap(this._makeLiClassMap(navItem, depth))}>
        <div class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
          ${navItem.href ? html`
            <a 
              href=${navItem.href} 
              @focus=${this._onItemFocus}
              tabindex=${this._setTabIndex(depth)}>
              ${navItem.linkText}</a>
          ` : html`
            <span class="${this._classPrefix}__nolink">${navItem.linkText}</span>
          `}
        </div>
      </li>
    `;
  }

  /**
   * @method _setTabIndex
   * @private
   * @description Sets the tab index of menu links
   * @param {Number} depth - Level of the menu link
   * @returns {Number}
   */
  _setTabIndex(depth=0){
    let i = 0;
    if (
      this.isMegaMenu() && 
      depth > 0 && 
      !this._megaIsOpen &&
      this.breakPoints.isDesktop()
    ) i = -1;

    return i;
  }

  /**
   * @method _makeLiClassMap
   * @private
   * @description Classes to be assigned to each LI element in the nav.
   * @param {Object} navItem - An item in the navItems property.
   * @param {Number} depth - Depth of the navItem
   * @returns {Object}
   */
  _makeLiClassMap(navItem, depth=0){
    let classes = {};
    classes[`depth-${depth}`] = true;
    if ( navItem.isOpen ) classes['sf--hover'] = true;
    if ( navItem.isClosing ) classes.closing = true;
    if (navItem.megaFocus) classes['mega-focus'] = true;
    return classes;
  }

  /**
   * @method _toggleMobileMenu
   * @private
   * @description Expands/collapses mobile subnavs with animation on user click.
   * @param {Array} navLocation - Array coordinates of corresponding nav item
   */
  async _toggleMobileMenu(navLocation){
    if ( this.breakPoints.isDesktop() ) return;
    let navItem = this.getNavItem(navLocation);
    if ( navItem.isOpen ) {
      this.closeSubNav(navLocation);
    } else {
      this.openSubNav(navLocation);
    }
  }

  /**
   * @method _onNavMouseenter
   * @private
   * @description Attached to top-level nav element. Opens mega menu in desktop view
   */
  _onNavMouseenter(){
    if ( 
      this.breakPoints.isMobile() || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    this._megaTimeout = setTimeout(() => {
      this.openMegaNav();
    }, this.hoverDelay);
  }

  /**
   * @method _onNavMouseleave
   * @private
   * @description Attached to top-level nav element. Closes mega menu in desktop view
   */
  _onNavMouseleave(){
    if ( 
      this.breakPoints.isMobile() || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    
    this._megaTimeout = setTimeout(() => {
      this.closeMegaNav();
    }, this.hoverDelay);
  }

  /**
   * @method _onNavFocusin
   * @private
   * @description Fires when focus enters the main nav element. Used to open the meganav
   */
  _onNavFocusin(){
    if ( 
      this.breakPoints.isMobile() || 
      !this.isMegaMenu() ) 
      return;
    
    if ( this._megaIsOpen ) return;
    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    
    this._megaTimeout = setTimeout(() => {
      this.openMegaNav();
    }, this.hoverDelay);

  }


  /**
   * @method _onItemMouseenter
   * @private
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseenter(e){
    if ( this.breakPoints.isMobile() ) return;
    this.openSubNav(e.target.key);
  }

  /**
   * @method _onItemFocus
   * @private
   * @description Bound to nav a elements
   * @param {Event} e 
   */
  _onItemFocus(e){
    if ( this.breakPoints.isMobile() ) return;
    const LI = e.target.parentElement.parentElement;

    if (LI.hasnav) {
      this.openSubNav(LI.key);
    }
  
    if (this.isMegaMenu() && this._megaIsOpen) {
      this._setMegaFocus(LI.key);
    }
  }

  /**
   * @method _setMegaFocus
   * @private
   * @description Displays custom styling to meganav item when focused to fix bug in sitefarm code.
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   */
  _setMegaFocus(navLocation){
    this.navItems.forEach((nav) => nav.megaFocus = false);
    if ( 
      typeof navLocation !== 'object' ||
      !Array.isArray(navLocation) ||
      navLocation.length < 1
    ) return;
    let navItem = this.getNavItem([navLocation[0]]);
    navItem.megaFocus = true;
    this.requestUpdate();

  }

  /**
   * @method _completeMobileTransition
   * @private
   * @description Sets timeout to remove animation styles from mobile transition
   * @param {Object} navItem - Member 'navItems' element property.
   */
  _completeMobileTransition(navItem){
    navItem.timeout = setTimeout(() => {
      navItem.inlineStyles = {};
      navItem.isOpen = !navItem.isOpen;
      navItem.isTransitioning = false;
      this.requestUpdate();
    }, this.animationDuration);
  }

  /**
   * @method _onItemMouseleave
   * @private
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseleave(e){
    if ( this.breakPoints.isMobile() || this.isMegaMenu() ) return;
    this.closeSubNav(e.target.key);
  }

  /**
   * @method _onNavFocusout
   * @private
   * @description Attached to the top-level nav element. Closes subnav if it doesn't contain focused link.
   */
  _onNavFocusout(){
    if ( this.breakPoints.isMobile() ) return;
    if ( this.isMegaMenu() ) {
      if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
      requestAnimationFrame(() => {
        const focusedEle = this.renderRoot.activeElement;
        if ( focusedEle ) return;
        this._megaTimeout = setTimeout(() => {
          this.navItems.forEach((nav) => nav.megaFocus = false);
          this.closeMegaNav();
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
   * @method _getItemMobileStyles
   * @private
   * @description Returns inline styles on a nav element (used for mobile transition animation)
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Object} - Style map
   */
  _getItemMobileStyles(location) {
    if ( this.breakPoints.isDesktop() ) return {};
    let navItem = this.getNavItem(location);
    if ( !navItem.inlineStyles ) return {};
    return navItem.inlineStyles;
  }

}

customElements.define('ucd-theme-primary-nav', UcdThemePrimaryNav);