/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../elements/ucd-theme-alert/ucd-theme-alert.js":
/*!******************************************************!*\
  !*** ../elements/ucd-theme-alert/ucd-theme-alert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeAlert)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-alert.tpl.js */ "../elements/ucd-theme-alert/ucd-theme-alert.tpl.js");



/**
 * @class UcdThemeAlert
 * @classdesc UI component class for displaying a basic non-dismissable alert.
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=viewall-molecules-messaging
 * 
 * @property {String} type - Optional modifier. 'success', 'warning', or 'error'
 * 
 * @example
 * html`
 *   <ucd-theme-alert>I am an alert!</ucd-theme-alert>
 *   <ucd-theme-alert type='error'>I am a red alert!</ucd-theme-alert>
 * `
 */
class UcdThemeAlert extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      type : {type: String},
      _styleModifier : {type: String}
    };
  }

  static get styles() {
    return (0,_ucd_theme_alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  } 

  constructor() {
    super();
    this.render = _ucd_theme_alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this.type = '';
    this.styleModifier = '';
  }

  /**
   * @method updated
   * @description Lit lifecycle method called after element has been updated
   * @param {Map} props - Properties that have changed
   */
  updated(props) {
    if( props.has('type') && this.type ) {
      this._styleModifier = 'alert--'+this.type;
    }
  }

}

customElements.define('ucd-theme-alert', UcdThemeAlert);

/***/ }),

/***/ "../elements/ucd-theme-alert/ucd-theme-alert.tpl.js":
/*!**********************************************************!*\
  !*** ../elements/ucd-theme-alert/ucd-theme-alert.tpl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_messaging_alert_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_messaging-alert.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_messaging-alert.css.js");



function styles() {
  let customCss = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;
  return [
    _ucd_lib_theme_sass_4_component_messaging_alert_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    customCss
  ]
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html` 
<div class="alert ${this._styleModifier}">
  <slot></slot>
</div>

`;}

/***/ }),

/***/ "../elements/ucd-theme-collapse/ucd-theme-collapse.js":
/*!************************************************************!*\
  !*** ../elements/ucd-theme-collapse/ucd-theme-collapse.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeCollapse)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_collapse_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-collapse.tpl.js */ "../elements/ucd-theme-collapse/ucd-theme-collapse.tpl.js");



/**
 * @class UcdThemeCollapse
 * @classdesc UI component class for a collapsable panel box
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-collapse
 * 
 * @property {String} title - The panel title
 * @property {Boolean} opened - Whether the panel content is expanded
 * @property {String} brandClass - Any additional class modifers
 * 
 * @example
 * html`
 *   <ucd-theme-collapse title="I am the panel title">
 *     I am the content.
 *   </ucd-theme-collapse>
 * `
 */
class UcdThemeCollapse extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      title: {type: String},
      opened: {type: Boolean, reflect: true},
      brandClass: {type: String, attribute: "brand-class"}
    };
  }

  static get styles() {
    return (0,_ucd_theme_collapse_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_collapse_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
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

/***/ }),

/***/ "../elements/ucd-theme-collapse/ucd-theme-collapse.tpl.js":
/*!****************************************************************!*\
  !*** ../elements/ucd-theme-collapse/ucd-theme-collapse.tpl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_collapse_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_collapse.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_collapse.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_category_brand_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_category-brand.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_category-brand.css.js");
/* harmony import */ var _utils_directives_motion_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/directives/motion-collapse */ "../elements/utils/directives/motion-collapse.js");







function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    [hidden] {
      display: none;
    }
  `;

  return [
    _ucd_lib_theme_sass_4_component_category_brand_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    _ucd_lib_theme_sass_4_component_collapse_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    elementStyles
  ];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

<div class="collapse ${this.brandClass}">
  <h2 
    id="button"
    tabindex="0"
    class="collapse__title ${this.opened ? 'collapse__title--open': 'collapse__title--closed'}"
    aria-controls="content"
    aria-expanded="${this.opened}"
    @click="${this._onTitleClick}"
    @keyup="${this._onTitleKeyUp}"
    >
    ${this.title}
  </h2>
  <div 
    id="content"
    ${(0,_utils_directives_motion_collapse__WEBPACK_IMPORTED_MODULE_3__.motionCollapse)({duration: 300})}
    aria-labelledby="button"
    class="collapse__content" ?hidden="${!this.opened}">
    <slot></slot>
  </div>
</div>


`;}

/***/ }),

/***/ "../elements/ucd-theme-form-search/ucd-theme-form-search.js":
/*!******************************************************************!*\
  !*** ../elements/ucd-theme-form-search/ucd-theme-form-search.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeFormSearch)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-form-search.tpl.js */ "../elements/ucd-theme-form-search/ucd-theme-form-search.tpl.js");



/**
 * @class UcdThemeFormSearch
 * @classdesc Component class for rendering a basic search form.
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-search-form
 * 
 * @param {String} value - The search string
 * @param {String} placeholder - The input placeholder
 * @param {String} formAction - The action to be taken on form submit (optional)
 * 
 * @example
 * // Use a form action:
 * html`
 *   <ucd-theme-form-search form-action="/url/to/post/to"></ucd-theme-form-search>
 * `
 * // Use event listener:
 * html`
 *  <ucd-theme-form-search @search="${this._onSearch}"></ucd-theme-form-search>
 * `
 */
class UcdThemeFormSearch extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      value: {type: String},
      placeholder: {type: String, attribute: "placeholder"},
      formAction: {type: String, attribute: "form-action"},
      formClass: {type: String, attribute: "form-class"},
      labelText: {type: String, attribute: "label-text"},
      inputClass: {type: String, attribute: "input-class"}
    };
  }

  static get styles() {
    return (0,_ucd_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this.formAction = "";
    this.formClass = "";
    this.labelText = "Search";
    this.placeholder = "Search...";
    this.inputClass = "";
    this.value = "";
  }

  /**
   * @method _onSubmit
   * @description Attached to form submit
   * @param {Event} e - submit event
   */
  _onSubmit(e){
    if ( !this.formAction ) {
      e.preventDefault();
      e.stopPropagation();
      this._dispatchSearchEvent();
    }
  }

  /**
   * @method _onInput
   * @description Attached to search input change
   * @param {Event} e - input event
   */
  _onInput(e){
    this.value = e.target.value;
  }

  /**
   * @method _dispatchSearchEvent
   * @description Fires 'search' custom event
   */
  _dispatchSearchEvent() {
    let e = new CustomEvent('search', {
      detail: { 
        message: 'A search has been initiated', 
        searchTerm: this.value
      },
      bubbles: true,
      composed: true });
  
    this.dispatchEvent(e);
  }

}

customElements.define('ucd-theme-form-search', UcdThemeFormSearch);

/***/ }),

/***/ "../elements/ucd-theme-form-search/ucd-theme-form-search.tpl.js":
/*!**********************************************************************!*\
  !*** ../elements/ucd-theme-form-search/ucd-theme-form-search.tpl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/normalize.css.js */ "./node_modules/@ucd-lib/theme-sass/normalize.css.js");
/* harmony import */ var _ucd_lib_theme_sass_6_utility_u_visibility_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/6_utility/_u-visibility.css.js */ "./node_modules/@ucd-lib/theme-sass/6_utility/_u-visibility.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_search_form_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_search-form.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_search-form.css.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_forms.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js");








function styles() {
  let customCss = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;
  return [
    _ucd_lib_theme_sass_normalize_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    _ucd_lib_theme_sass_6_utility_u_visibility_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_4__.default,
    _ucd_lib_theme_sass_4_component_search_form_css_js__WEBPACK_IMPORTED_MODULE_3__.default,
    customCss
  ]
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html` 
<form 
  @submit="${this._onSubmit}"
  action="${this.formAction}" 
  method="POST" 
  class="search-form ${this.formClass}">

  <label for="search" class="u-hidden--visually">${this.labelText}</label>
  <input 
    type="text" 
    placeholder="${this.placeholder}" 
    id="search" 
    class="search-form__input ${this.inputClass}" 
    name="searchterm" 
    @input="${this._onInput}"
    value="${this.value}">
  <input type="submit" class="search-form__submit" name="search" alt="Search" value="&#xf002; Submit">

</form>
`;}

/***/ }),

/***/ "../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.js":
/*!**********************************************************************************!*\
  !*** ../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeHeaderSearchPopup)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_header_search_popup_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-header-search-popup.tpl.js */ "../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.tpl.js");




class UcdThemeHeaderSearchPopup extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      buttonText: {type: String, attribute: "button-text"},
      opened: {type: Boolean}
    };
  }

  static get styles() {
    return (0,_ucd_theme_header_search_popup_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_header_search_popup_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this.buttonText = "Toggle Search";
    this.opened = false;

  }

  _onBtnClick(){
    this.opened = !this.opened;
  }

  open(){
    this.opened = true;
  }

  close(){
    this.opened = false;
  }

}

customElements.define('ucd-theme-header-search-popup', UcdThemeHeaderSearchPopup);

/***/ }),

/***/ "../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.tpl.js":
/*!**************************************************************************************!*\
  !*** ../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.tpl.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_forms.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_search_popup_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_search-popup.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_search-popup.css.js");





function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
  `;

  return [
    _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    _ucd_lib_theme_sass_4_component_search_popup_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    elementStyles];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`
<button 
  class="search-popup__open ${this.opened ? 'search-popup__open--close' : ''}" 
  @click=${this._onBtnClick}>
  <span class="search-popup__open-icon">${this.buttonText}</span>
</button>
<div class="search-popup ${this.opened ? 'is-open' : ''}">
  <slot></slot>
</div>

`;}

/***/ }),

/***/ "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.js":
/*!************************************************************************!*\
  !*** ../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeListAccordion)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-list-accordion.tpl.js */ "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.tpl.js");



/**
 * @class UcdThemeListAccordion
 * @classdesc Component class for displaying lists with accordion collapse/expand functionality.
 * Pattern Lab Url: 
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-accordion
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-faq
 * 
 * @property {String} listStyle - 'accordion' or 'faq'
 * 
 * @example
 * html`
 *  <ucd-theme-list-accordion>
 *    <div>Click me to expand div below</div>
 *    <div>I will be toggled when the above item is clicked.</div>
 *    <div>The direct children of this element must be divs</div>
 *    <div>But you can pass through <a href="#">rich text</a> within.
 *  </ucd-theme-list-accordion>
 * `
 */
class UcdThemeListAccordion extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      listStyle: {type: String, attribute: "list-style"},
      _listItems: {attribute: false, state: true},
      _availableStyles: {attribute: false, state: true},
      _expandedItems: {attribute: false, state: true}
    };
  }

  constructor() {
    super();
    this.render = _ucd_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this._listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
    this._expandedItems = new Set();
  }

  static get styles() {
    return (0,_ucd_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  /**
   * @method updated
   * @description Lit lifecycle method called after element has updated.
   * @param {Map} props - properties that have changed 
   */
  updated(props){
    if ( props.has("listStyle") ) {
      if ( !this._availableStyles.includes(this.listStyle.toLowerCase()) ) {
        this.listStyle = this._availableStyles[0];
      }
    }
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

  /**
   * @method toggleItemVisiblity
   * @description Expands/collapses an item
   * @param {Number} index - The index of the item to expand/collapse (zero indexed)
   * @param {Boolean} isPairIndex - The type of index
   *  If false, use the flattened index of the _listItems array:
   *    [q1, a1, q2, a2, q3, a3...]
   *  If true, treats the title and content (or question and answer) as a pair:
   *    0: first pair, 1: second pair, etc
   * @param {Boolean} dispatchEvent - Will dispatch custom 'item-toggle' event
   */
  async toggleItemVisiblity(index, isPairIndex=true, dispatchEvent=false){
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    if ( this._expandedItems.has(pairIndex) ){
      this._expandedItems.delete(pairIndex);
    } else {
      this._expandedItems.add(pairIndex);
    }

    this.requestUpdate();
    await this.updateComplete;
    if ( dispatchEvent ) this._dispatchItemToggleEvent(index);
  }

  /**
   * @method itemIsExpanded
   * @description Returns true if item is expanded
   * @param {Nunber} index - The index of the item
   * @param {Boolean} isPairIndex - Does the index param refer to Q/A pair or the flattened index?
   * @returns {Boolean}
   */
  itemIsExpanded(index, isPairIndex=true) {
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    return this._expandedItems.has(pairIndex);
  }

  /**
   * @method _onTitleClick
   * @description Attached to item title
   * @param {Event} e 
   */
  _onTitleClick(e) {
    let index = parseInt(e.target.getAttribute("item-index"));
    this.toggleItemVisiblity(index, false, true);
  }

  /**
   * @method _onTitleKeyUp
   * @description Attached to item title
   * @param {Event} e 
   */
  _onTitleKeyUp(e) {
    if( e.which !== 13 ) return;
    let index = parseInt(e.target.getAttribute("item-index"));
    this.toggleItemVisiblity(index, false, true);
  }

  /**
   * @method _onChildListMutation
   * @description Attached to self, responds to changes in children
   */
  _onChildListMutation() {
    let listItems = [];
    Array.from(this.children).forEach((child, index) => {
      if (child.tagName !== "DIV")  return;
      child.setAttribute('slot', 'list-item-'+index);
      if( this.listStyle === 'faq' ) {
        child.style.display = 'inline';
      }

      listItems.push({child, slotName:'list-item-'+index});
    });
    this._listItems = listItems;
  }

  /**
   * @method _dispatchItemToggleEvent
   * @description Fires 'item-toggle' custom event when user expands/collapses an item
   * @param {Number} index - The index of the item in the _listItems array property
   */
  _dispatchItemToggleEvent(index) {
    let e = new CustomEvent('item-toggle', {
      detail: { 
        message: 'A list item has been expanded or collapsed', 
        isExpanded: this.itemIsExpanded(index, false),
        item: {title: this._listItems[index], content: this._listItems[index + 1]},
        listItemIndex: index,
        listItemPairIndex: Math.floor(index / 2)
      },
      bubbles: true,
      composed: true });
    this.dispatchEvent(e);
  }

  /**
   * @method _isTitle
   * @description Item is title or question.
   * @param {Number} i - Array index.
   * @returns  {Boolean}
   */
  _isTitle(i) {
    return i % 2 ? false : true;
  }

  /**
   * @method _isContent
   * @description Item is content or answer.
   * @param {Number} i - Array index.
   * @returns {Boolean}
   */
  _isContent(i){
    return !this._isTitle(i);
  }

}

customElements.define('ucd-theme-list-accordion', UcdThemeListAccordion);

/***/ }),

/***/ "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.tpl.js":
/*!****************************************************************************!*\
  !*** ../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.tpl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_2_base_class_lists_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/2_base_class/_lists.css.js */ "./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js");
/* harmony import */ var _utils_directives_motion_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/directives/motion-collapse */ "../elements/utils/directives/motion-collapse.js");





function styles() {
  let customStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    [hidden] {
      display: none;
    }
    .item-title ::slotted(*) {
      pointer-events: none;
    }
  `;
  return [
    _ucd_lib_theme_sass_2_base_class_lists_css_js__WEBPACK_IMPORTED_MODULE_1__.default, 
    customStyles
  ]
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`
<ul class="list--${this.listStyle}">
${this._listItems.map((item, index) => lit__WEBPACK_IMPORTED_MODULE_0__.html`
  ${this._isTitle(index) ? lit__WEBPACK_IMPORTED_MODULE_0__.html`
    <li 
      id="accordion-${index}"
      class="item-title"
      item-index="${index}" 
      tabindex="0"
      @click=${this._onTitleClick}
      @keyup=${this._onTitleKeyUp}
      aria-controls="accordion-${index}-panel"
      aria-expanded="${this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  ` : lit__WEBPACK_IMPORTED_MODULE_0__.html`
    <li 
      id="accordion-${index}-panel" 
      ${(0,_utils_directives_motion_collapse__WEBPACK_IMPORTED_MODULE_2__.motionCollapse)({duration: 300})}
      class="item-content"
      role="region" 
      aria-labelledby="accordion-${index}" 
      ?hidden="${!this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  `}
`) }
</ul>
`;}

/***/ }),

/***/ "../elements/ucd-theme-message-area/ucd-theme-message-area.js":
/*!********************************************************************!*\
  !*** ../elements/ucd-theme-message-area/ucd-theme-message-area.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeMessageArea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_message_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-message-area.tpl.js */ "../elements/ucd-theme-message-area/ucd-theme-message-area.tpl.js");



/**
 * @class UcdThemeMessageArea
 * @classdesc UI component class for displaying a dismissable message panel
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-message-area
 * 
 * @property {String} title - The message panel header
 * @property {String} buttonText - The text of the dismiss button (is hidden)
 * @property {Boolean} collapsed - Whether or not the panel content is visible
 * 
 * @example
 * html`
 *   <ucd-theme-message-area title='Your message panel header'>
 *    Your content goes here.
 *   </ucd-theme-message-area>
 * `
 */
class UcdThemeMessageArea extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      title : {type: String},
      buttonText : {type: String, attribute: 'button-text'},
      collapsed : {type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return (0,_ucd_theme_message_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_message_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this.collapsed = false;
  }

  /**
   * @method _onBtnClicked
   * @description Attached to dismiss button in upper-right corner.
   */
  _onBtnClicked() {
    this.collapsed = !this.collapsed;
    this._dispatchToggleEvent();
  }

  /**
   * @method _dispatchToggleEvent
   * @description Dispatches 'accordion-toggle' custom event when user toggles panel content visibility.
   */
  _dispatchToggleEvent(){
    let e = new CustomEvent('accordion-toggle', {
      detail: { 
        message: 'Message area content has been expanded or collapsed', 
        isCollapsed: this.collapsed
      },
      bubbles: true,
      composed: true });
    this.dispatchEvent(e);
  }

}

customElements.define('ucd-theme-message-area', UcdThemeMessageArea);

/***/ }),

/***/ "../elements/ucd-theme-message-area/ucd-theme-message-area.tpl.js":
/*!************************************************************************!*\
  !*** ../elements/ucd-theme-message-area/ucd-theme-message-area.tpl.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_headings_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_headings.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_headings.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_message_area_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_message-area.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_forms.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js");






function styles(){
  let customStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    .message-area--closed {
      height: 0;
    }
  `;
  return [
    _ucd_lib_theme_sass_1_base_html_headings_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    _ucd_lib_theme_sass_1_base_html_forms_css_js__WEBPACK_IMPORTED_MODULE_3__.default,
    _ucd_lib_theme_sass_4_component_message_area_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    customStyles
  ]
}

function render() { 
  return lit__WEBPACK_IMPORTED_MODULE_0__.html`
    <div class="message-area ${this.collapsed ? 'message-area--closed': ''}">
      <div class="message-area__content" data-cy="content" id="content" aria-labelledby="button">
        <h2 class="message-area__title">${this.title}</h2>
        <div class="message-area__body">
          <slot></slot>
        </div>
      </div>
      <button 
        id="button"
        class="message-area__button" 
        data-cy="button"
        aria-controls="content"
        aria-expanded="${!this.collapsed}"
        title="${this.buttonText}" 
        @click="${this._onBtnClicked}">${this.buttonText}</button>
    </div>
  `;
}

/***/ }),

/***/ "../elements/utils/directives/motion-collapse.js":
/*!*******************************************************!*\
  !*** ../elements/utils/directives/motion-collapse.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionCollapse": () => (/* binding */ MotionCollapse),
/* harmony export */   "motionCollapse": () => (/* binding */ motionCollapse)
/* harmony export */ });
/* harmony import */ var lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/html.js */ "./node_modules/lit/html.js");
/* harmony import */ var lit_async_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/async-directive.js */ "./node_modules/lit/async-directive.js");
/* harmony import */ var lit_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directive.js */ "./node_modules/lit/directive.js");




const animationOptions = [
  'delay',
  'duration',
  'easing',
];

/**
 * @class MotionCollapse
 * @classdesc Lit directive controler for adding collapse/expand accordion-like animation to an element.
 * 
 * @example
 * html`
 *  <div ${motionCollapse({duration: 300})}>I am animated</div>
 * `
 */
class MotionCollapse extends lit_async_directive_js__WEBPACK_IMPORTED_MODULE_1__.AsyncDirective {

  /**
   * @method constructor
   * @description sets animation defaults
   * @param {AttributePart} part 
   */
  constructor(part) {
    super(part);
    if (part.type === lit_directive_js__WEBPACK_IMPORTED_MODULE_2__.PartType.CHILD) {
      throw new Error(
        'The `motionCollapse` directive must be used in attribute position.'
      );
    }
    
    this.status = "";

    // animation defaults
    this.duration = 400;
    this.delay = 0;
    this.easing = "linear";
  }

  /**
   * @method getStyles
   * @description Returns select computed styles for element
   * @returns {Object} styles
   */
  getStyles(){
    const computedStyles = window.getComputedStyle(this.element);
    return {
      paddingTop: computedStyles.paddingTop,
      paddingBottom: computedStyles.paddingBottom,
      marginTop: computedStyles.marginTop,
      marginBottom: computedStyles.marginBottom,
      height: computedStyles.height,
      display: computedStyles.display,
      visibility: computedStyles.visibility,
      offsetHeight: this.element.offsetHeight
    };
  }

  /**
   * @method render
   * @description Required method for a Lit directive
   * @returns {nothing} Doesn't render anything
   */
  render(){
    return lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
  }

  /**
   * @method update
   * @description Lit directive method. Attaches controller when element is first updated.
   * @param {Part} part 
   * @param {Array} options - argument list passed to directive
   * @returns render
   */
  update(part, options){
    this.isFirstUpdate = this._host === undefined;
    if ( this.isFirstUpdate && part.options ) {
      this._host = part.options.host;
      this._host.addController(this);
      this.element = part.element;
    }

    this._setOptions(options);
    return this.render();
  }

  /**
   * @method _setOptions
   * @description Converts directive arguments to class properties
   * First argument is animation settings
   * @param {Array} options - list of directive arguments
   * @returns 
   */
  _setOptions(options){
    if ( 
      !options ||
      !options.length || 
      typeof options[0] !== 'object' ||
      Array.isArray( options[0] )
    ) return;
    
    const aniKeys = Object.keys(options[0]);
    animationOptions.forEach(opt => {
      if ( aniKeys.includes(opt) ) {
        this[opt] = options[0][opt];
      }
    });

  }

  /**
   * @method hostUpdate
   * @description Lit controller method called when host element update cycle is started
   */
  hostUpdate(){
    if ( this.animation && this.animation.playState === 'running' ) {
      this.animation.cancel();
    }
    this._updateStyles = this.getStyles();
  }

  /**
   * @method hostUpdate
   * @description Lit controller method called when host element update cycle is completed
   */
  hostUpdated(){
    this._updatedStyles = this.getStyles();
    this.main();
  }

  /**
   * @method _makeFrame
   * @description Constructs an animation frame to be passed to ele.animate
   * @param {String} frameType - expanded or collapsed
   * @returns {Object} Styles to animate
   */
  _makeFrame(frameType){
    const styles = this.status === 'expanding' ? this._updatedStyles : this._updateStyles;
    let frame = {};
    if (frameType === 'collapsed') {
      frame =  {
        height: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginTop: "0px",
        marginBottom: "0px"
      };
    } else {
      frame =  {
        height: styles.height,
        paddingTop: styles.paddingTop,
        paddingBottom: styles.paddingBottom,
        marginTop: styles.marginTop,
        marginBottom: styles.marginBottom
      };
    }
    return frame;
  }

  /**
   * @method _onAnimationEnd
   * @description Fires when animation ends - either success or cancel
   */
  _onAnimationEnd(){
    this.element.style.display = "";
    this.element.style.overflow = "";
    this.element.style.visibility = "";
    if (this.status === 'expanding'){
      this.status = "expanded";
    } else if (this.status === 'collapsing') {
      this.status = "collapsed";
    }
  }

  /**
   * @method _elementHasChanged
   * @description Detects whether the element that this directive is attached to has been clicked
   * @returns {Boolean}
   */
  _elementHasChanged(){
    if ( this._updateStyles.offsetHeight != this._updatedStyles.offsetHeight ) {
      return true;
    }
    if ( this._updateStyles.visibility != this._updatedStyles.visibility ) {
      return true;
    }
    return false;
  }

  /**
   * @method main
   * @description Adds collapse/expand animation to element.
   * @returns 
   */
  async main(){
    if ( 
      !this.element.isConnected ||
      this.isFirstUpdate ||
      !this._elementHasChanged()
    ) {
      return;
    }

    if ( this._updatedStyles.visibility === 'hidden' || !this._updatedStyles.offsetHeight) {
      this.status = "collapsing";
    } else {
      this.status = "expanding";
    }

    let frames = [];
    const collapsedFrame = this._makeFrame('collapsed');
    const expandedFrame = this._makeFrame('expanded');

    if ( this.status === 'expanding') { 
      frames.push(collapsedFrame, expandedFrame);
      this.element.style.display = this._updatedStyles.display;
    } else {
      frames.push(expandedFrame, collapsedFrame);
      this.element.style.display = this._updateStyles.display;
    }

    
    this.element.style.overflow = "hidden";
    this.element.style.visibility = "visible";
    console.log(this.element.style.display , frames);
    this.animation = this.element.animate(
      frames, 
      {
        duration: this.duration, 
        delay: this.delay,
        easing: this.easing
      }
    );
    if ( !this.animation.onfinish ) {
      this.animation.onfinish = () => this._onAnimationEnd('finish');
      this.animation.oncancel = () => this._onAnimationEnd('cancel');
    }
    
  }
}

const motionCollapse = (0,lit_directive_js__WEBPACK_IMPORTED_MODULE_2__.directive)(MotionCollapse);

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
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
const cssResultCache = new Map();
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    let result = cssResultCache.get(cssText);
    if (result === undefined) {
        cssResultCache.set(cssText, (result = new CSSResult(cssText, constructionToken)));
    }
    return result;
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
                        ` See the changelog at https://github.com/Polymer/lit-html/blob/main/packages/reactive-element/CHANGELOG.md`);
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
((_d = (_e = globalThis)['reactiveElementVersions']) !== null && _d !== void 0 ? _d : (_e['reactiveElementVersions'] = [])).push('1.0.0-rc.1');
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

/***/ "./node_modules/@ucd-lib/theme-sass/1_base_html/_headings.css.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/1_base_html/_headings.css.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

h1 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  font-size: 1.91rem;
}
h1:first-child {
  margin-top: 0;
}
h1 a {
  color: #022851;
  text-decoration: underline;
}
h1 a:hover, h1 a:focus {
  color: #022851;
  text-decoration: none;
}
@media (min-width: 768px) {
  h1 {
    font-size: 2.94rem;
  }
}

h2 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  color: #13639e;
  font-size: 1.6055rem;
}
h2:first-child {
  margin-top: 0;
}
@media (min-width: 768px) {
  h2 {
    font-size: 2.0995rem;
  }
}
h2 a {
  color: #13639e;
  text-decoration: underline;
}
h2 a:hover, h2 a:focus {
  color: #13639e;
  text-decoration: none;
}

h3 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  color: #666;
  font-size: 1.3325rem;
}
h3:first-child {
  margin-top: 0;
}
@media (min-width: 768px) {
  h3 {
    font-size: 1.7425rem;
  }
}
h3 a {
  color: #666;
  text-decoration: underline;
}
h3 a:hover, h3 a:focus {
  color: #666;
  text-decoration: none;
}

h4 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  font-size: 1.092rem;
}
h4:first-child {
  margin-top: 0;
}
h4 a {
  color: #022851;
  text-decoration: underline;
}
h4 a:hover, h4 a:focus {
  color: #022851;
  text-decoration: none;
}
@media (min-width: 768px) {
  h4 {
    font-size: 1.428rem;
  }
}

h5 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  font-size: 1rem;
}
h5:first-child {
  margin-top: 0;
}
h5 a {
  color: #022851;
  text-decoration: underline;
}
h5 a:hover, h5 a:focus {
  color: #022851;
  text-decoration: none;
}
@media (min-width: 768px) {
  h5 {
    font-size: 1.207rem;
  }
}

h6 {
  margin: 0.75em 0 0.25em;
  padding: 0;
  color: #022851;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2;
  font-size: 1rem;
}
h6:first-child {
  margin-top: 0;
}
h6 a {
  color: #022851;
  text-decoration: underline;
}
h6 a:hover, h6 a:focus {
  color: #022851;
  text-decoration: none;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
:host {
  --list-arrow-color: #ffc519;
  --list-bordered-border: #dbeaf7;
  --list-faq-question: #13639e;
  --list-faq-question-hover: #001124;
  --list-faq-a: #022851;
  --list-pipe-pipe: #4c4c4c;
  --list-faq-prefix-spacing: 1.5rem;
  --list-bordered-vertical-spacing: 0.5rem;
}

.list--flush,
.list-wrapper--flush ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
}

.list--arrow li,
.list-wrapper--arrow ul li {
  position: relative;
  list-style: none;
}
.list--arrow li:before,
.list-wrapper--arrow ul li:before {
  position: absolute;
  margin: -0.125em 0 0 -1.25em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.5;
}
.list--arrow li li:before,
.list-wrapper--arrow ul li li:before {
  margin: 0 0 0 -1.2em;
  content: "";
  font-size: 1em;
  line-height: 1.7;
}
.list--arrow li li li:before,
.list-wrapper--arrow ul li li li:before {
  margin: 0 0 0 -1.6em;
  content: "";
  font-size: 0.6em;
  line-height: 2.8;
}

.list--white-arrow,
.list-wrapper--white-arrow ul {
  --list-arrow-color: #fff;
}
.list--white-arrow li,
.list-wrapper--white-arrow ul li {
  position: relative;
  list-style: none;
}
.list--white-arrow li:before,
.list-wrapper--white-arrow ul li:before {
  position: absolute;
  margin: -0.125em 0 0 -1.25em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.5;
}
.list--white-arrow li li:before,
.list-wrapper--white-arrow ul li li:before {
  margin: 0 0 0 -1.2em;
  content: "";
  font-size: 1em;
  line-height: 1.7;
}
.list--white-arrow li li li:before,
.list-wrapper--white-arrow ul li li li:before {
  margin: 0 0 0 -1.6em;
  content: "";
  font-size: 0.6em;
  line-height: 2.8;
}

.list--bordered,
.list-wrapper--bordered ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style: none;
}
.list--bordered ul,
.list-wrapper--bordered ul ul {
  margin-top: var(--list-bordered-vertical-spacing);
  border-top: 1px solid var(--list-bordered-border);
}
.list--bordered ul li:first-child,
.list-wrapper--bordered ul ul li:first-child {
  padding-top: var(--list-bordered-vertical-spacing);
}
.list--bordered li,
.list--bordered > div,
.list-wrapper--bordered ul li,
.list-wrapper--bordered ul > div {
  position: relative;
  margin-bottom: var(--list-bordered-vertical-spacing);
  padding: 0 0 var(--list-bordered-vertical-spacing) 2rem;
  border-bottom: 1px solid var(--list-bordered-border);
}
.list--bordered li:last-child,
.list--bordered > div:last-child,
.list-wrapper--bordered ul li:last-child,
.list-wrapper--bordered ul > div:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.list--bordered li li,
.list--bordered > div li,
.list-wrapper--bordered ul li li,
.list-wrapper--bordered ul > div li {
  padding-left: 0;
}
.list--bordered li li:before,
.list--bordered > div li:before,
.list-wrapper--bordered ul li li:before,
.list-wrapper--bordered ul > div li:before {
  content: "";
}
.list--bordered li:before,
.list--bordered > div:before,
.list-wrapper--bordered ul li:before,
.list-wrapper--bordered ul > div:before {
  position: absolute;
  margin: 0 0 0 -1.7em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.1;
}

.list--faq,
.list-wrapper--faq ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
  margin-left: 1rem;
}
.list--faq li,
.list-wrapper--faq ul li {
  list-style: none;
}
.list--faq > li,
.list-wrapper--faq ul > li {
  padding: 0 0.5rem 0.5rem var(--list-faq-prefix-spacing);
}
.list--faq > li:nth-child(odd),
.list-wrapper--faq ul > li:nth-child(odd) {
  padding-top: 0.5rem;
  color: var(--category-brand-contrast-color, var(--list-faq-question));
  cursor: pointer;
  font-weight: 800;
  text-decoration: none;
}
.list--faq > li:nth-child(odd):hover,
.list-wrapper--faq ul > li:nth-child(odd):hover {
  color: var(--category-brand-contrast-color, var(--list-faq-question-hover));
  opacity: 0.8;
}
.list--faq > li:nth-child(odd):not(:first-child),
.list-wrapper--faq ul > li:nth-child(odd):not(:first-child) {
  border-top: 1px solid var(--list-bordered-border);
}
.list--faq > li:nth-child(odd):before,
.list-wrapper--faq ul > li:nth-child(odd):before {
  display: inline-block;
  width: var(--list-faq-prefix-spacing);
  margin-left: calc(-1 * var(--list-faq-prefix-spacing));
  content: "Q:";
  font-weight: 800;
}
.list--faq > li:nth-child(odd) > p,
.list-wrapper--faq ul > li:nth-child(odd) > p {
  margin: 0;
}
.list--faq > li:nth-child(even),
.list-wrapper--faq ul > li:nth-child(even) {
  margin-bottom: 0.5rem;
}
.list--faq > li:nth-child(even):before,
.list-wrapper--faq ul > li:nth-child(even):before {
  display: inline-block;
  float: left;
  width: var(--list-faq-prefix-spacing);
  margin-left: calc(-1 * var(--list-faq-prefix-spacing));
  color: var(--category-brand-contrast-color, var(--list-faq-a));
  content: "A:";
  font-weight: 800;
}

.list--pipe,
.list-wrapper--pipe ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--pipe li,
.list-wrapper--pipe ul li {
  list-style: none;
}
.list--pipe li,
.list-wrapper--pipe ul li {
  display: inline-block;
  margin-right: 0.25rem;
  padding-right: 0.5rem;
  border-right: 1px solid var(--category-brand-contrast-color, var(--list-pipe-pipe));
  line-height: 1;
}
.list--pipe li:last-child,
.list-wrapper--pipe ul li:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: 0;
}

.list--comment {
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0 0 2rem;
}
.list--comment ul {
  margin-top: var(--list-bordered-vertical-spacing);
  border-top: 1px solid var(--list-bordered-border);
}
.list--comment ul li:first-child {
  padding-top: var(--list-bordered-vertical-spacing);
}
.list--comment li,
.list--comment > div {
  position: relative;
  margin-bottom: var(--list-bordered-vertical-spacing);
  padding: 0 0 var(--list-bordered-vertical-spacing) 2rem;
  border-bottom: 1px solid var(--list-bordered-border);
}
.list--comment li:last-child,
.list--comment > div:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.list--comment li li,
.list--comment > div li {
  padding-left: 0;
}
.list--comment li li:before,
.list--comment > div li:before {
  content: "";
}
.list--comment li:before,
.list--comment > div:before {
  position: absolute;
  margin: 0 0 0 -1.7em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.1;
}

.list--simple,
.list-wrapper--simple ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--simple li,
.list-wrapper--simple ul li {
  list-style: none;
}
.list--simple li,
.list-wrapper--simple ul li {
  margin-bottom: 0;
  font-size: 1rem;
  font-style: normal;
  margin-bottom: 1rem;
}
.list--simple li ul,
.list-wrapper--simple ul li ul {
  margin-top: 1rem;
}
.list--simple a,
.list-wrapper--simple ul a {
  font-weight: 400;
}

.list--filter {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--filter li {
  list-style: none;
}
.list--filter li {
  padding: 0.25rem 0 0.25rem 0.5rem;
}

.list--multilevel {
  list-style-type: decimal;
}
.list--multilevel ol {
  list-style-type: lower-alpha;
}
.list--multilevel ol ol {
  list-style-type: lower-roman;
}

.list--outline {
  list-style-type: upper-roman;
}
.list--outline ol {
  list-style-type: upper-alpha;
}
.list--outline ol ol {
  list-style-type: decimal;
}
.list--outline ol ol ol {
  list-style-type: lower-latin;
}
.list--outline ol ol ol ol {
  list-style-type: lower-roman;
}

.list--reset {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--reset li {
  list-style: none;
}

.list--accordion {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
  margin-bottom: 1rem;
}
.list--accordion li {
  list-style: none;
}
.list--accordion > li {
  padding: 0 0.5rem 0.5rem var(--list-faq-prefix-spacing);
}
.list--accordion > li:nth-child(odd) {
  position: relative;
  display: block;
  padding: 0.5rem 2rem;
  border: 0;
  border-bottom: 1px solid #cce0f3;
  background-color: #022851;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 800;
  text-align: left;
  white-space: normal;
}
.list--accordion > li:nth-child(odd):before {
  position: absolute;
  margin: -0.15em 0 0 -1.43em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.5;
}
.list--accordion > li:nth-child(odd) > p {
  margin: 0;
}
.list--accordion > li:nth-child(even) {
  padding: 0.5rem 2rem;
  background-color: #ebf3fa;
  color: #000;
}
.list--accordion .active:before {
  transform: rotate(90deg);
}

.list--download {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--download li {
  list-style: none;
}
.list--download a {
  color: #13639e;
  text-decoration: underline;
}
.list--download a:hover {
  color: #00b2e3;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_category-brand.css.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_category-brand.css.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.category-brand__text {
  color: var(--category-brand);
}
.category-brand__text--knock-out {
  background-color: var(--category-brand, #13639e);
  color: var(--category-brand-contrast-color, #fff);
}
.category-brand__background {
  background-color: var(--category-brand, #13639e);
}
.category-brand__background a {
  color: var(--category-brand-contrast-color, inherit);
}
.category-brand__background a:hover {
  color: var(--category-brand-contrast-color, inherit);
}
.category-brand__background h1,
.category-brand__background h2,
.category-brand__background h3,
.category-brand__background h4,
.category-brand__background h5,
.category-brand__background h6,
.category-brand__background figcaption {
  color: var(--category-brand-contrast-color, inherit);
}
.category-brand__background li:before {
  color: var(--category-brand-contrast-color, inherit);
}
.category-brand__background--lighten {
  background-color: rgba(var(--category-brand-rgb, #13639e), 0.1);
}
.category-brand__arrow:before {
  display: inline-block;
  margin: 0 0.5em 0 -1.5em;
  color: var(--category-brand, inherit);
  content: "→";
  font-family: Arial;
  font-size: 1.25em;
  font-weight: normal;
  line-height: 1;
}

.admin-blue,
.admin-blue a {
  --category-brand: #13639e;
  color: var(--category-brand);
}

.category-brand--admin-blue {
  --category-brand: #13639e;
  --category-brand-rgb: 19, 99, 158;
  --category-brand-rgb--dark: 10, 50, 79;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.rec-pool,
.rec-pool a {
  --category-brand: #6fcfeb;
  color: var(--category-brand);
}

.category-brand--rec-pool {
  --category-brand: #6fcfeb;
  --category-brand-rgb: 111, 207, 235;
  --category-brand-rgb--dark: 56, 104, 118;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.tahoe,
.tahoe a {
  --category-brand: #00b2e3;
  color: var(--category-brand);
}

.category-brand--tahoe {
  --category-brand: #00b2e3;
  --category-brand-rgb: 0, 178, 227;
  --category-brand-rgb--dark: 0, 89, 114;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.sky-blue,
.sky-blue a {
  --category-brand: #00b2e3;
  color: var(--category-brand);
}

.category-brand--sky-blue {
  --category-brand: #00b2e3;
  --category-brand-rgb: 0, 178, 227;
  --category-brand-rgb--dark: 0, 89, 114;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.gunrock,
.gunrock a {
  --category-brand: #0047ba;
  color: var(--category-brand);
}

.category-brand--gunrock {
  --category-brand: #0047ba;
  --category-brand-rgb: 0, 71, 186;
  --category-brand-rgb--dark: 0, 36, 93;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.bodega,
.bodega a {
  --category-brand: #003a5d;
  color: var(--category-brand);
}

.category-brand--bodega {
  --category-brand: #003a5d;
  --category-brand-rgb: 0, 58, 93;
  --category-brand-rgb--dark: 0, 29, 47;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.winter-sky-gray,
.winter-sky-gray a {
  --category-brand: #003a5d;
  color: var(--category-brand);
}

.category-brand--winter-sky-gray {
  --category-brand: #003a5d;
  --category-brand-rgb: 0, 58, 93;
  --category-brand-rgb--dark: 0, 29, 47;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.rain,
.rain a {
  --category-brand: #03f9e6;
  color: var(--category-brand);
}

.category-brand--rain {
  --category-brand: #03f9e6;
  --category-brand-rgb: 3, 249, 230;
  --category-brand-rgb--dark: 2, 125, 115;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.arboretum,
.arboretum a {
  --category-brand: #00c4b3;
  color: var(--category-brand);
}

.category-brand--arboretum {
  --category-brand: #00c4b3;
  --category-brand-rgb: 0, 196, 179;
  --category-brand-rgb--dark: 0, 98, 90;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.cork-oak,
.cork-oak a {
  --category-brand: #00c4b3;
  color: var(--category-brand);
}

.category-brand--cork-oak {
  --category-brand: #00c4b3;
  --category-brand-rgb: 0, 196, 179;
  --category-brand-rgb--dark: 0, 98, 90;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.putah-creek,
.putah-creek a {
  --category-brand: #008eaa;
  color: var(--category-brand);
}

.category-brand--putah-creek {
  --category-brand: #008eaa;
  --category-brand-rgb: 0, 142, 170;
  --category-brand-rgb--dark: 0, 71, 85;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.rec-pool-blue,
.rec-pool-blue a {
  --category-brand: #008eaa;
  color: var(--category-brand);
}

.category-brand--rec-pool-blue {
  --category-brand: #008eaa;
  --category-brand-rgb: 0, 142, 170;
  --category-brand-rgb--dark: 0, 71, 85;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.delta,
.delta a {
  --category-brand: #00524c;
  color: var(--category-brand);
}

.category-brand--delta {
  --category-brand: #00524c;
  --category-brand-rgb: 0, 82, 76;
  --category-brand-rgb--dark: 0, 41, 38;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.farmers-market,
.farmers-market a {
  --category-brand: #aada91;
  color: var(--category-brand);
}

.category-brand--farmers-market {
  --category-brand: #aada91;
  --category-brand-rgb: 170, 218, 145;
  --category-brand-rgb--dark: 85, 109, 73;
  --category-brand-contrast-color: #266041;
  --category-brand-contrast-color-rgb: 38, 96, 65;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.hart-hall-stucco,
.hart-hall-stucco a {
  --category-brand: #aada91;
  color: var(--category-brand);
}

.category-brand--hart-hall-stucco {
  --category-brand: #aada91;
  --category-brand-rgb: 170, 218, 145;
  --category-brand-rgb--dark: 85, 109, 73;
  --category-brand-contrast-color: #266041;
  --category-brand-contrast-color-rgb: 38, 96, 65;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.sage,
.sage a {
  --category-brand: #6cca98;
  color: var(--category-brand);
}

.category-brand--sage {
  --category-brand: #6cca98;
  --category-brand-rgb: 108, 202, 152;
  --category-brand-rgb--dark: 54, 101, 76;
  --category-brand-contrast-color: #00524c;
  --category-brand-contrast-color-rgb: 0, 82, 76;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.sage-green,
.sage-green a {
  --category-brand: #6cca98;
  color: var(--category-brand);
}

.category-brand--sage-green {
  --category-brand: #6cca98;
  --category-brand-rgb: 108, 202, 152;
  --category-brand-rgb--dark: 54, 101, 76;
  --category-brand-contrast-color: #00524c;
  --category-brand-contrast-color-rgb: 0, 82, 76;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.quad,
.quad a {
  --category-brand: #3dae2b;
  color: var(--category-brand);
}

.category-brand--quad {
  --category-brand: #3dae2b;
  --category-brand-rgb: 61, 174, 43;
  --category-brand-rgb--dark: 31, 87, 22;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.sunny-grass,
.sunny-grass a {
  --category-brand: #3dae2b;
  color: var(--category-brand);
}

.category-brand--sunny-grass {
  --category-brand: #3dae2b;
  --category-brand-rgb: 61, 174, 43;
  --category-brand-rgb--dark: 31, 87, 22;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.redwood,
.redwood a {
  --category-brand: #266041;
  color: var(--category-brand);
}

.category-brand--redwood {
  --category-brand: #266041;
  --category-brand-rgb: 38, 96, 65;
  --category-brand-rgb--dark: 19, 48, 33;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.evergreen,
.evergreen a {
  --category-brand: #266041;
  color: var(--category-brand);
}

.category-brand--evergreen {
  --category-brand: #266041;
  --category-brand-rgb: 38, 96, 65;
  --category-brand-rgb--dark: 19, 48, 33;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.golden-state,
.golden-state a {
  --category-brand: #ffff3b;
  color: var(--category-brand);
}

.category-brand--golden-state {
  --category-brand: #ffff3b;
  --category-brand-rgb: 255, 255, 59;
  --category-brand-rgb--dark: 128, 128, 30;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.sunflower,
.sunflower a {
  --category-brand: #ffdc00;
  color: var(--category-brand);
}

.category-brand--sunflower {
  --category-brand: #ffdc00;
  --category-brand-rgb: 255, 220, 0;
  --category-brand-rgb--dark: 128, 110, 0;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.golden-lupine,
.golden-lupine a {
  --category-brand: #ffdc00;
  color: var(--category-brand);
}

.category-brand--golden-lupine {
  --category-brand: #ffdc00;
  --category-brand-rgb: 255, 220, 0;
  --category-brand-rgb--dark: 128, 110, 0;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.poppy,
.poppy a {
  --category-brand: #f18a00;
  color: var(--category-brand);
}

.category-brand--poppy {
  --category-brand: #f18a00;
  --category-brand-rgb: 241, 138, 0;
  --category-brand-rgb--dark: 121, 69, 0;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.california-poppy,
.california-poppy a {
  --category-brand: #f18a00;
  color: var(--category-brand);
}

.category-brand--california-poppy {
  --category-brand: #f18a00;
  --category-brand-rgb: 241, 138, 0;
  --category-brand-rgb--dark: 121, 69, 0;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.california,
.california a {
  --category-brand: #8a532f;
  color: var(--category-brand);
}

.category-brand--california {
  --category-brand: #8a532f;
  --category-brand-rgb: 138, 83, 47;
  --category-brand-rgb--dark: 69, 42, 24;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.south-hall-brown,
.south-hall-brown a {
  --category-brand: #8a532f;
  color: var(--category-brand);
}

.category-brand--south-hall-brown {
  --category-brand: #8a532f;
  --category-brand-rgb: 138, 83, 47;
  --category-brand-rgb--dark: 69, 42, 24;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.rose,
.rose a {
  --category-brand: #ff8189;
  color: var(--category-brand);
}

.category-brand--rose {
  --category-brand: #ff8189;
  --category-brand-rgb: 255, 129, 137;
  --category-brand-rgb--dark: 128, 65, 69;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.mu-brick,
.mu-brick a {
  --category-brand: #ff8189;
  color: var(--category-brand);
}

.category-brand--mu-brick {
  --category-brand: #ff8189;
  --category-brand-rgb: 255, 129, 137;
  --category-brand-rgb--dark: 128, 65, 69;
  --category-brand-contrast-color: #022851;
  --category-brand-contrast-color-rgb: 2, 40, 81;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.strawberry,
.strawberry a {
  --category-brand: #f93549;
  color: var(--category-brand);
}

.category-brand--strawberry {
  --category-brand: #f93549;
  --category-brand-rgb: 249, 53, 73;
  --category-brand-rgb--dark: 125, 27, 37;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.double-decker,
.double-decker a {
  --category-brand: #c10230;
  color: var(--category-brand);
}

.category-brand--double-decker {
  --category-brand: #c10230;
  --category-brand-rgb: 193, 2, 48;
  --category-brand-rgb--dark: 97, 1, 24;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.unitrans-red,
.unitrans-red a {
  --category-brand: #c10230;
  color: var(--category-brand);
}

.category-brand--unitrans-red {
  --category-brand: #c10230;
  --category-brand-rgb: 193, 2, 48;
  --category-brand-rgb--dark: 97, 1, 24;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.merlot,
.merlot a {
  --category-brand: #79242f;
  color: var(--category-brand);
}

.category-brand--merlot {
  --category-brand: #79242f;
  --category-brand-rgb: 121, 36, 47;
  --category-brand-rgb--dark: 61, 18, 24;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.thiebaud-icing,
.thiebaud-icing a {
  --category-brand: #f095cd;
  color: var(--category-brand);
}

.category-brand--thiebaud-icing {
  --category-brand: #f095cd;
  --category-brand-rgb: 240, 149, 205;
  --category-brand-rgb--dark: 120, 75, 103;
  --category-brand-contrast-color: #481268;
  --category-brand-contrast-color-rgb: 72, 18, 104;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

.redbud,
.redbud a {
  --category-brand: #c6007e;
  color: var(--category-brand);
}

.category-brand--redbud {
  --category-brand: #c6007e;
  --category-brand-rgb: 198, 0, 126;
  --category-brand-rgb--dark: 99, 0, 63;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.western-redbud,
.western-redbud a {
  --category-brand: #c6007e;
  color: var(--category-brand);
}

.category-brand--western-redbud {
  --category-brand: #c6007e;
  --category-brand-rgb: 198, 0, 126;
  --category-brand-rgb--dark: 99, 0, 63;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.pinot,
.pinot a {
  --category-brand: #76236c;
  color: var(--category-brand);
}

.category-brand--pinot {
  --category-brand: #76236c;
  --category-brand-rgb: 118, 35, 108;
  --category-brand-rgb--dark: 59, 18, 54;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.wine-grape,
.wine-grape a {
  --category-brand: #76236c;
  color: var(--category-brand);
}

.category-brand--wine-grape {
  --category-brand: #76236c;
  --category-brand-rgb: 118, 35, 108;
  --category-brand-rgb--dark: 59, 18, 54;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.cabernet,
.cabernet a {
  --category-brand: #481268;
  color: var(--category-brand);
}

.category-brand--cabernet {
  --category-brand: #481268;
  --category-brand-rgb: 72, 18, 104;
  --category-brand-rgb--dark: 36, 9, 52;
  --category-brand-contrast-color: #fff;
  --category-brand-contrast-color-rgb: 255, 255, 255;
}

.centennial-walk-gray,
.centennial-walk-gray a {
  --category-brand: #b2b2b2;
  color: var(--category-brand);
}

.category-brand--centennial-walk-gray {
  --category-brand: #b2b2b2;
  --category-brand-rgb: 178, 178, 178;
  --category-brand-rgb--dark: 89, 89, 89;
  --category-brand-contrast-color: #000;
  --category-brand-contrast-color-rgb: 0, 0, 0;
  --category-brand-featured: var(--category-brand-contrast-color, #13639e);
  --category-brand-filter: brightness(0%);
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_collapse.css.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_collapse.css.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.collapse__title {
  background-color: var(--category-brand, #022851);
  color: var(--category-brand-contrast-color, #fff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 0;
  padding: 1.5rem 2rem 1.5rem 1rem;
  cursor: pointer;
  font-size: 1.25rem;
}
.collapse__title:after {
  margin-left: 0.5rem;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
@media (min-width: 480px) {
  .collapse__title {
    font-size: 1.5rem;
    line-height: 1.4;
  }
}
.collapse__title:after {
  color: var(--category-brand-contrast-color, #ffbf00);
  content: "";
  transition: all 0.4s ease-in;
}
.collapse__title--open:after {
  transform: rotate(135deg);
}
.collapse__content {
  padding: 1rem;
  border: 1px solid #022851;
  border-top: 0;
  background-color: #fff;
}
.collapse__content li {
  margin-bottom: 0.5rem;
}
.collapse__content li a {
  font-weight: normal;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.message-area {
  position: relative;
  padding: 1rem 2rem 1rem 1rem;
  background-color: #ffbf00;
}
@media (min-width: 992px) {
  .message-area {
    padding: 1.5rem 1.5rem;
  }
}
.message-area a {
  color: #022851;
}
.message-area a:hover {
  color: #022851;
  text-decoration: none;
}
.message-area--closed {
  position: relative;
  top: 0;
  right: 0;
  height: 1.85rem;
  padding: 1.25rem 2rem;
}
@media (min-width: 992px) {
  .message-area--closed {
    height: 1rem;
    padding: 1rem 2rem;
  }
}
.message-area--closed .message-area__content {
  visibility: hidden;
}
.message-area__title {
  color: #022851;
  font-size: 1.3rem;
}
.message-area__body {
  color: #022851;
}
.message-area__button {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  padding: 0.13rem 0 0 0;
  border: 0;
  background: transparent;
}
@media (min-width: 992px) {
  .message-area__button {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.2;
  }
}
.message-area__button:before {
  display: block;
  margin-bottom: 1rem;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 1.5rem;
  font-weight: 700;
}
@media (min-width: 992px) {
  .message-area__button:before {
    font-size: 1rem;
  }
}
.message-area--closed .message-area__button:before {
  content: "";
}
.message-area__button:hover {
  color: #fff;
}
.message-area__button:focus {
  border: 1px solid #022851;
  border-radius: 0.25rem;
  background-color: #022851;
  color: #fff;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_messaging-alert.css.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_messaging-alert.css.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.alert {
  margin: 0 0 1rem;
  padding: 2rem;
  background-color: #dff4fb;
  color: #022851;
  font-size: 1rem;
  font-style: italic;
}
@media (min-width: 992px) {
  .alert {
    padding-right: 3%;
    padding-left: 3%;
  }
}
@media (min-width: 1200px) {
  .alert {
    padding-right: 3%;
    padding-left: 3%;
  }
}
@media (min-width: 1600px) {
  .alert {
    padding-right: 5%;
    padding-left: 5%;
  }
}
.l-container .alert {
  padding: 2rem;
  border-radius: 8px;
}
.alert--success {
  background-color: #d6edca;
  color: #003a5d;
}
.alert--warning {
  background-color: #fff199;
  color: #191919;
}
.alert--error {
  background-color: #ffbec2;
  color: #191919;
}
.alert--flush {
  margin-bottom: 0;
}
.alert ul {
  margin: 0;
  padding: 0;
}
.alert .button {
  margin-bottom: 0.5rem;
}
.alert li .button {
  margin-left: -1rem;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_search-form.css.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_search-form.css.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.search-form {
  position: relative;
  background: #fff4d2;
}
.search-form__input {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding-right: 70px;
  border: 0;
  background: transparent;
  box-shadow: none;
  color: #022851;
  font-size: 1.25rem;
  line-height: 1.3;
}
.search-form__submit {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 1em;
  overflow: hidden;
  width: 2.1em;
  height: 2.1em;
  border: 0;
  border-radius: 2.2em;
  background-color: #13639e;
  box-shadow: none;
  color: #fffbed;
  cursor: pointer;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  letter-spacing: 1em;
  line-height: 1.6;
  text-indent: -0.2em;
  transform: translateY(-50%);
  transition: background-color 0.25s ease-in-out;
}
.search-form__submit:hover {
  background-color: #73abdd;
}
.search-form__submit:focus {
  background-color: #ffbf00;
  color: #fffbed;
}
.search-form__input:focus, .search-form__submit:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px #022851;
  outline-color: transparent;
  outline-style: solid;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_search-popup.css.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_search-popup.css.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

@charset "UTF-8";
.search-popup {
  padding: 1rem;
  border-bottom: 1px solid #fff;
}
@media (min-width: 992px) {
  .search-popup {
    position: absolute;
    z-index: 850;
    right: 0;
    left: 0;
    visibility: hidden;
    height: 8em;
    padding: initial;
    border-color: #999;
    background-color: #fff;
    opacity: 0;
    text-align: center;
    transition: opacity 0.3s;
  }
}
@media (min-width: 992px) {
  .search-popup .search-form {
    width: 60%;
    margin: 2rem auto;
  }
}
.search-popup.is-open {
  visibility: visible;
  opacity: 1;
}
.search-popup__open {
  margin-left: 1rem;
  display: none;
  align-items: center;
  margin-right: -2px;
  padding: 0;
  border: 0;
  background-color: #14447a;
}
.search-popup__open:before {
  width: 1rem;
  height: 3.25rem;
  margin-right: 0.5rem;
  margin-left: -0.95rem;
  background-color: #14447a;
  clip-path: polygon(93% 0, 100% 0, 100% 102%, 0% 102%);
  content: "";
}
.search-popup__open:focus:before, .search-popup__open:hover:before {
  background-color: #ffbf00;
}
.search-popup__open:after {
  z-index: 1;
  width: 1rem;
  height: 3.25rem;
  margin-right: -0.95rem;
  margin-left: 0.5rem;
  background-color: #14447a;
  clip-path: polygon(0 0, 100% 0, 7% 100%, 0% 100%);
  content: "";
}
.search-popup__open:focus:after, .search-popup__open:hover:after {
  background-color: #ffbf00;
}
@media (min-width: 992px) {
  .search-popup__open {
    display: flex;
  }
}
.search-popup__open:focus, .search-popup__open:hover {
  background-color: #ffbf00;
  color: #022851;
  outline: none;
}
.search-popup--edge .search-popup__open {
  padding-right: 0.5rem;
}
.search-popup__open:before {
  margin-right: 0.15rem;
}
.search-popup__open:after {
  margin-left: 0.15rem;
}
.search-popup__open-icon {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  width: 2.4375rem;
  height: 2.4375rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: #022851;
  background-size: 50%;
  color: #fff;
  text-indent: inherit;
}
.search-popup__open-icon:before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}
.search-popup__open-icon--close:before {
  content: "";
}
.search-popup__close-icon {
  display: block;
  width: 2.1rem;
  height: 3px;
  background-color: #999;
  transform: rotate(45deg);
}
.search-popup__close-icon:before {
  position: absolute;
  z-index: 830;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #999;
  content: "";
  transform: rotate(90deg);
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/6_utility/_u-visibility.css.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/6_utility/_u-visibility.css.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.u-block {
  display: block !important;
}

.u-inline {
  display: inline !important;
}

.u-hidden {
  display: none !important;
}

.u-hidden--visually {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  overflow: hidden !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  border: 0 !important;
}

.u-shown--visually {
  position: inherit !important;
  clip: auto !important;
  width: auto !important;
  height: auto !important;
}

.u-hide-text {
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
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
 * 2. Correct the odd "em" font sizing in all browsers.
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
 * Prevent "sub" and "sup" elements from affecting the line height in
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
 * 1. Prevent a WebKit bug where (2) destroys native "audio" and "video"
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
 * 2. Change font properties to "inherit" in Safari.
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
 * 2. Correct the color inheritance from "fieldset" elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    "fieldset" elements in all browsers.
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
((_a = (_f = globalThis)['litElementVersions']) !== null && _a !== void 0 ? _a : (_f['litElementVersions'] = [])).push('3.0.0-rc.1');
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
    // https://github.com/Polymer/lit-html/issues/1457
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
                // + See the changelog at https://github.com/Polymer/lit-html/blob/main/packages/lit-element/CHANGELOG.md`
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

/***/ "./node_modules/lit-html/development/async-directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/async-directive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directive": () => (/* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_2__.directive),
/* harmony export */   "AsyncDirective": () => (/* binding */ AsyncDirective)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Overview:
 *
 * This module is designed to add support for an async `setValue` API and
 * `disconnected` callback to directives with the least impact on the core
 * runtime or payload when that feature is not used.
 *
 * The strategy is to introduce a `AsyncDirective` subclass of
 * `Directive` that climbs the "parent" tree in its constructor to note which
 * branches of lit-html's "logical tree" of data structures contain such
 * directives and thus need to be crawled when a subtree is being cleared (or
 * manually disconnected) in order to run the `disconnected` callback.
 *
 * The "nodes" of the logical tree include Parts, TemplateInstances (for when a
 * TemplateResult is committed to a value of a ChildPart), and Directives; these
 * all implement a common interface called `DisconnectableChild`. Each has a
 * `_$parent` reference which is set during construction in the core code, and a
 * `_$disconnectableChildren` field which is initially undefined.
 *
 * The sparse tree created by means of the `AsyncDirective` constructor
 * crawling up the `_$parent` tree and placing a `_$disconnectableChildren` Set
 * on each parent that includes each child that contains a
 * `AsyncDirective` directly or transitively via its children. In order
 * disconnect (or reconnect) a tree, the `_$setChildPartConnected` API is patched
 * onto ChildParts as a directive climbs the parent tree, which is called by the
 * core when clearing a part if it exists. When called, that method iterates
 * over the sparse tree of Set<DisconnectableChildren> built up by
 * AsyncDirectives, and calls `_$setDirectiveConnected` on any
 * directives that are encountered in that tree, running the required callbacks.
 *
 * A given "logical tree" of lit-html data-structures might look like this:
 *
 *  ChildPart(N1) _$dC=[D2,T3]
 *   ._directive
 *     AsyncDirective(D2)
 *   ._value // user value was TemplateResult
 *     TemplateInstance(T3) _$dC=[A4,A6,N10,N12]
 *      ._parts[]
 *        AttributePart(A4) _$dC=[D5]
 *         ._directives[]
 *           AsyncDirective(D5)
 *        AttributePart(A6) _$dC=[D7,D8]
 *         ._directives[]
 *           AsyncDirective(D7)
 *           Directive(D8) _$dC=[D9]
 *            ._directive
 *              AsyncDirective(D9)
 *        ChildPart(N10) _$dC=[D11]
 *         ._directive
 *           AsyncDirective(D11)
 *         ._value
 *           string
 *        ChildPart(N12) _$dC=[D13,N14,N16]
 *         ._directive
 *           AsyncDirective(D13)
 *         ._value // user value was iterable
 *           Array<ChildPart>
 *             ChildPart(N14) _$dC=[D15]
 *              ._value
 *                string
 *             ChildPart(N16) _$dC=[D17,T18]
 *              ._directive
 *                AsyncDirective(D17)
 *              ._value // user value was TemplateResult
 *                TemplateInstance(T18) _$dC=[A19,A21,N25]
 *                 ._parts[]
 *                   AttributePart(A19) _$dC=[D20]
 *                    ._directives[]
 *                      AsyncDirective(D20)
 *                   AttributePart(A21) _$dC=[22,23]
 *                    ._directives[]
 *                      AsyncDirective(D22)
 *                      Directive(D23) _$dC=[D24]
 *                       ._directive
 *                         AsyncDirective(D24)
 *                   ChildPart(N25) _$dC=[D26]
 *                    ._directive
 *                      AsyncDirective(D26)
 *                    ._value
 *                      string
 *
 * Example 1: The directive in ChildPart(N12) updates and returns `nothing`. The
 * ChildPart will _clear() itself, and so we need to disconnect the "value" of
 * the ChildPart (but not its directive). In this case, when `_clear()` calls
 * `_$setChildPartConnected()`, we don't iterate all of the
 * _$disconnectableChildren, rather we do a value-specific disconnection: i.e.
 * since the _value was an Array<ChildPart> (because an iterable had been
 * committed), we iterate the array of ChildParts (N14, N16) and run
 * `setConnected` on them (which does recurse down the full tree of
 * `_$disconnectableChildren` below it, and also removes N14 and N16 from N12's
 * `_$disconnectableChildren`). Once the values have been disconnected, we then
 * check whether the ChildPart(N12)'s list of `_$disconnectableChildren` is empty
 * (and would remove it from its parent TemplateInstance(T3) if so), but since
 * it would still contain its directive D13, it stays in the disconnectable
 * tree.
 *
 * Example 2: In the course of Example 1, `setConnected` will reach
 * ChildPart(N16); in this case the entire part is being disconnected, so we
 * simply iterate all of N16's `_$disconnectableChildren` (D17,T18) and
 * recursively run `setConnected` on them. Note that we only remove children
 * from `_$disconnectableChildren` for the top-level values being disconnected
 * on a clear; doing this bookkeeping lower in the tree is wasteful since it's
 * all being thrown away.
 *
 * Example 3: If the LitElement containing the entire tree above becomes
 * disconnected, it will run `childPart.setConnected()` (which calls
 * `childPart._$setChildPartConnected()` if it exists); in this case, we
 * recursively run `setConnected()` over the entire tree, without removing any
 * children from `_$disconnectableChildren`, since this tree is required to
 * re-connect the tree, which does the same operation, simply passing
 * `isConnectd: true` down the tree, signaling which callback to run.
 */




const DEV_MODE = true;
/**
 * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
 * the connected state of directives and run `disconnected`/ `reconnected`
 * callbacks.
 *
 * @return True if there were children to disconnect; false otherwise
 */
const setChildrenConnected = (parent, isConnected) => {
    var _a, _b;
    const children = parent._$disconnetableChildren;
    if (children === undefined) {
        return false;
    }
    for (const obj of children) {
        // The existence of `_$setDirectiveConnected` is used as a "brand" to
        // disambiguate AsyncDirectives from other DisconnectableChildren
        // (as opposed to using an instanceof check to know when to call it); the
        // redundancy of "Directive" in the API name is to avoid conflicting with
        // `_$setChildPartConnected`, which exists `ChildParts` which are also in
        // this list
        // Disconnect Directive (and any nested directives contained within)
        (_b = (_a = obj)._$setDirectiveConnected) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
        // Disconnect Part/TemplateInstance
        setChildrenConnected(obj, isConnected);
    }
    return true;
};
/**
 * Removes the given child from its parent list of disconnectable children, and
 * if the parent list becomes empty as a result, removes the parent from its
 * parent, and so forth up the tree when that causes subsequent parent lists to
 * become empty.
 */
const removeDisconnectableFromParent = (obj) => {
    let parent, children;
    do {
        if ((parent = obj._$parent) === undefined) {
            break;
        }
        children = parent._$disconnetableChildren;
        children.delete(obj);
        obj = parent;
    } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
};
const addDisconnectableToParent = (obj) => {
    // Climb the parent tree, creating a sparse tree of children needing
    // disconnection
    for (let parent; (parent = obj._$parent); obj = parent) {
        let children = parent._$disconnetableChildren;
        if (children === undefined) {
            parent._$disconnetableChildren = children = new Set();
        }
        else if (children.has(obj)) {
            // Once we've reached a parent that already contains this child, we
            // can short-circuit
            break;
        }
        children.add(obj);
        installDisconnectAPI(parent);
    }
};
/**
 * Changes the parent reference of the ChildPart, and updates the sparse tree of
 * Disconnectable children accordingly.
 *
 * Note, this method will be patched onto ChildPart instances and called from
 * the core code when parts are moved between different parents.
 */
function reparentDisconnectables(newParent) {
    if (this._$disconnetableChildren !== undefined) {
        removeDisconnectableFromParent(this);
        this._$parent = newParent;
        addDisconnectableToParent(this);
    }
    else {
        this._$parent = newParent;
    }
}
/**
 * Sets the connected state on any directives contained within the committed
 * value of this part (i.e. within a TemplateInstance or iterable of
 * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
 * any directives stored on the ChildPart (when `valueOnly` is false).
 *
 * `isClearingValue` should be passed as `true` on a top-level part that is
 * clearing itself, and not as a result of recursively disconnecting directives
 * as part of a `clear` operation higher up the tree. This both ensures that any
 * directive on this ChildPart that produced a value that caused the clear
 * operation is not disconnected, and also serves as a performance optimization
 * to avoid needless bookkeeping when a subtree is going away; when clearing a
 * subtree, only the top-most part need to remove itself from the parent.
 *
 * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
 * result of truncating an iterable.
 *
 * Note, this method will be patched onto ChildPart instances and called from the
 * core code when parts are cleared or the connection state is changed by the
 * user.
 */
function setChildPartConnected(isConnected, isClearingValue = false, fromPartIndex = 0) {
    const value = this._$committedValue;
    const children = this._$disconnetableChildren;
    if (children === undefined || children.size === 0) {
        return;
    }
    if (isClearingValue) {
        if (Array.isArray(value)) {
            // Iterable case: Any ChildParts created by the iterable should be
            // disconnected and removed from this ChildPart's disconnectable
            // children (starting at `fromPartIndex` in the case of truncation)
            for (let i = fromPartIndex; i < value.length; i++) {
                setChildrenConnected(value[i], false);
                removeDisconnectableFromParent(value[i]);
            }
        }
        else if (value != null) {
            // TemplateInstance case: If the value has disconnectable children (will
            // only be in the case that it is a TemplateInstance), we disconnect it
            // and remove it from this ChildPart's disconnectable children
            setChildrenConnected(value, false);
            removeDisconnectableFromParent(value);
        }
    }
    else {
        setChildrenConnected(this, isConnected);
    }
}
/**
 * Patches disconnection API onto ChildParts.
 */
const installDisconnectAPI = (obj) => {
    var _a, _b;
    var _c, _d;
    if (obj.type == _directive_js__WEBPACK_IMPORTED_MODULE_2__.PartType.CHILD) {
        (_a = (_c = obj)._$setChildPartConnected) !== null && _a !== void 0 ? _a : (_c._$setChildPartConnected = setChildPartConnected);
        (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : (_d._$reparentDisconnectables = reparentDisconnectables);
    }
};
/**
 * An abstract `Directive` base class whose `disconnected` method will be
 * called when the part containing the directive is cleared as a result of
 * re-rendering, or when the user calls `part.setDirectiveConnection(false)` on
 * a part that was previously rendered containing the directive.
 *
 * If `part.setDirectiveConnection(true)` is subsequently called on a
 * containing part, the directive's `reconnected` method will be called prior
 * to its next `update`/`render` callbacks. When implementing `disconnected`,
 * `reconnected` should also be implemented to be compatible with reconnection.
 */
class AsyncDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_2__.Directive {
    constructor() {
        super(...arguments);
        this.isConnected = true;
        this._pendingValue = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        // @internal
        this._$disconnetableChildren = undefined;
    }
    /**
     * Initialize the part with internal fields
     * @param part
     * @param parent
     * @param attributeIndex
     */
    _$initialize(part, parent, attributeIndex) {
        super._$initialize(part, parent, attributeIndex);
        addDisconnectableToParent(this);
    }
    /**
     * Called from the core code when a directive is going away from a part (in
     * which case `shouldRemoveFromParent` should be true), and from the
     * `setChildrenConnected` helper function when recursively changing the
     * connection state of a tree (in which case `shouldRemoveFromParent` should
     * be false).
     *
     * @param isConnected
     * @param isClearingDirective - True when the directive itself is being
     *     removed; false when the tree is being disconnected
     * @internal
     */
    _$setDirectiveConnected(isConnected, isClearingDirective = true) {
        this._setConnected(isConnected);
        if (isClearingDirective) {
            setChildrenConnected(this, isConnected);
            removeDisconnectableFromParent(this);
        }
    }
    /**
     * Private method used to set the connection state of the directive and call
     * the respective `disconnected` or `reconnected` callback. Note thatsince
     * `isConnected` defaults to true, we do not run `reconnected` on first
     * render.
     *
     * If a call to `setValue` was made while disconnected, flush it to the part
     * before reconnecting.
     *
     * @param isConnected
     * @internal
     */
    _setConnected(isConnected) {
        var _a, _b;
        if (isConnected !== this.isConnected) {
            if (isConnected) {
                this.isConnected = true;
                if (this._pendingValue !== _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
                    this.setValue(this._pendingValue);
                    this._pendingValue = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
                }
                (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
            }
            else {
                this.isConnected = false;
                (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
    }
    /**
     * Override of the base `_resolve` method to ensure `reconnected` is run
     * prior to the next render.
     *
     * @override
     * @internal
     */
    _$resolve(part, props) {
        if (!this.isConnected) {
            throw new Error(`AsyncDirective ${this.constructor.name} was ` +
                `rendered while its tree was disconnected.`);
        }
        return super._$resolve(part, props);
    }
    /**
     * Sets the value of the directive's Part outside the normal `update`/`render`
     * lifecycle of a directive.
     *
     * This method should not be called synchronously from a directive's `update`
     * or `render`.
     *
     * If the method is called while the part is disconnected, the value will be
     * queued until directive is reconnected.
     *
     * @param directive The directive to update
     * @param value The value to set
     */
    setValue(value) {
        if (this.isConnected) {
            if ((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_1__.isSingleExpression)(this.__part)) {
                this.__part._$setValue(value, this);
            }
            else {
                // this.__attributeIndex will be defined in this case, but
                // assert it in dev mode
                if (DEV_MODE && this.__attributeIndex === undefined) {
                    throw new Error(`Expected this.__attributeIndex to be a number`);
                }
                const newValues = [...this.__part._$committedValue];
                newValues[this.__attributeIndex] = value;
                this.__part._$setValue(newValues, this, 0);
            }
        }
        else {
            this._pendingValue = value;
        }
    }
    /**
     * User callbacks for implementing logic to release any resources/subscriptions
     * that may have been retained by this directive. Since directives may also be
     * re-connected, `reconnected` should also be implemented to restore the
     * working state of the directive prior to the next render.
     */
    disconnected() { }
    reconnected() { }
}
//# sourceMappingURL=async-directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "TemplateResultType": () => (/* binding */ TemplateResultType),
/* harmony export */   "isTemplateResult": () => (/* binding */ isTemplateResult),
/* harmony export */   "isDirectiveResult": () => (/* binding */ isDirectiveResult),
/* harmony export */   "getDirectiveClass": () => (/* binding */ getDirectiveClass),
/* harmony export */   "isSingleExpression": () => (/* binding */ isSingleExpression),
/* harmony export */   "insertPart": () => (/* binding */ insertPart),
/* harmony export */   "setChildPartValue": () => (/* binding */ setChildPartValue),
/* harmony export */   "setCommittedValue": () => (/* binding */ setCommittedValue),
/* harmony export */   "getCommittedValue": () => (/* binding */ getCommittedValue),
/* harmony export */   "removePart": () => (/* binding */ removePart),
/* harmony export */   "clearPart": () => (/* binding */ clearPart)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;

const { _ChildPart: ChildPart } = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["_Σ"];
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const TemplateResultType = {
    HTML: 1,
    SVG: 2,
};
/**
 * Tests if a value is a TemplateResult.
 */
const isTemplateResult = (value, type) => {
    var _a, _b;
    return type === undefined
        ? ((_a = value) === null || _a === void 0 ? void 0 : _a._$litType$) !== undefined
        : ((_b = value) === null || _b === void 0 ? void 0 : _b._$litType$) === type;
};
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = (value) => { var _a; return ((_a = value) === null || _a === void 0 ? void 0 : _a._$litDirective$) !== undefined; };
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = (value) => { var _a; return (_a = value) === null || _a === void 0 ? void 0 : _a._$litDirective$; };
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = (part) => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
    var _a;
    const container = wrap(containerPart._$startNode).parentNode;
    const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
    if (part === undefined) {
        const startNode = wrap(container).insertBefore(createMarker(), refNode);
        const endNode = wrap(container).insertBefore(createMarker(), refNode);
        part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
    }
    else {
        const endNode = wrap(part._$endNode).nextSibling;
        const parentChanged = part._$parent !== containerPart;
        if (parentChanged) {
            (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
            // Note that although `_$reparentDisconnectables` updates the part's
            // `_$parent` reference after unlinking from its current parent, that
            // method only exists if Disconnectables are present, so we need to
            // unconditionally set it here
            part._$parent = containerPart;
        }
        if (endNode !== refNode || parentChanged) {
            let start = part._$startNode;
            while (start !== endNode) {
                const n = wrap(start).nextSibling;
                wrap(container).insertBefore(start, refNode);
                start = n;
            }
        }
    }
    return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
    part._$setValue(value, directiveParent);
    return part;
};
// A sentinal value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => (part._$committedValue = value);
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being commited.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = (part) => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = (part) => {
    var _a;
    (_a = part._$setChildPartConnected) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
    let start = part._$startNode;
    const end = wrap(part._$endNode).nextSibling;
    while (start !== end) {
        const n = wrap(start).nextSibling;
        wrap(start).remove();
        start = n;
    }
};
const clearPart = (part) => {
    part._$clear();
};
//# sourceMappingURL=directive-helpers.js.map

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
        this._$disconnetableChildren = undefined;
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
        this._$disconnetableChildren = undefined;
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
                // https://github.com/Polymer/lit-html/issues/1266
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
        this._$disconnetableChildren = undefined;
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
        this._$disconnetableChildren = undefined;
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
((_e = (_f = globalThis)['litHtmlVersions']) !== null && _e !== void 0 ? _e : (_f['litHtmlVersions'] = [])).push('2.0.0-rc.2');
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/async-directive.js":
/*!*********************************************!*\
  !*** ./node_modules/lit/async-directive.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncDirective": () => (/* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.AsyncDirective),
/* harmony export */   "directive": () => (/* reexport safe */ lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive)
/* harmony export */ });
/* harmony import */ var lit_html_async_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/async-directive.js */ "./node_modules/lit-html/development/async-directive.js");

//# sourceMappingURL=async-directive.js.map


/***/ }),

/***/ "./node_modules/lit/directive.js":
/*!***************************************!*\
  !*** ./node_modules/lit/directive.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.Directive),
/* harmony export */   "PartType": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.PartType),
/* harmony export */   "directive": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive)
/* harmony export */ });
/* harmony import */ var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directive.js */ "./node_modules/lit-html/development/directive.js");

//# sourceMappingURL=directive.js.map


/***/ }),

/***/ "./node_modules/lit/html.js":
/*!**********************************!*\
  !*** ./node_modules/lit/html.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Σ": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__["_Σ"]),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.noChange),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_0__.svg)
/* harmony export */ });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");

//# sourceMappingURL=html.js.map


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
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");

//# sourceMappingURL=index.js.map


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
/* harmony import */ var _elements_ucd_theme_alert_ucd_theme_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/ucd-theme-alert/ucd-theme-alert */ "../elements/ucd-theme-alert/ucd-theme-alert.js");
/* harmony import */ var _elements_ucd_theme_message_area_ucd_theme_message_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/ucd-theme-message-area/ucd-theme-message-area */ "../elements/ucd-theme-message-area/ucd-theme-message-area.js");
/* harmony import */ var _elements_ucd_theme_list_accordion_ucd_theme_list_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/ucd-theme-list-accordion/ucd-theme-list-accordion */ "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.js");
/* harmony import */ var _elements_ucd_theme_form_search_ucd_theme_form_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ucd-theme-form-search/ucd-theme-form-search */ "../elements/ucd-theme-form-search/ucd-theme-form-search.js");
/* harmony import */ var _elements_ucd_theme_header_search_popup_ucd_theme_header_search_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup */ "../elements/ucd-theme-header-search-popup/ucd-theme-header-search-popup.js");
/* harmony import */ var _elements_ucd_theme_collapse_ucd_theme_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/ucd-theme-collapse/ucd-theme-collapse */ "../elements/ucd-theme-collapse/ucd-theme-collapse.js");






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtYWxlcnQvdWNkLXRoZW1lLWFsZXJ0LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1hbGVydC91Y2QtdGhlbWUtYWxlcnQudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1jb2xsYXBzZS91Y2QtdGhlbWUtY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWNvbGxhcHNlL3VjZC10aGVtZS1jb2xsYXBzZS50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWZvcm0tc2VhcmNoL3VjZC10aGVtZS1mb3JtLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtZm9ybS1zZWFyY2gvdWNkLXRoZW1lLWZvcm0tc2VhcmNoLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uL3VjZC10aGVtZS1saXN0LWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtbGlzdC1hY2NvcmRpb24vdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYS91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91dGlscy9kaXJlY3RpdmVzL21vdGlvbi1jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9faGVhZGluZ3MuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvMl9iYXNlX2NsYXNzL19saXN0cy5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fY2F0ZWdvcnktYnJhbmQuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX2NvbGxhcHNlLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19tZXNzYWdlLWFyZWEuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX21lc3NhZ2luZy1hbGVydC5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fc2VhcmNoLWZvcm0uY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3NlYXJjaC1wb3B1cC5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy82X3V0aWxpdHkvX3UtdmlzaWJpbGl0eS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy9ub3JtYWxpemUuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2FzeW5jLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2FzeW5jLWRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC9odG1sLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3QtYXBwLy4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDRCQUE0QiwyQ0FBVTs7QUFFckQ7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLFdBQVcsK0RBQU07QUFDakIsRzs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdFQUFXO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZ0M7QUFDa0Q7O0FBRTNFO0FBQ1Asa0JBQWtCLG9DQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJGQUFXO0FBQ2Y7QUFDQTtBQUNBOztBQUVPLG1CO0FBQ1AsT0FBTyxxQ0FBSTtBQUNYLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTs7QUFFQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJpQztBQUMwQjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwrQkFBK0IsMkNBQVU7O0FBRXhEO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0IsZUFBZSw2QkFBNkI7QUFDNUMsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUEsOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R2dDOztBQUU4QztBQUNHOztBQUVaOztBQUU5RDtBQUNQLHdCQUF3QixvQ0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMEZBQVc7QUFDZixJQUFJLG9GQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7O0FBRVgsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUVBQWlFO0FBQzlGO0FBQ0EscUJBQXFCLFlBQVk7QUFDakMsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxtQkFBbUI7QUFDakM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTSxpRkFBYyxFQUFFLGNBQWM7QUFDcEM7QUFDQSx5Q0FBeUMsYUFBYTtBQUN0RDtBQUNBO0FBQ0E7OztBQUdBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGlDO0FBQzhCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDZSxpQ0FBaUMsMkNBQVU7O0FBRTFEO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0Isb0JBQW9CLHVDQUF1QztBQUMzRCxtQkFBbUIsdUNBQXVDO0FBQzFELGtCQUFrQixzQ0FBc0M7QUFDeEQsa0JBQWtCLHNDQUFzQztBQUN4RCxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBLFdBQVcscUVBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzRUFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7O0FBRUE7O0FBRUEsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZnQzs7QUFFZ0M7QUFDWTtBQUNBO0FBQ1I7OztBQUc3RDtBQUNQLGtCQUFrQixvQ0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBWTtBQUNoQixJQUFJLHNGQUFVO0FBQ2QsSUFBSSxpRkFBTztBQUNYLElBQUksdUZBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJO0FBQ1g7QUFDQSxhQUFhLGVBQWU7QUFDNUIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQSx1QkFBdUIsZUFBZTs7QUFFdEMsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLGFBQWEsV0FBVztBQUN4Qiw2RkFBNkY7O0FBRTdGO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDaUM7QUFDcUM7OztBQUd2RCx3Q0FBd0MsMkNBQVU7O0FBRWpFO0FBQ0E7QUFDQSxtQkFBbUIsdUNBQXVDO0FBQzFELGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsV0FBVyw2RUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhFQUFXO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDZ0M7O0FBRXVDO0FBQ1E7O0FBRXhFO0FBQ1Asd0JBQXdCLG9DQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRkFBVTtBQUNkLElBQUksd0ZBQVc7QUFDZjtBQUNBOztBQUVPLG1CO0FBQ1AsT0FBTyxxQ0FBSTtBQUNYO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RSxXQUFXLGlCQUFpQjtBQUM1QiwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBOztBQUVBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmlDO0FBQ2dDOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usb0NBQW9DLDJDQUFVOztBQUU3RDtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFzQztBQUN4RCxtQkFBbUIsOEJBQThCO0FBQ2pELHlCQUF5Qiw4QkFBOEI7QUFDdkQsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5RUFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyx3RUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1DQUFtQztBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsZTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFtRTtBQUNsRjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTWdDOztBQUVxQztBQUNBOztBQUU5RDtBQUNQLHFCQUFxQixvQ0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRkFBTztBQUNYO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7QUFDWCxtQkFBbUIsZUFBZTtBQUNsQyxFQUFFLHFDQUFxQyxxQ0FBSTtBQUMzQyxJQUFJLHVCQUF1QixxQ0FBSTtBQUMvQjtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmLGlDQUFpQyxNQUFNO0FBQ3ZDLHVCQUF1QixrQ0FBa0M7QUFDekQsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxNQUFNLHFDQUFJO0FBQ1Y7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixRQUFRLGlGQUFjLEVBQUUsY0FBYztBQUN0QztBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekMsaUJBQWlCLG1DQUFtQztBQUNwRCxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGlDO0FBQzhCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLGtDQUFrQywyQ0FBVTs7QUFFM0Q7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixvQkFBb0IsdUNBQXVDO0FBQzNELG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzRUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFXO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBOztBQUVBLHFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVnQzs7QUFFNkM7QUFDSTtBQUNWOztBQUVoRTtBQUNQLHFCQUFxQixvQ0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRkFBYTtBQUNqQixJQUFJLGlGQUFVO0FBQ2QsSUFBSSx3RkFBYTtBQUNqQjtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxTQUFTLHFDQUFJO0FBQ2IsK0JBQStCLDRDQUE0QztBQUMzRTtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekMsaUJBQWlCLGdCQUFnQjtBQUNqQyxrQkFBa0IsbUJBQW1CLElBQUksZ0JBQWdCO0FBQ3pEO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ29DO0FBQ2tCO0FBQ0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0IsY0FBYyxFQUFFO0FBQzNDO0FBQ0E7QUFDTyw2QkFBNkIsa0VBQWM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLFdBQVcsZ0RBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyx1QkFBdUIsMkRBQVMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsTUFBTTtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFO0FBQ25DO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsK0VBQStFLEVBQUU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixRQUFRLGtGQUFrRixFQUFFO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxRQUFRLDRFQUE0RSxFQUFFO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsNkVBQTZFLEVBQUU7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSw2R0FBNkcsa0JBQWtCO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7Ozs7Ozs7Ozs7Ozs7OztBQ3AyQndCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ25GdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ25LdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3JhdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDN3BCdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDakR1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3pGdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVEdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzRHVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUN2SXVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkN1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzliRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEO0FBQ1o7QUFDTjtBQUNiO0FBQ3pCO0FBQ0E7QUFDTyx3QkFBd0Isa0VBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsYUFBYTtBQUNwSDtBQUNBO0FBQ0Esd0dBQXdHLGFBQWE7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDa0I7QUFDUDtBQUNWO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw2QkFBNkIsb0RBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0RBQVE7QUFDbkQ7QUFDQSx5Q0FBeUMsa0RBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHNCQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5RUFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkI7QUFDQSwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DO0FBQ25DLE9BQU8sd0JBQXdCLEdBQUcsK0NBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0NBQXNDLFFBQVEsNkZBQTZGO0FBQ2xKO0FBQ0E7QUFDQTtBQUNPLHNDQUFzQyxRQUFRLDZFQUE2RTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLElBQUksV0FBVyxNQUFNLGdCQUFnQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVDQUF1QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU0sVUFBVSxpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25rQ3lDO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RzQjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdUY7QUFDdkY7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ2M7QUFDSTtBQUNOO0FBQ2dCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLWFsZXJ0LnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZUFsZXJ0XG4gKiBAY2xhc3NkZXNjIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBhIGJhc2ljIG5vbi1kaXNtaXNzYWJsZSBhbGVydC5cbiAqIFBhdHRlcm4gTGFiIFVybDogaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduLz9wPXZpZXdhbGwtbW9sZWN1bGVzLW1lc3NhZ2luZ1xuICogXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSAtIE9wdGlvbmFsIG1vZGlmaWVyLiAnc3VjY2VzcycsICd3YXJuaW5nJywgb3IgJ2Vycm9yJ1xuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICAgPHVjZC10aGVtZS1hbGVydD5JIGFtIGFuIGFsZXJ0ITwvdWNkLXRoZW1lLWFsZXJ0PlxuICogICA8dWNkLXRoZW1lLWFsZXJ0IHR5cGU9J2Vycm9yJz5JIGFtIGEgcmVkIGFsZXJ0ITwvdWNkLXRoZW1lLWFsZXJ0PlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZUFsZXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBfc3R5bGVNb2RpZmllciA6IHt0eXBlOiBTdHJpbmd9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfSBcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50eXBlID0gJyc7XG4gICAgdGhpcy5zdHlsZU1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVkXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgYWZ0ZXIgZWxlbWVudCBoYXMgYmVlbiB1cGRhdGVkXG4gICAqIEBwYXJhbSB7TWFwfSBwcm9wcyAtIFByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWRcbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiggcHJvcHMuaGFzKCd0eXBlJykgJiYgdGhpcy50eXBlICkge1xuICAgICAgdGhpcy5fc3R5bGVNb2RpZmllciA9ICdhbGVydC0tJyt0aGlzLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2QtdGhlbWUtYWxlcnQnLCBVY2RUaGVtZUFsZXJ0KTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuaW1wb3J0IGFsZXJ0U3R5bGVzIGZyb20gJ0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX21lc3NhZ2luZy1hbGVydC5jc3MuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBsZXQgY3VzdG9tQ3NzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYDtcbiAgcmV0dXJuIFtcbiAgICBhbGVydFN0eWxlcyxcbiAgICBjdXN0b21Dc3NcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYCBcbjxkaXYgY2xhc3M9XCJhbGVydCAke3RoaXMuX3N0eWxlTW9kaWZpZXJ9XCI+XG4gIDxzbG90Pjwvc2xvdD5cbjwvZGl2PlxuXG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7cmVuZGVyLCBzdHlsZXN9IGZyb20gXCIuL3VjZC10aGVtZS1jb2xsYXBzZS50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVWNkVGhlbWVDb2xsYXBzZVxuICogQGNsYXNzZGVzYyBVSSBjb21wb25lbnQgY2xhc3MgZm9yIGEgY29sbGFwc2FibGUgcGFuZWwgYm94XG4gKiBQYXR0ZXJuIExhYiBVcmw6IGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1tb2xlY3VsZXMtY29sbGFwc2VcbiAqIFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlIC0gVGhlIHBhbmVsIHRpdGxlXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG9wZW5lZCAtIFdoZXRoZXIgdGhlIHBhbmVsIGNvbnRlbnQgaXMgZXhwYW5kZWRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBicmFuZENsYXNzIC0gQW55IGFkZGl0aW9uYWwgY2xhc3MgbW9kaWZlcnNcbiAqIFxuICogQGV4YW1wbGVcbiAqIGh0bWxgXG4gKiAgIDx1Y2QtdGhlbWUtY29sbGFwc2UgdGl0bGU9XCJJIGFtIHRoZSBwYW5lbCB0aXRsZVwiPlxuICogICAgIEkgYW0gdGhlIGNvbnRlbnQuXG4gKiAgIDwvdWNkLXRoZW1lLWNvbGxhcHNlPlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZUNvbGxhcHNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgICBvcGVuZWQ6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfSxcbiAgICAgIGJyYW5kQ2xhc3M6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJicmFuZC1jbGFzc1wifVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aXRsZSA9IFwiXCI7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIG9wZW5cbiAgICogQGRlc2NyaXB0aW9uIEV4cGFuZHMgdGhlIHBhbmVsIGNvbnRlbnRcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2xvc2VcbiAgICogQGRlc2NyaXB0aW9uIENvbGxhcHNlcyB0aGUgcGFuZWwgY29udGVudFxuICAgKi9cbiAgY2xvc2UoKXtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdG9nZ2xlXG4gICAqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwYW5lbCBjb250ZW50XG4gICAqL1xuICB0b2dnbGUoKXtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRpdGxlQ2xpY2tcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIHRoZSBwYW5lbCB0aXRsZVxuICAgKi9cbiAgX29uVGl0bGVDbGljaygpe1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5fZGlzcGF0Y2hUb2dnbGVFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVGl0bGVLZXlVcFxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gdGhlIHBhbmVsIHRpdGxlXG4gICAqIFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0ga2V5dXAgZXZlbnRcbiAgICovXG4gIF9vblRpdGxlS2V5VXAoZSl7XG4gICAgaWYoIGUud2hpY2ggIT09IDEzICkgcmV0dXJuO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5fZGlzcGF0Y2hUb2dnbGVFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2Rpc3BhdGNoVG9nZ2xlRXZlbnRcbiAgICogQGRlc2NyaXB0aW9uIEVtaXRzIGN1c3RvbSAnYWNjb3JkaW9uLXRvZ2dsZScgZXZlbnQgd2hlbiB1c2VyIHRvZ2dsZXMgY29udGVudCB2aXNpYmlsdHkuXG4gICAqL1xuICBfZGlzcGF0Y2hUb2dnbGVFdmVudCgpe1xuICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdhY2NvcmRpb24tdG9nZ2xlJywge1xuICAgICAgZGV0YWlsOiB7IFxuICAgICAgICBtZXNzYWdlOiAnQ29udGVudCBhcmVhIGhhcyBiZWVuIGV4cGFuZGVkIG9yIGNvbGxhcHNlZCcsIFxuICAgICAgICBpc09wZW46IHRoaXMub3BlbmVkXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLWNvbGxhcHNlJywgVWNkVGhlbWVDb2xsYXBzZSk7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuaW1wb3J0IGNvbGxhcHNlU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19jb2xsYXBzZS5jc3MuanNcIjtcbmltcG9ydCBjb2xvclN0eWxlcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fY2F0ZWdvcnktYnJhbmQuY3NzLmpzXCI7XG5cbmltcG9ydCB7IG1vdGlvbkNvbGxhcHNlIH0gZnJvbSBcIi4uL3V0aWxzL2RpcmVjdGl2ZXMvbW90aW9uLWNvbGxhcHNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBbXG4gICAgY29sb3JTdHlsZXMsXG4gICAgY29sbGFwc2VTdHlsZXMsXG4gICAgZWxlbWVudFN0eWxlc1xuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48ZGl2IGNsYXNzPVwiY29sbGFwc2UgJHt0aGlzLmJyYW5kQ2xhc3N9XCI+XG4gIDxoMiBcbiAgICBpZD1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCIwXCJcbiAgICBjbGFzcz1cImNvbGxhcHNlX190aXRsZSAke3RoaXMub3BlbmVkID8gJ2NvbGxhcHNlX190aXRsZS0tb3Blbic6ICdjb2xsYXBzZV9fdGl0bGUtLWNsb3NlZCd9XCJcbiAgICBhcmlhLWNvbnRyb2xzPVwiY29udGVudFwiXG4gICAgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVuZWR9XCJcbiAgICBAY2xpY2s9XCIke3RoaXMuX29uVGl0bGVDbGlja31cIlxuICAgIEBrZXl1cD1cIiR7dGhpcy5fb25UaXRsZUtleVVwfVwiXG4gICAgPlxuICAgICR7dGhpcy50aXRsZX1cbiAgPC9oMj5cbiAgPGRpdiBcbiAgICBpZD1cImNvbnRlbnRcIlxuICAgICR7bW90aW9uQ29sbGFwc2Uoe2R1cmF0aW9uOiAzMDB9KX1cbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJidXR0b25cIlxuICAgIGNsYXNzPVwiY29sbGFwc2VfX2NvbnRlbnRcIiA/aGlkZGVuPVwiJHshdGhpcy5vcGVuZWR9XCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlcyB9IGZyb20gXCIuL3VjZC10aGVtZS1mb3JtLXNlYXJjaC50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVWNkVGhlbWVGb3JtU2VhcmNoXG4gKiBAY2xhc3NkZXNjIENvbXBvbmVudCBjbGFzcyBmb3IgcmVuZGVyaW5nIGEgYmFzaWMgc2VhcmNoIGZvcm0uXG4gKiBQYXR0ZXJuIExhYiBVcmw6IGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1tb2xlY3VsZXMtc2VhcmNoLWZvcm1cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHNlYXJjaCBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZWhvbGRlciAtIFRoZSBpbnB1dCBwbGFjZWhvbGRlclxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1BY3Rpb24gLSBUaGUgYWN0aW9uIHRvIGJlIHRha2VuIG9uIGZvcm0gc3VibWl0IChvcHRpb25hbClcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSBhIGZvcm0gYWN0aW9uOlxuICogaHRtbGBcbiAqICAgPHVjZC10aGVtZS1mb3JtLXNlYXJjaCBmb3JtLWFjdGlvbj1cIi91cmwvdG8vcG9zdC90b1wiPjwvdWNkLXRoZW1lLWZvcm0tc2VhcmNoPlxuICogYFxuICogLy8gVXNlIGV2ZW50IGxpc3RlbmVyOlxuICogaHRtbGBcbiAqICA8dWNkLXRoZW1lLWZvcm0tc2VhcmNoIEBzZWFyY2g9XCIke3RoaXMuX29uU2VhcmNofVwiPjwvdWNkLXRoZW1lLWZvcm0tc2VhcmNoPlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZUZvcm1TZWFyY2ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwicGxhY2Vob2xkZXJcIn0sXG4gICAgICBmb3JtQWN0aW9uOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiZm9ybS1hY3Rpb25cIn0sXG4gICAgICBmb3JtQ2xhc3M6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJmb3JtLWNsYXNzXCJ9LFxuICAgICAgbGFiZWxUZXh0OiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwibGFiZWwtdGV4dFwifSxcbiAgICAgIGlucHV0Q2xhc3M6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpbnB1dC1jbGFzc1wifVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtQWN0aW9uID0gXCJcIjtcbiAgICB0aGlzLmZvcm1DbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5sYWJlbFRleHQgPSBcIlNlYXJjaFwiO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBcIlNlYXJjaC4uLlwiO1xuICAgIHRoaXMuaW5wdXRDbGFzcyA9IFwiXCI7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25TdWJtaXRcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIGZvcm0gc3VibWl0XG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBzdWJtaXQgZXZlbnRcbiAgICovXG4gIF9vblN1Ym1pdChlKXtcbiAgICBpZiAoICF0aGlzLmZvcm1BY3Rpb24gKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hTZWFyY2hFdmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbklucHV0XG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBzZWFyY2ggaW5wdXQgY2hhbmdlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBpbnB1dCBldmVudFxuICAgKi9cbiAgX29uSW5wdXQoZSl7XG4gICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2Rpc3BhdGNoU2VhcmNoRXZlbnRcbiAgICogQGRlc2NyaXB0aW9uIEZpcmVzICdzZWFyY2gnIGN1c3RvbSBldmVudFxuICAgKi9cbiAgX2Rpc3BhdGNoU2VhcmNoRXZlbnQoKSB7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NlYXJjaCcsIHtcbiAgICAgIGRldGFpbDogeyBcbiAgICAgICAgbWVzc2FnZTogJ0Egc2VhcmNoIGhhcyBiZWVuIGluaXRpYXRlZCcsIFxuICAgICAgICBzZWFyY2hUZXJtOiB0aGlzLnZhbHVlXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlIH0pO1xuICBcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZC10aGVtZS1mb3JtLXNlYXJjaCcsIFVjZFRoZW1lRm9ybVNlYXJjaCk7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy9ub3JtYWxpemUuY3NzLmpzXCI7XG5pbXBvcnQgdXRpbGl0eUNzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy82X3V0aWxpdHkvX3UtdmlzaWJpbGl0eS5jc3MuanNcIjtcbmltcG9ydCBzZWFyY2hDc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3NlYXJjaC1mb3JtLmNzcy5qc1wiO1xuaW1wb3J0IGZvcm1Dc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2Zvcm1zLmNzcy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGxldCBjdXN0b21Dc3MgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGA7XG4gIHJldHVybiBbXG4gICAgbm9ybWFsaXplQ3NzLFxuICAgIHV0aWxpdHlDc3MsXG4gICAgZm9ybUNzcyxcbiAgICBzZWFyY2hDc3MsXG4gICAgY3VzdG9tQ3NzXG4gIF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGAgXG48Zm9ybSBcbiAgQHN1Ym1pdD1cIiR7dGhpcy5fb25TdWJtaXR9XCJcbiAgYWN0aW9uPVwiJHt0aGlzLmZvcm1BY3Rpb259XCIgXG4gIG1ldGhvZD1cIlBPU1RcIiBcbiAgY2xhc3M9XCJzZWFyY2gtZm9ybSAke3RoaXMuZm9ybUNsYXNzfVwiPlxuXG4gIDxsYWJlbCBmb3I9XCJzZWFyY2hcIiBjbGFzcz1cInUtaGlkZGVuLS12aXN1YWxseVwiPiR7dGhpcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgPGlucHV0IFxuICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCIgXG4gICAgaWQ9XCJzZWFyY2hcIiBcbiAgICBjbGFzcz1cInNlYXJjaC1mb3JtX19pbnB1dCAke3RoaXMuaW5wdXRDbGFzc31cIiBcbiAgICBuYW1lPVwic2VhcmNodGVybVwiIFxuICAgIEBpbnB1dD1cIiR7dGhpcy5fb25JbnB1dH1cIlxuICAgIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiPlxuICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic2VhcmNoLWZvcm1fX3N1Ym1pdFwiIG5hbWU9XCJzZWFyY2hcIiBhbHQ9XCJTZWFyY2hcIiB2YWx1ZT1cIiYjeGYwMDI7IFN1Ym1pdFwiPlxuXG48L2Zvcm0+XG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7cmVuZGVyLCBzdHlsZXN9IGZyb20gXCIuL3VjZC10aGVtZS1oZWFkZXItc2VhcmNoLXBvcHVwLnRwbC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lSGVhZGVyU2VhcmNoUG9wdXAgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1dHRvblRleHQ6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJidXR0b24tdGV4dFwifSxcbiAgICAgIG9wZW5lZDoge3R5cGU6IEJvb2xlYW59XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlRvZ2dsZSBTZWFyY2hcIjtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuXG4gIH1cblxuICBfb25CdG5DbGljaygpe1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgb3Blbigpe1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLWhlYWRlci1zZWFyY2gtcG9wdXAnLCBVY2RUaGVtZUhlYWRlclNlYXJjaFBvcHVwKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgZm9ybVN0eWxlcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9fZm9ybXMuY3NzLmpzXCI7XG5pbXBvcnQgcG9wdXBTdHlsZXMgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3NlYXJjaC1wb3B1cC5jc3MuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtcbiAgICBmb3JtU3R5bGVzLFxuICAgIHBvcHVwU3R5bGVzLFxuICAgIGVsZW1lbnRTdHlsZXNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPGJ1dHRvbiBcbiAgY2xhc3M9XCJzZWFyY2gtcG9wdXBfX29wZW4gJHt0aGlzLm9wZW5lZCA/ICdzZWFyY2gtcG9wdXBfX29wZW4tLWNsb3NlJyA6ICcnfVwiIFxuICBAY2xpY2s9JHt0aGlzLl9vbkJ0bkNsaWNrfT5cbiAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtcG9wdXBfX29wZW4taWNvblwiPiR7dGhpcy5idXR0b25UZXh0fTwvc3Bhbj5cbjwvYnV0dG9uPlxuPGRpdiBjbGFzcz1cInNlYXJjaC1wb3B1cCAke3RoaXMub3BlbmVkID8gJ2lzLW9wZW4nIDogJyd9XCI+XG4gIDxzbG90Pjwvc2xvdD5cbjwvZGl2PlxuXG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7cmVuZGVyLCBzdHlsZXN9IGZyb20gXCIuL3VjZC10aGVtZS1saXN0LWFjY29yZGlvbi50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVWNkVGhlbWVMaXN0QWNjb3JkaW9uXG4gKiBAY2xhc3NkZXNjIENvbXBvbmVudCBjbGFzcyBmb3IgZGlzcGxheWluZyBsaXN0cyB3aXRoIGFjY29yZGlvbiBjb2xsYXBzZS9leHBhbmQgZnVuY3Rpb25hbGl0eS5cbiAqIFBhdHRlcm4gTGFiIFVybDogXG4gKiAgLSBodHRwOi8vZGV2LndlYnN0eWxlZ3VpZGUudWNkYXZpcy5lZHUvcmVkZXNpZ24vP3A9YXRvbXMtbGlzdC1hY2NvcmRpb25cbiAqICAtIGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1hdG9tcy1saXN0LWZhcVxuICogXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbGlzdFN0eWxlIC0gJ2FjY29yZGlvbicgb3IgJ2ZhcSdcbiAqIFxuICogQGV4YW1wbGVcbiAqIGh0bWxgXG4gKiAgPHVjZC10aGVtZS1saXN0LWFjY29yZGlvbj5cbiAqICAgIDxkaXY+Q2xpY2sgbWUgdG8gZXhwYW5kIGRpdiBiZWxvdzwvZGl2PlxuICogICAgPGRpdj5JIHdpbGwgYmUgdG9nZ2xlZCB3aGVuIHRoZSBhYm92ZSBpdGVtIGlzIGNsaWNrZWQuPC9kaXY+XG4gKiAgICA8ZGl2PlRoZSBkaXJlY3QgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50IG11c3QgYmUgZGl2czwvZGl2PlxuICogICAgPGRpdj5CdXQgeW91IGNhbiBwYXNzIHRocm91Z2ggPGEgaHJlZj1cIiNcIj5yaWNoIHRleHQ8L2E+IHdpdGhpbi5cbiAqICA8L3VjZC10aGVtZS1saXN0LWFjY29yZGlvbj5cbiAqIGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkVGhlbWVMaXN0QWNjb3JkaW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXN0U3R5bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJsaXN0LXN0eWxlXCJ9LFxuICAgICAgX2xpc3RJdGVtczoge2F0dHJpYnV0ZTogZmFsc2UsIHN0YXRlOiB0cnVlfSxcbiAgICAgIF9hdmFpbGFibGVTdHlsZXM6IHthdHRyaWJ1dGU6IGZhbHNlLCBzdGF0ZTogdHJ1ZX0sXG4gICAgICBfZXhwYW5kZWRJdGVtczoge2F0dHJpYnV0ZTogZmFsc2UsIHN0YXRlOiB0cnVlfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fbGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5fYXZhaWxhYmxlU3R5bGVzID0gWydhY2NvcmRpb24nLCAnZmFxJ107XG4gICAgdGhpcy5saXN0U3R5bGUgPSB0aGlzLl9hdmFpbGFibGVTdHlsZXNbMF07XG4gICAgdGhpcy5fZXhwYW5kZWRJdGVtcyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCBhZnRlciBlbGVtZW50IGhhcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge01hcH0gcHJvcHMgLSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkIFxuICAgKi9cbiAgdXBkYXRlZChwcm9wcyl7XG4gICAgaWYgKCBwcm9wcy5oYXMoXCJsaXN0U3R5bGVcIikgKSB7XG4gICAgICBpZiAoICF0aGlzLl9hdmFpbGFibGVTdHlsZXMuaW5jbHVkZXModGhpcy5saXN0U3R5bGUudG9Mb3dlckNhc2UoKSkgKSB7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlID0gdGhpcy5fYXZhaWxhYmxlU3R5bGVzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgd2hlbiBlbGVtZW50IGlzIGNvbm5lY3RlZFxuICAgKi9cbiAgY29ubmVjdGVkQ2FsbGJhY2soKXtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2NoaWxkTGlzdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpID0+IHRoaXMuX29uQ2hpbGRMaXN0TXV0YXRpb24obXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpKTtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlci5vYnNlcnZlKHRoaXMsIHtjaGlsZExpc3Q6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgd2hlbiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHRvZ2dsZUl0ZW1WaXNpYmxpdHlcbiAgICogQGRlc2NyaXB0aW9uIEV4cGFuZHMvY29sbGFwc2VzIGFuIGl0ZW1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIGV4cGFuZC9jb2xsYXBzZSAoemVybyBpbmRleGVkKVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUGFpckluZGV4IC0gVGhlIHR5cGUgb2YgaW5kZXhcbiAgICogIElmIGZhbHNlLCB1c2UgdGhlIGZsYXR0ZW5lZCBpbmRleCBvZiB0aGUgX2xpc3RJdGVtcyBhcnJheTpcbiAgICogICAgW3ExLCBhMSwgcTIsIGEyLCBxMywgYTMuLi5dXG4gICAqICBJZiB0cnVlLCB0cmVhdHMgdGhlIHRpdGxlIGFuZCBjb250ZW50IChvciBxdWVzdGlvbiBhbmQgYW5zd2VyKSBhcyBhIHBhaXI6XG4gICAqICAgIDA6IGZpcnN0IHBhaXIsIDE6IHNlY29uZCBwYWlyLCBldGNcbiAgICogQHBhcmFtIHtCb29sZWFufSBkaXNwYXRjaEV2ZW50IC0gV2lsbCBkaXNwYXRjaCBjdXN0b20gJ2l0ZW0tdG9nZ2xlJyBldmVudFxuICAgKi9cbiAgYXN5bmMgdG9nZ2xlSXRlbVZpc2libGl0eShpbmRleCwgaXNQYWlySW5kZXg9dHJ1ZSwgZGlzcGF0Y2hFdmVudD1mYWxzZSl7XG4gICAgbGV0IHBhaXJJbmRleCA9IGlzUGFpckluZGV4ID8gaW5kZXggOiBNYXRoLmZsb29yKGluZGV4IC8gMik7XG4gICAgaWYgKCB0aGlzLl9leHBhbmRlZEl0ZW1zLmhhcyhwYWlySW5kZXgpICl7XG4gICAgICB0aGlzLl9leHBhbmRlZEl0ZW1zLmRlbGV0ZShwYWlySW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leHBhbmRlZEl0ZW1zLmFkZChwYWlySW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgaWYgKCBkaXNwYXRjaEV2ZW50ICkgdGhpcy5fZGlzcGF0Y2hJdGVtVG9nZ2xlRXZlbnQoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaXRlbUlzRXhwYW5kZWRcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBpdGVtIGlzIGV4cGFuZGVkXG4gICAqIEBwYXJhbSB7TnVuYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUGFpckluZGV4IC0gRG9lcyB0aGUgaW5kZXggcGFyYW0gcmVmZXIgdG8gUS9BIHBhaXIgb3IgdGhlIGZsYXR0ZW5lZCBpbmRleD9cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBpdGVtSXNFeHBhbmRlZChpbmRleCwgaXNQYWlySW5kZXg9dHJ1ZSkge1xuICAgIGxldCBwYWlySW5kZXggPSBpc1BhaXJJbmRleCA/IGluZGV4IDogTWF0aC5mbG9vcihpbmRleCAvIDIpO1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZEl0ZW1zLmhhcyhwYWlySW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVGl0bGVDbGlja1xuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gaXRlbSB0aXRsZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIFxuICAgKi9cbiAgX29uVGl0bGVDbGljayhlKSB7XG4gICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaXRlbS1pbmRleFwiKSk7XG4gICAgdGhpcy50b2dnbGVJdGVtVmlzaWJsaXR5KGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UaXRsZUtleVVwXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBpdGVtIHRpdGxlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgXG4gICAqL1xuICBfb25UaXRsZUtleVVwKGUpIHtcbiAgICBpZiggZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaXRlbS1pbmRleFwiKSk7XG4gICAgdGhpcy50b2dnbGVJdGVtVmlzaWJsaXR5KGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25DaGlsZExpc3RNdXRhdGlvblxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gc2VsZiwgcmVzcG9uZHMgdG8gY2hhbmdlcyBpbiBjaGlsZHJlblxuICAgKi9cbiAgX29uQ2hpbGRMaXN0TXV0YXRpb24oKSB7XG4gICAgbGV0IGxpc3RJdGVtcyA9IFtdO1xuICAgIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudGFnTmFtZSAhPT0gXCJESVZcIikgIHJldHVybjtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdsaXN0LWl0ZW0tJytpbmRleCk7XG4gICAgICBpZiggdGhpcy5saXN0U3R5bGUgPT09ICdmYXEnICkge1xuICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICB9XG5cbiAgICAgIGxpc3RJdGVtcy5wdXNoKHtjaGlsZCwgc2xvdE5hbWU6J2xpc3QtaXRlbS0nK2luZGV4fSk7XG4gICAgfSk7XG4gICAgdGhpcy5fbGlzdEl0ZW1zID0gbGlzdEl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2Rpc3BhdGNoSXRlbVRvZ2dsZUV2ZW50XG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlcyAnaXRlbS10b2dnbGUnIGN1c3RvbSBldmVudCB3aGVuIHVzZXIgZXhwYW5kcy9jb2xsYXBzZXMgYW4gaXRlbVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIF9saXN0SXRlbXMgYXJyYXkgcHJvcGVydHlcbiAgICovXG4gIF9kaXNwYXRjaEl0ZW1Ub2dnbGVFdmVudChpbmRleCkge1xuICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdpdGVtLXRvZ2dsZScsIHtcbiAgICAgIGRldGFpbDogeyBcbiAgICAgICAgbWVzc2FnZTogJ0EgbGlzdCBpdGVtIGhhcyBiZWVuIGV4cGFuZGVkIG9yIGNvbGxhcHNlZCcsIFxuICAgICAgICBpc0V4cGFuZGVkOiB0aGlzLml0ZW1Jc0V4cGFuZGVkKGluZGV4LCBmYWxzZSksXG4gICAgICAgIGl0ZW06IHt0aXRsZTogdGhpcy5fbGlzdEl0ZW1zW2luZGV4XSwgY29udGVudDogdGhpcy5fbGlzdEl0ZW1zW2luZGV4ICsgMV19LFxuICAgICAgICBsaXN0SXRlbUluZGV4OiBpbmRleCxcbiAgICAgICAgbGlzdEl0ZW1QYWlySW5kZXg6IE1hdGguZmxvb3IoaW5kZXggLyAyKVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfaXNUaXRsZVxuICAgKiBAZGVzY3JpcHRpb24gSXRlbSBpcyB0aXRsZSBvciBxdWVzdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBBcnJheSBpbmRleC5cbiAgICogQHJldHVybnMgIHtCb29sZWFufVxuICAgKi9cbiAgX2lzVGl0bGUoaSkge1xuICAgIHJldHVybiBpICUgMiA/IGZhbHNlIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc0NvbnRlbnRcbiAgICogQGRlc2NyaXB0aW9uIEl0ZW0gaXMgY29udGVudCBvciBhbnN3ZXIuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpIC0gQXJyYXkgaW5kZXguXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgX2lzQ29udGVudChpKXtcbiAgICByZXR1cm4gIXRoaXMuX2lzVGl0bGUoaSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZC10aGVtZS1saXN0LWFjY29yZGlvbicsIFVjZFRoZW1lTGlzdEFjY29yZGlvbik7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuaW1wb3J0IGxpc3RDc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvMl9iYXNlX2NsYXNzL19saXN0cy5jc3MuanNcIjtcbmltcG9ydCB7IG1vdGlvbkNvbGxhcHNlIH0gZnJvbSBcIi4uL3V0aWxzL2RpcmVjdGl2ZXMvbW90aW9uLWNvbGxhcHNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGxldCBjdXN0b21TdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5pdGVtLXRpdGxlIDo6c2xvdHRlZCgqKSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIGA7XG4gIHJldHVybiBbXG4gICAgbGlzdENzcywgXG4gICAgY3VzdG9tU3R5bGVzXG4gIF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcbjx1bCBjbGFzcz1cImxpc3QtLSR7dGhpcy5saXN0U3R5bGV9XCI+XG4ke3RoaXMuX2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBodG1sYFxuICAke3RoaXMuX2lzVGl0bGUoaW5kZXgpID8gaHRtbGBcbiAgICA8bGkgXG4gICAgICBpZD1cImFjY29yZGlvbi0ke2luZGV4fVwiXG4gICAgICBjbGFzcz1cIml0ZW0tdGl0bGVcIlxuICAgICAgaXRlbS1pbmRleD1cIiR7aW5kZXh9XCIgXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgQGNsaWNrPSR7dGhpcy5fb25UaXRsZUNsaWNrfVxuICAgICAgQGtleXVwPSR7dGhpcy5fb25UaXRsZUtleVVwfVxuICAgICAgYXJpYS1jb250cm9scz1cImFjY29yZGlvbi0ke2luZGV4fS1wYW5lbFwiXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiJHt0aGlzLml0ZW1Jc0V4cGFuZGVkKGluZGV4LCBmYWxzZSl9XCI+XG4gICAgICA8c2xvdCBuYW1lPVwiJHtpdGVtLnNsb3ROYW1lfVwiPjwvc2xvdD5cbiAgICA8L2xpPlxuICBgIDogaHRtbGBcbiAgICA8bGkgXG4gICAgICBpZD1cImFjY29yZGlvbi0ke2luZGV4fS1wYW5lbFwiIFxuICAgICAgJHttb3Rpb25Db2xsYXBzZSh7ZHVyYXRpb246IDMwMH0pfVxuICAgICAgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIlxuICAgICAgcm9sZT1cInJlZ2lvblwiIFxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb3JkaW9uLSR7aW5kZXh9XCIgXG4gICAgICA/aGlkZGVuPVwiJHshdGhpcy5pdGVtSXNFeHBhbmRlZChpbmRleCwgZmFsc2UpfVwiPlxuICAgICAgPHNsb3QgbmFtZT1cIiR7aXRlbS5zbG90TmFtZX1cIj48L3Nsb3Q+XG4gICAgPC9saT5cbiAgYH1cbmApIH1cbjwvdWw+XG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7cmVuZGVyLCBzdHlsZXN9IGZyb20gXCIuL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEudHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIFVjZFRoZW1lTWVzc2FnZUFyZWFcbiAqIEBjbGFzc2Rlc2MgVUkgY29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgZGlzbWlzc2FibGUgbWVzc2FnZSBwYW5lbFxuICogUGF0dGVybiBMYWIgVXJsOiBodHRwOi8vZGV2LndlYnN0eWxlZ3VpZGUudWNkYXZpcy5lZHUvcmVkZXNpZ24vP3A9bW9sZWN1bGVzLW1lc3NhZ2UtYXJlYVxuICogXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdGl0bGUgLSBUaGUgbWVzc2FnZSBwYW5lbCBoZWFkZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBidXR0b25UZXh0IC0gVGhlIHRleHQgb2YgdGhlIGRpc21pc3MgYnV0dG9uIChpcyBoaWRkZW4pXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGNvbGxhcHNlZCAtIFdoZXRoZXIgb3Igbm90IHRoZSBwYW5lbCBjb250ZW50IGlzIHZpc2libGVcbiAqIFxuICogQGV4YW1wbGVcbiAqIGh0bWxgXG4gKiAgIDx1Y2QtdGhlbWUtbWVzc2FnZS1hcmVhIHRpdGxlPSdZb3VyIG1lc3NhZ2UgcGFuZWwgaGVhZGVyJz5cbiAqICAgIFlvdXIgY29udGVudCBnb2VzIGhlcmUuXG4gKiAgIDwvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYT5cbiAqIGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkVGhlbWVNZXNzYWdlQXJlYSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGJ1dHRvblRleHQgOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdidXR0b24tdGV4dCd9LFxuICAgICAgY29sbGFwc2VkIDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQnRuQ2xpY2tlZFxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gZGlzbWlzcyBidXR0b24gaW4gdXBwZXItcmlnaHQgY29ybmVyLlxuICAgKi9cbiAgX29uQnRuQ2xpY2tlZCgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB0aGlzLl9kaXNwYXRjaFRvZ2dsZUV2ZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZGlzcGF0Y2hUb2dnbGVFdmVudFxuICAgKiBAZGVzY3JpcHRpb24gRGlzcGF0Y2hlcyAnYWNjb3JkaW9uLXRvZ2dsZScgY3VzdG9tIGV2ZW50IHdoZW4gdXNlciB0b2dnbGVzIHBhbmVsIGNvbnRlbnQgdmlzaWJpbGl0eS5cbiAgICovXG4gIF9kaXNwYXRjaFRvZ2dsZUV2ZW50KCl7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FjY29yZGlvbi10b2dnbGUnLCB7XG4gICAgICBkZXRhaWw6IHsgXG4gICAgICAgIG1lc3NhZ2U6ICdNZXNzYWdlIGFyZWEgY29udGVudCBoYXMgYmVlbiBleHBhbmRlZCBvciBjb2xsYXBzZWQnLCBcbiAgICAgICAgaXNDb2xsYXBzZWQ6IHRoaXMuY29sbGFwc2VkXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLW1lc3NhZ2UtYXJlYScsIFVjZFRoZW1lTWVzc2FnZUFyZWEpOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCBoZWFkaW5nU3R5bGVzIGZyb20gJ0B1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2hlYWRpbmdzLmNzcy5qcyc7XG5pbXBvcnQgbWVzc2FnZVN0eWxlcyBmcm9tICdAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19tZXNzYWdlLWFyZWEuY3NzLmpzJztcbmltcG9ydCBmb3JtU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpe1xuICBsZXQgY3VzdG9tU3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubWVzc2FnZS1hcmVhLS1jbG9zZWQge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgYDtcbiAgcmV0dXJuIFtcbiAgICBoZWFkaW5nU3R5bGVzLFxuICAgIGZvcm1TdHlsZXMsXG4gICAgbWVzc2FnZVN0eWxlcyxcbiAgICBjdXN0b21TdHlsZXNcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbiAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYXJlYSAke3RoaXMuY29sbGFwc2VkID8gJ21lc3NhZ2UtYXJlYS0tY2xvc2VkJzogJyd9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1hcmVhX19jb250ZW50XCIgZGF0YS1jeT1cImNvbnRlbnRcIiBpZD1cImNvbnRlbnRcIiBhcmlhLWxhYmVsbGVkYnk9XCJidXR0b25cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibWVzc2FnZS1hcmVhX190aXRsZVwiPiR7dGhpcy50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1hcmVhX19ib2R5XCI+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgaWQ9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1lc3NhZ2UtYXJlYV9fYnV0dG9uXCIgXG4gICAgICAgIGRhdGEtY3k9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29udGVudFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCIkeyF0aGlzLmNvbGxhcHNlZH1cIlxuICAgICAgICB0aXRsZT1cIiR7dGhpcy5idXR0b25UZXh0fVwiIFxuICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uQnRuQ2xpY2tlZH1cIj4ke3RoaXMuYnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcbn0iLCJpbXBvcnQge25vdGhpbmd9IGZyb20gJ2xpdC9odG1sLmpzJztcbmltcG9ydCB7QXN5bmNEaXJlY3RpdmV9IGZyb20gJ2xpdC9hc3luYy1kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIFBhcnRUeXBlfSBmcm9tICdsaXQvZGlyZWN0aXZlLmpzJztcblxuY29uc3QgYW5pbWF0aW9uT3B0aW9ucyA9IFtcbiAgJ2RlbGF5JyxcbiAgJ2R1cmF0aW9uJyxcbiAgJ2Vhc2luZycsXG5dO1xuXG4vKipcbiAqIEBjbGFzcyBNb3Rpb25Db2xsYXBzZVxuICogQGNsYXNzZGVzYyBMaXQgZGlyZWN0aXZlIGNvbnRyb2xlciBmb3IgYWRkaW5nIGNvbGxhcHNlL2V4cGFuZCBhY2NvcmRpb24tbGlrZSBhbmltYXRpb24gdG8gYW4gZWxlbWVudC5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGh0bWxgXG4gKiAgPGRpdiAke21vdGlvbkNvbGxhcHNlKHtkdXJhdGlvbjogMzAwfSl9PkkgYW0gYW5pbWF0ZWQ8L2Rpdj5cbiAqIGBcbiAqL1xuZXhwb3J0IGNsYXNzIE1vdGlvbkNvbGxhcHNlIGV4dGVuZHMgQXN5bmNEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNvbnN0cnVjdG9yXG4gICAqIEBkZXNjcmlwdGlvbiBzZXRzIGFuaW1hdGlvbiBkZWZhdWx0c1xuICAgKiBAcGFyYW0ge0F0dHJpYnV0ZVBhcnR9IHBhcnQgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgc3VwZXIocGFydCk7XG4gICAgaWYgKHBhcnQudHlwZSA9PT0gUGFydFR5cGUuQ0hJTEQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBgbW90aW9uQ29sbGFwc2VgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gYXR0cmlidXRlIHBvc2l0aW9uLidcbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc3RhdHVzID0gXCJcIjtcblxuICAgIC8vIGFuaW1hdGlvbiBkZWZhdWx0c1xuICAgIHRoaXMuZHVyYXRpb24gPSA0MDA7XG4gICAgdGhpcy5kZWxheSA9IDA7XG4gICAgdGhpcy5lYXNpbmcgPSBcImxpbmVhclwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0U3R5bGVzXG4gICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHNlbGVjdCBjb21wdXRlZCBzdHlsZXMgZm9yIGVsZW1lbnRcbiAgICogQHJldHVybnMge09iamVjdH0gc3R5bGVzXG4gICAqL1xuICBnZXRTdHlsZXMoKXtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZGRpbmdUb3A6IGNvbXB1dGVkU3R5bGVzLnBhZGRpbmdUb3AsXG4gICAgICBwYWRkaW5nQm90dG9tOiBjb21wdXRlZFN0eWxlcy5wYWRkaW5nQm90dG9tLFxuICAgICAgbWFyZ2luVG9wOiBjb21wdXRlZFN0eWxlcy5tYXJnaW5Ub3AsXG4gICAgICBtYXJnaW5Cb3R0b206IGNvbXB1dGVkU3R5bGVzLm1hcmdpbkJvdHRvbSxcbiAgICAgIGhlaWdodDogY29tcHV0ZWRTdHlsZXMuaGVpZ2h0LFxuICAgICAgZGlzcGxheTogY29tcHV0ZWRTdHlsZXMuZGlzcGxheSxcbiAgICAgIHZpc2liaWxpdHk6IGNvbXB1dGVkU3R5bGVzLnZpc2liaWxpdHksXG4gICAgICBvZmZzZXRIZWlnaHQ6IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVuZGVyXG4gICAqIEBkZXNjcmlwdGlvbiBSZXF1aXJlZCBtZXRob2QgZm9yIGEgTGl0IGRpcmVjdGl2ZVxuICAgKiBAcmV0dXJucyB7bm90aGluZ30gRG9lc24ndCByZW5kZXIgYW55dGhpbmdcbiAgICovXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiBub3RoaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgZGlyZWN0aXZlIG1ldGhvZC4gQXR0YWNoZXMgY29udHJvbGxlciB3aGVuIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtQYXJ0fSBwYXJ0IFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zIC0gYXJndW1lbnQgbGlzdCBwYXNzZWQgdG8gZGlyZWN0aXZlXG4gICAqIEByZXR1cm5zIHJlbmRlclxuICAgKi9cbiAgdXBkYXRlKHBhcnQsIG9wdGlvbnMpe1xuICAgIHRoaXMuaXNGaXJzdFVwZGF0ZSA9IHRoaXMuX2hvc3QgPT09IHVuZGVmaW5lZDtcbiAgICBpZiAoIHRoaXMuaXNGaXJzdFVwZGF0ZSAmJiBwYXJ0Lm9wdGlvbnMgKSB7XG4gICAgICB0aGlzLl9ob3N0ID0gcGFydC5vcHRpb25zLmhvc3Q7XG4gICAgICB0aGlzLl9ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJ0LmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zZXRPcHRpb25zXG4gICAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0cyBkaXJlY3RpdmUgYXJndW1lbnRzIHRvIGNsYXNzIHByb3BlcnRpZXNcbiAgICogRmlyc3QgYXJndW1lbnQgaXMgYW5pbWF0aW9uIHNldHRpbmdzXG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMgLSBsaXN0IG9mIGRpcmVjdGl2ZSBhcmd1bWVudHNcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBfc2V0T3B0aW9ucyhvcHRpb25zKXtcbiAgICBpZiAoIFxuICAgICAgIW9wdGlvbnMgfHxcbiAgICAgICFvcHRpb25zLmxlbmd0aCB8fCBcbiAgICAgIHR5cGVvZiBvcHRpb25zWzBdICE9PSAnb2JqZWN0JyB8fFxuICAgICAgQXJyYXkuaXNBcnJheSggb3B0aW9uc1swXSApXG4gICAgKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgYW5pS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnNbMF0pO1xuICAgIGFuaW1hdGlvbk9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgaWYgKCBhbmlLZXlzLmluY2x1ZGVzKG9wdCkgKSB7XG4gICAgICAgIHRoaXNbb3B0XSA9IG9wdGlvbnNbMF1bb3B0XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaG9zdFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGNvbnRyb2xsZXIgbWV0aG9kIGNhbGxlZCB3aGVuIGhvc3QgZWxlbWVudCB1cGRhdGUgY3ljbGUgaXMgc3RhcnRlZFxuICAgKi9cbiAgaG9zdFVwZGF0ZSgpe1xuICAgIGlmICggdGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24ucGxheVN0YXRlID09PSAncnVubmluZycgKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlU3R5bGVzID0gdGhpcy5nZXRTdHlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGhvc3RVcGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIExpdCBjb250cm9sbGVyIG1ldGhvZCBjYWxsZWQgd2hlbiBob3N0IGVsZW1lbnQgdXBkYXRlIGN5Y2xlIGlzIGNvbXBsZXRlZFxuICAgKi9cbiAgaG9zdFVwZGF0ZWQoKXtcbiAgICB0aGlzLl91cGRhdGVkU3R5bGVzID0gdGhpcy5nZXRTdHlsZXMoKTtcbiAgICB0aGlzLm1haW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9tYWtlRnJhbWVcbiAgICogQGRlc2NyaXB0aW9uIENvbnN0cnVjdHMgYW4gYW5pbWF0aW9uIGZyYW1lIHRvIGJlIHBhc3NlZCB0byBlbGUuYW5pbWF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZnJhbWVUeXBlIC0gZXhwYW5kZWQgb3IgY29sbGFwc2VkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFN0eWxlcyB0byBhbmltYXRlXG4gICAqL1xuICBfbWFrZUZyYW1lKGZyYW1lVHlwZSl7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdGF0dXMgPT09ICdleHBhbmRpbmcnID8gdGhpcy5fdXBkYXRlZFN0eWxlcyA6IHRoaXMuX3VwZGF0ZVN0eWxlcztcbiAgICBsZXQgZnJhbWUgPSB7fTtcbiAgICBpZiAoZnJhbWVUeXBlID09PSAnY29sbGFwc2VkJykge1xuICAgICAgZnJhbWUgPSAge1xuICAgICAgICBoZWlnaHQ6IFwiMHB4XCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMHB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZSA9ICB7XG4gICAgICAgIGhlaWdodDogc3R5bGVzLmhlaWdodCxcbiAgICAgICAgcGFkZGluZ1RvcDogc3R5bGVzLnBhZGRpbmdUb3AsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHN0eWxlcy5wYWRkaW5nQm90dG9tLFxuICAgICAgICBtYXJnaW5Ub3A6IHN0eWxlcy5tYXJnaW5Ub3AsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogc3R5bGVzLm1hcmdpbkJvdHRvbVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uQW5pbWF0aW9uRW5kXG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlcyB3aGVuIGFuaW1hdGlvbiBlbmRzIC0gZWl0aGVyIHN1Y2Nlc3Mgb3IgY2FuY2VsXG4gICAqL1xuICBfb25BbmltYXRpb25FbmQoKXtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXhwYW5kaW5nJyl7XG4gICAgICB0aGlzLnN0YXR1cyA9IFwiZXhwYW5kZWRcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnY29sbGFwc2luZycpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gXCJjb2xsYXBzZWRcIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZWxlbWVudEhhc0NoYW5nZWRcbiAgICogQGRlc2NyaXB0aW9uIERldGVjdHMgd2hldGhlciB0aGUgZWxlbWVudCB0aGF0IHRoaXMgZGlyZWN0aXZlIGlzIGF0dGFjaGVkIHRvIGhhcyBiZWVuIGNsaWNrZWRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBfZWxlbWVudEhhc0NoYW5nZWQoKXtcbiAgICBpZiAoIHRoaXMuX3VwZGF0ZVN0eWxlcy5vZmZzZXRIZWlnaHQgIT0gdGhpcy5fdXBkYXRlZFN0eWxlcy5vZmZzZXRIZWlnaHQgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCB0aGlzLl91cGRhdGVTdHlsZXMudmlzaWJpbGl0eSAhPSB0aGlzLl91cGRhdGVkU3R5bGVzLnZpc2liaWxpdHkgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgbWFpblxuICAgKiBAZGVzY3JpcHRpb24gQWRkcyBjb2xsYXBzZS9leHBhbmQgYW5pbWF0aW9uIHRvIGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgYXN5bmMgbWFpbigpe1xuICAgIGlmICggXG4gICAgICAhdGhpcy5lbGVtZW50LmlzQ29ubmVjdGVkIHx8XG4gICAgICB0aGlzLmlzRmlyc3RVcGRhdGUgfHxcbiAgICAgICF0aGlzLl9lbGVtZW50SGFzQ2hhbmdlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLl91cGRhdGVkU3R5bGVzLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nIHx8ICF0aGlzLl91cGRhdGVkU3R5bGVzLm9mZnNldEhlaWdodCkge1xuICAgICAgdGhpcy5zdGF0dXMgPSBcImNvbGxhcHNpbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0dXMgPSBcImV4cGFuZGluZ1wiO1xuICAgIH1cblxuICAgIGxldCBmcmFtZXMgPSBbXTtcbiAgICBjb25zdCBjb2xsYXBzZWRGcmFtZSA9IHRoaXMuX21ha2VGcmFtZSgnY29sbGFwc2VkJyk7XG4gICAgY29uc3QgZXhwYW5kZWRGcmFtZSA9IHRoaXMuX21ha2VGcmFtZSgnZXhwYW5kZWQnKTtcblxuICAgIGlmICggdGhpcy5zdGF0dXMgPT09ICdleHBhbmRpbmcnKSB7IFxuICAgICAgZnJhbWVzLnB1c2goY29sbGFwc2VkRnJhbWUsIGV4cGFuZGVkRnJhbWUpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl91cGRhdGVkU3R5bGVzLmRpc3BsYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lcy5wdXNoKGV4cGFuZGVkRnJhbWUsIGNvbGxhcHNlZEZyYW1lKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fdXBkYXRlU3R5bGVzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ICwgZnJhbWVzKTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZWxlbWVudC5hbmltYXRlKFxuICAgICAgZnJhbWVzLCBcbiAgICAgIHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sIFxuICAgICAgICBkZWxheTogdGhpcy5kZWxheSxcbiAgICAgICAgZWFzaW5nOiB0aGlzLmVhc2luZ1xuICAgICAgfVxuICAgICk7XG4gICAgaWYgKCAhdGhpcy5hbmltYXRpb24ub25maW5pc2ggKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5vbmZpbmlzaCA9ICgpID0+IHRoaXMuX29uQW5pbWF0aW9uRW5kKCdmaW5pc2gnKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLm9uY2FuY2VsID0gKCkgPT4gdGhpcy5fb25BbmltYXRpb25FbmQoJ2NhbmNlbCcpO1xuICAgIH1cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbW90aW9uQ29sbGFwc2UgPSBkaXJlY3RpdmUoTW90aW9uQ29sbGFwc2UpOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSB3aW5kb3cuU2hhZG93Um9vdCAmJlxuICAgICh3aW5kb3cuU2hhZHlDU1MgPT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAgICdyZXBsYWNlJyBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzYWZlVG9rZW4pIHtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFuc1xuICAgIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICAvLyBOb3RlLCBpZiBgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzYCBpcyB0cnVlIHRoZW4gd2UgYXNzdW1lXG4gICAgICAgIC8vIENTU1N0eWxlU2hlZXQgaXMgY29uc3RydWN0YWJsZS5cbiAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiB0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgdGhpcy5fc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIFtbYGNzc2BdXSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ1NTUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6ICR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dFxuICAgICAgICAgICAgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRDYWNoZSA9IG5ldyBNYXAoKTtcbi8qKlxuICogVGVtcGxhdGUgdGFnIHdoaWNoIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzIFtbTGl0RWxlbWVudC5zdHlsZXMgfFxuICogYHN0eWxlc2BdXSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWxcbiAqIHN0cmluZyB2YWx1ZXMgbWF5IGJlIHVzZWQuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyBbW2B1bnNhZmVDU1NgXV1cbiAqIG1heSBiZSB1c2VkIGluc2lkZSBhIHRlbXBsYXRlIHN0cmluZyBwYXJ0LlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICBsZXQgcmVzdWx0ID0gY3NzUmVzdWx0Q2FjaGUuZ2V0KGNzc1RleHQpO1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjc3NSZXN1bHRDYWNoZS5zZXQoY3NzVGV4dCwgKHJlc3VsdCA9IG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgY29uc3RydWN0aW9uVG9rZW4pKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBzdHlsZXMgdG8gYSBgc2hhZG93Um9vdGAuIFdoZW4gU2hhZG93IERPTSBpc1xuICogYXZhaWxhYmxlIGJ1dCBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBub3QsIHN0eWxlcyBhcmUgYXBwZW5kZWQgdG8gdGhlXG4gKiBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWMgYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gKiBOb3RlLCB3aGVuIHNoaW1taW5nIGlzIHVzZWQsIGFueSBzdHlsZXMgdGhhdCBhcmUgc3Vic2VxdWVudGx5IHBsYWNlZCBpbnRvXG4gKiB0aGUgc2hhZG93Um9vdCBzaG91bGQgYmUgcGxhY2VkICpiZWZvcmUqIGFueSBzaGltbWVkIGFkb3B0ZWQgc3R5bGVzLiBUaGlzXG4gKiB3aWxsIG1hdGNoIHNwZWMgYmVoYXZpb3IgdGhhdCBnaXZlcyBhZG9wdGVkIHNoZWV0cyBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gKiBzaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgYWRvcHRTdHlsZXMgPSAocmVuZGVyUm9vdCwgc3R5bGVzKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICByZW5kZXJSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHN0eWxlcy5tYXAoKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gcyA6IHMuc3R5bGVTaGVldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzLmNzc1RleHQ7XG4gICAgICAgICAgICByZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0ID0gKHNoZWV0KSA9PiB7XG4gICAgbGV0IGNzc1RleHQgPSAnJztcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgY3NzVGV4dCArPSBydWxlLmNzc1RleHQ7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVDU1MoY3NzVGV4dCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbXBhdGlibGVTdHlsZSA9IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c1xuICAgID8gKHMpID0+IHNcbiAgICA6IChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0KHMpIDogcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG52YXIgX2U7XG52YXIgX2Y7XG4vKipcbiAqIFVzZSB0aGlzIG1vZHVsZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gYmFzZSBjbGFzcyBleHRlbmRpbmdcbiAqIFtbUmVhY3RpdmVFbGVtZW50XV0uXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuaW1wb3J0IHsgZ2V0Q29tcGF0aWJsZVN0eWxlLCBhZG9wdFN0eWxlcywgfSBmcm9tICcuL2Nzcy10YWcuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9jc3MtdGFnLmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCByZXF1ZXN0VXBkYXRlVGhlbmFibGU7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBUT0RPKHNvcnZlbGwpOiBBZGQgYSBsaW5rIHRvIHRoZSBkb2NzIGFib3V0IHVzaW5nIGRldiB2LiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgY29uc29sZS53YXJuKGBSdW5uaW5nIGluIGRldiBtb2RlLiBEbyBub3QgdXNlIGluIHByb2R1Y3Rpb24hYCk7XG4gICAgLy8gSXNzdWUgcGxhdGZvcm0gc3VwcG9ydCB3YXJuaW5nLlxuICAgIGlmICgoKF9hID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5Vc2UpICYmXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIGdsb2JhbFRoaXNbJ3JlYWN0aXZlRWxlbWVudFBsYXRmb3JtU3VwcG9ydCddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFNoYWR5RE9NIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG4gICAgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiAob25mdWxmaWxsZWQsIF9vbnJlamVjdGVkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcYHJlcXVlc3RVcGRhdGVcXGAgbm8gbG9uZ2VyIHJldHVybnMgYSBQcm9taXNlLmAgK1xuICAgICAgICAgICAgICAgIGBVc2UgXFxgdXBkYXRlQ29tcGxldGVcXGAgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIGlmIChvbmZ1bGZpbGxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG59XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyAnJyA6IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIHRvIGFsbG93IHJlbW92aW5nL25vIGNoYW5nZSBiZWhhdmlvci5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGxldCBmcm9tVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgIT09IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIERvICpub3QqIGdlbmVyYXRlIGV4Y2VwdGlvbiB3aGVuIGludmFsaWQgSlNPTiBpcyBzZXQgYXMgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBub3JtYWxseSBjb21wbGFpbiBvbiBiZWluZyBtaXMtY29uZmlndXJlZC5cbiAgICAgICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBEbyBnZW5lcmF0ZSBleGNlcHRpb24gaW4gKmRldiBtb2RlKi5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3NlcnQgdG8gYWRoZXJlIHRvIEJhemVsJ3MgXCJtdXN0IHR5cGUgYXNzZXJ0IEpTT04gcGFyc2VcIiBydWxlLlxuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZTtcbiAgICB9LFxufTtcbi8qKlxuICogQ2hhbmdlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgZGlmZmVyZW50IGZyb20gYG9sZFZhbHVlYC5cbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQgZm9yIGEgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFcXVhbCA9ICh2YWx1ZSwgb2xkKSA9PiB7XG4gICAgLy8gVGhpcyBlbnN1cmVzIChvbGQ9PU5hTiwgdmFsdWU9PU5hTikgYWx3YXlzIHJldHVybnMgZmFsc2VcbiAgICByZXR1cm4gb2xkICE9PSB2YWx1ZSAmJiAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKTtcbn07XG5jb25zdCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbiA9IHtcbiAgICBhdHRyaWJ1dGU6IHRydWUsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGNvbnZlcnRlcjogZGVmYXVsdENvbnZlcnRlcixcbiAgICByZWZsZWN0OiBmYWxzZSxcbiAgICBoYXNDaGFuZ2VkOiBub3RFcXVhbCxcbn07XG4vKipcbiAqIFRoZSBDbG9zdXJlIEpTIENvbXBpbGVyIGRvZXNuJ3QgY3VycmVudGx5IGhhdmUgZ29vZCBzdXBwb3J0IGZvciBzdGF0aWNcbiAqIHByb3BlcnR5IHNlbWFudGljcyB3aGVyZSBcInRoaXNcIiBpcyBkeW5hbWljIChlLmcuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvaXNzdWVzLzMxNzcgYW5kIG90aGVycykgc28gd2UgdXNlXG4gKiB0aGlzIGhhY2sgdG8gYnlwYXNzIGFueSByZXdyaXRpbmcgYnkgdGhlIGNvbXBpbGVyLlxuICovXG5jb25zdCBmaW5hbGl6ZWQgPSAnZmluYWxpemVkJztcbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHdoaWNoIG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLiBXaGVuXG4gKiBwcm9wZXJ0aWVzIGNoYW5nZSwgdGhlIGB1cGRhdGVgIG1ldGhvZCBpcyBhc3luY2hyb25vdXNseSBjYWxsZWQuIFRoaXMgbWV0aG9kXG4gKiBzaG91bGQgYmUgc3VwcGxpZWQgYnkgc3ViY2xhc3NlcnMgdG8gcmVuZGVyIHVwZGF0ZXMgYXMgZGVzaXJlZC5cbiAqIEBub0luaGVyaXREb2NcbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWN0aXZlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgY3VycmVudGx5IHJlZmxlY3RpbmcgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGFkZEluaXRpYWxpemVyKGluaXRpYWxpemVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5faW5pdGlhbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5faW5pdGlhbGl6ZXJzID0gW10pO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplcnMucHVzaChpbml0aWFsaXplcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gbm90ZTogcGlnZ3kgYmFja2luZyBvbiB0aGlzIHRvIGVuc3VyZSB3ZSdyZSBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb3BlcnR5IGFjY2Vzc29yIG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZSBpZiBvbmUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBhbmQgc3RvcmVzIGEgUHJvcGVydHlEZWNsYXJhdGlvbiBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICogVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgcHJvcGVydHkgb3B0aW9uXG4gICAgICogb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gcmVxdWVzdFxuICAgICAqIGFuIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZSBwcm9wZXJ0aWVzOyBob3dldmVyLFxuICAgICAqIHdoZW4gZG9pbmcgc28sIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHN1cGVyLmNyZWF0ZVByb3BlcnR5YCB0byBlbnN1cmVcbiAgICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgIGludGVybmFsbHkgdG8gZ2V0IGEgZGVzY3JpcHRvciB0byBpbnN0YWxsLlxuICAgICAqIFRvIGN1c3RvbWl6ZSB3aGF0IHByb3BlcnRpZXMgZG8gd2hlbiB0aGV5IGFyZSBnZXQgb3Igc2V0LCBvdmVycmlkZVxuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAgICogaW1wbGVtZW50IGBjcmVhdGVQcm9wZXJ0eWAgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgKiAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtteU9wdGlvbjogdHJ1ZX0pO1xuICAgICAqICAgc3VwZXIuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICogfVxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHN0YXRlIHByb3BlcnR5LCBmb3JjZSB0aGUgYXR0cmlidXRlIHRvIGZhbHNlLlxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xuICAgICAgICAgICAgLy8gQ2FzdCBhcyBhbnkgc2luY2UgdGhpcyBpcyByZWFkb25seS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIGZpbmFsaXphdGlvbiBoYXMgYmVlbiBraWNrZWQgb2ZmLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYW4gYWNjZXNzb3IgaWYgdGhlIHByb3RvdHlwZSBhbHJlYWR5IGhhcyBvbmUsIHNpbmNlXG4gICAgICAgIC8vIGl0IHdvdWxkIGJlIGxvc3Qgb3RoZXJ3aXNlIGFuZCB0aGF0IHdvdWxkIG5ldmVyIGJlIHRoZSB1c2VyJ3MgaW50ZW50aW9uO1xuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgICAgIC8vIHVzZXItZGVmaW5lZCBhY2Nlc3NvcnMuIE5vdGUgdGhhdCBpZiB0aGUgc3VwZXIgaGFzIGFuIGFjY2Vzc29yIHdlIHdpbGxcbiAgICAgICAgLy8gc3RpbGwgb3ZlcndyaXRlIGl0XG4gICAgICAgIGlmICghb3B0aW9ucy5ub0FjY2Vzc29yICYmICF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gYmUgZGVmaW5lZCBvbiB0aGUgZ2l2ZW4gbmFtZWQgcHJvcGVydHkuXG4gICAgICogSWYgbm8gZGVzY3JpcHRvciBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgbm90IGJlY29tZSBhbiBhY2Nlc3Nvci5cbiAgICAgKiBGb3IgZXhhbXBsZSxcbiAgICAgKlxuICAgICAqICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICogICAgICAgY29uc3QgZGVmYXVsdERlc2NyaXB0b3IgPVxuICAgICAqICAgICAgICAgICBzdXBlci5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgKiAgICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAgICogICAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICAgIGdldDogZGVmYXVsdERlc2NyaXB0b3IuZ2V0LFxuICAgICAqICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICogICAgICAgICAgIHNldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgKiAgICAgICAgICAgLy8gY3VzdG9tIGFjdGlvbi5cbiAgICAgKiAgICAgICAgIH0sXG4gICAgICogICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICogICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICogICAgICAgfVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogVGhlc2Ugb3B0aW9ucyBhcmUgZGVmaW5lZCB3aXRoIGEgUHJvcGVydHlEZWNsYXJhdGlvbiB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgICAqIG9iamVjdCBvciB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGFuZCBhcmUgcmVnaXN0ZXJlZCBpblxuICAgICAqIGBjcmVhdGVQcm9wZXJ0eSguLi4pYC5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIFwiZmluYWxcIiBhbmQgbm90IG92ZXJyaWRkZW4uIFRvXG4gICAgICogY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIGdpdmVuIHByb3BlcnR5LCBvdmVycmlkZSBgY3JlYXRlUHJvcGVydHlgLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAZmluYWxcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgYWNjZXNzb3JzIGZvciByZWdpc3RlcmVkIHByb3BlcnRpZXMsIHNldHMgdXAgZWxlbWVudFxuICAgICAqIHN0eWxpbmcsIGFuZCBlbnN1cmVzIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLiBSZXR1cm5zIHRydWUgaWZcbiAgICAgKiB0aGUgZWxlbWVudCB3YXMgZmluYWxpemVkLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgICAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcChzdXBlckN0b3IuZWxlbWVudFByb3BlcnRpZXMpO1xuICAgICAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTY3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCBwcm9wc1twXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIC8vIERFViBtb2RlIHdhcm5pbmdzXG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkID0gKG9iaiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmpbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQuIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGlzIHZlcnNpb24gb2YgUmVhY3RpdmVFbGVtZW50LmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCBTZWUgdGhlIGNoYW5nZWxvZyBhdCBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9saXQtaHRtbC9ibG9iL21haW4vcGFja2FnZXMvcmVhY3RpdmUtZWxlbWVudC9DSEFOR0VMT0cubWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgW2Bpbml0aWFsaXplYCwgYHJlcXVlc3RVcGRhdGVJbnRlcm5hbGAsIGBfZ2V0VXBkYXRlQ29tcGxldGVgXS5mb3JFYWNoKChuYW1lKSA9PiBcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLnByb3RvdHlwZSwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgc3R5bGVzIHRoZSB1c2VyIHN1cHBsaWVkIHZpYSB0aGUgYHN0YXRpYyBzdHlsZXNgIHByb3BlcnR5IGFuZFxuICAgICAqIHJldHVybnMgdGhlIGFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbnRlZ3JhdGUgaW50byBhIHN0eWxlIG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqXG4gICAgICogU3R5bGVzIGFyZSBkZWR1cGxpY2F0ZWQgcHJlc2VydmluZyB0aGUgX2xhc3RfIGluc3RhbmNlIGluIHRoZSBsaXN0LiBUaGlzXG4gICAgICogaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsZXMgdGhhdCBjYW4gb2NjdXJcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZy4gVGhlIGxhc3QgaXRlbSBpcyBrZXB0IHRvIHRyeVxuICAgICAqIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3QgaW1wb3J0YW50XG4gICAgICogdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuICAgICAgICAgICAgLy8gRGVkdXBlIHRoZSBmbGF0dGVuZWQgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgbGFzdCBpdGVtcy5cbiAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IGNhc3RpbmcgdG8gQXJyYXk8dW5rbm93bj4gd29ya3MgYXJvdW5kIFRTIGVycm9yIHRoYXRcbiAgICAgICAgICAgIC8vIGFwcGVhcnMgdG8gY29tZSBmcm9tIHRyeWluZyB0byBmbGF0dGVuIGEgdHlwZSBDU1NSZXN1bHRBcnJheS5cbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoc3R5bGVzLmZsYXQoSW5maW5pdHkpLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAvLyBUaGVuIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIGJ5IGFkZGluZyB0aGUgc2V0IGl0ZW1zIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2V0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlcy51bnNoaWZ0KGdldENvbXBhdGlibGVTdHlsZShzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMucHVzaChnZXRDb21wYXRpYmxlU3R5bGUoc3R5bGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUgPT09IGZhbHNlXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiB0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgOiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG9ubHkgb3ZlcnJpZGUgcG9pbnQgZm9yIGN1c3RvbWl6aW5nIHdvcmsgZG9uZSB3aGVuIGVsZW1lbnRzXG4gICAgICogYXJlIGNvbnN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzKSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHJlcykpO1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9pbml0aWFsaXplcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChpKSA9PiBpKHRoaXMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICgoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9fY29udHJvbGxlcnMgPSBbXSkpLnB1c2goY29udHJvbGxlcik7XG4gICAgICAgIC8vIElmIGEgY29udHJvbGxlciBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQsXG4gICAgICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgICAgIC8vICh3aGljaCBpcyBzZXQgaW4gY29ubmVjdGVkQ2FsbGJhY2spIHRvIGF2b2lkIHRoZSBuZWVkIHRvIHRyYWNrIGFcbiAgICAgICAgLy8gZmlyc3QgY29ubmVjdGVkIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgKF9iID0gY29udHJvbGxlci5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBOb3RlLCBpZiB0aGUgaW5kZXhPZiBpcyAtMSwgdGhlID4+PiB3aWxsIGZsaXAgdGhlIHNpZ24gd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgIC8vIHNwbGljZSBkbyBub3RoaW5nLlxuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPj4+IDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICAgKiBjb25zdHJ1Y3RvciBydW5zLiBOb3RlLCBvbiB2ZXJ5IG9sZCB2ZXJzaW9ucyBvZiBTYWZhcmkgKDw9OSkgb3IgQ2hyb21lXG4gICAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAgICogdGhlc2UgYnJvd3NlcnMgbmF0aXZlIHByb3BlcnRpZXMgYXBwZWFyIG9uIGluc3RhbmNlcyBhbmQgdGhlcmVmb3JlIHRoZWlyXG4gICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICAgKiB0aGUgbmF0aXZlIHBsYXRmb3JtIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIF9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gKF9hID0gdGhpcy5zaGFkb3dSb290KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICAgICAgYWRvcHRTdHlsZXMocmVuZGVyUm9vdCwgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9uIGZpcnN0IGNvbm5lY3Rpb24sIGNyZWF0ZXMgdGhlIGVsZW1lbnQncyByZW5kZXJSb290LCBzZXRzIHVwXG4gICAgICogZWxlbWVudCBzdHlsaW5nLCBhbmQgZW5hYmxlcyB1cGRhdGluZy5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICAvLyBJZiB3ZSB3ZXJlIGRpc2Nvbm5lY3RlZCwgcmUtZW5hYmxlIHVwZGF0aW5nIGJ5IHJlc29sdmluZyB0aGUgcGVuZGluZ1xuICAgICAgICAvLyBjb25uZWN0aW9uIHByb21pc2VcbiAgICAgICAgaWYgKHRoaXMuX19lbmFibGVDb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSA9IHRoaXMuX19lbmFibGVDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIGZpbmFsIGFuZCBub3Qgb3ZlcnJpZGRlbi4gSXQgaXNcbiAgICAgKiBvdmVycmlkZGVuIG9uIHRoZSBlbGVtZW50IGluc3RhbmNlIHdpdGggYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIHRoZSBmaXJzdFxuICAgICAqIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGVuYWJsZVVwZGF0aW5nKF9yZXF1ZXN0ZWRVcGRhdGUpIHsgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdERpc2Nvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ0Nvbm5lY3Rpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHIpID0+ICh0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbiA9IHIpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF9vbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgX19wcm9wZXJ0eVRvQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXNcbiAgICAgICAgICAgIC5jb25zdHJ1Y3Rvci5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnJlZmxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvQXR0cmlidXRlID0gKF9iID0gKF9hID0gb3B0aW9ucy5jb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0F0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignbWlncmF0aW9uJykgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke25hbWV9IHByb3BlcnR5IGlzIHVuZGVmaW5lZC4gVGhlIGF0dHJpYnV0ZSB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFJlYWN0aXZlRWxlbWVudCwgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYXR0cmlidXRlIHdvdWxkIG5vdCBoYXZlIGNoYW5nZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgICAgIC8vIHRoZSB0eXBlOyBpdCBoYXMgaXNzdWVzIHdpdGggdHJhY2tpbmcgdHlwZXMgdGhyb3VnaCBzdGF0aWNzXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgICAgIC8vIGlmIGl0IHdhcyBqdXN0IHNldCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZC5cbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGZyb21BdHRyaWJ1dGUgPSAoX2MgPSAoX2IgPSAoX2EgPSBjb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mcm9tQXR0cmlidXRlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAodHlwZW9mIGNvbnZlcnRlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gY29udmVydGVyXG4gICAgICAgICAgICAgICAgOiBudWxsKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZGVmYXVsdENvbnZlcnRlci5mcm9tQXR0cmlidXRlO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gcHJvcE5hbWU7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBmcm9tQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYW4gdXBkYXRlIHdoaWNoIGlzIHByb2Nlc3NlZCBhc3luY2hyb25vdXNseS4gVGhpcyBzaG91bGQgYmUgY2FsbGVkXG4gICAgICogd2hlbiBhbiBlbGVtZW50IHNob3VsZCB1cGRhdGUgYmFzZWQgb24gc29tZSBzdGF0ZSBub3QgdHJpZ2dlcmVkIGJ5IHNldHRpbmdcbiAgICAgKiBhIHJlYWN0aXZlIHByb3BlcnR5LiBJbiB0aGlzIGNhc2UsIHBhc3Mgbm8gYXJndW1lbnRzLiBJdCBzaG91bGQgYWxzbyBiZVxuICAgICAqIGNhbGxlZCB3aGVuIG1hbnVhbGx5IGltcGxlbWVudGluZyBhIHByb3BlcnR5IHNldHRlci4gSW4gdGhpcyBjYXNlLCBwYXNzIHRoZVxuICAgICAqIHByb3BlcnR5IGBuYW1lYCBhbmQgYG9sZFZhbHVlYCB0byBlbnN1cmUgdGhhdCBhbnkgY29uZmlndXJlZCBwcm9wZXJ0eVxuICAgICAqIG9wdGlvbnMgYXJlIGhvbm9yZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUgb2xkIHZhbHVlIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBwcm9wZXJ0eSBvcHRpb25zIHRvIHVzZSBpbnN0ZWFkIG9mIHRoZSBwcmV2aW91c2x5XG4gICAgICogICAgIGNvbmZpZ3VyZWQgb3B0aW9uc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXQgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSBwcm9wZXJ0eSBrZXksIHBlcmZvcm0gcHJvcGVydHkgdXBkYXRlIHN0ZXBzLlxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICAgICAgICBvcHRpb25zIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hhbmdlZCA9IG9wdGlvbnMuaGFzQ2hhbmdlZCB8fCBub3RFcXVhbDtcbiAgICAgICAgICAgIGlmIChoYXNDaGFuZ2VkKHRoaXNbbmFtZV0sIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHJlZmxlY3RpbmcgcHJvcGVydGllcyBzZXQuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0eSB0byBgX3JlZmxlY3RpbmdQcm9wZXJ0aWVzYC4gVGhpcyBlbnN1cmVzIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgKyBwcm9wZXJ0eSByZWZsZWN0cyBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJiB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ICE9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgaWYgdGhlIHByb3BlcnR5IHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHNob3VsZFJlcXVlc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNVcGRhdGVQZW5kaW5nICYmIHNob3VsZFJlcXVlc3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gdGhpcy5fX2VucXVldWVVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIG5vIGxvbmdlciByZXR1cm5zIGEgcHJvbWlzZSwgaW4gZGV2IG1vZGUgd2UgcmV0dXJuIGFcbiAgICAgICAgLy8gdGhlbmFibGUgd2hpY2ggd2FybnMgaWYgaXQncyBjYWxsZWQuXG4gICAgICAgIHJldHVybiBERVZfTU9ERSA/IHJlcXVlc3RVcGRhdGVUaGVuYWJsZSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSB1cGRhdGUuXG4gICAgICovXG4gICAgYXN5bmMgX19lbnF1ZXVlVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgZGlzY29ubmVjdGVkLCB3YWl0IHVudGlsIHJlLWNvbm5lY3RlZCB0byBmbHVzaCBhbiB1cGRhdGVcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9fcGVuZGluZ0Nvbm5lY3Rpb25Qcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUmVmaXJlIGFueSBwcmV2aW91cyBlcnJvcnMgYXN5bmMgc28gdGhleSBkbyBub3QgZGlzcnVwdCB0aGUgdXBkYXRlXG4gICAgICAgICAgICAvLyBjeWNsZS4gRXJyb3JzIGFyZSByZWZpcmVkIHNvIGRldmVsb3BlcnMgaGF2ZSBhIGNoYW5jZSB0byBvYnNlcnZlXG4gICAgICAgICAgICAvLyB0aGVtLCBhbmQgdGhpcyBjYW4gYmUgZG9uZSBieSBpbXBsZW1lbnRpbmdcbiAgICAgICAgICAgIC8vIGB3aW5kb3cub251bmhhbmRsZWRyZWplY3Rpb25gLlxuICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBwZXJmb3JtVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAvLyBjaGVja2VkIHRvIGF2b2lkIGRlbGF5aW5nIGFuIGFkZGl0aW9uYWwgbWljcm90YXNrIHVubGVzcyB3ZSBuZWVkIHRvLlxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAgICogdXBkYXRlLCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSB0aW1pbmcgb2YgdXBkYXRlcy4gSWYgdGhpc1xuICAgICAqIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIucGVyZm9ybVVwZGF0ZSgpYCBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3RlY3RlZCBhc3luYyBwZXJmb3JtVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwZXJmb3JtVXBkYXRlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIEFib3J0IGFueSB1cGRhdGUgaWYgb25lIGlzIG5vdCBwZW5kaW5nIHdoZW4gdGhpcyBpcyBjYWxsZWQuXG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBgcGVyZm9ybVVwZGF0ZWAgaXMgY2FsbGVkIGVhcmx5IHRvIFwiZmx1c2hcIlxuICAgICAgICAvLyB0aGUgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaXNVcGRhdGVQZW5kaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgY2xhc3MgcHJvcGVydGllcyBhcmUgc2hhZG93ZWQgYnkgY2xhc3MgZmllbGRzXG4gICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkgJiYgISgoX2EgPSB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKHApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWRQcm9wZXJ0aWVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93ZWRQcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBMaW5rIHRvIGRvY3MgZXhwbGFuYXRpb24gb2YgdGhpcyBpc3N1ZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgd2lsbCBub3QgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGZpZWxkczogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzaGFkb3dlZFByb3BlcnRpZXMuam9pbignLCAnKX0uIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYE5hdGl2ZSBjbGFzcyBmaWVsZHMgYW5kIHNvbWUgY29tcGlsZWQgb3V0cHV0IHdpbGwgb3ZlcndyaXRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gVG8gZml4IHRoaXMgaXNzdWUsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGVpdGhlciBpbml0aWFsaXplIHByb3BlcnRpZXMgaW4gdGhlIGNvbnN0cnVjdG9yIG9yIGFkanVzdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGB5b3VyIGNvbXBpbGVyIHNldHRpbmdzOyBmb3IgZXhhbXBsZSwgZm9yIFR5cGVTY3JpcHQgc2V0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxcYHVzZURlZmluZUZvckNsYXNzRmllbGRzOiBmYWxzZVxcYCBpbiB5b3VyIFxcYHRzY29uZmlnLmpzb25cXGAuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICAgICAgaWYgKHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4gKHRoaXNbcF0gPSB2KSk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgZnJvbSBydW5uaW5nIHdoZW4gdGhlcmUncyBhblxuICAgICAgICAgICAgLy8gdXBkYXRlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgY2FuIGFjY2VwdCBhZGRpdGlvbmFsIHVwZGF0ZXMgYWZ0ZXIgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB1cGRhdGUgaXMgbm8gbG9uZ2VyIGNvbnNpZGVyZWQgcGVuZGluZyBhbmQgZnVydGhlciB1cGRhdGVzIGFyZSBub3cgYWxsb3dlZC5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB3aWxsVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhbiBvdmVycmlkZSBwb2ludCBmb3IgcG9seWZpbGwtc3VwcG9ydC5cbiAgICAvLyBAaW50ZXJuYWxcbiAgICBfJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nICYmXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdjaGFuZ2UtaW4tdXBkYXRlJykgPj0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBBbiB1cGRhdGUgd2FzIHJlcXVlc3RlZCAoZ2VuZXJhbGx5IGJlY2F1c2UgYSBwcm9wZXJ0eSB3YXMgc2V0KSBgICtcbiAgICAgICAgICAgICAgICBgYWZ0ZXIgYW4gdXBkYXRlIGNvbXBsZXRlZCwgY2F1c2luZyBhIG5ldyB1cGRhdGUgdG8gYmUgc2NoZWR1bGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBpbmVmZmljaWVudCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgdW5sZXNzIHRoZSBuZXh0IHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgY2FuIG9ubHkgYmUgc2NoZWR1bGVkIGFzIGEgc2lkZSBlZmZlY3Qgb2YgdGhlIHByZXZpb3VzIHVwZGF0ZS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX21hcmtVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSB1cGRhdGUgcmVzb2x2ZWRcbiAgICAgKiAgICAgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0IHVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBwb2ludCBmb3IgdGhlIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEl0IGlzIG5vdCBzYWZlIHRvIG92ZXJyaWRlIHRoZSBgdXBkYXRlQ29tcGxldGVgIGdldHRlciBkaXJlY3RseSBkdWUgdG8gYVxuICAgICAqIGxpbWl0YXRpb24gaW4gVHlwZVNjcmlwdCB3aGljaCBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gY2FsbCBhXG4gICAgICogc3VwZXJjbGFzcyBnZXR0ZXIgKGUuZy4gYHN1cGVyLnVwZGF0ZUNvbXBsZXRlLnRoZW4oLi4uKWApIHdoZW4gdGhlIHRhcmdldFxuICAgICAqIGxhbmd1YWdlIGlzIEVTNSAoaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMzgpLlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZGVuIGluc3RlYWQuIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgICAgYXN5bmMgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgICAgYXdhaXQgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICAgKiAgICAgICBhd2FpdCB0aGlzLl9teUNoaWxkLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICAgKiBhbiB1cGRhdGUuIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGB0cnVlYCwgYnV0IHRoaXMgY2FuIGJlXG4gICAgICogY3VzdG9taXplZCB0byBjb250cm9sIHdoZW4gdG8gdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgc2hvdWxkVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAgICogSXQgY2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVuZGVyIGFuZCBrZWVwIHVwZGF0ZWQgZWxlbWVudCBET00uXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3JcbiAgICAgICAgICAgIC8vIGxvb3BzIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLl9fcHJvcGVydHlUb0F0dHJpYnV0ZShrLCB0aGlzW2tdLCB2KSk7XG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm1cbiAgICAgKiBwb3N0LXVwZGF0aW5nIHRhc2tzIHZpYSBET00gQVBJcywgZm9yIGV4YW1wbGUsIGZvY3VzaW5nIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtIG9uZSB0aW1lXG4gICAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBmaXJzdFVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbn1cbl9mID0gZmluYWxpemVkO1xuLyoqXG4gKiBNYXJrcyBjbGFzcyBhcyBoYXZpbmcgZmluaXNoZWQgY3JlYXRpbmcgcHJvcGVydGllcy5cbiAqL1xuUmVhY3RpdmVFbGVtZW50W19mXSA9IHRydWU7XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfYyA9IChfYiA9IGdsb2JhbFRoaXMpWydyZWFjdGl2ZUVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oKF9kID0gKF9lID0gZ2xvYmFsVGhpcylbJ3JlYWN0aXZlRWxlbWVudFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChfZVsncmVhY3RpdmVFbGVtZW50VmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4wLjAtcmMuMScpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmYWZkO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzAyMjg1MTtcbn1cbmZpZWxkc2V0ID4gbGVnZW5kIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSBpbnNldDtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBvdXRsaW5lOiAwO1xufVxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYmYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5bdHlwZT10ZXh0XSxcblt0eXBlPXNlYXJjaF0sXG5bdHlwZT11cmxdLFxuW3R5cGU9bnVtYmVyXSxcbnRleHRhcmVhIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuYnV0dG9uLFxuW3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpmb2N1cyxcblt0eXBlPXN1Ym1pdF06Zm9jdXMge1xuICBjb2xvcjogIzAwYjJlMztcbn1cblxuW3R5cGU9Y2hlY2tib3hdLFxuW3R5cGU9cmFkaW9dIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbn1cblxuW3R5cGU9c2VhcmNoXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuaDEge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDEuOTFyZW07XG59XG5oMTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5oMSBhIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDEgYTpob3ZlciwgaDEgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi45NHJlbTtcbiAgfVxufVxuXG5oMiB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjMTM2MzllO1xuICBmb250LXNpemU6IDEuNjA1NXJlbTtcbn1cbmgyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyLjA5OTVyZW07XG4gIH1cbn1cbmgyIGEge1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oMiBhOmhvdmVyLCBoMiBhOmZvY3VzIHtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDMge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxLjMzMjVyZW07XG59XG5oMzpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS43NDI1cmVtO1xuICB9XG59XG5oMyBhIHtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDMgYTpob3ZlciwgaDMgYTpmb2N1cyB7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxLjA5MnJlbTtcbn1cbmg0OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmg0IGEge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oNCBhOmhvdmVyLCBoNCBhOmZvY3VzIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjQyOHJlbTtcbiAgfVxufVxuXG5oNSB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmg1OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmg1IGEge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oNSBhOmhvdmVyLCBoNSBhOmZvY3VzIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjIwN3JlbTtcbiAgfVxufVxuXG5oNiB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmg2OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmg2IGEge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oNiBhOmhvdmVyLCBoNiBhOmZvY3VzIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIC0tbGlzdC1hcnJvdy1jb2xvcjogI2ZmYzUxOTtcbiAgLS1saXN0LWJvcmRlcmVkLWJvcmRlcjogI2RiZWFmNztcbiAgLS1saXN0LWZhcS1xdWVzdGlvbjogIzEzNjM5ZTtcbiAgLS1saXN0LWZhcS1xdWVzdGlvbi1ob3ZlcjogIzAwMTEyNDtcbiAgLS1saXN0LWZhcS1hOiAjMDIyODUxO1xuICAtLWxpc3QtcGlwZS1waXBlOiAjNGM0YzRjO1xuICAtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nOiAxLjVyZW07XG4gIC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nOiAwLjVyZW07XG59XG5cbi5saXN0LS1mbHVzaCxcbi5saXN0LXdyYXBwZXItLWZsdXNoIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xufVxuXG4ubGlzdC0tYXJyb3cgbGksXG4ubGlzdC13cmFwcGVyLS1hcnJvdyB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1hcnJvdyBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1hcnJvdyB1bCBsaTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLTAuMTI1ZW0gMCAwIC0xLjI1ZW07XG4gIGNvbG9yOiB2YXIoLS1saXN0LWFycm93LWNvbG9yKTtcbiAgY29udGVudDogXCLvgZRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuLmxpc3QtLWFycm93IGxpIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWFycm93IHVsIGxpIGxpOmJlZm9yZSB7XG4gIG1hcmdpbjogMCAwIDAgLTEuMmVtO1xuICBjb250ZW50OiBcIu+EgVwiO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cbi5saXN0LS1hcnJvdyBsaSBsaSBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1hcnJvdyB1bCBsaSBsaSBsaTpiZWZvcmUge1xuICBtYXJnaW46IDAgMCAwIC0xLjZlbTtcbiAgY29udGVudDogXCLvhLhcIjtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDIuODtcbn1cblxuLmxpc3QtLXdoaXRlLWFycm93LFxuLmxpc3Qtd3JhcHBlci0td2hpdGUtYXJyb3cgdWwge1xuICAtLWxpc3QtYXJyb3ctY29sb3I6ICNmZmY7XG59XG4ubGlzdC0td2hpdGUtYXJyb3cgbGksXG4ubGlzdC13cmFwcGVyLS13aGl0ZS1hcnJvdyB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS13aGl0ZS1hcnJvdyBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS13aGl0ZS1hcnJvdyB1bCBsaTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLTAuMTI1ZW0gMCAwIC0xLjI1ZW07XG4gIGNvbG9yOiB2YXIoLS1saXN0LWFycm93LWNvbG9yKTtcbiAgY29udGVudDogXCLvgZRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuLmxpc3QtLXdoaXRlLWFycm93IGxpIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLXdoaXRlLWFycm93IHVsIGxpIGxpOmJlZm9yZSB7XG4gIG1hcmdpbjogMCAwIDAgLTEuMmVtO1xuICBjb250ZW50OiBcIu+EgVwiO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cbi5saXN0LS13aGl0ZS1hcnJvdyBsaSBsaSBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS13aGl0ZS1hcnJvdyB1bCBsaSBsaSBsaTpiZWZvcmUge1xuICBtYXJnaW46IDAgMCAwIC0xLjZlbTtcbiAgY29udGVudDogXCLvhLhcIjtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDIuODtcbn1cblxuLmxpc3QtLWJvcmRlcmVkLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tYm9yZGVyZWQgdWwsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCB1bCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saXN0LWJvcmRlcmVkLWJvcmRlcik7XG59XG4ubGlzdC0tYm9yZGVyZWQgdWwgbGk6Zmlyc3QtY2hpbGQsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xufVxuLmxpc3QtLWJvcmRlcmVkIGxpLFxuLmxpc3QtLWJvcmRlcmVkID4gZGl2LFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgbGksXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbiAgcGFkZGluZzogMCAwIHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZykgMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpc3QtYm9yZGVyZWQtYm9yZGVyKTtcbn1cbi5saXN0LS1ib3JkZXJlZCBsaTpsYXN0LWNoaWxkLFxuLmxpc3QtLWJvcmRlcmVkID4gZGl2Omxhc3QtY2hpbGQsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCBsaTpsYXN0LWNoaWxkLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLmxpc3QtLWJvcmRlcmVkIGxpIGxpLFxuLmxpc3QtLWJvcmRlcmVkID4gZGl2IGxpLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgbGkgbGksXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCA+IGRpdiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5saXN0LS1ib3JkZXJlZCBsaSBsaTpiZWZvcmUsXG4ubGlzdC0tYm9yZGVyZWQgPiBkaXYgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgbGkgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgPiBkaXYgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cbi5saXN0LS1ib3JkZXJlZCBsaTpiZWZvcmUsXG4ubGlzdC0tYm9yZGVyZWQgPiBkaXY6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgPiBkaXY6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgMCAwIC0xLjdlbTtcbiAgY29sb3I6IHZhcigtLWxpc3QtYXJyb3ctY29sb3IpO1xuICBjb250ZW50OiBcIu+EuFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG59XG5cbi5saXN0LS1mYXEsXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4ubGlzdC0tZmFxIGxpLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1mYXEgPiBsaSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpIHtcbiAgcGFkZGluZzogMCAwLjVyZW0gMC41cmVtIHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKTtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQob2RkKSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChvZGQpIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCB2YXIoLS1saXN0LWZhcS1xdWVzdGlvbikpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQob2RkKTpob3Zlcixcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChvZGQpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCB2YXIoLS1saXN0LWZhcS1xdWVzdGlvbi1ob3ZlcikpO1xuICBvcGFjaXR5OiAwLjg7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKG9kZCk6bm90KDpmaXJzdC1jaGlsZCksXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQob2RkKTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saXN0LWJvcmRlcmVkLWJvcmRlcik7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKG9kZCk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKG9kZCk6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpO1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKSk7XG4gIGNvbnRlbnQ6IFwiUTpcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQob2RkKSA+IHAsXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQob2RkKSA+IHAge1xuICBtYXJnaW46IDA7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKGV2ZW4pLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChldmVuKTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQoZXZlbik6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZykpO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsIHZhcigtLWxpc3QtZmFxLWEpKTtcbiAgY29udGVudDogXCJBOlwiO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubGlzdC0tcGlwZSxcbi5saXN0LXdyYXBwZXItLXBpcGUgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1waXBlIGxpLFxuLmxpc3Qtd3JhcHBlci0tcGlwZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tcGlwZSBsaSxcbi5saXN0LXdyYXBwZXItLXBpcGUgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgdmFyKC0tbGlzdC1waXBlLXBpcGUpKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ubGlzdC0tcGlwZSBsaTpsYXN0LWNoaWxkLFxuLmxpc3Qtd3JhcHBlci0tcGlwZSB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi5saXN0LS1jb21tZW50IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAycmVtO1xufVxuLmxpc3QtLWNvbW1lbnQgdWwge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlzdC1ib3JkZXJlZC1ib3JkZXIpO1xufVxuLmxpc3QtLWNvbW1lbnQgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbn1cbi5saXN0LS1jb21tZW50IGxpLFxuLmxpc3QtLWNvbW1lbnQgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpIDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saXN0LWJvcmRlcmVkLWJvcmRlcik7XG59XG4ubGlzdC0tY29tbWVudCBsaTpsYXN0LWNoaWxkLFxuLmxpc3QtLWNvbW1lbnQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLmxpc3QtLWNvbW1lbnQgbGkgbGksXG4ubGlzdC0tY29tbWVudCA+IGRpdiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5saXN0LS1jb21tZW50IGxpIGxpOmJlZm9yZSxcbi5saXN0LS1jb21tZW50ID4gZGl2IGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubGlzdC0tY29tbWVudCBsaTpiZWZvcmUsXG4ubGlzdC0tY29tbWVudCA+IGRpdjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCAwIDAgLTEuN2VtO1xuICBjb2xvcjogdmFyKC0tbGlzdC1hcnJvdy1jb2xvcik7XG4gIGNvbnRlbnQ6IFwi74S4XCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbn1cblxuLmxpc3QtLXNpbXBsZSxcbi5saXN0LXdyYXBwZXItLXNpbXBsZSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXNpbXBsZSBsaSxcbi5saXN0LXdyYXBwZXItLXNpbXBsZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tc2ltcGxlIGxpLFxuLmxpc3Qtd3JhcHBlci0tc2ltcGxlIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubGlzdC0tc2ltcGxlIGxpIHVsLFxuLmxpc3Qtd3JhcHBlci0tc2ltcGxlIHVsIGxpIHVsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5saXN0LS1zaW1wbGUgYSxcbi5saXN0LXdyYXBwZXItLXNpbXBsZSB1bCBhIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxpc3QtLWZpbHRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWZpbHRlciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tZmlsdGVyIGxpIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwIDAuMjVyZW0gMC41cmVtO1xufVxuXG4ubGlzdC0tbXVsdGlsZXZlbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbn1cbi5saXN0LS1tdWx0aWxldmVsIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1hbHBoYTtcbn1cbi5saXN0LS1tdWx0aWxldmVsIG9sIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcbn1cblxuLmxpc3QtLW91dGxpbmUge1xuICBsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLXJvbWFuO1xufVxuLmxpc3QtLW91dGxpbmUgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLWFscGhhO1xufVxuLmxpc3QtLW91dGxpbmUgb2wgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG59XG4ubGlzdC0tb3V0bGluZSBvbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItbGF0aW47XG59XG4ubGlzdC0tb3V0bGluZSBvbCBvbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG59XG5cbi5saXN0LS1yZXNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXJlc2V0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3QtLWFjY29yZGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxpc3QtLWFjY29yZGlvbiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tYWNjb3JkaW9uID4gbGkge1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwLjVyZW0gdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpO1xufVxuLmxpc3QtLWFjY29yZGlvbiA+IGxpOm50aC1jaGlsZChvZGQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2UwZjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NTE7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5saXN0LS1hY2NvcmRpb24gPiBsaTpudGgtY2hpbGQob2RkKTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLTAuMTVlbSAwIDAgLTEuNDNlbTtcbiAgY29sb3I6IHZhcigtLWxpc3QtYXJyb3ctY29sb3IpO1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG4ubGlzdC0tYWNjb3JkaW9uID4gbGk6bnRoLWNoaWxkKG9kZCkgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmxpc3QtLWFjY29yZGlvbiA+IGxpOm50aC1jaGlsZChldmVuKSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmM2ZhO1xuICBjb2xvcjogIzAwMDtcbn1cbi5saXN0LS1hY2NvcmRpb24gLmFjdGl2ZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5saXN0LS1kb3dubG9hZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWRvd25sb2FkIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1kb3dubG9hZCBhIHtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxpc3QtLWRvd25sb2FkIGE6aG92ZXIge1xuICBjb2xvcjogIzAwYjJlMztcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4uY2F0ZWdvcnktYnJhbmRfX3RleHQge1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuLmNhdGVnb3J5LWJyYW5kX190ZXh0LS1rbm9jay1vdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCwgIzEzNjM5ZSk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgI2ZmZik7XG59XG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCwgIzEzNjM5ZSk7XG59XG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgYSB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgaW5oZXJpdCk7XG59XG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgaW5oZXJpdCk7XG59XG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDEsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDIsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDMsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDQsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDUsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgaDYsXG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgZmlnY2FwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgaW5oZXJpdCk7XG59XG4uY2F0ZWdvcnktYnJhbmRfX2JhY2tncm91bmQgbGk6YmVmb3JlIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCBpbmhlcml0KTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZC0tbGlnaHRlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY2F0ZWdvcnktYnJhbmQtcmdiLCAjMTM2MzllKSwgMC4xKTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYXJyb3c6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMC41ZW0gMCAtMS41ZW07XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCwgaW5oZXJpdCk7XG4gIGNvbnRlbnQ6IFwi4oaSXCI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYWRtaW4tYmx1ZSxcbi5hZG1pbi1ibHVlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMTM2MzllO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWFkbWluLWJsdWUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMTM2MzllO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTksIDk5LCAxNTg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxMCwgNTAsIDc5O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLnJlYy1wb29sLFxuLnJlYy1wb29sIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmZjZmViO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJlYy1wb29sIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzZmY2ZlYjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDExMSwgMjA3LCAyMzU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA1NiwgMTA0LCAxMTg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4udGFob2UsXG4udGFob2UgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGIyZTM7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tdGFob2Uge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDBiMmUzO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMCwgMTc4LCAyMjc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAwLCA4OSwgMTE0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnNreS1ibHVlLFxuLnNreS1ibHVlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDBiMmUzO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXNreS1ibHVlIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwYjJlMztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDE3OCwgMjI3O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgODksIDExNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5ndW5yb2NrLFxuLmd1bnJvY2sgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDQ3YmE7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tZ3Vucm9jayB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDQ3YmE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCA3MSwgMTg2O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgMzYsIDkzO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLmJvZGVnYSxcbi5ib2RlZ2EgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDNhNWQ7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tYm9kZWdhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwM2E1ZDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDU4LCA5MztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDI5LCA0NztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi53aW50ZXItc2t5LWdyYXksXG4ud2ludGVyLXNreS1ncmF5IGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDAzYTVkO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXdpbnRlci1za3ktZ3JheSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDNhNWQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCA1OCwgOTM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAwLCAyOSwgNDc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4ucmFpbixcbi5yYWluIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDNmOWU2O1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJhaW4ge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDNmOWU2O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMywgMjQ5LCAyMzA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAyLCAxMjUsIDExNTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5hcmJvcmV0dW0sXG4uYXJib3JldHVtIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDBjNGIzO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWFyYm9yZXR1bSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGM0YjM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCAxOTYsIDE3OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDk4LCA5MDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5jb3JrLW9hayxcbi5jb3JrLW9hayBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwYzRiMztcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1jb3JrLW9hayB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGM0YjM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCAxOTYsIDE3OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDk4LCA5MDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5wdXRhaC1jcmVlayxcbi5wdXRhaC1jcmVlayBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwOGVhYTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1wdXRhaC1jcmVlayB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDhlYWE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCAxNDIsIDE3MDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDcxLCA4NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4ucmVjLXBvb2wtYmx1ZSxcbi5yZWMtcG9vbC1ibHVlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDA4ZWFhO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJlYy1wb29sLWJsdWUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDA4ZWFhO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMCwgMTQyLCAxNzA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAwLCA3MSwgODU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmRlbHRhLFxuLmRlbHRhIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDA1MjRjO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWRlbHRhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwNTI0YztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDgyLCA3NjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDQxLCAzODtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5mYXJtZXJzLW1hcmtldCxcbi5mYXJtZXJzLW1hcmtldCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2FhZGE5MTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1mYXJtZXJzLW1hcmtldCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNhYWRhOTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxNzAsIDIxOCwgMTQ1O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogODUsIDEwOSwgNzM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMyNjYwNDE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAzOCwgOTYsIDY1O1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmhhcnQtaGFsbC1zdHVjY28sXG4uaGFydC1oYWxsLXN0dWNjbyBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2FhZGE5MTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1oYXJ0LWhhbGwtc3R1Y2NvIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2FhZGE5MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE3MCwgMjE4LCAxNDU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA4NSwgMTA5LCA3MztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzI2NjA0MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDM4LCA5NiwgNjU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uc2FnZSxcbi5zYWdlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmNjYTk4O1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXNhZ2Uge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmNjYTk4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTA4LCAyMDIsIDE1MjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDU0LCAxMDEsIDc2O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDA1MjRjO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMCwgODIsIDc2O1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnNhZ2UtZ3JlZW4sXG4uc2FnZS1ncmVlbiBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzZjY2E5ODtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1zYWdlLWdyZWVuIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzZjY2E5ODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDEwOCwgMjAyLCAxNTI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA1NCwgMTAxLCA3NjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAwNTI0YztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDAsIDgyLCA3NjtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5xdWFkLFxuLnF1YWQgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMzZGFlMmI7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcXVhZCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMzZGFlMmI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiA2MSwgMTc0LCA0MztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDMxLCA4NywgMjI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uc3VubnktZ3Jhc3MsXG4uc3VubnktZ3Jhc3MgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMzZGFlMmI7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc3VubnktZ3Jhc3Mge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjM2RhZTJiO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogNjEsIDE3NCwgNDM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAzMSwgODcsIDIyO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnJlZHdvb2QsXG4ucmVkd29vZCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzI2NjA0MTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1yZWR3b29kIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzI2NjA0MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDM4LCA5NiwgNjU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxOSwgNDgsIDMzO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLmV2ZXJncmVlbixcbi5ldmVyZ3JlZW4gYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMyNjYwNDE7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tZXZlcmdyZWVuIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzI2NjA0MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDM4LCA5NiwgNjU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxOSwgNDgsIDMzO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLmdvbGRlbi1zdGF0ZSxcbi5nb2xkZW4tc3RhdGUgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZmZmM2I7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tZ29sZGVuLXN0YXRlIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmZmYzYjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI1NSwgMjU1LCA1OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyOCwgMTI4LCAzMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5zdW5mbG93ZXIsXG4uc3VuZmxvd2VyIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmZkYzAwO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXN1bmZsb3dlciB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZmRjMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAyNTUsIDIyMCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyOCwgMTEwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmdvbGRlbi1sdXBpbmUsXG4uZ29sZGVuLWx1cGluZSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmZGMwMDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1nb2xkZW4tbHVwaW5lIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmZGMwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI1NSwgMjIwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTI4LCAxMTAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4ucG9wcHksXG4ucG9wcHkgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmMThhMDA7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcG9wcHkge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZjE4YTAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjQxLCAxMzgsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxMjEsIDY5LCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5jYWxpZm9ybmlhLXBvcHB5LFxuLmNhbGlmb3JuaWEtcG9wcHkgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmMThhMDA7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tY2FsaWZvcm5pYS1wb3BweSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmMThhMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAyNDEsIDEzOCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyMSwgNjksIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmNhbGlmb3JuaWEsXG4uY2FsaWZvcm5pYSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzhhNTMyZjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1jYWxpZm9ybmlhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzhhNTMyZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDEzOCwgODMsIDQ3O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogNjksIDQyLCAyNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5zb3V0aC1oYWxsLWJyb3duLFxuLnNvdXRoLWhhbGwtYnJvd24gYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM4YTUzMmY7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc291dGgtaGFsbC1icm93biB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM4YTUzMmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxMzgsIDgzLCA0NztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDY5LCA0MiwgMjQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4ucm9zZSxcbi5yb3NlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmY4MTg5O1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJvc2Uge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmY4MTg5O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjU1LCAxMjksIDEzNztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyOCwgNjUsIDY5O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLm11LWJyaWNrLFxuLm11LWJyaWNrIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmY4MTg5O1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLW11LWJyaWNrIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmODE4OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI1NSwgMTI5LCAxMzc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxMjgsIDY1LCA2OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5zdHJhd2JlcnJ5LFxuLnN0cmF3YmVycnkgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmOTM1NDk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc3RyYXdiZXJyeSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmOTM1NDk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAyNDksIDUzLCA3MztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyNSwgMjcsIDM3O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5kb3VibGUtZGVja2VyLFxuLmRvdWJsZS1kZWNrZXIgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjMTAyMzA7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tZG91YmxlLWRlY2tlciB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjMTAyMzA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxOTMsIDIsIDQ4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogOTcsIDEsIDI0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLnVuaXRyYW5zLXJlZCxcbi51bml0cmFucy1yZWQgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjMTAyMzA7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tdW5pdHJhbnMtcmVkIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2MxMDIzMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE5MywgMiwgNDg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA5NywgMSwgMjQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4ubWVybG90LFxuLm1lcmxvdCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzc5MjQyZjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1tZXJsb3Qge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNzkyNDJmO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTIxLCAzNiwgNDc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA2MSwgMTgsIDI0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLnRoaWViYXVkLWljaW5nLFxuLnRoaWViYXVkLWljaW5nIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZjA5NWNkO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXRoaWViYXVkLWljaW5nIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2YwOTVjZDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI0MCwgMTQ5LCAyMDU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxMjAsIDc1LCAxMDM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICM0ODEyNjg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiA3MiwgMTgsIDEwNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5yZWRidWQsXG4ucmVkYnVkIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYzYwMDdlO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJlZGJ1ZCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjNjAwN2U7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxOTgsIDAsIDEyNjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDk5LCAwLCA2MztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi53ZXN0ZXJuLXJlZGJ1ZCxcbi53ZXN0ZXJuLXJlZGJ1ZCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2M2MDA3ZTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS13ZXN0ZXJuLXJlZGJ1ZCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjNjAwN2U7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxOTgsIDAsIDEyNjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDk5LCAwLCA2MztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5waW5vdCxcbi5waW5vdCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzc2MjM2YztcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1waW5vdCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM3NjIzNmM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxMTgsIDM1LCAxMDg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA1OSwgMTgsIDU0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLndpbmUtZ3JhcGUsXG4ud2luZS1ncmFwZSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzc2MjM2YztcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS13aW5lLWdyYXBlIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzc2MjM2YztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDExOCwgMzUsIDEwODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDU5LCAxOCwgNTQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4uY2FiZXJuZXQsXG4uY2FiZXJuZXQgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM0ODEyNjg7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tY2FiZXJuZXQge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNDgxMjY4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogNzIsIDE4LCAxMDQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAzNiwgOSwgNTI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4uY2VudGVubmlhbC13YWxrLWdyYXksXG4uY2VudGVubmlhbC13YWxrLWdyYXkgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNiMmIyYjI7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tY2VudGVubmlhbC13YWxrLWdyYXkge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYjJiMmIyO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTc4LCAxNzgsIDE3ODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDg5LCA4OSwgODk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4uY29sbGFwc2VfX3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQsICMwMjI4NTEpO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICNmZmYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtIDEuNXJlbSAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5jb2xsYXBzZV9fdGl0bGU6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbGxhcHNlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxufVxuLmNvbGxhcHNlX190aXRsZTphZnRlciB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgI2ZmYmYwMCk7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG59XG4uY29sbGFwc2VfX3RpdGxlLS1vcGVuOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cbi5jb2xsYXBzZV9fY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjI4NTE7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sbGFwc2VfX2NvbnRlbnQgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29sbGFwc2VfX2NvbnRlbnQgbGkgYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1lc3NhZ2UtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWVzc2FnZS1hcmVhIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xuICB9XG59XG4ubWVzc2FnZS1hcmVhIGEge1xuICBjb2xvcjogIzAyMjg1MTtcbn1cbi5tZXNzYWdlLWFyZWEgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVzc2FnZS1hcmVhLS1jbG9zZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMS44NXJlbTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWEtLWNsb3NlZCB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYS0tY2xvc2VkIC5tZXNzYWdlLWFyZWFfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWVzc2FnZS1hcmVhX190aXRsZSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5tZXNzYWdlLWFyZWFfX2JvZHkge1xuICBjb2xvcjogIzAyMjg1MTtcbn1cbi5tZXNzYWdlLWFyZWFfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1cmVtO1xuICByaWdodDogMC4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMC4xM3JlbSAwIDAgMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWVzc2FnZS1hcmVhX19idXR0b24ge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb250ZW50OiBcIu+Bl1wiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWFfX2J1dHRvbjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYS0tY2xvc2VkIC5tZXNzYWdlLWFyZWFfX2J1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EulwiO1xufVxuLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWVzc2FnZS1hcmVhX19idXR0b246Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDIyODUxO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODUxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4uYWxlcnQge1xuICBtYXJnaW46IDAgMCAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmNGZiO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmFsZXJ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5hbGVydCB7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAuYWxlcnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gIH1cbn1cbi5sLWNvbnRhaW5lciAuYWxlcnQge1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYWxlcnQtLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlZGNhO1xuICBjb2xvcjogIzAwM2E1ZDtcbn1cbi5hbGVydC0td2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYxOTk7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuLmFsZXJ0LS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYzI7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuLmFsZXJ0LS1mbHVzaCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWxlcnQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWxlcnQgLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5hbGVydCBsaSAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5zZWFyY2gtZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjRkMjtcbn1cbi5zZWFyY2gtZm9ybV9faW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uc2VhcmNoLWZvcm1fX3N1Ym1pdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDFlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIuMWVtO1xuICBoZWlnaHQ6IDIuMWVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM2MzllO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZmJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHRleHQtaW5kZW50OiAtMC4yZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5zZWFyY2gtZm9ybV9fc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYWJkZDtcbn1cbi5zZWFyY2gtZm9ybV9fc3VibWl0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgY29sb3I6ICNmZmZiZWQ7XG59XG4uc2VhcmNoLWZvcm1fX2lucHV0OmZvY3VzLCAuc2VhcmNoLWZvcm1fX3N1Ym1pdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMDIyODUxO1xuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNlYXJjaC1wb3B1cCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zZWFyY2gtcG9wdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA4NTA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgaGVpZ2h0OiA4ZW07XG4gICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICBib3JkZXItY29sb3I6ICM5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc2VhcmNoLXBvcHVwIC5zZWFyY2gtZm9ybSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxufVxuLnNlYXJjaC1wb3B1cC5pcy1vcGVuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDQ0N2E7XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmJlZm9yZSB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDMuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogLTAuOTVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDQ0N2E7XG4gIGNsaXAtcGF0aDogcG9seWdvbig5MyUgMCwgMTAwJSAwLCAxMDAlIDEwMiUsIDAlIDEwMiUpO1xuICBjb250ZW50OiBcIlwiO1xufVxuLnNlYXJjaC1wb3B1cF9fb3Blbjpmb2N1czpiZWZvcmUsIC5zZWFyY2gtcG9wdXBfX29wZW46aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW46YWZ0ZXIge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAzLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0wLjk1cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ0NDdhO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDclIDEwMCUsIDAlIDEwMCUpO1xuICBjb250ZW50OiBcIlwiO1xufVxuLnNlYXJjaC1wb3B1cF9fb3Blbjpmb2N1czphZnRlciwgLnNlYXJjaC1wb3B1cF9fb3Blbjpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNlYXJjaC1wb3B1cF9fb3BlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLnNlYXJjaC1wb3B1cF9fb3Blbjpmb2N1cywgLnNlYXJjaC1wb3B1cF9fb3Blbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaC1wb3B1cC0tZWRnZSAuc2VhcmNoLXBvcHVwX19vcGVuIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuLnNlYXJjaC1wb3B1cF9fb3BlbjpiZWZvcmUge1xuICBtYXJnaW4tcmlnaHQ6IDAuMTVyZW07XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMTVyZW07XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyLjQzNzVyZW07XG4gIGhlaWdodDogMi40Mzc1cmVtO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg1MTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW4taWNvbjpiZWZvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBjb250ZW50OiBcIu+AglwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuLWljb24tLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CNXCI7XG59XG4uc2VhcmNoLXBvcHVwX19jbG9zZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjFyZW07XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc2VhcmNoLXBvcHVwX19jbG9zZS1pY29uOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogODMwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLnUtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4udS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnUtaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udS1oaWRkZW4tLXZpc3VhbGx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLnUtc2hvd24tLXZpc3VhbGx5IHtcbiAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY2xpcDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnUtaGlkZS10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1pbmRlbnQ6IDExMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLyohIG5vcm1hbGl6ZS1zY3NzIHwgTUlUL0dQTHYyIExpY2Vuc2UgfCBiaXQubHkvbm9ybWFsaXplLXNjc3MgKi9cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5hcnRpY2xlLFxuYXNpZGUsXG5mb290ZXIsXG5oZWFkZXIsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmZpZ2NhcHRpb24sXG5maWd1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAxICovXG4gIGhlaWdodDogMDtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxuICovXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qIExpbmtzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXG4gKi9cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xuICAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAvKiAyICovXG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFwiZW1cIiBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxuICovXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxuICovXG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcInN1YlwiIGFuZCBcInN1cFwiIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuYXVkaW8sXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXG4gKi9cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqL1xuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICovXG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIFwiYXVkaW9cIiBhbmQgXCJ2aWRlb1wiXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5odG1sIFt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDIgKi9cbn1cblxuYnV0dG9uLFxuW3R5cGU9YnV0dG9uXSxcblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0ge1xuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG4gIC8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xufVxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5pbnB1dCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXG4gKi9cblt0eXBlPWNoZWNrYm94XSxcblt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cbn1cblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sIFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXCJpbmhlcml0XCIgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXCJmaWVsZHNldFwiIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXCJmaWVsZHNldFwiIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMyAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogMiAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAxICovXG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXG4gKi9cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFNjcmlwdGluZ1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmNhbnZhcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRkZW5cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cbiAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5gOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbnZhciBfZjtcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIFtbYExpdEVsZW1lbnRgXV0gYmFzZSBjbGFzcyBhbmRcbiAqIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IFtbYExpdEVsZW1lbnRgXV0gYW5kIFtbYGh0bWxgXV0gZnJvbSB0aGlzIG1vZHVsZSB0byBjcmVhdGUgYVxuICogY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyBbW2BSZWFjdGl2ZUVsZW1lbnRgXV0gYW5kIGFkZHMgbGl0LWh0bWwgdGVtcGxhdGluZy5cbiAqIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvIGJ1aWxkXG4gKiB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oKF9hID0gKF9mID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRWZXJzaW9ucyddKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2ZbJ2xpdEVsZW1lbnRWZXJzaW9ucyddID0gW10pKS5wdXNoKCczLjAuMC1yYy4xJyk7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSBbW2Bwcm9wZXJ0aWVzYF1dIHByb3BlcnR5IG9yIHRoZSBbW2Bwcm9wZXJ0eWBdXSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFRPRE8oa3NjaGFhZik6IENvbnNpZGVyIGRlYm91bmNpbmcgZGlyZWN0aXZlIGRpc2Nvbm5lY3Rpb24gc28gZWxlbWVudCBtb3Zlc1xuICAgIC8vIGRvIG5vdCB0aHJhc2ggZGlyZWN0aXZlIGNhbGxiYWNrc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL2xpdC1odG1sL2lzc3Vlcy8xNDU3XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbWF5IHJldHVyblxuICAgICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgQGxpdC9yZWFjdGl2ZS1lbGVtZW50IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG5MaXRFbGVtZW50Ll8kbGl0RWxlbWVudCQgPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9jID0gKF9iID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCddKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChfYiwgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZSA9IChfZCA9IGdsb2JhbFRoaXMpWydsaXRFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYWxsKF9kLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgTGl0RWxlbWVudFsnZmluYWxpemUnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3QgZmluYWxpemVkID0gUmVhY3RpdmVFbGVtZW50LmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICghZmluYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3Qgd2FyblJlbW92ZWQgPSAob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQuIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LiBgXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogYWRkIGxpbmsgdG8gY2hhbmdlbG9nIHdoZW4gbG9jYXRpb24gaGFzIHN0YWJpbGl6ZWQuXG4gICAgICAgICAgICAgICAgLy8gKyBTZWUgdGhlIGNoYW5nZWxvZyBhdCBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9saXQtaHRtbC9ibG9iL21haW4vcGFja2FnZXMvbGl0LWVsZW1lbnQvQ0hBTkdFTE9HLm1kYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFtgcmVuZGVyYCwgYGdldFN0eWxlc2BdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLCBuYW1lKSk7XG4gICAgICAgIFtgYWRvcHRTdHlsZXNgXS5mb3JFYWNoKChuYW1lKSA9PiBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgX86mIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfzqYgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBPdmVydmlldzpcbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBkZXNpZ25lZCB0byBhZGQgc3VwcG9ydCBmb3IgYW4gYXN5bmMgYHNldFZhbHVlYCBBUEkgYW5kXG4gKiBgZGlzY29ubmVjdGVkYCBjYWxsYmFjayB0byBkaXJlY3RpdmVzIHdpdGggdGhlIGxlYXN0IGltcGFjdCBvbiB0aGUgY29yZVxuICogcnVudGltZSBvciBwYXlsb2FkIHdoZW4gdGhhdCBmZWF0dXJlIGlzIG5vdCB1c2VkLlxuICpcbiAqIFRoZSBzdHJhdGVneSBpcyB0byBpbnRyb2R1Y2UgYSBgQXN5bmNEaXJlY3RpdmVgIHN1YmNsYXNzIG9mXG4gKiBgRGlyZWN0aXZlYCB0aGF0IGNsaW1icyB0aGUgXCJwYXJlbnRcIiB0cmVlIGluIGl0cyBjb25zdHJ1Y3RvciB0byBub3RlIHdoaWNoXG4gKiBicmFuY2hlcyBvZiBsaXQtaHRtbCdzIFwibG9naWNhbCB0cmVlXCIgb2YgZGF0YSBzdHJ1Y3R1cmVzIGNvbnRhaW4gc3VjaFxuICogZGlyZWN0aXZlcyBhbmQgdGh1cyBuZWVkIHRvIGJlIGNyYXdsZWQgd2hlbiBhIHN1YnRyZWUgaXMgYmVpbmcgY2xlYXJlZCAob3JcbiAqIG1hbnVhbGx5IGRpc2Nvbm5lY3RlZCkgaW4gb3JkZXIgdG8gcnVuIHRoZSBgZGlzY29ubmVjdGVkYCBjYWxsYmFjay5cbiAqXG4gKiBUaGUgXCJub2Rlc1wiIG9mIHRoZSBsb2dpY2FsIHRyZWUgaW5jbHVkZSBQYXJ0cywgVGVtcGxhdGVJbnN0YW5jZXMgKGZvciB3aGVuIGFcbiAqIFRlbXBsYXRlUmVzdWx0IGlzIGNvbW1pdHRlZCB0byBhIHZhbHVlIG9mIGEgQ2hpbGRQYXJ0KSwgYW5kIERpcmVjdGl2ZXM7IHRoZXNlXG4gKiBhbGwgaW1wbGVtZW50IGEgY29tbW9uIGludGVyZmFjZSBjYWxsZWQgYERpc2Nvbm5lY3RhYmxlQ2hpbGRgLiBFYWNoIGhhcyBhXG4gKiBgXyRwYXJlbnRgIHJlZmVyZW5jZSB3aGljaCBpcyBzZXQgZHVyaW5nIGNvbnN0cnVjdGlvbiBpbiB0aGUgY29yZSBjb2RlLCBhbmQgYVxuICogYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAgZmllbGQgd2hpY2ggaXMgaW5pdGlhbGx5IHVuZGVmaW5lZC5cbiAqXG4gKiBUaGUgc3BhcnNlIHRyZWUgY3JlYXRlZCBieSBtZWFucyBvZiB0aGUgYEFzeW5jRGlyZWN0aXZlYCBjb25zdHJ1Y3RvclxuICogY3Jhd2xpbmcgdXAgdGhlIGBfJHBhcmVudGAgdHJlZSBhbmQgcGxhY2luZyBhIGBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5gIFNldFxuICogb24gZWFjaCBwYXJlbnQgdGhhdCBpbmNsdWRlcyBlYWNoIGNoaWxkIHRoYXQgY29udGFpbnMgYVxuICogYEFzeW5jRGlyZWN0aXZlYCBkaXJlY3RseSBvciB0cmFuc2l0aXZlbHkgdmlhIGl0cyBjaGlsZHJlbi4gSW4gb3JkZXJcbiAqIGRpc2Nvbm5lY3QgKG9yIHJlY29ubmVjdCkgYSB0cmVlLCB0aGUgYF8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkYCBBUEkgaXMgcGF0Y2hlZFxuICogb250byBDaGlsZFBhcnRzIGFzIGEgZGlyZWN0aXZlIGNsaW1icyB0aGUgcGFyZW50IHRyZWUsIHdoaWNoIGlzIGNhbGxlZCBieSB0aGVcbiAqIGNvcmUgd2hlbiBjbGVhcmluZyBhIHBhcnQgaWYgaXQgZXhpc3RzLiBXaGVuIGNhbGxlZCwgdGhhdCBtZXRob2QgaXRlcmF0ZXNcbiAqIG92ZXIgdGhlIHNwYXJzZSB0cmVlIG9mIFNldDxEaXNjb25uZWN0YWJsZUNoaWxkcmVuPiBidWlsdCB1cCBieVxuICogQXN5bmNEaXJlY3RpdmVzLCBhbmQgY2FsbHMgYF8kc2V0RGlyZWN0aXZlQ29ubmVjdGVkYCBvbiBhbnlcbiAqIGRpcmVjdGl2ZXMgdGhhdCBhcmUgZW5jb3VudGVyZWQgaW4gdGhhdCB0cmVlLCBydW5uaW5nIHRoZSByZXF1aXJlZCBjYWxsYmFja3MuXG4gKlxuICogQSBnaXZlbiBcImxvZ2ljYWwgdHJlZVwiIG9mIGxpdC1odG1sIGRhdGEtc3RydWN0dXJlcyBtaWdodCBsb29rIGxpa2UgdGhpczpcbiAqXG4gKiAgQ2hpbGRQYXJ0KE4xKSBfJGRDPVtEMixUM11cbiAqICAgLl9kaXJlY3RpdmVcbiAqICAgICBBc3luY0RpcmVjdGl2ZShEMilcbiAqICAgLl92YWx1ZSAvLyB1c2VyIHZhbHVlIHdhcyBUZW1wbGF0ZVJlc3VsdFxuICogICAgIFRlbXBsYXRlSW5zdGFuY2UoVDMpIF8kZEM9W0E0LEE2LE4xMCxOMTJdXG4gKiAgICAgIC5fcGFydHNbXVxuICogICAgICAgIEF0dHJpYnV0ZVBhcnQoQTQpIF8kZEM9W0Q1XVxuICogICAgICAgICAuX2RpcmVjdGl2ZXNbXVxuICogICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQ1KVxuICogICAgICAgIEF0dHJpYnV0ZVBhcnQoQTYpIF8kZEM9W0Q3LEQ4XVxuICogICAgICAgICAuX2RpcmVjdGl2ZXNbXVxuICogICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQ3KVxuICogICAgICAgICAgIERpcmVjdGl2ZShEOCkgXyRkQz1bRDldXG4gKiAgICAgICAgICAgIC5fZGlyZWN0aXZlXG4gKiAgICAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDkpXG4gKiAgICAgICAgQ2hpbGRQYXJ0KE4xMCkgXyRkQz1bRDExXVxuICogICAgICAgICAuX2RpcmVjdGl2ZVxuICogICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQxMSlcbiAqICAgICAgICAgLl92YWx1ZVxuICogICAgICAgICAgIHN0cmluZ1xuICogICAgICAgIENoaWxkUGFydChOMTIpIF8kZEM9W0QxMyxOMTQsTjE2XVxuICogICAgICAgICAuX2RpcmVjdGl2ZVxuICogICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQxMylcbiAqICAgICAgICAgLl92YWx1ZSAvLyB1c2VyIHZhbHVlIHdhcyBpdGVyYWJsZVxuICogICAgICAgICAgIEFycmF5PENoaWxkUGFydD5cbiAqICAgICAgICAgICAgIENoaWxkUGFydChOMTQpIF8kZEM9W0QxNV1cbiAqICAgICAgICAgICAgICAuX3ZhbHVlXG4gKiAgICAgICAgICAgICAgICBzdHJpbmdcbiAqICAgICAgICAgICAgIENoaWxkUGFydChOMTYpIF8kZEM9W0QxNyxUMThdXG4gKiAgICAgICAgICAgICAgLl9kaXJlY3RpdmVcbiAqICAgICAgICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQxNylcbiAqICAgICAgICAgICAgICAuX3ZhbHVlIC8vIHVzZXIgdmFsdWUgd2FzIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgICAgICAgICAgICBUZW1wbGF0ZUluc3RhbmNlKFQxOCkgXyRkQz1bQTE5LEEyMSxOMjVdXG4gKiAgICAgICAgICAgICAgICAgLl9wYXJ0c1tdXG4gKiAgICAgICAgICAgICAgICAgICBBdHRyaWJ1dGVQYXJ0KEExOSkgXyRkQz1bRDIwXVxuICogICAgICAgICAgICAgICAgICAgIC5fZGlyZWN0aXZlc1tdXG4gKiAgICAgICAgICAgICAgICAgICAgICBBc3luY0RpcmVjdGl2ZShEMjApXG4gKiAgICAgICAgICAgICAgICAgICBBdHRyaWJ1dGVQYXJ0KEEyMSkgXyRkQz1bMjIsMjNdXG4gKiAgICAgICAgICAgICAgICAgICAgLl9kaXJlY3RpdmVzW11cbiAqICAgICAgICAgICAgICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQyMilcbiAqICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGl2ZShEMjMpIF8kZEM9W0QyNF1cbiAqICAgICAgICAgICAgICAgICAgICAgICAuX2RpcmVjdGl2ZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDI0KVxuICogICAgICAgICAgICAgICAgICAgQ2hpbGRQYXJ0KE4yNSkgXyRkQz1bRDI2XVxuICogICAgICAgICAgICAgICAgICAgIC5fZGlyZWN0aXZlXG4gKiAgICAgICAgICAgICAgICAgICAgICBBc3luY0RpcmVjdGl2ZShEMjYpXG4gKiAgICAgICAgICAgICAgICAgICAgLl92YWx1ZVxuICogICAgICAgICAgICAgICAgICAgICAgc3RyaW5nXG4gKlxuICogRXhhbXBsZSAxOiBUaGUgZGlyZWN0aXZlIGluIENoaWxkUGFydChOMTIpIHVwZGF0ZXMgYW5kIHJldHVybnMgYG5vdGhpbmdgLiBUaGVcbiAqIENoaWxkUGFydCB3aWxsIF9jbGVhcigpIGl0c2VsZiwgYW5kIHNvIHdlIG5lZWQgdG8gZGlzY29ubmVjdCB0aGUgXCJ2YWx1ZVwiIG9mXG4gKiB0aGUgQ2hpbGRQYXJ0IChidXQgbm90IGl0cyBkaXJlY3RpdmUpLiBJbiB0aGlzIGNhc2UsIHdoZW4gYF9jbGVhcigpYCBjYWxsc1xuICogYF8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKClgLCB3ZSBkb24ndCBpdGVyYXRlIGFsbCBvZiB0aGVcbiAqIF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiwgcmF0aGVyIHdlIGRvIGEgdmFsdWUtc3BlY2lmaWMgZGlzY29ubmVjdGlvbjogaS5lLlxuICogc2luY2UgdGhlIF92YWx1ZSB3YXMgYW4gQXJyYXk8Q2hpbGRQYXJ0PiAoYmVjYXVzZSBhbiBpdGVyYWJsZSBoYWQgYmVlblxuICogY29tbWl0dGVkKSwgd2UgaXRlcmF0ZSB0aGUgYXJyYXkgb2YgQ2hpbGRQYXJ0cyAoTjE0LCBOMTYpIGFuZCBydW5cbiAqIGBzZXRDb25uZWN0ZWRgIG9uIHRoZW0gKHdoaWNoIGRvZXMgcmVjdXJzZSBkb3duIHRoZSBmdWxsIHRyZWUgb2ZcbiAqIGBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5gIGJlbG93IGl0LCBhbmQgYWxzbyByZW1vdmVzIE4xNCBhbmQgTjE2IGZyb20gTjEyJ3NcbiAqIGBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5gKS4gT25jZSB0aGUgdmFsdWVzIGhhdmUgYmVlbiBkaXNjb25uZWN0ZWQsIHdlIHRoZW5cbiAqIGNoZWNrIHdoZXRoZXIgdGhlIENoaWxkUGFydChOMTIpJ3MgbGlzdCBvZiBgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuYCBpcyBlbXB0eVxuICogKGFuZCB3b3VsZCByZW1vdmUgaXQgZnJvbSBpdHMgcGFyZW50IFRlbXBsYXRlSW5zdGFuY2UoVDMpIGlmIHNvKSwgYnV0IHNpbmNlXG4gKiBpdCB3b3VsZCBzdGlsbCBjb250YWluIGl0cyBkaXJlY3RpdmUgRDEzLCBpdCBzdGF5cyBpbiB0aGUgZGlzY29ubmVjdGFibGVcbiAqIHRyZWUuXG4gKlxuICogRXhhbXBsZSAyOiBJbiB0aGUgY291cnNlIG9mIEV4YW1wbGUgMSwgYHNldENvbm5lY3RlZGAgd2lsbCByZWFjaFxuICogQ2hpbGRQYXJ0KE4xNik7IGluIHRoaXMgY2FzZSB0aGUgZW50aXJlIHBhcnQgaXMgYmVpbmcgZGlzY29ubmVjdGVkLCBzbyB3ZVxuICogc2ltcGx5IGl0ZXJhdGUgYWxsIG9mIE4xNidzIGBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5gIChEMTcsVDE4KSBhbmRcbiAqIHJlY3Vyc2l2ZWx5IHJ1biBgc2V0Q29ubmVjdGVkYCBvbiB0aGVtLiBOb3RlIHRoYXQgd2Ugb25seSByZW1vdmUgY2hpbGRyZW5cbiAqIGZyb20gYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAgZm9yIHRoZSB0b3AtbGV2ZWwgdmFsdWVzIGJlaW5nIGRpc2Nvbm5lY3RlZFxuICogb24gYSBjbGVhcjsgZG9pbmcgdGhpcyBib29ra2VlcGluZyBsb3dlciBpbiB0aGUgdHJlZSBpcyB3YXN0ZWZ1bCBzaW5jZSBpdCdzXG4gKiBhbGwgYmVpbmcgdGhyb3duIGF3YXkuXG4gKlxuICogRXhhbXBsZSAzOiBJZiB0aGUgTGl0RWxlbWVudCBjb250YWluaW5nIHRoZSBlbnRpcmUgdHJlZSBhYm92ZSBiZWNvbWVzXG4gKiBkaXNjb25uZWN0ZWQsIGl0IHdpbGwgcnVuIGBjaGlsZFBhcnQuc2V0Q29ubmVjdGVkKClgICh3aGljaCBjYWxsc1xuICogYGNoaWxkUGFydC5fJHNldENoaWxkUGFydENvbm5lY3RlZCgpYCBpZiBpdCBleGlzdHMpOyBpbiB0aGlzIGNhc2UsIHdlXG4gKiByZWN1cnNpdmVseSBydW4gYHNldENvbm5lY3RlZCgpYCBvdmVyIHRoZSBlbnRpcmUgdHJlZSwgd2l0aG91dCByZW1vdmluZyBhbnlcbiAqIGNoaWxkcmVuIGZyb20gYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAsIHNpbmNlIHRoaXMgdHJlZSBpcyByZXF1aXJlZCB0b1xuICogcmUtY29ubmVjdCB0aGUgdHJlZSwgd2hpY2ggZG9lcyB0aGUgc2FtZSBvcGVyYXRpb24sIHNpbXBseSBwYXNzaW5nXG4gKiBgaXNDb25uZWN0ZDogdHJ1ZWAgZG93biB0aGUgdHJlZSwgc2lnbmFsaW5nIHdoaWNoIGNhbGxiYWNrIHRvIHJ1bi5cbiAqL1xuaW1wb3J0IHsgbm9DaGFuZ2UsIH0gZnJvbSAnLi9saXQtaHRtbC5qcyc7XG5pbXBvcnQgeyBpc1NpbmdsZUV4cHJlc3Npb24gfSBmcm9tICcuL2RpcmVjdGl2ZS1oZWxwZXJzLmpzJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgUGFydFR5cGUgfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5leHBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHdhbGtzIGRvd24gdGhlIHRyZWUgb2YgUGFydHMvVGVtcGxhdGVJbnN0YW5jZXMvRGlyZWN0aXZlcyB0byBzZXRcbiAqIHRoZSBjb25uZWN0ZWQgc3RhdGUgb2YgZGlyZWN0aXZlcyBhbmQgcnVuIGBkaXNjb25uZWN0ZWRgLyBgcmVjb25uZWN0ZWRgXG4gKiBjYWxsYmFja3MuXG4gKlxuICogQHJldHVybiBUcnVlIGlmIHRoZXJlIHdlcmUgY2hpbGRyZW4gdG8gZGlzY29ubmVjdDsgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IHNldENoaWxkcmVuQ29ubmVjdGVkID0gKHBhcmVudCwgaXNDb25uZWN0ZWQpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50Ll8kZGlzY29ubmV0YWJsZUNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBvYmogb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gVGhlIGV4aXN0ZW5jZSBvZiBgXyRzZXREaXJlY3RpdmVDb25uZWN0ZWRgIGlzIHVzZWQgYXMgYSBcImJyYW5kXCIgdG9cbiAgICAgICAgLy8gZGlzYW1iaWd1YXRlIEFzeW5jRGlyZWN0aXZlcyBmcm9tIG90aGVyIERpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5cbiAgICAgICAgLy8gKGFzIG9wcG9zZWQgdG8gdXNpbmcgYW4gaW5zdGFuY2VvZiBjaGVjayB0byBrbm93IHdoZW4gdG8gY2FsbCBpdCk7IHRoZVxuICAgICAgICAvLyByZWR1bmRhbmN5IG9mIFwiRGlyZWN0aXZlXCIgaW4gdGhlIEFQSSBuYW1lIGlzIHRvIGF2b2lkIGNvbmZsaWN0aW5nIHdpdGhcbiAgICAgICAgLy8gYF8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkYCwgd2hpY2ggZXhpc3RzIGBDaGlsZFBhcnRzYCB3aGljaCBhcmUgYWxzbyBpblxuICAgICAgICAvLyB0aGlzIGxpc3RcbiAgICAgICAgLy8gRGlzY29ubmVjdCBEaXJlY3RpdmUgKGFuZCBhbnkgbmVzdGVkIGRpcmVjdGl2ZXMgY29udGFpbmVkIHdpdGhpbilcbiAgICAgICAgKF9iID0gKF9hID0gb2JqKS5fJHNldERpcmVjdGl2ZUNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGlzQ29ubmVjdGVkLCBmYWxzZSk7XG4gICAgICAgIC8vIERpc2Nvbm5lY3QgUGFydC9UZW1wbGF0ZUluc3RhbmNlXG4gICAgICAgIHNldENoaWxkcmVuQ29ubmVjdGVkKG9iaiwgaXNDb25uZWN0ZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIFJlbW92ZXMgdGhlIGdpdmVuIGNoaWxkIGZyb20gaXRzIHBhcmVudCBsaXN0IG9mIGRpc2Nvbm5lY3RhYmxlIGNoaWxkcmVuLCBhbmRcbiAqIGlmIHRoZSBwYXJlbnQgbGlzdCBiZWNvbWVzIGVtcHR5IGFzIGEgcmVzdWx0LCByZW1vdmVzIHRoZSBwYXJlbnQgZnJvbSBpdHNcbiAqIHBhcmVudCwgYW5kIHNvIGZvcnRoIHVwIHRoZSB0cmVlIHdoZW4gdGhhdCBjYXVzZXMgc3Vic2VxdWVudCBwYXJlbnQgbGlzdHMgdG9cbiAqIGJlY29tZSBlbXB0eS5cbiAqL1xuY29uc3QgcmVtb3ZlRGlzY29ubmVjdGFibGVGcm9tUGFyZW50ID0gKG9iaikgPT4ge1xuICAgIGxldCBwYXJlbnQsIGNoaWxkcmVuO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKChwYXJlbnQgPSBvYmouXyRwYXJlbnQpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gcGFyZW50Ll8kZGlzY29ubmV0YWJsZUNoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbi5kZWxldGUob2JqKTtcbiAgICAgICAgb2JqID0gcGFyZW50O1xuICAgIH0gd2hpbGUgKChjaGlsZHJlbiA9PT0gbnVsbCB8fCBjaGlsZHJlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGRyZW4uc2l6ZSkgPT09IDApO1xufTtcbmNvbnN0IGFkZERpc2Nvbm5lY3RhYmxlVG9QYXJlbnQgPSAob2JqKSA9PiB7XG4gICAgLy8gQ2xpbWIgdGhlIHBhcmVudCB0cmVlLCBjcmVhdGluZyBhIHNwYXJzZSB0cmVlIG9mIGNoaWxkcmVuIG5lZWRpbmdcbiAgICAvLyBkaXNjb25uZWN0aW9uXG4gICAgZm9yIChsZXQgcGFyZW50OyAocGFyZW50ID0gb2JqLl8kcGFyZW50KTsgb2JqID0gcGFyZW50KSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHBhcmVudC5fJGRpc2Nvbm5ldGFibGVDaGlsZHJlbjtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmVudC5fJGRpc2Nvbm5ldGFibGVDaGlsZHJlbiA9IGNoaWxkcmVuID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuLmhhcyhvYmopKSB7XG4gICAgICAgICAgICAvLyBPbmNlIHdlJ3ZlIHJlYWNoZWQgYSBwYXJlbnQgdGhhdCBhbHJlYWR5IGNvbnRhaW5zIHRoaXMgY2hpbGQsIHdlXG4gICAgICAgICAgICAvLyBjYW4gc2hvcnQtY2lyY3VpdFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4uYWRkKG9iaik7XG4gICAgICAgIGluc3RhbGxEaXNjb25uZWN0QVBJKHBhcmVudCk7XG4gICAgfVxufTtcbi8qKlxuICogQ2hhbmdlcyB0aGUgcGFyZW50IHJlZmVyZW5jZSBvZiB0aGUgQ2hpbGRQYXJ0LCBhbmQgdXBkYXRlcyB0aGUgc3BhcnNlIHRyZWUgb2ZcbiAqIERpc2Nvbm5lY3RhYmxlIGNoaWxkcmVuIGFjY29yZGluZ2x5LlxuICpcbiAqIE5vdGUsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydCBpbnN0YW5jZXMgYW5kIGNhbGxlZCBmcm9tXG4gKiB0aGUgY29yZSBjb2RlIHdoZW4gcGFydHMgYXJlIG1vdmVkIGJldHdlZW4gZGlmZmVyZW50IHBhcmVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlcGFyZW50RGlzY29ubmVjdGFibGVzKG5ld1BhcmVudCkge1xuICAgIGlmICh0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlRGlzY29ubmVjdGFibGVGcm9tUGFyZW50KHRoaXMpO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gbmV3UGFyZW50O1xuICAgICAgICBhZGREaXNjb25uZWN0YWJsZVRvUGFyZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG59XG4vKipcbiAqIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0ZSBvbiBhbnkgZGlyZWN0aXZlcyBjb250YWluZWQgd2l0aGluIHRoZSBjb21taXR0ZWRcbiAqIHZhbHVlIG9mIHRoaXMgcGFydCAoaS5lLiB3aXRoaW4gYSBUZW1wbGF0ZUluc3RhbmNlIG9yIGl0ZXJhYmxlIG9mXG4gKiBDaGlsZFBhcnRzKSBhbmQgcnVucyB0aGVpciBgZGlzY29ubmVjdGVkYC9gcmVjb25uZWN0ZWRgcywgYXMgd2VsbCBhcyB3aXRoaW5cbiAqIGFueSBkaXJlY3RpdmVzIHN0b3JlZCBvbiB0aGUgQ2hpbGRQYXJ0ICh3aGVuIGB2YWx1ZU9ubHlgIGlzIGZhbHNlKS5cbiAqXG4gKiBgaXNDbGVhcmluZ1ZhbHVlYCBzaG91bGQgYmUgcGFzc2VkIGFzIGB0cnVlYCBvbiBhIHRvcC1sZXZlbCBwYXJ0IHRoYXQgaXNcbiAqIGNsZWFyaW5nIGl0c2VsZiwgYW5kIG5vdCBhcyBhIHJlc3VsdCBvZiByZWN1cnNpdmVseSBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXNcbiAqIGFzIHBhcnQgb2YgYSBgY2xlYXJgIG9wZXJhdGlvbiBoaWdoZXIgdXAgdGhlIHRyZWUuIFRoaXMgYm90aCBlbnN1cmVzIHRoYXQgYW55XG4gKiBkaXJlY3RpdmUgb24gdGhpcyBDaGlsZFBhcnQgdGhhdCBwcm9kdWNlZCBhIHZhbHVlIHRoYXQgY2F1c2VkIHRoZSBjbGVhclxuICogb3BlcmF0aW9uIGlzIG5vdCBkaXNjb25uZWN0ZWQsIGFuZCBhbHNvIHNlcnZlcyBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxuICogdG8gYXZvaWQgbmVlZGxlc3MgYm9va2tlZXBpbmcgd2hlbiBhIHN1YnRyZWUgaXMgZ29pbmcgYXdheTsgd2hlbiBjbGVhcmluZyBhXG4gKiBzdWJ0cmVlLCBvbmx5IHRoZSB0b3AtbW9zdCBwYXJ0IG5lZWQgdG8gcmVtb3ZlIGl0c2VsZiBmcm9tIHRoZSBwYXJlbnQuXG4gKlxuICogYGZyb21QYXJ0SW5kZXhgIGlzIHBhc3NlZCBvbmx5IGluIHRoZSBjYXNlIG9mIGEgcGFydGlhbCBgX2NsZWFyYCBydW5uaW5nIGFzIGFcbiAqIHJlc3VsdCBvZiB0cnVuY2F0aW5nIGFuIGl0ZXJhYmxlLlxuICpcbiAqIE5vdGUsIHRoaXMgbWV0aG9kIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydCBpbnN0YW5jZXMgYW5kIGNhbGxlZCBmcm9tIHRoZVxuICogY29yZSBjb2RlIHdoZW4gcGFydHMgYXJlIGNsZWFyZWQgb3IgdGhlIGNvbm5lY3Rpb24gc3RhdGUgaXMgY2hhbmdlZCBieSB0aGVcbiAqIHVzZXIuXG4gKi9cbmZ1bmN0aW9uIHNldENoaWxkUGFydENvbm5lY3RlZChpc0Nvbm5lY3RlZCwgaXNDbGVhcmluZ1ZhbHVlID0gZmFsc2UsIGZyb21QYXJ0SW5kZXggPSAwKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IGNoaWxkcmVuLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDbGVhcmluZ1ZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gSXRlcmFibGUgY2FzZTogQW55IENoaWxkUGFydHMgY3JlYXRlZCBieSB0aGUgaXRlcmFibGUgc2hvdWxkIGJlXG4gICAgICAgICAgICAvLyBkaXNjb25uZWN0ZWQgYW5kIHJlbW92ZWQgZnJvbSB0aGlzIENoaWxkUGFydCdzIGRpc2Nvbm5lY3RhYmxlXG4gICAgICAgICAgICAvLyBjaGlsZHJlbiAoc3RhcnRpbmcgYXQgYGZyb21QYXJ0SW5kZXhgIGluIHRoZSBjYXNlIG9mIHRydW5jYXRpb24pXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbVBhcnRJbmRleDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hpbGRyZW5Db25uZWN0ZWQodmFsdWVbaV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQodmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRlbXBsYXRlSW5zdGFuY2UgY2FzZTogSWYgdGhlIHZhbHVlIGhhcyBkaXNjb25uZWN0YWJsZSBjaGlsZHJlbiAod2lsbFxuICAgICAgICAgICAgLy8gb25seSBiZSBpbiB0aGUgY2FzZSB0aGF0IGl0IGlzIGEgVGVtcGxhdGVJbnN0YW5jZSksIHdlIGRpc2Nvbm5lY3QgaXRcbiAgICAgICAgICAgIC8vIGFuZCByZW1vdmUgaXQgZnJvbSB0aGlzIENoaWxkUGFydCdzIGRpc2Nvbm5lY3RhYmxlIGNoaWxkcmVuXG4gICAgICAgICAgICBzZXRDaGlsZHJlbkNvbm5lY3RlZCh2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlRGlzY29ubmVjdGFibGVGcm9tUGFyZW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0Q2hpbGRyZW5Db25uZWN0ZWQodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgIH1cbn1cbi8qKlxuICogUGF0Y2hlcyBkaXNjb25uZWN0aW9uIEFQSSBvbnRvIENoaWxkUGFydHMuXG4gKi9cbmNvbnN0IGluc3RhbGxEaXNjb25uZWN0QVBJID0gKG9iaikgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIF9jLCBfZDtcbiAgICBpZiAob2JqLnR5cGUgPT0gUGFydFR5cGUuQ0hJTEQpIHtcbiAgICAgICAgKF9hID0gKF9jID0gb2JqKS5fJHNldENoaWxkUGFydENvbm5lY3RlZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKF9jLl8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkID0gc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKTtcbiAgICAgICAgKF9iID0gKF9kID0gb2JqKS5fJHJlcGFyZW50RGlzY29ubmVjdGFibGVzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoX2QuXyRyZXBhcmVudERpc2Nvbm5lY3RhYmxlcyA9IHJlcGFyZW50RGlzY29ubmVjdGFibGVzKTtcbiAgICB9XG59O1xuLyoqXG4gKiBBbiBhYnN0cmFjdCBgRGlyZWN0aXZlYCBiYXNlIGNsYXNzIHdob3NlIGBkaXNjb25uZWN0ZWRgIG1ldGhvZCB3aWxsIGJlXG4gKiBjYWxsZWQgd2hlbiB0aGUgcGFydCBjb250YWluaW5nIHRoZSBkaXJlY3RpdmUgaXMgY2xlYXJlZCBhcyBhIHJlc3VsdCBvZlxuICogcmUtcmVuZGVyaW5nLCBvciB3aGVuIHRoZSB1c2VyIGNhbGxzIGBwYXJ0LnNldERpcmVjdGl2ZUNvbm5lY3Rpb24oZmFsc2UpYCBvblxuICogYSBwYXJ0IHRoYXQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQgY29udGFpbmluZyB0aGUgZGlyZWN0aXZlLlxuICpcbiAqIElmIGBwYXJ0LnNldERpcmVjdGl2ZUNvbm5lY3Rpb24odHJ1ZSlgIGlzIHN1YnNlcXVlbnRseSBjYWxsZWQgb24gYVxuICogY29udGFpbmluZyBwYXJ0LCB0aGUgZGlyZWN0aXZlJ3MgYHJlY29ubmVjdGVkYCBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgcHJpb3JcbiAqIHRvIGl0cyBuZXh0IGB1cGRhdGVgL2ByZW5kZXJgIGNhbGxiYWNrcy4gV2hlbiBpbXBsZW1lbnRpbmcgYGRpc2Nvbm5lY3RlZGAsXG4gKiBgcmVjb25uZWN0ZWRgIHNob3VsZCBhbHNvIGJlIGltcGxlbWVudGVkIHRvIGJlIGNvbXBhdGlibGUgd2l0aCByZWNvbm5lY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3luY0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgLy8gQGludGVybmFsXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIHBhcnQgd2l0aCBpbnRlcm5hbCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gcGFydFxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlSW5kZXhcbiAgICAgKi9cbiAgICBfJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgICAgICBzdXBlci5fJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgICAgIGFkZERpc2Nvbm5lY3RhYmxlVG9QYXJlbnQodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCBmcm9tIHRoZSBjb3JlIGNvZGUgd2hlbiBhIGRpcmVjdGl2ZSBpcyBnb2luZyBhd2F5IGZyb20gYSBwYXJ0IChpblxuICAgICAqIHdoaWNoIGNhc2UgYHNob3VsZFJlbW92ZUZyb21QYXJlbnRgIHNob3VsZCBiZSB0cnVlKSwgYW5kIGZyb20gdGhlXG4gICAgICogYHNldENoaWxkcmVuQ29ubmVjdGVkYCBoZWxwZXIgZnVuY3Rpb24gd2hlbiByZWN1cnNpdmVseSBjaGFuZ2luZyB0aGVcbiAgICAgKiBjb25uZWN0aW9uIHN0YXRlIG9mIGEgdHJlZSAoaW4gd2hpY2ggY2FzZSBgc2hvdWxkUmVtb3ZlRnJvbVBhcmVudGAgc2hvdWxkXG4gICAgICogYmUgZmFsc2UpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkXG4gICAgICogQHBhcmFtIGlzQ2xlYXJpbmdEaXJlY3RpdmUgLSBUcnVlIHdoZW4gdGhlIGRpcmVjdGl2ZSBpdHNlbGYgaXMgYmVpbmdcbiAgICAgKiAgICAgcmVtb3ZlZDsgZmFsc2Ugd2hlbiB0aGUgdHJlZSBpcyBiZWluZyBkaXNjb25uZWN0ZWRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldERpcmVjdGl2ZUNvbm5lY3RlZChpc0Nvbm5lY3RlZCwgaXNDbGVhcmluZ0RpcmVjdGl2ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5fc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGlzQ2xlYXJpbmdEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHNldENoaWxkcmVuQ29ubmVjdGVkKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICAgICAgICAgIHJlbW92ZURpc2Nvbm5lY3RhYmxlRnJvbVBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcml2YXRlIG1ldGhvZCB1c2VkIHRvIHNldCB0aGUgY29ubmVjdGlvbiBzdGF0ZSBvZiB0aGUgZGlyZWN0aXZlIGFuZCBjYWxsXG4gICAgICogdGhlIHJlc3BlY3RpdmUgYGRpc2Nvbm5lY3RlZGAgb3IgYHJlY29ubmVjdGVkYCBjYWxsYmFjay4gTm90ZSB0aGF0c2luY2VcbiAgICAgKiBgaXNDb25uZWN0ZWRgIGRlZmF1bHRzIHRvIHRydWUsIHdlIGRvIG5vdCBydW4gYHJlY29ubmVjdGVkYCBvbiBmaXJzdFxuICAgICAqIHJlbmRlci5cbiAgICAgKlxuICAgICAqIElmIGEgY2FsbCB0byBgc2V0VmFsdWVgIHdhcyBtYWRlIHdoaWxlIGRpc2Nvbm5lY3RlZCwgZmx1c2ggaXQgdG8gdGhlIHBhcnRcbiAgICAgKiBiZWZvcmUgcmVjb25uZWN0aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX3NldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAoaXNDb25uZWN0ZWQgIT09IHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fcGVuZGluZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMucmVjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuZGlzY29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBvZiB0aGUgYmFzZSBgX3Jlc29sdmVgIG1ldGhvZCB0byBlbnN1cmUgYHJlY29ubmVjdGVkYCBpcyBydW5cbiAgICAgKiBwcmlvciB0byB0aGUgbmV4dCByZW5kZXIuXG4gICAgICpcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHJlc29sdmUocGFydCwgcHJvcHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzeW5jRGlyZWN0aXZlICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSB3YXMgYCArXG4gICAgICAgICAgICAgICAgYHJlbmRlcmVkIHdoaWxlIGl0cyB0cmVlIHdhcyBkaXNjb25uZWN0ZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLl8kcmVzb2x2ZShwYXJ0LCBwcm9wcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBkaXJlY3RpdmUncyBQYXJ0IG91dHNpZGUgdGhlIG5vcm1hbCBgdXBkYXRlYC9gcmVuZGVyYFxuICAgICAqIGxpZmVjeWNsZSBvZiBhIGRpcmVjdGl2ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBub3QgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSBhIGRpcmVjdGl2ZSdzIGB1cGRhdGVgXG4gICAgICogb3IgYHJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbWV0aG9kIGlzIGNhbGxlZCB3aGlsZSB0aGUgcGFydCBpcyBkaXNjb25uZWN0ZWQsIHRoZSB2YWx1ZSB3aWxsIGJlXG4gICAgICogcXVldWVkIHVudGlsIGRpcmVjdGl2ZSBpcyByZWNvbm5lY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaXJlY3RpdmUgVGhlIGRpcmVjdGl2ZSB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNTaW5nbGVFeHByZXNzaW9uKHRoaXMuX19wYXJ0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0Ll8kc2V0VmFsdWUodmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fX2F0dHJpYnV0ZUluZGV4IHdpbGwgYmUgZGVmaW5lZCBpbiB0aGlzIGNhc2UsIGJ1dFxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCBpdCBpbiBkZXYgbW9kZVxuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLl9fYXR0cmlidXRlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHRoaXMuX19hdHRyaWJ1dGVJbmRleCB0byBiZSBhIG51bWJlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbLi4udGhpcy5fX3BhcnQuXyRjb21taXR0ZWRWYWx1ZV07XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW3RoaXMuX19hdHRyaWJ1dGVJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydC5fJHNldFZhbHVlKG5ld1ZhbHVlcywgdGhpcywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVc2VyIGNhbGxiYWNrcyBmb3IgaW1wbGVtZW50aW5nIGxvZ2ljIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcy9zdWJzY3JpcHRpb25zXG4gICAgICogdGhhdCBtYXkgaGF2ZSBiZWVuIHJldGFpbmVkIGJ5IHRoaXMgZGlyZWN0aXZlLiBTaW5jZSBkaXJlY3RpdmVzIG1heSBhbHNvIGJlXG4gICAgICogcmUtY29ubmVjdGVkLCBgcmVjb25uZWN0ZWRgIHNob3VsZCBhbHNvIGJlIGltcGxlbWVudGVkIHRvIHJlc3RvcmUgdGhlXG4gICAgICogd29ya2luZyBzdGF0ZSBvZiB0aGUgZGlyZWN0aXZlIHByaW9yIHRvIHRoZSBuZXh0IHJlbmRlci5cbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWQoKSB7IH1cbiAgICByZWNvbm5lY3RlZCgpIHsgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMtZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYjtcbmltcG9ydCB7IF/OoyB9IGZyb20gJy4vbGl0LWh0bWwuanMnO1xuY29uc3QgeyBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQgfSA9IF/OoztcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJiAoKF9hID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5Vc2UpICYmXG4gICAgKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyB3aW5kb3cuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG4vKipcbiAqIFRlc3RzIGlmIGEgdmFsdWUgaXMgYSBwcmltaXRpdmUgdmFsdWUuXG4gKlxuICogU2VlIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuICovXG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuZXhwb3J0IGNvbnN0IFRlbXBsYXRlUmVzdWx0VHlwZSA9IHtcbiAgICBIVE1MOiAxLFxuICAgIFNWRzogMixcbn07XG4vKipcbiAqIFRlc3RzIGlmIGEgdmFsdWUgaXMgYSBUZW1wbGF0ZVJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVSZXN1bHQgPSAodmFsdWUsIHR5cGUpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiB0eXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGxpdFR5cGUkKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgIDogKChfYiA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuXyRsaXRUeXBlJCkgPT09IHR5cGU7XG59O1xuLyoqXG4gKiBUZXN0cyBpZiBhIHZhbHVlIGlzIGEgRGlyZWN0aXZlUmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmVSZXN1bHQgPSAodmFsdWUpID0+IHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyRsaXREaXJlY3RpdmUkKSAhPT0gdW5kZWZpbmVkOyB9O1xuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIERpcmVjdGl2ZSBjbGFzcyBmb3IgYSBEaXJlY3RpdmVSZXN1bHRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERpcmVjdGl2ZUNsYXNzID0gKHZhbHVlKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyRsaXREaXJlY3RpdmUkOyB9O1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGEgcGFydCBoYXMgb25seSBhIHNpbmdsZS1leHByZXNzaW9uIHdpdGggbm8gc3RyaW5ncyB0b1xuICogaW50ZXJwb2xhdGUgYmV0d2Vlbi5cbiAqXG4gKiBPbmx5IEF0dHJpYnV0ZVBhcnQgYW5kIFByb3BlcnR5UGFydCBjYW4gaGF2ZSBtdWx0aXBsZSBleHByZXNzaW9ucy5cbiAqIE11bHRpLWV4cHJlc3Npb24gcGFydHMgaGF2ZSBhIGBzdHJpbmdzYCBwcm9wZXJ0eSBhbmQgc2luZ2xlLWV4cHJlc3Npb25cbiAqIHBhcnRzIGRvIG5vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2luZ2xlRXhwcmVzc2lvbiA9IChwYXJ0KSA9PiBwYXJ0LnN0cmluZ3MgPT09IHVuZGVmaW5lZDtcbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBJbnNlcnRzIGEgQ2hpbGRQYXJ0IGludG8gdGhlIGdpdmVuIGNvbnRhaW5lciBDaGlsZFBhcnQncyBET00sIGVpdGhlciBhdCB0aGVcbiAqIGVuZCBvZiB0aGUgY29udGFpbmVyIENoaWxkUGFydCwgb3IgYmVmb3JlIHRoZSBvcHRpb25hbCBgcmVmUGFydGAuXG4gKlxuICogVGhpcyBkb2VzIG5vdCBhZGQgdGhlIHBhcnQgdG8gdGhlIGNvbnRhaW5lclBhcnQncyBjb21taXR0ZWQgdmFsdWUuIFRoYXQgbXVzdFxuICogYmUgZG9uZSBieSBjYWxsZXJzLlxuICpcbiAqIEBwYXJhbSBjb250YWluZXJQYXJ0IFBhcnQgd2l0aGluIHdoaWNoIHRvIGFkZCB0aGUgbmV3IENoaWxkUGFydFxuICogQHBhcmFtIHJlZlBhcnQgUGFydCBiZWZvcmUgd2hpY2ggdG8gYWRkIHRoZSBuZXcgQ2hpbGRQYXJ0OyB3aGVuIG9taXR0ZWQgdGhlXG4gKiAgICAgcGFydCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBgY29udGFpbmVyUGFydGBcbiAqIEBwYXJhbSBwYXJ0IFBhcnQgdG8gaW5zZXJ0LCBvciB1bmRlZmluZWQgdG8gY3JlYXRlIGEgbmV3IHBhcnRcbiAqL1xuZXhwb3J0IGNvbnN0IGluc2VydFBhcnQgPSAoY29udGFpbmVyUGFydCwgcmVmUGFydCwgcGFydCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjb250YWluZXIgPSB3cmFwKGNvbnRhaW5lclBhcnQuXyRzdGFydE5vZGUpLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcmVmTm9kZSA9IHJlZlBhcnQgPT09IHVuZGVmaW5lZCA/IGNvbnRhaW5lclBhcnQuXyRlbmROb2RlIDogcmVmUGFydC5fJHN0YXJ0Tm9kZTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IHdyYXAoY29udGFpbmVyKS5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIHJlZk5vZGUpO1xuICAgICAgICBjb25zdCBlbmROb2RlID0gd3JhcChjb250YWluZXIpLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgcmVmTm9kZSk7XG4gICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHN0YXJ0Tm9kZSwgZW5kTm9kZSwgY29udGFpbmVyUGFydCwgY29udGFpbmVyUGFydC5vcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSB3cmFwKHBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgY29uc3QgcGFyZW50Q2hhbmdlZCA9IHBhcnQuXyRwYXJlbnQgIT09IGNvbnRhaW5lclBhcnQ7XG4gICAgICAgIGlmIChwYXJlbnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAoX2EgPSBwYXJ0Ll8kcmVwYXJlbnREaXNjb25uZWN0YWJsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHBhcnQsIGNvbnRhaW5lclBhcnQpO1xuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGFsdGhvdWdoIGBfJHJlcGFyZW50RGlzY29ubmVjdGFibGVzYCB1cGRhdGVzIHRoZSBwYXJ0J3NcbiAgICAgICAgICAgIC8vIGBfJHBhcmVudGAgcmVmZXJlbmNlIGFmdGVyIHVubGlua2luZyBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCwgdGhhdFxuICAgICAgICAgICAgLy8gbWV0aG9kIG9ubHkgZXhpc3RzIGlmIERpc2Nvbm5lY3RhYmxlcyBhcmUgcHJlc2VudCwgc28gd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gdW5jb25kaXRpb25hbGx5IHNldCBpdCBoZXJlXG4gICAgICAgICAgICBwYXJ0Ll8kcGFyZW50ID0gY29udGFpbmVyUGFydDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kTm9kZSAhPT0gcmVmTm9kZSB8fCBwYXJlbnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJ0Ll8kc3RhcnROb2RlO1xuICAgICAgICAgICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHdyYXAoY29udGFpbmVyKS5pbnNlcnRCZWZvcmUoc3RhcnQsIHJlZk5vZGUpO1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFydDtcbn07XG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIG9mIGEgUGFydC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgb25seSBiZSB1c2VkIHRvIHNldC91cGRhdGUgdGhlIHZhbHVlIG9mIHVzZXItY3JlYXRlZFxuICogcGFydHMgKGkuZS4gdGhvc2UgY3JlYXRlZCB1c2luZyBgaW5zZXJ0UGFydGApOyBpdCBzaG91bGQgbm90IGJlIHVzZWRcbiAqIGJ5IGRpcmVjdGl2ZXMgdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZGlyZWN0aXZlJ3MgY29udGFpbmVyIHBhcnQuIERpcmVjdGl2ZXNcbiAqIHNob3VsZCByZXR1cm4gYSB2YWx1ZSBmcm9tIGB1cGRhdGVgL2ByZW5kZXJgIHRvIHVwZGF0ZSB0aGVpciBwYXJ0IHN0YXRlLlxuICpcbiAqIEZvciBkaXJlY3RpdmVzIHRoYXQgcmVxdWlyZSBzZXR0aW5nIHRoZWlyIHBhcnQgdmFsdWUgYXN5bmNocm9ub3VzbHksIHRoZXlcbiAqIHNob3VsZCBleHRlbmQgYEFzeW5jRGlyZWN0aXZlYCBhbmQgY2FsbCBgdGhpcy5zZXRWYWx1ZSgpYC5cbiAqXG4gKiBAcGFyYW0gcGFydCBQYXJ0IHRvIHNldFxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIHNldFxuICogQHBhcmFtIGluZGV4IEZvciBgQXR0cmlidXRlUGFydGBzLCB0aGUgaW5kZXggdG8gc2V0XG4gKiBAcGFyYW0gZGlyZWN0aXZlUGFyZW50IFVzZWQgaW50ZXJuYWxseTsgc2hvdWxkIG5vdCBiZSBzZXQgYnkgdXNlclxuICovXG5leHBvcnQgY29uc3Qgc2V0Q2hpbGRQYXJ0VmFsdWUgPSAocGFydCwgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHBhcnQpID0+IHtcbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgcmV0dXJuIHBhcnQ7XG59O1xuLy8gQSBzZW50aW5hbCB2YWx1ZSB0aGF0IGNhbiBuZXZlciBhcHBlYXIgYXMgYSBwYXJ0IHZhbHVlIGV4Y2VwdCB3aGVuIHNldCBieVxuLy8gbGl2ZSgpLiBVc2VkIHRvIGZvcmNlIGEgZGlydHktY2hlY2sgdG8gZmFpbCBhbmQgY2F1c2UgYSByZS1yZW5kZXIuXG5jb25zdCBSRVNFVF9WQUxVRSA9IHt9O1xuLyoqXG4gKiBTZXRzIHRoZSBjb21taXR0ZWQgdmFsdWUgb2YgYSBDaGlsZFBhcnQgZGlyZWN0bHkgd2l0aG91dCB0cmlnZ2VyaW5nIHRoZVxuICogY29tbWl0IHN0YWdlIG9mIHRoZSBwYXJ0LlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VzIHdoZXJlIGEgZGlyZWN0aXZlIG5lZWRzIHRvIHVwZGF0ZSB0aGUgcGFydCBzdWNoXG4gKiB0aGF0IHRoZSBuZXh0IHVwZGF0ZSBkZXRlY3RzIGEgdmFsdWUgY2hhbmdlIG9yIG5vdC4gV2hlbiB2YWx1ZSBpcyBvbWl0dGVkLFxuICogdGhlIG5leHQgdXBkYXRlIHdpbGwgYmUgZ3VhcmFudGVlZCB0byBiZSBkZXRlY3RlZCBhcyBhIGNoYW5nZS5cbiAqXG4gKiBAcGFyYW0gcGFydFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRDb21taXR0ZWRWYWx1ZSA9IChwYXJ0LCB2YWx1ZSA9IFJFU0VUX1ZBTFVFKSA9PiAocGFydC5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWUpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb21taXR0ZWQgdmFsdWUgb2YgYSBDaGlsZFBhcnQuXG4gKlxuICogVGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyB1c2VkIGZvciBjaGFuZ2UgZGV0ZWN0aW9uIGFuZCBlZmZpY2llbnQgdXBkYXRlcyBvZlxuICogdGhlIHBhcnQuIEl0IGNhbiBkaWZmZXIgZnJvbSB0aGUgdmFsdWUgc2V0IGJ5IHRoZSB0ZW1wbGF0ZSBvciBkaXJlY3RpdmUgaW5cbiAqIGNhc2VzIHdoZXJlIHRoZSB0ZW1wbGF0ZSB2YWx1ZSBpcyB0cmFuc2Zvcm1lZCBiZWZvcmUgYmVpbmcgY29tbWl0ZWQuXG4gKlxuICogLSBgVGVtcGxhdGVSZXN1bHRgcyBhcmUgY29tbWl0dGVkIGFzIGEgYFRlbXBsYXRlSW5zdGFuY2VgXG4gKiAtIEl0ZXJhYmxlcyBhcmUgY29tbWl0dGVkIGFzIGBBcnJheTxDaGlsZFBhcnQ+YFxuICogLSBBbGwgb3RoZXIgdHlwZXMgYXJlIGNvbW1pdHRlZCBhcyB0aGUgdGVtcGxhdGUgdmFsdWUgb3IgdmFsdWUgcmV0dXJuZWQgb3JcbiAqICAgc2V0IGJ5IGEgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSBwYXJ0XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21taXR0ZWRWYWx1ZSA9IChwYXJ0KSA9PiBwYXJ0Ll8kY29tbWl0dGVkVmFsdWU7XG4vKipcbiAqIFJlbW92ZXMgYSBDaGlsZFBhcnQgZnJvbSB0aGUgRE9NLCBpbmNsdWRpbmcgYW55IG9mIGl0cyBjb250ZW50LlxuICpcbiAqIEBwYXJhbSBwYXJ0IFRoZSBQYXJ0IHRvIHJlbW92ZVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydCA9IChwYXJ0KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHBhcnQuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHBhcnQsIGZhbHNlLCB0cnVlKTtcbiAgICBsZXQgc3RhcnQgPSBwYXJ0Ll8kc3RhcnROb2RlO1xuICAgIGNvbnN0IGVuZCA9IHdyYXAocGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nO1xuICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGNsZWFyUGFydCA9IChwYXJ0KSA9PiB7XG4gICAgcGFydC5fJGNsZWFyKCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLWhlbHBlcnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgY29uc3QgUGFydFR5cGUgPSB7XG4gICAgQVRUUklCVVRFOiAxLFxuICAgIENISUxEOiAyLFxuICAgIFBST1BFUlRZOiAzLFxuICAgIEJPT0xFQU5fQVRUUklCVVRFOiA0LFxuICAgIEVWRU5UOiA1LFxuICAgIEVMRU1FTlQ6IDYsXG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgdXNlci1mYWNpbmcgZGlyZWN0aXZlIGZ1bmN0aW9uIGZyb20gYSBEaXJlY3RpdmUgY2xhc3MuIFRoaXNcbiAqIGZ1bmN0aW9uIGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIHRoZSBkaXJlY3RpdmUncyByZW5kZXIoKSBtZXRob2QuXG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoYykgPT4gKC4uLnZhbHVlcykgPT4gKHtcbiAgICBfJGxpdERpcmVjdGl2ZSQ6IGMsXG4gICAgdmFsdWVzLFxufSk7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNyZWF0aW5nIGN1c3RvbSBkaXJlY3RpdmVzLiBVc2VycyBzaG91bGQgZXh0ZW5kIHRoaXMgY2xhc3MsXG4gKiBpbXBsZW1lbnQgYHJlbmRlcmAgYW5kL29yIGB1cGRhdGVgLCBhbmQgdGhlbiBwYXNzIHRoZWlyIHN1YmNsYXNzIHRvXG4gKiBgZGlyZWN0aXZlYC5cbiAqL1xuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoX3BhcnRJbmZvKSB7IH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fX3BhcnQgPSBwYXJ0O1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlSW5kZXggPSBhdHRyaWJ1dGVJbmRleDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kcmVzb2x2ZShwYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUocGFydCwgcHJvcHMpO1xuICAgIH1cbiAgICB1cGRhdGUoX3BhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlciguLi5wcm9wcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbnZhciBfZjtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyA9IHRydWU7XG5jb25zdCBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCA9IHRydWU7XG5pZiAoREVWX01PREUpIHtcbiAgICBjb25zb2xlLndhcm4oJ2xpdC1odG1sIGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hJyk7XG59XG5jb25zdCB3cmFwID0gRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggJiYgKChfYSA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluVXNlKSAmJlxuICAgICgoX2IgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ub1BhdGNoKSA9PT0gdHJ1ZVxuICAgID8gd2luZG93LlNoYWR5RE9NLndyYXBcbiAgICA6IChub2RlKSA9PiBub2RlO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsVGhpcy50cnVzdGVkVHlwZXM7XG4vKipcbiAqIE91ciBUcnVzdGVkVHlwZVBvbGljeSBmb3IgSFRNTCB3aGljaCBpcyBkZWNsYXJlZCB1c2luZyB0aGUgaHRtbCB0ZW1wbGF0ZVxuICogdGFnIGZ1bmN0aW9uLlxuICpcbiAqIFRoYXQgSFRNTCBpcyBhIGRldmVsb3Blci1hdXRob3JlZCBjb25zdGFudCwgYW5kIGlzIHBhcnNlZCB3aXRoIGlubmVySFRNTFxuICogYmVmb3JlIGFueSB1bnRydXN0ZWQgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIG1peGVkIGluLiBUaGVyZWZvciBpdCBpc1xuICogY29uc2lkZXJlZCBzYWZlIGJ5IGNvbnN0cnVjdGlvbi5cbiAqL1xuY29uc3QgcG9saWN5ID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdsaXQtaHRtbCcsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGlkZW50aXR5RnVuY3Rpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3Qgbm9vcFNhbml0aXplciA9IChfbm9kZSwgX25hbWUsIF90eXBlKSA9PiBpZGVudGl0eUZ1bmN0aW9uO1xuLyoqIFNldHMgdGhlIGdsb2JhbCBzYW5pdGl6ZXIgZmFjdG9yeS4gKi9cbmNvbnN0IHNldFNhbml0aXplciA9IChuZXdTYW5pdGl6ZXIpID0+IHtcbiAgICBpZiAoIUVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGxpdC1odG1sIHNlY3VyaXR5IHBvbGljeS5gICtcbiAgICAgICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYCk7XG4gICAgfVxuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5ld1Nhbml0aXplcjtcbn07XG4vKipcbiAqIE9ubHkgdXNlZCBpbiBpbnRlcm5hbCB0ZXN0cywgbm90IGEgcGFydCBvZiB0aGUgcHVibGljIEFQSS5cbiAqL1xuY29uc3QgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gKCkgPT4ge1xuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG59O1xuY29uc3QgY3JlYXRlU2FuaXRpemVyID0gKG5vZGUsIG5hbWUsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKG5vZGUsIG5hbWUsIHR5cGUpO1xufTtcbi8vIEFkZGVkIHRvIGFuIGF0dHJpYnV0ZSBuYW1lIHRvIG1hcmsgdGhlIGF0dHJpYnV0ZSBhcyBib3VuZCBzbyB3ZSBjYW4gZmluZFxuLy8gaXQgZWFzaWx5LlxuY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDkpfSRgO1xuLy8gU3RyaW5nIHVzZWQgdG8gdGVsbCBpZiBhIGNvbW1lbnQgaXMgYSBtYXJrZXIgY29tbWVudFxuY29uc3QgbWFya2VyTWF0Y2ggPSAnPycgKyBtYXJrZXI7XG4vLyBUZXh0IHVzZWQgdG8gaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIgbm9kZS4gV2UgdXNlIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbi8vIHN5bnRheCBiZWNhdXNlIGl0J3Mgc2xpZ2h0bHkgc21hbGxlciwgYnV0IHBhcnNlcyBhcyBhIGNvbW1lbnQgbm9kZS5cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCR7bWFya2VyTWF0Y2h9PmA7XG5jb25zdCBkID0gZG9jdW1lbnQ7XG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKHYgPSAnJykgPT4gZC5jcmVhdGVDb21tZW50KHYpO1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0eXBlb2YgKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLml0ZXJhdG9yXSkgPT09ICdmdW5jdGlvbic7XG59O1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAoXyRsaXRUeXBlJCkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gKHtcbiAgICBfJGxpdFR5cGUkLFxuICAgIHN0cmluZ3MsXG4gICAgdmFsdWVzLFxufSk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSB0YWcoU1ZHX1JFU1VMVCk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSBTeW1ib2wuZm9yKCdsaXQtbm9DaGFuZ2UnKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBDaGlsZFBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0gU3ltYm9sLmZvcignbGl0LW5vdGhpbmcnKTtcbi8qKlxuICogVGhlIGNhY2hlIG9mIHByZXBhcmVkIHRlbXBsYXRlcywga2V5ZWQgYnkgdGhlIHRhZ2dlZCBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICogYW5kIF9ub3RfIGFjY291bnRpbmcgZm9yIHRoZSBzcGVjaWZpYyB0ZW1wbGF0ZSB0YWcgdXNlZC4gVGhpcyBtZWFucyB0aGF0XG4gKiB0ZW1wbGF0ZSB0YWdzIGNhbm5vdCBiZSBkeW5hbWljIC0gdGhlIG11c3Qgc3RhdGljYWxseSBiZSBvbmUgb2YgaHRtbCwgc3ZnLFxuICogb3IgYXR0ci4gVGhpcyByZXN0cmljdGlvbiBzaW1wbGlmaWVzIHRoZSBjYWNoZSBsb29rdXAsIHdoaWNoIGlzIG9uIHRoZSBob3RcbiAqIHBhdGggZm9yIHJlbmRlcmluZy5cbiAqL1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJlbmRlcnMgYSB2YWx1ZSwgdXN1YWxseSBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LCB0byB0aGUgY29udGFpbmVyLlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gY29udGFpbmVyXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHZhbHVlLCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgcGFydCA9IHBhcnRPd25lck5vZGUuXyRsaXRQYXJ0JDtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBwYXJ0T3duZXJOb2RlLl8kbGl0UGFydCQgPSBwYXJ0ID0gbmV3IENoaWxkUGFydChjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBlbmROb2RlKSwgZW5kTm9kZSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcGFydC5fJHNldFZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcGFydDtcbn07XG5pZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgcmVuZGVyLnNldFNhbml0aXplciA9IHNldFNhbml0aXplcjtcbiAgICByZW5kZXIuY3JlYXRlU2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyO1xuICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICByZW5kZXIuX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbmNvbnN0IHdhbGtlciA9IGQuY3JlYXRlVHJlZVdhbGtlcihkLCAxMjkgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR9ICovLCBudWxsLCBmYWxzZSk7XG5sZXQgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlXG4gKiBgQ2hpbGRQYXJ0YHMgYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGR5bmFtaWMgdGFnIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgICByZXR1cm4gW1xuICAgICAgICBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwb2xpY3kuY3JlYXRlSFRNTChodG1sUmVzdWx0KVxuICAgICAgICAgICAgOiBodG1sUmVzdWx0LFxuICAgICAgICBhdHRyTmFtZXMsXG4gICAgXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoeyBzdHJpbmdzLCBfJGxpdFR5cGUkOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IGF0dHJOYW1lSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW2h0bWwsIGF0dHJOYW1lc10gPSBnZXRUZW1wbGF0ZUh0bWwoc3RyaW5ncywgdHlwZSk7XG4gICAgICAgIHRoaXMuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KGh0bWwsIG9wdGlvbnMpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgIC8vIFJlcGFyZW50IFNWRyBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICAgICAgaWYgKHR5cGUgPT09IFNWR19SRVNVTFQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKC4uLnN2Z0VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FsayB0aGUgdGVtcGxhdGUgdG8gZmluZCBiaW5kaW5nIG1hcmtlcnMgYW5kIGNyZWF0ZSBUZW1wbGF0ZVBhcnRzXG4gICAgICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIGluIHNvbWUgYnJvd3NlcnMgKFRPRE86IGNoZWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbaV0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6ICsrbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbbGFzdEluZGV4XSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBsYXRmb3JtU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGh0bWwsIF9vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCB2YWx1ZSwgcGFyZW50ID0gcGFydCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgX2Q7XG4gICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgdmFsdWUgaXMgZXhwbGljaXRseSBub0NoYW5nZS4gTm90ZSwgdGhpcyBtZWFucyBhbnlcbiAgICAvLyBuZXN0ZWQgZGlyZWN0aXZlIGlzIHN0aWxsIGF0dGFjaGVkIGFuZCBpcyBub3QgcnVuLlxuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpcmVjdGl2ZSA9IGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoX2EgPSBwYXJlbnQuX19kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYXR0cmlidXRlSW5kZXhdIDogcGFyZW50Ll9fZGlyZWN0aXZlO1xuICAgIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHZhbHVlLl8kbGl0RGlyZWN0aXZlJDtcbiAgICBpZiAoKGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5jb25zdHJ1Y3RvcikgIT09IG5leHREaXJlY3RpdmVDb25zdHJ1Y3Rvcikge1xuICAgICAgICAoX2IgPSBjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmUuXyRzZXREaXJlY3RpdmVDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGN1cnJlbnREaXJlY3RpdmUsIGZhbHNlKTtcbiAgICAgICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IG5ldyBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IocGFydCk7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKChfYyA9IChfZCA9IHBhcmVudCkuX19kaXJlY3RpdmVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoX2QuX19kaXJlY3RpdmVzID0gW10pKVthdHRyaWJ1dGVJbmRleF0gPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgc2VwYXJhdGUgZnJvbSB0aGUgY29uc3RydWN0b3IgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBob2xkIG9udG8gaXQgd2l0aCBhbiBpbnN0YW5jZSBmaWVsZC5cbiAgICBfY2xvbmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jcmVhdGlvblNjb3BlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkKS5pbXBvcnROb2RlKGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmcmFnbWVudDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgIHdoaWxlICh0ZW1wbGF0ZVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KG5vZGUsIG5vZGUubmV4dFNpYmxpbmcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyB0ZW1wbGF0ZVBhcnQuY3Rvcihub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gRUxFTUVOVF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gKHRlbXBsYXRlUGFydCA9PT0gbnVsbCB8fCB0ZW1wbGF0ZVBhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlUGFydC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBDSElMRF9QQVJUO1xuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyB3aWxsIGJlIHBhdGNoZWQgb250byBDaGlsZFBhcnRzIHdoZW4gcmVxdWlyZWQgYnlcbiAgICAgICAgLy8gQXN5bmNEaXJlY3RpdmVcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29ubmVjdGlvbiBzdGF0ZSBmb3IgYW55IGBBc3luY0RpcmVjdGl2ZXNgIGNvbnRhaW5lZFxuICAgICAqIHdpdGhpbiB0aGlzIHBhcnQgYW5kIHJ1bnMgdGhlaXIgYGRpc2Nvbm5lY3RlZGAgb3IgYHJlY29ubmVjdGVkYCwgYWNjb3JkaW5nXG4gICAgICogdG8gdGhlIGBpc0Nvbm5lY3RlZGAgYXJndW1lbnQuXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fJHNldENoaWxkUGFydENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vZGUgaW50byB3aGljaCB0aGUgcGFydCByZW5kZXJzIGl0cyBjb250ZW50LlxuICAgICAqXG4gICAgICogQSBDaGlsZFBhcnQncyBjb250ZW50IGNvbnNpc3RzIG9mIGEgcmFuZ2Ugb2YgYWRqYWNlbnQgY2hpbGQgbm9kZXMgb2ZcbiAgICAgKiBgLnBhcmVudE5vZGVgLCBwb3NzaWJseSBib3JkZXJlZCBieSAnbWFya2VyIG5vZGVzJyAoYC5zdGFydE5vZGVgIGFuZFxuICAgICAqIGAuZW5kTm9kZWApLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCBhcmUgbm9uLW51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGJldHdlZW4gYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgLCBleGNsdXNpdmVseS5cbiAgICAgKlxuICAgICAqIC0gSWYgYC5zdGFydE5vZGVgIGlzIG5vbi1udWxsIGJ1dCBgLmVuZE5vZGVgIGlzIG51bGwsIHRoZW4gdGhlIHBhcnQnc1xuICAgICAqIGNvbnRlbnQgY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGZvbGxvd2luZyBgLnN0YXJ0Tm9kZWAsIHVwIHRvIGFuZFxuICAgICAqIGluY2x1ZGluZyB0aGUgbGFzdCBjaGlsZCBvZiBgLnBhcmVudE5vZGVgLiBJZiBgLmVuZE5vZGVgIGlzIG5vbi1udWxsLCB0aGVuXG4gICAgICogYC5zdGFydE5vZGVgIHdpbGwgYWx3YXlzIGJlIG5vbi1udWxsLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuZW5kTm9kZWAgYW5kIGAuc3RhcnROb2RlYCBhcmUgbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgYC5wYXJlbnROb2RlYC5cbiAgICAgKi9cbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyBsZWFkaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IHN0YXJ0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRzdGFydE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgdHJhaWxpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgZW5kTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbmROb2RlO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gTm9uLXJlbmRlcmluZyBjaGlsZCB2YWx1ZXMuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlc2UgZG8gbm90IHJlbmRlclxuICAgICAgICAgICAgLy8gZW1wdHkgdGV4dCBub2RlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBwcmV2ZW50aW5nIGRlZmF1bHQgPHNsb3Q+XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuXyRsaXRUeXBlJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUsIHJlZiA9IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQobmV3IFRleHQoJy8qIGxpdC1odG1sIHdpbGwgbm90IHdyaXRlICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1RlbXBsYXRlUmVzdWx0cyB0byBzY3JpcHRzIGFuZCBzdHlsZXMgKi8nKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLyAmJlxuICAgICAgICAgICAgKHRoaXMuXyRlbmROb2RlID09PSBudWxsXG4gICAgICAgICAgICAgICAgPyB3cmFwKG5vZGUpLm5leHRTaWJsaW5nID09PSBudWxsXG4gICAgICAgICAgICAgICAgOiBub2RlID09PSB3cmFwKHRoaXMuXyRlbmROb2RlKS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKG5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudHguXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKHRleHROb2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfY29tbWl0VGVtcGxhdGVSZXN1bHQocmVzdWx0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIF8kbGl0VHlwZSQgfSA9IHJlc3VsdDtcbiAgICAgICAgLy8gSWYgJGxpdFR5cGUkIGlzIGEgbnVtYmVyLCByZXN1bHQgaXMgYSBwbGFpbiBUZW1wbGF0ZVJlc3VsdCBhbmQgd2UgZ2V0XG4gICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSBmcm9tIHRoZSB0ZW1wbGF0ZSBjYWNoZS4gSWYgbm90LCByZXN1bHQgaXMgYVxuICAgICAgICAvLyBDb21waWxlZFRlbXBsYXRlUmVzdWx0IGFuZCBfJGxpdFR5cGUkIGlzIGEgQ29tcGlsZWRUZW1wbGF0ZSBhbmQgd2UgbmVlZFxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIDx0ZW1wbGF0ZT4gZWxlbWVudCB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgaXQuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdHlwZW9mIF8kbGl0VHlwZSQgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IHRoaXMuXyRnZXRUZW1wbGF0ZShyZXN1bHQpXG4gICAgICAgICAgICA6IChfJGxpdFR5cGUkLmVsID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAoXyRsaXRUeXBlJC5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoXyRsaXRUeXBlJC5oLCB0aGlzLm9wdGlvbnMpKSxcbiAgICAgICAgICAgICAgICBfJGxpdFR5cGUkKTtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJHRlbXBsYXRlKSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUGxhdGZvcm1TdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kZ2V0VGVtcGxhdGUocmVzdWx0KSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCAodGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIENoaWxkUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgQ2hpbGRQYXJ0cy5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHRlc3QgcGVyZiBpbXBhY3Qgb2YgYWx3YXlzIGNyZWF0aW5nIHR3byBwYXJ0c1xuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWh0bWwvaXNzdWVzLzEyNjZcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaCgoaXRlbVBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoaXRlbVBhcnQgJiYgd3JhcChpdGVtUGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBub2RlcyBjb250YWluZWQgd2l0aGluIHRoaXMgUGFydCBmcm9tIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnQgU3RhcnQgbm9kZSB0byBjbGVhciBmcm9tLCBmb3IgY2xlYXJpbmcgYSBzdWJzZXQgb2YgdGhlIHBhcnQnc1xuICAgICAqICAgICBET00gKHVzZWQgd2hlbiB0cnVuY2F0aW5nIGl0ZXJhYmxlcylcbiAgICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgICAqICAgICB3aGljaCBDaGlsZFBhcnRzIGFyZSBiZWluZyByZW1vdmVkLCB1c2VkIGZvciBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXMgaW5cbiAgICAgKiAgICAgdGhvc2UgUGFydHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJGNsZWFyKHN0YXJ0ID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZywgZnJvbSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQVRUUklCVVRFX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuX3NldERpcmVjdGl2ZUNvbm5lY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChub3RoaW5nKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcnQgYnkgcmVzb2x2aW5nIHRoZSB2YWx1ZSBmcm9tIHBvc3NpYmx5IG11bHRpcGxlXG4gICAgICogdmFsdWVzIGFuZCBzdGF0aWMgc3RyaW5ncyBhbmQgY29tbWl0dGluZyBpdCB0byB0aGUgRE9NLlxuICAgICAqIElmIHRoaXMgcGFydCBpcyBzaW5nbGUtdmFsdWVkLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHNpbmdsZSB2YWx1ZSBhcmd1bWVudC4gSWYgdGhpcyBwYXJ0IGlzXG4gICAgICogbXVsdGktdmFsdWUsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIGRlZmluZWQsIGFuZCB0aGUgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIHdpdGggdGhlIHZhbHVlIGFycmF5IG9mIHRoZSBwYXJ0J3Mgb3duaW5nIFRlbXBsYXRlSW5zdGFuY2UsIGFuZCBhbiBvZmZzZXRcbiAgICAgKiBpbnRvIHRoZSB2YWx1ZSBhcnJheSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHJlYWQuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb3ZlcmxvYWRlZCB0aGlzIHdheSB0byBlbGltaW5hdGUgc2hvcnQtbGl2ZWQgYXJyYXkgc2xpY2VzXG4gICAgICogb2YgdGhlIHRlbXBsYXRlIGluc3RhbmNlIHZhbHVlcywgYW5kIGFsbG93IGEgZmFzdC1wYXRoIGZvciBzaW5nbGUtdmFsdWVkXG4gICAgICogcGFydHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHBhcnQgdmFsdWUsIG9yIGFuIGFycmF5IG9mIHZhbHVlcyBmb3IgbXVsdGktdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIHZhbHVlSW5kZXggdGhlIGluZGV4IHRvIHN0YXJ0IHJlYWRpbmcgdmFsdWVzIGZyb20uIGB1bmRlZmluZWRgIGZvclxuICAgICAqICAgc2luZ2xlLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSBub0NvbW1pdCBjYXVzZXMgdGhlIHBhcnQgdG8gbm90IGNvbW1pdCBpdHMgdmFsdWUgdG8gdGhlIERPTS4gVXNlZFxuICAgICAqICAgaW4gaHlkcmF0aW9uIHRvIHByaW1lIGF0dHJpYnV0ZSBwYXJ0cyB3aXRoIHRoZWlyIGZpcnN0LXJlbmRlcmVkIHZhbHVlLFxuICAgICAqICAgYnV0IG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSwgYW5kIGluIFNTUiB0byBuby1vcCB0aGUgRE9NIG9wZXJhdGlvbiBhbmRcbiAgICAgKiAgIGNhcHR1cmUgdGhlIHZhbHVlIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcywgdmFsdWVJbmRleCwgbm9Db21taXQpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgLy8gV2hldGhlciBhbnkgb2YgdGhlIHZhbHVlcyBoYXMgY2hhbmdlZCwgZm9yIGRpcnR5LWNoZWNraW5nXG4gICAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0cmluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gU2luZ2xlLXZhbHVlIGJpbmRpbmcgY2FzZVxuICAgICAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQsIDApO1xuICAgICAgICAgICAgY2hhbmdlID1cbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJbnRlcnBvbGF0aW9uIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpbmdzWzBdO1xuICAgICAgICAgICAgbGV0IGksIHY7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZXNbdmFsdWVJbmRleCArIGldLCBkaXJlY3RpdmVQYXJlbnQsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlci1wcm92aWRlZCB2YWx1ZSBpcyBgbm9DaGFuZ2VgLCB1c2UgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYW5nZSB8fCAoY2hhbmdlID0gIWlzUHJpbWl0aXZlKHYpIHx8IHYgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAodiAhPT0gbnVsbCAmJiB2ICE9PSB2b2lkIDAgPyB2IDogJycpICsgc3RyaW5nc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgIW5vQ29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAnYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgIH1cbn1cbmNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRXZlbnRQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEVWRU5UX1BBUlQ7XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPSAoX2EgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQsIDApKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBub3RoaW5nO1xuICAgICAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90aGluZyBvciBhbnkgb3B0aW9ucyBjaGFuZ2Ugd2UgaGF2ZSB0byByZW1vdmUgdGhlXG4gICAgICAgIC8vIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSAobmV3TGlzdGVuZXIgPT09IG5vdGhpbmcgJiYgb2xkTGlzdGVuZXIgIT09IG5vdGhpbmcpIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5jYXB0dXJlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5wYXNzaXZlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBub3RoaW5nIGFuZCB3ZSByZW1vdmVkIHRoZSBsaXN0ZW5lciwgd2UgaGF2ZVxuICAgICAgICAvLyB0byBhZGQgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgKG9sZExpc3RlbmVyID09PSBub3RoaW5nIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBkbyB3ZSBuZWVkIHRvIGRlZmF1bHQgdG8gdGhpcy5lbGVtZW50P1xuICAgICAgICAgICAgLy8gSXQnbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBlLmN1cnJlbnRUYXJnZXRgLlxuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmNhbGwoKF9iID0gKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRWxlbWVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnR5cGUgPSBFTEVNRU5UX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5ldGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9zZXREaXJlY3RpdmVDb25uZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqMgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OoyA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gaHlkcmF0ZVxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZCA9IChfYyA9IGdsb2JhbFRoaXMpWydsaXRIdG1sUGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2UgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0SHRtbFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IChfZlsnbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzIuMC4wLXJjLjInKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9hc3luYy1kaXJlY3RpdmUuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLWRpcmVjdGl2ZS5qcy5tYXBcbiIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmUuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXBcbiIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC5qcy5tYXBcbiIsImltcG9ydFwibGl0LWh0bWxcIjtpbXBvcnRcIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vZWxlbWVudHMvdWNkLXRoZW1lLWFsZXJ0L3VjZC10aGVtZS1hbGVydCc7XG5pbXBvcnQgJy4uL2VsZW1lbnRzL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYSc7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtbGlzdC1hY2NvcmRpb24vdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uXCI7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtZm9ybS1zZWFyY2gvdWNkLXRoZW1lLWZvcm0tc2VhcmNoXCI7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cFwiO1xuaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWNvbGxhcHNlL3VjZC10aGVtZS1jb2xsYXBzZVwiOyJdLCJzb3VyY2VSb290IjoiIn0=