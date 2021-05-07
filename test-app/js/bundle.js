/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../elements/ucdlib-theme-alert/ucdlib-theme-alert.js":
/*!************************************************************!*\
  !*** ../elements/ucdlib-theme-alert/ucdlib-theme-alert.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibThemeAlert)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucdlib_theme_alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucdlib-theme-alert.tpl.js */ "../elements/ucdlib-theme-alert/ucdlib-theme-alert.tpl.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_messaging_alert_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_messaging-alert.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_messaging-alert.css.js");





class UcdlibThemeAlert extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      type : {type: String},
      styleModifier : {type: String}
    }
  }

  static get styles() {
    return [_ucd_lib_theme_sass_4_component_messaging_alert_css_js__WEBPACK_IMPORTED_MODULE_2__.default]
  } 

  constructor() {
    super();
    this.render = _ucdlib_theme_alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__.default.bind(this);

    // allowed types; success, warning, error
    this.type = '';
    this.styleModifier = '';
  }

  updated(props) {
    if( props.has('type') && this.type ) {
      this.styleModifier = 'alert--'+this.type;
    }
  }

}

customElements.define('ucdlib-theme-alert', UcdlibThemeAlert);

/***/ }),

/***/ "../elements/ucdlib-theme-alert/ucdlib-theme-alert.tpl.js":
/*!****************************************************************!*\
  !*** ../elements/ucdlib-theme-alert/ucdlib-theme-alert.tpl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

<style>
  :host {
    display: block;
  }
</style>  

<div class="alert ${this.styleModifier}">
  <slot></slot>
</div>

`;}

/***/ }),

/***/ "../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.js":
/*!************************************************************************!*\
  !*** ../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibThemeFormSearch)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucdlib_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucdlib-theme-form-search.tpl.js */ "../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.tpl.js");



/**
 * @class UcdlibThemeFormSearch
 * @classdesc Component class for rendering a basic search form
 * @param {String} value - The search string
 * @param {String} placeholder - The input placeholder
 * @param {String} formAction - The action to be taken on form submit (optional)
 * @example
 * // Use a form action:
 * html`
 *   <ucdlib-theme-form-search form-action="/url/to/post/to"></ucdlib-theme-form-search>
 * `
 * // Use event listener:
 * html`
 *  <ucdlib-theme-form-search @search="${this._onSearch}"></ucdlib-theme-form-search>
 * `
 */
class UcdlibThemeFormSearch extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

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
    return (0,_ucdlib_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucdlib_theme_form_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
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

customElements.define('ucdlib-theme-form-search', UcdlibThemeFormSearch);

/***/ }),

/***/ "../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.tpl.js":
/*!****************************************************************************!*\
  !*** ../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.tpl.js ***!
  \****************************************************************************/
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

/***/ "../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.js":
/*!******************************************************************************!*\
  !*** ../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibThemeListAccordion)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucdlib_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucdlib-theme-list-accordion.tpl.js */ "../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.tpl.js");



/**
 * @class UcdlibThemeListAccordion
 * @classdesc Component class for displaying lists with accordion collapse/expand functionality
 * 
 * @prop {String} listStyle - 'accordion' or 'faq'
 * @example
 * html`
 *  <ucdlib-theme-list-accordion>
 *    <div>Click me to expand div below</div>
 *    <div>I will be toggled when the above item is clicked.</div>
 *    <div>The direct children of this element must be divs</div>
 *    <div>But you can pass through <a href="#">rich text</a> within.
 *  </ucdlib-theme-list-accordion>
 * `
 */
class UcdlibThemeListAccordion extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

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
    this.render = _ucdlib_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);
    this._listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
    this._expandedItems = new Set();
  }

  static get styles() {
    return (0,_ucdlib_theme_list_accordion_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
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

    await this.requestUpdate();
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

customElements.define('ucdlib-theme-list-accordion', UcdlibThemeListAccordion);

/***/ }),

/***/ "../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.tpl.js":
/*!**********************************************************************************!*\
  !*** ../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.tpl.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_2_base_class_lists_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/2_base_class/_lists.css.js */ "./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js");




function styles() {
  window.steve = _ucd_lib_theme_sass_2_base_class_lists_css_js__WEBPACK_IMPORTED_MODULE_1__.default;
  let customStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
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

/***/ "../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.js":
/*!**************************************************************************!*\
  !*** ../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdlibThemeMessageArea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucdlib_theme_message_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucdlib-theme-message-area.tpl.js */ "../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.tpl.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_headings_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_headings.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_headings.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_message_area_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_message-area.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js");






class UcdlibThemeMessageArea extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      title : {type: String},
      buttonText : {type: String, attribute: 'button-text'}
    }
  }

  static get styles() {
    return [_ucd_lib_theme_sass_1_base_html_headings_css_js__WEBPACK_IMPORTED_MODULE_2__.default, _ucd_lib_theme_sass_4_component_message_area_css_js__WEBPACK_IMPORTED_MODULE_3__.default];
  }

  constructor() {
    super();
    this.render = _ucdlib_theme_message_area_tpl_js__WEBPACK_IMPORTED_MODULE_1__.default.bind(this);
  }

  _onBtnClicked() {
    this.dispatchEvent(new CustomEvent('click'));
  }

}

customElements.define('ucdlib-theme-message-area', UcdlibThemeMessageArea);

/***/ }),

/***/ "../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.tpl.js":
/*!******************************************************************************!*\
  !*** ../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.tpl.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`

<style>
  :host {
    display: block;
  }
</style>  


<div class="message-area">
  <div class="message-area__content" data-cy="content">
    <h2 class="message-area__title">${this.title}</h2>
    <div class="message-area__body">
      <slot></slot>
    </div>
  </div>
  <button class="message-area__button" data-cy="button" title="${this.buttonText}" @click="${this._onBtnClicked}">${this.buttonText}</button>
</div>


`;}

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
/* harmony import */ var _elements_ucdlib_theme_alert_ucdlib_theme_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/ucdlib-theme-alert/ucdlib-theme-alert */ "../elements/ucdlib-theme-alert/ucdlib-theme-alert.js");
/* harmony import */ var _elements_ucdlib_theme_message_area_ucdlib_theme_message_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/ucdlib-theme-message-area/ucdlib-theme-message-area */ "../elements/ucdlib-theme-message-area/ucdlib-theme-message-area.js");
/* harmony import */ var _elements_ucdlib_theme_list_accordion_ucdlib_theme_list_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion */ "../elements/ucdlib-theme-list-accordion/ucdlib-theme-list-accordion.js");
/* harmony import */ var _elements_ucdlib_theme_form_search_ucdlib_theme_form_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ucdlib-theme-form-search/ucdlib-theme-form-search */ "../elements/ucdlib-theme-form-search/ucdlib-theme-form-search.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2RsaWItdGhlbWUtYWxlcnQvdWNkbGliLXRoZW1lLWFsZXJ0LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZGxpYi10aGVtZS1hbGVydC91Y2RsaWItdGhlbWUtYWxlcnQudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZGxpYi10aGVtZS1mb3JtLXNlYXJjaC91Y2RsaWItdGhlbWUtZm9ybS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkbGliLXRoZW1lLWZvcm0tc2VhcmNoL3VjZGxpYi10aGVtZS1mb3JtLXNlYXJjaC50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkbGliLXRoZW1lLWxpc3QtYWNjb3JkaW9uL3VjZGxpYi10aGVtZS1saXN0LWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2RsaWItdGhlbWUtbGlzdC1hY2NvcmRpb24vdWNkbGliLXRoZW1lLWxpc3QtYWNjb3JkaW9uLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2RsaWItdGhlbWUtbWVzc2FnZS1hcmVhL3VjZGxpYi10aGVtZS1tZXNzYWdlLWFyZWEuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkbGliLXRoZW1lLW1lc3NhZ2UtYXJlYS91Y2RsaWItdGhlbWUtbWVzc2FnZS1hcmVhLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9faGVhZGluZ3MuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvMl9iYXNlX2NsYXNzL19saXN0cy5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fbWVzc2FnZS1hcmVhLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19tZXNzYWdpbmctYWxlcnQuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX3NlYXJjaC1mb3JtLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzZfdXRpbGl0eS9fdS12aXNpYmlsaXR5LmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvZGV2ZWxvcG1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNnQjs7QUFFaUM7O0FBRW5FLCtCQUErQiwyQ0FBVTs7QUFFeEQ7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQix1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLFlBQVksMkZBQVc7QUFDdkIsRzs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFXOztBQUU3QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEQ7Ozs7Ozs7Ozs7Ozs7OztBQ25DMkI7O0FBRVosbUI7QUFDZixPQUFPLHFDQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBOztBQUVBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDaUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNlLG9DQUFvQywyQ0FBVTs7QUFFN0Q7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixvQkFBb0IsdUNBQXVDO0FBQzNELG1CQUFtQix1Q0FBdUM7QUFDMUQsa0JBQWtCLHNDQUFzQztBQUN4RCxrQkFBa0Isc0NBQXNDO0FBQ3hELG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsV0FBVyx3RUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTs7QUFFQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RmdDOztBQUVnQztBQUNZO0FBQ0E7QUFDUjs7O0FBRzdEO0FBQ1Asa0JBQWtCLG9DQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFZO0FBQ2hCLElBQUksc0ZBQVU7QUFDZCxJQUFJLGlGQUFPO0FBQ1gsSUFBSSx1RkFBUztBQUNiO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7QUFDWDtBQUNBLGFBQWEsZUFBZTtBQUM1QixZQUFZLGdCQUFnQjtBQUM1QjtBQUNBLHVCQUF1QixlQUFlOztBQUV0QyxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQSxjQUFjLGNBQWM7QUFDNUIsYUFBYSxXQUFXO0FBQ3hCLDZGQUE2Rjs7QUFFN0Y7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQztBQUNtQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx1Q0FBdUMsMkNBQVU7O0FBRWhFO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQXNDO0FBQ3hELG1CQUFtQiw4QkFBOEI7QUFDakQseUJBQXlCLDhCQUE4QjtBQUN2RCx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDRFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1DQUFtQztBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsZTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFtRTtBQUNsRjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlMZ0M7O0FBRXFDOztBQUU5RDtBQUNQLGlCQUFpQixrRkFBTztBQUN4QixxQkFBcUIsb0NBQUc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0ZBQU87QUFDWDtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJO0FBQ1gsbUJBQW1CLGVBQWU7QUFDbEMsRUFBRSxxQ0FBcUMscUNBQUk7QUFDM0MsSUFBSSx1QkFBdUIscUNBQUk7QUFDL0I7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZixpQ0FBaUMsTUFBTTtBQUN2Qyx1QkFBdUIsa0NBQWtDO0FBQ3pELG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0EsTUFBTSxxQ0FBSTtBQUNWO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDLGlCQUFpQixtQ0FBbUM7QUFDcEQsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGlDO0FBQ3VCOztBQUVxQjtBQUNJOztBQUVsRSxxQ0FBcUMsMkNBQVU7O0FBRTlEO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG9GQUFhLEVBQUUsd0ZBQWE7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwyRUFBVztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkU7Ozs7Ozs7Ozs7Ozs7OztBQzlCMkI7O0FBRVosbUI7QUFDZixPQUFPLHFDQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxnQkFBZ0IsWUFBWSxtQkFBbUIsSUFBSSxnQkFBZ0I7QUFDcEk7OztBQUdBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixNQUFNO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0U7QUFDbkM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsK0RBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrREFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsUUFBUSwrRUFBK0UsRUFBRTtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsa0ZBQWtGLEVBQUU7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLFFBQVEsNEVBQTRFLEVBQUU7QUFDeEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsUUFBUSw2RUFBNkUsRUFBRTtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLDZHQUE2RyxrQkFBa0I7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Qzs7Ozs7Ozs7Ozs7Ozs7O0FDcDJCd0I7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDbkt1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDcmF1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3pGdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVEdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzRHVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkN1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzliRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEO0FBQ1o7QUFDTjtBQUNiO0FBQ3pCO0FBQ0E7QUFDTyx3QkFBd0Isa0VBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsYUFBYTtBQUNwSDtBQUNBO0FBQ0Esd0dBQXdHLGFBQWE7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLElBQUksV0FBVyxNQUFNLGdCQUFnQjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVDQUF1QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU0sVUFBVSxpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25rQ3VGO0FBQ3ZGOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDYztBQUNJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi91Y2RsaWItdGhlbWUtYWxlcnQudHBsLmpzXCI7XG5cbmltcG9ydCBhbGVydFN0eWxlcyBmcm9tICdAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19tZXNzYWdpbmctYWxlcnQuY3NzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkbGliVGhlbWVBbGVydCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgc3R5bGVNb2RpZmllciA6IHt0eXBlOiBTdHJpbmd9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFthbGVydFN0eWxlc11cbiAgfSBcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICAvLyBhbGxvd2VkIHR5cGVzOyBzdWNjZXNzLCB3YXJuaW5nLCBlcnJvclxuICAgIHRoaXMudHlwZSA9ICcnO1xuICAgIHRoaXMuc3R5bGVNb2RpZmllciA9ICcnO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmKCBwcm9wcy5oYXMoJ3R5cGUnKSAmJiB0aGlzLnR5cGUgKSB7XG4gICAgICB0aGlzLnN0eWxlTW9kaWZpZXIgPSAnYWxlcnQtLScrdGhpcy50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkbGliLXRoZW1lLWFsZXJ0JywgVWNkbGliVGhlbWVBbGVydCk7IiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbjwvc3R5bGU+ICBcblxuPGRpdiBjbGFzcz1cImFsZXJ0ICR7dGhpcy5zdHlsZU1vZGlmaWVyfVwiPlxuICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzIH0gZnJvbSBcIi4vdWNkbGliLXRoZW1lLWZvcm0tc2VhcmNoLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RsaWJUaGVtZUZvcm1TZWFyY2hcbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciByZW5kZXJpbmcgYSBiYXNpYyBzZWFyY2ggZm9ybVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHNlYXJjaCBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZWhvbGRlciAtIFRoZSBpbnB1dCBwbGFjZWhvbGRlclxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1BY3Rpb24gLSBUaGUgYWN0aW9uIHRvIGJlIHRha2VuIG9uIGZvcm0gc3VibWl0IChvcHRpb25hbClcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgYSBmb3JtIGFjdGlvbjpcbiAqIGh0bWxgXG4gKiAgIDx1Y2RsaWItdGhlbWUtZm9ybS1zZWFyY2ggZm9ybS1hY3Rpb249XCIvdXJsL3RvL3Bvc3QvdG9cIj48L3VjZGxpYi10aGVtZS1mb3JtLXNlYXJjaD5cbiAqIGBcbiAqIC8vIFVzZSBldmVudCBsaXN0ZW5lcjpcbiAqIGh0bWxgXG4gKiAgPHVjZGxpYi10aGVtZS1mb3JtLXNlYXJjaCBAc2VhcmNoPVwiJHt0aGlzLl9vblNlYXJjaH1cIj48L3VjZGxpYi10aGVtZS1mb3JtLXNlYXJjaD5cbiAqIGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkbGliVGhlbWVGb3JtU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge3R5cGU6IFN0cmluZ30sXG4gICAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcInBsYWNlaG9sZGVyXCJ9LFxuICAgICAgZm9ybUFjdGlvbjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImZvcm0tYWN0aW9uXCJ9LFxuICAgICAgZm9ybUNsYXNzOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiZm9ybS1jbGFzc1wifSxcbiAgICAgIGxhYmVsVGV4dDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImxhYmVsLXRleHRcIn0sXG4gICAgICBpbnB1dENsYXNzOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiaW5wdXQtY2xhc3NcIn1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybUFjdGlvbiA9IFwiXCI7XG4gICAgdGhpcy5mb3JtQ2xhc3MgPSBcIlwiO1xuICAgIHRoaXMubGFiZWxUZXh0ID0gXCJTZWFyY2hcIjtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2guLi5cIjtcbiAgICB0aGlzLmlucHV0Q2xhc3MgPSBcIlwiO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uU3VibWl0XG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBmb3JtIHN1Ym1pdFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gc3VibWl0IGV2ZW50XG4gICAqL1xuICBfb25TdWJtaXQoZSl7XG4gICAgaWYgKCAhdGhpcy5mb3JtQWN0aW9uICkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoU2VhcmNoRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25JbnB1dFxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gc2VhcmNoIGlucHV0IGNoYW5nZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBlIC0gaW5wdXQgZXZlbnRcbiAgICovXG4gIF9vbklucHV0KGUpe1xuICAgIHRoaXMudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9kaXNwYXRjaFNlYXJjaEV2ZW50XG4gICAqIEBkZXNjcmlwdGlvbiBGaXJlcyAnc2VhcmNoJyBjdXN0b20gZXZlbnRcbiAgICovXG4gIF9kaXNwYXRjaFNlYXJjaEV2ZW50KCkge1xuICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdzZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHsgXG4gICAgICAgIG1lc3NhZ2U6ICdBIHNlYXJjaCBoYXMgYmVlbiBpbml0aWF0ZWQnLCBcbiAgICAgICAgc2VhcmNoVGVybTogdGhpcy52YWx1ZVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZSB9KTtcbiAgXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2RsaWItdGhlbWUtZm9ybS1zZWFyY2gnLCBVY2RsaWJUaGVtZUZvcm1TZWFyY2gpOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCBub3JtYWxpemVDc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3Mvbm9ybWFsaXplLmNzcy5qc1wiO1xuaW1wb3J0IHV0aWxpdHlDc3MgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNl91dGlsaXR5L191LXZpc2liaWxpdHkuY3NzLmpzXCI7XG5pbXBvcnQgc2VhcmNoQ3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19zZWFyY2gtZm9ybS5jc3MuanNcIjtcbmltcG9ydCBmb3JtQ3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBsZXQgY3VzdG9tQ3NzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBbaGlkZGVuXSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuICByZXR1cm4gW1xuICAgIG5vcm1hbGl6ZUNzcyxcbiAgICB1dGlsaXR5Q3NzLFxuICAgIGZvcm1Dc3MsXG4gICAgc2VhcmNoQ3NzLFxuICAgIGN1c3RvbUNzc1xuICBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgIFxuPGZvcm0gXG4gIEBzdWJtaXQ9XCIke3RoaXMuX29uU3VibWl0fVwiXG4gIGFjdGlvbj1cIiR7dGhpcy5mb3JtQWN0aW9ufVwiIFxuICBtZXRob2Q9XCJQT1NUXCIgXG4gIGNsYXNzPVwic2VhcmNoLWZvcm0gJHt0aGlzLmZvcm1DbGFzc31cIj5cblxuICA8bGFiZWwgZm9yPVwic2VhcmNoXCIgY2xhc3M9XCJ1LWhpZGRlbi0tdmlzdWFsbHlcIj4ke3RoaXMubGFiZWxUZXh0fTwvbGFiZWw+XG4gIDxpbnB1dCBcbiAgICB0eXBlPVwidGV4dFwiIFxuICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiIFxuICAgIGlkPVwic2VhcmNoXCIgXG4gICAgY2xhc3M9XCJzZWFyY2gtZm9ybV9faW5wdXQgJHt0aGlzLmlucHV0Q2xhc3N9XCIgXG4gICAgbmFtZT1cInNlYXJjaHRlcm1cIiBcbiAgICBAaW5wdXQ9XCIke3RoaXMuX29uSW5wdXR9XCJcbiAgICB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIj5cbiAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInNlYXJjaC1mb3JtX19zdWJtaXRcIiBuYW1lPVwic2VhcmNoXCIgYWx0PVwiU2VhcmNoXCIgdmFsdWU9XCImI3hmMDAyOyBTdWJtaXRcIj5cblxuPC9mb3JtPlxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi91Y2RsaWItdGhlbWUtbGlzdC1hY2NvcmRpb24udHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIFVjZGxpYlRoZW1lTGlzdEFjY29yZGlvblxuICogQGNsYXNzZGVzYyBDb21wb25lbnQgY2xhc3MgZm9yIGRpc3BsYXlpbmcgbGlzdHMgd2l0aCBhY2NvcmRpb24gY29sbGFwc2UvZXhwYW5kIGZ1bmN0aW9uYWxpdHlcbiAqIFxuICogQHByb3Age1N0cmluZ30gbGlzdFN0eWxlIC0gJ2FjY29yZGlvbicgb3IgJ2ZhcSdcbiAqIEBleGFtcGxlXG4gKiBodG1sYFxuICogIDx1Y2RsaWItdGhlbWUtbGlzdC1hY2NvcmRpb24+XG4gKiAgICA8ZGl2PkNsaWNrIG1lIHRvIGV4cGFuZCBkaXYgYmVsb3c8L2Rpdj5cbiAqICAgIDxkaXY+SSB3aWxsIGJlIHRvZ2dsZWQgd2hlbiB0aGUgYWJvdmUgaXRlbSBpcyBjbGlja2VkLjwvZGl2PlxuICogICAgPGRpdj5UaGUgZGlyZWN0IGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudCBtdXN0IGJlIGRpdnM8L2Rpdj5cbiAqICAgIDxkaXY+QnV0IHlvdSBjYW4gcGFzcyB0aHJvdWdoIDxhIGhyZWY9XCIjXCI+cmljaCB0ZXh0PC9hPiB3aXRoaW4uXG4gKiAgPC91Y2RsaWItdGhlbWUtbGlzdC1hY2NvcmRpb24+XG4gKiBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZGxpYlRoZW1lTGlzdEFjY29yZGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlzdFN0eWxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwibGlzdC1zdHlsZVwifSxcbiAgICAgIF9saXN0SXRlbXM6IHthdHRyaWJ1dGU6IGZhbHNlLCBzdGF0ZTogdHJ1ZX0sXG4gICAgICBfYXZhaWxhYmxlU3R5bGVzOiB7YXR0cmlidXRlOiBmYWxzZSwgc3RhdGU6IHRydWV9LFxuICAgICAgX2V4cGFuZGVkSXRlbXM6IHthdHRyaWJ1dGU6IGZhbHNlLCBzdGF0ZTogdHJ1ZX1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2xpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMuX2F2YWlsYWJsZVN0eWxlcyA9IFsnYWNjb3JkaW9uJywgJ2ZhcSddO1xuICAgIHRoaXMubGlzdFN0eWxlID0gdGhpcy5fYXZhaWxhYmxlU3R5bGVzWzBdO1xuICAgIHRoaXMuX2V4cGFuZGVkSXRlbXMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVkXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgYWZ0ZXIgZWxlbWVudCBoYXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZCBcbiAgICovXG4gIHVwZGF0ZWQocHJvcHMpe1xuICAgIGlmICggcHJvcHMuaGFzKFwibGlzdFN0eWxlXCIpICkge1xuICAgICAgaWYgKCAhdGhpcy5fYXZhaWxhYmxlU3R5bGVzLmluY2x1ZGVzKHRoaXMubGlzdFN0eWxlLnRvTG93ZXJDYXNlKCkpICkge1xuICAgICAgICB0aGlzLmxpc3RTdHlsZSA9IHRoaXMuX2F2YWlsYWJsZVN0eWxlc1swXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBjb25uZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB0aGlzLl9vbkNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBkaXNjb25uZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b2dnbGVJdGVtVmlzaWJsaXR5XG4gICAqIEBkZXNjcmlwdGlvbiBFeHBhbmRzL2NvbGxhcHNlcyBhbiBpdGVtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbSB0byBleHBhbmQvY29sbGFwc2UgKHplcm8gaW5kZXhlZClcbiAgICogQHBhcmFtIHtCb29sZWFufSBpc1BhaXJJbmRleCAtIFRoZSB0eXBlIG9mIGluZGV4XG4gICAqICBJZiBmYWxzZSwgdXNlIHRoZSBmbGF0dGVuZWQgaW5kZXggb2YgdGhlIF9saXN0SXRlbXMgYXJyYXk6XG4gICAqICAgIFtxMSwgYTEsIHEyLCBhMiwgcTMsIGEzLi4uXVxuICAgKiAgSWYgdHJ1ZSwgdHJlYXRzIHRoZSB0aXRsZSBhbmQgY29udGVudCAob3IgcXVlc3Rpb24gYW5kIGFuc3dlcikgYXMgYSBwYWlyOlxuICAgKiAgICAwOiBmaXJzdCBwYWlyLCAxOiBzZWNvbmQgcGFpciwgZXRjXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGlzcGF0Y2hFdmVudCAtIFdpbGwgZGlzcGF0Y2ggY3VzdG9tICdpdGVtLXRvZ2dsZScgZXZlbnRcbiAgICovXG4gIGFzeW5jIHRvZ2dsZUl0ZW1WaXNpYmxpdHkoaW5kZXgsIGlzUGFpckluZGV4PXRydWUsIGRpc3BhdGNoRXZlbnQ9ZmFsc2Upe1xuICAgIGxldCBwYWlySW5kZXggPSBpc1BhaXJJbmRleCA/IGluZGV4IDogTWF0aC5mbG9vcihpbmRleCAvIDIpO1xuICAgIGlmICggdGhpcy5fZXhwYW5kZWRJdGVtcy5oYXMocGFpckluZGV4KSApe1xuICAgICAgdGhpcy5fZXhwYW5kZWRJdGVtcy5kZWxldGUocGFpckluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXhwYW5kZWRJdGVtcy5hZGQocGFpckluZGV4KTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICBpZiAoIGRpc3BhdGNoRXZlbnQgKSB0aGlzLl9kaXNwYXRjaEl0ZW1Ub2dnbGVFdmVudChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpdGVtSXNFeHBhbmRlZFxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGl0ZW0gaXMgZXhwYW5kZWRcbiAgICogQHBhcmFtIHtOdW5iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNQYWlySW5kZXggLSBEb2VzIHRoZSBpbmRleCBwYXJhbSByZWZlciB0byBRL0EgcGFpciBvciB0aGUgZmxhdHRlbmVkIGluZGV4P1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGl0ZW1Jc0V4cGFuZGVkKGluZGV4LCBpc1BhaXJJbmRleD10cnVlKSB7XG4gICAgbGV0IHBhaXJJbmRleCA9IGlzUGFpckluZGV4ID8gaW5kZXggOiBNYXRoLmZsb29yKGluZGV4IC8gMik7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkSXRlbXMuaGFzKHBhaXJJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UaXRsZUNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBpdGVtIHRpdGxlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgXG4gICAqL1xuICBfb25UaXRsZUNsaWNrKGUpIHtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpdGVtLWluZGV4XCIpKTtcbiAgICB0aGlzLnRvZ2dsZUl0ZW1WaXNpYmxpdHkoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRpdGxlS2V5VXBcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIGl0ZW0gdGl0bGVcbiAgICogQHBhcmFtIHtFdmVudH0gZSBcbiAgICovXG4gIF9vblRpdGxlS2V5VXAoZSkge1xuICAgIGlmKCBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpdGVtLWluZGV4XCIpKTtcbiAgICB0aGlzLnRvZ2dsZUl0ZW1WaXNpYmxpdHkoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoaWxkTGlzdE11dGF0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBzZWxmLCByZXNwb25kcyB0byBjaGFuZ2VzIGluIGNoaWxkcmVuXG4gICAqL1xuICBfb25DaGlsZExpc3RNdXRhdGlvbigpIHtcbiAgICBsZXQgbGlzdEl0ZW1zID0gW107XG4gICAgQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lICE9PSBcIkRJVlwiKSAgcmV0dXJuO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzbG90JywgJ2xpc3QtaXRlbS0nK2luZGV4KTtcbiAgICAgIGlmKCB0aGlzLmxpc3RTdHlsZSA9PT0gJ2ZhcScgKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgIH1cblxuICAgICAgbGlzdEl0ZW1zLnB1c2goe2NoaWxkLCBzbG90TmFtZTonbGlzdC1pdGVtLScraW5kZXh9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9saXN0SXRlbXMgPSBsaXN0SXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZGlzcGF0Y2hJdGVtVG9nZ2xlRXZlbnRcbiAgICogQGRlc2NyaXB0aW9uIEZpcmVzICdpdGVtLXRvZ2dsZScgY3VzdG9tIGV2ZW50IHdoZW4gdXNlciBleHBhbmRzL2NvbGxhcHNlcyBhbiBpdGVtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgX2xpc3RJdGVtcyBhcnJheSBwcm9wZXJ0eVxuICAgKi9cbiAgX2Rpc3BhdGNoSXRlbVRvZ2dsZUV2ZW50KGluZGV4KSB7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW0tdG9nZ2xlJywge1xuICAgICAgZGV0YWlsOiB7IFxuICAgICAgICBtZXNzYWdlOiAnQSBsaXN0IGl0ZW0gaGFzIGJlZW4gZXhwYW5kZWQgb3IgY29sbGFwc2VkJywgXG4gICAgICAgIGlzRXhwYW5kZWQ6IHRoaXMuaXRlbUlzRXhwYW5kZWQoaW5kZXgsIGZhbHNlKSxcbiAgICAgICAgaXRlbToge3RpdGxlOiB0aGlzLl9saXN0SXRlbXNbaW5kZXhdLCBjb250ZW50OiB0aGlzLl9saXN0SXRlbXNbaW5kZXggKyAxXX0sXG4gICAgICAgIGxpc3RJdGVtSW5kZXg6IGluZGV4LFxuICAgICAgICBsaXN0SXRlbVBhaXJJbmRleDogTWF0aC5mbG9vcihpbmRleCAvIDIpXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1RpdGxlXG4gICAqIEBkZXNjcmlwdGlvbiBJdGVtIGlzIHRpdGxlIG9yIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaSAtIEFycmF5IGluZGV4LlxuICAgKiBAcmV0dXJucyAge0Jvb2xlYW59XG4gICAqL1xuICBfaXNUaXRsZShpKSB7XG4gICAgcmV0dXJuIGkgJSAyID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzQ29udGVudFxuICAgKiBAZGVzY3JpcHRpb24gSXRlbSBpcyBjb250ZW50IG9yIGFuc3dlci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBBcnJheSBpbmRleC5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBfaXNDb250ZW50KGkpe1xuICAgIHJldHVybiAhdGhpcy5faXNUaXRsZShpKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkbGliLXRoZW1lLWxpc3QtYWNjb3JkaW9uJywgVWNkbGliVGhlbWVMaXN0QWNjb3JkaW9uKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbGlzdENzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy8yX2Jhc2VfY2xhc3MvX2xpc3RzLmNzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICB3aW5kb3cuc3RldmUgPSBsaXN0Q3NzO1xuICBsZXQgY3VzdG9tU3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBbaGlkZGVuXSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pdGVtLXRpdGxlIDo6c2xvdHRlZCgqKSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIGA7XG4gIHJldHVybiBbXG4gICAgbGlzdENzcywgXG4gICAgY3VzdG9tU3R5bGVzXG4gIF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcbjx1bCBjbGFzcz1cImxpc3QtLSR7dGhpcy5saXN0U3R5bGV9XCI+XG4ke3RoaXMuX2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBodG1sYFxuICAke3RoaXMuX2lzVGl0bGUoaW5kZXgpID8gaHRtbGBcbiAgICA8bGkgXG4gICAgICBpZD1cImFjY29yZGlvbi0ke2luZGV4fVwiXG4gICAgICBjbGFzcz1cIml0ZW0tdGl0bGVcIlxuICAgICAgaXRlbS1pbmRleD1cIiR7aW5kZXh9XCIgXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgQGNsaWNrPSR7dGhpcy5fb25UaXRsZUNsaWNrfVxuICAgICAgQGtleXVwPSR7dGhpcy5fb25UaXRsZUtleVVwfVxuICAgICAgYXJpYS1jb250cm9scz1cImFjY29yZGlvbi0ke2luZGV4fS1wYW5lbFwiXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiJHt0aGlzLml0ZW1Jc0V4cGFuZGVkKGluZGV4LCBmYWxzZSl9XCI+XG4gICAgICA8c2xvdCBuYW1lPVwiJHtpdGVtLnNsb3ROYW1lfVwiPjwvc2xvdD5cbiAgICA8L2xpPlxuICBgIDogaHRtbGBcbiAgICA8bGkgXG4gICAgICBpZD1cImFjY29yZGlvbi0ke2luZGV4fS1wYW5lbFwiIFxuICAgICAgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIlxuICAgICAgcm9sZT1cInJlZ2lvblwiIFxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWNjb3JkaW9uLSR7aW5kZXh9XCIgXG4gICAgICA/aGlkZGVuPVwiJHshdGhpcy5pdGVtSXNFeHBhbmRlZChpbmRleCwgZmFsc2UpfVwiPlxuICAgICAgPHNsb3QgbmFtZT1cIiR7aXRlbS5zbG90TmFtZX1cIj48L3Nsb3Q+XG4gICAgPC9saT5cbiAgYH1cbmApIH1cbjwvdWw+XG5gO30iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vdWNkbGliLXRoZW1lLW1lc3NhZ2UtYXJlYS50cGwuanNcIjtcblxuaW1wb3J0IGhlYWRpbmdTdHlsZXMgZnJvbSAnQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9faGVhZGluZ3MuY3NzLmpzJztcbmltcG9ydCBtZXNzYWdlU3R5bGVzIGZyb20gJ0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX21lc3NhZ2UtYXJlYS5jc3MuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RsaWJUaGVtZU1lc3NhZ2VBcmVhIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYnV0dG9uVGV4dCA6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2J1dHRvbi10ZXh0J31cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW2hlYWRpbmdTdHlsZXMsIG1lc3NhZ2VTdHlsZXNdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX29uQnRuQ2xpY2tlZCgpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbGljaycpKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkbGliLXRoZW1lLW1lc3NhZ2UtYXJlYScsIFVjZGxpYlRoZW1lTWVzc2FnZUFyZWEpOyIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG48L3N0eWxlPiAgXG5cblxuPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYXJlYVwiPlxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1hcmVhX19jb250ZW50XCIgZGF0YS1jeT1cImNvbnRlbnRcIj5cbiAgICA8aDIgY2xhc3M9XCJtZXNzYWdlLWFyZWFfX3RpdGxlXCI+JHt0aGlzLnRpdGxlfTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYXJlYV9fYm9keVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm1lc3NhZ2UtYXJlYV9fYnV0dG9uXCIgZGF0YS1jeT1cImJ1dHRvblwiIHRpdGxlPVwiJHt0aGlzLmJ1dHRvblRleHR9XCIgQGNsaWNrPVwiJHt0aGlzLl9vbkJ0bkNsaWNrZWR9XCI+JHt0aGlzLmJ1dHRvblRleHR9PC9idXR0b24+XG48L2Rpdj5cblxuXG5gO30iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gd2luZG93LlNoYWRvd1Jvb3QgJiZcbiAgICAod2luZG93LlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc2FmZVRva2VuKSB7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgICAvLyBzdHlsZXNoZWV0cyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gTm90ZSwgaWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZVxuICAgICAgICAvLyBDU1NTdHlsZVNoZWV0IGlzIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgdGhpcy5fc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSBbW2Bjc3NgXV0gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KFN0cmluZyh2YWx1ZSksIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0Q2FjaGUgPSBuZXcgTWFwKCk7XG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBbW0xpdEVsZW1lbnQuc3R5bGVzIHxcbiAqIGBzdHlsZXNgXV0gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsXG4gKiBzdHJpbmcgdmFsdWVzIG1heSBiZSB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgW1tgdW5zYWZlQ1NTYF1dXG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYSB0ZW1wbGF0ZSBzdHJpbmcgcGFydC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgbGV0IHJlc3VsdCA9IGNzc1Jlc3VsdENhY2hlLmdldChjc3NUZXh0KTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3NzUmVzdWx0Q2FjaGUuc2V0KGNzc1RleHQsIChyZXN1bHQgPSBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xudmFyIF9mO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiBbW1JlYWN0aXZlRWxlbWVudF1dLlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gVE9ETyhzb3J2ZWxsKTogQWRkIGEgbGluayB0byB0aGUgZG9jcyBhYm91dCB1c2luZyBkZXYgdi4gcHJvZHVjdGlvbiBtb2RlLlxuICAgIGNvbnNvbGUud2FybihgUnVubmluZyBpbiBkZXYgbW9kZS4gRG8gbm90IHVzZSBpbiBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBsYXRmb3JtIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYSA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluVXNlKSAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBnbG9iYWxUaGlzWydyZWFjdGl2ZUVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2hhZG93IERPTSBpcyBiZWluZyBwb2x5ZmlsbGVkIHZpYSBTaGFkeURPTSBidXQgYCArXG4gICAgICAgICAgICBgdGhlIFxcYHBvbHlmaWxsLXN1cHBvcnRcXGAgbW9kdWxlIGhhcyBub3QgYmVlbiBsb2FkZWQuYCk7XG4gICAgfVxuICAgIHJlcXVlc3RVcGRhdGVUaGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGByZXF1ZXN0VXBkYXRlXFxgIG5vIGxvbmdlciByZXR1cm5zIGEgUHJvbWlzZS5gICtcbiAgICAgICAgICAgICAgICBgVXNlIFxcYHVwZGF0ZUNvbXBsZXRlXFxgIGluc3RlYWQuYCk7XG4gICAgICAgICAgICBpZiAob25mdWxmaWxsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9uZnVsZmlsbGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gJycgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19lbmFibGVDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIFByb3BlcnR5RGVjbGFyYXRpb24gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAqIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIHByb3BlcnR5IG9wdGlvblxuICAgICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICAgKiBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICAgKiAgIHN1cGVyLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAqICAgICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgICAqICAgICAgIHJldHVybiB7XG4gICAgICogICAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAqICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgICB9LFxuICAgICAqICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICAgIH1cbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIFByb3BlcnR5RGVjbGFyYXRpb24gdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGUgYGNyZWF0ZVByb3BlcnR5YC5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gVGhpcyBmb3Ivb2YgaXMgb2sgYmVjYXVzZSBwcm9wS2V5cyBpcyBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU2NyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFN0eWxlcyA9IHRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpO1xuICAgICAgICAvLyBERVYgbW9kZSB3YXJuaW5nc1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZCA9IChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkLiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhpcyB2ZXJzaW9uIG9mIFJlYWN0aXZlRWxlbWVudC5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgU2VlIHRoZSBjaGFuZ2Vsb2cgYXQgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWh0bWwvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvQ0hBTkdFTE9HLm1kYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFtgaW5pdGlhbGl6ZWAsIGByZXF1ZXN0VXBkYXRlSW50ZXJuYWxgLCBgX2dldFVwZGF0ZUNvbXBsZXRlYF0uZm9yRWFjaCgobmFtZSkgPT4gXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBjYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4gKHRoaXMuZW5hYmxlVXBkYXRpbmcgPSByZXMpKTtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAgICAgLy8gYHVwZGF0ZUNvbXBsZXRlYFxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jb25zdHJ1Y3Rvci5faW5pdGlhbGl6ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoaSkgPT4gaSh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fX2NvbnRyb2xsZXJzID0gW10pKS5wdXNoKGNvbnRyb2xsZXIpO1xuICAgICAgICAvLyBJZiBhIGNvbnRyb2xsZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkLFxuICAgICAgICAvLyBjYWxsIGhvc3RDb25uZWN0ZWQuIE5vdGUsIHJlLXVzaW5nIGV4aXN0ZW5jZSBvZiBgcmVuZGVyUm9vdGAgaGVyZVxuICAgICAgICAvLyAod2hpY2ggaXMgc2V0IGluIGNvbm5lY3RlZENhbGxiYWNrKSB0byBhdm9pZCB0aGUgbmVlZCB0byB0cmFjayBhXG4gICAgICAgIC8vIGZpcnN0IGNvbm5lY3RlZCBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIChfYiA9IGNvbnRyb2xsZXIuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gTm90ZSwgaWYgdGhlIGluZGV4T2YgaXMgLTEsIHRoZSA+Pj4gd2lsbCBmbGlwIHRoZSBzaWduIHdoaWNoIG1ha2VzIHRoZVxuICAgICAgICAvLyBzcGxpY2UgZG8gbm90aGluZy5cbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaWNlKHRoaXMuX19jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpID4+PiAwLCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5zZXQocCwgdGhpc1twXSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIHJlbmRlciBhbmQgYnkgZGVmYXVsdFxuICAgICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogY2hpbGROb2RlcywgcmV0dXJuIGB0aGlzYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XG4gICAgICAgIGFkb3B0U3R5bGVzKHJlbmRlclJvb3QsIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgICAqIGVsZW1lbnQgc3R5bGluZywgYW5kIGVuYWJsZXMgdXBkYXRpbmcuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290ID0gdGhpcy5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVVcGRhdGluZyh0cnVlKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgLy8gSWYgd2Ugd2VyZSBkaXNjb25uZWN0ZWQsIHJlLWVuYWJsZSB1cGRhdGluZyBieSByZXNvbHZpbmcgdGhlIHBlbmRpbmdcbiAgICAgICAgLy8gY29ubmVjdGlvbiBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiAodGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24gPSByKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzXG4gICAgICAgICAgICAuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IChfYiA9IChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHtuYW1lfSBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuIFRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbW92ZWQsIGJ1dCBpbiB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiBSZWFjdGl2ZUVsZW1lbnQsIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlID0gKF9jID0gKF9iID0gKF9hID0gY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogbnVsbCkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREUgPyByZXF1ZXN0VXBkYXRlVGhlbmFibGUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGRpc2Nvbm5lY3RlZCwgd2FpdCB1bnRpbCByZS1jb25uZWN0ZWQgdG8gZmx1c2ggYW4gdXBkYXRlXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgICAvLyBJZiBgcGVyZm9ybVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgdGltaW5nIG9mIHVwZGF0ZXMuIElmIHRoaXNcbiAgICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm90ZWN0ZWQgYXN5bmMgcGVyZm9ybVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5wZXJmb3JtVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBQcm9kdWNlIHdhcm5pbmcgaWYgYW55IGNsYXNzIHByb3BlcnRpZXMgYXJlIHNoYWRvd2VkIGJ5IGNsYXNzIGZpZWxkc1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93ZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApICYmICEoKF9hID0gdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhhcyhwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd2VkUHJvcGVydGllcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd2VkUHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogTGluayB0byBkb2NzIGV4cGxhbmF0aW9uIG9mIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHdpbGwgbm90IHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBmaWVsZHM6IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFRvIGZpeCB0aGlzIGlzc3VlLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBlaXRoZXIgaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBvciBhZGp1c3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgeW91ciBjb21waWxlciBzZXR0aW5nczsgZm9yIGV4YW1wbGUsIGZvciBUeXBlU2NyaXB0IHNldCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXGB1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkczogZmFsc2VcXGAgaW4geW91ciBcXGB0c2NvbmZpZy5qc29uXFxgLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQW4gdXBkYXRlIHdhcyByZXF1ZXN0ZWQgKGdlbmVyYWxseSBiZWNhdXNlIGEgcHJvcGVydHkgd2FzIHNldCkgYCArXG4gICAgICAgICAgICAgICAgYGFmdGVyIGFuIHVwZGF0ZSBjb21wbGV0ZWQsIGNhdXNpbmcgYSBuZXcgdXBkYXRlIHRvIGJlIHNjaGVkdWxlZC4gYCArXG4gICAgICAgICAgICAgICAgYFRoaXMgaXMgaW5lZmZpY2llbnQgYW5kIHNob3VsZCBiZSBhdm9pZGVkIHVubGVzcyB0aGUgbmV4dCB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYGNhbiBvbmx5IGJlIHNjaGVkdWxlZCBhcyBhIHNpZGUgZWZmZWN0IG9mIHRoZSBwcmV2aW91cyB1cGRhdGUuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGNvbXBsZXRlZCB1cGRhdGluZy5cbiAgICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgICAqIHVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuIFRoZSBQcm9taXNlIHJlc3VsdCBpcyBgZmFsc2VgIGlmXG4gICAgICogYSBwcm9wZXJ0eSB3YXMgc2V0IGluc2lkZSBgdXBkYXRlZCgpYC4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGFuXG4gICAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUbyBhd2FpdCBhZGRpdGlvbmFsIGFzeW5jaHJvbm91cyB3b3JrLCBvdmVycmlkZSB0aGUgYGdldFVwZGF0ZUNvbXBsZXRlYFxuICAgICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgICAqIGBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgdXBkYXRlIHJlc29sdmVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICAgIGFzeW5jIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAqICAgICAgIGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgYHVwZGF0ZWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZiA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZl0gPSB0cnVlO1xuLyoqXG4gKiBPcHRpb25zIHVzZWQgd2hlbiBjYWxsaW5nIGBhdHRhY2hTaGFkb3dgLiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBjdXN0b21pemVcbiAqIHRoZSBvcHRpb25zIGZvciB0aGUgc2hhZG93Um9vdDsgZm9yIGV4YW1wbGUsIHRvIGNyZWF0ZSBhIGNsb3NlZFxuICogc2hhZG93Um9vdDogYHttb2RlOiAnY2xvc2VkJ31gLlxuICpcbiAqIE5vdGUsIHRoZXNlIG9wdGlvbnMgYXJlIHVzZWQgaW4gYGNyZWF0ZVJlbmRlclJvb3RgLiBJZiB0aGlzIG1ldGhvZFxuICogaXMgY3VzdG9taXplZCwgb3B0aW9ucyBzaG91bGQgYmUgcmVzcGVjdGVkIGlmIHBvc3NpYmxlLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAqL1xuUmVhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3RPcHRpb25zID0geyBtb2RlOiAnb3BlbicgfTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oX2MgPSAoX2IgPSBnbG9iYWxUaGlzKVsncmVhY3RpdmVFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iLCB7IFJlYWN0aXZlRWxlbWVudCB9KTtcbi8vIERldiBtb2RlIHdhcm5pbmdzLi4uXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBEZWZhdWx0IHdhcm5pbmcgc2V0LlxuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVkV2FybmluZ3MgPSBbJ2NoYW5nZS1pbi11cGRhdGUnXTtcbiAgICBjb25zdCBlbnN1cmVPd25XYXJuaW5ncyA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgIGlmICghY3Rvci5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdlbmFibGVkV2FybmluZ3MnLCBjdG9yKSkpIHtcbiAgICAgICAgICAgIGN0b3IuZW5hYmxlZFdhcm5pbmdzID0gY3Rvci5lbmFibGVkV2FybmluZ3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZykgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5wdXNoKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZGlzYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZyk7XG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIFJlYWN0aXZlRWxlbWVudCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKChfZCA9IChfZSA9IGdsb2JhbFRoaXMpWydyZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyddKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAoX2VbJ3JlYWN0aXZlRWxlbWVudFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wLXJjLjEnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuZmllbGRzZXQge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZmFmZDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMjI4NTE7XG59XG5maWVsZHNldCA+IGxlZ2VuZCB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSkgaW5zZXQ7XG4gIGNvbG9yOiAjMTM2MzllO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgb3V0bGluZTogMDtcbn1cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNmZmJmMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuW3R5cGU9dGV4dF0sXG5bdHlwZT1zZWFyY2hdLFxuW3R5cGU9dXJsXSxcblt0eXBlPW51bWJlcl0sXG50ZXh0YXJlYSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmJ1dHRvbixcblt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246Zm9jdXMsXG5bdHlwZT1zdWJtaXRdOmZvY3VzIHtcbiAgY29sb3I6ICMwMGIyZTM7XG59XG5cblt0eXBlPWNoZWNrYm94XSxcblt0eXBlPXJhZGlvXSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMC4zZW07XG59XG5cblt0eXBlPXNlYXJjaF0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbmgxIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxLjkxcmVtO1xufVxuaDE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaDEgYSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmgxIGE6aG92ZXIsIGgxIGE6Zm9jdXMge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuOTRyZW07XG4gIH1cbn1cblxuaDIge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgZm9udC1zaXplOiAxLjYwNTVyZW07XG59XG5oMjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMi4wOTk1cmVtO1xuICB9XG59XG5oMiBhIHtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDIgYTpob3ZlciwgaDIgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMTM2MzllO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMS4zMzI1cmVtO1xufVxuaDM6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNzQyNXJlbTtcbiAgfVxufVxuaDMgYSB7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmgzIGE6aG92ZXIsIGgzIGE6Zm9jdXMge1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMS4wOTJyZW07XG59XG5oNDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5oNCBhIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDQgYTpob3ZlciwgaDQgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS40MjhyZW07XG4gIH1cbn1cblxuaDUge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDFyZW07XG59XG5oNTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5oNSBhIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDUgYTpob3ZlciwgaDUgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMS4yMDdyZW07XG4gIH1cbn1cblxuaDYge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDFyZW07XG59XG5oNjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5oNiBhIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaDYgYTpob3ZlciwgaDYgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICAtLWxpc3QtYXJyb3ctY29sb3I6ICNmZmM1MTk7XG4gIC0tbGlzdC1ib3JkZXJlZC1ib3JkZXI6ICNkYmVhZjc7XG4gIC0tbGlzdC1mYXEtcXVlc3Rpb246ICMxMzYzOWU7XG4gIC0tbGlzdC1mYXEtcXVlc3Rpb24taG92ZXI6ICMwMDExMjQ7XG4gIC0tbGlzdC1mYXEtYTogIzAyMjg1MTtcbiAgLS1saXN0LXBpcGUtcGlwZTogIzRjNGM0YztcbiAgLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZzogMS41cmVtO1xuICAtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZzogMC41cmVtO1xufVxuXG4ubGlzdC0tZmx1c2gsXG4ubGlzdC13cmFwcGVyLS1mbHVzaCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbn1cblxuLmxpc3QtLWFycm93IGxpLFxuLmxpc3Qtd3JhcHBlci0tYXJyb3cgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tYXJyb3cgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYXJyb3cgdWwgbGk6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0wLjEyNWVtIDAgMCAtMS4yNWVtO1xuICBjb2xvcjogdmFyKC0tbGlzdC1hcnJvdy1jb2xvcik7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cbi5saXN0LS1hcnJvdyBsaSBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1hcnJvdyB1bCBsaSBsaTpiZWZvcmUge1xuICBtYXJnaW46IDAgMCAwIC0xLjJlbTtcbiAgY29udGVudDogXCLvhIFcIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG4ubGlzdC0tYXJyb3cgbGkgbGkgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYXJyb3cgdWwgbGkgbGkgbGk6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDAgMCAtMS42ZW07XG4gIGNvbnRlbnQ6IFwi74S4XCI7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjg7XG59XG5cbi5saXN0LS13aGl0ZS1hcnJvdyxcbi5saXN0LXdyYXBwZXItLXdoaXRlLWFycm93IHVsIHtcbiAgLS1saXN0LWFycm93LWNvbG9yOiAjZmZmO1xufVxuLmxpc3QtLXdoaXRlLWFycm93IGxpLFxuLmxpc3Qtd3JhcHBlci0td2hpdGUtYXJyb3cgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0td2hpdGUtYXJyb3cgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0td2hpdGUtYXJyb3cgdWwgbGk6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0wLjEyNWVtIDAgMCAtMS4yNWVtO1xuICBjb2xvcjogdmFyKC0tbGlzdC1hcnJvdy1jb2xvcik7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cbi5saXN0LS13aGl0ZS1hcnJvdyBsaSBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS13aGl0ZS1hcnJvdyB1bCBsaSBsaTpiZWZvcmUge1xuICBtYXJnaW46IDAgMCAwIC0xLjJlbTtcbiAgY29udGVudDogXCLvhIFcIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG4ubGlzdC0td2hpdGUtYXJyb3cgbGkgbGkgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0td2hpdGUtYXJyb3cgdWwgbGkgbGkgbGk6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDAgMCAtMS42ZW07XG4gIGNvbnRlbnQ6IFwi74S4XCI7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjg7XG59XG5cbi5saXN0LS1ib3JkZXJlZCxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWJvcmRlcmVkIHVsLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgdWwge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlzdC1ib3JkZXJlZC1ib3JkZXIpO1xufVxuLmxpc3QtLWJvcmRlcmVkIHVsIGxpOmZpcnN0LWNoaWxkLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbn1cbi5saXN0LS1ib3JkZXJlZCBsaSxcbi5saXN0LS1ib3JkZXJlZCA+IGRpdixcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIGxpLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpIDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saXN0LWJvcmRlcmVkLWJvcmRlcik7XG59XG4ubGlzdC0tYm9yZGVyZWQgbGk6bGFzdC1jaGlsZCxcbi5saXN0LS1ib3JkZXJlZCA+IGRpdjpsYXN0LWNoaWxkLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgbGk6bGFzdC1jaGlsZCxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5saXN0LS1ib3JkZXJlZCBsaSBsaSxcbi5saXN0LS1ib3JkZXJlZCA+IGRpdiBsaSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIGxpIGxpLFxuLmxpc3Qtd3JhcHBlci0tYm9yZGVyZWQgdWwgPiBkaXYgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubGlzdC0tYm9yZGVyZWQgbGkgbGk6YmVmb3JlLFxuLmxpc3QtLWJvcmRlcmVkID4gZGl2IGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIGxpIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsID4gZGl2IGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubGlzdC0tYm9yZGVyZWQgbGk6YmVmb3JlLFxuLmxpc3QtLWJvcmRlcmVkID4gZGl2OmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsID4gZGl2OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIDAgMCAtMS43ZW07XG4gIGNvbG9yOiB2YXIoLS1saXN0LWFycm93LWNvbG9yKTtcbiAgY29udGVudDogXCLvhLhcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi4xO1xufVxuXG4ubGlzdC0tZmFxLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmxpc3QtLWZhcSBsaSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tZmFxID4gbGksXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaSB7XG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZyk7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKG9kZCksXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgdmFyKC0tbGlzdC1mYXEtcXVlc3Rpb24pKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKG9kZCk6aG92ZXIsXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQob2RkKTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgdmFyKC0tbGlzdC1mYXEtcXVlc3Rpb24taG92ZXIpKTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChvZGQpOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKG9kZCk6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlzdC1ib3JkZXJlZC1ib3JkZXIpO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChvZGQpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChvZGQpOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZykpO1xuICBjb250ZW50OiBcIlE6XCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKG9kZCkgPiBwLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKG9kZCkgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChldmVuKSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChldmVuKSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQoZXZlbik6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKGV2ZW4pOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZyk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpKTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCB2YXIoLS1saXN0LWZhcS1hKSk7XG4gIGNvbnRlbnQ6IFwiQTpcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxpc3QtLXBpcGUsXG4ubGlzdC13cmFwcGVyLS1waXBlIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tcGlwZSBsaSxcbi5saXN0LXdyYXBwZXItLXBpcGUgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXBpcGUgbGksXG4ubGlzdC13cmFwcGVyLS1waXBlIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsIHZhcigtLWxpc3QtcGlwZS1waXBlKSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmxpc3QtLXBpcGUgbGk6bGFzdC1jaGlsZCxcbi5saXN0LXdyYXBwZXItLXBpcGUgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4ubGlzdC0tY29tbWVudCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMnJlbTtcbn1cbi5saXN0LS1jb21tZW50IHVsIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpc3QtYm9yZGVyZWQtYm9yZGVyKTtcbn1cbi5saXN0LS1jb21tZW50IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG59XG4ubGlzdC0tY29tbWVudCBsaSxcbi5saXN0LS1jb21tZW50ID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKSAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlzdC1ib3JkZXJlZC1ib3JkZXIpO1xufVxuLmxpc3QtLWNvbW1lbnQgbGk6bGFzdC1jaGlsZCxcbi5saXN0LS1jb21tZW50ID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5saXN0LS1jb21tZW50IGxpIGxpLFxuLmxpc3QtLWNvbW1lbnQgPiBkaXYgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubGlzdC0tY29tbWVudCBsaSBsaTpiZWZvcmUsXG4ubGlzdC0tY29tbWVudCA+IGRpdiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuLmxpc3QtLWNvbW1lbnQgbGk6YmVmb3JlLFxuLmxpc3QtLWNvbW1lbnQgPiBkaXY6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgMCAwIC0xLjdlbTtcbiAgY29sb3I6IHZhcigtLWxpc3QtYXJyb3ctY29sb3IpO1xuICBjb250ZW50OiBcIu+EuFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG59XG5cbi5saXN0LS1zaW1wbGUsXG4ubGlzdC13cmFwcGVyLS1zaW1wbGUgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1zaW1wbGUgbGksXG4ubGlzdC13cmFwcGVyLS1zaW1wbGUgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXNpbXBsZSBsaSxcbi5saXN0LXdyYXBwZXItLXNpbXBsZSB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxpc3QtLXNpbXBsZSBsaSB1bCxcbi5saXN0LXdyYXBwZXItLXNpbXBsZSB1bCBsaSB1bCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubGlzdC0tc2ltcGxlIGEsXG4ubGlzdC13cmFwcGVyLS1zaW1wbGUgdWwgYSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5saXN0LS1maWx0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1maWx0ZXIgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWZpbHRlciBsaSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMCAwLjI1cmVtIDAuNXJlbTtcbn1cblxuLmxpc3QtLW11bHRpbGV2ZWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG59XG4ubGlzdC0tbXVsdGlsZXZlbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG59XG4ubGlzdC0tbXVsdGlsZXZlbCBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG59XG5cbi5saXN0LS1vdXRsaW5lIHtcbiAgbGlzdC1zdHlsZS10eXBlOiB1cHBlci1yb21hbjtcbn1cbi5saXN0LS1vdXRsaW5lIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiB1cHBlci1hbHBoYTtcbn1cbi5saXN0LS1vdXRsaW5lIG9sIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuLmxpc3QtLW91dGxpbmUgb2wgb2wgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWxhdGluO1xufVxuLmxpc3QtLW91dGxpbmUgb2wgb2wgb2wgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xufVxuXG4ubGlzdC0tcmVzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1yZXNldCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0LS1hY2NvcmRpb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5saXN0LS1hY2NvcmRpb24gbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWFjY29yZGlvbiA+IGxpIHtcbiAgcGFkZGluZzogMCAwLjVyZW0gMC41cmVtIHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKTtcbn1cbi5saXN0LS1hY2NvcmRpb24gPiBsaTpudGgtY2hpbGQob2RkKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NlMGYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODUxO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4ubGlzdC0tYWNjb3JkaW9uID4gbGk6bnRoLWNoaWxkKG9kZCk6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0wLjE1ZW0gMCAwIC0xLjQzZW07XG4gIGNvbG9yOiB2YXIoLS1saXN0LWFycm93LWNvbG9yKTtcbiAgY29udGVudDogXCLvgZRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuLmxpc3QtLWFjY29yZGlvbiA+IGxpOm50aC1jaGlsZChvZGQpID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0LS1hY2NvcmRpb24gPiBsaTpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjNmYTtcbiAgY29sb3I6ICMwMDA7XG59XG4ubGlzdC0tYWNjb3JkaW9uIC5hY3RpdmU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ubGlzdC0tZG93bmxvYWQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1kb3dubG9hZCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tZG93bmxvYWQgYSB7XG4gIGNvbG9yOiAjMTM2MzllO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saXN0LS1kb3dubG9hZCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMGIyZTM7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1lc3NhZ2UtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWVzc2FnZS1hcmVhIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xuICB9XG59XG4ubWVzc2FnZS1hcmVhIGEge1xuICBjb2xvcjogIzAyMjg1MTtcbn1cbi5tZXNzYWdlLWFyZWEgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVzc2FnZS1hcmVhLS1jbG9zZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMS44NXJlbTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWEtLWNsb3NlZCB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYS0tY2xvc2VkIC5tZXNzYWdlLWFyZWFfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWVzc2FnZS1hcmVhX190aXRsZSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5tZXNzYWdlLWFyZWFfX2JvZHkge1xuICBjb2xvcjogIzAyMjg1MTtcbn1cbi5tZXNzYWdlLWFyZWFfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1cmVtO1xuICByaWdodDogMC4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMC4xM3JlbSAwIDAgMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWVzc2FnZS1hcmVhX19idXR0b24ge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb250ZW50OiBcIu+Bl1wiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWFfX2J1dHRvbjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuLm1lc3NhZ2UtYXJlYS0tY2xvc2VkIC5tZXNzYWdlLWFyZWFfX2J1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EulwiO1xufVxuLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWVzc2FnZS1hcmVhX19idXR0b246Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDIyODUxO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODUxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4uYWxlcnQge1xuICBtYXJnaW46IDAgMCAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmNGZiO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmFsZXJ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5hbGVydCB7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAuYWxlcnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gIH1cbn1cbi5sLWNvbnRhaW5lciAuYWxlcnQge1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYWxlcnQtLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlZGNhO1xuICBjb2xvcjogIzAwM2E1ZDtcbn1cbi5hbGVydC0td2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYxOTk7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuLmFsZXJ0LS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYzI7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuLmFsZXJ0LS1mbHVzaCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWxlcnQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWxlcnQgLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5hbGVydCBsaSAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5zZWFyY2gtZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjRkMjtcbn1cbi5zZWFyY2gtZm9ybV9faW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uc2VhcmNoLWZvcm1fX3N1Ym1pdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDFlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIuMWVtO1xuICBoZWlnaHQ6IDIuMWVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDIuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM2MzllO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZmJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHRleHQtaW5kZW50OiAtMC4yZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5zZWFyY2gtZm9ybV9fc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYWJkZDtcbn1cbi5zZWFyY2gtZm9ybV9fc3VibWl0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgY29sb3I6ICNmZmZiZWQ7XG59XG4uc2VhcmNoLWZvcm1fX2lucHV0OmZvY3VzLCAuc2VhcmNoLWZvcm1fX3N1Ym1pdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMDIyODUxO1xuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLnUtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4udS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnUtaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udS1oaWRkZW4tLXZpc3VhbGx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLnUtc2hvd24tLXZpc3VhbGx5IHtcbiAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY2xpcDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnUtaGlkZS10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1pbmRlbnQ6IDExMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLyohIG5vcm1hbGl6ZS1zY3NzIHwgTUlUL0dQTHYyIExpY2Vuc2UgfCBiaXQubHkvbm9ybWFsaXplLXNjc3MgKi9cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXG4gKiAgICBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5hcnRpY2xlLFxuYXNpZGUsXG5mb290ZXIsXG5oZWFkZXIsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmZpZ2NhcHRpb24sXG5maWd1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXG4gKi9cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAxICovXG4gIGhlaWdodDogMDtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxuICovXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qIExpbmtzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXG4gKi9cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xuICAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAvKiAyICovXG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFwiZW1cIiBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxuICovXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxuICovXG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcInN1YlwiIGFuZCBcInN1cFwiIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuYXVkaW8sXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxuICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXG4gKi9cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqL1xuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICovXG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIFwiYXVkaW9cIiBhbmQgXCJ2aWRlb1wiXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5odG1sIFt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDIgKi9cbn1cblxuYnV0dG9uLFxuW3R5cGU9YnV0dG9uXSxcblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0ge1xuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG4gIC8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xufVxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5pbnB1dCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC0uXG4gKi9cblt0eXBlPWNoZWNrYm94XSxcblt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgYW5kIGNhbmNlbCBidXR0b25zIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cbn1cblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sIFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXCJpbmhlcml0XCIgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXCJmaWVsZHNldFwiIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXCJmaWVsZHNldFwiIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMyAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogMiAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAxICovXG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXG4gKi9cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFNjcmlwdGluZ1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmNhbnZhcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cbiAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRkZW5cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cbiAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5gOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbnZhciBfZjtcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIFtbYExpdEVsZW1lbnRgXV0gYmFzZSBjbGFzcyBhbmRcbiAqIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IFtbYExpdEVsZW1lbnRgXV0gYW5kIFtbYGh0bWxgXV0gZnJvbSB0aGlzIG1vZHVsZSB0byBjcmVhdGUgYVxuICogY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyBbW2BSZWFjdGl2ZUVsZW1lbnRgXV0gYW5kIGFkZHMgbGl0LWh0bWwgdGVtcGxhdGluZy5cbiAqIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvIGJ1aWxkXG4gKiB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oKF9hID0gKF9mID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRWZXJzaW9ucyddKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2ZbJ2xpdEVsZW1lbnRWZXJzaW9ucyddID0gW10pKS5wdXNoKCczLjAuMC1yYy4xJyk7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSBbW2Bwcm9wZXJ0aWVzYF1dIHByb3BlcnR5IG9yIHRoZSBbW2Bwcm9wZXJ0eWBdXSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFRPRE8oa3NjaGFhZik6IENvbnNpZGVyIGRlYm91bmNpbmcgZGlyZWN0aXZlIGRpc2Nvbm5lY3Rpb24gc28gZWxlbWVudCBtb3Zlc1xuICAgIC8vIGRvIG5vdCB0aHJhc2ggZGlyZWN0aXZlIGNhbGxiYWNrc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL2xpdC1odG1sL2lzc3Vlcy8xNDU3XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbWF5IHJldHVyblxuICAgICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgQGxpdC9yZWFjdGl2ZS1lbGVtZW50IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG5MaXRFbGVtZW50Ll8kbGl0RWxlbWVudCQgPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9jID0gKF9iID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCddKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChfYiwgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZSA9IChfZCA9IGdsb2JhbFRoaXMpWydsaXRFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYWxsKF9kLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgTGl0RWxlbWVudFsnZmluYWxpemUnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3QgZmluYWxpemVkID0gUmVhY3RpdmVFbGVtZW50LmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICghZmluYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgY29uc3Qgd2FyblJlbW92ZWQgPSAob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQuIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LiBgXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogYWRkIGxpbmsgdG8gY2hhbmdlbG9nIHdoZW4gbG9jYXRpb24gaGFzIHN0YWJpbGl6ZWQuXG4gICAgICAgICAgICAgICAgLy8gKyBTZWUgdGhlIGNoYW5nZWxvZyBhdCBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9saXQtaHRtbC9ibG9iL21haW4vcGFja2FnZXMvbGl0LWVsZW1lbnQvQ0hBTkdFTE9HLm1kYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFtgcmVuZGVyYCwgYGdldFN0eWxlc2BdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLCBuYW1lKSk7XG4gICAgICAgIFtgYWRvcHRTdHlsZXNgXS5mb3JFYWNoKChuYW1lKSA9PiBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgX86mIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfzqYgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbnZhciBfZjtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyA9IHRydWU7XG5jb25zdCBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCA9IHRydWU7XG5pZiAoREVWX01PREUpIHtcbiAgICBjb25zb2xlLndhcm4oJ2xpdC1odG1sIGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hJyk7XG59XG5jb25zdCB3cmFwID0gRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggJiYgKChfYSA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluVXNlKSAmJlxuICAgICgoX2IgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ub1BhdGNoKSA9PT0gdHJ1ZVxuICAgID8gd2luZG93LlNoYWR5RE9NLndyYXBcbiAgICA6IChub2RlKSA9PiBub2RlO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsVGhpcy50cnVzdGVkVHlwZXM7XG4vKipcbiAqIE91ciBUcnVzdGVkVHlwZVBvbGljeSBmb3IgSFRNTCB3aGljaCBpcyBkZWNsYXJlZCB1c2luZyB0aGUgaHRtbCB0ZW1wbGF0ZVxuICogdGFnIGZ1bmN0aW9uLlxuICpcbiAqIFRoYXQgSFRNTCBpcyBhIGRldmVsb3Blci1hdXRob3JlZCBjb25zdGFudCwgYW5kIGlzIHBhcnNlZCB3aXRoIGlubmVySFRNTFxuICogYmVmb3JlIGFueSB1bnRydXN0ZWQgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIG1peGVkIGluLiBUaGVyZWZvciBpdCBpc1xuICogY29uc2lkZXJlZCBzYWZlIGJ5IGNvbnN0cnVjdGlvbi5cbiAqL1xuY29uc3QgcG9saWN5ID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdsaXQtaHRtbCcsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGlkZW50aXR5RnVuY3Rpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3Qgbm9vcFNhbml0aXplciA9IChfbm9kZSwgX25hbWUsIF90eXBlKSA9PiBpZGVudGl0eUZ1bmN0aW9uO1xuLyoqIFNldHMgdGhlIGdsb2JhbCBzYW5pdGl6ZXIgZmFjdG9yeS4gKi9cbmNvbnN0IHNldFNhbml0aXplciA9IChuZXdTYW5pdGl6ZXIpID0+IHtcbiAgICBpZiAoIUVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGxpdC1odG1sIHNlY3VyaXR5IHBvbGljeS5gICtcbiAgICAgICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYCk7XG4gICAgfVxuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5ld1Nhbml0aXplcjtcbn07XG4vKipcbiAqIE9ubHkgdXNlZCBpbiBpbnRlcm5hbCB0ZXN0cywgbm90IGEgcGFydCBvZiB0aGUgcHVibGljIEFQSS5cbiAqL1xuY29uc3QgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gKCkgPT4ge1xuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG59O1xuY29uc3QgY3JlYXRlU2FuaXRpemVyID0gKG5vZGUsIG5hbWUsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKG5vZGUsIG5hbWUsIHR5cGUpO1xufTtcbi8vIEFkZGVkIHRvIGFuIGF0dHJpYnV0ZSBuYW1lIHRvIG1hcmsgdGhlIGF0dHJpYnV0ZSBhcyBib3VuZCBzbyB3ZSBjYW4gZmluZFxuLy8gaXQgZWFzaWx5LlxuY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDkpfSRgO1xuLy8gU3RyaW5nIHVzZWQgdG8gdGVsbCBpZiBhIGNvbW1lbnQgaXMgYSBtYXJrZXIgY29tbWVudFxuY29uc3QgbWFya2VyTWF0Y2ggPSAnPycgKyBtYXJrZXI7XG4vLyBUZXh0IHVzZWQgdG8gaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIgbm9kZS4gV2UgdXNlIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbi8vIHN5bnRheCBiZWNhdXNlIGl0J3Mgc2xpZ2h0bHkgc21hbGxlciwgYnV0IHBhcnNlcyBhcyBhIGNvbW1lbnQgbm9kZS5cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCR7bWFya2VyTWF0Y2h9PmA7XG5jb25zdCBkID0gZG9jdW1lbnQ7XG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKHYgPSAnJykgPT4gZC5jcmVhdGVDb21tZW50KHYpO1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0eXBlb2YgKChfYSA9IHZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbU3ltYm9sLml0ZXJhdG9yXSkgPT09ICdmdW5jdGlvbic7XG59O1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAoXyRsaXRUeXBlJCkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gKHtcbiAgICBfJGxpdFR5cGUkLFxuICAgIHN0cmluZ3MsXG4gICAgdmFsdWVzLFxufSk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSB0YWcoU1ZHX1JFU1VMVCk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSBTeW1ib2wuZm9yKCdsaXQtbm9DaGFuZ2UnKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBDaGlsZFBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0gU3ltYm9sLmZvcignbGl0LW5vdGhpbmcnKTtcbi8qKlxuICogVGhlIGNhY2hlIG9mIHByZXBhcmVkIHRlbXBsYXRlcywga2V5ZWQgYnkgdGhlIHRhZ2dlZCBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICogYW5kIF9ub3RfIGFjY291bnRpbmcgZm9yIHRoZSBzcGVjaWZpYyB0ZW1wbGF0ZSB0YWcgdXNlZC4gVGhpcyBtZWFucyB0aGF0XG4gKiB0ZW1wbGF0ZSB0YWdzIGNhbm5vdCBiZSBkeW5hbWljIC0gdGhlIG11c3Qgc3RhdGljYWxseSBiZSBvbmUgb2YgaHRtbCwgc3ZnLFxuICogb3IgYXR0ci4gVGhpcyByZXN0cmljdGlvbiBzaW1wbGlmaWVzIHRoZSBjYWNoZSBsb29rdXAsIHdoaWNoIGlzIG9uIHRoZSBob3RcbiAqIHBhdGggZm9yIHJlbmRlcmluZy5cbiAqL1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJlbmRlcnMgYSB2YWx1ZSwgdXN1YWxseSBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LCB0byB0aGUgY29udGFpbmVyLlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gY29udGFpbmVyXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHZhbHVlLCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgcGFydCA9IHBhcnRPd25lck5vZGUuXyRsaXRQYXJ0JDtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBwYXJ0T3duZXJOb2RlLl8kbGl0UGFydCQgPSBwYXJ0ID0gbmV3IENoaWxkUGFydChjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBlbmROb2RlKSwgZW5kTm9kZSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcGFydC5fJHNldFZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcGFydDtcbn07XG5pZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgcmVuZGVyLnNldFNhbml0aXplciA9IHNldFNhbml0aXplcjtcbiAgICByZW5kZXIuY3JlYXRlU2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyO1xuICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICByZW5kZXIuX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbmNvbnN0IHdhbGtlciA9IGQuY3JlYXRlVHJlZVdhbGtlcihkLCAxMjkgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR9ICovLCBudWxsLCBmYWxzZSk7XG5sZXQgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlXG4gKiBgQ2hpbGRQYXJ0YHMgYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGR5bmFtaWMgdGFnIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgICByZXR1cm4gW1xuICAgICAgICBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwb2xpY3kuY3JlYXRlSFRNTChodG1sUmVzdWx0KVxuICAgICAgICAgICAgOiBodG1sUmVzdWx0LFxuICAgICAgICBhdHRyTmFtZXMsXG4gICAgXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoeyBzdHJpbmdzLCBfJGxpdFR5cGUkOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IGF0dHJOYW1lSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW2h0bWwsIGF0dHJOYW1lc10gPSBnZXRUZW1wbGF0ZUh0bWwoc3RyaW5ncywgdHlwZSk7XG4gICAgICAgIHRoaXMuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KGh0bWwsIG9wdGlvbnMpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgIC8vIFJlcGFyZW50IFNWRyBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICAgICAgaWYgKHR5cGUgPT09IFNWR19SRVNVTFQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKC4uLnN2Z0VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FsayB0aGUgdGVtcGxhdGUgdG8gZmluZCBiaW5kaW5nIG1hcmtlcnMgYW5kIGNyZWF0ZSBUZW1wbGF0ZVBhcnRzXG4gICAgICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIGluIHNvbWUgYnJvd3NlcnMgKFRPRE86IGNoZWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbaV0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6ICsrbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbbGFzdEluZGV4XSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBsYXRmb3JtU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGh0bWwsIF9vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCB2YWx1ZSwgcGFyZW50ID0gcGFydCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgX2Q7XG4gICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgdmFsdWUgaXMgZXhwbGljaXRseSBub0NoYW5nZS4gTm90ZSwgdGhpcyBtZWFucyBhbnlcbiAgICAvLyBuZXN0ZWQgZGlyZWN0aXZlIGlzIHN0aWxsIGF0dGFjaGVkIGFuZCBpcyBub3QgcnVuLlxuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpcmVjdGl2ZSA9IGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoX2EgPSBwYXJlbnQuX19kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYXR0cmlidXRlSW5kZXhdIDogcGFyZW50Ll9fZGlyZWN0aXZlO1xuICAgIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHZhbHVlLl8kbGl0RGlyZWN0aXZlJDtcbiAgICBpZiAoKGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5jb25zdHJ1Y3RvcikgIT09IG5leHREaXJlY3RpdmVDb25zdHJ1Y3Rvcikge1xuICAgICAgICAoX2IgPSBjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmUuXyRzZXREaXJlY3RpdmVDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGN1cnJlbnREaXJlY3RpdmUsIGZhbHNlKTtcbiAgICAgICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IG5ldyBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IocGFydCk7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKChfYyA9IChfZCA9IHBhcmVudCkuX19kaXJlY3RpdmVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoX2QuX19kaXJlY3RpdmVzID0gW10pKVthdHRyaWJ1dGVJbmRleF0gPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgc2VwYXJhdGUgZnJvbSB0aGUgY29uc3RydWN0b3IgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVybiBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBob2xkIG9udG8gaXQgd2l0aCBhbiBpbnN0YW5jZSBmaWVsZC5cbiAgICBfY2xvbmUob3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jcmVhdGlvblNjb3BlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkKS5pbXBvcnROb2RlKGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBmcmFnbWVudDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG4gICAgICAgIHdoaWxlICh0ZW1wbGF0ZVBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdGVtcGxhdGVQYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KG5vZGUsIG5vZGUubmV4dFNpYmxpbmcsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyB0ZW1wbGF0ZVBhcnQuY3Rvcihub2RlLCB0ZW1wbGF0ZVBhcnQubmFtZSwgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gRUxFTUVOVF9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gKHRlbXBsYXRlUGFydCA9PT0gbnVsbCB8fCB0ZW1wbGF0ZVBhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlUGFydC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBDSElMRF9QQVJUO1xuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyB3aWxsIGJlIHBhdGNoZWQgb250byBDaGlsZFBhcnRzIHdoZW4gcmVxdWlyZWQgYnlcbiAgICAgICAgLy8gQXN5bmNEaXJlY3RpdmVcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29ubmVjdGlvbiBzdGF0ZSBmb3IgYW55IGBBc3luY0RpcmVjdGl2ZXNgIGNvbnRhaW5lZFxuICAgICAqIHdpdGhpbiB0aGlzIHBhcnQgYW5kIHJ1bnMgdGhlaXIgYGRpc2Nvbm5lY3RlZGAgb3IgYHJlY29ubmVjdGVkYCwgYWNjb3JkaW5nXG4gICAgICogdG8gdGhlIGBpc0Nvbm5lY3RlZGAgYXJndW1lbnQuXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fJHNldENoaWxkUGFydENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vZGUgaW50byB3aGljaCB0aGUgcGFydCByZW5kZXJzIGl0cyBjb250ZW50LlxuICAgICAqXG4gICAgICogQSBDaGlsZFBhcnQncyBjb250ZW50IGNvbnNpc3RzIG9mIGEgcmFuZ2Ugb2YgYWRqYWNlbnQgY2hpbGQgbm9kZXMgb2ZcbiAgICAgKiBgLnBhcmVudE5vZGVgLCBwb3NzaWJseSBib3JkZXJlZCBieSAnbWFya2VyIG5vZGVzJyAoYC5zdGFydE5vZGVgIGFuZFxuICAgICAqIGAuZW5kTm9kZWApLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCBhcmUgbm9uLW51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGJldHdlZW4gYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgLCBleGNsdXNpdmVseS5cbiAgICAgKlxuICAgICAqIC0gSWYgYC5zdGFydE5vZGVgIGlzIG5vbi1udWxsIGJ1dCBgLmVuZE5vZGVgIGlzIG51bGwsIHRoZW4gdGhlIHBhcnQnc1xuICAgICAqIGNvbnRlbnQgY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGZvbGxvd2luZyBgLnN0YXJ0Tm9kZWAsIHVwIHRvIGFuZFxuICAgICAqIGluY2x1ZGluZyB0aGUgbGFzdCBjaGlsZCBvZiBgLnBhcmVudE5vZGVgLiBJZiBgLmVuZE5vZGVgIGlzIG5vbi1udWxsLCB0aGVuXG4gICAgICogYC5zdGFydE5vZGVgIHdpbGwgYWx3YXlzIGJlIG5vbi1udWxsLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuZW5kTm9kZWAgYW5kIGAuc3RhcnROb2RlYCBhcmUgbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgYC5wYXJlbnROb2RlYC5cbiAgICAgKi9cbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyBsZWFkaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IHN0YXJ0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRzdGFydE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgdHJhaWxpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgZW5kTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbmROb2RlO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gTm9uLXJlbmRlcmluZyBjaGlsZCB2YWx1ZXMuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlc2UgZG8gbm90IHJlbmRlclxuICAgICAgICAgICAgLy8gZW1wdHkgdGV4dCBub2RlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBwcmV2ZW50aW5nIGRlZmF1bHQgPHNsb3Q+XG4gICAgICAgICAgICAvLyBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuXyRsaXRUeXBlJCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubm9kZVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUsIHJlZiA9IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQobmV3IFRleHQoJy8qIGxpdC1odG1sIHdpbGwgbm90IHdyaXRlICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1RlbXBsYXRlUmVzdWx0cyB0byBzY3JpcHRzIGFuZCBzdHlsZXMgKi8nKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLyAmJlxuICAgICAgICAgICAgKHRoaXMuXyRlbmROb2RlID09PSBudWxsXG4gICAgICAgICAgICAgICAgPyB3cmFwKG5vZGUpLm5leHRTaWJsaW5nID09PSBudWxsXG4gICAgICAgICAgICAgICAgOiBub2RlID09PSB3cmFwKHRoaXMuXyRlbmROb2RlKS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKG5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudHguXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKHRleHROb2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfY29tbWl0VGVtcGxhdGVSZXN1bHQocmVzdWx0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIF8kbGl0VHlwZSQgfSA9IHJlc3VsdDtcbiAgICAgICAgLy8gSWYgJGxpdFR5cGUkIGlzIGEgbnVtYmVyLCByZXN1bHQgaXMgYSBwbGFpbiBUZW1wbGF0ZVJlc3VsdCBhbmQgd2UgZ2V0XG4gICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSBmcm9tIHRoZSB0ZW1wbGF0ZSBjYWNoZS4gSWYgbm90LCByZXN1bHQgaXMgYVxuICAgICAgICAvLyBDb21waWxlZFRlbXBsYXRlUmVzdWx0IGFuZCBfJGxpdFR5cGUkIGlzIGEgQ29tcGlsZWRUZW1wbGF0ZSBhbmQgd2UgbmVlZFxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIDx0ZW1wbGF0ZT4gZWxlbWVudCB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgaXQuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdHlwZW9mIF8kbGl0VHlwZSQgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IHRoaXMuXyRnZXRUZW1wbGF0ZShyZXN1bHQpXG4gICAgICAgICAgICA6IChfJGxpdFR5cGUkLmVsID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAoXyRsaXRUeXBlJC5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoXyRsaXRUeXBlJC5oLCB0aGlzLm9wdGlvbnMpKSxcbiAgICAgICAgICAgICAgICBfJGxpdFR5cGUkKTtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJHRlbXBsYXRlKSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUGxhdGZvcm1TdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kZ2V0VGVtcGxhdGUocmVzdWx0KSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCAodGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIENoaWxkUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgQ2hpbGRQYXJ0cy5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHRlc3QgcGVyZiBpbXBhY3Qgb2YgYWx3YXlzIGNyZWF0aW5nIHR3byBwYXJ0c1xuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWh0bWwvaXNzdWVzLzEyNjZcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaCgoaXRlbVBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoaXRlbVBhcnQgJiYgd3JhcChpdGVtUGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBub2RlcyBjb250YWluZWQgd2l0aGluIHRoaXMgUGFydCBmcm9tIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnQgU3RhcnQgbm9kZSB0byBjbGVhciBmcm9tLCBmb3IgY2xlYXJpbmcgYSBzdWJzZXQgb2YgdGhlIHBhcnQnc1xuICAgICAqICAgICBET00gKHVzZWQgd2hlbiB0cnVuY2F0aW5nIGl0ZXJhYmxlcylcbiAgICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgICAqICAgICB3aGljaCBDaGlsZFBhcnRzIGFyZSBiZWluZyByZW1vdmVkLCB1c2VkIGZvciBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXMgaW5cbiAgICAgKiAgICAgdGhvc2UgUGFydHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJGNsZWFyKHN0YXJ0ID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZywgZnJvbSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQVRUUklCVVRFX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuX3NldERpcmVjdGl2ZUNvbm5lY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChub3RoaW5nKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcnQgYnkgcmVzb2x2aW5nIHRoZSB2YWx1ZSBmcm9tIHBvc3NpYmx5IG11bHRpcGxlXG4gICAgICogdmFsdWVzIGFuZCBzdGF0aWMgc3RyaW5ncyBhbmQgY29tbWl0dGluZyBpdCB0byB0aGUgRE9NLlxuICAgICAqIElmIHRoaXMgcGFydCBpcyBzaW5nbGUtdmFsdWVkLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHNpbmdsZSB2YWx1ZSBhcmd1bWVudC4gSWYgdGhpcyBwYXJ0IGlzXG4gICAgICogbXVsdGktdmFsdWUsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIGRlZmluZWQsIGFuZCB0aGUgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIHdpdGggdGhlIHZhbHVlIGFycmF5IG9mIHRoZSBwYXJ0J3Mgb3duaW5nIFRlbXBsYXRlSW5zdGFuY2UsIGFuZCBhbiBvZmZzZXRcbiAgICAgKiBpbnRvIHRoZSB2YWx1ZSBhcnJheSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHJlYWQuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb3ZlcmxvYWRlZCB0aGlzIHdheSB0byBlbGltaW5hdGUgc2hvcnQtbGl2ZWQgYXJyYXkgc2xpY2VzXG4gICAgICogb2YgdGhlIHRlbXBsYXRlIGluc3RhbmNlIHZhbHVlcywgYW5kIGFsbG93IGEgZmFzdC1wYXRoIGZvciBzaW5nbGUtdmFsdWVkXG4gICAgICogcGFydHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHBhcnQgdmFsdWUsIG9yIGFuIGFycmF5IG9mIHZhbHVlcyBmb3IgbXVsdGktdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIHZhbHVlSW5kZXggdGhlIGluZGV4IHRvIHN0YXJ0IHJlYWRpbmcgdmFsdWVzIGZyb20uIGB1bmRlZmluZWRgIGZvclxuICAgICAqICAgc2luZ2xlLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSBub0NvbW1pdCBjYXVzZXMgdGhlIHBhcnQgdG8gbm90IGNvbW1pdCBpdHMgdmFsdWUgdG8gdGhlIERPTS4gVXNlZFxuICAgICAqICAgaW4gaHlkcmF0aW9uIHRvIHByaW1lIGF0dHJpYnV0ZSBwYXJ0cyB3aXRoIHRoZWlyIGZpcnN0LXJlbmRlcmVkIHZhbHVlLFxuICAgICAqICAgYnV0IG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSwgYW5kIGluIFNTUiB0byBuby1vcCB0aGUgRE9NIG9wZXJhdGlvbiBhbmRcbiAgICAgKiAgIGNhcHR1cmUgdGhlIHZhbHVlIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcywgdmFsdWVJbmRleCwgbm9Db21taXQpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgLy8gV2hldGhlciBhbnkgb2YgdGhlIHZhbHVlcyBoYXMgY2hhbmdlZCwgZm9yIGRpcnR5LWNoZWNraW5nXG4gICAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0cmluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gU2luZ2xlLXZhbHVlIGJpbmRpbmcgY2FzZVxuICAgICAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQsIDApO1xuICAgICAgICAgICAgY2hhbmdlID1cbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJbnRlcnBvbGF0aW9uIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpbmdzWzBdO1xuICAgICAgICAgICAgbGV0IGksIHY7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZXNbdmFsdWVJbmRleCArIGldLCBkaXJlY3RpdmVQYXJlbnQsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlci1wcm92aWRlZCB2YWx1ZSBpcyBgbm9DaGFuZ2VgLCB1c2UgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYW5nZSB8fCAoY2hhbmdlID0gIWlzUHJpbWl0aXZlKHYpIHx8IHYgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAodiAhPT0gbnVsbCAmJiB2ICE9PSB2b2lkIDAgPyB2IDogJycpICsgc3RyaW5nc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgIW5vQ29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAnYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgIH1cbn1cbmNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRXZlbnRQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEVWRU5UX1BBUlQ7XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPSAoX2EgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQsIDApKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBub3RoaW5nO1xuICAgICAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90aGluZyBvciBhbnkgb3B0aW9ucyBjaGFuZ2Ugd2UgaGF2ZSB0byByZW1vdmUgdGhlXG4gICAgICAgIC8vIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSAobmV3TGlzdGVuZXIgPT09IG5vdGhpbmcgJiYgb2xkTGlzdGVuZXIgIT09IG5vdGhpbmcpIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5jYXB0dXJlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5wYXNzaXZlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBub3RoaW5nIGFuZCB3ZSByZW1vdmVkIHRoZSBsaXN0ZW5lciwgd2UgaGF2ZVxuICAgICAgICAvLyB0byBhZGQgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgKG9sZExpc3RlbmVyID09PSBub3RoaW5nIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBkbyB3ZSBuZWVkIHRvIGRlZmF1bHQgdG8gdGhpcy5lbGVtZW50P1xuICAgICAgICAgICAgLy8gSXQnbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBlLmN1cnJlbnRUYXJnZXRgLlxuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmNhbGwoKF9iID0gKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgRWxlbWVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnR5cGUgPSBFTEVNRU5UX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5ldGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9zZXREaXJlY3RpdmVDb25uZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqMgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OoyA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gaHlkcmF0ZVxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbihfZCA9IChfYyA9IGdsb2JhbFRoaXMpWydsaXRIdG1sUGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2UgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0SHRtbFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IChfZlsnbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzIuMC4wLXJjLjInKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImltcG9ydFwibGl0LWh0bWxcIjtpbXBvcnRcIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vZWxlbWVudHMvdWNkbGliLXRoZW1lLWFsZXJ0L3VjZGxpYi10aGVtZS1hbGVydCc7XG5pbXBvcnQgJy4uL2VsZW1lbnRzL3VjZGxpYi10aGVtZS1tZXNzYWdlLWFyZWEvdWNkbGliLXRoZW1lLW1lc3NhZ2UtYXJlYSc7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2RsaWItdGhlbWUtbGlzdC1hY2NvcmRpb24vdWNkbGliLXRoZW1lLWxpc3QtYWNjb3JkaW9uXCI7XG5pbXBvcnQgXCIuLi9lbGVtZW50cy91Y2RsaWItdGhlbWUtZm9ybS1zZWFyY2gvdWNkbGliLXRoZW1lLWZvcm0tc2VhcmNoXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==