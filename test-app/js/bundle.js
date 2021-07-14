/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../elements/brand/ucd-theme-pagination/ucd-theme-pagination.js":
/*!**********************************************************************!*\
  !*** ../elements/brand/ucd-theme-pagination/ucd-theme-pagination.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemePagination)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-pagination.tpl.js */ "../elements/brand/ucd-theme-pagination/ucd-theme-pagination.tpl.js");



/**
 * @class UcdThemePagination
 * @classdesc Component class for pagination
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination
 * 
 * @property {String} base-path - for anchor tag href
 * @property {String} current-page - Page to show and highlight
 * @property {String} max-pages - Max number of total pages
 * @property {String} visible-link-count - How many page links to show
 * 
 * @examples
 * 
 * <ucd-theme-pagination
 *  current-page="50"
 *  max-pages="100"
 *  use-hash>
 * </ucd-theme-pagination>
 * <ucd-theme-pagination
 *  current-page="1"
 *  max-pages="10">
 * </ucd-theme-pagination>
 * <ucd-theme-pagination
 *  current-page="2"
 *  max-pages="33"
 *  base-path="/foo/bar/">
 * </ucd-theme-pagination>
 * 
 */
class UcdThemePagination extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      basePath : {
        type: String, 
        attribute: 'base-path'
      },
      useHash : {
        type: Boolean, 
        attribute: 'use-hash'
      },
      currentPage : {
        type : Number,
        attribute: 'current-page',
        reflect: true
      },
      maxPages : {
        type : Number,
        attribute : 'max-pages'
      },
      visibleLinkCount : {
        type : Number,
        attribute : 'visible-link-count'
      },
      _pages : {type: Array}
    }
  }

  static get styles() {
    return (0,_ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();

    this._pages = [];
    this.useHash = false;
    this.type = 'virtual';
    this.basePath = '';
    this.visibleLinkCount = 7;
    this.currentPage = 1;
    this.maxPages = 1;

    this.render = _ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
  }

  updated(props) {
    if( props.has('currentPage') ) {
      let startIndex = Math.floor(this.currentPage - (this.visibleLinkCount/2));
      
      if( startIndex < 0 ) {
        startIndex = 0;
      } else if( (this.currentPage + (this.visibleLinkCount/2)) > this.maxPages ) {
        startIndex -= Math.ceil(this.currentPage + (this.visibleLinkCount/2)) - this.maxPages - 1;
      }
      if( startIndex < 0 ) {
        startIndex = 0;
      }

      let endIndex = startIndex + this.visibleLinkCount;
      if( endIndex > this.maxPages ) endIndex = this.maxPages;

      let pages = [];
      for( let i = startIndex; i < endIndex; i++ ) {
        pages.push(i+1);
      }
      this._pages = pages;
    }
  }

  _renderLink(page, args={}) {
    if( page < 1 ) page = 1;
    if( page > this.maxPages ) page = this.maxPages;

    if( args.noHighlight !== true && page === this.currentPage ) {
      if( !args.class ) args.class = '';
      args.class += ' pager__item--current';
    }

    if( !this.basePath && !this.useHash ) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<li  class="pager__item ${args.class || ''}">
        <a style="cursor:pointer" tabindex="1" @click="${this._onPageClicked}" page="${page}">${args.label || page}</a>
      </li>`;
    }

    let href = (this.useHash ? '#' : '') + (this.basePath || '/') + page;
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<li class="pager__item ${args.class || ''}">
      <a href="${href}">${args.label || page}</a>
    </li>`;
  }


  _onPageClicked(e) {
    this.dispatchEvent(new CustomEvent('page-change', {
      detail : {page: parseInt(e.currentTarget.getAttribute('page'))}
    }));
  }


}

customElements.define('ucd-theme-pagination', UcdThemePagination);

/***/ }),

/***/ "../elements/brand/ucd-theme-pagination/ucd-theme-pagination.tpl.js":
/*!**************************************************************************!*\
  !*** ../elements/brand/ucd-theme-pagination/ucd-theme-pagination.tpl.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/normalize.css.js */ "./node_modules/@ucd-lib/theme-sass/normalize.css.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_reset_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_reset.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_reset.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_pagination_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_pagination.css */ "./node_modules/@ucd-lib/theme-sass/4_component/_pagination.css.js");






function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;

  return [_ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__.default, _ucd_lib_theme_sass_1_base_html_reset_css_js__WEBPACK_IMPORTED_MODULE_2__.default, _ucd_lib_theme_sass_4_component_pagination_css__WEBPACK_IMPORTED_MODULE_3__.default, elementStyles];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

  <ul class="pager">
    ${this._renderLink(
      this.currentPage-1, 
      {label: 'Prev', class: 'pager__item--previous', noHighlight: true}
    )}

    ${this._pages.map(page => this._renderLink(page))}

    ${this._renderLink(
      this.currentPage+1, 
      {label: 'Next', class: 'pager__item--next', noHighlight: true}
    )}

  </ul>


`;}

/***/ }),

/***/ "../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js":
/*!************************************************************************!*\
  !*** ../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemePrimaryNav)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-primary-nav.tpl.js */ "../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.tpl.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _utils_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/mixin */ "../elements/utils/mixin.js");
/* harmony import */ var _utils_mutation_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/mutation-observer */ "../elements/utils/mutation-observer.js");







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
class UcdThemePrimaryNav extends (0,_utils_mixin__WEBPACK_IMPORTED_MODULE_3__.default)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_utils_mutation_observer__WEBPACK_IMPORTED_MODULE_4__.MutationObserverElement) {

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
    return (0,_ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
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
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
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
        <ul class="menu ${navItem.isOpen ? "menu--open" : ""}" style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.styleMap)(this.getItemMobileStyles(location))}>
          ${navItem.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
        </ul>
      </li>
    `;
    }

    // render as normal link
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <li id="nav--${location.join("-")}" .key=${location} class="depth-${depth}">
        <div class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
          ${navItem.href ? lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <a href=${navItem.href}>${navItem.linkText}</a>
          ` : lit__WEBPACK_IMPORTED_MODULE_0__.html`
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

/***/ }),

/***/ "../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.tpl.js":
/*!****************************************************************************!*\
  !*** ../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.tpl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/normalize.css.js */ "./node_modules/@ucd-lib/theme-sass/normalize.css.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_forms.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js");
/* harmony import */ var _ucd_lib_theme_sass_2_base_class_misc_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ucd-lib/theme-sass/2_base_class/_misc.css.js */ "./node_modules/@ucd-lib/theme-sass/2_base_class/_misc.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_nav_primary_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_nav-primary.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_nav-primary.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_submenu_toggle_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_submenu-toggle.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_submenu-toggle.css.js");








function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    .submenu-toggle * {
      pointer-events: none;
    }
    button[disabled] {
      pointer-events: none;
    }
    @media (min-width: 992px) {
      nav.primary-nav--mega li.depth-0 > ul.menu {
        opacity: 1;
        display: block;
      }

      ul.menu ul.menu {
        opacity: 0;
      }
      ul.menu li.sf--hover > ul.menu {
        display: block;
        opacity: 1;
      }
      ul.menu li.closing > ul.menu {
        display: block;
        opacity: 0;
      }
    }

    @media (max-width: 991px) {
      ul.menu ul.menu {
        display: none;
        overflow-y: hidden;
        visibility: visible;
        height: auto;
        border-top-width: 0px;
        border-bottom-width: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
      }

      ul.menu ul.menu.menu--open {
        display: block;
      }

    }
  `;

  return [
    _ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    _ucd_lib_theme_sass_2_base_class_misc_css_js__WEBPACK_IMPORTED_MODULE_3__.default,
    _ucd_lib_theme_sass_4_component_nav_primary_css_js__WEBPACK_IMPORTED_MODULE_4__.default,
    _ucd_lib_theme_sass_4_component_submenu_toggle_css_js__WEBPACK_IMPORTED_MODULE_5__.default,
    elementStyles
  ];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`
<style>
  ul.menu ul.menu {
    transition: opacity ${this.animationDuration + "ms"}, height ${this.animationDuration + "ms"};
  }
  ul.menu li.sf--hover > ul.menu {
    transition: opacity ${this.animationDuration + "ms"} ${this.hoverDelay + "ms"}, height ${this.animationDuration + "ms"};
  }

</style>
<nav 
  id=${this._classPrefix}
  class="${this.getNavClasses()}" 
  @mouseenter=${this._onNavMouseenter}
  @mouseleave=${this._onNavMouseleave}
  @focusout=${this._onNavFocusout}
  @focusin=${this._onNavFocusin}
  aria-label="Main Menu">
  <ul class="menu">
    ${this.navItems.map((navItem, i) => this._renderNavItem(navItem, [i]))}
  </ul>
</nav>
`;}

/***/ }),

/***/ "../elements/ucdlib/ucdlib-pages/ucdlib-pages.js":
/*!*******************************************************!*\
  !*** ../elements/ucdlib/ucdlib-pages/ucdlib-pages.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibPages)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "../elements/utils/index.js");



/**
 * @class UcdlibPages
 * @description similar to the old iron-pages element, allows you to control which element is visible
 * based on child index or tag attribute
 * 
 * <ucdlib-pages selected="page2" attr-for-selected="id">
 *   <div id="page1">Test 1</div>
 *   <div id="page2">Test 2</div>
 * </ucdlib-pages>
 */
class UcdlibPages extends (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.Mixin)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.MutationObserverElement) {

  static get properties() {
    return {
      selected : {type: String},
      attrForSelected : {
        attribute: 'attr-for-selected',
        type: String
      },
      selectedAttribute : {
        attribute: 'selected-attribute',
        type: String
      }
    };
  }

  constructor() {
    super();
    // this.render = render.bind(this);
  }

  /**
   * @method createRenderRoot
   * @description override createRenderRoot, no need for shadowdom
   * 
   * @returns {Element}
   */
  createRenderRoot() {
    return this;
  }

  updated(props) {
    if( props.has('attrForSelected') || props.has('selectedAttribute') || props.has('selected') ) {
      this._onChange();
    }
  }
  
  /**
   * @method _onChildListMutation
   * @description called when children change via MutationObserverElement
   * 
   * @param {ElementList} children 
   */
  _onChildListMutation(children) {
    this._onChange();
  }

  /**
   * @method _onChange
   * @description update visibility 
   */
  _onChange() {
    let attr = this.attrForSelected || 'id';
    let selected = 0;

    // find what the selected attribute is
    if( this.selected !== undefined || this.selected !== null ) {
      if( typeof this.selected === 'string' && this.selected.match(/\d+/) ) {
        selected = parseInt(this.selected);
      } else {
        selected = this.selected;
      }
    }

    // loop through and hide/show children
    let found = this._updateVisibility(selected, attr);

    // if nothing found, check fallback selection
    if( !found && this.fallbackSelection ) {
      if( typeof this.selected === 'string' && this.selected.match(/\d+/) ) {
        selected = parseInt(this.fallbackSelection);
      } else {
        selected = this.fallbackSelection;
      }

      found = this._updateVisibility(selected, attr);
    } 

    if( !found ) {
      console.warn('ucdlib-pages was unable match: ', selected);
    }
  }

  /**
   * @method _updateVisibility
   * @description run update loop based on selected value and attribute to use if
   * selected is not a number.
   * 
   * @param {String|Number} selected 
   * @param {String} attr 
   * @returns {Boolean}
   */
  _updateVisibility(selected, attr) {
    let children = [... this.children];
    let found = false;
    let useIndex = (typeof selected === 'number');
    let val;

    for( let i = 0; i < children.length; i++ ) {
      if( useIndex ) {
        this._select((i === selected), children[i], this.selectedAttribute);
        if( !found ) found = (i === selected);
        continue;
      }

      val = children[i].getAttribute(attr);
      this._select((val === selected), children[i], this.selectedAttribute);
      if( !found ) found = (val === selected);
    }

    return found;
  }

  /**
   * @method _select
   * @description select attributes
   * 
   * @param {Boolean} value 
   * @param {Element} child 
   * @param {String} attribute 
   */
  _select(value, child, attribute) {
    if( value ) {
      if( attribute ) child.setAttribute(attribute, attribute);
      else child.style.display = 'block';
    } else {
      if( attribute ) child.removeAttribute(attribute, attribute);
      else child.style.display = 'none';
    }
  }

}

customElements.define('ucdlib-pages', UcdlibPages);

/***/ }),

/***/ "../elements/utils/index.js":
/*!**********************************!*\
  !*** ../elements/utils/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mixin": () => (/* reexport safe */ _mixin_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "MutationObserverElement": () => (/* reexport safe */ _mutation_observer_js__WEBPACK_IMPORTED_MODULE_1__.MutationObserverElement),
/* harmony export */   "MainDomElement": () => (/* reexport safe */ _main_dom_element_js__WEBPACK_IMPORTED_MODULE_2__.MainDomElement)
/* harmony export */ });
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixin.js */ "../elements/utils/mixin.js");
/* harmony import */ var _mutation_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation-observer.js */ "../elements/utils/mutation-observer.js");
/* harmony import */ var _main_dom_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-dom-element.js */ "../elements/utils/main-dom-element.js");






/***/ }),

/***/ "../elements/utils/main-dom-element.js":
/*!*********************************************!*\
  !*** ../elements/utils/main-dom-element.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDomElement": () => (/* binding */ MainDomElement)
/* harmony export */ });
/**
 * @function MainDomElement
 * @param {Class} superClass - LitElement or child class.
 * @description set render context for lit element to main DOM instead of the
 * default shadow root
 * 
 * @returns {Class} LitElement updated createRenderRoot function.
 */
const MainDomElement = (superClass) => class extends superClass {

  /**
   * @method createRenderRoot
   * @description set the root element to render into
   * 
   * @returns {LitElement}
   */
  createRenderRoot() {
    return this;
  }

};



/***/ }),

/***/ "../elements/utils/mixin.js":
/*!**********************************!*\
  !*** ../elements/utils/mixin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * From:
 * https://stackoverflow.com/questions/41839198/applying-behaviors-with-js-mixins-in-polymer-2
 **/
class MixinBuilder {  
  constructor(superclass) {
    this.superclass = superclass;
  }
  with(...mixins) { 
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
const Mixin = (superclass) => new MixinBuilder(superclass);

// Set global if available
// Hummmm...
// if( typeof window !== 'undefined' ) { 
//   window.Mixin = Mixin;
// }
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mixin);

/***/ }),

/***/ "../elements/utils/mutation-observer.js":
/*!**********************************************!*\
  !*** ../elements/utils/mutation-observer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserverElement": () => (/* binding */ MutationObserverElement)
/* harmony export */ });
/**
 * @function MutationObserverElement
 * @param {Class} superClass - LitElement or child class.
 * @description add default functionality for mutation observer
 * 
 * @returns {Class} LitElement with mutation observer attached.
 */
const MutationObserverElement = (superClass) => class extends superClass {

  constructor() {
    super();
    this._childListObserver = null;
  }

  /**
   * @method firstUpdated
   * @description called on first DOM render.  Call the _onChildListMutation method
   * 
   * @param {Set} props 
   */
  firstUpdated(props) {
    super.firstUpdated(props);
    this._onChildListMutation(this.children);
  }

  /**
   * @method connectedCallback
   * @description Native lifecycle method called when element is connected
   */
  connectedCallback(){
    super.connectedCallback();
    this._childListObserver = new MutationObserver(
      (mutationsList, observer) => this._onChildListMutation(mutationsList, observer));
    this._childListObserver.observe(this, {childList: true});
  }

  /**
   * @method disconnectedCallback
   * @description Native lifecycle method called when element is disconnected
   */
  disconnectedCallback(){
    this._childListObserver.disconnect();
    super.disconnectedCallback();
  }
};



/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   "CSSResult": () => (/* binding */ CSSResult),
/* harmony export */   "unsafeCSS": () => (/* binding */ unsafeCSS),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "adoptStyles": () => (/* binding */ adoptStyles),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ getCompatibleStyle)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets && this._styleSheet === undefined) {
            this._styleSheet = new CSSStyleSheet();
            this._styleSheet.replaceSync(this.cssText);
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const cssResultCache = new Map();
const getCSSResult = (cssText) => {
    let result = cssResultCache.get(cssText);
    if (result === undefined) {
        cssResultCache.set(cssText, (result = new CSSResult(cssText, constructionToken)));
    }
    return result;
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return getCSSResult(typeof value === 'string' ? value : String(value));
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return getCSSResult(cssText);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS),
/* harmony export */   "defaultConverter": () => (/* binding */ defaultConverter),
/* harmony export */   "notEqual": () => (/* binding */ notEqual),
/* harmony export */   "ReactiveElement": () => (/* binding */ ReactiveElement)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
var _e;
var _f;
/**
 * Use this module if you want to create your own base class extending
 * [[ReactiveElement]].
 * @packageDocumentation
 */


const DEV_MODE = true;
let requestUpdateThenable;
if (DEV_MODE) {
    // TODO(sorvell): Add a link to the docs about using dev v. production mode.
    console.warn(`Running in dev mode. Do not use in production!`);
    // Issue platform support warning.
    if (((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalThis['reactiveElementPlatformSupport'] === undefined) {
        console.warn(`Shadow DOM is being polyfilled via ShadyDOM but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = {
        then: (onfulfilled, _onrejected) => {
            console.warn(`\`requestUpdate\` no longer returns a Promise.` +
                `Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    };
}
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? '' : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        this.__pendingConnectionPromise = undefined;
        this.__enableConnection = undefined;
        /**
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this._initialize();
    }
    /**
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        (_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = []);
        this._initializers.push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const warnRemoved = (obj, name) => {
                if (obj[name] !== undefined) {
                    console.warn(`\`${name}\` is implemented. It ` +
                        `has been removed from this version of ReactiveElement.` +
                        ` See the changelog at https://github.com/lit/lit/blob/main/packages/reactive-element/CHANGELOG.md`);
                }
            };
            [`initialize`, `requestUpdateInternal`, `_getUpdateComplete`].forEach((name) => 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            warnRemoved(this.prototype, name));
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // TODO(sorvell): casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     *
     * @internal
     */
    _initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
        // If we were disconnected, re-enable updating by resolving the pending
        // connection promise
        if (this.__enableConnection) {
            this.__enableConnection();
            this.__pendingConnectionPromise = this.__enableConnection = undefined;
        }
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
        this.__pendingConnectionPromise = new Promise((r) => (this.__enableConnection = r));
    }
    /**
     * Synchronizes property values when attributes change.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a, _b;
        const attr = this
            .constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const toAttribute = (_b = (_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !== null && _b !== void 0 ? _b : defaultConverter.toAttribute;
            const attrValue = toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                console.warn(`The attribute value for the ` +
                    `${name} property is undefined. The attribute will be ` +
                    `removed, but in the previous version of ReactiveElement, the ` +
                    `attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a, _b, _c;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = options.converter;
            const fromAttribute = (_c = (_b = (_a = converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== null && _b !== void 0 ? _b : (typeof converter === 'function'
                ? converter
                : null)) !== null && _c !== void 0 ? _c : defaultConverter.fromAttribute;
            // mark state reflecting
            this.__reflectingProperty = propName;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[propName] = fromAttribute(value, options.type);
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE ? requestUpdateThenable : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
            // If we were disconnected, wait until re-connected to flush an update
            while (this.__pendingConnectionPromise) {
                await this.__pendingConnectionPromise;
            }
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     * @category updates
     */
    performUpdate() {
        var _a;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                this.constructor.elementProperties.forEach((_v, p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    // TODO(sorvell): Link to docs explanation of this issue.
                    console.warn(`The following properties will not trigger updates as expected ` +
                        `because they are set using class fields: ` +
                        `${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. To fix this issue, ` +
                        `either initialize properties in the constructor or adjust ` +
                        `your compiler settings; for example, for TypeScript set ` +
                        `\`useDefineForClassFields: false\` in your \`tsconfig.json\`.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            console.warn(`An update was requested (generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that indicates if the update resolved
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_f = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_f] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(_c = (_b = globalThis)['reactiveElementPlatformSupport']) === null || _c === void 0 ? void 0 : _c.call(_b, { ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
// TODO(justinfagnani): inject version number at build time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
((_d = (_e = globalThis)['reactiveElementVersions']) !== null && _d !== void 0 ? _d : (_e['reactiveElementVersions'] = [])).push('1.0.0-rc.2');
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

fieldset {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #f7fafd;
  border-top: 3px solid #022851;
}
fieldset > legend {
  padding: 0.25rem;
  font-size: 1.125rem;
}

label {
  display: block;
  padding-bottom: 0.25rem;
  color: #022851;
  font-weight: 700;
}

input,
select,
textarea {
  margin: 0;
  padding: 0.25rem 0.75rem;
  border: 1px solid #999;
  border-radius: 0;
  background-color: #fff;
  background-image: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  color: #13639e;
  font-family: inherit;
  outline: 0;
}
input:focus,
select:focus,
textarea:focus {
  border-color: #ffbf00;
  background-color: #fffbed;
  outline: none;
}

input,
select {
  height: 2.5rem;
}

input,
textarea,
select {
  width: 100%;
}

[type=text],
[type=search],
[type=url],
[type=number],
textarea {
  appearance: none;
}

button,
[type=submit] {
  cursor: pointer;
}
button:focus,
[type=submit]:focus {
  color: #00b2e3;
}

[type=checkbox],
[type=radio] {
  width: auto;
  height: auto;
  margin-right: 0.3em;
}

[type=search] {
  box-sizing: border-box;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/1_base_html/_reset.css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/1_base_html/_reset.css.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/2_base_class/_misc.css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/2_base_class/_misc.css.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.menu {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.menu li {
  list-style: none;
}
.menu li {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.menu li li {
  list-style: none;
}

.view-all {
  display: block;
  padding-top: 0.5rem;
  border-top: 1px solid #cce0f3;
}

.sf-underline {
  border-bottom: 1px solid #f7fafd;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_nav-primary.css.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_nav-primary.css.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.primary-nav {
  min-height: 3.25rem;
  background-color: #fff;
}
@media (min-width: 992px) {
  .primary-nav {
    background-color: transparent;
    font-size: 0.85rem;
  }
  .primary-nav ul ul {
    display: none;
  }
  .primary-nav li {
    float: left;
  }
  .primary-nav li:hover ul {
    background-color: #fffbed;
  }
  .primary-nav li li {
    float: none;
  }
  .primary-nav li:hover > .primary-nav__top-link a, .primary-nav li:focus-within > .primary-nav__top-link a, .primary-nav li:hover > .primary-nav__top-link .primary-nav__nolink {
    color: #022851;
  }
  .primary-nav .submenu-toggle {
    display: none;
  }
}
.primary-nav a, .primary-nav__nolink {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 0.15rem solid #fff;
  background-color: #dbeaf7;
  color: #022851;
  font-weight: 700;
  line-height: 1.5rem;
  text-decoration: none;
}
@media (min-width: 992px) {
  .primary-nav a, .primary-nav__nolink {
    margin-left: 1rem;
    padding: 0;
    border-bottom: 0;
    background-color: transparent;
    font-weight: 700;
    line-height: 3.25rem;
  }
  .primary-nav a:before, .primary-nav__nolink:before {
    width: 1rem;
    height: 3.25rem;
    margin-right: 0.5rem;
    margin-left: -1rem;
    background-color: transparent;
    clip-path: polygon(93% 0, 110% 0, 110% 102%, 0% 102%);
    content: "";
  }
  .primary-nav a:focus:before, .primary-nav a:hover:before, .primary-nav__nolink:focus:before, .primary-nav__nolink:hover:before {
    background-color: #ffbf00;
  }
  .primary-nav a:after, .primary-nav__nolink:after {
    z-index: 1;
    width: 1rem;
    height: 3.25rem;
    margin-right: -1rem;
    margin-left: 0.5rem;
    background-color: transparent;
    clip-path: polygon(-2px -2px, 100% -2px, 7% 102%, -2px 100%);
    content: "";
  }
  .primary-nav a:focus:after, .primary-nav a:hover:after, .primary-nav__nolink:focus:after, .primary-nav__nolink:hover:after {
    background-color: #ffbf00;
  }
}
.primary-nav a:hover, .primary-nav__nolink:hover {
  background-color: #ffbf00;
}
.primary-nav a:focus,
.primary-nav a .active, .primary-nav__nolink:focus,
.primary-nav__nolink .active {
  background-color: #ffbf00;
}
@media (min-width: 992px) {
  .primary-nav__top-link a, .primary-nav__top-link .primary-nav__nolink {
    color: #fff;
    white-space: nowrap;
  }
  .primary-nav__top-link a:hover, .primary-nav__top-link .primary-nav__nolink:hover {
    color: #022851;
  }
}
.primary-nav li li a, li li .primary-nav__nolink {
  flex-grow: 1;
  border-color: #fff;
  background-color: #fde9ac;
  font-weight: 400;
}
@media (max-width: 991px) {
  .primary-nav li li a, li li .primary-nav__nolink {
    display: flex;
    align-items: center;
  }
  .primary-nav li li a:before, li li .primary-nav__nolink:before {
    margin-right: 0.5rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .primary-nav li li a:before, li li .primary-nav__nolink:before {
    color: #ffbf00;
    content: "";
    font-size: 1.25em;
  }
  .primary-nav li li a:focus:before, .primary-nav li li a:hover:before, li li .primary-nav__nolink:focus:before, li li .primary-nav__nolink:hover:before {
    color: #022851;
  }
}
@media (min-width: 992px) {
  .primary-nav li li a, li li .primary-nav__nolink {
    margin-left: 0;
    padding: 0.5rem 1rem;
    font-size: 0.9375em;
    line-height: 1.35;
  }
  .primary-nav li li a:focus, li li .primary-nav__nolink:focus {
    background-color: #ffbf00;
  }
  .primary-nav li li a:before, .primary-nav li li a:after, li li .primary-nav__nolink:before, li li .primary-nav__nolink:after {
    display: none;
  }
}
.primary-nav li li li a {
  background-color: #fff9e6;
}
@media (min-width: 992px) {
  .primary-nav--justify > .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .primary-nav--justify li {
    float: none;
    flex-basis: 0;
    flex-grow: 1;
    width: auto;
  }
  .primary-nav--justify li:last-child .primary-nav__top-link a, .primary-nav--justify li:last-child .primary-nav__top-link .primary-nav__nolink {
    margin-right: 1rem;
  }
  .primary-nav--justify a:after,
.primary-nav--justify .primary-nav__nolink:after {
    margin-left: auto;
  }
}
@media (min-width: 992px) {
  .primary-nav--mega {
    overflow: hidden;
    max-height: 3.25rem;
    margin-right: -1rem;
    transition: max-height 0.3s;
  }
  .primary-nav--mega.is-hover {
    max-height: 600px;
  }
  .primary-nav--mega a:after,
.primary-nav--mega .primary-nav__nolink:after {
    margin-left: auto;
  }
  .primary-nav--mega > .menu {
    display: flex;
    flex-wrap: wrap;
  }
  .primary-nav--mega li {
    float: none;
    width: auto;
    min-width: 9em;
  }
  .primary-nav--mega li li a,
.primary-nav--mega li li .primary-nav__nolink {
    background: none;
  }
  .primary-nav--mega li:hover .primary-nav__top-link a,
.primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink {
    background-color: #ffdf80;
  }
  .primary-nav--mega li:hover .primary-nav__top-link a:before, .primary-nav--mega li:hover .primary-nav__top-link a:after,
.primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink:before,
.primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink:after {
    background-color: #ffdf80;
  }
  .primary-nav--mega li .primary-nav__top-link a:hover {
    background-color: #ffbf00;
  }
  .primary-nav--mega li .primary-nav__top-link a:hover:before, .primary-nav--mega li .primary-nav__top-link a:hover:after {
    background-color: #ffbf00;
  }
  .primary-nav--mega .primary-nav__top-link {
    background-color: #022851;
  }
}
@media (min-width: 992px) {
  .primary-nav--superfish {
    box-shadow: inset 0 -1px 0 #14447a;
  }
  .primary-nav--superfish li {
    position: relative;
  }
  .primary-nav--superfish ul ul {
    position: absolute;
    z-index: 840;
    top: 100%;
    left: 0;
    display: none;
    min-width: 12em;
    background-color: #fff;
  }
  .primary-nav--superfish ul ul ul {
    top: 0;
    left: 100%;
  }
  .primary-nav--superfish li li a,
.primary-nav--superfish li li .primary-nav__nolink {
    background-color: #fffbed;
  }
  .primary-nav--superfish li li li a,
.primary-nav--superfish li li li .primary-nav__nolink {
    background-color: #fffbed;
  }
  .primary-nav--superfish li li li li a,
.primary-nav--superfish li li li li .primary-nav__nolink {
    background-color: #fff9e6;
  }
  .primary-nav--superfish .primary-nav__submenu-indicator {
    display: flex;
    align-items: center;
    width: 1rem;
    height: auto;
    margin-right: -0.5rem;
    margin-left: auto;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
  }
  .primary-nav--superfish .primary-nav__submenu-indicator:after {
    margin-left: 0.5rem;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .primary-nav--superfish .primary-nav__submenu-indicator:focus {
    box-shadow: none;
  }
  .primary-nav--superfish .primary-nav__submenu-indicator:after {
    color: #ffbf00;
    content: "";
    font-size: 0.75em;
  }
  .primary-nav--superfish li li .primary-nav__submenu-indicator:after {
    color: #022851;
  }
  .primary-nav--superfish li li li .primary-nav__submenu-indicator {
    display: none;
  }
  .primary-nav--superfish li:hover > ul,
.primary-nav--superfish .sf--hover > ul {
    display: block;
  }
  .primary-nav--superfish li:hover > .primary-nav__top-link a,
.primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink,
.primary-nav--superfish .sf--hover > .primary-nav__top-link a,
.primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink {
    background-color: #ffbf00;
  }
  .primary-nav--superfish li:hover > .primary-nav__top-link a:before, .primary-nav--superfish li:hover > .primary-nav__top-link a:after,
.primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink:before,
.primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink:after,
.primary-nav--superfish .sf--hover > .primary-nav__top-link a:before,
.primary-nav--superfish .sf--hover > .primary-nav__top-link a:after,
.primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink:before,
.primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink:after {
    background-color: #ffbf00;
  }
  .primary-nav--superfish li:hover > .primary-nav__top-link a .primary-nav__submenu-indicator:after,
.primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink .primary-nav__submenu-indicator:after,
.primary-nav--superfish .sf--hover > .primary-nav__top-link a .primary-nav__submenu-indicator:after,
.primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink .primary-nav__submenu-indicator:after {
    color: #022851;
  }
  .primary-nav--superfish li:hover > .primary-nav__top-link a,
.primary-nav--superfish .sf--hover > .primary-nav__top-link a,
.primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink {
    color: #022851;
  }
}
.primary-nav .submenu-toggle:focus {
  box-shadow: inset 0 0 0 3px #ffbf00;
  outline: none;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_pagination.css.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_pagination.css.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.pager {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}
.pager li {
  list-style: none;
}
.pager__item {
  margin: 0.25rem 0.25rem 0.25rem 0;
}
.pager__item a, .pager__item--static {
  color: #003570;
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.25rem 0.5rem;
  color: #4c4c4c;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.pager__item a:hover, .pager__item--static:hover {
  color: #001124;
  text-decoration: none;
}
.pager__item a:hover {
  background: #ffbf00;
  color: #022851;
}
.pager__item--current, .pager__item--current a {
  background: #13639e;
  color: #fff;
}
.pager__item--current:hover, .pager__item--current a:hover {
  background: #ffbf00;
}
.pager__item--previous a {
  display: inline-flex;
  align-items: center;
}
.pager__item--previous a:before {
  margin-right: 0.5rem;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.pager__item--next a {
  display: inline-flex;
  align-items: center;
}
.pager__item--next a:after {
  margin-left: 0.5rem;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.pager--mini .pager__item--current {
  display: block;
  padding: 0.25rem 0.5rem;
  background: transparent;
  color: #4c4c4c;
  cursor: default;
}
.pager--mini .pager__item--current:hover {
  background: transparent;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_submenu-toggle.css.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_submenu-toggle.css.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.submenu-toggle {
  display: flex;
  float: right;
  flex-shrink: 0;
  width: 50px;
  margin-left: auto;
  padding-bottom: 1px;
  border: 0;
  border-bottom: 0.15rem solid #fff;
  appearance: none;
  background-color: #022851;
  text-align: center;
}
@media (min-width: 310px) {
  .submenu-toggle {
    width: 3rem;
  }
}
@media (min-width: 992px) {
  .submenu-toggle {
    display: none;
  }
  .submenu-toggle__icon {
    display: none;
  }
}
@media (min-width: 992px) {
  .submenu-toggle {
    display: flex;
  }
  .submenu-toggle__icon {
    display: block;
  }
}
.submenu-toggle:focus {
  box-shadow: inset 0 0 0 3px #022851;
  outline: none;
}
a:hover .submenu-toggle {
  background-color: #997300;
}
.submenu-toggle--open .submenu-toggle__icon:before {
  transform: rotate(0deg);
}
.submenu-toggle__wrapper {
  display: flex;
  align-items: stretch;
}
.submenu-toggle__wrapper a:first-child,
.submenu-toggle__wrapper .nolink:first-child {
  flex-grow: 1;
}
.submenu-toggle__icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 830;
  left: 30%;
  display: block;
  width: 40%;
  height: 3px;
  background-color: #fff;
  font-size: 0;
}
.submenu-toggle__icon:before {
  position: absolute;
  z-index: 830;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  content: "";
  transform: rotate(90deg);
  transition: all 0.3s;
}
a:hover .submenu-toggle__icon {
  background-color: #fff;
}
a:hover .submenu-toggle__icon:before {
  background-color: #fff;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/normalize.css.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/normalize.css.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
html {
  line-height: 1.15;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers (opinionated).
 */
body {
  margin: 0;
}

/**
 * Add the correct display in IE 9-.
 */
article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
figcaption,
figure {
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */
figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
 * Add the correct display in IE.
 */
main {
  display: block;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Links
   ========================================================================== */
/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */
a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

/**
 * Prevent the duplicate application of 'bolder' by the next rule in Safari 6.
 */
b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */
dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */
mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */
img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */
svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
 * Show the overflow in IE.
 */
button {
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video'
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */
button,
html [type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
  /* 2 */
}

button,
[type=button],
[type=reset],
[type=submit] {
  /**
   * Remove the inner border and padding in Firefox.
   */
  /**
   * Restore the focus styles unset by the previous rule.
   */
}
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Show the overflow in Edge.
 */
input {
  overflow: visible;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
  /**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */
}
[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  color: inherit;
  /* 2 */
  white-space: normal;
  /* 1 */
}

/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */
textarea {
  overflow: auto;
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Add the correct display in IE 9-.
 */
menu {
  display: block;
}

/* Scripting
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
canvas {
  display: inline-block;
}

/**
 * Add the correct display in IE.
 */
template {
  display: none;
}

/* Hidden
   ========================================================================== */
/**
 * Add the correct display in IE 10-.
 */
[hidden] {
  display: none;
}

`);

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "notEqual": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS),
/* harmony export */   "_Σ": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__["_Σ"]),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   "UpdatingElement": () => (/* binding */ UpdatingElement),
/* harmony export */   "LitElement": () => (/* binding */ LitElement),
/* harmony export */   "_Φ": () => (/* binding */ _Φ)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d, _e;
var _f;
/**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`ReactiveElement`]] and adds lit-html templating.
 * The `ReactiveElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
((_a = (_f = globalThis)['litElementVersions']) !== null && _a !== void 0 ? _a : (_f['litElementVersions'] = [])).push('3.0.0-rc.2');
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    // TODO(kschaaf): Consider debouncing directive disconnection so element moves
    // do not thrash directive callbacks
    // https://github.com/lit/lit/issues/1457
    /**
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
LitElement._$litElement$ = true;
// Install hydration if available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(_c = (_b = globalThis)['litElementHydrateSupport']) === null || _c === void 0 ? void 0 : _c.call(_b, { LitElement });
// Apply polyfills if available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(_e = (_d = globalThis)['litElementPlatformSupport']) === null || _e === void 0 ? void 0 : _e.call(_d, { LitElement });
// DEV mode warnings
if (DEV_MODE) {
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LitElement['finalize'] = function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const warnRemoved = (obj, name) => {
            if (obj[name] !== undefined) {
                console.warn(`\`${name}\` is implemented. It ` +
                    `has been removed from this version of LitElement. `
                // TODO(sorvell): add link to changelog when location has stabilized.
                // + See the changelog at https://github.com/lit/lit/blob/main/packages/lit-element/CHANGELOG.md`
                );
            }
        };
        [`render`, `getStyles`].forEach((name) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        warnRemoved(this, name));
        [`adoptStyles`].forEach((name) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        warnRemoved(this.prototype, name));
        return true;
    };
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _Φ object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _Φ = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartType": () => (/* binding */ PartType),
/* harmony export */   "directive": () => (/* binding */ directive),
/* harmony export */   "Directive": () => (/* binding */ Directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    _$litDirective$: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/style-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/style-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* binding */ styleMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class StyleMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'style' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('The `styleMap` directive must be used in the `style` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(styleInfo) {
        return Object.keys(styleInfo).reduce((style, prop) => {
            const value = styleInfo[prop];
            if (value == null) {
                return style;
            }
            // Convert property names from camel-case to dash-case, i.e.:
            //  `backgroundColor` -> `background-color`
            // Vendor-prefixed names need an extra `-` appended to front:
            //  `webkitAppearance` -> `-webkit-appearance`
            // Exception is any property name containing a dash, including
            // custom properties; we assume these are already dash-cased i.e.:
            //  `--my-button-color` --> `--my-button-color`
            prop = prop
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                .toLowerCase();
            return style + `${prop}:${value};`;
        }, '');
    }
    update(part, [styleInfo]) {
        const { style } = part.element;
        if (this._previousStyleProperties === undefined) {
            this._previousStyleProperties = new Set();
            for (const name in styleInfo) {
                this._previousStyleProperties.add(name);
            }
            return this.render(styleInfo);
        }
        // Remove old properties that no longer exist in styleInfo
        // We use forEach() instead of for-of so that re don't require down-level
        // iteration.
        this._previousStyleProperties.forEach((name) => {
            // If the name isn't in styleInfo or it's null/undefined
            if (styleInfo[name] == null) {
                this._previousStyleProperties.delete(name);
                if (name.includes('-')) {
                    style.removeProperty(name);
                }
                else {
                    // Note reset using empty string (vs null) as IE11 does not always
                    // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = '';
                }
            }
        });
        // Add or update properties
        for (const name in styleInfo) {
            const value = styleInfo[name];
            if (value != null) {
                this._previousStyleProperties.add(name);
                if (name.includes('-')) {
                    style.setProperty(name, value);
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = value;
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS properties. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 */
const styleMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(StyleMapDirective);
//# sourceMappingURL=style-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "noChange": () => (/* binding */ noChange),
/* harmony export */   "nothing": () => (/* binding */ nothing),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "_Σ": () => (/* binding */ _Σ)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d, _e;
var _f;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
if (DEV_MODE) {
    console.warn('lit-html is in dev mode. Not recommended for production!');
}
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = globalThis.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = (v = '') => d.createComment(v);
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => {
    var _a;
    return isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof ((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) === 'function';
};
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (_$litType$) => (strings, ...values) => ({
    _$litType$,
    strings,
    values,
});
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 * @param value
 * @param container
 * @param options
 */
const render = (value, container, options) => {
    var _a, _b;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode._$litPart$;
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode._$litPart$ = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options);
    }
    part._$setValue(value);
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment comment markers denoting the
 * `ChildPart`s and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    // dynamic tag name
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // Returned as an array for terseness
    return [
        policy !== undefined
            ? policy.createHTML(htmlResult)
            : htmlResult,
        attrNames,
    ];
};
class Template {
    constructor({ strings, _$litType$: type }, options) {
        /** @internal */
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _neccessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized in some browsers (TODO: check)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
    }
    // Overridden via `litHtmlPlatformSupport` to provide platform support.
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex] : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : value._$litDirective$;
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective._$setDirectiveConnected) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] = currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        /** @internal */
        this._parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        this.type = CHILD_PART;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    /**
     * Sets the connection state for any `AsyncDirectives` contained
     * within this part and runs their `disconnected` or `reconnected`, according
     * to the `isConnected` argument.
     */
    setConnected(isConnected) {
        var _a;
        (_a = this._$setChildPartConnected) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        return wrap(this._$startNode).parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
        }
        else if (value._$litType$ !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node, ref = this._$endNode) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    this._insert(new Text('/* lit-html will not write ' +
                        'TemplateResults to scripts and styles */'));
                    return;
                }
            }
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        const node = wrap(this._$startNode).nextSibling;
        // TODO(justinfagnani): Can we just check if this._$committedValue is primitive?
        if (node !== null &&
            node.nodeType === 3 /* Node.TEXT_NODE */ &&
            (this._$endNode === null
                ? wrap(node).nextSibling === null
                : node === wrap(this._$endNode).previousSibling)) {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = document.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its contentx.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        const { values, _$litType$ } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof _$litType$ === 'number'
            ? this._$getTemplate(result)
            : (_$litType$.el === undefined &&
                (_$litType$.el = Template.createElement(_$litType$.h, this.options)),
                _$litType$);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            instance._update(values);
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPlatformSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$setChildPartConnected) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        /** @internal */
        this._setDirectiveConnected = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(nothing);
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, '');
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = EVENT_PART;
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener = (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            // TODO (justinfagnani): do we need to default to this.element?
            // It'll always be the same as `e.currentTarget`.
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        /** @internal */
        this._setDirectiveConnected = undefined;
        this._$parent = parent;
        this.options = options;
    }
    _$setValue(value) {
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _Σ object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _Σ = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in hydrate
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    // Used in tests and private-ssr-support
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(_d = (_c = globalThis)['litHtmlPlatformSupport']) === null || _d === void 0 ? void 0 : _d.call(_c, Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
((_e = (_f = globalThis)['litHtmlVersions']) !== null && _e !== void 0 ? _e : (_f['litHtmlVersions'] = [])).push('2.0.0-rc.3');
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/directives/style-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/style-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* reexport safe */ lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__.styleMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/style-map.js */ "./node_modules/lit-html/development/directives/style-map.js");

//# sourceMappingURL=style-map.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   "_Σ": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_Σ"]),
/* harmony export */   "_Φ": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_Φ"]),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./pages/page-ucd-theme-pagination.js":
/*!********************************************!*\
  !*** ./pages/page-ucd-theme-pagination.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageUcdThemePagination)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _page_ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-ucd-theme-pagination.tpl.js */ "./pages/page-ucd-theme-pagination.tpl.js");
/* harmony import */ var _elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/utils/index.js */ "../elements/utils/index.js");
/* harmony import */ var _elements_brand_ucd_theme_pagination_ucd_theme_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/brand/ucd-theme-pagination/ucd-theme-pagination.js */ "../elements/brand/ucd-theme-pagination/ucd-theme-pagination.js");






class PageUcdThemePagination extends (0,_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.Mixin)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.MainDomElement) {
  static get properties() {
    return {
      
    }
  }

  static get styles() {
    return (0,_page_ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _page_ucd_theme_pagination_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
  }

}

customElements.define('page-ucd-theme-pagination', PageUcdThemePagination);

/***/ }),

/***/ "./pages/page-ucd-theme-pagination.tpl.js":
/*!************************************************!*\
  !*** ./pages/page-ucd-theme-pagination.tpl.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

<h3>Pagination</h3>
<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  use-hash>
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="1"
  max-pages="10">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="2"
  max-pages="33"
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="32"
  max-pages="33"
  use-hash
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="33"
  max-pages="33"
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  visible-link-count="14">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="99"
  max-pages="100"
  visible-link-count="14">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  visible-link-count="5">
</ucd-theme-pagination>


`;}

/***/ }),

/***/ "./pages/page-ucd-theme-primary-nav.js":
/*!*********************************************!*\
  !*** ./pages/page-ucd-theme-primary-nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageUcdThemePrimaryNav)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _page_ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-ucd-theme-primary-nav.tpl.js */ "./pages/page-ucd-theme-primary-nav.tpl.js");
/* harmony import */ var _elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/utils/index.js */ "../elements/utils/index.js");
/* harmony import */ var _elements_brand_ucd_theme_primary_nav_ucd_theme_primary_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js */ "../elements/brand/ucd-theme-primary-nav/ucd-theme-primary-nav.js");






class PageUcdThemePrimaryNav extends (0,_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.Mixin)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.MainDomElement) {

  static get properties() {
    return {

    }
  }

  static get styles() {
    return (0,_page_ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _page_ucd_theme_primary_nav_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
  }

}

customElements.define('page-ucd-theme-primary-nav', PageUcdThemePrimaryNav);

/***/ }),

/***/ "./pages/page-ucd-theme-primary-nav.tpl.js":
/*!*************************************************!*\
  !*** ./pages/page-ucd-theme-primary-nav.tpl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`


<h3>Primary Nav</h3>
<p>Simple nav. No dropdowns.</p>
<div class="category-brand__background category-brand--primary">
  <ucd-theme-primary-nav>
    <a>ITEM 1</a>
    <a href=#>ITEM 2</a>
    <a href="#">ITEM 3</a>
  </ucd-theme-primary-nav>
</div>

<p class="u-space-mt--large">Nav with dropdowns</p>
<div class="category-brand__background category-brand--primary">
  <ucd-theme-primary-nav>
    <a>ITEM 1</a>
    <ul href="#" link-text="Wheel of Time">
      <li><a href="#">Aes Sedai</a></li>
      <ul href="#" link-text="Ta'veren">
        <li><a href="#">Rand al'Thor</a></li>
        <li><a href="#">Matrim Cauthon</a></li>
        <li><a href="#">Perrin Aybara</a></li>
      </ul>
      <li><a href="#">Warders</a></li>
    </ul>

    <a href="#">ITEM 3</a>
  </ucd-theme-primary-nav>
</div>

<p class="u-space-mt--large">Mega nav</p>
  <div>
    <ucd-theme-primary-nav nav-type="mega" style-modifiers="justify">
      <ul link-text="Lord of the Rings">
        <li><a href="">Wizards</a></li>
        <li><a href="">Ents</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Orcs</a></li>
        <li><a href="">Elves</a></li>
        <li><a href="">Dwarves</a></li>
      </ul>
        
      <ul href="#" link-text="Wheel of Time">
        <li><a href="#">Aes Sedai</a></li>
        <ul href="#" link-text="Ta'veren">
          <li><a href="#">Rand al'Thor</a></li>
          <li><a href="#">Matrim Cauthon</a></li>
          <li><a href="#">Perrin Aybara</a></li>
        </ul>
        <li><a href="#">Warders</a></li>
        <li><a href="">Ogiers</a></li>
      </ul>

      <ul link-text="Kingkiller Chronicle">
        <li><a href="">Humans</a></li>
        <li><a href="">Fae</a></li>
      </ul>
    </ucd-theme-primary-nav>
  </div>

`;}

/***/ }),

/***/ "./ucdlib-theme-test-app.js":
/*!**********************************!*\
  !*** ./ucdlib-theme-test-app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibThemeTestApp)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucdlib_theme_test_app_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucdlib-theme-test-app.tpl.js */ "./ucdlib-theme-test-app.tpl.js");
/* harmony import */ var _elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/utils/index.js */ "../elements/utils/index.js");
/* harmony import */ var _elements_ucdlib_ucdlib_pages_ucdlib_pages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ucdlib/ucdlib-pages/ucdlib-pages.js */ "../elements/ucdlib/ucdlib-pages/ucdlib-pages.js");






class UcdlibThemeTestApp extends (0,_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.Mixin)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_elements_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.MainDomElement) {

  static get properties() {
    return {
      elements : {type: Array},
      selectedPage : {type: String}
    };
  }

  static get styles() {
    return (0,_ucdlib_theme_test_app_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();

    this.selectedPage = '';
    this.elements = [];

    window.addEventListener('hashchange', e => {
      this.selectedPage = window.location.hash.replace(/^#/, '');
    });

    this.render = _ucdlib_theme_test_app_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
  }

  firstUpdated() {
    let root = this.querySelector('#pages');
    for( let eleName of PAGES ) {
      let ele = document.createElement(eleName);
      ele.id = eleName.replace(/^page-/, '');
      root.appendChild(ele);
    }

    this.elements = PAGES.map(name => name.replace(/^page-/, ''));
    this.selectedPage = window.location.hash.replace(/^#/, '') || PAGES[0].replace(/^page-/, '');
  }

  _onSelectChange() {
    window.location.hash = this.querySelector('#elementSelector').value;
  }

}

customElements.define('ucdlib-theme-test-app', UcdlibThemeTestApp);

/***/ }),

/***/ "./ucdlib-theme-test-app.tpl.js":
/*!**************************************!*\
  !*** ./ucdlib-theme-test-app.tpl.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

  <select id="elementSelector" @change="${this._onSelectChange}">
    ${this.elements.map(item => lit__WEBPACK_IMPORTED_MODULE_0__.html`<option value="${item}">${item}</option>`)}
  </select>

  <ucdlib-pages id="pages" selected="${this.selectedPage}" ></ucdlib-pages>

`;}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ucdlib_theme_test_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ucdlib-theme-test-app.js */ "./ucdlib-theme-test-app.js");
/* harmony import */ var _pages_page_ucd_theme_primary_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-ucd-theme-primary-nav.js */ "./pages/page-ucd-theme-primary-nav.js");
/* harmony import */ var _pages_page_ucd_theme_pagination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-ucd-theme-pagination.js */ "./pages/page-ucd-theme-pagination.js");


// PAGES



// import "../elements/navigation/ucd-theme-primary-nav/ucd-theme-primary-nav";
// import '../elements/ucd-theme-alert/ucd-theme-alert';
// import '../elements/ucd-theme-message-area/ucd-theme-message-area';
// import "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion";
// import "../elements/ucd-theme-form-search/ucd-theme-form-search";
// import "../elements/ucd-theme-header/ucd-theme-header";
// import "../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup";
// import "../elements/ucd-theme-collapse/ucd-theme-collapse";
// import "../elements/ucd-theme-image-gallery/ucd-theme-image-gallery";
// import "../elements/ucd-theme-pagination/ucd-theme-pagination";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcGFnaW5hdGlvbi91Y2QtdGhlbWUtcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcGFnaW5hdGlvbi91Y2QtdGhlbWUtcGFnaW5hdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvYnJhbmQvdWNkLXRoZW1lLXByaW1hcnktbmF2L3VjZC10aGVtZS1wcmltYXJ5LW5hdi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcHJpbWFyeS1uYXYvdWNkLXRoZW1lLXByaW1hcnktbmF2LnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2RsaWIvdWNkbGliLXBhZ2VzL3VjZGxpYi1wYWdlcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91dGlscy9tYWluLWRvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3V0aWxzL21peGluLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3V0aWxzL211dGF0aW9uLW9ic2VydmVyLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2Zvcm1zLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19yZXNldC5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8yX2Jhc2VfY2xhc3MvX21pc2MuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX25hdi1wcmltYXJ5LmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19wYWdpbmF0aW9uLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19zdWJtZW51LXRvZ2dsZS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy9ub3JtYWxpemUuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vcGFnZXMvcGFnZS11Y2QtdGhlbWUtcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3BhZ2VzL3BhZ2UtdWNkLXRoZW1lLXBhZ2luYXRpb24udHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vcGFnZXMvcGFnZS11Y2QtdGhlbWUtcHJpbWFyeS1uYXYuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9wYWdlcy9wYWdlLXVjZC10aGVtZS1wcmltYXJ5LW5hdi50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi91Y2RsaWItdGhlbWUtdGVzdC1hcHAuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi91Y2RsaWItdGhlbWUtdGVzdC1hcHAudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3NCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsaUNBQWlDLDJDQUFVOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvRUFBTTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxRUFBVztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsY0FBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxxQ0FBSSwyQkFBMkIsaUJBQWlCO0FBQzdELHlEQUF5RCxvQkFBb0IsVUFBVSxLQUFLLElBQUksbUJBQW1CO0FBQ25IO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFDQUFJLDBCQUEwQixpQkFBaUI7QUFDMUQsaUJBQWlCLEtBQUssSUFBSSxtQkFBbUI7QUFDN0M7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7OztBQUdBOztBQUVBLGtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklnQzs7QUFFZ0M7QUFDSztBQUNNOztBQUVwRTtBQUNQLHdCQUF3QixvQ0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLHlFQUFZLEVBQUUsaUZBQVEsRUFBRSxtRkFBYTtBQUMvQzs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7O0FBRVg7QUFDQSxNQUFNO0FBQ047QUFDQSxPQUFPO0FBQ1A7O0FBRUEsTUFBTTs7QUFFTixNQUFNO0FBQ047QUFDQSxPQUFPO0FBQ1A7O0FBRUE7OztBQUdBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3VDO0FBQ3VCO0FBQ1A7O0FBRWpCO0FBQ2tDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsaUNBQWlDLHFEQUFLLENBQUMsMkNBQVU7QUFDaEUsUUFBUSw2RUFBdUI7O0FBRS9CO0FBQ0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BELHVCQUF1QiwyQ0FBMkM7QUFDbEUsbUJBQW1CLHVDQUF1QztBQUMxRCwwQkFBMEIsOENBQThDO0FBQ3hFLGlCQUFpQixZQUFZO0FBQzdCLGlCQUFpQixxQ0FBcUM7QUFDdEQsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0VBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrQkFBa0IsSUFBSSxhQUFhO0FBQ3pEO0FBQ0E7QUFDQSxvRUFBb0Usa0JBQWtCLElBQUksSUFBSTtBQUM5RjtBQUNBO0FBQ0EsY0FBYyxrQkFBa0IsR0FBRyxrQkFBa0IsSUFBSSxRQUFRLEdBQUcsZUFBZSxHQUFHLFdBQVc7QUFDakc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEscUNBQUk7QUFDakI7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDLGVBQWU7QUFDZixzQkFBc0IsdUI7QUFDdEIsc0JBQXNCO0FBQ3RCLHVCQUF1QixNQUFNLEdBQUcsa0NBQWtDLEdBQUcsa0NBQWtDO0FBQ3ZHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLGlCQUFpQjtBQUNsRztBQUNBLG1CQUFtQixhO0FBQ25CLHFCQUFxQixrQkFBa0I7QUFDdkMsY0FBYyxpQkFBaUIsZUFBZSxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixrQ0FBa0MsNkNBQTZDO0FBQy9FLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUMsVUFBVSxxRUFBUSxxQ0FBcUM7QUFDcEgsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmLHFCQUFxQixtQkFBbUIsU0FBUyxTQUFTLGdCQUFnQixNQUFNO0FBQ2hGLHNCQUFzQixpQkFBaUIsa0JBQWtCLGlCQUFpQjtBQUMxRSxZQUFZLGVBQWUscUNBQUk7QUFDL0Isc0JBQXNCLGFBQWEsR0FBRyxpQkFBaUI7QUFDdkQsY0FBYyxxQ0FBSTtBQUNsQiwyQkFBMkIsa0JBQWtCLFlBQVksaUJBQWlCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxzQkFBc0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxzQkFBc0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hpQmdDOztBQUVtQztBQUNJO0FBQ0E7QUFDWTtBQUNLOztBQUVqRjtBQUNQLHdCQUF3QixvQ0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5RUFBZTtBQUNuQixJQUFJLGlGQUFVO0FBQ2QsSUFBSSxpRkFBVTtBQUNkLElBQUksdUZBQWdCO0FBQ3BCLElBQUksMEZBQWtCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7QUFDWDtBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QixXQUFXO0FBQ25FO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCLEdBQUcsdUJBQXVCLFdBQVc7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxXQUFXLHFCQUFxQjtBQUNoQyxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxhQUFhO0FBQ2I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7OztBQzFGaUM7QUFDbUM7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEJBQTBCLHNEQUFLLENBQUMsMkNBQVU7QUFDekQsUUFBUSxvRUFBdUI7O0FBRS9CO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQixhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSitCO0FBQ2dDO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckQ7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRTs7Ozs7Ozs7Ozs7Ozs7QUNwQnBCO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFO0FBQ25DO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsK0VBQStFLEVBQUU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixRQUFRLGtGQUFrRixFQUFFO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxRQUFRLDRFQUE0RSxFQUFFO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsNkVBQTZFLEVBQUU7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsNkdBQTZHLGtCQUFrQjtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDOzs7Ozs7Ozs7Ozs7Ozs7QUNsM0J3Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNuRnVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNkdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3VCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDOVN1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDOUV1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3RGdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZjRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEO0FBQ1o7QUFDTjtBQUNiO0FBQ3pCO0FBQ0E7QUFDTyx3QkFBd0Isa0VBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsYUFBYTtBQUNwSDtBQUNBO0FBQ0Esd0dBQXdHLGFBQWE7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBQ3dCO0FBQ2xFLGdDQUFnQyxvREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxHQUFHLE9BQU87QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNPLGlCQUFpQix3REFBUztBQUNqQyxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxJQUFJLFdBQVcsTUFBTSxnQkFBZ0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1Q0FBdUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNLFVBQVUsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7Ozs7OztBQ25rQzhDO0FBQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R1RjtBQUN2Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RpQztBQUNpQztBQUNFOztBQUVPOztBQUU1RCxxQ0FBcUMsK0RBQUssQ0FBQywyQ0FBVTtBQUNwRSxRQUFRLG9FQUFjO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcseUVBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwwRUFBVztBQUM3Qjs7QUFFQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0M7O0FBRXpCO0FBQ1Asd0JBQXdCLG9DQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEaUM7QUFDa0M7QUFDQzs7QUFFUzs7QUFFOUQscUNBQXFDLCtEQUFLLENBQUMsMkNBQVU7QUFDcEUsUUFBUSxvRUFBYzs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVywwRUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDJFQUFXO0FBQzdCOztBQUVBOztBQUVBLDRFOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJnQzs7QUFFekI7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVpQztBQUM2QjtBQUNHOztBQUVSOztBQUUxQyxpQ0FBaUMsK0RBQUssQ0FBQywyQ0FBVTtBQUNoRSxRQUFRLG9FQUFjOztBQUV0QjtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxrQkFBa0Isc0VBQVc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtRTs7Ozs7Ozs7Ozs7Ozs7OztBQ25EZ0M7O0FBRXpCO0FBQ1Asd0JBQXdCLG9DQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJOztBQUVYLDBDQUEwQyxxQkFBcUI7QUFDL0QsTUFBTSwwQkFBMEIscUNBQUksa0JBQWtCLEtBQUssSUFBSSxLQUFLO0FBQ3BFOztBQUVBLHVDQUF1QyxrQkFBa0I7O0FBRXpELEc7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUMrQztBQUNEOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7cmVuZGVyLCBzdHlsZXN9IGZyb20gXCIuL3VjZC10aGVtZS1wYWdpbmF0aW9uLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZVBhZ2luYXRpb25cbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciBwYWdpbmF0aW9uXG4gKiBQYXR0ZXJuIExhYiBVcmw6IGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1tb2xlY3VsZXMtcGFnaW5hdGlvblxuICogXG4gKiBAcHJvcGVydHkge1N0cmluZ30gYmFzZS1wYXRoIC0gZm9yIGFuY2hvciB0YWcgaHJlZlxuICogQHByb3BlcnR5IHtTdHJpbmd9IGN1cnJlbnQtcGFnZSAtIFBhZ2UgdG8gc2hvdyBhbmQgaGlnaGxpZ2h0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gbWF4LXBhZ2VzIC0gTWF4IG51bWJlciBvZiB0b3RhbCBwYWdlc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IHZpc2libGUtbGluay1jb3VudCAtIEhvdyBtYW55IHBhZ2UgbGlua3MgdG8gc2hvd1xuICogXG4gKiBAZXhhbXBsZXNcbiAqIFxuICogPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gKiAgY3VycmVudC1wYWdlPVwiNTBcIlxuICogIG1heC1wYWdlcz1cIjEwMFwiXG4gKiAgdXNlLWhhc2g+XG4gKiA8L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuICogPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gKiAgY3VycmVudC1wYWdlPVwiMVwiXG4gKiAgbWF4LXBhZ2VzPVwiMTBcIj5cbiAqIDwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG4gKiA8dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAqICBjdXJyZW50LXBhZ2U9XCIyXCJcbiAqICBtYXgtcGFnZXM9XCIzM1wiXG4gKiAgYmFzZS1wYXRoPVwiL2Zvby9iYXIvXCI+XG4gKiA8L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuICogXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lUGFnaW5hdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmFzZVBhdGggOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZywgXG4gICAgICAgIGF0dHJpYnV0ZTogJ2Jhc2UtcGF0aCdcbiAgICAgIH0sXG4gICAgICB1c2VIYXNoIDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLCBcbiAgICAgICAgYXR0cmlidXRlOiAndXNlLWhhc2gnXG4gICAgICB9LFxuICAgICAgY3VycmVudFBhZ2UgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIGF0dHJpYnV0ZTogJ2N1cnJlbnQtcGFnZScsXG4gICAgICAgIHJlZmxlY3Q6IHRydWVcbiAgICAgIH0sXG4gICAgICBtYXhQYWdlcyA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgYXR0cmlidXRlIDogJ21heC1wYWdlcydcbiAgICAgIH0sXG4gICAgICB2aXNpYmxlTGlua0NvdW50IDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICBhdHRyaWJ1dGUgOiAndmlzaWJsZS1saW5rLWNvdW50J1xuICAgICAgfSxcbiAgICAgIF9wYWdlcyA6IHt0eXBlOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fcGFnZXMgPSBbXTtcbiAgICB0aGlzLnVzZUhhc2ggPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSAndmlydHVhbCc7XG4gICAgdGhpcy5iYXNlUGF0aCA9ICcnO1xuICAgIHRoaXMudmlzaWJsZUxpbmtDb3VudCA9IDc7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5tYXhQYWdlcyA9IDE7XG5cbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmKCBwcm9wcy5oYXMoJ2N1cnJlbnRQYWdlJykgKSB7XG4gICAgICBsZXQgc3RhcnRJbmRleCA9IE1hdGguZmxvb3IodGhpcy5jdXJyZW50UGFnZSAtICh0aGlzLnZpc2libGVMaW5rQ291bnQvMikpO1xuICAgICAgXG4gICAgICBpZiggc3RhcnRJbmRleCA8IDAgKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIGlmKCAodGhpcy5jdXJyZW50UGFnZSArICh0aGlzLnZpc2libGVMaW5rQ291bnQvMikpID4gdGhpcy5tYXhQYWdlcyApIHtcbiAgICAgICAgc3RhcnRJbmRleCAtPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50UGFnZSArICh0aGlzLnZpc2libGVMaW5rQ291bnQvMikpIC0gdGhpcy5tYXhQYWdlcyAtIDE7XG4gICAgICB9XG4gICAgICBpZiggc3RhcnRJbmRleCA8IDAgKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgdGhpcy52aXNpYmxlTGlua0NvdW50O1xuICAgICAgaWYoIGVuZEluZGV4ID4gdGhpcy5tYXhQYWdlcyApIGVuZEluZGV4ID0gdGhpcy5tYXhQYWdlcztcblxuICAgICAgbGV0IHBhZ2VzID0gW107XG4gICAgICBmb3IoIGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKysgKSB7XG4gICAgICAgIHBhZ2VzLnB1c2goaSsxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BhZ2VzID0gcGFnZXM7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckxpbmsocGFnZSwgYXJncz17fSkge1xuICAgIGlmKCBwYWdlIDwgMSApIHBhZ2UgPSAxO1xuICAgIGlmKCBwYWdlID4gdGhpcy5tYXhQYWdlcyApIHBhZ2UgPSB0aGlzLm1heFBhZ2VzO1xuXG4gICAgaWYoIGFyZ3Mubm9IaWdobGlnaHQgIT09IHRydWUgJiYgcGFnZSA9PT0gdGhpcy5jdXJyZW50UGFnZSApIHtcbiAgICAgIGlmKCAhYXJncy5jbGFzcyApIGFyZ3MuY2xhc3MgPSAnJztcbiAgICAgIGFyZ3MuY2xhc3MgKz0gJyBwYWdlcl9faXRlbS0tY3VycmVudCc7XG4gICAgfVxuXG4gICAgaWYoICF0aGlzLmJhc2VQYXRoICYmICF0aGlzLnVzZUhhc2ggKSB7XG4gICAgICByZXR1cm4gaHRtbGA8bGkgIGNsYXNzPVwicGFnZXJfX2l0ZW0gJHthcmdzLmNsYXNzIHx8ICcnfVwiPlxuICAgICAgICA8YSBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgdGFiaW5kZXg9XCIxXCIgQGNsaWNrPVwiJHt0aGlzLl9vblBhZ2VDbGlja2VkfVwiIHBhZ2U9XCIke3BhZ2V9XCI+JHthcmdzLmxhYmVsIHx8IHBhZ2V9PC9hPlxuICAgICAgPC9saT5gO1xuICAgIH1cblxuICAgIGxldCBocmVmID0gKHRoaXMudXNlSGFzaCA/ICcjJyA6ICcnKSArICh0aGlzLmJhc2VQYXRoIHx8ICcvJykgKyBwYWdlO1xuICAgIHJldHVybiBodG1sYDxsaSBjbGFzcz1cInBhZ2VyX19pdGVtICR7YXJncy5jbGFzcyB8fCAnJ31cIj5cbiAgICAgIDxhIGhyZWY9XCIke2hyZWZ9XCI+JHthcmdzLmxhYmVsIHx8IHBhZ2V9PC9hPlxuICAgIDwvbGk+YDtcbiAgfVxuXG5cbiAgX29uUGFnZUNsaWNrZWQoZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhZ2UtY2hhbmdlJywge1xuICAgICAgZGV0YWlsIDoge3BhZ2U6IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3BhZ2UnKSl9XG4gICAgfSkpO1xuICB9XG5cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZC10aGVtZS1wYWdpbmF0aW9uJywgVWNkVGhlbWVQYWdpbmF0aW9uKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanNcIjtcbmltcG9ydCByZXNldENzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9fcmVzZXQuY3NzLmpzXCI7XG5pbXBvcnQgcGFnaW5hdGlvbkNzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fcGFnaW5hdGlvbi5jc3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCBlbGVtZW50U3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYDtcblxuICByZXR1cm4gW25vcm1hbGl6ZUNzcywgcmVzZXRDc3MsIHBhZ2luYXRpb25Dc3MsIGVsZW1lbnRTdHlsZXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG4gIDx1bCBjbGFzcz1cInBhZ2VyXCI+XG4gICAgJHt0aGlzLl9yZW5kZXJMaW5rKFxuICAgICAgdGhpcy5jdXJyZW50UGFnZS0xLCBcbiAgICAgIHtsYWJlbDogJ1ByZXYnLCBjbGFzczogJ3BhZ2VyX19pdGVtLS1wcmV2aW91cycsIG5vSGlnaGxpZ2h0OiB0cnVlfVxuICAgICl9XG5cbiAgICAke3RoaXMuX3BhZ2VzLm1hcChwYWdlID0+IHRoaXMuX3JlbmRlckxpbmsocGFnZSkpfVxuXG4gICAgJHt0aGlzLl9yZW5kZXJMaW5rKFxuICAgICAgdGhpcy5jdXJyZW50UGFnZSsxLCBcbiAgICAgIHtsYWJlbDogJ05leHQnLCBjbGFzczogJ3BhZ2VyX19pdGVtLS1uZXh0Jywgbm9IaWdobGlnaHQ6IHRydWV9XG4gICAgKX1cblxuICA8L3VsPlxuXG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLXByaW1hcnktbmF2LnRwbC5qc1wiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMnO1xuXG5pbXBvcnQgTWl4aW4gZnJvbSBcIi4uLy4uL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBNdXRhdGlvbk9ic2VydmVyRWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9tdXRhdGlvbi1vYnNlcnZlclwiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZVByaW1hcnlOYXZcbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgcHJpbWFyeSBzaXRlIG5hdlxuICogUGF0dGVybiBMYWIgVXJsOlxuICogIC0gaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduL3BhdHRlcm5zL21vbGVjdWxlcy1uYXZpZ2F0aW9uLTAwLXByaW1hcnktbmF2L21vbGVjdWxlcy1uYXZpZ2F0aW9uLTAwLXByaW1hcnktbmF2LnJlbmRlcmVkLmh0bWxcbiAqICAtIGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi9wYXR0ZXJucy9tb2xlY3VsZXMtbmF2aWdhdGlvbi0wMC1wcmltYXJ5LW5hdi1tZWdhbWVudS9tb2xlY3VsZXMtbmF2aWdhdGlvbi0wMC1wcmltYXJ5LW5hdi1tZWdhbWVudS5yZW5kZXJlZC5odG1sXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdHlsZU1vZGlmaWVyIC0gQXBwbHkgYW4gYWx0ZXJuYXRlIHN0eWxlIHdpdGggYSBrZXl3b3JkOlxuICogICdzdXBlcmZpc2gnIC0gVGhlIGRlZmF1bHRcbiAqICAnbWVnYScgLSBIb3ZlcmluZyBvdmVyIGFueSB0b3AtbGV2ZWwgbGluayBvcGVucyBhIHNpbmdsZSBuYXYgd2l0aCBhbGwgc3VibmF2IGxpbmtzXG4gKiBAcHJvcGVydHkge051bWJlcn0gaG92ZXJEZWxheSAtIEhvdyBsb25nIChtcykgYWZ0ZXIgaG92ZXIgd2lsbCBtZW51IG9wZW4vY2xvc2VcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBhbmltYXRpb25EdXJhdGlvbiAtIEhvdyBsb25nIChtcykgZm9yIGEgbWVudSB0byBmYWRlIGluL291dFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG1heERlcHRoIC0gTWF4aW11bSBudW1iZXIgb2Ygc3VibWVudXMgdG8gc2hvd1xuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICA8dWNkLXRoZW1lLXByaW1hcnktbmF2PlxuICogICAgPGEgaHJlZj1cIiNcIj5saW5rIDE8L2E+XG4gKiAgICA8YSBocmVmPVwiI1wiPmxpbmsgMjwvYT5cbiAqICAgIDx1bCBsaW5rLXRpdGxlPVwibGluayB3aXRoIHN1Ym5hdlwiIGhyZWY9XCIjXCI+XG4gKiAgICAgIDxsaT48YSBocmVmPVwiI1wiPnN1Ym5hdiBsaW5rIDE8L2E+PC9saT5cbiAqICAgIDwvdWw+XG4gKiAgPC91Y2QtdGhlbWUtcHJpbWFyeS1uYXY+XG4gKiBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lUHJpbWFyeU5hdiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKE11dGF0aW9uT2JzZXJ2ZXJFbGVtZW50KSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZUeXBlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwibmF2LXR5cGVcIn0sXG4gICAgICBzdHlsZU1vZGlmaWVyczoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcInN0eWxlLW1vZGlmaWVyc1wifSxcbiAgICAgIGhvdmVyRGVsYXk6IHt0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogXCJob3Zlci1kZWxheVwifSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7dHlwZTogTnVtYmVyLCBhdHRyaWJ1dGU6IFwiYW5pbWF0aW9uLWR1cmF0aW9uXCJ9LFxuICAgICAgbmF2SXRlbXM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBtYXhEZXB0aDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiBcIm1heC1kZXB0aFwifSxcbiAgICAgIF9tZWdhSXNPcGVuOiB7dHlwZTogQm9vbGVhbiwgc3RhdGU6IHRydWV9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5hdlR5cGUgPSBcInN1cGVyZmlzaFwiO1xuICAgIHRoaXMuc3R5bGVNb2RpZmllcnMgPSBcIlwiO1xuICAgIHRoaXMuaG92ZXJEZWxheSA9IDMwMDtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gMzAwO1xuICAgIHRoaXMubmF2SXRlbXMgPSBbXTtcbiAgICB0aGlzLm1heERlcHRoID0gMjtcblxuICAgIHRoaXMuX2NsYXNzUHJlZml4ID0gXCJwcmltYXJ5LW5hdlwiO1xuICAgIHRoaXMuX21vYmlsZUJyZWFrUG9pbnQgPSA5OTI7XG4gICAgdGhpcy5fYWNjZXB0ZWROYXZUeXBlcyA9IFsnc3VwZXJmaXNoJywgJ21lZ2EnXTtcbiAgICB0aGlzLl9tZWdhSXNPcGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXROYXZDbGFzc2VzXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgY2xhc3NlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b3AtbGV2ZWwgJ25hdicgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0TmF2Q2xhc3Nlcygpe1xuICAgIGxldCBuYXZUeXBlID0gdGhpcy5fYWNjZXB0ZWROYXZUeXBlc1swXTtcbiAgICBpZiAoIHRoaXMuX2FjY2VwdGVkTmF2VHlwZXMuaW5jbHVkZXModGhpcy5uYXZUeXBlLnRvTG93ZXJDYXNlKCkpICkgbmF2VHlwZSA9IHRoaXMubmF2VHlwZTtcbiAgICBcbiAgICB0aGlzLm5hdlR5cGUgPyBgJHt0aGlzLl9jbGFzc1ByZWZpeH0tLSR7dGhpcy5uYXZUeXBlfWAgOiBcIlwiO1xuICAgIGxldCBzdHlsZU1vZGlmaWVycyA9IFwiXCI7XG4gICAgaWYgKCB0aGlzLnN0eWxlTW9kaWZpZXJzICkge1xuICAgICAgc3R5bGVNb2RpZmllcnMgPSB0aGlzLnN0eWxlTW9kaWZpZXJzLnNwbGl0KFwiIFwiKS5tYXAobW9kID0+IGAke3RoaXMuX2NsYXNzUHJlZml4fS0tJHttb2R9YCkuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGxldCBtZWdhSXNPcGVuID0gdGhpcy5pc01lZ2FNZW51KCkgJiYgdGhpcy5fbWVnYUlzT3BlbiA/ICdpcy1ob3ZlcicgOiAnJztcbiAgICByZXR1cm4gYCR7dGhpcy5fY2xhc3NQcmVmaXh9ICR7dGhpcy5fY2xhc3NQcmVmaXh9LS0ke25hdlR5cGV9ICR7c3R5bGVNb2RpZmllcnN9ICR7bWVnYUlzT3Blbn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2hpbGRMaXN0TXV0YXRpb25cbiAgICogQGRlc2NyaXB0aW9uIEZpcmVzIHdoZW4gbGlnaHQgZG9tIGNoaWxkIGxpc3QgY2hhbmdlcy4gSW5qZWN0ZWQgYnkgTXV0YXRpb25PYnNlcnZlckVsZW1lbnQgbWl4aW4uXG4gICAqICBTZXRzIHRoZSAnbmF2SXRlbXMnIHByb3BlcnR5LlxuICAgKi9cbiAgX29uQ2hpbGRMaXN0TXV0YXRpb24oKXtcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG4gICAgbGV0IG5hdkl0ZW1zID0gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gdGhpcy5fbWFrZU5hdkl0ZW1UcmVlKGNoaWxkKSkuZmlsdGVyKG5hdkl0ZW0gPT4gbmF2SXRlbS5saW5rVGV4dCk7XG4gICAgaWYgKCBuYXZJdGVtcy5sZW5ndGggKSB0aGlzLm5hdkl0ZW1zID0gbmF2SXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfbWFrZU5hdkl0ZW1UcmVlXG4gICAqIEBkZXNjcmlwdGlvbiBFeHRyYWN0cyBtZW51IGl0ZW0gZGF0YSBmcm9tIERPTSBFbGVtZW50XG4gICAqIEBwYXJhbSB7RE9NIE5vZGV9IGVsZSAtIEVsZW1lbnRcbiAgICogQHJldHVybnMge09iamVjdH0gRm9ybWF0dGVkIG9iamVjdCBkZXNjcmliaW5nIHRoZSBtZW51IGl0ZW0gYW5kIGl0cyBjaGlsZHJlblxuICAgKi9cbiAgX21ha2VOYXZJdGVtVHJlZShlbGUpe1xuICAgIGxldCBsaW5rVGV4dCwgaHJlZiwgc3ViSXRlbXMgPSBbXSwgaXNPcGVuPWZhbHNlLCBtb2JpbGVTdHlsZXM9e307XG4gICAgaWYgKCBlbGUudGFnTmFtZSA9PT0gJ0xJJyAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkgZWxlID0gZWxlLmNoaWxkcmVuWzBdO1xuXG4gICAgaWYgKCBlbGUudGFnTmFtZSA9PT0gJ0EnICkge1xuICAgICAgbGlua1RleHQgPSBlbGUuaW5uZXJUZXh0O1xuICAgICAgaHJlZiA9IGVsZS5ocmVmO1xuICAgIH0gZWxzZSBpZiAoIGVsZS50YWdOYW1lID09PSAnTEknICkge1xuICAgICAgbGlua1RleHQgPSBlbGUuaW5uZXJUZXh0O1xuICAgIH0gZWxzZSBpZiAoIGVsZS50YWdOYW1lID09PSAnT0wnIHx8IGVsZS50YWdOYW1lID09PSAnVUwnICkge1xuICAgICAgbGlua1RleHQgPSBlbGUuZ2V0QXR0cmlidXRlKCdsaW5rLXRleHQnKTtcbiAgICAgIGhyZWYgPSBlbGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgQXJyYXkuZnJvbShlbGUuY2hpbGRyZW4pKSB7XG4gICAgICAgIGxldCBjaGlsZEl0ZW0gPSB0aGlzLl9tYWtlTmF2SXRlbVRyZWUoY2hpbGQpO1xuICAgICAgICBpZiAoIGNoaWxkSXRlbS5saW5rVGV4dCApIHN1Ykl0ZW1zLnB1c2goY2hpbGRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIGxpbmtUZXh0ICkgbGlua1RleHQgPSBsaW5rVGV4dC50cmltKCk7XG4gICAgcmV0dXJuIHtsaW5rVGV4dCwgaHJlZiwgc3ViSXRlbXMsIGlzT3BlbiwgbW9iaWxlU3R5bGVzfTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3JlbmRlck5hdkl0ZW1cbiAgICogQGRlc2NyaXB0aW9uIFJlbmRlcnMgYSBtZW51IGl0ZW0gYW5kIGFsbCBpdHMgY2hpbGRyZW4gdG8gdGhlIHNwZWNpZmllZCBtYXggZGVwdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IG5hdkl0ZW0gLSBBbiBpdGVtIGZyb20gdGhlICduYXZJdGVtcycgZWxlbWVudCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge0FycmF5fSBsb2NhdGlvbiAtIENvb3JkaW5hdGVzIG9mIHRoZSBpdGVtIGluIHRoZSAnbmF2SXRlbXMnIGFycmF5LiBpLmUuIFswLCAxLCA0XVxuICAgKiBAcmV0dXJucyB7VGVtcGxhdGVSZXN1bHR9XG4gICAqL1xuICBfcmVuZGVyTmF2SXRlbShuYXZJdGVtLCBsb2NhdGlvbil7XG4gICAgY29uc3QgZGVwdGggPSBsb2NhdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgLy8gUmVuZGVyIGl0ZW0gYW5kIGl0cyBzdWJuYXZcbiAgICBpZiAoIHRoaXMuX2hhc1N1Yk5hdihuYXZJdGVtKSAmJiBkZXB0aCA8IHRoaXMubWF4RGVwdGgpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPGxpIFxuICAgICAgICBpZD1cIm5hdi0tJHtsb2NhdGlvbi5qb2luKFwiLVwiKX1cIlxuICAgICAgICAua2V5PSR7bG9jYXRpb259XG4gICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5fb25JdGVtTW91c2VlbnRlcn0gXG4gICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5fb25JdGVtTW91c2VsZWF2ZX1cbiAgICAgICAgY2xhc3M9XCJkZXB0aC0ke2RlcHRofSAke25hdkl0ZW0uaXNPcGVuID8gJ3NmLS1ob3ZlcicgOiAnJ30gJHtuYXZJdGVtLmlzQ2xvc2luZyA/ICdjbG9zaW5nJzogJyd9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtZW51LXRvZ2dsZV9fd3JhcHBlciAke2RlcHRoID09PSAwID8gYCR7dGhpcy5fY2xhc3NQcmVmaXh9X190b3AtbGlua2AgOiAnJ31cIj5cbiAgICAgICAgICA8YSBcbiAgICAgICAgICAgIGhyZWY9JHtuYXZJdGVtLmhyZWZ9IFxuICAgICAgICAgICAgQGZvY3VzPSR7dGhpcy5fb25JdGVtRm9jdXN9PlxuICAgICAgICAgICAgJHtuYXZJdGVtLmxpbmtUZXh0fTxzcGFuIGNsYXNzPVwiJHt0aGlzLl9jbGFzc1ByZWZpeH1fX3N1Ym1lbnUtaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3RvZ2dsZU1vYmlsZU1lbnUobG9jYXRpb24pfVxuICAgICAgICAgIGNsYXNzPVwic3VibWVudS10b2dnbGUgJHtuYXZJdGVtLmlzT3BlbiA/ICdzdWJtZW51LXRvZ2dsZS0tb3BlbicgOiAnJ31cIiBcbiAgICAgICAgICA/ZGlzYWJsZWQ9JHtuYXZJdGVtLmlzVHJhbnNpdGlvbmluZ31cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIFN1Ym1lbnVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN1Ym1lbnUtdG9nZ2xlX19pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1lbnUgJHtuYXZJdGVtLmlzT3BlbiA/IFwibWVudS0tb3BlblwiIDogXCJcIn1cIiBzdHlsZT0ke3N0eWxlTWFwKHRoaXMuZ2V0SXRlbU1vYmlsZVN0eWxlcyhsb2NhdGlvbikpfT5cbiAgICAgICAgICAke25hdkl0ZW0uc3ViSXRlbXMubWFwKChzdWJJdGVtLCBpKSA9PiB0aGlzLl9yZW5kZXJOYXZJdGVtKHN1Ykl0ZW0sIGxvY2F0aW9uLmNvbmNhdChbaV0pKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgIGA7XG4gICAgfVxuXG4gICAgLy8gcmVuZGVyIGFzIG5vcm1hbCBsaW5rXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bGkgaWQ9XCJuYXYtLSR7bG9jYXRpb24uam9pbihcIi1cIil9XCIgLmtleT0ke2xvY2F0aW9ufSBjbGFzcz1cImRlcHRoLSR7ZGVwdGh9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke2RlcHRoID09PSAwID8gYCR7dGhpcy5fY2xhc3NQcmVmaXh9X190b3AtbGlua2A6ICcnIH1cIj5cbiAgICAgICAgICAke25hdkl0ZW0uaHJlZiA/IGh0bWxgXG4gICAgICAgICAgICA8YSBocmVmPSR7bmF2SXRlbS5ocmVmfT4ke25hdkl0ZW0ubGlua1RleHR9PC9hPlxuICAgICAgICAgIGAgOiBodG1sYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke3RoaXMuX2NsYXNzUHJlZml4fV9fbm9saW5rXCI+JHtuYXZJdGVtLmxpbmtUZXh0fTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF90b2dnbGVNb2JpbGVNZW51XG4gICAqIEBkZXNjcmlwdGlvbiBFeHBhbmRzL2NvbGxhcHNlcyBtb2JpbGUgc3VibmF2cyB3aXRoIGFuaW1hdGlvbiBvbiB1c2VyIGNsaWNrLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuYXZMb2NhdGlvbiAtIEFycmF5IGNvb3JkaW5hdGVzIG9mIGNvcnJlc3BvbmRpbmcgbmF2IGl0ZW1cbiAgICovXG4gIGFzeW5jIF90b2dnbGVNb2JpbGVNZW51KG5hdkxvY2F0aW9uKXtcbiAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoID49IHRoaXMuX21vYmlsZUJyZWFrUG9pbnQgKSByZXR1cm47XG4gICAgbGV0IG5hdkl0ZW0gPSB0aGlzLmdldE5hdkl0ZW0obmF2TG9jYXRpb24pO1xuICAgIGlmICggbmF2SXRlbS5pc09wZW4gKSB7XG4gICAgICB0aGlzLmNsb3NlU3ViTmF2KG5hdkxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuU3ViTmF2KG5hdkxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25OYXZNb3VzZWVudGVyXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byB0b3AtbGV2ZWwgbmF2IGVsZW1lbnQuIE9wZW5zIG1lZ2EgbWVudSBpbiBkZXNrdG9wIHZpZXdcbiAgICovXG4gIF9vbk5hdk1vdXNlZW50ZXIoKXtcbiAgICBpZiAoIFxuICAgICAgd2luZG93LmlubmVyV2lkdGggPCB0aGlzLl9tb2JpbGVCcmVha1BvaW50IHx8IFxuICAgICAgIXRoaXMuaXNNZWdhTWVudSgpICkgXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAoIHRoaXMuX21lZ2FUaW1lb3V0ICkgY2xlYXJUaW1lb3V0KHRoaXMuX21lZ2FUaW1lb3V0KTtcbiAgICB0aGlzLl9tZWdhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuU3ViTmF2KCk7XG4gICAgfSwgdGhpcy5ob3ZlckRlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk5hdk1vdXNlbGVhdmVcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIHRvcC1sZXZlbCBuYXYgZWxlbWVudC4gQ2xvc2VzIG1lZ2EgbWVudSBpbiBkZXNrdG9wIHZpZXdcbiAgICovXG4gIF9vbk5hdk1vdXNlbGVhdmUoKXtcbiAgICBpZiAoIFxuICAgICAgd2luZG93LmlubmVyV2lkdGggPCB0aGlzLl9tb2JpbGVCcmVha1BvaW50IHx8IFxuICAgICAgIXRoaXMuaXNNZWdhTWVudSgpICkgXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAoIHRoaXMuX21lZ2FUaW1lb3V0ICkgY2xlYXJUaW1lb3V0KHRoaXMuX21lZ2FUaW1lb3V0KTtcbiAgICBcbiAgICB0aGlzLl9tZWdhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVN1Yk5hdigpO1xuICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG4gIH1cblxuICBfb25OYXZGb2N1c2luKCl7XG4gICAgaWYgKCBcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fbW9iaWxlQnJlYWtQb2ludCB8fCBcbiAgICAgICF0aGlzLmlzTWVnYU1lbnUoKSApIFxuICAgICAgcmV0dXJuO1xuICAgIFxuICAgIGlmICggdGhpcy5fbWVnYUlzT3BlbiApIHJldHVybjtcbiAgICBpZiAoIHRoaXMuX21lZ2FUaW1lb3V0ICkgY2xlYXJUaW1lb3V0KHRoaXMuX21lZ2FUaW1lb3V0KTtcbiAgICBcbiAgICB0aGlzLl9tZWdhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVN1Yk5hdigpO1xuICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uSXRlbU1vdXNlZW50ZXJcbiAgICogQGRlc2NyaXB0aW9uIEJvdW5kIHRvIG5hdiBsaSBpdGVtcyB3aXRoIGEgc3VibmF2XG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgXG4gICAqL1xuICBfb25JdGVtTW91c2VlbnRlcihlKXtcbiAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fbW9iaWxlQnJlYWtQb2ludCB8fCB0aGlzLmlzTWVnYU1lbnUoKSApIHJldHVybjtcbiAgICB0aGlzLm9wZW5TdWJOYXYoZS50YXJnZXQua2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkl0ZW1Gb2N1c1xuICAgKiBAZGVzY3JpcHRpb24gQm91bmQgdG8gbmF2IGEgZWxlbWVudHNcbiAgICogQHBhcmFtIHtFdmVudH0gZSBcbiAgICovXG4gIF9vbkl0ZW1Gb2N1cyhlKXtcbiAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fbW9iaWxlQnJlYWtQb2ludCApIHJldHVybjtcbiAgICBjb25zdCBMSSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLm9wZW5TdWJOYXYoTEkua2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG9wZW5TdWJOYXZcbiAgICogQGRlc2NyaXB0aW9uIE9wZW5zIHRoZSBzcGVjaWZpZWQgc3VibmF2XG4gICAqIEBwYXJhbSB7QXJyYXl9IG5hdkxvY2F0aW9uIC0gQ29vcmRpbmF0ZXMgb2YgdGhlIGl0ZW0gaW4gdGhlICduYXZJdGVtcycgYXJyYXkuIGkuZS4gWzAsIDEsIDRdLlxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jIG9wZW5TdWJOYXYobmF2TG9jYXRpb24pe1xuXG4gICAgLy8gbWVnYSBtZW51XG4gICAgaWYgKCB0aGlzLmlzTWVnYU1lbnUoKSApe1xuICAgICAgdGhpcy5fbWVnYUlzT3BlbiA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbm9uLW1lZ2EgbWVudVxuICAgIGlmICggXG4gICAgICB0eXBlb2YgbmF2TG9jYXRpb24gIT09ICdvYmplY3QnIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShuYXZMb2NhdGlvbikgfHxcbiAgICAgIG5hdkxvY2F0aW9uLmxlbmd0aCA9PT0gMFxuICAgICkgcmV0dXJuO1xuICAgIGxldCBuYXZJdGVtID0gdGhpcy5nZXROYXZJdGVtKG5hdkxvY2F0aW9uKTtcbiAgICBpZiAoICFuYXZJdGVtICkgcmV0dXJuO1xuXG4gICAgLy8gT3BlbiBvbiBtb2JpbGVcbiAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5fbW9iaWxlQnJlYWtQb2ludCApIHtcbiAgICAgIGxldCBuYXYgPSB0aGlzLnJlbmRlclJvb3QuZ2V0RWxlbWVudEJ5SWQoYG5hdi0tJHtuYXZMb2NhdGlvbi5qb2luKFwiLVwiKX1gKTtcbiAgICAgIGlmICggIW5hdiApIHJldHVybjtcbiAgICAgIGxldCB1bCA9IG5hdi5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgICAgaWYgKCAhdWwgKSByZXR1cm47XG4gICAgICBpZiAoIG5hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nICkgcmV0dXJuO1xuICAgICAgbmF2SXRlbS5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuXG4gICAgICAvLyBHZXQgZXhwYW5kZWQgaGVpZ2h0XG4gICAgICBuYXZJdGVtLm1vYmlsZVN0eWxlcy5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuaGVpZ2h0ID0gMCArIFwicHhcIjtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgIGNvbnN0IGV4cGFuZGVkSGVpZ2h0ID0gdWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgICAvLyBTZXQgZXhwYW5kZWQgaGVpZ2h0XG4gICAgICBuYXZJdGVtLm1vYmlsZVN0eWxlcy5oZWlnaHQgPSBleHBhbmRlZEhlaWdodDtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRyYW5zaXRpb24gc3RhdGUgYWZ0ZXIgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICB0aGlzLl9jb21wbGV0ZU1vYmlsZVRyYW5zaXRpb24obmF2SXRlbSk7XG5cblxuICAgIC8vIE9wZW4gb24gZGVza3RvcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTW9iaWxlU3R5bGVzKG5hdkl0ZW0pO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzQ2xvc2luZyApIHtcbiAgICAgICAgbmF2SXRlbS5pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIG5hdkl0ZW0udGltZW91dCApIGNsZWFyVGltZW91dChuYXZJdGVtLnRpbWVvdXQpO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzT3BlbiApIHJldHVybjtcbiAgXG4gICAgICBuYXZJdGVtLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbmF2SXRlbS5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbXBsZXRlTW9iaWxlVHJhbnNpdGlvblxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aW1lb3V0IHRvIHJlbW92ZSBhbmltYXRpb24gc3R5bGVzIGZyb20gbW9iaWxlIHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG5hdkl0ZW0gLSBNZW1iZXIgJ25hdkl0ZW1zJyBlbGVtZW50IHByb3BlcnR5LlxuICAgKi9cbiAgX2NvbXBsZXRlTW9iaWxlVHJhbnNpdGlvbihuYXZJdGVtKXtcbiAgICBuYXZJdGVtLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5hdkl0ZW0ubW9iaWxlU3R5bGVzID0ge307XG4gICAgICBuYXZJdGVtLmlzT3BlbiA9ICFuYXZJdGVtLmlzT3BlbjtcbiAgICAgIG5hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzTWVnYU1lbnVcbiAgICogQGRlc2NyaXB0aW9uIERvZXMgdGhpcyBlbGVtZW50IHVzZSB0aGUgbWVnYSBtZW51P1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGlzTWVnYU1lbnUoKXtcbiAgICBpZiAoIHRoaXMubmF2VHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA9PT0gJ21lZ2EnKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JdGVtTW91c2VsZWF2ZVxuICAgKiBAZGVzY3JpcHRpb24gQm91bmQgdG8gbmF2IGxpIGl0ZW1zIHdpdGggYSBzdWJuYXZcbiAgICogQHBhcmFtIHtFdmVudH0gZSBcbiAgICovXG4gIF9vbkl0ZW1Nb3VzZWxlYXZlKGUpe1xuICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCB0aGlzLl9tb2JpbGVCcmVha1BvaW50IHx8IHRoaXMuaXNNZWdhTWVudSgpICkgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VTdWJOYXYoZS50YXJnZXQua2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk5hdkZvY3Vzb3V0XG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byB0aGUgdG9wLWxldmVsIG5hdiBlbGVtZW50LiBDbG9zZXMgc3VibmF2IGlmIGl0IGRvZXNuJ3QgY29udGFpbiBmb2N1c2VkIGxpbmsuXG4gICAqL1xuICBfb25OYXZGb2N1c291dCgpe1xuICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPCB0aGlzLl9tb2JpbGVCcmVha1BvaW50ICkgcmV0dXJuO1xuICAgIGlmICggdGhpcy5pc01lZ2FNZW51KCkgKSB7XG4gICAgICBpZiAoIHRoaXMuX21lZ2FUaW1lb3V0ICkgY2xlYXJUaW1lb3V0KHRoaXMuX21lZ2FUaW1lb3V0KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRFbGUgPSB0aGlzLnJlbmRlclJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKCBmb2N1c2VkRWxlICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tZWdhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VTdWJOYXYoKTtcbiAgICAgICAgfSwgdGhpcy5ob3ZlckRlbGF5KTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRFbGUgPSB0aGlzLnJlbmRlclJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKCAhZm9jdXNlZEVsZSApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQWxsU3ViTmF2cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGVsZSA9IGZvY3VzZWRFbGU7XG4gICAgICAgIHdoaWxlICggXG4gICAgICAgICAgZWxlICYmXG4gICAgICAgICAgZWxlLnRhZ05hbWUgIT09IHRoaXMudGFnTmFtZSAmJlxuICAgICAgICAgICFBcnJheS5pc0FycmF5KGVsZS5rZXkpIFxuICAgICAgICApe1xuICAgICAgICAgIGVsZSA9IGVsZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICggIWVsZS5rZXkgKSByZXR1cm47XG4gICAgICAgIGxldCBuYXZMb2NhdGlvbiA9IFsuLi5lbGUua2V5XTtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IG5hdkxvY2F0aW9uLnBvcCgpO1xuICAgICAgICBsZXQgbmF2U2libGluZ3MgPSBuYXZMb2NhdGlvbi5sZW5ndGggPT0gMCA/IHRoaXMubmF2SXRlbXMgOiB0aGlzLmdldE5hdkl0ZW0obmF2TG9jYXRpb24pLnN1Ykl0ZW1zO1xuICAgICAgICBuYXZTaWJsaW5ncy5mb3JFYWNoKChzaWJsaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCBpICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWxsU3ViTmF2cyhzaWJsaW5nLnN1Ykl0ZW1zLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9KTtcblxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvc2VTdWJOYXZcbiAgICogQGRlc2NyaXB0aW9uIENsb3NlcyBhIHN1Ym5hdiBnaXZlbiBpdHMgY29vcmRpbmF0ZXMgXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5hdkxvY2F0aW9uIC0gQ29vcmRpbmF0ZXMgb2YgdGhlIGl0ZW0gaW4gdGhlICduYXZJdGVtcycgYXJyYXkuIGkuZS4gWzAsIDEsIDRdLlxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jIGNsb3NlU3ViTmF2KG5hdkxvY2F0aW9uKXtcblxuICAgIC8vIG1lZ2EgbWVudVxuICAgIGlmICggdGhpcy5pc01lZ2FNZW51KCkgKXtcbiAgICAgIHRoaXMuX21lZ2FJc09wZW4gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIFxuICAgICAgdHlwZW9mIG5hdkxvY2F0aW9uICE9PSAnb2JqZWN0JyB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkobmF2TG9jYXRpb24pIHx8XG4gICAgICBuYXZMb2NhdGlvbi5sZW5ndGggPT09IDBcbiAgICApIHJldHVybjtcbiAgICBsZXQgbmF2SXRlbSA9IHRoaXMuZ2V0TmF2SXRlbShuYXZMb2NhdGlvbik7XG4gICAgaWYgKCAhbmF2SXRlbSApIHJldHVybjtcblxuICAgIC8vIE9wZW4gb24gbW9iaWxlXG4gICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMuX21vYmlsZUJyZWFrUG9pbnQgKSB7XG4gICAgICBsZXQgbmF2ID0gdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKGBuYXYtLSR7bmF2TG9jYXRpb24uam9pbihcIi1cIil9YCk7XG4gICAgICBpZiAoICFuYXYgKSByZXR1cm47XG4gICAgICBsZXQgdWwgPSBuYXYucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICAgIGlmICggIXVsICkgcmV0dXJuO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzVHJhbnNpdGlvbmluZyApIHJldHVybjtcbiAgICAgIG5hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxuICAgICAgLy8gU2V0IGV4cGFuZGVkIGhlaWdodFxuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuaGVpZ2h0ID0gdWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcblxuICAgICAgLy8gU2V0IGhlaWdodCB0byAwXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBuYXZJdGVtLm1vYmlsZVN0eWxlcy5oZWlnaHQgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgdHJhbnNpdGlvbiBzdGF0ZSBhZnRlciBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgIHRoaXMuX2NvbXBsZXRlTW9iaWxlVHJhbnNpdGlvbihuYXZJdGVtKTtcbiAgICBcblxuICAgIC8vIE9wZW4gb24gZGVza3RvcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTW9iaWxlU3R5bGVzKG5hdkl0ZW0pO1xuICAgICAgaWYgKCBuYXZJdGVtLnRpbWVvdXQgKSBjbGVhclRpbWVvdXQobmF2SXRlbS50aW1lb3V0KTtcbiAgICAgIGlmICggIW5hdkl0ZW0uaXNPcGVuICkgcmV0dXJuO1xuICBcbiAgICAgIG5hdkl0ZW0uaXNDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgbmF2SXRlbS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5hdkl0ZW0uaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIG5hdkl0ZW0uaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfSwgdGhpcy5ob3ZlckRlbGF5ICsgdGhpcy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvc2VBbGxTdWJOYXZzXG4gICAqIEBkZXNjcmlwdGlvbiBSZWN1cnNpdmVseSBjbG9zZXMgYWxsIG5hdiBzdWJtZW51cyB3aXRoaW4gc3BlY2lmaWVkIG1lbnUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5hdkl0ZW1zIC0gVGhlIHN1Ykl0ZW1zIHByb3BlcnR5IG9mIGFueSBvYmplY3Qgd2l0aGluIHRoZSAnbmF2SXRlbXMnIGVsZW1lbnQgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVxdWVzdFVwZGF0ZSAtIFNob3VsZCBhbiB1cGRhdGUgYmUgcmVxdWVzdGVkIGFmdGVyIGVhY2ggc3VibmF2IGNsb3Npbmc/XG4gICAqL1xuICBjbG9zZUFsbFN1Yk5hdnMobmF2SXRlbXMsIHJlcXVlc3RVcGRhdGU9dHJ1ZSl7XG4gICAgaWYgKCAhbmF2SXRlbXMgKSBuYXZJdGVtcyA9IHRoaXMubmF2SXRlbXM7XG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICAgICAgaWYgKCBuYXZJdGVtLmlzT3BlbiApIHtcbiAgICAgICAgbmF2SXRlbS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCByZXF1ZXN0VXBkYXRlICkgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIG5hdkl0ZW0uc3ViSXRlbXMgKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxTdWJOYXZzKG5hdkl0ZW0uc3ViSXRlbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2hhc1N1Yk5hdlxuICAgKiBAZGVzY3JpcHRpb24gVXRpbGl0eSBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgaWYgYSBtZW51IGhhcyBzdWJpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gbmF2SXRlbSAtIEEgbWVtYmVyIG9mIHRoZSBuYXZJdGVtcyBhcnJheS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBfaGFzU3ViTmF2KG5hdkl0ZW0pe1xuICAgIGlmICggbmF2SXRlbSAmJiBuYXZJdGVtLnN1Ykl0ZW1zICYmIG5hdkl0ZW0uc3ViSXRlbXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXROYXZJdGVtXG4gICAqIEBkZXNjcmlwdGlvbiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBuYXZJdGVtcyBhcnJheS5cbiAgICogQHBhcmFtIHtBcnJheX0gbG9jYXRpb24gLSBDb29yZGluYXRlcyBvZiB0aGUgaXRlbSBpbiB0aGUgJ25hdkl0ZW1zJyBhcnJheS4gaS5lLiBbMCwgMSwgNF0uXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXROYXZJdGVtKGxvY2F0aW9uKXtcbiAgICBsZXQgYWNjZXNzb3IgPSBcInRoaXMubmF2SXRlbXNcIjtcbiAgICBpZiAoIGxvY2F0aW9uICYmIGxvY2F0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGFjY2Vzc29yICs9IFwiW1wiICsgbG9jYXRpb24uam9pbihcIl0uc3ViSXRlbXNbXCIpICsgXCJdXCI7XG4gICAgfVxuICAgIHJldHVybiBldmFsKGFjY2Vzc29yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEl0ZW1Nb2JpbGVTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgaW5saW5lIHN0eWxlcyBvbiBhIG5hdiBlbGVtZW50ICh1c2VkIGZvciBtb2JpbGUgdHJhbnNpdGlvbiBhbmltYXRpb24pXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxvY2F0aW9uIC0gQ29vcmRpbmF0ZXMgb2YgdGhlIGl0ZW0gaW4gdGhlICduYXZJdGVtcycgYXJyYXkuIGkuZS4gWzAsIDEsIDRdLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFN0eWxlIG1hcFxuICAgKi9cbiAgZ2V0SXRlbU1vYmlsZVN0eWxlcyhsb2NhdGlvbikge1xuICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPj0gdGhpcy5fbW9iaWxlQnJlYWtQb2ludCApIHJldHVybiB7fTtcbiAgICBsZXQgbmF2SXRlbSA9IHRoaXMuZ2V0TmF2SXRlbShsb2NhdGlvbik7XG4gICAgaWYgKCAhbmF2SXRlbS5tb2JpbGVTdHlsZXMgKSByZXR1cm4ge307XG4gICAgcmV0dXJuIG5hdkl0ZW0ubW9iaWxlU3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xlYXJNb2JpbGVTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgaW5saW5lIHN0eWxlcyBvbiBhIG5hdiBlbGVtZW50ICh1c2VkIGZvciBtb2JpbGUgdHJhbnNpdGlvbiBhbmltYXRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuYXZJdGVtIC0gTWVtYmVyIG9mIHRoZSB0aGlzLm5hdkl0ZW1zIGFycmF5XG4gICAqL1xuICBjbGVhck1vYmlsZVN0eWxlcyhuYXZJdGVtKXtcbiAgICBpZiAoXG4gICAgICBuYXZJdGVtICYmXG4gICAgICBuYXZJdGVtLm1vYmlsZVN0eWxlcyAmJiBcbiAgICAgIE9iamVjdC5rZXlzKG5hdkl0ZW0ubW9iaWxlU3R5bGVzKS5sZW5ndGggPiAwIFxuICAgICkge1xuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMgPSB7fTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLXByaW1hcnktbmF2JywgVWNkVGhlbWVQcmltYXJ5TmF2KTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbm9ybWFsaXplU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanNcIjtcbmltcG9ydCBmb3JtU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanNcIjtcbmltcG9ydCBtZW51U3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzJfYmFzZV9jbGFzcy9fbWlzYy5jc3MuanNcIjtcbmltcG9ydCBwcmltYXJ5TmF2U3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19uYXYtcHJpbWFyeS5jc3MuanNcIjtcbmltcG9ydCBzdWJOYXZUb2dnbGVTdHlsZXMgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3N1Ym1lbnUtdG9nZ2xlLmNzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCBlbGVtZW50U3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3VibWVudS10b2dnbGUgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICBuYXYucHJpbWFyeS1uYXYtLW1lZ2EgbGkuZGVwdGgtMCA+IHVsLm1lbnUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgdWwubWVudSB1bC5tZW51IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIHVsLm1lbnUgbGkuc2YtLWhvdmVyID4gdWwubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdWwubWVudSBsaS5jbG9zaW5nID4gdWwubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgdWwubWVudSB1bC5tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuXG4gICAgICB1bC5tZW51IHVsLm1lbnUubWVudS0tb3BlbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbXG4gICAgbm9ybWFsaXplU3R5bGVzLFxuICAgIGZvcm1TdHlsZXMsXG4gICAgbWVudVN0eWxlcyxcbiAgICBwcmltYXJ5TmF2U3R5bGVzLFxuICAgIHN1Yk5hdlRvZ2dsZVN0eWxlcyxcbiAgICBlbGVtZW50U3R5bGVzXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gIHVsLm1lbnUgdWwubWVudSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyBcIm1zXCJ9LCBoZWlnaHQgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9uICsgXCJtc1wifTtcbiAgfVxuICB1bC5tZW51IGxpLnNmLS1ob3ZlciA+IHVsLm1lbnUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9uICsgXCJtc1wifSAke3RoaXMuaG92ZXJEZWxheSArIFwibXNcIn0sIGhlaWdodCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyBcIm1zXCJ9O1xuICB9XG5cbjwvc3R5bGU+XG48bmF2IFxuICBpZD0ke3RoaXMuX2NsYXNzUHJlZml4fVxuICBjbGFzcz1cIiR7dGhpcy5nZXROYXZDbGFzc2VzKCl9XCIgXG4gIEBtb3VzZWVudGVyPSR7dGhpcy5fb25OYXZNb3VzZWVudGVyfVxuICBAbW91c2VsZWF2ZT0ke3RoaXMuX29uTmF2TW91c2VsZWF2ZX1cbiAgQGZvY3Vzb3V0PSR7dGhpcy5fb25OYXZGb2N1c291dH1cbiAgQGZvY3VzaW49JHt0aGlzLl9vbk5hdkZvY3VzaW59XG4gIGFyaWEtbGFiZWw9XCJNYWluIE1lbnVcIj5cbiAgPHVsIGNsYXNzPVwibWVudVwiPlxuICAgICR7dGhpcy5uYXZJdGVtcy5tYXAoKG5hdkl0ZW0sIGkpID0+IHRoaXMuX3JlbmRlck5hdkl0ZW0obmF2SXRlbSwgW2ldKSl9XG4gIDwvdWw+XG48L25hdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtNaXhpbiwgTXV0YXRpb25PYnNlcnZlckVsZW1lbnR9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLyoqXG4gKiBAY2xhc3MgVWNkbGliUGFnZXNcbiAqIEBkZXNjcmlwdGlvbiBzaW1pbGFyIHRvIHRoZSBvbGQgaXJvbi1wYWdlcyBlbGVtZW50LCBhbGxvd3MgeW91IHRvIGNvbnRyb2wgd2hpY2ggZWxlbWVudCBpcyB2aXNpYmxlXG4gKiBiYXNlZCBvbiBjaGlsZCBpbmRleCBvciB0YWcgYXR0cmlidXRlXG4gKiBcbiAqIDx1Y2RsaWItcGFnZXMgc2VsZWN0ZWQ9XCJwYWdlMlwiIGF0dHItZm9yLXNlbGVjdGVkPVwiaWRcIj5cbiAqICAgPGRpdiBpZD1cInBhZ2UxXCI+VGVzdCAxPC9kaXY+XG4gKiAgIDxkaXYgaWQ9XCJwYWdlMlwiPlRlc3QgMjwvZGl2PlxuICogPC91Y2RsaWItcGFnZXM+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZGxpYlBhZ2VzIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTXV0YXRpb25PYnNlcnZlckVsZW1lbnQpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBhdHRyRm9yU2VsZWN0ZWQgOiB7XG4gICAgICAgIGF0dHJpYnV0ZTogJ2F0dHItZm9yLXNlbGVjdGVkJyxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRBdHRyaWJ1dGUgOiB7XG4gICAgICAgIGF0dHJpYnV0ZTogJ3NlbGVjdGVkLWF0dHJpYnV0ZScsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjcmVhdGVSZW5kZXJSb290XG4gICAqIEBkZXNjcmlwdGlvbiBvdmVycmlkZSBjcmVhdGVSZW5kZXJSb290LCBubyBuZWVkIGZvciBzaGFkb3dkb21cbiAgICogXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiggcHJvcHMuaGFzKCdhdHRyRm9yU2VsZWN0ZWQnKSB8fCBwcm9wcy5oYXMoJ3NlbGVjdGVkQXR0cmlidXRlJykgfHwgcHJvcHMuaGFzKCdzZWxlY3RlZCcpICkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoaWxkTGlzdE11dGF0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgd2hlbiBjaGlsZHJlbiBjaGFuZ2UgdmlhIE11dGF0aW9uT2JzZXJ2ZXJFbGVtZW50XG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnRMaXN0fSBjaGlsZHJlbiBcbiAgICovXG4gIF9vbkNoaWxkTGlzdE11dGF0aW9uKGNoaWxkcmVuKSB7XG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoYW5nZVxuICAgKiBAZGVzY3JpcHRpb24gdXBkYXRlIHZpc2liaWxpdHkgXG4gICAqL1xuICBfb25DaGFuZ2UoKSB7XG4gICAgbGV0IGF0dHIgPSB0aGlzLmF0dHJGb3JTZWxlY3RlZCB8fCAnaWQnO1xuICAgIGxldCBzZWxlY3RlZCA9IDA7XG5cbiAgICAvLyBmaW5kIHdoYXQgdGhlIHNlbGVjdGVkIGF0dHJpYnV0ZSBpc1xuICAgIGlmKCB0aGlzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgfHwgdGhpcy5zZWxlY3RlZCAhPT0gbnVsbCApIHtcbiAgICAgIGlmKCB0eXBlb2YgdGhpcy5zZWxlY3RlZCA9PT0gJ3N0cmluZycgJiYgdGhpcy5zZWxlY3RlZC5tYXRjaCgvXFxkKy8pICkge1xuICAgICAgICBzZWxlY3RlZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvb3AgdGhyb3VnaCBhbmQgaGlkZS9zaG93IGNoaWxkcmVuXG4gICAgbGV0IGZvdW5kID0gdGhpcy5fdXBkYXRlVmlzaWJpbGl0eShzZWxlY3RlZCwgYXR0cik7XG5cbiAgICAvLyBpZiBub3RoaW5nIGZvdW5kLCBjaGVjayBmYWxsYmFjayBzZWxlY3Rpb25cbiAgICBpZiggIWZvdW5kICYmIHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24gKSB7XG4gICAgICBpZiggdHlwZW9mIHRoaXMuc2VsZWN0ZWQgPT09ICdzdHJpbmcnICYmIHRoaXMuc2VsZWN0ZWQubWF0Y2goL1xcZCsvKSApIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBwYXJzZUludCh0aGlzLmZhbGxiYWNrU2VsZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkID0gdGhpcy5mYWxsYmFja1NlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgZm91bmQgPSB0aGlzLl91cGRhdGVWaXNpYmlsaXR5KHNlbGVjdGVkLCBhdHRyKTtcbiAgICB9IFxuXG4gICAgaWYoICFmb3VuZCApIHtcbiAgICAgIGNvbnNvbGUud2FybigndWNkbGliLXBhZ2VzIHdhcyB1bmFibGUgbWF0Y2g6ICcsIHNlbGVjdGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdXBkYXRlVmlzaWJpbGl0eVxuICAgKiBAZGVzY3JpcHRpb24gcnVuIHVwZGF0ZSBsb29wIGJhc2VkIG9uIHNlbGVjdGVkIHZhbHVlIGFuZCBhdHRyaWJ1dGUgdG8gdXNlIGlmXG4gICAqIHNlbGVjdGVkIGlzIG5vdCBhIG51bWJlci5cbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gc2VsZWN0ZWQgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyIFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIF91cGRhdGVWaXNpYmlsaXR5KHNlbGVjdGVkLCBhdHRyKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gWy4uLiB0aGlzLmNoaWxkcmVuXTtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgdXNlSW5kZXggPSAodHlwZW9mIHNlbGVjdGVkID09PSAnbnVtYmVyJyk7XG4gICAgbGV0IHZhbDtcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XG4gICAgICBpZiggdXNlSW5kZXggKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdCgoaSA9PT0gc2VsZWN0ZWQpLCBjaGlsZHJlbltpXSwgdGhpcy5zZWxlY3RlZEF0dHJpYnV0ZSk7XG4gICAgICAgIGlmKCAhZm91bmQgKSBmb3VuZCA9IChpID09PSBzZWxlY3RlZCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YWwgPSBjaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB0aGlzLl9zZWxlY3QoKHZhbCA9PT0gc2VsZWN0ZWQpLCBjaGlsZHJlbltpXSwgdGhpcy5zZWxlY3RlZEF0dHJpYnV0ZSk7XG4gICAgICBpZiggIWZvdW5kICkgZm91bmQgPSAodmFsID09PSBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NlbGVjdFxuICAgKiBAZGVzY3JpcHRpb24gc2VsZWN0IGF0dHJpYnV0ZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWUgXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY2hpbGQgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyaWJ1dGUgXG4gICAqL1xuICBfc2VsZWN0KHZhbHVlLCBjaGlsZCwgYXR0cmlidXRlKSB7XG4gICAgaWYoIHZhbHVlICkge1xuICAgICAgaWYoIGF0dHJpYnV0ZSApIGNoaWxkLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZSk7XG4gICAgICBlbHNlIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiggYXR0cmlidXRlICkgY2hpbGQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlKTtcbiAgICAgIGVsc2UgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZGxpYi1wYWdlcycsIFVjZGxpYlBhZ2VzKTsiLCJpbXBvcnQgTWl4aW4gZnJvbSAnLi9taXhpbi5qcyc7XG5pbXBvcnQge011dGF0aW9uT2JzZXJ2ZXJFbGVtZW50fSBmcm9tICcuL211dGF0aW9uLW9ic2VydmVyLmpzJztcbmltcG9ydCB7TWFpbkRvbUVsZW1lbnR9IGZyb20gJy4vbWFpbi1kb20tZWxlbWVudC5qcyc7XG5cbmV4cG9ydCB7TWl4aW4sIE11dGF0aW9uT2JzZXJ2ZXJFbGVtZW50LCBNYWluRG9tRWxlbWVudH07IiwiLyoqXG4gKiBAZnVuY3Rpb24gTWFpbkRvbUVsZW1lbnRcbiAqIEBwYXJhbSB7Q2xhc3N9IHN1cGVyQ2xhc3MgLSBMaXRFbGVtZW50IG9yIGNoaWxkIGNsYXNzLlxuICogQGRlc2NyaXB0aW9uIHNldCByZW5kZXIgY29udGV4dCBmb3IgbGl0IGVsZW1lbnQgdG8gbWFpbiBET00gaW5zdGVhZCBvZiB0aGVcbiAqIGRlZmF1bHQgc2hhZG93IHJvb3RcbiAqIFxuICogQHJldHVybnMge0NsYXNzfSBMaXRFbGVtZW50IHVwZGF0ZWQgY3JlYXRlUmVuZGVyUm9vdCBmdW5jdGlvbi5cbiAqL1xuY29uc3QgTWFpbkRvbUVsZW1lbnQgPSAoc3VwZXJDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcblxuICAvKipcbiAgICogQG1ldGhvZCBjcmVhdGVSZW5kZXJSb290XG4gICAqIEBkZXNjcmlwdGlvbiBzZXQgdGhlIHJvb3QgZWxlbWVudCB0byByZW5kZXIgaW50b1xuICAgKiBcbiAgICogQHJldHVybnMge0xpdEVsZW1lbnR9XG4gICAqL1xuICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn07XG5cbmV4cG9ydCB7TWFpbkRvbUVsZW1lbnR9OyIsIi8qKlxuICogRnJvbTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxODM5MTk4L2FwcGx5aW5nLWJlaGF2aW9ycy13aXRoLWpzLW1peGlucy1pbi1wb2x5bWVyLTJcbiAqKi9cbmNsYXNzIE1peGluQnVpbGRlciB7ICBcbiAgY29uc3RydWN0b3Ioc3VwZXJjbGFzcykge1xuICAgIHRoaXMuc3VwZXJjbGFzcyA9IHN1cGVyY2xhc3M7XG4gIH1cbiAgd2l0aCguLi5taXhpbnMpIHsgXG4gICAgcmV0dXJuIG1peGlucy5yZWR1Y2UoKGMsIG1peGluKSA9PiBtaXhpbihjKSwgdGhpcy5zdXBlcmNsYXNzKTtcbiAgfVxufVxuY29uc3QgTWl4aW4gPSAoc3VwZXJjbGFzcykgPT4gbmV3IE1peGluQnVpbGRlcihzdXBlcmNsYXNzKTtcblxuLy8gU2V0IGdsb2JhbCBpZiBhdmFpbGFibGVcbi8vIEh1bW1tbS4uLlxuLy8gaWYoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkgeyBcbi8vICAgd2luZG93Lk1peGluID0gTWl4aW47XG4vLyB9XG4gIFxuZXhwb3J0IGRlZmF1bHQgTWl4aW47IiwiLyoqXG4gKiBAZnVuY3Rpb24gTXV0YXRpb25PYnNlcnZlckVsZW1lbnRcbiAqIEBwYXJhbSB7Q2xhc3N9IHN1cGVyQ2xhc3MgLSBMaXRFbGVtZW50IG9yIGNoaWxkIGNsYXNzLlxuICogQGRlc2NyaXB0aW9uIGFkZCBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgZm9yIG11dGF0aW9uIG9ic2VydmVyXG4gKiBcbiAqIEByZXR1cm5zIHtDbGFzc30gTGl0RWxlbWVudCB3aXRoIG11dGF0aW9uIG9ic2VydmVyIGF0dGFjaGVkLlxuICovXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyRWxlbWVudCA9IChzdXBlckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZmlyc3RVcGRhdGVkXG4gICAqIEBkZXNjcmlwdGlvbiBjYWxsZWQgb24gZmlyc3QgRE9NIHJlbmRlci4gIENhbGwgdGhlIF9vbkNoaWxkTGlzdE11dGF0aW9uIG1ldGhvZFxuICAgKiBcbiAgICogQHBhcmFtIHtTZXR9IHByb3BzIFxuICAgKi9cbiAgZmlyc3RVcGRhdGVkKHByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKHByb3BzKTtcbiAgICB0aGlzLl9vbkNoaWxkTGlzdE11dGF0aW9uKHRoaXMuY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgY29ubmVjdGVkXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpe1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihcbiAgICAgIChtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikgPT4gdGhpcy5fb25DaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikpO1xuICAgIHRoaXMuX2NoaWxkTGlzdE9ic2VydmVyLm9ic2VydmUodGhpcywge2NoaWxkTGlzdDogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpe1xuICAgIHRoaXMuX2NoaWxkTGlzdE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG59O1xuXG5leHBvcnQge011dGF0aW9uT2JzZXJ2ZXJFbGVtZW50fTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gd2luZG93LlNoYWRvd1Jvb3QgJiZcbiAgICAod2luZG93LlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc2FmZVRva2VuKSB7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgICAvLyBzdHlsZXNoZWV0cyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gTm90ZSwgaWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZVxuICAgICAgICAvLyBDU1NTdHlsZVNoZWV0IGlzIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgdGhpcy5fc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuY29uc3QgY3NzUmVzdWx0Q2FjaGUgPSBuZXcgTWFwKCk7XG5jb25zdCBnZXRDU1NSZXN1bHQgPSAoY3NzVGV4dCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBjc3NSZXN1bHRDYWNoZS5nZXQoY3NzVGV4dCk7XG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNzc1Jlc3VsdENhY2hlLnNldChjc3NUZXh0LCAocmVzdWx0ID0gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBjb25zdHJ1Y3Rpb25Ub2tlbikpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBgICtcbiAgICAgICAgICAgIGAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIFtbYGNzc2BdXSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGdldENTU1Jlc3VsdCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKTtcbn07XG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBbW0xpdEVsZW1lbnQuc3R5bGVzIHxcbiAqIGBzdHlsZXNgXV0gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsXG4gKiBzdHJpbmcgdmFsdWVzIG1heSBiZSB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgW1tgdW5zYWZlQ1NTYF1dXG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYSB0ZW1wbGF0ZSBzdHJpbmcgcGFydC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gc3RyaW5ncy5sZW5ndGggPT09IDFcbiAgICAgICAgPyBzdHJpbmdzWzBdXG4gICAgICAgIDogdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgcmV0dXJuIGdldENTU1Jlc3VsdChjc3NUZXh0KTtcbn07XG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIHN0eWxlcyB0byBhIGBzaGFkb3dSb290YC4gV2hlbiBTaGFkb3cgRE9NIGlzXG4gKiBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAqIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlYyBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAqIE5vdGUsIHdoZW4gc2hpbW1pbmcgaXMgdXNlZCwgYW55IHN0eWxlcyB0aGF0IGFyZSBzdWJzZXF1ZW50bHkgcGxhY2VkIGludG9cbiAqIHRoZSBzaGFkb3dSb290IHNob3VsZCBiZSBwbGFjZWQgKmJlZm9yZSogYW55IHNoaW1tZWQgYWRvcHRlZCBzdHlsZXMuIFRoaXNcbiAqIHdpbGwgbWF0Y2ggc3BlYyBiZWhhdmlvciB0aGF0IGdpdmVzIGFkb3B0ZWQgc2hlZXRzIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAqIHNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBhZG9wdFN0eWxlcyA9IChyZW5kZXJSb290LCBzdHlsZXMpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgIHJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVzLm1hcCgocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBzIDogcy5zdHlsZVNoZWV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgICAgIHJlbmRlclJvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQgPSAoc2hlZXQpID0+IHtcbiAgICBsZXQgY3NzVGV4dCA9ICcnO1xuICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xuICAgICAgICBjc3NUZXh0ICs9IHJ1bGUuY3NzVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZUNTUyhjc3NUZXh0KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q29tcGF0aWJsZVN0eWxlID0gc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzXG4gICAgPyAocykgPT4gc1xuICAgIDogKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQocykgOiBzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jLCBfZDtcbnZhciBfZTtcbnZhciBfZjtcbi8qKlxuICogVXNlIHRoaXMgbW9kdWxlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBiYXNlIGNsYXNzIGV4dGVuZGluZ1xuICogW1tSZWFjdGl2ZUVsZW1lbnRdXS5cbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBnZXRDb21wYXRpYmxlU3R5bGUsIGFkb3B0U3R5bGVzLCB9IGZyb20gJy4vY3NzLXRhZy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IHJlcXVlc3RVcGRhdGVUaGVuYWJsZTtcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIFRPRE8oc29ydmVsbCk6IEFkZCBhIGxpbmsgdG8gdGhlIGRvY3MgYWJvdXQgdXNpbmcgZGV2IHYuIHByb2R1Y3Rpb24gbW9kZS5cbiAgICBjb25zb2xlLndhcm4oYFJ1bm5pbmcgaW4gZGV2IG1vZGUuIERvIG5vdCB1c2UgaW4gcHJvZHVjdGlvbiFgKTtcbiAgICAvLyBJc3N1ZSBwbGF0Zm9ybSBzdXBwb3J0IHdhcm5pbmcuXG4gICAgaWYgKCgoX2EgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pblVzZSkgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgZ2xvYmFsVGhpc1sncmVhY3RpdmVFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYFNoYWRvdyBET00gaXMgYmVpbmcgcG9seWZpbGxlZCB2aWEgU2hhZHlET00gYnV0IGAgK1xuICAgICAgICAgICAgYHRoZSBcXGBwb2x5ZmlsbC1zdXBwb3J0XFxgIG1vZHVsZSBoYXMgbm90IGJlZW4gbG9hZGVkLmApO1xuICAgIH1cbiAgICByZXF1ZXN0VXBkYXRlVGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IChvbmZ1bGZpbGxlZCwgX29ucmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgXFxgcmVxdWVzdFVwZGF0ZVxcYCBubyBsb25nZXIgcmV0dXJucyBhIFByb21pc2UuYCArXG4gICAgICAgICAgICAgICAgYFVzZSBcXGB1cGRhdGVDb21wbGV0ZVxcYCBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgaWYgKG9uZnVsZmlsbGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbmZ1bGZpbGxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbi8qXG4gKiBXaGVuIHVzaW5nIENsb3N1cmUgQ29tcGlsZXIsIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkocHJvcGVydHksIG9iamVjdCkgaXNcbiAqIHJlcGxhY2VkIGF0IGNvbXBpbGUgdGltZSBieSB0aGUgbXVuZ2VkIG5hbWUgZm9yIG9iamVjdFtwcm9wZXJ0eV0uIFdlIGNhbm5vdFxuICogYWxpYXMgdGhpcyBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0byB1c2UgYSBzbWFsbCBzaGltIHRoYXQgaGFzIHRoZSBzYW1lXG4gKiBiZWhhdmlvciB3aGVuIG5vdCBjb21waWxpbmcuXG4gKi9cbi8qQF9fSU5MSU5FX18qL1xuY29uc3QgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IChwcm9wLCBfb2JqKSA9PiBwcm9wO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gICAgdG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/ICcnIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGZyb21WYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gRG8gKm5vdCogZ2VuZXJhdGUgZXhjZXB0aW9uIHdoZW4gaW52YWxpZCBKU09OIGlzIHNldCBhcyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IERvIGdlbmVyYXRlIGV4Y2VwdGlvbiBpbiAqZGV2IG1vZGUqLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0byBhZGhlcmUgdG8gQmF6ZWwncyBcIm11c3QgdHlwZSBhc3NlcnQgSlNPTiBwYXJzZVwiIHJ1bGUuXG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVZhbHVlO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsLFxufTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ0Nvbm5lY3Rpb25Qcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiBjdXJyZW50bHkgcmVmbGVjdGluZyBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkSW5pdGlhbGl6ZXIoaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9pbml0aWFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9pbml0aWFsaXplcnMgPSBbXSk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVycy5wdXNoKGluaXRpYWxpemVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgdik7XG4gICAgICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdFxuICAgICAqIGFuZCBzdG9yZXMgYSBQcm9wZXJ0eURlY2xhcmF0aW9uIGZvciB0aGUgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgKiBUaGUgcHJvcGVydHkgc2V0dGVyIGNhbGxzIHRoZSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBwcm9wZXJ0eSBvcHRpb25cbiAgICAgKiBvciB1c2VzIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byByZXF1ZXN0XG4gICAgICogYW4gdXBkYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgbWF5IGJlIG92ZXJyaWRkZW4gdG8gY3VzdG9taXplIHByb3BlcnRpZXM7IGhvd2V2ZXIsXG4gICAgICogd2hlbiBkb2luZyBzbywgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgc3VwZXIuY3JlYXRlUHJvcGVydHlgIHRvIGVuc3VyZVxuICAgICAqIHRoZSBwcm9wZXJ0eSBpcyBzZXR1cCBjb3JyZWN0bHkuIFRoaXMgbWV0aG9kIGNhbGxzXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAgaW50ZXJuYWxseSB0byBnZXQgYSBkZXNjcmlwdG9yIHRvIGluc3RhbGwuXG4gICAgICogVG8gY3VzdG9taXplIHdoYXQgcHJvcGVydGllcyBkbyB3aGVuIHRoZXkgYXJlIGdldCBvciBzZXQsIG92ZXJyaWRlXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAuIFRvIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBwcm9wZXJ0eSxcbiAgICAgKiBpbXBsZW1lbnQgYGNyZWF0ZVByb3BlcnR5YCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAqICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywge215T3B0aW9uOiB0cnVlfSk7XG4gICAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3RhdGUgcHJvcGVydHksIGZvcmNlIHRoZSBhdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICAvLyBDYXN0IGFzIGFueSBzaW5jZSB0aGlzIGlzIHJlYWRvbmx5LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBjYW4gYmUgY2FsbGVkIGJ5IHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3Igd2hpY2hcbiAgICAgICAgLy8gaXMgY2FsbGVkIGJlZm9yZSBgZmluYWxpemVgLCB3ZSBlbnN1cmUgZmluYWxpemF0aW9uIGhhcyBiZWVuIGtpY2tlZCBvZmYuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKCFvcHRpb25zLm5vQWNjZXNzb3IgJiYgIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICAgKiBJZiBubyBkZXNjcmlwdG9yIGlzIHJldHVybmVkLCB0aGUgcHJvcGVydHkgd2lsbCBub3QgYmVjb21lIGFuIGFjY2Vzc29yLlxuICAgICAqIEZvciBleGFtcGxlLFxuICAgICAqXG4gICAgICogICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgKiAgICAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRvciA9XG4gICAgICogICAgICAgICAgIHN1cGVyLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAqICAgICAgIGNvbnN0IHNldHRlciA9IGRlZmF1bHREZXNjcmlwdG9yLnNldDtcbiAgICAgKiAgICAgICByZXR1cm4ge1xuICAgICAqICAgICAgICAgZ2V0OiBkZWZhdWx0RGVzY3JpcHRvci5nZXQsXG4gICAgICogICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgKiAgICAgICAgICAgc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAqICAgICAgICAgICAvLyBjdXN0b20gYWN0aW9uLlxuICAgICAqICAgICAgICAgfSxcbiAgICAgKiAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgKiAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgKiAgICAgICB9XG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBUaGVzZSBvcHRpb25zIGFyZSBkZWZpbmVkIHdpdGggYSBQcm9wZXJ0eURlY2xhcmF0aW9uIHZpYSB0aGUgYHByb3BlcnRpZXNgXG4gICAgICogb2JqZWN0IG9yIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgYW5kIGFyZSByZWdpc3RlcmVkIGluXG4gICAgICogYGNyZWF0ZVByb3BlcnR5KC4uLilgLlxuICAgICAqXG4gICAgICogTm90ZSwgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgXCJmaW5hbFwiIGFuZCBub3Qgb3ZlcnJpZGRlbi4gVG9cbiAgICAgKiBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gcHJvcGVydHksIG92ZXJyaWRlIGBjcmVhdGVQcm9wZXJ0eWAuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBmaW5hbFxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcywgc2V0cyB1cCBlbGVtZW50XG4gICAgICogc3R5bGluZywgYW5kIGVuc3VyZXMgYW55IHN1cGVyY2xhc3NlcyBhcmUgYWxzbyBmaW5hbGl6ZWQuIFJldHVybnMgdHJ1ZSBpZlxuICAgICAqIHRoZSBlbGVtZW50IHdhcyBmaW5hbGl6ZWQuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGZpbmFsaXplZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2ZpbmFsaXplZF0gPSB0cnVlO1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgc3VwZXJjbGFzc2VzXG4gICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMgPSBuZXcgTWFwKHN1cGVyQ3Rvci5lbGVtZW50UHJvcGVydGllcyk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgTWFwIHBvcHVsYXRlZCBpbiBvYnNlcnZlZEF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1ha2UgYW55IHByb3BlcnRpZXNcbiAgICAgICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgICAgICAvLyB0aGUgZW50aXJlIHByb3RvdHlwZSBjaGFpbiBpcyBmaW5hbGl6ZWQuXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNjcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAgICAgICAgIC8vIGluZGV4IHR5cGVzXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgLy8gREVWIG1vZGUgd2FybmluZ3NcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgY29uc3Qgd2FyblJlbW92ZWQgPSAob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZC4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoaXMgdmVyc2lvbiBvZiBSZWFjdGl2ZUVsZW1lbnQuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgIFNlZSB0aGUgY2hhbmdlbG9nIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9yZWFjdGl2ZS1lbGVtZW50L0NIQU5HRUxPRy5tZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBbYGluaXRpYWxpemVgLCBgcmVxdWVzdFVwZGF0ZUludGVybmFsYCwgYF9nZXRVcGRhdGVDb21wbGV0ZWBdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkKHRoaXMucHJvdG90eXBlLCBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSBzdHlsZXMgdGhlIHVzZXIgc3VwcGxpZWQgdmlhIHRoZSBgc3RhdGljIHN0eWxlc2AgcHJvcGVydHkgYW5kXG4gICAgICogcmV0dXJucyB0aGUgYXJyYXkgb2Ygc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGludGVncmF0ZSBpbnRvIGEgc3R5bGUgbWFuYWdlbWVudCBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBTdHlsZXMgYXJlIGRlZHVwbGljYXRlZCBwcmVzZXJ2aW5nIHRoZSBfbGFzdF8gaW5zdGFuY2UgaW4gdGhlIGxpc3QuIFRoaXNcbiAgICAgKiBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxlcyB0aGF0IGNhbiBvY2N1clxuICAgICAqIGVzcGVjaWFsbHkgd2hlbiBjb21wb3NpbmcgdmlhIHN1YmNsYXNzaW5nLiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG8gdHJ5XG4gICAgICogdG8gcHJlc2VydmUgdGhlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdCBpbXBvcnRhbnRcbiAgICAgKiB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHN0eWxlc1xuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFN0eWxlcyA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG4gICAgICAgICAgICAvLyBEZWR1cGUgdGhlIGZsYXR0ZW5lZCBhcnJheSBpbiByZXZlcnNlIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBsYXN0IGl0ZW1zLlxuICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogY2FzdGluZyB0byBBcnJheTx1bmtub3duPiB3b3JrcyBhcm91bmQgVFMgZXJyb3IgdGhhdFxuICAgICAgICAgICAgLy8gYXBwZWFycyB0byBjb21lIGZyb20gdHJ5aW5nIHRvIGZsYXR0ZW4gYSB0eXBlIENTU1Jlc3VsdEFycmF5LlxuICAgICAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldChzdHlsZXMuZmxhdChJbmZpbml0eSkucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgIC8vIFRoZW4gcHJlc2VydmUgb3JpZ2luYWwgb3JkZXIgYnkgYWRkaW5nIHRoZSBzZXQgaXRlbXMgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiBzZXQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVzLnVuc2hpZnQoZ2V0Q29tcGF0aWJsZVN0eWxlKHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudFN0eWxlcy5wdXNoKGdldENvbXBhdGlibGVTdHlsZShzdHlsZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFN0eWxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGdpdmVuIGF0dHJpYnV0ZSBgbmFtZWAuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgb25seSBvdmVycmlkZSBwb2ludCBmb3IgY3VzdG9taXppbmcgd29yayBkb25lIHdoZW4gZWxlbWVudHNcbiAgICAgKiBhcmUgY29uc3RydWN0ZWQuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKSk7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mXG4gICAgICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX2luaXRpYWxpemVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGkpID0+IGkodGhpcykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKChfYSA9IHRoaXMuX19jb250cm9sbGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX19jb250cm9sbGVycyA9IFtdKSkucHVzaChjb250cm9sbGVyKTtcbiAgICAgICAgLy8gSWYgYSBjb250cm9sbGVyIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCxcbiAgICAgICAgLy8gY2FsbCBob3N0Q29ubmVjdGVkLiBOb3RlLCByZS11c2luZyBleGlzdGVuY2Ugb2YgYHJlbmRlclJvb3RgIGhlcmVcbiAgICAgICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgICAgICAvLyBmaXJzdCBjb25uZWN0ZWQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoX2IgPSBjb250cm9sbGVyLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIE5vdGUsIGlmIHRoZSBpbmRleE9mIGlzIC0xLCB0aGUgPj4+IHdpbGwgZmxpcCB0aGUgc2lnbiB3aGljaCBtYWtlcyB0aGVcbiAgICAgICAgLy8gc3BsaWNlIGRvIG5vdGhpbmcuXG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSA+Pj4gMCwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgICAqIGBuYW1lYCkgbWF5IG5vdCBoYXZlIGRlZmF1bHQgdmFsdWVzIHNldCBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci4gT25cbiAgICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgICAqIHRoaXMuaWQgPSAnaWQnIGluIHRoZSBjb25zdHJ1Y3RvciwgdGhlICdpZCcgd2lsbCBiZWNvbWUgJycgc2luY2UgdGhpcyBpc1xuICAgICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAgICovXG4gICAgX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHRoaXNbcF0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICAgKiBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9wZW4gc2hhZG93Um9vdC4gSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGVcbiAgICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO1xuICAgICAgICBhZG9wdFN0eWxlcyhyZW5kZXJSb290LCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT24gZmlyc3QgY29ubmVjdGlvbiwgY3JlYXRlcyB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QsIHNldHMgdXBcbiAgICAgKiBlbGVtZW50IHN0eWxpbmcsIGFuZCBlbmFibGVzIHVwZGF0aW5nLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcodHJ1ZSk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIC8vIElmIHdlIHdlcmUgZGlzY29ubmVjdGVkLCByZS1lbmFibGUgdXBkYXRpbmcgYnkgcmVzb2x2aW5nIHRoZSBwZW5kaW5nXG4gICAgICAgIC8vIGNvbm5lY3Rpb24gcHJvbWlzZVxuICAgICAgICBpZiAodGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX19lbmFibGVDb25uZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ0Nvbm5lY3Rpb25Qcm9taXNlID0gdGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90ZSwgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgZmluYWwgYW5kIG5vdCBvdmVycmlkZGVuLiBJdCBpc1xuICAgICAqIG92ZXJyaWRkZW4gb24gdGhlIGVsZW1lbnQgaW5zdGFuY2Ugd2l0aCBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgdGhlIGZpcnN0XG4gICAgICogdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZW5hYmxlVXBkYXRpbmcoX3JlcXVlc3RlZFVwZGF0ZSkgeyB9XG4gICAgLyoqXG4gICAgICogQWxsb3dzIGZvciBgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgaW4gZXh0ZW5zaW9ucyB3aGlsZVxuICAgICAqIHJlc2VydmluZyB0aGUgcG9zc2liaWxpdHkgb2YgbWFraW5nIG5vbi1icmVha2luZyBmZWF0dXJlIGFkZGl0aW9uc1xuICAgICAqIHdoZW4gZGlzY29ubmVjdGluZyBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0RGlzY29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocikgPT4gKHRoaXMuX19lbmFibGVDb25uZWN0aW9uID0gcikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfX3Byb3BlcnR5VG9BdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBhdHRyID0gdGhpc1xuICAgICAgICAgICAgLmNvbnN0cnVjdG9yLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGUgPSAoX2IgPSAoX2EgPSBvcHRpb25zLmNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvQXR0cmlidXRlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdtaWdyYXRpb24nKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7bmFtZX0gcHJvcGVydHkgaXMgdW5kZWZpbmVkLiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgYCArXG4gICAgICAgICAgICAgICAgICAgIGByZW1vdmVkLCBidXQgaW4gdGhlIHByZXZpb3VzIHZlcnNpb24gb2YgUmVhY3RpdmVFbGVtZW50LCB0aGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGBhdHRyaWJ1dGUgd291bGQgbm90IGhhdmUgY2hhbmdlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgICAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAgICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIC8vIE5vdGUsIGhpbnQgdGhpcyBhcyBhbiBgQXR0cmlidXRlTWFwYCBzbyBjbG9zdXJlIGNsZWFybHkgdW5kZXJzdGFuZHNcbiAgICAgICAgLy8gdGhlIHR5cGU7IGl0IGhhcyBpc3N1ZXMgd2l0aCB0cmFja2luZyB0eXBlcyB0aHJvdWdoIHN0YXRpY3NcbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBjdG9yLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5nZXQobmFtZSk7XG4gICAgICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIHJlZmxlY3RpbmcgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBhdHRyaWJ1dGVcbiAgICAgICAgLy8gaWYgaXQgd2FzIGp1c3Qgc2V0IGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBjaGFuZ2VkLlxuICAgICAgICBpZiAocHJvcE5hbWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ICE9PSBwcm9wTmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHByb3BOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgICAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZSA9IChfYyA9IChfYiA9IChfYSA9IGNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyb21BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICh0eXBlb2YgY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBjb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICA6IG51bGwpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBkZWZhdWx0Q29udmVydGVyLmZyb21BdHRyaWJ1dGU7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9IGZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgICAqIGEgcmVhY3RpdmUgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHByb3BlcnR5IG9wdGlvbnMgdG8gdXNlIGluc3RlYWQgb2YgdGhlIHByZXZpb3VzbHlcbiAgICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICByZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VkID0gb3B0aW9ucy5oYXNDaGFuZ2VkIHx8IG5vdEVxdWFsO1xuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgbm8gbG9uZ2VyIHJldHVybnMgYSBwcm9taXNlLCBpbiBkZXYgbW9kZSB3ZSByZXR1cm4gYVxuICAgICAgICAvLyB0aGVuYWJsZSB3aGljaCB3YXJucyBpZiBpdCdzIGNhbGxlZC5cbiAgICAgICAgcmV0dXJuIERFVl9NT0RFID8gcmVxdWVzdFVwZGF0ZVRoZW5hYmxlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICAgICAgLy8gSWYgd2Ugd2VyZSBkaXNjb25uZWN0ZWQsIHdhaXQgdW50aWwgcmUtY29ubmVjdGVkIHRvIGZsdXNoIGFuIHVwZGF0ZVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9fcGVuZGluZ0Nvbm5lY3Rpb25Qcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgICAgLy8gSWYgYHBlcmZvcm1VcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgICAgIC8vIGVuYWJsZSBjb29yZGluYXRpbmcgdXBkYXRlcyB3aXRoIGEgc2NoZWR1bGVyLiBOb3RlLCB0aGUgcmVzdWx0IGlzXG4gICAgICAgIC8vIGNoZWNrZWQgdG8gYXZvaWQgZGVsYXlpbmcgYW4gYWRkaXRpb25hbCBtaWNyb3Rhc2sgdW5sZXNzIHdlIG5lZWQgdG8uXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1VwZGF0ZVBlbmRpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIHRpbWluZyBvZiB1cGRhdGVzLiBJZiB0aGlzXG4gICAgICogbWV0aG9kIGlzIG92ZXJyaWRkZW4sIGBzdXBlci5wZXJmb3JtVXBkYXRlKClgIG11c3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogRm9yIGluc3RhbmNlLCB0byBzY2hlZHVsZSB1cGRhdGVzIHRvIG9jY3VyIGp1c3QgYmVmb3JlIHRoZSBuZXh0IGZyYW1lOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogcHJvdGVjdGVkIGFzeW5jIHBlcmZvcm1VcGRhdGUoKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgICogICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xuICAgICAqICAgc3VwZXIucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHBlcmZvcm1VcGRhdGUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgLy8gUHJvZHVjZSB3YXJuaW5nIGlmIGFueSBjbGFzcyBwcm9wZXJ0aWVzIGFyZSBzaGFkb3dlZCBieSBjbGFzcyBmaWVsZHNcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiAhKChfYSA9IHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMocCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dlZFByb3BlcnRpZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IExpbmsgdG8gZG9jcyBleHBsYW5hdGlvbiBvZiB0aGlzIGlzc3VlLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyB3aWxsIG5vdCB0cmlnZ2VyIHVwZGF0ZXMgYXMgZXhwZWN0ZWQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYmVjYXVzZSB0aGV5IGFyZSBzZXQgdXNpbmcgY2xhc3MgZmllbGRzOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3NoYWRvd2VkUHJvcGVydGllcy5qb2luKCcsICcpfS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgTmF0aXZlIGNsYXNzIGZpZWxkcyBhbmQgc29tZSBjb21waWxlZCBvdXRwdXQgd2lsbCBvdmVyd3JpdGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWNjZXNzb3JzIHVzZWQgZm9yIGRldGVjdGluZyBjaGFuZ2VzLiBUbyBmaXggdGhpcyBpc3N1ZSwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgZWl0aGVyIGluaXRpYWxpemUgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3Igb3IgYWRqdXN0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYHlvdXIgY29tcGlsZXIgc2V0dGluZ3M7IGZvciBleGFtcGxlLCBmb3IgVHlwZVNjcmlwdCBzZXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxgdXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHM6IGZhbHNlXFxgIGluIHlvdXIgXFxgdHNjb25maWcuanNvblxcYC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiAodGhpc1twXSA9IHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHVwZGF0ZSBpcyBubyBsb25nZXIgY29uc2lkZXJlZCBwZW5kaW5nIGFuZCBmdXJ0aGVyIHVwZGF0ZXMgYXJlIG5vdyBhbGxvd2VkLlxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwb2x5ZmlsbC1zdXBwb3J0LlxuICAgIC8vIEBpbnRlcm5hbFxuICAgIF8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ2NoYW5nZS1pbi11cGRhdGUnKSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEFuIHVwZGF0ZSB3YXMgcmVxdWVzdGVkIChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBnZXRVcGRhdGVDb21wbGV0ZWBcbiAgICAgKiBtZXRob2QuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGEgcmVuZGVyZWQgZWxlbWVudFxuICAgICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICAgKiBgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHVwZGF0ZSByZXNvbHZlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgKiAgICAgICBhd2FpdCBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgICAqICAgICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGVgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNba10sIHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxufVxuX2YgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5SZWFjdGl2ZUVsZW1lbnRbX2ZdID0gdHJ1ZTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBzdHlsZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgc3R5bGVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50U3R5bGVzID0gW107XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfYyA9IChfYiA9IGdsb2JhbFRoaXMpWydyZWFjdGl2ZUVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oKF9kID0gKF9lID0gZ2xvYmFsVGhpcylbJ3JlYWN0aXZlRWxlbWVudFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChfZVsncmVhY3RpdmVFbGVtZW50VmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4wLjAtcmMuMicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmYWZkO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzAyMjg1MTtcbn1cbmZpZWxkc2V0ID4gbGVnZW5kIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSBpbnNldDtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBvdXRsaW5lOiAwO1xufVxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYmYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5bdHlwZT10ZXh0XSxcblt0eXBlPXNlYXJjaF0sXG5bdHlwZT11cmxdLFxuW3R5cGU9bnVtYmVyXSxcbnRleHRhcmVhIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuYnV0dG9uLFxuW3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpmb2N1cyxcblt0eXBlPXN1Ym1pdF06Zm9jdXMge1xuICBjb2xvcjogIzAwYjJlMztcbn1cblxuW3R5cGU9Y2hlY2tib3hdLFxuW3R5cGU9cmFkaW9dIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbn1cblxuW3R5cGU9c2VhcmNoXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVudSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVudSBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1lbnUgbGkgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udmlldy1hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2UwZjM7XG59XG5cbi5zZi11bmRlcmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3ZmFmZDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4ucHJpbWFyeS1uYXYge1xuICBtaW4taGVpZ2h0OiAzLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmltYXJ5LW5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG4gIC5wcmltYXJ5LW5hdiB1bCB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJpbWFyeS1uYXYgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaTpob3ZlciB1bCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlZDtcbiAgfVxuICAucHJpbWFyeS1uYXYgbGkgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSwgLnByaW1hcnktbmF2IGxpOmZvY3VzLXdpdGhpbiA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSwgLnByaW1hcnktbmF2IGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgY29sb3I6ICMwMjI4NTE7XG4gIH1cbiAgLnByaW1hcnktbmF2IC5zdWJtZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByaW1hcnktbmF2IGEsIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWY3O1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmltYXJ5LW5hdiBhLCAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIH1cbiAgLnByaW1hcnktbmF2IGE6YmVmb3JlLCAucHJpbWFyeS1uYXZfX25vbGluazpiZWZvcmUge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMy4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDkzJSAwLCAxMTAlIDAsIDExMCUgMTAyJSwgMCUgMTAyJSk7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAucHJpbWFyeS1uYXYgYTpmb2N1czpiZWZvcmUsIC5wcmltYXJ5LW5hdiBhOmhvdmVyOmJlZm9yZSwgLnByaW1hcnktbmF2X19ub2xpbms6Zm9jdXM6YmVmb3JlLCAucHJpbWFyeS1uYXZfX25vbGluazpob3ZlcjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIH1cbiAgLnByaW1hcnktbmF2IGE6YWZ0ZXIsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmFmdGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMy4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKC0ycHggLTJweCwgMTAwJSAtMnB4LCA3JSAxMDIlLCAtMnB4IDEwMCUpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbiAgLnByaW1hcnktbmF2IGE6Zm9jdXM6YWZ0ZXIsIC5wcmltYXJ5LW5hdiBhOmhvdmVyOmFmdGVyLCAucHJpbWFyeS1uYXZfX25vbGluazpmb2N1czphZnRlciwgLnByaW1hcnktbmF2X19ub2xpbms6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIH1cbn1cbi5wcmltYXJ5LW5hdiBhOmhvdmVyLCAucHJpbWFyeS1uYXZfX25vbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG59XG4ucHJpbWFyeS1uYXYgYTpmb2N1cyxcbi5wcmltYXJ5LW5hdiBhIC5hY3RpdmUsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmZvY3VzLFxuLnByaW1hcnktbmF2X19ub2xpbmsgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2X190b3AtbGluayBhLCAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTpob3ZlciwgLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMjI4NTE7XG4gIH1cbn1cbi5wcmltYXJ5LW5hdiBsaSBsaSBhLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlOWFjO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmJlZm9yZSwgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbms6YmVmb3JlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYgbGkgbGkgYTpiZWZvcmUsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSB7XG4gICAgY29sb3I6ICNmZmJmMDA7XG4gICAgY29udGVudDogXCLvgqlcIjtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgfVxuICAucHJpbWFyeS1uYXYgbGkgbGkgYTpmb2N1czpiZWZvcmUsIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmhvdmVyOmJlZm9yZSwgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbms6Zm9jdXM6YmVmb3JlLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluazpob3ZlcjpiZWZvcmUge1xuICAgIGNvbG9yOiAjMDIyODUxO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2IGxpIGxpIGEsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDAuOTM3NWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmZvY3VzLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluazpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYgbGkgbGkgYTpiZWZvcmUsIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmFmdGVyLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluazpiZWZvcmUsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJpbWFyeS1uYXYgbGkgbGkgbGkgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY5ZTY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2LS1qdXN0aWZ5ID4gLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLWp1c3RpZnkgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tanVzdGlmeSBsaTpsYXN0LWNoaWxkIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSwgLnByaW1hcnktbmF2LS1qdXN0aWZ5IGxpOmxhc3QtY2hpbGQgLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tanVzdGlmeSBhOmFmdGVyLFxuLnByaW1hcnktbmF2LS1qdXN0aWZ5IC5wcmltYXJ5LW5hdl9fbm9saW5rOmFmdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAzLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTFyZW07XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYS5pcy1ob3ZlciB7XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIGE6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLW1lZ2EgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSA+IC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLW1lZ2EgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogOWVtO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSBsaSBsaSBhLFxuLnByaW1hcnktbmF2LS1tZWdhIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSBsaTpob3ZlciAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEsXG4ucHJpbWFyeS1uYXYtLW1lZ2EgbGk6aG92ZXIgLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGY4MDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLW1lZ2EgbGk6aG92ZXIgLnByaW1hcnktbmF2X190b3AtbGluayBhOmJlZm9yZSwgLnByaW1hcnktbmF2LS1tZWdhIGxpOmhvdmVyIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTphZnRlcixcbi5wcmltYXJ5LW5hdi0tbWVnYSBsaTpob3ZlciAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSxcbi5wcmltYXJ5LW5hdi0tbWVnYSBsaTpob3ZlciAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZjgwO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSBsaSAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIGxpIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTpob3ZlcjpiZWZvcmUsIC5wcmltYXJ5LW5hdi0tbWVnYSBsaSAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NTE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzE0NDQ3YTtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIHVsIHVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogODQwO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWluLXdpZHRoOiAxMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggdWwgdWwgdWwge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIGEsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlZDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaSBsaSBsaSBhLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWQ7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgbGkgbGkgYSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWU2O1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvcjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAucHJpbWFyeS1uYXZfX3N1Ym1lbnUtaW5kaWNhdG9yOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmYmYwMDtcbiAgICBjb250ZW50OiBcIu+BlFwiO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIge1xuICAgIGNvbG9yOiAjMDIyODUxO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIGxpIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGk6aG92ZXIgPiB1bCxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGk6aG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbmssXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnNmLS1ob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGk6aG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6YmVmb3JlLCAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTphZnRlcixcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluazpiZWZvcmUsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhOmJlZm9yZSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluazpiZWZvcmUsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluazphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSAucHJpbWFyeS1uYXZfX3N1Ym1lbnUtaW5kaWNhdG9yOmFmdGVyLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGk6aG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayAucHJpbWFyeS1uYXZfX3N1Ym1lbnUtaW5kaWNhdG9yOmFmdGVyIHtcbiAgICBjb2xvcjogIzAyMjg1MTtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGNvbG9yOiAjMDIyODUxO1xuICB9XG59XG4ucHJpbWFyeS1uYXYgLnN1Ym1lbnUtdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICNmZmJmMDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhZ2VyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4ucGFnZXIgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2VyX19pdGVtIHtcbiAgbWFyZ2luOiAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbSAwO1xufVxuLnBhZ2VyX19pdGVtIGEsIC5wYWdlcl9faXRlbS0tc3RhdGljIHtcbiAgY29sb3I6ICMwMDM1NzA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMnJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGNvbG9yOiAjNGM0YzRjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnBhZ2VyX19pdGVtIGE6aG92ZXIsIC5wYWdlcl9faXRlbS0tc3RhdGljOmhvdmVyIHtcbiAgY29sb3I6ICMwMDExMjQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wYWdlcl9faXRlbSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmYmYwMDtcbiAgY29sb3I6ICMwMjI4NTE7XG59XG4ucGFnZXJfX2l0ZW0tLWN1cnJlbnQsIC5wYWdlcl9faXRlbS0tY3VycmVudCBhIHtcbiAgYmFja2dyb3VuZDogIzEzNjM5ZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnZXJfX2l0ZW0tLWN1cnJlbnQ6aG92ZXIsIC5wYWdlcl9faXRlbS0tY3VycmVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmYmYwMDtcbn1cbi5wYWdlcl9faXRlbS0tcHJldmlvdXMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2VyX19pdGVtLS1wcmV2aW91cyBhOmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBjb250ZW50OiBcIu+MilwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4ucGFnZXJfX2l0ZW0tLW5leHQgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2VyX19pdGVtLS1uZXh0IGE6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBjb250ZW50OiBcIu+Mi1wiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4ucGFnZXItLW1pbmkgLnBhZ2VyX19pdGVtLS1jdXJyZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5wYWdlci0tbWluaSAucGFnZXJfX2l0ZW0tLWN1cnJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4uc3VibWVudS10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCAjZmZmO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzEwcHgpIHtcbiAgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zdWJtZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc3VibWVudS10b2dnbGVfX2ljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc3VibWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnN1Ym1lbnUtdG9nZ2xlX19pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnN1Ym1lbnUtdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICMwMjI4NTE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5hOmhvdmVyIC5zdWJtZW51LXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTczMDA7XG59XG4uc3VibWVudS10b2dnbGUtLW9wZW4gLnN1Ym1lbnUtdG9nZ2xlX19pY29uOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuLnN1Ym1lbnUtdG9nZ2xlX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uc3VibWVudS10b2dnbGVfX3dyYXBwZXIgYTpmaXJzdC1jaGlsZCxcbi5zdWJtZW51LXRvZ2dsZV9fd3JhcHBlciAubm9saW5rOmZpcnN0LWNoaWxkIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnN1Ym1lbnUtdG9nZ2xlX19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiA4MzA7XG4gIGxlZnQ6IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDA7XG59XG4uc3VibWVudS10b2dnbGVfX2ljb246YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4MzA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5hOmhvdmVyIC5zdWJtZW51LXRvZ2dsZV9faWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5hOmhvdmVyIC5zdWJtZW51LXRvZ2dsZV9faWNvbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi8qISBub3JtYWxpemUtc2NzcyB8IE1JVC9HUEx2MiBMaWNlbnNlIHwgYml0Lmx5L25vcm1hbGl6ZS1zY3NzICovXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxuICovXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIC8qIDEgKi9cbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZm9vdGVyLFxuaGVhZGVyLFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uICdoMScgZWxlbWVudHMgd2l0aGluICdzZWN0aW9uJyBhbmRcbiAqICdhcnRpY2xlJyBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5maWdjYXB0aW9uLFxuZmlndXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxuICovXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMSAqL1xuICBoZWlnaHQ6IDA7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqL1xufVxuXG4vKiBMaW5rc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxuICovXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbiAgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFByZXZlbnQgdGhlIGR1cGxpY2F0ZSBhcHBsaWNhdGlvbiBvZiAnYm9sZGVyJyBieSB0aGUgbmV4dCBydWxlIGluIFNhZmFyaSA2LlxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXG4gKi9cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXG4gKi9cbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmF1ZGlvLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxuICovXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qKlxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKi9cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqL1xuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSAnYXVkaW8nIGFuZCAndmlkZW8nXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5odG1sIFt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDIgKi9cbn1cblxuYnV0dG9uLFxuW3R5cGU9YnV0dG9uXSxcblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0ge1xuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG4gIC8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xufVxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5pbnB1dCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXG4gKi9cblt0eXBlPWNoZWNrYm94XSxcblt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cbn1cblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sIFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cbiAqL1xuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tICdmaWVsZHNldCcgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMyAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogMiAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAxICovXG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXG4gKi9cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFNjcmlwdGluZ1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmNhbnZhcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRkZW5cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cbiAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5gOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbnZhciBfZjtcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIFtbYExpdEVsZW1lbnRgXV0gYmFzZSBjbGFzcyBhbmRcbiAqIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IFtbYExpdEVsZW1lbnRgXV0gYW5kIFtbYGh0bWxgXV0gZnJvbSB0aGlzIG1vZHVsZSB0byBjcmVhdGUgYVxuICogY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyBbW2BSZWFjdGl2ZUVsZW1lbnRgXV0gYW5kIGFkZHMgbGl0LWh0bWwgdGVtcGxhdGluZy5cbiAqIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvIGJ1aWxkXG4gKiB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oKF9hID0gKF9mID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRWZXJzaW9ucyddKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2ZbJ2xpdEVsZW1lbnRWZXJzaW9ucyddID0gW10pKS5wdXNoKCczLjAuMC1yYy4yJyk7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSBbW2Bwcm9wZXJ0aWVzYF1dIHByb3BlcnR5IG9yIHRoZSBbW2Bwcm9wZXJ0eWBdXSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFRPRE8oa3NjaGFhZik6IENvbnNpZGVyIGRlYm91bmNpbmcgZGlyZWN0aXZlIGRpc2Nvbm5lY3Rpb24gc28gZWxlbWVudCBtb3Zlc1xuICAgIC8vIGRvIG5vdCB0aHJhc2ggZGlyZWN0aXZlIGNhbGxiYWNrc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xNDU3XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbWF5IHJldHVyblxuICAgICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgQGxpdC9yZWFjdGl2ZS1lbGVtZW50IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG5MaXRFbGVtZW50Ll8kbGl0RWxlbWVudCQgPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9jID0gKF9iID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCddKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChfYiwgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZSA9IChfZCA9IGdsb2JhbFRoaXMpWydsaXRFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYWxsKF9kLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgTGl0RWxlbWVudFsnZmluYWxpemUnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3QgZmluYWxpemVkID0gUmVhY3RpdmVFbGVtZW50LmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICghZmluYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3Qgd2FyblJlbW92ZWQgPSAob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQuIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LiBgXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogYWRkIGxpbmsgdG8gY2hhbmdlbG9nIHdoZW4gbG9jYXRpb24gaGFzIHN0YWJpbGl6ZWQuXG4gICAgICAgICAgICAgICAgLy8gKyBTZWUgdGhlIGNoYW5nZWxvZyBhdCBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9ibG9iL21haW4vcGFja2FnZXMvbGl0LWVsZW1lbnQvQ0hBTkdFTE9HLm1kYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFtgcmVuZGVyYCwgYGdldFN0eWxlc2BdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLCBuYW1lKSk7XG4gICAgICAgIFtgYWRvcHRTdHlsZXNgXS5mb3JFYWNoKChuYW1lKSA9PiBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgX86mIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfzqYgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcnRUeXBlID0ge1xuICAgIEFUVFJJQlVURTogMSxcbiAgICBDSElMRDogMixcbiAgICBQUk9QRVJUWTogMyxcbiAgICBCT09MRUFOX0FUVFJJQlVURTogNCxcbiAgICBFVkVOVDogNSxcbiAgICBFTEVNRU5UOiA2LFxufTtcbi8qKlxuICogQ3JlYXRlcyBhIHVzZXItZmFjaW5nIGRpcmVjdGl2ZSBmdW5jdGlvbiBmcm9tIGEgRGlyZWN0aXZlIGNsYXNzLiBUaGlzXG4gKiBmdW5jdGlvbiBoYXMgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyB0aGUgZGlyZWN0aXZlJ3MgcmVuZGVyKCkgbWV0aG9kLlxuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGMpID0+ICguLi52YWx1ZXMpID0+ICh7XG4gICAgXyRsaXREaXJlY3RpdmUkOiBjLFxuICAgIHZhbHVlcyxcbn0pO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjcmVhdGluZyBjdXN0b20gZGlyZWN0aXZlcy4gVXNlcnMgc2hvdWxkIGV4dGVuZCB0aGlzIGNsYXNzLFxuICogaW1wbGVtZW50IGByZW5kZXJgIGFuZC9vciBgdXBkYXRlYCwgYW5kIHRoZW4gcGFzcyB0aGVpciBzdWJjbGFzcyB0b1xuICogYGRpcmVjdGl2ZWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJ0SW5mbykgeyB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgICAgIHRoaXMuX19wYXJ0ID0gcGFydDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZUluZGV4ID0gYXR0cmlidXRlSW5kZXg7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHJlc29sdmUocGFydCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHBhcnQsIHByb3BzKTtcbiAgICB9XG4gICAgdXBkYXRlKF9wYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoLi4ucHJvcHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IG5vQ2hhbmdlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlLCBEaXJlY3RpdmUsIFBhcnRUeXBlLCB9IGZyb20gJy4uL2RpcmVjdGl2ZS5qcyc7XG5jbGFzcyBTdHlsZU1hcERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocGFydEluZm8pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlcihwYXJ0SW5mbyk7XG4gICAgICAgIGlmIChwYXJ0SW5mby50eXBlICE9PSBQYXJ0VHlwZS5BVFRSSUJVVEUgfHxcbiAgICAgICAgICAgIHBhcnRJbmZvLm5hbWUgIT09ICdzdHlsZScgfHxcbiAgICAgICAgICAgICgoX2EgPSBwYXJ0SW5mby5zdHJpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgJyArXG4gICAgICAgICAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoc3R5bGVJbmZvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZUluZm8pLnJlZHVjZSgoc3R5bGUsIHByb3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgICAgcHJvcCA9IHByb3BcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGUgKyBgJHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuICAgIHVwZGF0ZShwYXJ0LCBbc3R5bGVJbmZvXSkge1xuICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSBwYXJ0LmVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3R5bGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gICAgICAgIC8vIFdlIHVzZSBmb3JFYWNoKCkgaW5zdGVhZCBvZiBmb3Itb2Ygc28gdGhhdCByZSBkb24ndCByZXF1aXJlIGRvd24tbGV2ZWxcbiAgICAgICAgLy8gaXRlcmF0aW9uLlxuICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmFtZSBpc24ndCBpbiBzdHlsZUluZm8gb3IgaXQncyBudWxsL3VuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHN0eWxlSW5mb1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIHJlc2V0IHVzaW5nIGVtcHR5IHN0cmluZyAodnMgbnVsbCkgYXMgSUUxMSBkb2VzIG5vdCBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdmlhIG51bGwgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50Q1NTSW5saW5lU3R5bGUvc3R5bGUjc2V0dGluZ19zdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW25hbWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0aWVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvXG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZShTdHlsZU1hcERpcmVjdGl2ZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xudmFyIF9mO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmlmIChERVZfTU9ERSkge1xuICAgIGNvbnNvbGUud2FybignbGl0LWh0bWwgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiEnKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJiAoKF9hID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5Vc2UpICYmXG4gICAgKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyB3aW5kb3cuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxUaGlzLnRydXN0ZWRUeXBlcztcbi8qKlxuICogT3VyIFRydXN0ZWRUeXBlUG9saWN5IGZvciBIVE1MIHdoaWNoIGlzIGRlY2xhcmVkIHVzaW5nIHRoZSBodG1sIHRlbXBsYXRlXG4gKiB0YWcgZnVuY3Rpb24uXG4gKlxuICogVGhhdCBIVE1MIGlzIGEgZGV2ZWxvcGVyLWF1dGhvcmVkIGNvbnN0YW50LCBhbmQgaXMgcGFyc2VkIHdpdGggaW5uZXJIVE1MXG4gKiBiZWZvcmUgYW55IHVudHJ1c3RlZCBleHByZXNzaW9ucyBoYXZlIGJlZW4gbWl4ZWQgaW4uIFRoZXJlZm9yIGl0IGlzXG4gKiBjb25zaWRlcmVkIHNhZmUgYnkgY29uc3RydWN0aW9uLlxuICovXG5jb25zdCBwb2xpY3kgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge1xuICAgICAgICBjcmVhdGVIVE1MOiAocykgPT4gcyxcbiAgICB9KVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgaWRlbnRpdHlGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBub29wU2FuaXRpemVyID0gKF9ub2RlLCBfbmFtZSwgX3R5cGUpID0+IGlkZW50aXR5RnVuY3Rpb247XG4vKiogU2V0cyB0aGUgZ2xvYmFsIHNhbml0aXplciBmYWN0b3J5LiAqL1xuY29uc3Qgc2V0U2FuaXRpemVyID0gKG5ld1Nhbml0aXplcikgPT4ge1xuICAgIGlmICghRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBvdmVyd3JpdGUgZXhpc3RpbmcgbGl0LWh0bWwgc2VjdXJpdHkgcG9saWN5LmAgK1xuICAgICAgICAgICAgYCBzZXRTYW5pdGl6ZURPTVZhbHVlRmFjdG9yeSBzaG91bGQgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZS5gKTtcbiAgICB9XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbmV3U2FuaXRpemVyO1xufTtcbi8qKlxuICogT25seSB1c2VkIGluIGludGVybmFsIHRlc3RzLCBub3QgYSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJLlxuICovXG5jb25zdCBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSAoKSA9PiB7XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbn07XG5jb25zdCBjcmVhdGVTYW5pdGl6ZXIgPSAobm9kZSwgbmFtZSwgdHlwZSkgPT4ge1xuICAgIHJldHVybiBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwobm9kZSwgbmFtZSwgdHlwZSk7XG59O1xuLy8gQWRkZWQgdG8gYW4gYXR0cmlidXRlIG5hbWUgdG8gbWFyayB0aGUgYXR0cmlidXRlIGFzIGJvdW5kIHNvIHdlIGNhbiBmaW5kXG4vLyBpdCBlYXNpbHkuXG5jb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vLyBUaGlzIG1hcmtlciBpcyB1c2VkIGluIG1hbnkgc3ludGFjdGljIHBvc2l0aW9ucyBpbiBIVE1MLCBzbyBpdCBtdXN0IGJlXG4vLyBhIHZhbGlkIGVsZW1lbnQgbmFtZSBhbmQgYXR0cmlidXRlIG5hbWUuIFdlIGRvbid0IHN1cHBvcnQgZHluYW1pYyBuYW1lcyAoeWV0KVxuLy8gYnV0IHRoaXMgYXQgbGVhc3QgZW5zdXJlcyB0aGF0IHRoZSBwYXJzZSB0cmVlIGlzIGNsb3NlciB0byB0aGUgdGVtcGxhdGVcbi8vIGludGVudGlvbi5cbmNvbnN0IG1hcmtlciA9IGBsaXQkJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoOSl9JGA7XG4vLyBTdHJpbmcgdXNlZCB0byB0ZWxsIGlmIGEgY29tbWVudCBpcyBhIG1hcmtlciBjb21tZW50XG5jb25zdCBtYXJrZXJNYXRjaCA9ICc/JyArIG1hcmtlcjtcbi8vIFRleHQgdXNlZCB0byBpbnNlcnQgYSBjb21tZW50IG1hcmtlciBub2RlLiBXZSB1c2UgcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuLy8gc3ludGF4IGJlY2F1c2UgaXQncyBzbGlnaHRseSBzbWFsbGVyLCBidXQgcGFyc2VzIGFzIGEgY29tbWVudCBub2RlLlxuY29uc3Qgbm9kZU1hcmtlciA9IGA8JHttYXJrZXJNYXRjaH0+YDtcbmNvbnN0IGQgPSBkb2N1bWVudDtcbi8vIENyZWF0ZXMgYSBkeW5hbWljIG1hcmtlci4gV2UgbmV2ZXIgaGF2ZSB0byBzZWFyY2ggZm9yIHRoZXNlIGluIHRoZSBET00uXG5jb25zdCBjcmVhdGVNYXJrZXIgPSAodiA9ICcnKSA9PiBkLmNyZWF0ZUNvbW1lbnQodik7XG5jb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHR5cGVvZiAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtTeW1ib2wuaXRlcmF0b3JdKSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuLy8gVGhlc2UgcmVnZXhlcyByZXByZXNlbnQgdGhlIGZpdmUgcGFyc2luZyBzdGF0ZXMgdGhhdCB3ZSBjYXJlIGFib3V0IGluIHRoZVxuLy8gVGVtcGxhdGUncyBIVE1MIHNjYW5uZXIuIFRoZXkgbWF0Y2ggdGhlICplbmQqIG9mIHRoZSBzdGF0ZSB0aGV5J3JlIG5hbWVkXG4vLyBhZnRlci5cbi8vIERlcGVuZGluZyBvbiB0aGUgbWF0Y2gsIHdlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUuIElmIHRoZXJlJ3Mgbm8gbWF0Y2gsXG4vLyB3ZSBzdGF5IGluIHRoZSBzYW1lIHN0YXRlLlxuLy8gTm90ZSB0aGF0IHRoZSByZWdleGVzIGFyZSBzdGF0ZWZ1bC4gV2UgdXRpbGl6ZSBsYXN0SW5kZXggYW5kIHN5bmMgaXRcbi8vIGFjcm9zcyB0aGUgbXVsdGlwbGUgcmVnZXhlcyB1c2VkLiBJbiBhZGRpdGlvbiB0byB0aGUgZml2ZSByZWdleGVzIGJlbG93XG4vLyB3ZSBhbHNvIGR5bmFtaWNhbGx5IGNyZWF0ZSBhIHJlZ2V4IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVuZCB0YWdzIGZvciByYXdcbi8vIHRleHQgZWxlbWVudHMuXG4vKipcbiAqIEVuZCBvZiB0ZXh0IGlzOiBgPGAgZm9sbG93ZWQgYnk6XG4gKiAgIChjb21tZW50IHN0YXJ0KSBvciAodGFnKSBvciAoZHluYW1pYyB0YWcgYmluZGluZylcbiAqL1xuY29uc3QgdGV4dEVuZFJlZ2V4ID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nO1xuY29uc3QgQ09NTUVOVF9TVEFSVCA9IDE7XG5jb25zdCBUQUdfTkFNRSA9IDI7XG5jb25zdCBEWU5BTUlDX1RBR19OQU1FID0gMztcbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcbi8qKlxuICogVGhlIHRhZ0VuZCByZWdleCBtYXRjaGVzIHRoZSBlbmQgb2YgdGhlIFwiaW5zaWRlIGFuIG9wZW5pbmdcIiB0YWcgc3ludGF4XG4gKiBwb3NpdGlvbi4gSXQgZWl0aGVyIG1hdGNoZXMgYSBgPmAsIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlLCBvciB0aGUgZW5kXG4gKiBvZiB0aGUgc3RyaW5nIGFmdGVyIGEgc3BhY2UgKGF0dHJpYnV0ZS1uYW1lIHBvc2l0aW9uIGVuZGluZykuXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx0XFxuXFxmXFxyXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIChcIiksICgnKSwgXCI+XCIsXG4gKiAgICBcIj1cIiwgb3IgXCIvXCIuIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEhUTUwgc3BlYyB3aGljaCBhbHNvIGV4Y2x1ZGVzIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IHRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsICdnJyk7XG5jb25zdCBFTlRJUkVfTUFUQ0ggPSAwO1xuY29uc3QgQVRUUklCVVRFX05BTUUgPSAxO1xuY29uc3QgU1BBQ0VTX0FORF9FUVVBTFMgPSAyO1xuY29uc3QgUVVPVEVfQ0hBUiA9IDM7XG5jb25zdCBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCA9IC8nL2c7XG5jb25zdCBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCA9IC9cIi9nO1xuLyoqXG4gKiBNYXRjaGVzIHRoZSByYXcgdGV4dCBlbGVtZW50cy5cbiAqXG4gKiBDb21tZW50cyBhcmUgbm90IHBhcnNlZCB3aXRoaW4gcmF3IHRleHQgZWxlbWVudHMsIHNvIHdlIG5lZWQgdG8gc2VhcmNoIHRoZWlyXG4gKiB0ZXh0IGNvbnRlbnQgZm9yIG1hcmtlciBzdHJpbmdzLlxuICovXG5jb25zdCByYXdUZXh0RWxlbWVudCA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhKSQvaTtcbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG4vLyBUZW1wbGF0ZVBhcnQgdHlwZXNcbi8vIElNUE9SVEFOVDogdGhlc2UgbXVzdCBtYXRjaCB0aGUgdmFsdWVzIGluIFBhcnRUeXBlXG5jb25zdCBBVFRSSUJVVEVfUEFSVCA9IDE7XG5jb25zdCBDSElMRF9QQVJUID0gMjtcbmNvbnN0IFBST1BFUlRZX1BBUlQgPSAzO1xuY29uc3QgQk9PTEVBTl9BVFRSSUJVVEVfUEFSVCA9IDQ7XG5jb25zdCBFVkVOVF9QQVJUID0gNTtcbmNvbnN0IEVMRU1FTlRfUEFSVCA9IDY7XG5jb25zdCBDT01NRU5UX1BBUlQgPSA3O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBUZW1wbGF0ZVJlc3VsdCB3aXRoXG4gKiB0aGUgZ2l2ZW4gcmVzdWx0IHR5cGUuXG4gKi9cbmNvbnN0IHRhZyA9IChfJGxpdFR5cGUkKSA9PiAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiAoe1xuICAgIF8kbGl0VHlwZSQsXG4gICAgc3RyaW5ncyxcbiAgICB2YWx1ZXMsXG59KTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjb250YWluZXJcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZS5fJGxpdFBhcnQkO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHBhcnRPd25lck5vZGUuXyRsaXRQYXJ0JCA9IHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGVuZE5vZGUpLCBlbmROb2RlLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGVcbiAqIGBDaGlsZFBhcnRgcyBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHluYW1pYyB0YWcgbmFtZVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gUmV0dXJuZWQgYXMgYW4gYXJyYXkgZm9yIHRlcnNlbmVzc1xuICAgIHJldHVybiBbXG4gICAgICAgIHBvbGljeSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBvbGljeS5jcmVhdGVIVE1MKGh0bWxSZXN1bHQpXG4gICAgICAgICAgICA6IGh0bWxSZXN1bHQsXG4gICAgICAgIGF0dHJOYW1lcyxcbiAgICBdO1xufTtcbmNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHN0cmluZ3MsIF8kbGl0VHlwZSQ6IHR5cGUgfSwgb3B0aW9ucykge1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXR0ck5hbWVJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHBhcnRDb3VudCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xuICAgICAgICAvLyBDcmVhdGUgdGVtcGxhdGUgZWxlbWVudFxuICAgICAgICBjb25zdCBbaHRtbCwgYXR0ck5hbWVzXSA9IGdldFRlbXBsYXRlSHRtbChzdHJpbmdzLCB0eXBlKTtcbiAgICAgICAgdGhpcy5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoaHRtbCwgb3B0aW9ucyk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgLy8gUmVwYXJlbnQgU1ZHIG5vZGVzIGludG8gdGVtcGxhdGUgcm9vdFxuICAgICAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzdmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoLi4uc3ZnRWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXYWxrIHRoZSB0ZW1wbGF0ZSB0byBmaW5kIGJpbmRpbmcgbWFya2VycyBhbmQgY3JlYXRlIFRlbXBsYXRlUGFydHNcbiAgICAgICAgd2hpbGUgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpICE9PSBudWxsICYmIHBhcnRzLmxlbmd0aCA8IHBhcnRDb3VudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgaW4gc29tZSBicm93c2VycyAoVE9ETzogY2hlY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tpXSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgcGFzdCB0aGUgbWFya2VyIG5vZGUgd2UganVzdCBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogKytub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIGJlY2F1c2UgdGhpcyBtYXJrZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIHdhbGtlcidzIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUsIGl0IHdpbGwgYmUgd2Fsa2VkIHRvIGluIHRoZSBvdXRlciBsb29wIChhbmQgaWdub3JlZCksIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGFkanVzdCBub2RlSW5kZXggaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tsYXN0SW5kZXhdLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbWFya2VyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiBub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUGxhdGZvcm1TdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoaHRtbCwgX29wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIHZhbHVlLCBwYXJlbnQgPSBwYXJ0LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHZhciBfZDtcbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZSB2YWx1ZSBpcyBleHBsaWNpdGx5IG5vQ2hhbmdlLiBOb3RlLCB0aGlzIG1lYW5zIGFueVxuICAgIC8vIG5lc3RlZCBkaXJlY3RpdmUgaXMgc3RpbGwgYXR0YWNoZWQgYW5kIGlzIG5vdCBydW4uXG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlyZWN0aXZlID0gYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IChfYSA9IHBhcmVudC5fX2RpcmVjdGl2ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVthdHRyaWJ1dGVJbmRleF0gOiBwYXJlbnQuX19kaXJlY3RpdmU7XG4gICAgY29uc3QgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID0gaXNQcmltaXRpdmUodmFsdWUpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogdmFsdWUuXyRsaXREaXJlY3RpdmUkO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5fJHNldERpcmVjdGl2ZUNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY3VycmVudERpcmVjdGl2ZSwgZmFsc2UpO1xuICAgICAgICBpZiAobmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoKF9jID0gKF9kID0gcGFyZW50KS5fX2RpcmVjdGl2ZXMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChfZC5fX2RpcmVjdGl2ZXMgPSBbXSkpW2F0dHJpYnV0ZUluZGV4XSA9IGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgc2VwYXJhdGUgZnJvbSB0aGUgY29uc3RydWN0b3IgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBob2xkIG9udG8gaXQgd2l0aCBhbiBpbnN0YW5jZSBmaWVsZC5cbiAgICBfY2xvbmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jcmVhdGlvblNjb3BlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkKS5pbXBvcnROb2RlKGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmcmFnbWVudDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgIHdoaWxlICh0ZW1wbGF0ZVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KG5vZGUsIG5vZGUubmV4dFNpYmxpbmcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyB0ZW1wbGF0ZVBhcnQuY3Rvcihub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gRUxFTUVOVF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gKHRlbXBsYXRlUGFydCA9PT0gbnVsbCB8fCB0ZW1wbGF0ZVBhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlUGFydC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBDSElMRF9QQVJUO1xuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyB3aWxsIGJlIHBhdGNoZWQgb250byBDaGlsZFBhcnRzIHdoZW4gcmVxdWlyZWQgYnlcbiAgICAgICAgLy8gQXN5bmNEaXJlY3RpdmVcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgdGhpcy5fJGVuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbm5lY3Rpb24gc3RhdGUgZm9yIGFueSBgQXN5bmNEaXJlY3RpdmVzYCBjb250YWluZWRcbiAgICAgKiB3aXRoaW4gdGhpcyBwYXJ0IGFuZCBydW5zIHRoZWlyIGBkaXNjb25uZWN0ZWRgIG9yIGByZWNvbm5lY3RlZGAsIGFjY29yZGluZ1xuICAgICAqIHRvIHRoZSBgaXNDb25uZWN0ZWRgIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGludG8gd2hpY2ggdGhlIHBhcnQgcmVuZGVycyBpdHMgY29udGVudC5cbiAgICAgKlxuICAgICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAgICogYC5wYXJlbnROb2RlYCwgcG9zc2libHkgYm9yZGVyZWQgYnkgJ21hcmtlciBub2RlcycgKGAuc3RhcnROb2RlYCBhbmRcbiAgICAgKiBgLmVuZE5vZGVgKS5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAgYXJlIG5vbi1udWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBiZXR3ZWVuIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCwgZXhjbHVzaXZlbHkuXG4gICAgICpcbiAgICAgKiAtIElmIGAuc3RhcnROb2RlYCBpcyBub24tbnVsbCBidXQgYC5lbmROb2RlYCBpcyBudWxsLCB0aGVuIHRoZSBwYXJ0J3NcbiAgICAgKiBjb250ZW50IGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBmb2xsb3dpbmcgYC5zdGFydE5vZGVgLCB1cCB0byBhbmRcbiAgICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgICAqIGAuc3RhcnROb2RlYCB3aWxsIGFsd2F5cyBiZSBub24tbnVsbC5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIGAucGFyZW50Tm9kZWAuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIE5vbi1yZW5kZXJpbmcgY2hpbGQgdmFsdWVzLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGRvIG5vdCByZW5kZXJcbiAgICAgICAgICAgIC8vIGVtcHR5IHRleHQgbm9kZXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggcHJldmVudGluZyBkZWZhdWx0IDxzbG90PlxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29udGVudC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLl8kbGl0VHlwZSQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2luc2VydChub2RlLCByZWYgPSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICByZXR1cm4gd3JhcCh3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGUpLmluc2VydEJlZm9yZShub2RlLCByZWYpO1xuICAgIH1cbiAgICBfY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgJiZcbiAgICAgICAgICAgICAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IChfYSA9IHRoaXMuXyRzdGFydE5vZGUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJyB8fCBwYXJlbnROb2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0KG5ldyBUZXh0KCcvKiBsaXQtaHRtbCB3aWxsIG5vdCB3cml0ZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdUZW1wbGF0ZVJlc3VsdHMgdG8gc2NyaXB0cyBhbmQgc3R5bGVzICovJykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy5fJGNvbW1pdHRlZFZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8gJiZcbiAgICAgICAgICAgICh0aGlzLl8kZW5kTm9kZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgID8gd3JhcChub2RlKS5uZXh0U2libGluZyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgIDogbm9kZSA9PT0gd3JhcCh0aGlzLl8kZW5kTm9kZSkucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRleHQgY29udGVudCwgZm9yIHNlY3VyaXR5IHB1cnBvc2VzIGl0IG1hdHRlcnMgYSBsb3RcbiAgICAgICAgICAgICAgICAvLyB3aGF0IHRoZSBwYXJlbnQgaXMuIEZvciBleGFtcGxlLCA8c3R5bGU+IGFuZCA8c2NyaXB0PiBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAgICAgICAgIC8vIHRleHQgbm9kZSBpbnRvIHRoZSBkb2N1bWVudCwgdGhlbiB3ZSBjYW4gc2FuaXRpemUgaXRzIGNvbnRlbnR4LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcih0ZXh0Tm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBfJGxpdFR5cGUkIH0gPSByZXN1bHQ7XG4gICAgICAgIC8vIElmICRsaXRUeXBlJCBpcyBhIG51bWJlciwgcmVzdWx0IGlzIGEgcGxhaW4gVGVtcGxhdGVSZXN1bHQgYW5kIHdlIGdldFxuICAgICAgICAvLyB0aGUgdGVtcGxhdGUgZnJvbSB0aGUgdGVtcGxhdGUgY2FjaGUuIElmIG5vdCwgcmVzdWx0IGlzIGFcbiAgICAgICAgLy8gQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdCBhbmQgXyRsaXRUeXBlJCBpcyBhIENvbXBpbGVkVGVtcGxhdGUgYW5kIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSA8dGVtcGxhdGU+IGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGl0LlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiBfJGxpdFR5cGUkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyB0aGlzLl8kZ2V0VGVtcGxhdGUocmVzdWx0KVxuICAgICAgICAgICAgOiAoXyRsaXRUeXBlJC5lbCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKF8kbGl0VHlwZSQuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KF8kbGl0VHlwZSQuaCwgdGhpcy5vcHRpb25zKSksXG4gICAgICAgICAgICAgICAgXyRsaXRUeXBlJCk7XG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyR0ZW1wbGF0ZSkgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdGhpcyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBsYXRmb3JtU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBmYWxzZSwgdHJ1ZSwgZnJvbSk7XG4gICAgICAgIHdoaWxlIChzdGFydCAmJiBzdGFydCAhPT0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fc2V0RGlyZWN0aXZlQ29ubmVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXcgQXJyYXkoc3RyaW5ncy5sZW5ndGggLSAxKS5maWxsKG5vdGhpbmcpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFBST1BFUlRZX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gRVZFTlRfUEFSVDtcbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBuZXdMaXN0ZW5lciA9IChfYSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdGhpbmc7XG4gICAgICAgIGlmIChuZXdMaXN0ZW5lciA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IChuZXdMaXN0ZW5lciA9PT0gbm90aGluZyAmJiBvbGRMaXN0ZW5lciAhPT0gbm90aGluZykgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLnBhc3NpdmU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgICAgIC8vIHRvIGFkZCB0aGUgcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICAob2xkTGlzdGVuZXIgPT09IG5vdGhpbmcgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgb2xkTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy8gQmV3YXJlOiBJRTExIGFuZCBDaHJvbWUgNDEgZG9uJ3QgbGlrZSB1c2luZyB0aGUgbGlzdGVuZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBvcHRpb25zIG9iamVjdC4gRmlndXJlIG91dCBob3cgdG8gZGVhbCB3LyB0aGlzIGluIElFMTEgLSBtYXliZVxuICAgICAgICAgICAgLy8gcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgbmV3TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGRvIHdlIG5lZWQgdG8gZGVmYXVsdCB0byB0aGlzLmVsZW1lbnQ/XG4gICAgICAgICAgICAvLyBJdCdsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGUuY3VycmVudFRhcmdldGAuXG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCgoX2IgPSAoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9zZXREaXJlY3RpdmVDb25uZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqMgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OoyA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gaHlkcmF0ZVxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZCA9IChfYyA9IGdsb2JhbFRoaXMpWydsaXRIdG1sUGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2UgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0SHRtbFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IChfZlsnbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzIuMC4wLXJjLjMnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUtbWFwLmpzLm1hcFxuIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vcGFnZS11Y2QtdGhlbWUtcGFnaW5hdGlvbi50cGwuanNcIjtcbmltcG9ydCB7TWl4aW4sIE1haW5Eb21FbGVtZW50fSBmcm9tICcuLi8uLi9lbGVtZW50cy91dGlscy9pbmRleC5qcyc7XG5cbmltcG9ydCBcIi4uLy4uL2VsZW1lbnRzL2JyYW5kL3VjZC10aGVtZS1wYWdpbmF0aW9uL3VjZC10aGVtZS1wYWdpbmF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VVY2RUaGVtZVBhZ2luYXRpb24gZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChNYWluRG9tRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGFnZS11Y2QtdGhlbWUtcGFnaW5hdGlvbicsIFBhZ2VVY2RUaGVtZVBhZ2luYXRpb24pOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbZWxlbWVudFN0eWxlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxoMz5QYWdpbmF0aW9uPC9oMz5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCI1MFwiXG4gIG1heC1wYWdlcz1cIjEwMFwiXG4gIHVzZS1oYXNoPlxuPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCIxXCJcbiAgbWF4LXBhZ2VzPVwiMTBcIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG48dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAgY3VycmVudC1wYWdlPVwiMlwiXG4gIG1heC1wYWdlcz1cIjMzXCJcbiAgYmFzZS1wYXRoPVwiL2Zvby9iYXIvXCI+XG48L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gIGN1cnJlbnQtcGFnZT1cIjMyXCJcbiAgbWF4LXBhZ2VzPVwiMzNcIlxuICB1c2UtaGFzaFxuICBiYXNlLXBhdGg9XCIvZm9vL2Jhci9cIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG48dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAgY3VycmVudC1wYWdlPVwiMzNcIlxuICBtYXgtcGFnZXM9XCIzM1wiXG4gIGJhc2UtcGF0aD1cIi9mb28vYmFyL1wiPlxuPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCI1MFwiXG4gIG1heC1wYWdlcz1cIjEwMFwiXG4gIHZpc2libGUtbGluay1jb3VudD1cIjE0XCI+XG48L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gIGN1cnJlbnQtcGFnZT1cIjk5XCJcbiAgbWF4LXBhZ2VzPVwiMTAwXCJcbiAgdmlzaWJsZS1saW5rLWNvdW50PVwiMTRcIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG48dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAgY3VycmVudC1wYWdlPVwiNTBcIlxuICBtYXgtcGFnZXM9XCIxMDBcIlxuICB2aXNpYmxlLWxpbmstY291bnQ9XCI1XCI+XG48L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuXG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vcGFnZS11Y2QtdGhlbWUtcHJpbWFyeS1uYXYudHBsLmpzXCI7XG5pbXBvcnQge01peGluLCBNYWluRG9tRWxlbWVudH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvdXRpbHMvaW5kZXguanMnO1xuXG5pbXBvcnQgXCIuLi8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcHJpbWFyeS1uYXYvdWNkLXRoZW1lLXByaW1hcnktbmF2LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VVY2RUaGVtZVByaW1hcnlOYXYgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChNYWluRG9tRWxlbWVudCkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwYWdlLXVjZC10aGVtZS1wcmltYXJ5LW5hdicsIFBhZ2VVY2RUaGVtZVByaW1hcnlOYXYpOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbZWxlbWVudFN0eWxlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cblxuPGgzPlByaW1hcnkgTmF2PC9oMz5cbjxwPlNpbXBsZSBuYXYuIE5vIGRyb3Bkb3ducy48L3A+XG48ZGl2IGNsYXNzPVwiY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgY2F0ZWdvcnktYnJhbmQtLXByaW1hcnlcIj5cbiAgPHVjZC10aGVtZS1wcmltYXJ5LW5hdj5cbiAgICA8YT5JVEVNIDE8L2E+XG4gICAgPGEgaHJlZj0jPklURU0gMjwvYT5cbiAgICA8YSBocmVmPVwiI1wiPklURU0gMzwvYT5cbiAgPC91Y2QtdGhlbWUtcHJpbWFyeS1uYXY+XG48L2Rpdj5cblxuPHAgY2xhc3M9XCJ1LXNwYWNlLW10LS1sYXJnZVwiPk5hdiB3aXRoIGRyb3Bkb3duczwvcD5cbjxkaXYgY2xhc3M9XCJjYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBjYXRlZ29yeS1icmFuZC0tcHJpbWFyeVwiPlxuICA8dWNkLXRoZW1lLXByaW1hcnktbmF2PlxuICAgIDxhPklURU0gMTwvYT5cbiAgICA8dWwgaHJlZj1cIiNcIiBsaW5rLXRleHQ9XCJXaGVlbCBvZiBUaW1lXCI+XG4gICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BZXMgU2VkYWk8L2E+PC9saT5cbiAgICAgIDx1bCBocmVmPVwiI1wiIGxpbmstdGV4dD1cIlRhJ3ZlcmVuXCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlJhbmQgYWwnVGhvcjwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5NYXRyaW0gQ2F1dGhvbjwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QZXJyaW4gQXliYXJhPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+V2FyZGVyczwvYT48L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8YSBocmVmPVwiI1wiPklURU0gMzwvYT5cbiAgPC91Y2QtdGhlbWUtcHJpbWFyeS1uYXY+XG48L2Rpdj5cblxuPHAgY2xhc3M9XCJ1LXNwYWNlLW10LS1sYXJnZVwiPk1lZ2EgbmF2PC9wPlxuICA8ZGl2PlxuICAgIDx1Y2QtdGhlbWUtcHJpbWFyeS1uYXYgbmF2LXR5cGU9XCJtZWdhXCIgc3R5bGUtbW9kaWZpZXJzPVwianVzdGlmeVwiPlxuICAgICAgPHVsIGxpbmstdGV4dD1cIkxvcmQgb2YgdGhlIFJpbmdzXCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiXCI+V2l6YXJkczwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkVudHM8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5NZW48L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5PcmNzPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiXCI+RWx2ZXM8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5Ed2FydmVzPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgIDx1bCBocmVmPVwiI1wiIGxpbmstdGV4dD1cIldoZWVsIG9mIFRpbWVcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWVzIFNlZGFpPC9hPjwvbGk+XG4gICAgICAgIDx1bCBocmVmPVwiI1wiIGxpbmstdGV4dD1cIlRhJ3ZlcmVuXCI+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmFuZCBhbCdUaG9yPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TWF0cmltIENhdXRob248L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QZXJyaW4gQXliYXJhPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPldhcmRlcnM8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5PZ2llcnM8L2E+PC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICAgIDx1bCBsaW5rLXRleHQ9XCJLaW5na2lsbGVyIENocm9uaWNsZVwiPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkh1bWFuczwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkZhZTwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3VjZC10aGVtZS1wcmltYXJ5LW5hdj5cbiAgPC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkbGliLXRoZW1lLXRlc3QtYXBwLnRwbC5qc1wiO1xuaW1wb3J0IHtNaXhpbiwgTWFpbkRvbUVsZW1lbnR9IGZyb20gJy4uL2VsZW1lbnRzL3V0aWxzL2luZGV4LmpzJztcblxuaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkbGliL3VjZGxpYi1wYWdlcy91Y2RsaWItcGFnZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkbGliVGhlbWVUZXN0QXBwIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTWFpbkRvbUVsZW1lbnQpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVsZW1lbnRzIDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHNlbGVjdGVkUGFnZSA6IHt0eXBlOiBTdHJpbmd9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSA9ICcnO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBsZXQgcm9vdCA9IHRoaXMucXVlcnlTZWxlY3RvcignI3BhZ2VzJyk7XG4gICAgZm9yKCBsZXQgZWxlTmFtZSBvZiBQQUdFUyApIHtcbiAgICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZU5hbWUpO1xuICAgICAgZWxlLmlkID0gZWxlTmFtZS5yZXBsYWNlKC9ecGFnZS0vLCAnJyk7XG4gICAgICByb290LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50cyA9IFBBR0VTLm1hcChuYW1lID0+IG5hbWUucmVwbGFjZSgvXnBhZ2UtLywgJycpKTtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpIHx8IFBBR0VTWzBdLnJlcGxhY2UoL15wYWdlLS8sICcnKTtcbiAgfVxuXG4gIF9vblNlbGVjdENoYW5nZSgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRoaXMucXVlcnlTZWxlY3RvcignI2VsZW1lbnRTZWxlY3RvcicpLnZhbHVlO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2RsaWItdGhlbWUtdGVzdC1hcHAnLCBVY2RsaWJUaGVtZVRlc3RBcHApOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbZWxlbWVudFN0eWxlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbiAgPHNlbGVjdCBpZD1cImVsZW1lbnRTZWxlY3RvclwiIEBjaGFuZ2U9XCIke3RoaXMuX29uU2VsZWN0Q2hhbmdlfVwiPlxuICAgICR7dGhpcy5lbGVtZW50cy5tYXAoaXRlbSA9PiBodG1sYDxvcHRpb24gdmFsdWU9XCIke2l0ZW19XCI+JHtpdGVtfTwvb3B0aW9uPmApfVxuICA8L3NlbGVjdD5cblxuICA8dWNkbGliLXBhZ2VzIGlkPVwicGFnZXNcIiBzZWxlY3RlZD1cIiR7dGhpcy5zZWxlY3RlZFBhZ2V9XCIgPjwvdWNkbGliLXBhZ2VzPlxuXG5gO30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vdWNkbGliLXRoZW1lLXRlc3QtYXBwLmpzXCI7XG5cbi8vIFBBR0VTXG5pbXBvcnQgXCIuL3BhZ2VzL3BhZ2UtdWNkLXRoZW1lLXByaW1hcnktbmF2LmpzXCI7XG5pbXBvcnQgXCIuL3BhZ2VzL3BhZ2UtdWNkLXRoZW1lLXBhZ2luYXRpb24uanNcIjtcblxuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvbmF2aWdhdGlvbi91Y2QtdGhlbWUtcHJpbWFyeS1uYXYvdWNkLXRoZW1lLXByaW1hcnktbmF2XCI7XG4vLyBpbXBvcnQgJy4uL2VsZW1lbnRzL3VjZC10aGVtZS1hbGVydC91Y2QtdGhlbWUtYWxlcnQnO1xuLy8gaW1wb3J0ICcuLi9lbGVtZW50cy91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEnO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uL3VjZC10aGVtZS1saXN0LWFjY29yZGlvblwiO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWZvcm0tc2VhcmNoL3VjZC10aGVtZS1mb3JtLXNlYXJjaFwiO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWhlYWRlci91Y2QtdGhlbWUtaGVhZGVyXCI7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cFwiO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWNvbGxhcHNlL3VjZC10aGVtZS1jb2xsYXBzZVwiO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnlcIjtcbi8vIGltcG9ydCBcIi4uL2VsZW1lbnRzL3VjZC10aGVtZS1wYWdpbmF0aW9uL3VjZC10aGVtZS1wYWdpbmF0aW9uXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9