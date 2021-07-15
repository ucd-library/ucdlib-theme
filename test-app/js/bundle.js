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
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "../elements/utils/index.js");







/**
 * @class UcdThemePrimaryNav
 * @classdesc Component class for displaying a primary site nav
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
class UcdThemePrimaryNav extends (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.Mixin)(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement)
  .with(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.MutationObserverElement) {

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
   * @method getNavClasses
   * @description Get classes to be applied to the top-level 'nav' element
   * @returns {String}
   */
  getNavClasses(){
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
        .hasnav=${true}
        @mouseenter=${this._onItemMouseenter} 
        @mouseleave=${this._onItemMouseleave}
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)(this._makeLiClassMap(navItem, depth))}>
        <div class="submenu-toggle__wrapper ${depth === 0 ? `${this._classPrefix}__top-link` : ''}">
          <a 
            href=${navItem.href}
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
        <ul class="menu ${navItem.isOpen ? "menu--open" : ""}" style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.styleMap)(this.getItemMobileStyles(location))}>
          ${navItem.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
        </ul>
      </li>
    `;
    }

    // render as normal link
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <li id="nav--${location.join("-")}" .key=${location} class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)(this._makeLiClassMap(navItem, depth))}>
        <div class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
          ${navItem.href ? lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <a 
              href=${navItem.href} 
              @focus=${this._onItemFocus}
              tabindex=${this._setTabIndex(depth)}>
              ${navItem.linkText}</a>
          ` : lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <span class="${this._classPrefix}__nolink">${navItem.linkText}</span>
          `}
        </div>
      </li>
    `;
  }

  /**
   * @method _setTabIndex
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
      this.isDesktop()
    ) i = -1;

    return i;
  }

  /**
   * @method _makeLiClassMap
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
   * @description Expands/collapses mobile subnavs with animation on user click.
   * @param {Array} navLocation - Array coordinates of corresponding nav item
   */
  async _toggleMobileMenu(navLocation){
    if ( this.isDesktop() ) return;
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
      this.isMobile() || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    this._megaTimeout = setTimeout(() => {
      this.openMegaNav();
    }, this.hoverDelay);
  }

  /**
   * @method _onNavMouseleave
   * @description Attached to top-level nav element. Closes mega menu in desktop view
   */
  _onNavMouseleave(){
    if ( 
      this.isMobile() || 
      !this.isMegaMenu() ) 
      return;

    if ( this._megaTimeout ) clearTimeout(this._megaTimeout);
    
    this._megaTimeout = setTimeout(() => {
      this.closeMegaNav();
    }, this.hoverDelay);
  }

  /**
   * @method _onNavFocusin
   * @description Fires when focus enters the main nav element. Used to open the meganav
   * @returns 
   */
  _onNavFocusin(){
    if ( 
      this.isMobile() || 
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
   * @description Bound to nav li items with a subnav
   * @param {Event} e 
   */
  _onItemMouseenter(e){
    if ( this.isMobile() ) return;
    this.openSubNav(e.target.key);
  }

  /**
   * @method _onItemFocus
   * @description Bound to nav a elements
   * @param {Event} e 
   */
  _onItemFocus(e){
    if ( this.isMobile() ) return;
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
   * @returns 
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
    if ( this.isMobile() ) {
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

      // mega menu
      if ( this.isMegaMenu() ){
        return;
      }

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
    if ( this.isMobile() || this.isMegaMenu() ) return;
    this.closeSubNav(e.target.key);
  }

  /**
   * @method _onNavFocusout
   * @description Attached to the top-level nav element. Closes subnav if it doesn't contain focused link.
   */
  _onNavFocusout(){
    if ( this.isMobile() ) return;
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
   * @method closeSubNav
   * @description Closes a subnav given its coordinates 
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns 
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
    if ( this.isMobile() ) {
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

      // Set height to 0 by requesting all of the animation frames :-(
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navItem.mobileStyles.height = "0px";
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
    if ( this.isDesktop() ) return {};
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
        display: none;
      }
      ul.menu li.sf--hover > ul.menu {
        display: block;
        opacity: 1;
      }
      ul.menu li.closing > ul.menu {
        display: block;
        opacity: 0;
      }
      .mega-focus .primary-nav__top-link a, 
      .mega-focus .primary-nav__top-link a::before, .mega-focus 
      .primary-nav__top-link a::after {
        background-color: rgb(255, 223, 128);
      }
      .mega-focus .primary-nav__top-link a:focus, 
      .mega-focus .primary-nav__top-link a:focus::before, 
      .mega-focus .primary-nav__top-link a:focus::after {
        background-color: rgb(255, 191, 0);
      }
      .mega-focus > ul {
        background-color: rgb(255, 251, 237);
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

/***/ "./node_modules/lit-html/development/directives/class-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/class-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* binding */ classMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class ClassMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'class' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('`classMap()` can only be used in the `class` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(classInfo) {
        return Object.keys(classInfo)
            .filter((key) => classInfo[key])
            .join(' ');
    }
    update(part, [classInfo]) {
        // Remember dynamic classes on the first render
        if (this._previousClasses === undefined) {
            this._previousClasses = new Set();
            for (const name in classInfo) {
                if (classInfo[name]) {
                    this._previousClasses.add(name);
                }
            }
            return this.render(classInfo);
        }
        const classList = part.element.classList;
        // Remove old classes that no longer apply
        // We use forEach() instead of for-of so that we don't require down-level
        // iteration.
        this._previousClasses.forEach((name) => {
            if (!(name in classInfo)) {
                classList.remove(name);
                this._previousClasses.delete(name);
            }
        });
        // Add or remove classes based on their classMap value
        for (const name in classInfo) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            const value = !!classInfo[name];
            if (value !== this._previousClasses.has(name)) {
                if (value) {
                    classList.add(name);
                    this._previousClasses.add(name);
                }
                else {
                    classList.remove(name);
                    this._previousClasses.delete(name);
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies dynamic CSS classes.
 *
 * This must be used in the `class` attribute and must be the only part used in
 * the attribute. It takes each property in the `classInfo` argument and adds
 * the property name to the element's `classList` if the property value is
 * truthy; if the property value is falsey, the property name is removed from
 * the element's `class`.
 *
 * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
 * truthy.
 *
 * @param classInfo
 */
const classMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClassMapDirective);
//# sourceMappingURL=class-map.js.map

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

/***/ "./node_modules/lit/directives/class-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/class-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* reexport safe */ lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/development/directives/class-map.js");

//# sourceMappingURL=class-map.js.map


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcGFnaW5hdGlvbi91Y2QtdGhlbWUtcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcGFnaW5hdGlvbi91Y2QtdGhlbWUtcGFnaW5hdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvYnJhbmQvdWNkLXRoZW1lLXByaW1hcnktbmF2L3VjZC10aGVtZS1wcmltYXJ5LW5hdi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy9icmFuZC91Y2QtdGhlbWUtcHJpbWFyeS1uYXYvdWNkLXRoZW1lLXByaW1hcnktbmF2LnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2RsaWIvdWNkbGliLXBhZ2VzL3VjZGxpYi1wYWdlcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91dGlscy9tYWluLWRvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3V0aWxzL21peGluLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3V0aWxzL211dGF0aW9uLW9ic2VydmVyLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2Zvcm1zLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19yZXNldC5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8yX2Jhc2VfY2xhc3MvX21pc2MuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX25hdi1wcmltYXJ5LmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19wYWdpbmF0aW9uLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19zdWJtZW51LXRvZ2dsZS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy9ub3JtYWxpemUuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlcy9jbGFzcy1tYXAuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2RpcmVjdGl2ZXMvc3R5bGUtbWFwLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3BhZ2VzL3BhZ2UtdWNkLXRoZW1lLXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9wYWdlcy9wYWdlLXVjZC10aGVtZS1wYWdpbmF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL3BhZ2VzL3BhZ2UtdWNkLXRoZW1lLXByaW1hcnktbmF2LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vcGFnZXMvcGFnZS11Y2QtdGhlbWUtcHJpbWFyeS1uYXYudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vdWNkbGliLXRoZW1lLXRlc3QtYXBwLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vdWNkbGliLXRoZW1lLXRlc3QtYXBwLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3QtYXBwLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNzQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLGlDQUFpQywyQ0FBVTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBLFdBQVcsb0VBQU07QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IscUVBQVc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEscUNBQUksMkJBQTJCLGlCQUFpQjtBQUM3RCx5REFBeUQsb0JBQW9CLFVBQVUsS0FBSyxJQUFJLG1CQUFtQjtBQUNuSDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSSwwQkFBMEIsaUJBQWlCO0FBQzFELGlCQUFpQixLQUFLLElBQUksbUJBQW1CO0FBQzdDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMOzs7QUFHQTs7QUFFQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJZ0M7O0FBRWdDO0FBQ0s7QUFDTTs7QUFFcEU7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSx5RUFBWSxFQUFFLGlGQUFRLEVBQUUsbUZBQWE7QUFDL0M7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJOztBQUVYO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsT0FBTztBQUNQOztBQUVBLE1BQU07O0FBRU4sTUFBTTtBQUNOO0FBQ0EsT0FBTztBQUNQOztBQUVBOzs7QUFHQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN1QztBQUN1QjtBQUNQO0FBQ0E7O0FBRWU7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxpQ0FBaUMsc0RBQUssQ0FBQywyQ0FBVTtBQUNoRSxRQUFRLG9FQUF1Qjs7QUFFL0I7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQsdUJBQXVCLDJDQUEyQztBQUNsRSxtQkFBbUIsdUNBQXVDO0FBQzFELDBCQUEwQiw4Q0FBOEM7QUFDeEUsaUJBQWlCLFlBQVk7QUFDN0IsaUJBQWlCLHFDQUFxQztBQUN0RCxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLFdBQVcscUVBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzRUFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FLGtCQUFrQixJQUFJLElBQUk7QUFDOUY7QUFDQTtBQUNBLGNBQWMsa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksUUFBUSxHQUFHLGVBQWUsR0FBRyxXQUFXO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHFDQUFJO0FBQ2pCO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QyxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLHNCQUFzQix1QjtBQUN0QixzQkFBc0I7QUFDdEIsZ0JBQWdCLHFFQUFRLHVDQUF1QztBQUMvRCw4Q0FBOEMsaUJBQWlCLGtCQUFrQixpQkFBaUI7QUFDbEc7QUFDQSxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLHFCQUFxQixrQkFBa0I7QUFDdkMsY0FBYyxpQkFBaUIsZUFBZSxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixrQ0FBa0MsNkNBQTZDO0FBQy9FLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUMsVUFBVSxxRUFBUSxxQ0FBcUM7QUFDcEgsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmLHFCQUFxQixtQkFBbUIsU0FBUyxTQUFTLFNBQVMscUVBQVEsdUNBQXVDO0FBQ2xILHNCQUFzQixpQkFBaUIsa0JBQWtCLGlCQUFpQjtBQUMxRSxZQUFZLGVBQWUscUNBQUk7QUFDL0I7QUFDQSxxQkFBcUIsYTtBQUNyQix1QkFBdUI7QUFDdkIseUJBQXlCLHlCQUF5QjtBQUNsRCxnQkFBZ0IsaUJBQWlCO0FBQ2pDLGNBQWMscUNBQUk7QUFDbEIsMkJBQTJCLGtCQUFrQixZQUFZLGlCQUFpQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE1BQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELHNCQUFzQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxzQkFBc0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pwQmdDOztBQUVtQztBQUNJO0FBQ0E7QUFDWTtBQUNLOztBQUVqRjtBQUNQLHdCQUF3QixvQ0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHlFQUFlO0FBQ25CLElBQUksaUZBQVU7QUFDZCxJQUFJLGlGQUFVO0FBQ2QsSUFBSSx1RkFBZ0I7QUFDcEIsSUFBSSwwRkFBa0I7QUFDdEI7QUFDQTtBQUNBOztBQUVPLG1CO0FBQ1AsT0FBTyxxQ0FBSTtBQUNYO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCLFdBQVc7QUFDbkU7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEIsR0FBRyx1QkFBdUIsV0FBVztBQUM3Rjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFdBQVcscUJBQXFCO0FBQ2hDLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGFBQWE7QUFDYjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDekdpQztBQUNtQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwwQkFBMEIsc0RBQUssQ0FBQywyQ0FBVTtBQUN6RCxRQUFRLG9FQUF1Qjs7QUFFL0I7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KK0I7QUFDZ0M7QUFDVjs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyRDtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7OztBQ3BCcEI7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0U7QUFDbkM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsK0RBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrREFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsUUFBUSwrRUFBK0UsRUFBRTtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsa0ZBQWtGLEVBQUU7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLFFBQVEsNEVBQTRFLEVBQUU7QUFDeEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsUUFBUSw2RUFBNkUsRUFBRTtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSw2R0FBNkcsa0JBQWtCO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7Ozs7Ozs7Ozs7Ozs7OztBQ2wzQndCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ25GdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2R1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2pDdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUM5U3VCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUM5RXVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdEZ1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDWjtBQUNOO0FBQ2I7QUFDekI7QUFDQTtBQUNPLHdCQUF3QixrRUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08seUJBQXlCLGtFQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxhQUFhO0FBQ3BIO0FBQ0E7QUFDQSx3R0FBd0csYUFBYTtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRkFBNkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDd0I7QUFDbEUsZ0NBQWdDLG9EQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCLHdEQUFTO0FBQ2pDLHFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDd0I7QUFDbEUsZ0NBQWdDLG9EQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLEdBQUcsT0FBTztBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ08saUJBQWlCLHdEQUFTO0FBQ2pDLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLElBQUksV0FBVyxNQUFNLGdCQUFnQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVDQUF1QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU0sVUFBVSxpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7O0FDbmtDOEM7QUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEOEM7QUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHVGO0FBQ3ZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGlDO0FBQ2lDO0FBQ0U7O0FBRU87O0FBRTVELHFDQUFxQywrREFBSyxDQUFDLDJDQUFVO0FBQ3BFLFFBQVEsb0VBQWM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyx5RUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDBFQUFXO0FBQzdCOztBQUVBOztBQUVBLDJFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJnQzs7QUFFekI7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURpQztBQUNrQztBQUNDOztBQUVTOztBQUU5RCxxQ0FBcUMsK0RBQUssQ0FBQywyQ0FBVTtBQUNwRSxRQUFRLG9FQUFjOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDBFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsMkVBQVc7QUFDN0I7O0FBRUE7O0FBRUEsNEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmdDOztBQUV6QjtBQUNQLHdCQUF3QixvQ0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPLG1CO0FBQ1AsT0FBTyxxQ0FBSTs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWlDO0FBQzZCO0FBQ0c7O0FBRVI7O0FBRTFDLGlDQUFpQywrREFBSyxDQUFDLDJDQUFVO0FBQ2hFLFFBQVEsb0VBQWM7O0FBRXRCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLFdBQVcscUVBQU07QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGtCQUFrQixzRUFBVztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1FOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRnQzs7QUFFekI7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7O0FBRVgsMENBQTBDLHFCQUFxQjtBQUMvRCxNQUFNLDBCQUEwQixxQ0FBSSxrQkFBa0IsS0FBSyxJQUFJLEtBQUs7QUFDcEU7O0FBRUEsdUNBQXVDLGtCQUFrQjs7QUFFekQsRzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDO0FBQytDO0FBQ0Q7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLXBhZ2luYXRpb24udHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIFVjZFRoZW1lUGFnaW5hdGlvblxuICogQGNsYXNzZGVzYyBDb21wb25lbnQgY2xhc3MgZm9yIHBhZ2luYXRpb25cbiAqIFBhdHRlcm4gTGFiIFVybDogaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduLz9wPW1vbGVjdWxlcy1wYWdpbmF0aW9uXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBiYXNlLXBhdGggLSBmb3IgYW5jaG9yIHRhZyBocmVmXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY3VycmVudC1wYWdlIC0gUGFnZSB0byBzaG93IGFuZCBoaWdobGlnaHRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtYXgtcGFnZXMgLSBNYXggbnVtYmVyIG9mIHRvdGFsIHBhZ2VzXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdmlzaWJsZS1saW5rLWNvdW50IC0gSG93IG1hbnkgcGFnZSBsaW5rcyB0byBzaG93XG4gKiBcbiAqIEBleGFtcGxlc1xuICogXG4gKiA8dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAqICBjdXJyZW50LXBhZ2U9XCI1MFwiXG4gKiAgbWF4LXBhZ2VzPVwiMTAwXCJcbiAqICB1c2UtaGFzaD5cbiAqIDwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG4gKiA8dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAqICBjdXJyZW50LXBhZ2U9XCIxXCJcbiAqICBtYXgtcGFnZXM9XCIxMFwiPlxuICogPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbiAqIDx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICogIGN1cnJlbnQtcGFnZT1cIjJcIlxuICogIG1heC1wYWdlcz1cIjMzXCJcbiAqICBiYXNlLXBhdGg9XCIvZm9vL2Jhci9cIj5cbiAqIDwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG4gKiBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkVGhlbWVQYWdpbmF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBiYXNlUGF0aCA6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcbiAgICAgICAgYXR0cmlidXRlOiAnYmFzZS1wYXRoJ1xuICAgICAgfSxcbiAgICAgIHVzZUhhc2ggOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sIFxuICAgICAgICBhdHRyaWJ1dGU6ICd1c2UtaGFzaCdcbiAgICAgIH0sXG4gICAgICBjdXJyZW50UGFnZSA6IHtcbiAgICAgICAgdHlwZSA6IE51bWJlcixcbiAgICAgICAgYXR0cmlidXRlOiAnY3VycmVudC1wYWdlJyxcbiAgICAgICAgcmVmbGVjdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1heFBhZ2VzIDoge1xuICAgICAgICB0eXBlIDogTnVtYmVyLFxuICAgICAgICBhdHRyaWJ1dGUgOiAnbWF4LXBhZ2VzJ1xuICAgICAgfSxcbiAgICAgIHZpc2libGVMaW5rQ291bnQgOiB7XG4gICAgICAgIHR5cGUgOiBOdW1iZXIsXG4gICAgICAgIGF0dHJpYnV0ZSA6ICd2aXNpYmxlLWxpbmstY291bnQnXG4gICAgICB9LFxuICAgICAgX3BhZ2VzIDoge3R5cGU6IEFycmF5fVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9wYWdlcyA9IFtdO1xuICAgIHRoaXMudXNlSGFzaCA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9ICd2aXJ0dWFsJztcbiAgICB0aGlzLmJhc2VQYXRoID0gJyc7XG4gICAgdGhpcy52aXNpYmxlTGlua0NvdW50ID0gNztcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLm1heFBhZ2VzID0gMTtcblxuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYoIHByb3BzLmhhcygnY3VycmVudFBhZ2UnKSApIHtcbiAgICAgIGxldCBzdGFydEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRQYWdlIC0gKHRoaXMudmlzaWJsZUxpbmtDb3VudC8yKSk7XG4gICAgICBcbiAgICAgIGlmKCBzdGFydEluZGV4IDwgMCApIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICB9IGVsc2UgaWYoICh0aGlzLmN1cnJlbnRQYWdlICsgKHRoaXMudmlzaWJsZUxpbmtDb3VudC8yKSkgPiB0aGlzLm1heFBhZ2VzICkge1xuICAgICAgICBzdGFydEluZGV4IC09IE1hdGguY2VpbCh0aGlzLmN1cnJlbnRQYWdlICsgKHRoaXMudmlzaWJsZUxpbmtDb3VudC8yKSkgLSB0aGlzLm1heFBhZ2VzIC0gMTtcbiAgICAgIH1cbiAgICAgIGlmKCBzdGFydEluZGV4IDwgMCApIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB0aGlzLnZpc2libGVMaW5rQ291bnQ7XG4gICAgICBpZiggZW5kSW5kZXggPiB0aGlzLm1heFBhZ2VzICkgZW5kSW5kZXggPSB0aGlzLm1heFBhZ2VzO1xuXG4gICAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICAgIGZvciggbGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKyApIHtcbiAgICAgICAgcGFnZXMucHVzaChpKzEpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGFnZXMgPSBwYWdlcztcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyTGluayhwYWdlLCBhcmdzPXt9KSB7XG4gICAgaWYoIHBhZ2UgPCAxICkgcGFnZSA9IDE7XG4gICAgaWYoIHBhZ2UgPiB0aGlzLm1heFBhZ2VzICkgcGFnZSA9IHRoaXMubWF4UGFnZXM7XG5cbiAgICBpZiggYXJncy5ub0hpZ2hsaWdodCAhPT0gdHJ1ZSAmJiBwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlICkge1xuICAgICAgaWYoICFhcmdzLmNsYXNzICkgYXJncy5jbGFzcyA9ICcnO1xuICAgICAgYXJncy5jbGFzcyArPSAnIHBhZ2VyX19pdGVtLS1jdXJyZW50JztcbiAgICB9XG5cbiAgICBpZiggIXRoaXMuYmFzZVBhdGggJiYgIXRoaXMudXNlSGFzaCApIHtcbiAgICAgIHJldHVybiBodG1sYDxsaSAgY2xhc3M9XCJwYWdlcl9faXRlbSAke2FyZ3MuY2xhc3MgfHwgJyd9XCI+XG4gICAgICAgIDxhIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiB0YWJpbmRleD1cIjFcIiBAY2xpY2s9XCIke3RoaXMuX29uUGFnZUNsaWNrZWR9XCIgcGFnZT1cIiR7cGFnZX1cIj4ke2FyZ3MubGFiZWwgfHwgcGFnZX08L2E+XG4gICAgICA8L2xpPmA7XG4gICAgfVxuXG4gICAgbGV0IGhyZWYgPSAodGhpcy51c2VIYXNoID8gJyMnIDogJycpICsgKHRoaXMuYmFzZVBhdGggfHwgJy8nKSArIHBhZ2U7XG4gICAgcmV0dXJuIGh0bWxgPGxpIGNsYXNzPVwicGFnZXJfX2l0ZW0gJHthcmdzLmNsYXNzIHx8ICcnfVwiPlxuICAgICAgPGEgaHJlZj1cIiR7aHJlZn1cIj4ke2FyZ3MubGFiZWwgfHwgcGFnZX08L2E+XG4gICAgPC9saT5gO1xuICB9XG5cblxuICBfb25QYWdlQ2xpY2tlZChlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFnZS1jaGFuZ2UnLCB7XG4gICAgICBkZXRhaWwgOiB7cGFnZTogcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgncGFnZScpKX1cbiAgICB9KSk7XG4gIH1cblxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLXBhZ2luYXRpb24nLCBVY2RUaGVtZVBhZ2luYXRpb24pOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCBub3JtYWxpemVDc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3Mvbm9ybWFsaXplLmNzcy5qc1wiO1xuaW1wb3J0IHJlc2V0Q3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19yZXNldC5jc3MuanNcIjtcbmltcG9ydCBwYWdpbmF0aW9uQ3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19wYWdpbmF0aW9uLmNzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbbm9ybWFsaXplQ3NzLCByZXNldENzcywgcGFnaW5hdGlvbkNzcywgZWxlbWVudFN0eWxlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbiAgPHVsIGNsYXNzPVwicGFnZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckxpbmsoXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlLTEsIFxuICAgICAge2xhYmVsOiAnUHJldicsIGNsYXNzOiAncGFnZXJfX2l0ZW0tLXByZXZpb3VzJywgbm9IaWdobGlnaHQ6IHRydWV9XG4gICAgKX1cblxuICAgICR7dGhpcy5fcGFnZXMubWFwKHBhZ2UgPT4gdGhpcy5fcmVuZGVyTGluayhwYWdlKSl9XG5cbiAgICAke3RoaXMuX3JlbmRlckxpbmsoXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlKzEsIFxuICAgICAge2xhYmVsOiAnTmV4dCcsIGNsYXNzOiAncGFnZXJfX2l0ZW0tLW5leHQnLCBub0hpZ2hsaWdodDogdHJ1ZX1cbiAgICApfVxuXG4gIDwvdWw+XG5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi91Y2QtdGhlbWUtcHJpbWFyeS1uYXYudHBsLmpzXCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qcyc7XG5cbmltcG9ydCB7IE1peGluLCBNdXRhdGlvbk9ic2VydmVyRWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZVByaW1hcnlOYXZcbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgcHJpbWFyeSBzaXRlIG5hdlxuICogUGF0dGVybiBMYWIgVXJsOlxuICogIC0gaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduL3BhdHRlcm5zL21vbGVjdWxlcy1uYXZpZ2F0aW9uLTAwLXByaW1hcnktbmF2L21vbGVjdWxlcy1uYXZpZ2F0aW9uLTAwLXByaW1hcnktbmF2LnJlbmRlcmVkLmh0bWxcbiAqICAtIGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi9wYXR0ZXJucy9tb2xlY3VsZXMtbmF2aWdhdGlvbi0wMC1wcmltYXJ5LW5hdi1tZWdhbWVudS9tb2xlY3VsZXMtbmF2aWdhdGlvbi0wMC1wcmltYXJ5LW5hdi1tZWdhbWVudS5yZW5kZXJlZC5odG1sXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYXZUeXBlIC0gVGhlIHByaW1hcnkgc3R5bGUgdHlwZSBvZiB0aGUgbmF2OlxuICogICdzdXBlcmZpc2gnIC0gVGhlIGRlZmF1bHRcbiAqICAnbWVnYScgLSBIb3ZlcmluZyBvdmVyIGFueSB0b3AtbGV2ZWwgbGluayBvcGVucyBhIHNpbmdsZSBuYXYgd2l0aCBhbGwgc3VibmF2IGxpbmtzXG4gKiBAcHJvcGVydHkge1N0cmluZ30gc3R5bGVNb2RpZmllcnMgLSBBcHBseSBhbHRlcm5hdGUgc3R5bGVzIHdpdGggYSBzcGFjZS1zZXBhcmF0ZWQgbGlzdC5cbiAqICBlLmcuICdqdXN0aWZ5JyBmb3IgJ3ByaW1hcnktbmF2LS1qdXN0aWZ5J1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGhvdmVyRGVsYXkgLSBIb3cgbG9uZyAobXMpIGFmdGVyIGhvdmVyIHdpbGwgbWVudSBvcGVuL2Nsb3NlXG4gKiBAcHJvcGVydHkge051bWJlcn0gYW5pbWF0aW9uRHVyYXRpb24gLSBIb3cgbG9uZyAobXMpIGZvciBhIG1lbnUgdG8gZmFkZSBpbi9vdXRcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBtYXhEZXB0aCAtIE1heGltdW0gbnVtYmVyIG9mIHN1Ym1lbnVzIHRvIHNob3dcbiAqIFxuICogQGV4YW1wbGVcbiAqIGh0bWxgXG4gKiAgPHVjZC10aGVtZS1wcmltYXJ5LW5hdj5cbiAqICAgIDxhIGhyZWY9XCIjXCI+bGluayAxPC9hPlxuICogICAgPGEgaHJlZj1cIiNcIj5saW5rIDI8L2E+XG4gKiAgICA8dWwgbGluay10aXRsZT1cImxpbmsgd2l0aCBzdWJuYXZcIiBocmVmPVwiI1wiPlxuICogICAgICA8bGk+PGEgaHJlZj1cIiNcIj5zdWJuYXYgbGluayAxPC9hPjwvbGk+XG4gKiAgICA8L3VsPlxuICogIDwvdWNkLXRoZW1lLXByaW1hcnktbmF2PlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZVByaW1hcnlOYXYgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChNdXRhdGlvbk9ic2VydmVyRWxlbWVudCkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2VHlwZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcIm5hdi10eXBlXCJ9LFxuICAgICAgc3R5bGVNb2RpZmllcnM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJzdHlsZS1tb2RpZmllcnNcIn0sXG4gICAgICBob3ZlckRlbGF5OiB7dHlwZTogTnVtYmVyLCBhdHRyaWJ1dGU6IFwiaG92ZXItZGVsYXlcIn0sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiBcImFuaW1hdGlvbi1kdXJhdGlvblwifSxcbiAgICAgIG5hdkl0ZW1zOiB7dHlwZTogQXJyYXl9LFxuICAgICAgbWF4RGVwdGg6IHt0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogXCJtYXgtZGVwdGhcIn0sXG4gICAgICBfbWVnYUlzT3Blbjoge3R5cGU6IEJvb2xlYW4sIHN0YXRlOiB0cnVlfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uYXZUeXBlID0gXCJzdXBlcmZpc2hcIjtcbiAgICB0aGlzLnN0eWxlTW9kaWZpZXJzID0gXCJcIjtcbiAgICB0aGlzLmhvdmVyRGVsYXkgPSAzMDA7XG4gICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IDMwMDtcbiAgICB0aGlzLm5hdkl0ZW1zID0gW107XG4gICAgdGhpcy5tYXhEZXB0aCA9IDI7XG5cbiAgICB0aGlzLl9jbGFzc1ByZWZpeCA9IFwicHJpbWFyeS1uYXZcIjtcbiAgICB0aGlzLl9tb2JpbGVCcmVha1BvaW50ID0gOTkyO1xuICAgIHRoaXMuX2FjY2VwdGVkTmF2VHlwZXMgPSBbJ3N1cGVyZmlzaCcsICdtZWdhJ107XG4gICAgdGhpcy5fbWVnYUlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaXNEZXNrdG9wXG4gICAqIEBkZXNjcmlwdGlvbiBJcyB0aGUgZGVza3RvcCB2aWV3IGN1cnJlbnRseSBhY3RpdmU/XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgaXNEZXNrdG9wKCl7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID49IHRoaXMuX21vYmlsZUJyZWFrUG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpc01vYmlsZVxuICAgKiBAZGVzY3JpcHRpb24gSXMgdGhlIG1vYmlsZSB2aWV3IGN1cnJlbnRseSBhY3RpdmU/XG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgaXNNb2JpbGUoKXtcbiAgICByZXR1cm4gIXRoaXMuaXNEZXNrdG9wKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXROYXZDbGFzc2VzXG4gICAqIEBkZXNjcmlwdGlvbiBHZXQgY2xhc3NlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b3AtbGV2ZWwgJ25hdicgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0TmF2Q2xhc3Nlcygpe1xuICAgIGxldCBuYXZUeXBlID0gdGhpcy5fYWNjZXB0ZWROYXZUeXBlc1swXTtcbiAgICBpZiAoIHRoaXMuX2FjY2VwdGVkTmF2VHlwZXMuaW5jbHVkZXModGhpcy5uYXZUeXBlLnRvTG93ZXJDYXNlKCkpICkgbmF2VHlwZSA9IHRoaXMubmF2VHlwZTtcbiAgICBcbiAgICBsZXQgc3R5bGVNb2RpZmllcnMgPSBcIlwiO1xuICAgIGlmICggdGhpcy5zdHlsZU1vZGlmaWVycyApIHtcbiAgICAgIHN0eWxlTW9kaWZpZXJzID0gdGhpcy5zdHlsZU1vZGlmaWVycy5zcGxpdChcIiBcIikubWFwKG1vZCA9PiBgJHt0aGlzLl9jbGFzc1ByZWZpeH0tLSR7bW9kfWApLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgICBsZXQgbWVnYUlzT3BlbiA9IHRoaXMuaXNNZWdhTWVudSgpICYmIHRoaXMuX21lZ2FJc09wZW4gPyAnaXMtaG92ZXInIDogJyc7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NsYXNzUHJlZml4fSAke3RoaXMuX2NsYXNzUHJlZml4fS0tJHtuYXZUeXBlfSAke3N0eWxlTW9kaWZpZXJzfSAke21lZ2FJc09wZW59YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoaWxkTGlzdE11dGF0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlcyB3aGVuIGxpZ2h0IGRvbSBjaGlsZCBsaXN0IGNoYW5nZXMuIEluamVjdGVkIGJ5IE11dGF0aW9uT2JzZXJ2ZXJFbGVtZW50IG1peGluLlxuICAgKiAgU2V0cyB0aGUgJ25hdkl0ZW1zJyBwcm9wZXJ0eS5cbiAgICovXG4gIF9vbkNoaWxkTGlzdE11dGF0aW9uKCl7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pO1xuICAgIGxldCBuYXZJdGVtcyA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHRoaXMuX21ha2VOYXZJdGVtVHJlZShjaGlsZCkpLmZpbHRlcihuYXZJdGVtID0+IG5hdkl0ZW0ubGlua1RleHQpO1xuICAgIGlmICggbmF2SXRlbXMubGVuZ3RoICkgdGhpcy5uYXZJdGVtcyA9IG5hdkl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX21ha2VOYXZJdGVtVHJlZVxuICAgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgbWVudSBpdGVtIGRhdGEgZnJvbSBET00gRWxlbWVudFxuICAgKiBAcGFyYW0ge0RPTSBOb2RlfSBlbGUgLSBFbGVtZW50XG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvcm1hdHRlZCBvYmplY3QgZGVzY3JpYmluZyB0aGUgbWVudSBpdGVtIGFuZCBpdHMgY2hpbGRyZW5cbiAgICovXG4gIF9tYWtlTmF2SXRlbVRyZWUoZWxlKXtcbiAgICBsZXQgbGlua1RleHQsIGhyZWYsIHN1Ykl0ZW1zID0gW10sIGlzT3Blbj1mYWxzZSwgbW9iaWxlU3R5bGVzPXt9O1xuICAgIGlmICggZWxlLnRhZ05hbWUgPT09ICdMSScgJiYgZWxlLmNoaWxkcmVuLmxlbmd0aCA+IDApIGVsZSA9IGVsZS5jaGlsZHJlblswXTtcblxuICAgIGlmICggZWxlLnRhZ05hbWUgPT09ICdBJyApIHtcbiAgICAgIGxpbmtUZXh0ID0gZWxlLmlubmVyVGV4dDtcbiAgICAgIGhyZWYgPSBlbGUuaHJlZjtcbiAgICB9IGVsc2UgaWYgKCBlbGUudGFnTmFtZSA9PT0gJ0xJJyApIHtcbiAgICAgIGxpbmtUZXh0ID0gZWxlLmlubmVyVGV4dDtcbiAgICB9IGVsc2UgaWYgKCBlbGUudGFnTmFtZSA9PT0gJ09MJyB8fCBlbGUudGFnTmFtZSA9PT0gJ1VMJyApIHtcbiAgICAgIGxpbmtUZXh0ID0gZWxlLmdldEF0dHJpYnV0ZSgnbGluay10ZXh0Jyk7XG4gICAgICBocmVmID0gZWxlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIEFycmF5LmZyb20oZWxlLmNoaWxkcmVuKSkge1xuICAgICAgICBsZXQgY2hpbGRJdGVtID0gdGhpcy5fbWFrZU5hdkl0ZW1UcmVlKGNoaWxkKTtcbiAgICAgICAgaWYgKCBjaGlsZEl0ZW0ubGlua1RleHQgKSBzdWJJdGVtcy5wdXNoKGNoaWxkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBsaW5rVGV4dCApIGxpbmtUZXh0ID0gbGlua1RleHQudHJpbSgpO1xuICAgIHJldHVybiB7bGlua1RleHQsIGhyZWYsIHN1Ykl0ZW1zLCBpc09wZW4sIG1vYmlsZVN0eWxlc307XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9yZW5kZXJOYXZJdGVtXG4gICAqIEBkZXNjcmlwdGlvbiBSZW5kZXJzIGEgbWVudSBpdGVtIGFuZCBhbGwgaXRzIGNoaWxkcmVuIHRvIHRoZSBzcGVjaWZpZWQgbWF4IGRlcHRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuYXZJdGVtIC0gQW4gaXRlbSBmcm9tIHRoZSAnbmF2SXRlbXMnIGVsZW1lbnQgcHJvcGVydHlcbiAgICogQHBhcmFtIHtBcnJheX0gbG9jYXRpb24gLSBDb29yZGluYXRlcyBvZiB0aGUgaXRlbSBpbiB0aGUgJ25hdkl0ZW1zJyBhcnJheS4gaS5lLiBbMCwgMSwgNF1cbiAgICogQHJldHVybnMge1RlbXBsYXRlUmVzdWx0fVxuICAgKi9cbiAgX3JlbmRlck5hdkl0ZW0obmF2SXRlbSwgbG9jYXRpb24pe1xuICAgIGNvbnN0IGRlcHRoID0gbG9jYXRpb24ubGVuZ3RoIC0gMTtcblxuICAgIC8vIFJlbmRlciBpdGVtIGFuZCBpdHMgc3VibmF2XG4gICAgaWYgKCB0aGlzLl9oYXNTdWJOYXYobmF2SXRlbSkgJiYgZGVwdGggPCB0aGlzLm1heERlcHRoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxsaSBcbiAgICAgICAgaWQ9XCJuYXYtLSR7bG9jYXRpb24uam9pbihcIi1cIil9XCJcbiAgICAgICAgLmtleT0ke2xvY2F0aW9ufVxuICAgICAgICAuaGFzbmF2PSR7dHJ1ZX1cbiAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9vbkl0ZW1Nb3VzZWVudGVyfSBcbiAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9vbkl0ZW1Nb3VzZWxlYXZlfVxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHRoaXMuX21ha2VMaUNsYXNzTWFwKG5hdkl0ZW0sIGRlcHRoKSl9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWVudS10b2dnbGVfX3dyYXBwZXIgJHtkZXB0aCA9PT0gMCA/IGAke3RoaXMuX2NsYXNzUHJlZml4fV9fdG9wLWxpbmtgIDogJyd9XCI+XG4gICAgICAgICAgPGEgXG4gICAgICAgICAgICBocmVmPSR7bmF2SXRlbS5ocmVmfVxuICAgICAgICAgICAgdGFiaW5kZXg9JHt0aGlzLl9zZXRUYWJJbmRleChkZXB0aCl9XG4gICAgICAgICAgICBAZm9jdXM9JHt0aGlzLl9vbkl0ZW1Gb2N1c30+XG4gICAgICAgICAgICAke25hdkl0ZW0ubGlua1RleHR9PHNwYW4gY2xhc3M9XCIke3RoaXMuX2NsYXNzUHJlZml4fV9fc3VibWVudS1pbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fdG9nZ2xlTW9iaWxlTWVudShsb2NhdGlvbil9XG4gICAgICAgICAgY2xhc3M9XCJzdWJtZW51LXRvZ2dsZSAke25hdkl0ZW0uaXNPcGVuID8gJ3N1Ym1lbnUtdG9nZ2xlLS1vcGVuJyA6ICcnfVwiIFxuICAgICAgICAgID9kaXNhYmxlZD0ke25hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgU3VibWVudVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VibWVudS10b2dnbGVfX2ljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwibWVudSAke25hdkl0ZW0uaXNPcGVuID8gXCJtZW51LS1vcGVuXCIgOiBcIlwifVwiIHN0eWxlPSR7c3R5bGVNYXAodGhpcy5nZXRJdGVtTW9iaWxlU3R5bGVzKGxvY2F0aW9uKSl9PlxuICAgICAgICAgICR7bmF2SXRlbS5zdWJJdGVtcy5tYXAoKHN1Ykl0ZW0sIGkpID0+IHRoaXMuX3JlbmRlck5hdkl0ZW0oc3ViSXRlbSwgbG9jYXRpb24uY29uY2F0KFtpXSkpKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgYDtcbiAgICB9XG5cbiAgICAvLyByZW5kZXIgYXMgbm9ybWFsIGxpbmtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxsaSBpZD1cIm5hdi0tJHtsb2NhdGlvbi5qb2luKFwiLVwiKX1cIiAua2V5PSR7bG9jYXRpb259IGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5fbWFrZUxpQ2xhc3NNYXAobmF2SXRlbSwgZGVwdGgpKX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke2RlcHRoID09PSAwID8gYCR7dGhpcy5fY2xhc3NQcmVmaXh9X190b3AtbGlua2A6ICcnIH1cIj5cbiAgICAgICAgICAke25hdkl0ZW0uaHJlZiA/IGh0bWxgXG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgaHJlZj0ke25hdkl0ZW0uaHJlZn0gXG4gICAgICAgICAgICAgIEBmb2N1cz0ke3RoaXMuX29uSXRlbUZvY3VzfVxuICAgICAgICAgICAgICB0YWJpbmRleD0ke3RoaXMuX3NldFRhYkluZGV4KGRlcHRoKX0+XG4gICAgICAgICAgICAgICR7bmF2SXRlbS5saW5rVGV4dH08L2E+XG4gICAgICAgICAgYCA6IGh0bWxgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7dGhpcy5fY2xhc3NQcmVmaXh9X19ub2xpbmtcIj4ke25hdkl0ZW0ubGlua1RleHR9PC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NldFRhYkluZGV4XG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSB0YWIgaW5kZXggb2YgbWVudSBsaW5rc1xuICAgKiBAcGFyYW0ge051bWJlcn0gZGVwdGggLSBMZXZlbCBvZiB0aGUgbWVudSBsaW5rXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuICBfc2V0VGFiSW5kZXgoZGVwdGg9MCl7XG4gICAgbGV0IGkgPSAwO1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNZWdhTWVudSgpICYmIFxuICAgICAgZGVwdGggPiAwICYmIFxuICAgICAgIXRoaXMuX21lZ2FJc09wZW4gJiZcbiAgICAgIHRoaXMuaXNEZXNrdG9wKClcbiAgICApIGkgPSAtMTtcblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX21ha2VMaUNsYXNzTWFwXG4gICAqIEBkZXNjcmlwdGlvbiBDbGFzc2VzIHRvIGJlIGFzc2lnbmVkIHRvIGVhY2ggTEkgZWxlbWVudCBpbiB0aGUgbmF2LlxuICAgKiBAcGFyYW0ge09iamVjdH0gbmF2SXRlbSAtIEFuIGl0ZW0gaW4gdGhlIG5hdkl0ZW1zIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVwdGggLSBEZXB0aCBvZiB0aGUgbmF2SXRlbVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgX21ha2VMaUNsYXNzTWFwKG5hdkl0ZW0sIGRlcHRoPTApe1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1tgZGVwdGgtJHtkZXB0aH1gXSA9IHRydWU7XG4gICAgaWYgKCBuYXZJdGVtLmlzT3BlbiApIGNsYXNzZXNbJ3NmLS1ob3ZlciddID0gdHJ1ZTtcbiAgICBpZiAoIG5hdkl0ZW0uaXNDbG9zaW5nICkgY2xhc3Nlcy5jbG9zaW5nID0gdHJ1ZTtcbiAgICBpZiAobmF2SXRlbS5tZWdhRm9jdXMpIGNsYXNzZXNbJ21lZ2EtZm9jdXMnXSA9IHRydWU7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfdG9nZ2xlTW9iaWxlTWVudVxuICAgKiBAZGVzY3JpcHRpb24gRXhwYW5kcy9jb2xsYXBzZXMgbW9iaWxlIHN1Ym5hdnMgd2l0aCBhbmltYXRpb24gb24gdXNlciBjbGljay5cbiAgICogQHBhcmFtIHtBcnJheX0gbmF2TG9jYXRpb24gLSBBcnJheSBjb29yZGluYXRlcyBvZiBjb3JyZXNwb25kaW5nIG5hdiBpdGVtXG4gICAqL1xuICBhc3luYyBfdG9nZ2xlTW9iaWxlTWVudShuYXZMb2NhdGlvbil7XG4gICAgaWYgKCB0aGlzLmlzRGVza3RvcCgpICkgcmV0dXJuO1xuICAgIGxldCBuYXZJdGVtID0gdGhpcy5nZXROYXZJdGVtKG5hdkxvY2F0aW9uKTtcbiAgICBpZiAoIG5hdkl0ZW0uaXNPcGVuICkge1xuICAgICAgdGhpcy5jbG9zZVN1Yk5hdihuYXZMb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlblN1Yk5hdihuYXZMb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uTmF2TW91c2VlbnRlclxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gdG9wLWxldmVsIG5hdiBlbGVtZW50LiBPcGVucyBtZWdhIG1lbnUgaW4gZGVza3RvcCB2aWV3XG4gICAqL1xuICBfb25OYXZNb3VzZWVudGVyKCl7XG4gICAgaWYgKCBcbiAgICAgIHRoaXMuaXNNb2JpbGUoKSB8fCBcbiAgICAgICF0aGlzLmlzTWVnYU1lbnUoKSApIFxuICAgICAgcmV0dXJuO1xuXG4gICAgaWYgKCB0aGlzLl9tZWdhVGltZW91dCApIGNsZWFyVGltZW91dCh0aGlzLl9tZWdhVGltZW91dCk7XG4gICAgdGhpcy5fbWVnYVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3Blbk1lZ2FOYXYoKTtcbiAgICB9LCB0aGlzLmhvdmVyRGVsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uTmF2TW91c2VsZWF2ZVxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gdG9wLWxldmVsIG5hdiBlbGVtZW50LiBDbG9zZXMgbWVnYSBtZW51IGluIGRlc2t0b3Agdmlld1xuICAgKi9cbiAgX29uTmF2TW91c2VsZWF2ZSgpe1xuICAgIGlmICggXG4gICAgICB0aGlzLmlzTW9iaWxlKCkgfHwgXG4gICAgICAhdGhpcy5pc01lZ2FNZW51KCkgKSBcbiAgICAgIHJldHVybjtcblxuICAgIGlmICggdGhpcy5fbWVnYVRpbWVvdXQgKSBjbGVhclRpbWVvdXQodGhpcy5fbWVnYVRpbWVvdXQpO1xuICAgIFxuICAgIHRoaXMuX21lZ2FUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlTWVnYU5hdigpO1xuICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25OYXZGb2N1c2luXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlcyB3aGVuIGZvY3VzIGVudGVycyB0aGUgbWFpbiBuYXYgZWxlbWVudC4gVXNlZCB0byBvcGVuIHRoZSBtZWdhbmF2XG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgX29uTmF2Rm9jdXNpbigpe1xuICAgIGlmICggXG4gICAgICB0aGlzLmlzTW9iaWxlKCkgfHwgXG4gICAgICAhdGhpcy5pc01lZ2FNZW51KCkgKSBcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICBpZiAoIHRoaXMuX21lZ2FJc09wZW4gKSByZXR1cm47XG4gICAgaWYgKCB0aGlzLl9tZWdhVGltZW91dCApIGNsZWFyVGltZW91dCh0aGlzLl9tZWdhVGltZW91dCk7XG4gICAgXG4gICAgdGhpcy5fbWVnYVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3Blbk1lZ2FOYXYoKTtcbiAgICB9LCB0aGlzLmhvdmVyRGVsYXkpO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkl0ZW1Nb3VzZWVudGVyXG4gICAqIEBkZXNjcmlwdGlvbiBCb3VuZCB0byBuYXYgbGkgaXRlbXMgd2l0aCBhIHN1Ym5hdlxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFxuICAgKi9cbiAgX29uSXRlbU1vdXNlZW50ZXIoZSl7XG4gICAgaWYgKCB0aGlzLmlzTW9iaWxlKCkgKSByZXR1cm47XG4gICAgdGhpcy5vcGVuU3ViTmF2KGUudGFyZ2V0LmtleSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JdGVtRm9jdXNcbiAgICogQGRlc2NyaXB0aW9uIEJvdW5kIHRvIG5hdiBhIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgXG4gICAqL1xuICBfb25JdGVtRm9jdXMoZSl7XG4gICAgaWYgKCB0aGlzLmlzTW9iaWxlKCkgKSByZXR1cm47XG4gICAgY29uc3QgTEkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoTEkuaGFzbmF2KSB7XG4gICAgICB0aGlzLm9wZW5TdWJOYXYoTEkua2V5KTtcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLmlzTWVnYU1lbnUoKSAmJiB0aGlzLl9tZWdhSXNPcGVuKSB7XG4gICAgICB0aGlzLl9zZXRNZWdhRm9jdXMoTEkua2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2V0TWVnYUZvY3VzXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBjdXN0b20gc3R5bGluZyB0byBtZWdhbmF2IGl0ZW0gd2hlbiBmb2N1c2VkIHRvIGZpeCBidWcgaW4gc2l0ZWZhcm0gY29kZS5cbiAgICogQHBhcmFtIHtBcnJheX0gbmF2TG9jYXRpb24gLSBDb29yZGluYXRlcyBvZiB0aGUgaXRlbSBpbiB0aGUgJ25hdkl0ZW1zJyBhcnJheS4gaS5lLiBbMCwgMSwgNF0uXG4gICAqL1xuICBfc2V0TWVnYUZvY3VzKG5hdkxvY2F0aW9uKXtcbiAgICB0aGlzLm5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4gbmF2Lm1lZ2FGb2N1cyA9IGZhbHNlKTtcbiAgICBpZiAoIFxuICAgICAgdHlwZW9mIG5hdkxvY2F0aW9uICE9PSAnb2JqZWN0JyB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkobmF2TG9jYXRpb24pIHx8XG4gICAgICBuYXZMb2NhdGlvbi5sZW5ndGggPCAxXG4gICAgKSByZXR1cm47XG4gICAgbGV0IG5hdkl0ZW0gPSB0aGlzLmdldE5hdkl0ZW0oW25hdkxvY2F0aW9uWzBdXSk7XG4gICAgbmF2SXRlbS5tZWdhRm9jdXMgPSB0cnVlO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBvcGVuTWVnYU5hdlxuICAgKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIG1lZ2FuYXYgbWVudVxuICAgKi9cbiAgb3Blbk1lZ2FOYXYoKSB7XG4gICAgdGhpcy5fbWVnYUlzT3BlbiA9IHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNsb3NlTWVnYU5hdlxuICAgKiBAZGVzY3JpcHRpb24gQ2xvc2VzIHRoZSBtZWdhbmF2IG1lbnVcbiAgICovXG4gIGNsb3NlTWVnYU5hdigpe1xuICAgIHRoaXMuX21lZ2FJc09wZW4gPSBmYWxzZTtcbiAgfVxuICBcblxuICAvKipcbiAgICogQG1ldGhvZCBvcGVuU3ViTmF2XG4gICAqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgc3BlY2lmaWVkIHN1Ym5hdlxuICAgKiBAcGFyYW0ge0FycmF5fSBuYXZMb2NhdGlvbiAtIENvb3JkaW5hdGVzIG9mIHRoZSBpdGVtIGluIHRoZSAnbmF2SXRlbXMnIGFycmF5LiBpLmUuIFswLCAxLCA0XS5cbiAgICogQHJldHVybnMgXG4gICAqL1xuICBhc3luYyBvcGVuU3ViTmF2KG5hdkxvY2F0aW9uKXtcblxuICAgIC8vIG5vbi1tZWdhIG1lbnVcbiAgICBpZiAoIFxuICAgICAgdHlwZW9mIG5hdkxvY2F0aW9uICE9PSAnb2JqZWN0JyB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkobmF2TG9jYXRpb24pIHx8XG4gICAgICBuYXZMb2NhdGlvbi5sZW5ndGggPT09IDBcbiAgICApIHJldHVybjtcbiAgICBsZXQgbmF2SXRlbSA9IHRoaXMuZ2V0TmF2SXRlbShuYXZMb2NhdGlvbik7XG4gICAgaWYgKCAhbmF2SXRlbSApIHJldHVybjtcblxuICAgIC8vIE9wZW4gb24gbW9iaWxlXG4gICAgaWYgKCB0aGlzLmlzTW9iaWxlKCkgKSB7XG4gICAgICBsZXQgbmF2ID0gdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKGBuYXYtLSR7bmF2TG9jYXRpb24uam9pbihcIi1cIil9YCk7XG4gICAgICBpZiAoICFuYXYgKSByZXR1cm47XG4gICAgICBsZXQgdWwgPSBuYXYucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICAgIGlmICggIXVsICkgcmV0dXJuO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzVHJhbnNpdGlvbmluZyApIHJldHVybjtcbiAgICAgIG5hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxuICAgICAgLy8gR2V0IGV4cGFuZGVkIGhlaWdodFxuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIG5hdkl0ZW0ubW9iaWxlU3R5bGVzLmhlaWdodCA9IDAgKyBcInB4XCI7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICBjb25zdCBleHBhbmRlZEhlaWdodCA9IHVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcblxuICAgICAgLy8gU2V0IGV4cGFuZGVkIGhlaWdodFxuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuaGVpZ2h0ID0gZXhwYW5kZWRIZWlnaHQ7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG5cbiAgICAgIC8vIFJlbW92ZSB0cmFuc2l0aW9uIHN0YXRlIGFmdGVyIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgdGhpcy5fY29tcGxldGVNb2JpbGVUcmFuc2l0aW9uKG5hdkl0ZW0pO1xuXG5cbiAgICAvLyBPcGVuIG9uIGRlc2t0b3BcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBtZWdhIG1lbnVcbiAgICAgIGlmICggdGhpcy5pc01lZ2FNZW51KCkgKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsZWFyTW9iaWxlU3R5bGVzKG5hdkl0ZW0pO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzQ2xvc2luZyApIHtcbiAgICAgICAgbmF2SXRlbS5pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIG5hdkl0ZW0udGltZW91dCApIGNsZWFyVGltZW91dChuYXZJdGVtLnRpbWVvdXQpO1xuICAgICAgaWYgKCBuYXZJdGVtLmlzT3BlbiApIHJldHVybjtcbiAgXG4gICAgICBuYXZJdGVtLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbmF2SXRlbS5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2NvbXBsZXRlTW9iaWxlVHJhbnNpdGlvblxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aW1lb3V0IHRvIHJlbW92ZSBhbmltYXRpb24gc3R5bGVzIGZyb20gbW9iaWxlIHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG5hdkl0ZW0gLSBNZW1iZXIgJ25hdkl0ZW1zJyBlbGVtZW50IHByb3BlcnR5LlxuICAgKi9cbiAgX2NvbXBsZXRlTW9iaWxlVHJhbnNpdGlvbihuYXZJdGVtKXtcbiAgICBuYXZJdGVtLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5hdkl0ZW0ubW9iaWxlU3R5bGVzID0ge307XG4gICAgICBuYXZJdGVtLmlzT3BlbiA9ICFuYXZJdGVtLmlzT3BlbjtcbiAgICAgIG5hdkl0ZW0uaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzTWVnYU1lbnVcbiAgICogQGRlc2NyaXB0aW9uIERvZXMgdGhpcyBlbGVtZW50IHVzZSB0aGUgbWVnYSBtZW51P1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGlzTWVnYU1lbnUoKXtcbiAgICBpZiAoIHRoaXMubmF2VHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA9PT0gJ21lZ2EnKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JdGVtTW91c2VsZWF2ZVxuICAgKiBAZGVzY3JpcHRpb24gQm91bmQgdG8gbmF2IGxpIGl0ZW1zIHdpdGggYSBzdWJuYXZcbiAgICogQHBhcmFtIHtFdmVudH0gZSBcbiAgICovXG4gIF9vbkl0ZW1Nb3VzZWxlYXZlKGUpe1xuICAgIGlmICggdGhpcy5pc01vYmlsZSgpIHx8IHRoaXMuaXNNZWdhTWVudSgpICkgcmV0dXJuO1xuICAgIHRoaXMuY2xvc2VTdWJOYXYoZS50YXJnZXQua2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbk5hdkZvY3Vzb3V0XG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byB0aGUgdG9wLWxldmVsIG5hdiBlbGVtZW50LiBDbG9zZXMgc3VibmF2IGlmIGl0IGRvZXNuJ3QgY29udGFpbiBmb2N1c2VkIGxpbmsuXG4gICAqL1xuICBfb25OYXZGb2N1c291dCgpe1xuICAgIGlmICggdGhpcy5pc01vYmlsZSgpICkgcmV0dXJuO1xuICAgIGlmICggdGhpcy5pc01lZ2FNZW51KCkgKSB7XG4gICAgICBpZiAoIHRoaXMuX21lZ2FUaW1lb3V0ICkgY2xlYXJUaW1lb3V0KHRoaXMuX21lZ2FUaW1lb3V0KTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRFbGUgPSB0aGlzLnJlbmRlclJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKCBmb2N1c2VkRWxlICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tZWdhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmF2SXRlbXMuZm9yRWFjaCgobmF2KSA9PiBuYXYubWVnYUZvY3VzID0gZmFsc2UpO1xuICAgICAgICAgIHRoaXMuY2xvc2VNZWdhTmF2KCk7XG4gICAgICAgIH0sIHRoaXMuaG92ZXJEZWxheSk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb2N1c2VkRWxlID0gdGhpcy5yZW5kZXJSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICggIWZvY3VzZWRFbGUgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUFsbFN1Yk5hdnMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBlbGUgPSBmb2N1c2VkRWxlO1xuICAgICAgICB3aGlsZSAoIFxuICAgICAgICAgIGVsZSAmJlxuICAgICAgICAgIGVsZS50YWdOYW1lICE9PSB0aGlzLnRhZ05hbWUgJiZcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShlbGUua2V5KSBcbiAgICAgICAgKXtcbiAgICAgICAgICBlbGUgPSBlbGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoICFlbGUua2V5ICkgcmV0dXJuO1xuICAgICAgICBsZXQgbmF2TG9jYXRpb24gPSBbLi4uZWxlLmtleV07XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBuYXZMb2NhdGlvbi5wb3AoKTtcbiAgICAgICAgbGV0IG5hdlNpYmxpbmdzID0gbmF2TG9jYXRpb24ubGVuZ3RoID09IDAgPyB0aGlzLm5hdkl0ZW1zIDogdGhpcy5nZXROYXZJdGVtKG5hdkxvY2F0aW9uKS5zdWJJdGVtcztcbiAgICAgICAgbmF2U2libGluZ3MuZm9yRWFjaCgoc2libGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICggaSAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICBzaWJsaW5nLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbFN1Yk5hdnMoc2libGluZy5zdWJJdGVtcywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNsb3NlU3ViTmF2XG4gICAqIEBkZXNjcmlwdGlvbiBDbG9zZXMgYSBzdWJuYXYgZ2l2ZW4gaXRzIGNvb3JkaW5hdGVzIFxuICAgKiBAcGFyYW0ge0FycmF5fSBuYXZMb2NhdGlvbiAtIENvb3JkaW5hdGVzIG9mIHRoZSBpdGVtIGluIHRoZSAnbmF2SXRlbXMnIGFycmF5LiBpLmUuIFswLCAxLCA0XS5cbiAgICogQHJldHVybnMgXG4gICAqL1xuICBhc3luYyBjbG9zZVN1Yk5hdihuYXZMb2NhdGlvbil7XG5cbiAgICBpZiAoIFxuICAgICAgdHlwZW9mIG5hdkxvY2F0aW9uICE9PSAnb2JqZWN0JyB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkobmF2TG9jYXRpb24pIHx8XG4gICAgICBuYXZMb2NhdGlvbi5sZW5ndGggPT09IDBcbiAgICApIHJldHVybjtcbiAgICBsZXQgbmF2SXRlbSA9IHRoaXMuZ2V0TmF2SXRlbShuYXZMb2NhdGlvbik7XG4gICAgaWYgKCAhbmF2SXRlbSApIHJldHVybjtcblxuICAgIC8vIGNsb3NlIG9uIG1vYmlsZVxuICAgIGlmICggdGhpcy5pc01vYmlsZSgpICkge1xuICAgICAgbGV0IG5hdiA9IHRoaXMucmVuZGVyUm9vdC5nZXRFbGVtZW50QnlJZChgbmF2LS0ke25hdkxvY2F0aW9uLmpvaW4oXCItXCIpfWApO1xuICAgICAgaWYgKCAhbmF2ICkgcmV0dXJuO1xuICAgICAgbGV0IHVsID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICBpZiAoICF1bCApIHJldHVybjtcbiAgICAgIGlmICggbmF2SXRlbS5pc1RyYW5zaXRpb25pbmcgKSByZXR1cm47XG4gICAgICBuYXZJdGVtLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbiAgICAgIC8vIFNldCBleHBhbmRlZCBoZWlnaHRcbiAgICAgIG5hdkl0ZW0ubW9iaWxlU3R5bGVzLmhlaWdodCA9IHVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIG5hdkl0ZW0ubW9iaWxlU3R5bGVzLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG5cbiAgICAgIC8vIFNldCBoZWlnaHQgdG8gMCBieSByZXF1ZXN0aW5nIGFsbCBvZiB0aGUgYW5pbWF0aW9uIGZyYW1lcyA6LShcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0cmFuc2l0aW9uIHN0YXRlIGFmdGVyIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVNb2JpbGVUcmFuc2l0aW9uKG5hdkl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgXG5cbiAgICAvLyBjbG9zZSBvbiBkZXNrdG9wXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gbWVnYSBtZW51XG4gICAgICBpZiAoIHRoaXMuaXNNZWdhTWVudSgpICl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLmNsZWFyTW9iaWxlU3R5bGVzKG5hdkl0ZW0pO1xuICAgICAgaWYgKCBuYXZJdGVtLnRpbWVvdXQgKSBjbGVhclRpbWVvdXQobmF2SXRlbS50aW1lb3V0KTtcbiAgICAgIGlmICggIW5hdkl0ZW0uaXNPcGVuICkgcmV0dXJuO1xuICBcbiAgICAgIG5hdkl0ZW0uaXNDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgbmF2SXRlbS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5hdkl0ZW0uaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIG5hdkl0ZW0uaXNDbG9zaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfSwgdGhpcy5ob3ZlckRlbGF5ICsgdGhpcy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvc2VBbGxTdWJOYXZzXG4gICAqIEBkZXNjcmlwdGlvbiBSZWN1cnNpdmVseSBjbG9zZXMgYWxsIG5hdiBzdWJtZW51cyB3aXRoaW4gc3BlY2lmaWVkIG1lbnUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5hdkl0ZW1zIC0gVGhlIHN1Ykl0ZW1zIHByb3BlcnR5IG9mIGFueSBvYmplY3Qgd2l0aGluIHRoZSAnbmF2SXRlbXMnIGVsZW1lbnQgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVxdWVzdFVwZGF0ZSAtIFNob3VsZCBhbiB1cGRhdGUgYmUgcmVxdWVzdGVkIGFmdGVyIGVhY2ggc3VibmF2IGNsb3Npbmc/XG4gICAqL1xuICBjbG9zZUFsbFN1Yk5hdnMobmF2SXRlbXMsIHJlcXVlc3RVcGRhdGU9dHJ1ZSl7XG4gICAgaWYgKCAhbmF2SXRlbXMgKSBuYXZJdGVtcyA9IHRoaXMubmF2SXRlbXM7XG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICAgICAgaWYgKCBuYXZJdGVtLmlzT3BlbiApIHtcbiAgICAgICAgbmF2SXRlbS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCByZXF1ZXN0VXBkYXRlICkgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIG5hdkl0ZW0uc3ViSXRlbXMgKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxTdWJOYXZzKG5hdkl0ZW0uc3ViSXRlbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2hhc1N1Yk5hdlxuICAgKiBAZGVzY3JpcHRpb24gVXRpbGl0eSBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgaWYgYSBtZW51IGhhcyBzdWJpdGVtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gbmF2SXRlbSAtIEEgbWVtYmVyIG9mIHRoZSBuYXZJdGVtcyBhcnJheS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBfaGFzU3ViTmF2KG5hdkl0ZW0pe1xuICAgIGlmICggbmF2SXRlbSAmJiBuYXZJdGVtLnN1Ykl0ZW1zICYmIG5hdkl0ZW0uc3ViSXRlbXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXROYXZJdGVtXG4gICAqIEBkZXNjcmlwdGlvbiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBuYXZJdGVtcyBhcnJheS5cbiAgICogQHBhcmFtIHtBcnJheX0gbG9jYXRpb24gLSBDb29yZGluYXRlcyBvZiB0aGUgaXRlbSBpbiB0aGUgJ25hdkl0ZW1zJyBhcnJheS4gaS5lLiBbMCwgMSwgNF0uXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXROYXZJdGVtKGxvY2F0aW9uKXtcbiAgICBsZXQgYWNjZXNzb3IgPSBcInRoaXMubmF2SXRlbXNcIjtcbiAgICBpZiAoIGxvY2F0aW9uICYmIGxvY2F0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGFjY2Vzc29yICs9IFwiW1wiICsgbG9jYXRpb24uam9pbihcIl0uc3ViSXRlbXNbXCIpICsgXCJdXCI7XG4gICAgfVxuICAgIHJldHVybiBldmFsKGFjY2Vzc29yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEl0ZW1Nb2JpbGVTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgaW5saW5lIHN0eWxlcyBvbiBhIG5hdiBlbGVtZW50ICh1c2VkIGZvciBtb2JpbGUgdHJhbnNpdGlvbiBhbmltYXRpb24pXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxvY2F0aW9uIC0gQ29vcmRpbmF0ZXMgb2YgdGhlIGl0ZW0gaW4gdGhlICduYXZJdGVtcycgYXJyYXkuIGkuZS4gWzAsIDEsIDRdLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFN0eWxlIG1hcFxuICAgKi9cbiAgZ2V0SXRlbU1vYmlsZVN0eWxlcyhsb2NhdGlvbikge1xuICAgIGlmICggdGhpcy5pc0Rlc2t0b3AoKSApIHJldHVybiB7fTtcbiAgICBsZXQgbmF2SXRlbSA9IHRoaXMuZ2V0TmF2SXRlbShsb2NhdGlvbik7XG4gICAgaWYgKCAhbmF2SXRlbS5tb2JpbGVTdHlsZXMgKSByZXR1cm4ge307XG4gICAgcmV0dXJuIG5hdkl0ZW0ubW9iaWxlU3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xlYXJNb2JpbGVTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIFJlbW92ZXMgaW5saW5lIHN0eWxlcyBvbiBhIG5hdiBlbGVtZW50ICh1c2VkIGZvciBtb2JpbGUgdHJhbnNpdGlvbiBhbmltYXRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuYXZJdGVtIC0gTWVtYmVyIG9mIHRoZSB0aGlzLm5hdkl0ZW1zIGFycmF5XG4gICAqL1xuICBjbGVhck1vYmlsZVN0eWxlcyhuYXZJdGVtKXtcbiAgICBpZiAoXG4gICAgICBuYXZJdGVtICYmXG4gICAgICBuYXZJdGVtLm1vYmlsZVN0eWxlcyAmJiBcbiAgICAgIE9iamVjdC5rZXlzKG5hdkl0ZW0ubW9iaWxlU3R5bGVzKS5sZW5ndGggPiAwIFxuICAgICkge1xuICAgICAgbmF2SXRlbS5tb2JpbGVTdHlsZXMgPSB7fTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLXByaW1hcnktbmF2JywgVWNkVGhlbWVQcmltYXJ5TmF2KTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbm9ybWFsaXplU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanNcIjtcbmltcG9ydCBmb3JtU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanNcIjtcbmltcG9ydCBtZW51U3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzJfYmFzZV9jbGFzcy9fbWlzYy5jc3MuanNcIjtcbmltcG9ydCBwcmltYXJ5TmF2U3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19uYXYtcHJpbWFyeS5jc3MuanNcIjtcbmltcG9ydCBzdWJOYXZUb2dnbGVTdHlsZXMgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3N1Ym1lbnUtdG9nZ2xlLmNzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCBlbGVtZW50U3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3VibWVudS10b2dnbGUgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICBuYXYucHJpbWFyeS1uYXYtLW1lZ2EgbGkuZGVwdGgtMCA+IHVsLm1lbnUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgdWwubWVudSB1bC5tZW51IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIHVsLm1lbnUgbGkuc2YtLWhvdmVyID4gdWwubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdWwubWVudSBsaS5jbG9zaW5nID4gdWwubWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgLm1lZ2EtZm9jdXMgLnByaW1hcnktbmF2X190b3AtbGluayBhLCBcbiAgICAgIC5tZWdhLWZvY3VzIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTo6YmVmb3JlLCAubWVnYS1mb2N1cyBcbiAgICAgIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDEyOCk7XG4gICAgICB9XG4gICAgICAubWVnYS1mb2N1cyAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6Zm9jdXMsIFxuICAgICAgLm1lZ2EtZm9jdXMgLnByaW1hcnktbmF2X190b3AtbGluayBhOmZvY3VzOjpiZWZvcmUsIFxuICAgICAgLm1lZ2EtZm9jdXMgLnByaW1hcnktbmF2X190b3AtbGluayBhOmZvY3VzOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMCk7XG4gICAgICB9XG4gICAgICAubWVnYS1mb2N1cyA+IHVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUxLCAyMzcpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICB1bC5tZW51IHVsLm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIHVsLm1lbnUgdWwubWVudS5tZW51LS1vcGVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtcbiAgICBub3JtYWxpemVTdHlsZXMsXG4gICAgZm9ybVN0eWxlcyxcbiAgICBtZW51U3R5bGVzLFxuICAgIHByaW1hcnlOYXZTdHlsZXMsXG4gICAgc3ViTmF2VG9nZ2xlU3R5bGVzLFxuICAgIGVsZW1lbnRTdHlsZXNcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcbjxzdHlsZT5cbiAgdWwubWVudSB1bC5tZW51IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbiArIFwibXNcIn0sIGhlaWdodCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyBcIm1zXCJ9O1xuICB9XG4gIHVsLm1lbnUgbGkuc2YtLWhvdmVyID4gdWwubWVudSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyBcIm1zXCJ9ICR7dGhpcy5ob3ZlckRlbGF5ICsgXCJtc1wifSwgaGVpZ2h0ICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbiArIFwibXNcIn07XG4gIH1cblxuPC9zdHlsZT5cbjxuYXYgXG4gIGlkPSR7dGhpcy5fY2xhc3NQcmVmaXh9XG4gIGNsYXNzPVwiJHt0aGlzLmdldE5hdkNsYXNzZXMoKX1cIiBcbiAgQG1vdXNlZW50ZXI9JHt0aGlzLl9vbk5hdk1vdXNlZW50ZXJ9XG4gIEBtb3VzZWxlYXZlPSR7dGhpcy5fb25OYXZNb3VzZWxlYXZlfVxuICBAZm9jdXNvdXQ9JHt0aGlzLl9vbk5hdkZvY3Vzb3V0fVxuICBAZm9jdXNpbj0ke3RoaXMuX29uTmF2Rm9jdXNpbn1cbiAgYXJpYS1sYWJlbD1cIk1haW4gTWVudVwiPlxuICA8dWwgY2xhc3M9XCJtZW51XCI+XG4gICAgJHt0aGlzLm5hdkl0ZW1zLm1hcCgobmF2SXRlbSwgaSkgPT4gdGhpcy5fcmVuZGVyTmF2SXRlbShuYXZJdGVtLCBbaV0pKX1cbiAgPC91bD5cbjwvbmF2PlxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge01peGluLCBNdXRhdGlvbk9ic2VydmVyRWxlbWVudH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RsaWJQYWdlc1xuICogQGRlc2NyaXB0aW9uIHNpbWlsYXIgdG8gdGhlIG9sZCBpcm9uLXBhZ2VzIGVsZW1lbnQsIGFsbG93cyB5b3UgdG8gY29udHJvbCB3aGljaCBlbGVtZW50IGlzIHZpc2libGVcbiAqIGJhc2VkIG9uIGNoaWxkIGluZGV4IG9yIHRhZyBhdHRyaWJ1dGVcbiAqIFxuICogPHVjZGxpYi1wYWdlcyBzZWxlY3RlZD1cInBhZ2UyXCIgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpZFwiPlxuICogICA8ZGl2IGlkPVwicGFnZTFcIj5UZXN0IDE8L2Rpdj5cbiAqICAgPGRpdiBpZD1cInBhZ2UyXCI+VGVzdCAyPC9kaXY+XG4gKiA8L3VjZGxpYi1wYWdlcz5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkbGliUGFnZXMgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChNdXRhdGlvbk9ic2VydmVyRWxlbWVudCkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWQgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF0dHJGb3JTZWxlY3RlZCA6IHtcbiAgICAgICAgYXR0cmlidXRlOiAnYXR0ci1mb3Itc2VsZWN0ZWQnLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZEF0dHJpYnV0ZSA6IHtcbiAgICAgICAgYXR0cmlidXRlOiAnc2VsZWN0ZWQtYXR0cmlidXRlJyxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNyZWF0ZVJlbmRlclJvb3RcbiAgICogQGRlc2NyaXB0aW9uIG92ZXJyaWRlIGNyZWF0ZVJlbmRlclJvb3QsIG5vIG5lZWQgZm9yIHNoYWRvd2RvbVxuICAgKiBcbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmKCBwcm9wcy5oYXMoJ2F0dHJGb3JTZWxlY3RlZCcpIHx8IHByb3BzLmhhcygnc2VsZWN0ZWRBdHRyaWJ1dGUnKSB8fCBwcm9wcy5oYXMoJ3NlbGVjdGVkJykgKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2hpbGRMaXN0TXV0YXRpb25cbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCB3aGVuIGNoaWxkcmVuIGNoYW5nZSB2aWEgTXV0YXRpb25PYnNlcnZlckVsZW1lbnRcbiAgICogXG4gICAqIEBwYXJhbSB7RWxlbWVudExpc3R9IGNoaWxkcmVuIFxuICAgKi9cbiAgX29uQ2hpbGRMaXN0TXV0YXRpb24oY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQ2hhbmdlXG4gICAqIEBkZXNjcmlwdGlvbiB1cGRhdGUgdmlzaWJpbGl0eSBcbiAgICovXG4gIF9vbkNoYW5nZSgpIHtcbiAgICBsZXQgYXR0ciA9IHRoaXMuYXR0ckZvclNlbGVjdGVkIHx8ICdpZCc7XG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIGZpbmQgd2hhdCB0aGUgc2VsZWN0ZWQgYXR0cmlidXRlIGlzXG4gICAgaWYoIHRoaXMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlbGVjdGVkICE9PSBudWxsICkge1xuICAgICAgaWYoIHR5cGVvZiB0aGlzLnNlbGVjdGVkID09PSAnc3RyaW5nJyAmJiB0aGlzLnNlbGVjdGVkLm1hdGNoKC9cXGQrLykgKSB7XG4gICAgICAgIHNlbGVjdGVkID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFuZCBoaWRlL3Nob3cgY2hpbGRyZW5cbiAgICBsZXQgZm91bmQgPSB0aGlzLl91cGRhdGVWaXNpYmlsaXR5KHNlbGVjdGVkLCBhdHRyKTtcblxuICAgIC8vIGlmIG5vdGhpbmcgZm91bmQsIGNoZWNrIGZhbGxiYWNrIHNlbGVjdGlvblxuICAgIGlmKCAhZm91bmQgJiYgdGhpcy5mYWxsYmFja1NlbGVjdGlvbiApIHtcbiAgICAgIGlmKCB0eXBlb2YgdGhpcy5zZWxlY3RlZCA9PT0gJ3N0cmluZycgJiYgdGhpcy5zZWxlY3RlZC5tYXRjaCgvXFxkKy8pICkge1xuICAgICAgICBzZWxlY3RlZCA9IHBhcnNlSW50KHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLmZhbGxiYWNrU2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBmb3VuZCA9IHRoaXMuX3VwZGF0ZVZpc2liaWxpdHkoc2VsZWN0ZWQsIGF0dHIpO1xuICAgIH0gXG5cbiAgICBpZiggIWZvdW5kICkge1xuICAgICAgY29uc29sZS53YXJuKCd1Y2RsaWItcGFnZXMgd2FzIHVuYWJsZSBtYXRjaDogJywgc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF91cGRhdGVWaXNpYmlsaXR5XG4gICAqIEBkZXNjcmlwdGlvbiBydW4gdXBkYXRlIGxvb3AgYmFzZWQgb24gc2VsZWN0ZWQgdmFsdWUgYW5kIGF0dHJpYnV0ZSB0byB1c2UgaWZcbiAgICogc2VsZWN0ZWQgaXMgbm90IGEgbnVtYmVyLlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBzZWxlY3RlZCBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHIgXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgX3VwZGF0ZVZpc2liaWxpdHkoc2VsZWN0ZWQsIGF0dHIpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbLi4uIHRoaXMuY2hpbGRyZW5dO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCB1c2VJbmRleCA9ICh0eXBlb2Ygc2VsZWN0ZWQgPT09ICdudW1iZXInKTtcbiAgICBsZXQgdmFsO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGlmKCB1c2VJbmRleCApIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0KChpID09PSBzZWxlY3RlZCksIGNoaWxkcmVuW2ldLCB0aGlzLnNlbGVjdGVkQXR0cmlidXRlKTtcbiAgICAgICAgaWYoICFmb3VuZCApIGZvdW5kID0gKGkgPT09IHNlbGVjdGVkKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IGNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIHRoaXMuX3NlbGVjdCgodmFsID09PSBzZWxlY3RlZCksIGNoaWxkcmVuW2ldLCB0aGlzLnNlbGVjdGVkQXR0cmlidXRlKTtcbiAgICAgIGlmKCAhZm91bmQgKSBmb3VuZCA9ICh2YWwgPT09IHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfc2VsZWN0XG4gICAqIEBkZXNjcmlwdGlvbiBzZWxlY3QgYXR0cmlidXRlc1xuICAgKiBcbiAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZSBcbiAgICogQHBhcmFtIHtFbGVtZW50fSBjaGlsZCBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZSBcbiAgICovXG4gIF9zZWxlY3QodmFsdWUsIGNoaWxkLCBhdHRyaWJ1dGUpIHtcbiAgICBpZiggdmFsdWUgKSB7XG4gICAgICBpZiggYXR0cmlidXRlICkgY2hpbGQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlKTtcbiAgICAgIGVsc2UgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCBhdHRyaWJ1dGUgKSBjaGlsZC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGUpO1xuICAgICAgZWxzZSBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkbGliLXBhZ2VzJywgVWNkbGliUGFnZXMpOyIsImltcG9ydCBNaXhpbiBmcm9tICcuL21peGluLmpzJztcbmltcG9ydCB7TXV0YXRpb25PYnNlcnZlckVsZW1lbnR9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXIuanMnO1xuaW1wb3J0IHtNYWluRG9tRWxlbWVudH0gZnJvbSAnLi9tYWluLWRvbS1lbGVtZW50LmpzJztcblxuZXhwb3J0IHtNaXhpbiwgTXV0YXRpb25PYnNlcnZlckVsZW1lbnQsIE1haW5Eb21FbGVtZW50fTsiLCIvKipcbiAqIEBmdW5jdGlvbiBNYWluRG9tRWxlbWVudFxuICogQHBhcmFtIHtDbGFzc30gc3VwZXJDbGFzcyAtIExpdEVsZW1lbnQgb3IgY2hpbGQgY2xhc3MuXG4gKiBAZGVzY3JpcHRpb24gc2V0IHJlbmRlciBjb250ZXh0IGZvciBsaXQgZWxlbWVudCB0byBtYWluIERPTSBpbnN0ZWFkIG9mIHRoZVxuICogZGVmYXVsdCBzaGFkb3cgcm9vdFxuICogXG4gKiBAcmV0dXJucyB7Q2xhc3N9IExpdEVsZW1lbnQgdXBkYXRlZCBjcmVhdGVSZW5kZXJSb290IGZ1bmN0aW9uLlxuICovXG5jb25zdCBNYWluRG9tRWxlbWVudCA9IChzdXBlckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNyZWF0ZVJlbmRlclJvb3RcbiAgICogQGRlc2NyaXB0aW9uIHNldCB0aGUgcm9vdCBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gICAqIFxuICAgKiBAcmV0dXJucyB7TGl0RWxlbWVudH1cbiAgICovXG4gIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufTtcblxuZXhwb3J0IHtNYWluRG9tRWxlbWVudH07IiwiLyoqXG4gKiBGcm9tOlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE4MzkxOTgvYXBwbHlpbmctYmVoYXZpb3JzLXdpdGgtanMtbWl4aW5zLWluLXBvbHltZXItMlxuICoqL1xuY2xhc3MgTWl4aW5CdWlsZGVyIHsgIFxuICBjb25zdHJ1Y3RvcihzdXBlcmNsYXNzKSB7XG4gICAgdGhpcy5zdXBlcmNsYXNzID0gc3VwZXJjbGFzcztcbiAgfVxuICB3aXRoKC4uLm1peGlucykgeyBcbiAgICByZXR1cm4gbWl4aW5zLnJlZHVjZSgoYywgbWl4aW4pID0+IG1peGluKGMpLCB0aGlzLnN1cGVyY2xhc3MpO1xuICB9XG59XG5jb25zdCBNaXhpbiA9IChzdXBlcmNsYXNzKSA9PiBuZXcgTWl4aW5CdWlsZGVyKHN1cGVyY2xhc3MpO1xuXG4vLyBTZXQgZ2xvYmFsIGlmIGF2YWlsYWJsZVxuLy8gSHVtbW1tLi4uXG4vLyBpZiggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7IFxuLy8gICB3aW5kb3cuTWl4aW4gPSBNaXhpbjtcbi8vIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBNaXhpbjsiLCIvKipcbiAqIEBmdW5jdGlvbiBNdXRhdGlvbk9ic2VydmVyRWxlbWVudFxuICogQHBhcmFtIHtDbGFzc30gc3VwZXJDbGFzcyAtIExpdEVsZW1lbnQgb3IgY2hpbGQgY2xhc3MuXG4gKiBAZGVzY3JpcHRpb24gYWRkIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSBmb3IgbXV0YXRpb24gb2JzZXJ2ZXJcbiAqIFxuICogQHJldHVybnMge0NsYXNzfSBMaXRFbGVtZW50IHdpdGggbXV0YXRpb24gb2JzZXJ2ZXIgYXR0YWNoZWQuXG4gKi9cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXJFbGVtZW50ID0gKHN1cGVyQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBmaXJzdFVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIGNhbGxlZCBvbiBmaXJzdCBET00gcmVuZGVyLiAgQ2FsbCB0aGUgX29uQ2hpbGRMaXN0TXV0YXRpb24gbWV0aG9kXG4gICAqIFxuICAgKiBAcGFyYW0ge1NldH0gcHJvcHMgXG4gICAqL1xuICBmaXJzdFVwZGF0ZWQocHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQocHJvcHMpO1xuICAgIHRoaXMuX29uQ2hpbGRMaXN0TXV0YXRpb24odGhpcy5jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBjb25uZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB0aGlzLl9vbkNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7TXV0YXRpb25PYnNlcnZlckVsZW1lbnR9OyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSB3aW5kb3cuU2hhZG93Um9vdCAmJlxuICAgICh3aW5kb3cuU2hhZHlDU1MgPT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAgICdyZXBsYWNlJyBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzYWZlVG9rZW4pIHtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFuc1xuICAgIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICAvLyBOb3RlLCBpZiBgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzYCBpcyB0cnVlIHRoZW4gd2UgYXNzdW1lXG4gICAgICAgIC8vIENTU1N0eWxlU2hlZXQgaXMgY29uc3RydWN0YWJsZS5cbiAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiB0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5fc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG5jb25zdCBjc3NSZXN1bHRDYWNoZSA9IG5ldyBNYXAoKTtcbmNvbnN0IGdldENTU1Jlc3VsdCA9IChjc3NUZXh0KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGNzc1Jlc3VsdENhY2hlLmdldChjc3NUZXh0KTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3NzUmVzdWx0Q2FjaGUuc2V0KGNzc1RleHQsIChyZXN1bHQgPSBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ1NTUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IGAgK1xuICAgICAgICAgICAgYCR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgYCArXG4gICAgICAgICAgICBgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuYCk7XG4gICAgfVxufTtcbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEgW1tgY3NzYF1dIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gZ2V0Q1NTUmVzdWx0KHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSkpO1xufTtcbi8qKlxuICogVGVtcGxhdGUgdGFnIHdoaWNoIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzIFtbTGl0RWxlbWVudC5zdHlsZXMgfFxuICogYHN0eWxlc2BdXSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWxcbiAqIHN0cmluZyB2YWx1ZXMgbWF5IGJlIHVzZWQuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyBbW2B1bnNhZmVDU1NgXV1cbiAqIG1heSBiZSB1c2VkIGluc2lkZSBhIHRlbXBsYXRlIHN0cmluZyBwYXJ0LlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSBzdHJpbmdzLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IHN0cmluZ3NbMF1cbiAgICAgICAgOiB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICByZXR1cm4gZ2V0Q1NTUmVzdWx0KGNzc1RleHQpO1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xudmFyIF9mO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiBbW1JlYWN0aXZlRWxlbWVudF1dLlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gVE9ETyhzb3J2ZWxsKTogQWRkIGEgbGluayB0byB0aGUgZG9jcyBhYm91dCB1c2luZyBkZXYgdi4gcHJvZHVjdGlvbiBtb2RlLlxuICAgIGNvbnNvbGUud2FybihgUnVubmluZyBpbiBkZXYgbW9kZS4gRG8gbm90IHVzZSBpbiBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBsYXRmb3JtIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYSA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluVXNlKSAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBnbG9iYWxUaGlzWydyZWFjdGl2ZUVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2hhZG93IERPTSBpcyBiZWluZyBwb2x5ZmlsbGVkIHZpYSBTaGFkeURPTSBidXQgYCArXG4gICAgICAgICAgICBgdGhlIFxcYHBvbHlmaWxsLXN1cHBvcnRcXGAgbW9kdWxlIGhhcyBub3QgYmVlbiBsb2FkZWQuYCk7XG4gICAgfVxuICAgIHJlcXVlc3RVcGRhdGVUaGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGByZXF1ZXN0VXBkYXRlXFxgIG5vIGxvbmdlciByZXR1cm5zIGEgUHJvbWlzZS5gICtcbiAgICAgICAgICAgICAgICBgVXNlIFxcYHVwZGF0ZUNvbXBsZXRlXFxgIGluc3RlYWQuYCk7XG4gICAgICAgICAgICBpZiAob25mdWxmaWxsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9uZnVsZmlsbGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gJycgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19lbmFibGVDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIFByb3BlcnR5RGVjbGFyYXRpb24gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAqIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIHByb3BlcnR5IG9wdGlvblxuICAgICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICAgKiBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICAgKiAgIHN1cGVyLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAqICAgICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgICAqICAgICAgIHJldHVybiB7XG4gICAgICogICAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAqICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgICB9LFxuICAgICAqICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICAgIH1cbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIFByb3BlcnR5RGVjbGFyYXRpb24gdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGUgYGNyZWF0ZVByb3BlcnR5YC5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gVGhpcyBmb3Ivb2YgaXMgb2sgYmVjYXVzZSBwcm9wS2V5cyBpcyBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU2NyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFN0eWxlcyA9IHRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpO1xuICAgICAgICAvLyBERVYgbW9kZSB3YXJuaW5nc1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZCA9IChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkLiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhpcyB2ZXJzaW9uIG9mIFJlYWN0aXZlRWxlbWVudC5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgU2VlIHRoZSBjaGFuZ2Vsb2cgYXQgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvQ0hBTkdFTE9HLm1kYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFtgaW5pdGlhbGl6ZWAsIGByZXF1ZXN0VXBkYXRlSW50ZXJuYWxgLCBgX2dldFVwZGF0ZUNvbXBsZXRlYF0uZm9yRWFjaCgobmFtZSkgPT4gXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBjYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4gKHRoaXMuZW5hYmxlVXBkYXRpbmcgPSByZXMpKTtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAgICAgLy8gYHVwZGF0ZUNvbXBsZXRlYFxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jb25zdHJ1Y3Rvci5faW5pdGlhbGl6ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoaSkgPT4gaSh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fX2NvbnRyb2xsZXJzID0gW10pKS5wdXNoKGNvbnRyb2xsZXIpO1xuICAgICAgICAvLyBJZiBhIGNvbnRyb2xsZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkLFxuICAgICAgICAvLyBjYWxsIGhvc3RDb25uZWN0ZWQuIE5vdGUsIHJlLXVzaW5nIGV4aXN0ZW5jZSBvZiBgcmVuZGVyUm9vdGAgaGVyZVxuICAgICAgICAvLyAod2hpY2ggaXMgc2V0IGluIGNvbm5lY3RlZENhbGxiYWNrKSB0byBhdm9pZCB0aGUgbmVlZCB0byB0cmFjayBhXG4gICAgICAgIC8vIGZpcnN0IGNvbm5lY3RlZCBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIChfYiA9IGNvbnRyb2xsZXIuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gTm90ZSwgaWYgdGhlIGluZGV4T2YgaXMgLTEsIHRoZSA+Pj4gd2lsbCBmbGlwIHRoZSBzaWduIHdoaWNoIG1ha2VzIHRoZVxuICAgICAgICAvLyBzcGxpY2UgZG8gbm90aGluZy5cbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaWNlKHRoaXMuX19jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpID4+PiAwLCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5zZXQocCwgdGhpc1twXSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIHJlbmRlciBhbmQgYnkgZGVmYXVsdFxuICAgICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogY2hpbGROb2RlcywgcmV0dXJuIGB0aGlzYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XG4gICAgICAgIGFkb3B0U3R5bGVzKHJlbmRlclJvb3QsIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgICAqIGVsZW1lbnQgc3R5bGluZywgYW5kIGVuYWJsZXMgdXBkYXRpbmcuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290ID0gdGhpcy5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVVcGRhdGluZyh0cnVlKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgLy8gSWYgd2Ugd2VyZSBkaXNjb25uZWN0ZWQsIHJlLWVuYWJsZSB1cGRhdGluZyBieSByZXNvbHZpbmcgdGhlIHBlbmRpbmdcbiAgICAgICAgLy8gY29ubmVjdGlvbiBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiAodGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24gPSByKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzXG4gICAgICAgICAgICAuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IChfYiA9IChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHtuYW1lfSBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuIFRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbW92ZWQsIGJ1dCBpbiB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiBSZWFjdGl2ZUVsZW1lbnQsIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlID0gKF9jID0gKF9iID0gKF9hID0gY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogbnVsbCkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREUgPyByZXF1ZXN0VXBkYXRlVGhlbmFibGUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGRpc2Nvbm5lY3RlZCwgd2FpdCB1bnRpbCByZS1jb25uZWN0ZWQgdG8gZmx1c2ggYW4gdXBkYXRlXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgICAvLyBJZiBgcGVyZm9ybVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgdGltaW5nIG9mIHVwZGF0ZXMuIElmIHRoaXNcbiAgICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm90ZWN0ZWQgYXN5bmMgcGVyZm9ybVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5wZXJmb3JtVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBQcm9kdWNlIHdhcm5pbmcgaWYgYW55IGNsYXNzIHByb3BlcnRpZXMgYXJlIHNoYWRvd2VkIGJ5IGNsYXNzIGZpZWxkc1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93ZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApICYmICEoKF9hID0gdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhhcyhwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd2VkUHJvcGVydGllcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd2VkUHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogTGluayB0byBkb2NzIGV4cGxhbmF0aW9uIG9mIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHdpbGwgbm90IHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBmaWVsZHM6IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFRvIGZpeCB0aGlzIGlzc3VlLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBlaXRoZXIgaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBvciBhZGp1c3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgeW91ciBjb21waWxlciBzZXR0aW5nczsgZm9yIGV4YW1wbGUsIGZvciBUeXBlU2NyaXB0IHNldCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXGB1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkczogZmFsc2VcXGAgaW4geW91ciBcXGB0c2NvbmZpZy5qc29uXFxgLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQW4gdXBkYXRlIHdhcyByZXF1ZXN0ZWQgKGdlbmVyYWxseSBiZWNhdXNlIGEgcHJvcGVydHkgd2FzIHNldCkgYCArXG4gICAgICAgICAgICAgICAgYGFmdGVyIGFuIHVwZGF0ZSBjb21wbGV0ZWQsIGNhdXNpbmcgYSBuZXcgdXBkYXRlIHRvIGJlIHNjaGVkdWxlZC4gYCArXG4gICAgICAgICAgICAgICAgYFRoaXMgaXMgaW5lZmZpY2llbnQgYW5kIHNob3VsZCBiZSBhdm9pZGVkIHVubGVzcyB0aGUgbmV4dCB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYGNhbiBvbmx5IGJlIHNjaGVkdWxlZCBhcyBhIHNpZGUgZWZmZWN0IG9mIHRoZSBwcmV2aW91cyB1cGRhdGUuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGNvbXBsZXRlZCB1cGRhdGluZy5cbiAgICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgICAqIHVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuIFRoZSBQcm9taXNlIHJlc3VsdCBpcyBgZmFsc2VgIGlmXG4gICAgICogYSBwcm9wZXJ0eSB3YXMgc2V0IGluc2lkZSBgdXBkYXRlZCgpYC4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGFuXG4gICAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUbyBhd2FpdCBhZGRpdGlvbmFsIGFzeW5jaHJvbm91cyB3b3JrLCBvdmVycmlkZSB0aGUgYGdldFVwZGF0ZUNvbXBsZXRlYFxuICAgICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgICAqIGBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgdXBkYXRlIHJlc29sdmVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICAgIGFzeW5jIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAqICAgICAgIGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgYHVwZGF0ZWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZiA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZl0gPSB0cnVlO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHByb3BlcnRpZXMsIGluY2x1ZGluZyBhbnkgc3VwZXJjbGFzcyBwcm9wZXJ0aWVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHN0eWxlcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBzdHlsZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRTdHlsZXMgPSBbXTtcbi8qKlxuICogT3B0aW9ucyB1c2VkIHdoZW4gY2FsbGluZyBgYXR0YWNoU2hhZG93YC4gU2V0IHRoaXMgcHJvcGVydHkgdG8gY3VzdG9taXplXG4gKiB0aGUgb3B0aW9ucyBmb3IgdGhlIHNoYWRvd1Jvb3Q7IGZvciBleGFtcGxlLCB0byBjcmVhdGUgYSBjbG9zZWRcbiAqIHNoYWRvd1Jvb3Q6IGB7bW9kZTogJ2Nsb3NlZCd9YC5cbiAqXG4gKiBOb3RlLCB0aGVzZSBvcHRpb25zIGFyZSB1c2VkIGluIGBjcmVhdGVSZW5kZXJSb290YC4gSWYgdGhpcyBtZXRob2RcbiAqIGlzIGN1c3RvbWl6ZWQsIG9wdGlvbnMgc2hvdWxkIGJlIHJlc3BlY3RlZCBpZiBwb3NzaWJsZS5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gKi9cblJlYWN0aXZlRWxlbWVudC5zaGFkb3dSb290T3B0aW9ucyA9IHsgbW9kZTogJ29wZW4nIH07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9jID0gKF9iID0gZ2xvYmFsVGhpcylbJ3JlYWN0aXZlRWxlbWVudFBsYXRmb3JtU3VwcG9ydCddKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChfYiwgeyBSZWFjdGl2ZUVsZW1lbnQgfSk7XG4vLyBEZXYgbW9kZSB3YXJuaW5ncy4uLlxuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRGVmYXVsdCB3YXJuaW5nIHNldC5cbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlZFdhcm5pbmdzID0gWydjaGFuZ2UtaW4tdXBkYXRlJ107XG4gICAgY29uc3QgZW5zdXJlT3duV2FybmluZ3MgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICBpZiAoIWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZW5hYmxlZFdhcm5pbmdzJywgY3RvcikpKSB7XG4gICAgICAgICAgICBjdG9yLmVuYWJsZWRXYXJuaW5ncyA9IGN0b3IuZW5hYmxlZFdhcm5pbmdzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MucHVzaCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmRpc2FibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpO1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBSZWFjdGl2ZUVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2QgPSAoX2UgPSBnbG9iYWxUaGlzKVsncmVhY3RpdmVFbGVtZW50VmVyc2lvbnMnXSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKF9lWydyZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjAuMC1yYy4yJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdGl2ZS1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2ZhZmQ7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDIyODUxO1xufVxuZmllbGRzZXQgPiBsZWdlbmQge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpIGluc2V0O1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZiZjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmVkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblt0eXBlPXRleHRdLFxuW3R5cGU9c2VhcmNoXSxcblt0eXBlPXVybF0sXG5bdHlwZT1udW1iZXJdLFxudGV4dGFyZWEge1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5idXR0b24sXG5bdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmZvY3VzLFxuW3R5cGU9c3VibWl0XTpmb2N1cyB7XG4gIGNvbG9yOiAjMDBiMmUzO1xufVxuXG5bdHlwZT1jaGVja2JveF0sXG5bdHlwZT1yYWRpb10ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xufVxuXG5bdHlwZT1zZWFyY2hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLm1lbnUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tZW51IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tZW51IGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVudSBsaSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi52aWV3LWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjZTBmMztcbn1cblxuLnNmLXVuZGVybGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmYWZkO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcmltYXJ5LW5hdiB7XG4gIG1pbi1oZWlnaHQ6IDMuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbiAgLnByaW1hcnktbmF2IHVsIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnByaW1hcnktbmF2IGxpOmhvdmVyIHVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmVkO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnByaW1hcnktbmF2IGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhLCAucHJpbWFyeS1uYXYgbGk6Zm9jdXMtd2l0aGluID4gLnByaW1hcnktbmF2X190b3AtbGluayBhLCAucHJpbWFyeS1uYXYgbGk6aG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBjb2xvcjogIzAyMjg1MTtcbiAgfVxuICAucHJpbWFyeS1uYXYgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJpbWFyeS1uYXYgYSwgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmVhZjc7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2IGEsIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgfVxuICAucHJpbWFyeS1uYXYgYTpiZWZvcmUsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oOTMlIDAsIDExMCUgMCwgMTEwJSAxMDIlLCAwJSAxMDIlKTtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBhOmZvY3VzOmJlZm9yZSwgLnByaW1hcnktbmF2IGE6aG92ZXI6YmVmb3JlLCAucHJpbWFyeS1uYXZfX25vbGluazpmb2N1czpiZWZvcmUsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYgYTphZnRlciwgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oLTJweCAtMnB4LCAxMDAlIC0ycHgsIDclIDEwMiUsIC0ycHggMTAwJSk7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAucHJpbWFyeS1uYXYgYTpmb2N1czphZnRlciwgLnByaW1hcnktbmF2IGE6aG92ZXI6YWZ0ZXIsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmZvY3VzOmFmdGVyLCAucHJpbWFyeS1uYXZfX25vbGluazpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxufVxuLnByaW1hcnktbmF2IGE6aG92ZXIsIC5wcmltYXJ5LW5hdl9fbm9saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbi5wcmltYXJ5LW5hdiBhOmZvY3VzLFxuLnByaW1hcnktbmF2IGEgLmFjdGl2ZSwgLnByaW1hcnktbmF2X19ub2xpbms6Zm9jdXMsXG4ucHJpbWFyeS1uYXZfX25vbGluayAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEsIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLnByaW1hcnktbmF2X190b3AtbGluayBhOmhvdmVyLCAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAyMjg1MTtcbiAgfVxufVxuLnByaW1hcnktbmF2IGxpIGxpIGEsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGU5YWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnByaW1hcnktbmF2IGxpIGxpIGEsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnByaW1hcnktbmF2IGxpIGxpIGE6YmVmb3JlLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluazpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmJlZm9yZSwgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbms6YmVmb3JlIHtcbiAgICBjb2xvcjogI2ZmYmYwMDtcbiAgICBjb250ZW50OiBcIu+CqVwiO1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmZvY3VzOmJlZm9yZSwgLnByaW1hcnktbmF2IGxpIGxpIGE6aG92ZXI6YmVmb3JlLCBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluazpmb2N1czpiZWZvcmUsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgY29sb3I6ICMwMjI4NTE7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucHJpbWFyeS1uYXYgbGkgbGkgYSwgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIH1cbiAgLnByaW1hcnktbmF2IGxpIGxpIGE6Zm9jdXMsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xuICB9XG4gIC5wcmltYXJ5LW5hdiBsaSBsaSBhOmJlZm9yZSwgLnByaW1hcnktbmF2IGxpIGxpIGE6YWZ0ZXIsIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSwgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wcmltYXJ5LW5hdiBsaSBsaSBsaSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjllNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucHJpbWFyeS1uYXYtLWp1c3RpZnkgPiAubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tanVzdGlmeSBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnByaW1hcnktbmF2LS1qdXN0aWZ5IGxpOmxhc3QtY2hpbGQgLnByaW1hcnktbmF2X190b3AtbGluayBhLCAucHJpbWFyeS1uYXYtLWp1c3RpZnkgbGk6bGFzdC1jaGlsZCAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbiAgLnByaW1hcnktbmF2LS1qdXN0aWZ5IGE6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLWp1c3RpZnkgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByaW1hcnktbmF2LS1tZWdhIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDMuMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3M7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhLmlzLWhvdmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLW1lZ2EgYTphZnRlcixcbi5wcmltYXJ5LW5hdi0tbWVnYSAucHJpbWFyeS1uYXZfX25vbGluazphZnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhID4gLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiA5ZW07XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIGxpIGxpIGEsXG4ucHJpbWFyeS1uYXYtLW1lZ2EgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIGxpOmhvdmVyIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSxcbi5wcmltYXJ5LW5hdi0tbWVnYSBsaTpob3ZlciAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZjgwO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tbWVnYSBsaTpob3ZlciAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6YmVmb3JlLCAucHJpbWFyeS1uYXYtLW1lZ2EgbGk6aG92ZXIgLnByaW1hcnktbmF2X190b3AtbGluayBhOmFmdGVyLFxuLnByaW1hcnktbmF2LS1tZWdhIGxpOmhvdmVyIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbms6YmVmb3JlLFxuLnByaW1hcnktbmF2LS1tZWdhIGxpOmhvdmVyIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbms6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRmODA7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1tZWdhIGxpIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLW1lZ2EgbGkgLnByaW1hcnktbmF2X190b3AtbGluayBhOmhvdmVyOmJlZm9yZSwgLnByaW1hcnktbmF2LS1tZWdhIGxpIC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTpob3ZlcjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLW1lZ2EgLnByaW1hcnktbmF2X190b3AtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg1MTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjMTQ0NDdhO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggdWwgdWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA4NDA7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCB1bCB1bCB1bCB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgYSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIC5wcmltYXJ5LW5hdl9fbm9saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmVkO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpIGxpIGxpIGEsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaSBsaSBsaSAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlZDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaSBsaSBsaSBsaSBhLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgbGkgbGkgLnByaW1hcnktbmF2X19ub2xpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY5ZTY7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvcjphZnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAucHJpbWFyeS1uYXZfX3N1Ym1lbnUtaW5kaWNhdG9yOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZiZjAwO1xuICAgIGNvbnRlbnQ6IFwi74GUXCI7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvcjphZnRlciB7XG4gICAgY29sb3I6ICMwMjI4NTE7XG4gIH1cbiAgLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGkgbGkgbGkgLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IHVsLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnNmLS1ob3ZlciA+IHVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCAuc2YtLWhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgfVxuICAucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTpiZWZvcmUsIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhOmFmdGVyLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggbGk6aG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluazphZnRlcixcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGE6YmVmb3JlLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnNmLS1ob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYTphZnRlcixcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmJlZm9yZSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIsXG4ucHJpbWFyeS1uYXYtLXN1cGVyZmlzaCBsaTpob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgLnByaW1hcnktbmF2X19ub2xpbmsgLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvcjphZnRlcixcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIGEgLnByaW1hcnktbmF2X19zdWJtZW51LWluZGljYXRvcjphZnRlcixcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIC5zZi0taG92ZXIgPiAucHJpbWFyeS1uYXZfX3RvcC1saW5rIC5wcmltYXJ5LW5hdl9fbm9saW5rIC5wcmltYXJ5LW5hdl9fc3VibWVudS1pbmRpY2F0b3I6YWZ0ZXIge1xuICAgIGNvbG9yOiAjMDIyODUxO1xuICB9XG4gIC5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayBhLFxuLnByaW1hcnktbmF2LS1zdXBlcmZpc2ggLnNmLS1ob3ZlciA+IC5wcmltYXJ5LW5hdl9fdG9wLWxpbmsgYSxcbi5wcmltYXJ5LW5hdi0tc3VwZXJmaXNoIGxpOmhvdmVyID4gLnByaW1hcnktbmF2X190b3AtbGluayAucHJpbWFyeS1uYXZfX25vbGluayB7XG4gICAgY29sb3I6ICMwMjI4NTE7XG4gIH1cbn1cbi5wcmltYXJ5LW5hdiAuc3VibWVudS10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggI2ZmYmYwMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4ucGFnZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5wYWdlciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucGFnZXJfX2l0ZW0ge1xuICBtYXJnaW46IDAuMjVyZW0gMC4yNXJlbSAwLjI1cmVtIDA7XG59XG4ucGFnZXJfX2l0ZW0gYSwgLnBhZ2VyX19pdGVtLS1zdGF0aWMge1xuICBjb2xvcjogIzAwMzU3MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAycmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ucGFnZXJfX2l0ZW0gYTpob3ZlciwgLnBhZ2VyX19pdGVtLS1zdGF0aWM6aG92ZXIge1xuICBjb2xvcjogIzAwMTEyNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnBhZ2VyX19pdGVtIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZiZjAwO1xuICBjb2xvcjogIzAyMjg1MTtcbn1cbi5wYWdlcl9faXRlbS0tY3VycmVudCwgLnBhZ2VyX19pdGVtLS1jdXJyZW50IGEge1xuICBiYWNrZ3JvdW5kOiAjMTM2MzllO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdlcl9faXRlbS0tY3VycmVudDpob3ZlciwgLnBhZ2VyX19pdGVtLS1jdXJyZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZiZjAwO1xufVxuLnBhZ2VyX19pdGVtLS1wcmV2aW91cyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFnZXJfX2l0ZW0tLXByZXZpb3VzIGE6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGNvbnRlbnQ6IFwi74yKXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5wYWdlcl9faXRlbS0tbmV4dCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFnZXJfX2l0ZW0tLW5leHQgYTphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGNvbnRlbnQ6IFwi74yLXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5wYWdlci0tbWluaSAucGFnZXJfX2l0ZW0tLWN1cnJlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzRjNGM0YztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnBhZ2VyLS1taW5pIC5wYWdlcl9faXRlbS0tY3VycmVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5zdWJtZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICNmZmY7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMTBweCkge1xuICAuc3VibWVudS10b2dnbGUge1xuICAgIHdpZHRoOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zdWJtZW51LXRvZ2dsZV9faWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zdWJtZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc3VibWVudS10b2dnbGVfX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uc3VibWVudS10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggIzAyMjg1MTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmE6aG92ZXIgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5NzMwMDtcbn1cbi5zdWJtZW51LXRvZ2dsZS0tb3BlbiAuc3VibWVudS10b2dnbGVfX2ljb246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG4uc3VibWVudS10b2dnbGVfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5zdWJtZW51LXRvZ2dsZV9fd3JhcHBlciBhOmZpcnN0LWNoaWxkLFxuLnN1Ym1lbnUtdG9nZ2xlX193cmFwcGVyIC5ub2xpbms6Zmlyc3QtY2hpbGQge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3VibWVudS10b2dnbGVfX2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDgzMDtcbiAgbGVmdDogMzAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5zdWJtZW51LXRvZ2dsZV9faWNvbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDgzMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmE6aG92ZXIgLnN1Ym1lbnUtdG9nZ2xlX19pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmE6aG92ZXIgLnN1Ym1lbnUtdG9nZ2xlX19pY29uOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLyohIG5vcm1hbGl6ZS1zY3NzIHwgTUlUL0dQTHYyIExpY2Vuc2UgfCBiaXQubHkvbm9ybWFsaXplLXNjc3MgKi9cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5hcnRpY2xlLFxuYXNpZGUsXG5mb290ZXIsXG5oZWFkZXIsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gJ2gxJyBlbGVtZW50cyB3aXRoaW4gJ3NlY3Rpb24nIGFuZFxuICogJ2FydGljbGUnIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmZpZ2NhcHRpb24sXG5maWd1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAxICovXG4gIGhlaWdodDogMDtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxuICovXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qIExpbmtzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXG4gKi9cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xuICAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mICdib2xkZXInIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXG4gKi9cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cbiAqL1xuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cbiAqL1xubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuYXVkaW8sXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXG4gKi9cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqL1xuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICovXG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlICdhdWRpbycgYW5kICd2aWRlbydcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcbmh0bWwgW3R5cGU9YnV0dG9uXSxcblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xufVxuXG5idXR0b24sXG5bdHlwZT1idXR0b25dLFxuW3R5cGU9cmVzZXRdLFxuW3R5cGU9c3VibWl0XSB7XG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICAgKi9cbiAgLyoqXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAgICovXG59XG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cbiAqL1xuW3R5cGU9Y2hlY2tib3hdLFxuW3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5bdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC8qIDIgKi9cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gICAqL1xufVxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAzICovXG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAyICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDEgKi9cbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbnByb2dyZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cbiAqL1xuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbm1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU2NyaXB0aW5nXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuY2FudmFzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxuICovXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGRlblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmA7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xudmFyIF9mO1xuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUgW1tgTGl0RWxlbWVudGBdXSBiYXNlIGNsYXNzIGFuZFxuICogcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQgW1tgTGl0RWxlbWVudGBdXSBhbmQgW1tgaHRtbGBdXSBmcm9tIHRoaXMgbW9kdWxlIHRvIGNyZWF0ZSBhXG4gKiBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIFtbYFJlYWN0aXZlRWxlbWVudGBdXSBhbmQgYWRkcyBsaXQtaHRtbCB0ZW1wbGF0aW5nLlxuICogVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG8gYnVpbGRcbiAqIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIG5vQ2hhbmdlIH0gZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBleHBvcnQgUmVhY3RpdmVFbGVtZW50IGFzIFVwZGF0aW5nRWxlbWVudC4gTm90ZSxcbi8vIElFIHRyYW5zcGlsYXRpb24gcmVxdWlyZXMgZXhwb3J0aW5nIGxpa2UgdGhpcy5cbmV4cG9ydCBjb25zdCBVcGRhdGluZ0VsZW1lbnQgPSBSZWFjdGl2ZUVsZW1lbnQ7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2EgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0RWxlbWVudFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfZlsnbGl0RWxlbWVudFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzMuMC4wLXJjLjInKTtcbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIFtbYHByb3BlcnRpZXNgXV0gcHJvcGVydHkgb3IgdGhlIFtbYHByb3BlcnR5YF1dIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBSZWFjdGl2ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgICAgIC8vIHNoYWRvd1Jvb3QgYnkgY3JlYXRlUmVuZGVyUm9vdC4gQWRqdXN0IHRoZSByZW5kZXJCZWZvcmUgbm9kZSBzbyB0aGF0XG4gICAgICAgIC8vIGFueSBzdHlsZXMgaW4gTGl0IGNvbnRlbnQgcmVuZGVyIGJlZm9yZSBhZG9wdGVkU3R5bGVTaGVldHMuIFRoaXMgaXNcbiAgICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgICAgICAvLyB0aGUgc2hhZG93Um9vdC5cbiAgICAgICAgKF9hID0gKF9iID0gdGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYi5yZW5kZXJCZWZvcmUgPSByZW5kZXJSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgICAgIC8vIHVwZGF0ZXMgYXJlIGFsbG93ZWQgYWZ0ZXIgc3VwZXIudXBkYXRlLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGByZW5kZXJgXG4gICAgICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSByZW5kZXIodmFsdWUsIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gVE9ETyhrc2NoYWFmKTogQ29uc2lkZXIgZGVib3VuY2luZyBkaXJlY3RpdmUgZGlzY29ubmVjdGlvbiBzbyBlbGVtZW50IG1vdmVzXG4gICAgLy8gZG8gbm90IHRocmFzaCBkaXJlY3RpdmUgY2FsbGJhY2tzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzE0NTdcbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbkxpdEVsZW1lbnQuXyRsaXRFbGVtZW50JCA9IHRydWU7XG4vLyBJbnN0YWxsIGh5ZHJhdGlvbiBpZiBhdmFpbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oX2MgPSAoX2IgPSBnbG9iYWxUaGlzKVsnbGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0J10pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9lID0gKF9kID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNhbGwoX2QsIHsgTGl0RWxlbWVudCB9KTtcbi8vIERFViBtb2RlIHdhcm5pbmdzXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBOb3RlLCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGNsb3N1cmUgY29tcGlsYXRpb24sIHRoaXMgYWNjZXNzXG4gICAgLy8gbmVlZHMgdG8gYmUgYXMgYSBzdHJpbmcgcHJvcGVydHkgaW5kZXguXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBMaXRFbGVtZW50WydmaW5hbGl6ZSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCBmaW5hbGl6ZWQgPSBSZWFjdGl2ZUVsZW1lbnQuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCFmaW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZCA9IChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmpbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZC4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuIGBcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBhZGQgbGluayB0byBjaGFuZ2Vsb2cgd2hlbiBsb2NhdGlvbiBoYXMgc3RhYmlsaXplZC5cbiAgICAgICAgICAgICAgICAvLyArIFNlZSB0aGUgY2hhbmdlbG9nIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2Jsb2IvbWFpbi9wYWNrYWdlcy9saXQtZWxlbWVudC9DSEFOR0VMT0cubWRgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgW2ByZW5kZXJgLCBgZ2V0U3R5bGVzYF0uZm9yRWFjaCgobmFtZSkgPT4gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdhcm5SZW1vdmVkKHRoaXMsIG5hbWUpKTtcbiAgICAgICAgW2BhZG9wdFN0eWxlc2BdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLnByb3RvdHlwZSwgbmFtZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqYgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OpiA9IHtcbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHk6IChlbCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBfJGNoYW5nZWRQcm9wZXJ0aWVzOiAoZWwpID0+IGVsLl8kY2hhbmdlZFByb3BlcnRpZXMsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgY29uc3QgUGFydFR5cGUgPSB7XG4gICAgQVRUUklCVVRFOiAxLFxuICAgIENISUxEOiAyLFxuICAgIFBST1BFUlRZOiAzLFxuICAgIEJPT0xFQU5fQVRUUklCVVRFOiA0LFxuICAgIEVWRU5UOiA1LFxuICAgIEVMRU1FTlQ6IDYsXG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgdXNlci1mYWNpbmcgZGlyZWN0aXZlIGZ1bmN0aW9uIGZyb20gYSBEaXJlY3RpdmUgY2xhc3MuIFRoaXNcbiAqIGZ1bmN0aW9uIGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIHRoZSBkaXJlY3RpdmUncyByZW5kZXIoKSBtZXRob2QuXG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoYykgPT4gKC4uLnZhbHVlcykgPT4gKHtcbiAgICBfJGxpdERpcmVjdGl2ZSQ6IGMsXG4gICAgdmFsdWVzLFxufSk7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNyZWF0aW5nIGN1c3RvbSBkaXJlY3RpdmVzLiBVc2VycyBzaG91bGQgZXh0ZW5kIHRoaXMgY2xhc3MsXG4gKiBpbXBsZW1lbnQgYHJlbmRlcmAgYW5kL29yIGB1cGRhdGVgLCBhbmQgdGhlbiBwYXNzIHRoZWlyIHN1YmNsYXNzIHRvXG4gKiBgZGlyZWN0aXZlYC5cbiAqL1xuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoX3BhcnRJbmZvKSB7IH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fX3BhcnQgPSBwYXJ0O1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlSW5kZXggPSBhdHRyaWJ1dGVJbmRleDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kcmVzb2x2ZShwYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUocGFydCwgcHJvcHMpO1xuICAgIH1cbiAgICB1cGRhdGUoX3BhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlciguLi5wcm9wcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgbm9DaGFuZ2UgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUsIERpcmVjdGl2ZSwgUGFydFR5cGUsIH0gZnJvbSAnLi4vZGlyZWN0aXZlLmpzJztcbmNsYXNzIENsYXNzTWFwRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJ0SW5mbykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyKHBhcnRJbmZvKTtcbiAgICAgICAgaWYgKHBhcnRJbmZvLnR5cGUgIT09IFBhcnRUeXBlLkFUVFJJQlVURSB8fFxuICAgICAgICAgICAgcGFydEluZm8ubmFtZSAhPT0gJ2NsYXNzJyB8fFxuICAgICAgICAgICAgKChfYSA9IHBhcnRJbmZvLnN0cmluZ3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID4gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgY2xhc3NNYXAoKWAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgJyArXG4gICAgICAgICAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoY2xhc3NJbmZvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc0luZm8pXG4gICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGNsYXNzSW5mb1trZXldKVxuICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgdXBkYXRlKHBhcnQsIFtjbGFzc0luZm9dKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIGR5bmFtaWMgY2xhc3NlcyBvbiB0aGUgZmlyc3QgcmVuZGVyXG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c0NsYXNzZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNDbGFzc2VzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNsYXNzSW5mbykge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc0luZm9bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNDbGFzc2VzLmFkZChuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoY2xhc3NJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBwYXJ0LmVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICAvLyBSZW1vdmUgb2xkIGNsYXNzZXMgdGhhdCBubyBsb25nZXIgYXBwbHlcbiAgICAgICAgLy8gV2UgdXNlIGZvckVhY2goKSBpbnN0ZWFkIG9mIGZvci1vZiBzbyB0aGF0IHdlIGRvbid0IHJlcXVpcmUgZG93bi1sZXZlbFxuICAgICAgICAvLyBpdGVyYXRpb24uXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzQ2xhc3Nlcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIGNsYXNzSW5mbykpIHtcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzQ2xhc3Nlcy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgb3IgcmVtb3ZlIGNsYXNzZXMgYmFzZWQgb24gdGhlaXIgY2xhc3NNYXAgdmFsdWVcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNsYXNzSW5mbykge1xuICAgICAgICAgICAgLy8gV2UgZXhwbGljaXRseSB3YW50IGEgbG9vc2UgdHJ1dGh5IGNoZWNrIG9mIGB2YWx1ZWAgYmVjYXVzZSBpdCBzZWVtc1xuICAgICAgICAgICAgLy8gbW9yZSBjb252ZW5pZW50IHRoYXQgJycgYW5kIDAgYXJlIHNraXBwZWQuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICEhY2xhc3NJbmZvW25hbWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wcmV2aW91c0NsYXNzZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzQ2xhc3Nlcy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0NsYXNzZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgZHluYW1pYyBDU1MgY2xhc3Nlcy5cbiAqXG4gKiBUaGlzIG11c3QgYmUgdXNlZCBpbiB0aGUgYGNsYXNzYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCB1c2VkIGluXG4gKiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyBlYWNoIHByb3BlcnR5IGluIHRoZSBgY2xhc3NJbmZvYCBhcmd1bWVudCBhbmQgYWRkc1xuICogdGhlIHByb3BlcnR5IG5hbWUgdG8gdGhlIGVsZW1lbnQncyBgY2xhc3NMaXN0YCBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXNcbiAqIHRydXRoeTsgaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGZhbHNleSwgdGhlIHByb3BlcnR5IG5hbWUgaXMgcmVtb3ZlZCBmcm9tXG4gKiB0aGUgZWxlbWVudCdzIGBjbGFzc2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYHtmb286IGJhcn1gIGFwcGxpZXMgdGhlIGNsYXNzIGBmb29gIGlmIHRoZSB2YWx1ZSBvZiBgYmFyYCBpc1xuICogdHJ1dGh5LlxuICpcbiAqIEBwYXJhbSBjbGFzc0luZm9cbiAqL1xuZXhwb3J0IGNvbnN0IGNsYXNzTWFwID0gZGlyZWN0aXZlKENsYXNzTWFwRGlyZWN0aXZlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLW1hcC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IG5vQ2hhbmdlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlLCBEaXJlY3RpdmUsIFBhcnRUeXBlLCB9IGZyb20gJy4uL2RpcmVjdGl2ZS5qcyc7XG5jbGFzcyBTdHlsZU1hcERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocGFydEluZm8pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlcihwYXJ0SW5mbyk7XG4gICAgICAgIGlmIChwYXJ0SW5mby50eXBlICE9PSBQYXJ0VHlwZS5BVFRSSUJVVEUgfHxcbiAgICAgICAgICAgIHBhcnRJbmZvLm5hbWUgIT09ICdzdHlsZScgfHxcbiAgICAgICAgICAgICgoX2EgPSBwYXJ0SW5mby5zdHJpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgJyArXG4gICAgICAgICAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoc3R5bGVJbmZvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZUluZm8pLnJlZHVjZSgoc3R5bGUsIHByb3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgICAgcHJvcCA9IHByb3BcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGUgKyBgJHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuICAgIHVwZGF0ZShwYXJ0LCBbc3R5bGVJbmZvXSkge1xuICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSBwYXJ0LmVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3R5bGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gICAgICAgIC8vIFdlIHVzZSBmb3JFYWNoKCkgaW5zdGVhZCBvZiBmb3Itb2Ygc28gdGhhdCByZSBkb24ndCByZXF1aXJlIGRvd24tbGV2ZWxcbiAgICAgICAgLy8gaXRlcmF0aW9uLlxuICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmFtZSBpc24ndCBpbiBzdHlsZUluZm8gb3IgaXQncyBudWxsL3VuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHN0eWxlSW5mb1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIHJlc2V0IHVzaW5nIGVtcHR5IHN0cmluZyAodnMgbnVsbCkgYXMgSUUxMSBkb2VzIG5vdCBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdmlhIG51bGwgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50Q1NTSW5saW5lU3R5bGUvc3R5bGUjc2V0dGluZ19zdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW25hbWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0aWVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvXG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZShTdHlsZU1hcERpcmVjdGl2ZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xudmFyIF9mO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmlmIChERVZfTU9ERSkge1xuICAgIGNvbnNvbGUud2FybignbGl0LWh0bWwgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiEnKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJiAoKF9hID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5Vc2UpICYmXG4gICAgKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyB3aW5kb3cuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxUaGlzLnRydXN0ZWRUeXBlcztcbi8qKlxuICogT3VyIFRydXN0ZWRUeXBlUG9saWN5IGZvciBIVE1MIHdoaWNoIGlzIGRlY2xhcmVkIHVzaW5nIHRoZSBodG1sIHRlbXBsYXRlXG4gKiB0YWcgZnVuY3Rpb24uXG4gKlxuICogVGhhdCBIVE1MIGlzIGEgZGV2ZWxvcGVyLWF1dGhvcmVkIGNvbnN0YW50LCBhbmQgaXMgcGFyc2VkIHdpdGggaW5uZXJIVE1MXG4gKiBiZWZvcmUgYW55IHVudHJ1c3RlZCBleHByZXNzaW9ucyBoYXZlIGJlZW4gbWl4ZWQgaW4uIFRoZXJlZm9yIGl0IGlzXG4gKiBjb25zaWRlcmVkIHNhZmUgYnkgY29uc3RydWN0aW9uLlxuICovXG5jb25zdCBwb2xpY3kgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge1xuICAgICAgICBjcmVhdGVIVE1MOiAocykgPT4gcyxcbiAgICB9KVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgaWRlbnRpdHlGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBub29wU2FuaXRpemVyID0gKF9ub2RlLCBfbmFtZSwgX3R5cGUpID0+IGlkZW50aXR5RnVuY3Rpb247XG4vKiogU2V0cyB0aGUgZ2xvYmFsIHNhbml0aXplciBmYWN0b3J5LiAqL1xuY29uc3Qgc2V0U2FuaXRpemVyID0gKG5ld1Nhbml0aXplcikgPT4ge1xuICAgIGlmICghRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBvdmVyd3JpdGUgZXhpc3RpbmcgbGl0LWh0bWwgc2VjdXJpdHkgcG9saWN5LmAgK1xuICAgICAgICAgICAgYCBzZXRTYW5pdGl6ZURPTVZhbHVlRmFjdG9yeSBzaG91bGQgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZS5gKTtcbiAgICB9XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbmV3U2FuaXRpemVyO1xufTtcbi8qKlxuICogT25seSB1c2VkIGluIGludGVybmFsIHRlc3RzLCBub3QgYSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJLlxuICovXG5jb25zdCBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSAoKSA9PiB7XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbn07XG5jb25zdCBjcmVhdGVTYW5pdGl6ZXIgPSAobm9kZSwgbmFtZSwgdHlwZSkgPT4ge1xuICAgIHJldHVybiBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwobm9kZSwgbmFtZSwgdHlwZSk7XG59O1xuLy8gQWRkZWQgdG8gYW4gYXR0cmlidXRlIG5hbWUgdG8gbWFyayB0aGUgYXR0cmlidXRlIGFzIGJvdW5kIHNvIHdlIGNhbiBmaW5kXG4vLyBpdCBlYXNpbHkuXG5jb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vLyBUaGlzIG1hcmtlciBpcyB1c2VkIGluIG1hbnkgc3ludGFjdGljIHBvc2l0aW9ucyBpbiBIVE1MLCBzbyBpdCBtdXN0IGJlXG4vLyBhIHZhbGlkIGVsZW1lbnQgbmFtZSBhbmQgYXR0cmlidXRlIG5hbWUuIFdlIGRvbid0IHN1cHBvcnQgZHluYW1pYyBuYW1lcyAoeWV0KVxuLy8gYnV0IHRoaXMgYXQgbGVhc3QgZW5zdXJlcyB0aGF0IHRoZSBwYXJzZSB0cmVlIGlzIGNsb3NlciB0byB0aGUgdGVtcGxhdGVcbi8vIGludGVudGlvbi5cbmNvbnN0IG1hcmtlciA9IGBsaXQkJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoOSl9JGA7XG4vLyBTdHJpbmcgdXNlZCB0byB0ZWxsIGlmIGEgY29tbWVudCBpcyBhIG1hcmtlciBjb21tZW50XG5jb25zdCBtYXJrZXJNYXRjaCA9ICc/JyArIG1hcmtlcjtcbi8vIFRleHQgdXNlZCB0byBpbnNlcnQgYSBjb21tZW50IG1hcmtlciBub2RlLiBXZSB1c2UgcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuLy8gc3ludGF4IGJlY2F1c2UgaXQncyBzbGlnaHRseSBzbWFsbGVyLCBidXQgcGFyc2VzIGFzIGEgY29tbWVudCBub2RlLlxuY29uc3Qgbm9kZU1hcmtlciA9IGA8JHttYXJrZXJNYXRjaH0+YDtcbmNvbnN0IGQgPSBkb2N1bWVudDtcbi8vIENyZWF0ZXMgYSBkeW5hbWljIG1hcmtlci4gV2UgbmV2ZXIgaGF2ZSB0byBzZWFyY2ggZm9yIHRoZXNlIGluIHRoZSBET00uXG5jb25zdCBjcmVhdGVNYXJrZXIgPSAodiA9ICcnKSA9PiBkLmNyZWF0ZUNvbW1lbnQodik7XG5jb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHR5cGVvZiAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtTeW1ib2wuaXRlcmF0b3JdKSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuLy8gVGhlc2UgcmVnZXhlcyByZXByZXNlbnQgdGhlIGZpdmUgcGFyc2luZyBzdGF0ZXMgdGhhdCB3ZSBjYXJlIGFib3V0IGluIHRoZVxuLy8gVGVtcGxhdGUncyBIVE1MIHNjYW5uZXIuIFRoZXkgbWF0Y2ggdGhlICplbmQqIG9mIHRoZSBzdGF0ZSB0aGV5J3JlIG5hbWVkXG4vLyBhZnRlci5cbi8vIERlcGVuZGluZyBvbiB0aGUgbWF0Y2gsIHdlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUuIElmIHRoZXJlJ3Mgbm8gbWF0Y2gsXG4vLyB3ZSBzdGF5IGluIHRoZSBzYW1lIHN0YXRlLlxuLy8gTm90ZSB0aGF0IHRoZSByZWdleGVzIGFyZSBzdGF0ZWZ1bC4gV2UgdXRpbGl6ZSBsYXN0SW5kZXggYW5kIHN5bmMgaXRcbi8vIGFjcm9zcyB0aGUgbXVsdGlwbGUgcmVnZXhlcyB1c2VkLiBJbiBhZGRpdGlvbiB0byB0aGUgZml2ZSByZWdleGVzIGJlbG93XG4vLyB3ZSBhbHNvIGR5bmFtaWNhbGx5IGNyZWF0ZSBhIHJlZ2V4IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVuZCB0YWdzIGZvciByYXdcbi8vIHRleHQgZWxlbWVudHMuXG4vKipcbiAqIEVuZCBvZiB0ZXh0IGlzOiBgPGAgZm9sbG93ZWQgYnk6XG4gKiAgIChjb21tZW50IHN0YXJ0KSBvciAodGFnKSBvciAoZHluYW1pYyB0YWcgYmluZGluZylcbiAqL1xuY29uc3QgdGV4dEVuZFJlZ2V4ID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nO1xuY29uc3QgQ09NTUVOVF9TVEFSVCA9IDE7XG5jb25zdCBUQUdfTkFNRSA9IDI7XG5jb25zdCBEWU5BTUlDX1RBR19OQU1FID0gMztcbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcbi8qKlxuICogVGhlIHRhZ0VuZCByZWdleCBtYXRjaGVzIHRoZSBlbmQgb2YgdGhlIFwiaW5zaWRlIGFuIG9wZW5pbmdcIiB0YWcgc3ludGF4XG4gKiBwb3NpdGlvbi4gSXQgZWl0aGVyIG1hdGNoZXMgYSBgPmAsIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlLCBvciB0aGUgZW5kXG4gKiBvZiB0aGUgc3RyaW5nIGFmdGVyIGEgc3BhY2UgKGF0dHJpYnV0ZS1uYW1lIHBvc2l0aW9uIGVuZGluZykuXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx0XFxuXFxmXFxyXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIChcIiksICgnKSwgXCI+XCIsXG4gKiAgICBcIj1cIiwgb3IgXCIvXCIuIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEhUTUwgc3BlYyB3aGljaCBhbHNvIGV4Y2x1ZGVzIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IHRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsICdnJyk7XG5jb25zdCBFTlRJUkVfTUFUQ0ggPSAwO1xuY29uc3QgQVRUUklCVVRFX05BTUUgPSAxO1xuY29uc3QgU1BBQ0VTX0FORF9FUVVBTFMgPSAyO1xuY29uc3QgUVVPVEVfQ0hBUiA9IDM7XG5jb25zdCBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCA9IC8nL2c7XG5jb25zdCBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCA9IC9cIi9nO1xuLyoqXG4gKiBNYXRjaGVzIHRoZSByYXcgdGV4dCBlbGVtZW50cy5cbiAqXG4gKiBDb21tZW50cyBhcmUgbm90IHBhcnNlZCB3aXRoaW4gcmF3IHRleHQgZWxlbWVudHMsIHNvIHdlIG5lZWQgdG8gc2VhcmNoIHRoZWlyXG4gKiB0ZXh0IGNvbnRlbnQgZm9yIG1hcmtlciBzdHJpbmdzLlxuICovXG5jb25zdCByYXdUZXh0RWxlbWVudCA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhKSQvaTtcbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG4vLyBUZW1wbGF0ZVBhcnQgdHlwZXNcbi8vIElNUE9SVEFOVDogdGhlc2UgbXVzdCBtYXRjaCB0aGUgdmFsdWVzIGluIFBhcnRUeXBlXG5jb25zdCBBVFRSSUJVVEVfUEFSVCA9IDE7XG5jb25zdCBDSElMRF9QQVJUID0gMjtcbmNvbnN0IFBST1BFUlRZX1BBUlQgPSAzO1xuY29uc3QgQk9PTEVBTl9BVFRSSUJVVEVfUEFSVCA9IDQ7XG5jb25zdCBFVkVOVF9QQVJUID0gNTtcbmNvbnN0IEVMRU1FTlRfUEFSVCA9IDY7XG5jb25zdCBDT01NRU5UX1BBUlQgPSA3O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBUZW1wbGF0ZVJlc3VsdCB3aXRoXG4gKiB0aGUgZ2l2ZW4gcmVzdWx0IHR5cGUuXG4gKi9cbmNvbnN0IHRhZyA9IChfJGxpdFR5cGUkKSA9PiAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiAoe1xuICAgIF8kbGl0VHlwZSQsXG4gICAgc3RyaW5ncyxcbiAgICB2YWx1ZXMsXG59KTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjb250YWluZXJcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZS5fJGxpdFBhcnQkO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHBhcnRPd25lck5vZGUuXyRsaXRQYXJ0JCA9IHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGVuZE5vZGUpLCBlbmROb2RlLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGVcbiAqIGBDaGlsZFBhcnRgcyBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHluYW1pYyB0YWcgbmFtZVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gUmV0dXJuZWQgYXMgYW4gYXJyYXkgZm9yIHRlcnNlbmVzc1xuICAgIHJldHVybiBbXG4gICAgICAgIHBvbGljeSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBvbGljeS5jcmVhdGVIVE1MKGh0bWxSZXN1bHQpXG4gICAgICAgICAgICA6IGh0bWxSZXN1bHQsXG4gICAgICAgIGF0dHJOYW1lcyxcbiAgICBdO1xufTtcbmNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHN0cmluZ3MsIF8kbGl0VHlwZSQ6IHR5cGUgfSwgb3B0aW9ucykge1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXR0ck5hbWVJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHBhcnRDb3VudCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xuICAgICAgICAvLyBDcmVhdGUgdGVtcGxhdGUgZWxlbWVudFxuICAgICAgICBjb25zdCBbaHRtbCwgYXR0ck5hbWVzXSA9IGdldFRlbXBsYXRlSHRtbChzdHJpbmdzLCB0eXBlKTtcbiAgICAgICAgdGhpcy5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoaHRtbCwgb3B0aW9ucyk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgLy8gUmVwYXJlbnQgU1ZHIG5vZGVzIGludG8gdGVtcGxhdGUgcm9vdFxuICAgICAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzdmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoLi4uc3ZnRWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXYWxrIHRoZSB0ZW1wbGF0ZSB0byBmaW5kIGJpbmRpbmcgbWFya2VycyBhbmQgY3JlYXRlIFRlbXBsYXRlUGFydHNcbiAgICAgICAgd2hpbGUgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpICE9PSBudWxsICYmIHBhcnRzLmxlbmd0aCA8IHBhcnRDb3VudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgaW4gc29tZSBicm93c2VycyAoVE9ETzogY2hlY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tpXSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgcGFzdCB0aGUgbWFya2VyIG5vZGUgd2UganVzdCBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogKytub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIGJlY2F1c2UgdGhpcyBtYXJrZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIHdhbGtlcidzIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUsIGl0IHdpbGwgYmUgd2Fsa2VkIHRvIGluIHRoZSBvdXRlciBsb29wIChhbmQgaWdub3JlZCksIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGFkanVzdCBub2RlSW5kZXggaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tsYXN0SW5kZXhdLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbWFya2VyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiBub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUGxhdGZvcm1TdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoaHRtbCwgX29wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIHZhbHVlLCBwYXJlbnQgPSBwYXJ0LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHZhciBfZDtcbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZSB2YWx1ZSBpcyBleHBsaWNpdGx5IG5vQ2hhbmdlLiBOb3RlLCB0aGlzIG1lYW5zIGFueVxuICAgIC8vIG5lc3RlZCBkaXJlY3RpdmUgaXMgc3RpbGwgYXR0YWNoZWQgYW5kIGlzIG5vdCBydW4uXG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlyZWN0aXZlID0gYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IChfYSA9IHBhcmVudC5fX2RpcmVjdGl2ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVthdHRyaWJ1dGVJbmRleF0gOiBwYXJlbnQuX19kaXJlY3RpdmU7XG4gICAgY29uc3QgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID0gaXNQcmltaXRpdmUodmFsdWUpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogdmFsdWUuXyRsaXREaXJlY3RpdmUkO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5fJHNldERpcmVjdGl2ZUNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY3VycmVudERpcmVjdGl2ZSwgZmFsc2UpO1xuICAgICAgICBpZiAobmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoKF9jID0gKF9kID0gcGFyZW50KS5fX2RpcmVjdGl2ZXMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChfZC5fX2RpcmVjdGl2ZXMgPSBbXSkpW2F0dHJpYnV0ZUluZGV4XSA9IGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgc2VwYXJhdGUgZnJvbSB0aGUgY29uc3RydWN0b3IgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBob2xkIG9udG8gaXQgd2l0aCBhbiBpbnN0YW5jZSBmaWVsZC5cbiAgICBfY2xvbmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jcmVhdGlvblNjb3BlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkKS5pbXBvcnROb2RlKGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmcmFnbWVudDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgIHdoaWxlICh0ZW1wbGF0ZVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KG5vZGUsIG5vZGUubmV4dFNpYmxpbmcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyB0ZW1wbGF0ZVBhcnQuY3Rvcihub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gRUxFTUVOVF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gKHRlbXBsYXRlUGFydCA9PT0gbnVsbCB8fCB0ZW1wbGF0ZVBhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlUGFydC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBDSElMRF9QQVJUO1xuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyB3aWxsIGJlIHBhdGNoZWQgb250byBDaGlsZFBhcnRzIHdoZW4gcmVxdWlyZWQgYnlcbiAgICAgICAgLy8gQXN5bmNEaXJlY3RpdmVcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgdGhpcy5fJGVuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbm5lY3Rpb24gc3RhdGUgZm9yIGFueSBgQXN5bmNEaXJlY3RpdmVzYCBjb250YWluZWRcbiAgICAgKiB3aXRoaW4gdGhpcyBwYXJ0IGFuZCBydW5zIHRoZWlyIGBkaXNjb25uZWN0ZWRgIG9yIGByZWNvbm5lY3RlZGAsIGFjY29yZGluZ1xuICAgICAqIHRvIHRoZSBgaXNDb25uZWN0ZWRgIGFyZ3VtZW50LlxuICAgICAqL1xuICAgIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGludG8gd2hpY2ggdGhlIHBhcnQgcmVuZGVycyBpdHMgY29udGVudC5cbiAgICAgKlxuICAgICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAgICogYC5wYXJlbnROb2RlYCwgcG9zc2libHkgYm9yZGVyZWQgYnkgJ21hcmtlciBub2RlcycgKGAuc3RhcnROb2RlYCBhbmRcbiAgICAgKiBgLmVuZE5vZGVgKS5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAgYXJlIG5vbi1udWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBiZXR3ZWVuIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCwgZXhjbHVzaXZlbHkuXG4gICAgICpcbiAgICAgKiAtIElmIGAuc3RhcnROb2RlYCBpcyBub24tbnVsbCBidXQgYC5lbmROb2RlYCBpcyBudWxsLCB0aGVuIHRoZSBwYXJ0J3NcbiAgICAgKiBjb250ZW50IGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBmb2xsb3dpbmcgYC5zdGFydE5vZGVgLCB1cCB0byBhbmRcbiAgICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgICAqIGAuc3RhcnROb2RlYCB3aWxsIGFsd2F5cyBiZSBub24tbnVsbC5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIGAucGFyZW50Tm9kZWAuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIE5vbi1yZW5kZXJpbmcgY2hpbGQgdmFsdWVzLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGRvIG5vdCByZW5kZXJcbiAgICAgICAgICAgIC8vIGVtcHR5IHRleHQgbm9kZXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggcHJldmVudGluZyBkZWZhdWx0IDxzbG90PlxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29udGVudC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLl8kbGl0VHlwZSQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2luc2VydChub2RlLCByZWYgPSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICByZXR1cm4gd3JhcCh3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGUpLmluc2VydEJlZm9yZShub2RlLCByZWYpO1xuICAgIH1cbiAgICBfY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgJiZcbiAgICAgICAgICAgICAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IChfYSA9IHRoaXMuXyRzdGFydE5vZGUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJyB8fCBwYXJlbnROb2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0KG5ldyBUZXh0KCcvKiBsaXQtaHRtbCB3aWxsIG5vdCB3cml0ZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdUZW1wbGF0ZVJlc3VsdHMgdG8gc2NyaXB0cyBhbmQgc3R5bGVzICovJykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy5fJGNvbW1pdHRlZFZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8gJiZcbiAgICAgICAgICAgICh0aGlzLl8kZW5kTm9kZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgID8gd3JhcChub2RlKS5uZXh0U2libGluZyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgIDogbm9kZSA9PT0gd3JhcCh0aGlzLl8kZW5kTm9kZSkucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRleHQgY29udGVudCwgZm9yIHNlY3VyaXR5IHB1cnBvc2VzIGl0IG1hdHRlcnMgYSBsb3RcbiAgICAgICAgICAgICAgICAvLyB3aGF0IHRoZSBwYXJlbnQgaXMuIEZvciBleGFtcGxlLCA8c3R5bGU+IGFuZCA8c2NyaXB0PiBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAgICAgICAgIC8vIHRleHQgbm9kZSBpbnRvIHRoZSBkb2N1bWVudCwgdGhlbiB3ZSBjYW4gc2FuaXRpemUgaXRzIGNvbnRlbnR4LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcih0ZXh0Tm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBfJGxpdFR5cGUkIH0gPSByZXN1bHQ7XG4gICAgICAgIC8vIElmICRsaXRUeXBlJCBpcyBhIG51bWJlciwgcmVzdWx0IGlzIGEgcGxhaW4gVGVtcGxhdGVSZXN1bHQgYW5kIHdlIGdldFxuICAgICAgICAvLyB0aGUgdGVtcGxhdGUgZnJvbSB0aGUgdGVtcGxhdGUgY2FjaGUuIElmIG5vdCwgcmVzdWx0IGlzIGFcbiAgICAgICAgLy8gQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdCBhbmQgXyRsaXRUeXBlJCBpcyBhIENvbXBpbGVkVGVtcGxhdGUgYW5kIHdlIG5lZWRcbiAgICAgICAgLy8gdG8gY3JlYXRlIHRoZSA8dGVtcGxhdGU+IGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGl0LlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiBfJGxpdFR5cGUkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyB0aGlzLl8kZ2V0VGVtcGxhdGUocmVzdWx0KVxuICAgICAgICAgICAgOiAoXyRsaXRUeXBlJC5lbCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKF8kbGl0VHlwZSQuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KF8kbGl0VHlwZSQuaCwgdGhpcy5vcHRpb25zKSksXG4gICAgICAgICAgICAgICAgXyRsaXRUeXBlJCk7XG4gICAgICAgIGlmICgoKF9hID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyR0ZW1wbGF0ZSkgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdGhpcyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBsYXRmb3JtU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBmYWxzZSwgdHJ1ZSwgZnJvbSk7XG4gICAgICAgIHdoaWxlIChzdGFydCAmJiBzdGFydCAhPT0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fc2V0RGlyZWN0aXZlQ29ubmVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXcgQXJyYXkoc3RyaW5ncy5sZW5ndGggLSAxKS5maWxsKG5vdGhpbmcpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFBST1BFUlRZX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gRVZFTlRfUEFSVDtcbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBuZXdMaXN0ZW5lciA9IChfYSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdGhpbmc7XG4gICAgICAgIGlmIChuZXdMaXN0ZW5lciA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IChuZXdMaXN0ZW5lciA9PT0gbm90aGluZyAmJiBvbGRMaXN0ZW5lciAhPT0gbm90aGluZykgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLnBhc3NpdmU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgICAgIC8vIHRvIGFkZCB0aGUgcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICAob2xkTGlzdGVuZXIgPT09IG5vdGhpbmcgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgb2xkTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy8gQmV3YXJlOiBJRTExIGFuZCBDaHJvbWUgNDEgZG9uJ3QgbGlrZSB1c2luZyB0aGUgbGlzdGVuZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBvcHRpb25zIG9iamVjdC4gRmlndXJlIG91dCBob3cgdG8gZGVhbCB3LyB0aGlzIGluIElFMTEgLSBtYXliZVxuICAgICAgICAgICAgLy8gcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgbmV3TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGRvIHdlIG5lZWQgdG8gZGVmYXVsdCB0byB0aGlzLmVsZW1lbnQ/XG4gICAgICAgICAgICAvLyBJdCdsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGUuY3VycmVudFRhcmdldGAuXG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCgoX2IgPSAoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9zZXREaXJlY3RpdmVDb25uZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqMgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OoyA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gaHlkcmF0ZVxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZCA9IChfYyA9IGdsb2JhbFRoaXMpWydsaXRIdG1sUGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2UgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0SHRtbFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IChfZlsnbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzIuMC4wLXJjLjMnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xhc3MtbWFwLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwXG4iLCJpbXBvcnRcIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2ltcG9ydFwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi9wYWdlLXVjZC10aGVtZS1wYWdpbmF0aW9uLnRwbC5qc1wiO1xuaW1wb3J0IHtNaXhpbiwgTWFpbkRvbUVsZW1lbnR9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3V0aWxzL2luZGV4LmpzJztcblxuaW1wb3J0IFwiLi4vLi4vZWxlbWVudHMvYnJhbmQvdWNkLXRoZW1lLXBhZ2luYXRpb24vdWNkLXRoZW1lLXBhZ2luYXRpb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVVjZFRoZW1lUGFnaW5hdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKE1haW5Eb21FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwYWdlLXVjZC10aGVtZS1wYWdpbmF0aW9uJywgUGFnZVVjZFRoZW1lUGFnaW5hdGlvbik7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtlbGVtZW50U3R5bGVzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPGgzPlBhZ2luYXRpb248L2gzPlxuPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gIGN1cnJlbnQtcGFnZT1cIjUwXCJcbiAgbWF4LXBhZ2VzPVwiMTAwXCJcbiAgdXNlLWhhc2g+XG48L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gIGN1cnJlbnQtcGFnZT1cIjFcIlxuICBtYXgtcGFnZXM9XCIxMFwiPlxuPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCIyXCJcbiAgbWF4LXBhZ2VzPVwiMzNcIlxuICBiYXNlLXBhdGg9XCIvZm9vL2Jhci9cIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG48dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAgY3VycmVudC1wYWdlPVwiMzJcIlxuICBtYXgtcGFnZXM9XCIzM1wiXG4gIHVzZS1oYXNoXG4gIGJhc2UtcGF0aD1cIi9mb28vYmFyL1wiPlxuPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCIzM1wiXG4gIG1heC1wYWdlcz1cIjMzXCJcbiAgYmFzZS1wYXRoPVwiL2Zvby9iYXIvXCI+XG48L3VjZC10aGVtZS1wYWdpbmF0aW9uPlxuPHVjZC10aGVtZS1wYWdpbmF0aW9uXG4gIGN1cnJlbnQtcGFnZT1cIjUwXCJcbiAgbWF4LXBhZ2VzPVwiMTAwXCJcbiAgdmlzaWJsZS1saW5rLWNvdW50PVwiMTRcIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG48dWNkLXRoZW1lLXBhZ2luYXRpb25cbiAgY3VycmVudC1wYWdlPVwiOTlcIlxuICBtYXgtcGFnZXM9XCIxMDBcIlxuICB2aXNpYmxlLWxpbmstY291bnQ9XCIxNFwiPlxuPC91Y2QtdGhlbWUtcGFnaW5hdGlvbj5cbjx1Y2QtdGhlbWUtcGFnaW5hdGlvblxuICBjdXJyZW50LXBhZ2U9XCI1MFwiXG4gIG1heC1wYWdlcz1cIjEwMFwiXG4gIHZpc2libGUtbGluay1jb3VudD1cIjVcIj5cbjwvdWNkLXRoZW1lLXBhZ2luYXRpb24+XG5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi9wYWdlLXVjZC10aGVtZS1wcmltYXJ5LW5hdi50cGwuanNcIjtcbmltcG9ydCB7TWl4aW4sIE1haW5Eb21FbGVtZW50fSBmcm9tICcuLi8uLi9lbGVtZW50cy91dGlscy9pbmRleC5qcyc7XG5cbmltcG9ydCBcIi4uLy4uL2VsZW1lbnRzL2JyYW5kL3VjZC10aGVtZS1wcmltYXJ5LW5hdi91Y2QtdGhlbWUtcHJpbWFyeS1uYXYuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZVVjZFRoZW1lUHJpbWFyeU5hdiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKE1haW5Eb21FbGVtZW50KSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BhZ2UtdWNkLXRoZW1lLXByaW1hcnktbmF2JywgUGFnZVVjZFRoZW1lUHJpbWFyeU5hdik7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtlbGVtZW50U3R5bGVzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuXG48aDM+UHJpbWFyeSBOYXY8L2gzPlxuPHA+U2ltcGxlIG5hdi4gTm8gZHJvcGRvd25zLjwvcD5cbjxkaXYgY2xhc3M9XCJjYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBjYXRlZ29yeS1icmFuZC0tcHJpbWFyeVwiPlxuICA8dWNkLXRoZW1lLXByaW1hcnktbmF2PlxuICAgIDxhPklURU0gMTwvYT5cbiAgICA8YSBocmVmPSM+SVRFTSAyPC9hPlxuICAgIDxhIGhyZWY9XCIjXCI+SVRFTSAzPC9hPlxuICA8L3VjZC10aGVtZS1wcmltYXJ5LW5hdj5cbjwvZGl2PlxuXG48cCBjbGFzcz1cInUtc3BhY2UtbXQtLWxhcmdlXCI+TmF2IHdpdGggZHJvcGRvd25zPC9wPlxuPGRpdiBjbGFzcz1cImNhdGVnb3J5LWJyYW5kX19iYWNrZ3JvdW5kIGNhdGVnb3J5LWJyYW5kLS1wcmltYXJ5XCI+XG4gIDx1Y2QtdGhlbWUtcHJpbWFyeS1uYXY+XG4gICAgPGE+SVRFTSAxPC9hPlxuICAgIDx1bCBocmVmPVwiI1wiIGxpbmstdGV4dD1cIldoZWVsIG9mIFRpbWVcIj5cbiAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFlcyBTZWRhaTwvYT48L2xpPlxuICAgICAgPHVsIGhyZWY9XCIjXCIgbGluay10ZXh0PVwiVGEndmVyZW5cIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmFuZCBhbCdUaG9yPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk1hdHJpbSBDYXV0aG9uPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBlcnJpbiBBeWJhcmE8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8bGk+PGEgaHJlZj1cIiNcIj5XYXJkZXJzPC9hPjwvbGk+XG4gICAgPC91bD5cblxuICAgIDxhIGhyZWY9XCIjXCI+SVRFTSAzPC9hPlxuICA8L3VjZC10aGVtZS1wcmltYXJ5LW5hdj5cbjwvZGl2PlxuXG48cCBjbGFzcz1cInUtc3BhY2UtbXQtLWxhcmdlXCI+TWVnYSBuYXY8L3A+XG4gIDxkaXY+XG4gICAgPHVjZC10aGVtZS1wcmltYXJ5LW5hdiBuYXYtdHlwZT1cIm1lZ2FcIiBzdHlsZS1tb2RpZmllcnM9XCJqdXN0aWZ5XCI+XG4gICAgICA8dWwgbGluay10ZXh0PVwiTG9yZCBvZiB0aGUgUmluZ3NcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5XaXphcmRzPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiXCI+RW50czwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPk1lbjwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPk9yY3M8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5FbHZlczwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkR3YXJ2ZXM8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgICAgPHVsIGhyZWY9XCIjXCIgbGluay10ZXh0PVwiV2hlZWwgb2YgVGltZVwiPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BZXMgU2VkYWk8L2E+PC9saT5cbiAgICAgICAgPHVsIGhyZWY9XCIjXCIgbGluay10ZXh0PVwiVGEndmVyZW5cIj5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5SYW5kIGFsJ1Rob3I8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5NYXRyaW0gQ2F1dGhvbjwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlBlcnJpbiBBeWJhcmE8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+V2FyZGVyczwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPk9naWVyczwvYT48L2xpPlxuICAgICAgPC91bD5cblxuICAgICAgPHVsIGxpbmstdGV4dD1cIktpbmdraWxsZXIgQ2hyb25pY2xlXCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiXCI+SHVtYW5zPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiXCI+RmFlPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvdWNkLXRoZW1lLXByaW1hcnktbmF2PlxuICA8L2Rpdj5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi91Y2RsaWItdGhlbWUtdGVzdC1hcHAudHBsLmpzXCI7XG5pbXBvcnQge01peGluLCBNYWluRG9tRWxlbWVudH0gZnJvbSAnLi4vZWxlbWVudHMvdXRpbHMvaW5kZXguanMnO1xuXG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2RsaWIvdWNkbGliLXBhZ2VzL3VjZGxpYi1wYWdlcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RsaWJUaGVtZVRlc3RBcHAgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChNYWluRG9tRWxlbWVudCkge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudHMgOiB7dHlwZTogQXJyYXl9LFxuICAgICAgc2VsZWN0ZWRQYWdlIDoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gJyc7XG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBlID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIGxldCByb290ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcjcGFnZXMnKTtcbiAgICBmb3IoIGxldCBlbGVOYW1lIG9mIFBBR0VTICkge1xuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlTmFtZSk7XG4gICAgICBlbGUuaWQgPSBlbGVOYW1lLnJlcGxhY2UoL15wYWdlLS8sICcnKTtcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnRzID0gUEFHRVMubWFwKG5hbWUgPT4gbmFtZS5yZXBsYWNlKC9ecGFnZS0vLCAnJykpO1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgfHwgUEFHRVNbMF0ucmVwbGFjZSgvXnBhZ2UtLywgJycpO1xuICB9XG5cbiAgX29uU2VsZWN0Q2hhbmdlKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcjZWxlbWVudFNlbGVjdG9yJykudmFsdWU7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZGxpYi10aGVtZS10ZXN0LWFwcCcsIFVjZGxpYlRoZW1lVGVzdEFwcCk7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtlbGVtZW50U3R5bGVzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuICA8c2VsZWN0IGlkPVwiZWxlbWVudFNlbGVjdG9yXCIgQGNoYW5nZT1cIiR7dGhpcy5fb25TZWxlY3RDaGFuZ2V9XCI+XG4gICAgJHt0aGlzLmVsZW1lbnRzLm1hcChpdGVtID0+IGh0bWxgPG9wdGlvbiB2YWx1ZT1cIiR7aXRlbX1cIj4ke2l0ZW19PC9vcHRpb24+YCl9XG4gIDwvc2VsZWN0PlxuXG4gIDx1Y2RsaWItcGFnZXMgaWQ9XCJwYWdlc1wiIHNlbGVjdGVkPVwiJHt0aGlzLnNlbGVjdGVkUGFnZX1cIiA+PC91Y2RsaWItcGFnZXM+XG5cbmA7fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi91Y2RsaWItdGhlbWUtdGVzdC1hcHAuanNcIjtcblxuLy8gUEFHRVNcbmltcG9ydCBcIi4vcGFnZXMvcGFnZS11Y2QtdGhlbWUtcHJpbWFyeS1uYXYuanNcIjtcbmltcG9ydCBcIi4vcGFnZXMvcGFnZS11Y2QtdGhlbWUtcGFnaW5hdGlvbi5qc1wiO1xuXG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy9uYXZpZ2F0aW9uL3VjZC10aGVtZS1wcmltYXJ5LW5hdi91Y2QtdGhlbWUtcHJpbWFyeS1uYXZcIjtcbi8vIGltcG9ydCAnLi4vZWxlbWVudHMvdWNkLXRoZW1lLWFsZXJ0L3VjZC10aGVtZS1hbGVydCc7XG4vLyBpbXBvcnQgJy4uL2VsZW1lbnRzL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYSc7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtbGlzdC1hY2NvcmRpb24vdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uXCI7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtZm9ybS1zZWFyY2gvdWNkLXRoZW1lLWZvcm0tc2VhcmNoXCI7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyL3VjZC10aGVtZS1oZWFkZXJcIjtcbi8vIGltcG9ydCBcIi4uL2VsZW1lbnRzL3VjZC10aGVtZS1oZWFkZXItc2VhcmNoLXBvcHVwL3VjZC10aGVtZS1oZWFkZXItc2VhcmNoLXBvcHVwXCI7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtY29sbGFwc2UvdWNkLXRoZW1lLWNvbGxhcHNlXCI7XG4vLyBpbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtaW1hZ2UtZ2FsbGVyeS91Y2QtdGhlbWUtaW1hZ2UtZ2FsbGVyeVwiO1xuLy8gaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLXBhZ2luYXRpb24vdWNkLXRoZW1lLXBhZ2luYXRpb25cIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=