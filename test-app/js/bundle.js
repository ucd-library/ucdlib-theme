/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../elements/ucd-theme-alert/ucd-theme-alert.js":
/*!******************************************************!*\
  !*** ../elements/ucd-theme-alert/ucd-theme-alert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.js":
/*!**********************************************************************!*\
  !*** ../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UcdThemeImageGallery)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_theme_image_gallery_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucd-theme-image-gallery.tpl.js */ "../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.tpl.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3__);






class UcdThemeImageGallery extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

  static get properties() {
    return {
      modifier: {type: String},
      _images: {attribute: false, state: true},
      
    };
  }

  static get styles() {
    return (0,_ucd_theme_image_gallery_tpl_js__WEBPACK_IMPORTED_MODULE_1__.styles)();
  }

  constructor() {
    super();
    this.render = _ucd_theme_image_gallery_tpl_js__WEBPACK_IMPORTED_MODULE_1__.render.bind(this);

    this.modifier = "";
    this._images = [];
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
   * @method _onChildListMutation
   * @description Attached to self, responds to changes in children
   */
  _onChildListMutation() {
    let images = [];
    Array.from(this.children).forEach((child, index) => {
      if (child.tagName !== "IMG")  return;
      child.setAttribute('slot', 'image-index-'+index);

      const msrc = child.getAttribute('src');
      const title = child.getAttribute('title');
      const bigImage = {
        src: this._getImgAttr(child, 'src'),
        width: this._getImgAttr(child, 'width'),
        height: this._getImgAttr(child, 'height'),
      };

      images.push({
        child,
        title,
        bigImage,
        msrc,
        imageIndex: index,
        slotName:'image-index-'+index});
    });

    this._images = images;
    console.log(images);
  }

  _onClick(e){
    e.preventDefault();
    console.log(e);
    this.openLightBox(e.target.getAttribute('image-index'));


  }

  _getImgAttr(ele, attr){
    return ele.getAttribute(`big-${attr}`) ? ele.getAttribute(`big-${attr}`) : ele.getAttribute(attr);
  }

  openLightBox(index=0){
    const dialog = this.shadowRoot.getElementById('light-box');
    const items = this._images.map(image => {
      return {
        src: image.bigImage.src,
        w: image.bigImage.width,
        h: image.bigImage.height,
        title: image.title,
        msrc: image.msrc
      };
    });

    const thumbnail = this._images[index].child;
    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
    const rect = thumbnail.getBoundingClientRect();
    const options = {
      index,
      bgOpacity: 0.95,
      showHideOpacity: true,
      shareEl: false,
      getThumbBoundsFn() {
        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
      }
    };

    console.log(dialog, items, options);
    const lightBox = new (photoswipe__WEBPACK_IMPORTED_MODULE_2___default())(dialog, (photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_3___default()), items, options);
    lightBox.init();
  }

  /**
   * @method _styleModifer
   * @description Converts modifier property into a class string
   * @returns {String} Class modifiers for gallery component
   */
  _styleModifer(){
    if ( !this.modifier ) return "";

    let classes = this.modifier.split(" ").map(m => `gallery--${m}`);
    classes = classes.join(" ");
    return classes;
  }

}

customElements.define('ucd-theme-image-gallery', UcdThemeImageGallery);

/***/ }),

/***/ "../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.tpl.js":
/*!**************************************************************************!*\
  !*** ../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.tpl.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _ucd_lib_theme_sass_1_base_html_media_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ucd-lib/theme-sass/1_base_html/_media.css.js */ "./node_modules/@ucd-lib/theme-sass/1_base_html/_media.css.js");
/* harmony import */ var _ucd_lib_theme_sass_4_component_gallery_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/theme-sass/4_component/_gallery.css.js */ "./node_modules/@ucd-lib/theme-sass/4_component/_gallery.css.js");
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ "./node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! photoswipe/dist/default-skin/default-skin.css */ "./node_modules/photoswipe/dist/default-skin/default-skin.css");
/* harmony import */ var photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_4__);








function styles() {
  const elementStyles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
    :host {
      display: block;
    }
    .gallery a:after {
      background: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32' enable-background='new 0 0 32 32' xml:space='preserve'><path fill='%23FFFFFF' d='M0,0h32v32H0V0z M18.446,15.876l6.164-6.164l2.942,2.94V4.447h-8.205l2.942,2.943l-6.164,6.164 L18.446,15.876z M13.554,16.124L7.39,22.288l-2.942-2.94v8.205h8.205L9.71,24.609l6.164-6.164L13.554,16.124z'/></svg>");
    }
    ::slotted(img){
      pointer-events: none;
    }
  `;
  _ucd_lib_theme_sass_1_base_html_media_css_js__WEBPACK_IMPORTED_MODULE_1__.default.cssText = _ucd_lib_theme_sass_1_base_html_media_css_js__WEBPACK_IMPORTED_MODULE_1__.default.cssText.replaceAll('img', '::slotted(img)');

  return [
    _ucd_lib_theme_sass_1_base_html_media_css_js__WEBPACK_IMPORTED_MODULE_1__.default,
    _ucd_lib_theme_sass_4_component_gallery_css_js__WEBPACK_IMPORTED_MODULE_2__.default,
    elementStyles
  ];
}

function render() { 
return lit__WEBPACK_IMPORTED_MODULE_0__.html`
  <style>
    ${(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3___default())}
    ${(photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_4___default())}
  </style>
  <div class="gallery ${this._styleModifer()}">
    ${this._images.map((img, i) => lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div class="gallery__item">
        <a @click="${this._onClick}" image-index="${img.imageIndex}" href="#">
          <slot name="${img.slotName}"></slot>
        </a>
      </div>
    `)}
  </div>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div id="light-box" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="pswp__bg"></div>
  <div class="pswp__scroll-wrap">
    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>
    <div class="pswp__ui pswp__ui--hidden">
      <div class="pswp__top-bar">
        <div class="pswp__counter"></div>
        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
        <button class="pswp__button pswp__button--share" title="Share"></button>
        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
        <div class="pswp__preloader">
          <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
              <div class="pswp__preloader__donut"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
        <div class="pswp__share-tooltip"></div>
      </div>
      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
      </button>
      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
      </button>
      <div class="pswp__caption">
        <div class="pswp__caption__center"></div>
      </div>
    </div>
  </div>
</div>
`;}

/***/ }),

/***/ "../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.js":
/*!************************************************************************!*\
  !*** ../elements/ucd-theme-list-accordion/ucd-theme-list-accordion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/default-skin/default-skin.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/default-skin/default-skin.css ***!
  \********************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var escape = __webpack_require__(/*! ../../../@ucd-lib/cork-app-build/node_modules/css-loader/lib/url/escape.js */ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js */ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.id, "/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\n\tContents:\n\n\t1. Buttons\n\t2. Share modal and links\n\t3. Index indicator (\"1 of X\" counter)\n\t4. Caption\n\t5. Loading indicator\n\t6. Additional styles (root element, top bar, idle state, hidden state, etc.)\n\n*/\n/*\n\t\n\t1. Buttons\n\n */\n/* <button> css reset */\n.pswp__button {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  background: none;\n  cursor: pointer;\n  overflow: visible;\n  -webkit-appearance: none;\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  float: right;\n  opacity: 0.75;\n  -webkit-transition: opacity 0.2s;\n          transition: opacity 0.2s;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n  .pswp__button:focus, .pswp__button:hover {\n    opacity: 1; }\n  .pswp__button:active {\n    outline: none;\n    opacity: 0.9; }\n  .pswp__button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n\n/* pswp__ui--over-close class it added when mouse is over element that should close gallery */\n.pswp__ui--over-close .pswp__button--close {\n  opacity: 1; }\n\n.pswp__button,\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  background: url(" + escape(__webpack_require__(/*! ./default-skin.png */ "./node_modules/photoswipe/dist/default-skin/default-skin.png")) + ") 0 0 no-repeat;\n  background-size: 264px 88px;\n  width: 44px;\n  height: 44px; }\n\n@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {\n  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */\n  .pswp--svg .pswp__button,\n  .pswp--svg .pswp__button--arrow--left:before,\n  .pswp--svg .pswp__button--arrow--right:before {\n    background-image: url(" + escape(__webpack_require__(/*! ./default-skin.svg */ "./node_modules/photoswipe/dist/default-skin/default-skin.svg")) + "); }\n  .pswp--svg .pswp__button--arrow--left,\n  .pswp--svg .pswp__button--arrow--right {\n    background: none; } }\n\n.pswp__button--close {\n  background-position: 0 -44px; }\n\n.pswp__button--share {\n  background-position: -44px -44px; }\n\n.pswp__button--fs {\n  display: none; }\n\n.pswp--supports-fs .pswp__button--fs {\n  display: block; }\n\n.pswp--fs .pswp__button--fs {\n  background-position: -44px 0; }\n\n.pswp__button--zoom {\n  display: none;\n  background-position: -88px 0; }\n\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block; }\n\n.pswp--zoomed-in .pswp__button--zoom {\n  background-position: -132px 0; }\n\n/* no arrows on touch screens */\n.pswp--touch .pswp__button--arrow--left,\n.pswp--touch .pswp__button--arrow--right {\n  visibility: hidden; }\n\n/*\n\tArrow buttons hit area\n\t(icon is added to :before pseudo-element)\n*/\n.pswp__button--arrow--left,\n.pswp__button--arrow--right {\n  background: none;\n  top: 50%;\n  margin-top: -50px;\n  width: 70px;\n  height: 100px;\n  position: absolute; }\n\n.pswp__button--arrow--left {\n  left: 0; }\n\n.pswp__button--arrow--right {\n  right: 0; }\n\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  content: '';\n  top: 35px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 30px;\n  width: 32px;\n  position: absolute; }\n\n.pswp__button--arrow--left:before {\n  left: 6px;\n  background-position: -138px -44px; }\n\n.pswp__button--arrow--right:before {\n  right: 6px;\n  background-position: -94px -44px; }\n\n/*\n\n\t2. Share modal/popup and links\n\n */\n.pswp__counter,\n.pswp__share-modal {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.pswp__share-modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  z-index: 1600;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n          transition: opacity 0.25s ease-out;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__share-modal--hidden {\n  display: none; }\n\n.pswp__share-tooltip {\n  z-index: 1620;\n  position: absolute;\n  background: #FFF;\n  top: 56px;\n  border-radius: 2px;\n  display: block;\n  width: auto;\n  right: 44px;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  -webkit-transform: translateY(6px);\n      -ms-transform: translateY(6px);\n          transform: translateY(6px);\n  -webkit-transition: -webkit-transform 0.25s;\n          transition: transform 0.25s;\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n  .pswp__share-tooltip a {\n    display: block;\n    padding: 8px 12px;\n    color: #000;\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 18px; }\n    .pswp__share-tooltip a:hover {\n      text-decoration: none;\n      color: #000; }\n    .pswp__share-tooltip a:first-child {\n      /* round corners on the first/last list item */\n      border-radius: 2px 2px 0 0; }\n    .pswp__share-tooltip a:last-child {\n      border-radius: 0 0 2px 2px; }\n\n.pswp__share-modal--fade-in {\n  opacity: 1; }\n  .pswp__share-modal--fade-in .pswp__share-tooltip {\n    -webkit-transform: translateY(0);\n        -ms-transform: translateY(0);\n            transform: translateY(0); }\n\n/* increase size of share links on touch devices */\n.pswp--touch .pswp__share-tooltip a {\n  padding: 16px 12px; }\n\na.pswp__share--facebook:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -12px;\n  right: 15px;\n  border: 6px solid transparent;\n  border-bottom-color: #FFF;\n  -webkit-pointer-events: none;\n  -moz-pointer-events: none;\n  pointer-events: none; }\n\na.pswp__share--facebook:hover {\n  background: #3E5C9A;\n  color: #FFF; }\n  a.pswp__share--facebook:hover:before {\n    border-bottom-color: #3E5C9A; }\n\na.pswp__share--twitter:hover {\n  background: #55ACEE;\n  color: #FFF; }\n\na.pswp__share--pinterest:hover {\n  background: #CCC;\n  color: #CE272D; }\n\na.pswp__share--download:hover {\n  background: #DDD; }\n\n/*\n\n\t3. Index indicator (\"1 of X\" counter)\n\n */\n.pswp__counter {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  font-size: 13px;\n  line-height: 44px;\n  color: #FFF;\n  opacity: 0.75;\n  padding: 0 10px; }\n\n/*\n\t\n\t4. Caption\n\n */\n.pswp__caption {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 44px; }\n  .pswp__caption small {\n    font-size: 11px;\n    color: #BBB; }\n\n.pswp__caption__center {\n  text-align: left;\n  max-width: 420px;\n  margin: 0 auto;\n  font-size: 13px;\n  padding: 10px;\n  line-height: 20px;\n  color: #CCC; }\n\n.pswp__caption--empty {\n  display: none; }\n\n/* Fake caption element, used to calculate height of next/prev image */\n.pswp__caption--fake {\n  visibility: hidden; }\n\n/*\n\n\t5. Loading indicator (preloader)\n\n\tYou can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR\n\n */\n.pswp__preloader {\n  width: 44px;\n  height: 44px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -22px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n          transition: opacity 0.25s ease-out;\n  will-change: opacity;\n  direction: ltr; }\n\n.pswp__preloader__icn {\n  width: 20px;\n  height: 20px;\n  margin: 12px; }\n\n.pswp__preloader--active {\n  opacity: 1; }\n  .pswp__preloader--active .pswp__preloader__icn {\n    /* We use .gif in browsers that don't support CSS animation */\n    background: url(" + escape(__webpack_require__(/*! ./preloader.gif */ "./node_modules/photoswipe/dist/default-skin/preloader.gif")) + ") 0 0 no-repeat; }\n\n.pswp--css_animation .pswp__preloader--active {\n  opacity: 1; }\n  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {\n    -webkit-animation: clockwise 500ms linear infinite;\n            animation: clockwise 500ms linear infinite; }\n  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {\n    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;\n            animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }\n\n.pswp--css_animation .pswp__preloader__icn {\n  background: none;\n  opacity: 0.75;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  margin: 0; }\n\n.pswp--css_animation .pswp__preloader__cut {\n  /* \n\t\t\tThe idea of animating inner circle is based on Polymer (\"material\") loading indicator \n\t\t\t by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html\n\t\t*/\n  position: relative;\n  width: 7px;\n  height: 14px;\n  overflow: hidden; }\n\n.pswp--css_animation .pswp__preloader__donut {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  margin: 0; }\n\n@media screen and (max-width: 1024px) {\n  .pswp__preloader {\n    position: relative;\n    left: auto;\n    top: auto;\n    margin: 0;\n    float: right; } }\n\n@-webkit-keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n\n@keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n\n/*\n\t\n\t6. Additional styles\n\n */\n/* root element of UI */\n.pswp__ui {\n  -webkit-font-smoothing: auto;\n  visibility: visible;\n  opacity: 1;\n  z-index: 1550; }\n\n/* top black bar with buttons and \"1 of X\" indicator */\n.pswp__top-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  width: 100%; }\n\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  -webkit-backface-visibility: hidden;\n  will-change: opacity;\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n/* pswp--has_mouse class is added only when two subsequent mousemove events occur */\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  visibility: visible; }\n\n.pswp__top-bar,\n.pswp__caption {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n/* pswp__ui--fit class is added when main image \"fits\" between top bar and bottom bar (caption) */\n.pswp__ui--fit .pswp__top-bar,\n.pswp__ui--fit .pswp__caption {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */\n.pswp__ui--idle .pswp__top-bar {\n  opacity: 0; }\n\n.pswp__ui--idle .pswp__button--arrow--left,\n.pswp__ui--idle .pswp__button--arrow--right {\n  opacity: 0; }\n\n/*\n\tpswp__ui--hidden class is added when controls are hidden\n\te.g. when user taps to toggle visibility of controls\n*/\n.pswp__ui--hidden .pswp__top-bar,\n.pswp__ui--hidden .pswp__caption,\n.pswp__ui--hidden .pswp__button--arrow--left,\n.pswp__ui--hidden .pswp__button--arrow--right {\n  /* Force paint & create composition layer for controls. */\n  opacity: 0.001; }\n\n/* pswp__ui--one-slide class is added when there is just one item in gallery */\n.pswp__ui--one-slide .pswp__button--arrow--left,\n.pswp__ui--one-slide .pswp__button--arrow--right,\n.pswp__ui--one-slide .pswp__counter {\n  display: none; }\n\n.pswp__element--disabled {\n  display: none !important; }\n\n.pswp--minimal--dark .pswp__top-bar {\n  background: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/photoswipe.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/photoswipe.css ***!
  \*****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ../../@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js */ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.id, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  -ms-touch-action: none;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n  .pswp * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .pswp img {\n    max-width: none; }\n\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--open {\n  display: block; }\n\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n\n/*\n\tBackground is added as a separate element.\n\tAs animating opacity is much faster than animating rgba() background-color.\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -ms-touch-action: none;\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  -webkit-transition: none;\n  transition: none; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden; }\n\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n\n/*\n\tstretched thumbnail or div placeholder element (see below)\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n\n/*\n\tdiv element that matches size of large image\n\tlarge image loads on top of it\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/css-base.js ***!
  \**************************************************************************************/
/***/ ((module) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/url/escape.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/lib/url/escape.js ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/photoswipe/dist/default-skin/default-skin.png":
/*!********************************************************************!*\
  !*** ./node_modules/photoswipe/dist/default-skin/default-skin.png ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./node_modules/photoswipe/dist/default-skin/default-skin.svg":
/*!********************************************************************!*\
  !*** ./node_modules/photoswipe/dist/default-skin/default-skin.svg ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./node_modules/photoswipe/dist/default-skin/preloader.gif":
/*!*****************************************************************!*\
  !*** ./node_modules/photoswipe/dist/default-skin/preloader.gif ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs="

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/1_base_html/_forms.css.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/@ucd-lib/theme-sass/1_base_html/_media.css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/1_base_html/_media.css.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

embed,
img,
object,
video {
  max-width: 100%;
  height: auto;
}

iframe {
  max-width: 100%;
  margin-bottom: 1rem;
}

figure {
  display: table;
  margin: 0 0 1rem;
}
figure > img {
  margin-bottom: 0.5rem;
}

figcaption {
  display: table-caption;
  caption-side: bottom;
  color: #4c4c4c;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_gallery.css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_gallery.css.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lit__WEBPACK_IMPORTED_MODULE_0__.css`

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: center;
}
@media (min-width: 480px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  }
}
.gallery__item {
  position: relative;
}
.gallery__title {
  display: none;
}
.gallery--poster {
  display: block;
}
.gallery--poster .gallery__item {
  display: none;
}
.gallery--poster .gallery__item:first-child {
  display: block;
  width: 100%;
  margin-bottom: 0;
}
.gallery--poster .gallery__item:first-child img {
  width: 100%;
}
.gallery--poster .gallery__title {
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  background: #f7fafd;
  text-align: left;
}
.gallery a {
  display: block;
}
.gallery a:after {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  display: block;
  width: 32px;
  height: 32px;
  background: url("../images/expand.svg");
  content: "";
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
}
.gallery a:hover:after {
  opacity: 1;
  transform: scale(1.2);
}

`);

/***/ }),

/***/ "./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ucd-lib/theme-sass/4_component/_message-area.css.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe-ui-default.js":
/*!***************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-ui-default.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

/***/ }),

/***/ "./node_modules/photoswipe/dist/default-skin/default-skin.css":
/*!********************************************************************!*\
  !*** ./node_modules/photoswipe/dist/default-skin/default-skin.css ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(/*! !!../../../@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./default-skin.css */ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/default-skin/default-skin.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.css":
/*!*****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


        var result = __webpack_require__(/*! !!../../@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./photoswipe.css */ "./node_modules/@ucd-lib/cork-app-build/node_modules/css-loader/index.js!./node_modules/photoswipe/dist/photoswipe.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
/* harmony import */ var _elements_ucd_theme_image_gallery_ucd_theme_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/ucd-theme-image-gallery/ucd-theme-image-gallery */ "../elements/ucd-theme-image-gallery/ucd-theme-image-gallery.js");







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtYWxlcnQvdWNkLXRoZW1lLWFsZXJ0LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1hbGVydC91Y2QtdGhlbWUtYWxlcnQudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1jb2xsYXBzZS91Y2QtdGhlbWUtY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWNvbGxhcHNlL3VjZC10aGVtZS1jb2xsYXBzZS50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWZvcm0tc2VhcmNoL3VjZC10aGVtZS1mb3JtLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtZm9ybS1zZWFyY2gvdWNkLXRoZW1lLWZvcm0tc2VhcmNoLnRwbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uLi9lbGVtZW50cy91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC91Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cC50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkvdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkudHBsLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1saXN0LWFjY29yZGlvbi91Y2QtdGhlbWUtbGlzdC1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uL3VjZC10aGVtZS1saXN0LWFjY29yZGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYS91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4uL2VsZW1lbnRzL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEvdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYS50cGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi4vZWxlbWVudHMvdXRpbHMvZGlyZWN0aXZlcy9tb3Rpb24tY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uY3NzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi9jb3JrLWFwcC1idWlsZC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvY29yay1hcHAtYnVpbGQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4ucG5nIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLnN2ZyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvZGVmYXVsdC1za2luL3ByZWxvYWRlci5naWYiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9fZm9ybXMuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2hlYWRpbmdzLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19tZWRpYS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy8yX2Jhc2VfY2xhc3MvX2xpc3RzLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19jYXRlZ29yeS1icmFuZC5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fY29sbGFwc2UuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX2dhbGxlcnkuY3NzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX21lc3NhZ2UtYXJlYS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fbWVzc2FnaW5nLWFsZXJ0LmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19zZWFyY2gtZm9ybS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fc2VhcmNoLXBvcHVwLmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzLzZfdXRpbGl0eS9fdS12aXNpYmlsaXR5LmNzcy5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9AdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvZGV2ZWxvcG1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvYXN5bmMtZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS1oZWxwZXJzLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL25vZGVfbW9kdWxlcy9saXQvYXN5bmMtZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2h0bWwuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uY3NzP2IxMGUiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzPzBjNDIiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rlc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0LWFwcC8uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0QkFBNEIsMkNBQVU7O0FBRXJEO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLCtEQUFNO0FBQ2pCLEc7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnRUFBVztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRnQztBQUNrRDs7QUFFM0U7QUFDUCxrQkFBa0Isb0NBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkZBQVc7QUFDZjtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJO0FBQ1gsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBOztBQUVBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJpQztBQUMwQjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwrQkFBK0IsMkNBQVU7O0FBRXhEO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0IsZUFBZSw2QkFBNkI7QUFDNUMsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUVBQVc7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUEsOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdnQzs7QUFFOEM7QUFDRzs7QUFFWjs7QUFFOUQ7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBGQUFXO0FBQ2YsSUFBSSxvRkFBYztBQUNsQjtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJOztBQUVYLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlFQUFpRTtBQUM5RjtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDLGNBQWMsbUJBQW1CO0FBQ2pDLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUZBQWMsRUFBRSxjQUFjO0FBQ3BDO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBOzs7QUFHQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEaUM7QUFDOEI7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTtBQUNlLGlDQUFpQywyQ0FBVTs7QUFFMUQ7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixvQkFBb0IsdUNBQXVDO0FBQzNELG1CQUFtQix1Q0FBdUM7QUFDMUQsa0JBQWtCLHNDQUFzQztBQUN4RCxrQkFBa0Isc0NBQXNDO0FBQ3hELG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxRUFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTs7QUFFQSxtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZnQzs7QUFFZ0M7QUFDWTtBQUNBO0FBQ1I7OztBQUc3RDtBQUNQLGtCQUFrQixvQ0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBWTtBQUNoQixJQUFJLHNGQUFVO0FBQ2QsSUFBSSxpRkFBTztBQUNYLElBQUksdUZBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJO0FBQ1g7QUFDQSxhQUFhLGVBQWU7QUFDNUIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQSx1QkFBdUIsZUFBZTs7QUFFdEMsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLGFBQWEsV0FBVztBQUN4Qiw2RkFBNkY7O0FBRTdGO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2lDO0FBQ3FDOzs7QUFHdkQsd0NBQXdDLDJDQUFVOztBQUVqRTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRCxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNkVBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4RUFBVztBQUM3QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNnQzs7QUFFdUM7QUFDUTs7QUFFeEU7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlGQUFVO0FBQ2QsSUFBSSx3RkFBVztBQUNmO0FBQ0E7O0FBRU8sbUI7QUFDUCxPQUFPLHFDQUFJO0FBQ1g7QUFDQSw4QkFBOEIsK0NBQStDO0FBQzdFLFdBQVcsaUJBQWlCO0FBQzVCLDBDQUEwQyxnQkFBZ0I7QUFDMUQ7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7O0FBRUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JpQztBQUMrQjs7QUFFNUI7QUFDNkI7O0FBRWxELG1DQUFtQywyQ0FBVTs7QUFFNUQ7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCLGdCQUFnQiw4QkFBOEI7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHVFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isd0VBQVc7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsbUNBQW1DLEtBQUssNkJBQTZCLEtBQUs7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1EQUFVLFNBQVMsOEVBQVk7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBLGdFQUFnRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SWdDOztBQUV3QztBQUNJOztBQUVqQjtBQUNtQjs7QUFFdkU7QUFDUCx3QkFBd0Isb0NBQUc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQW1CLEdBQUcsb0dBQThCOztBQUV0RDtBQUNBLElBQUksaUZBQVc7QUFDZixJQUFJLG1GQUFhO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7QUFDWDtBQUNBLE1BQU0sdUVBQWE7QUFDbkIsTUFBTSxzRkFBaUI7QUFDdkI7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDLE1BQU0sNkJBQTZCLHFDQUFJO0FBQ3ZDO0FBQ0EscUJBQXFCLGNBQWMsaUJBQWlCLGVBQWU7QUFDbkUsd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGaUM7QUFDZ0M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxvQ0FBb0MsMkNBQVU7O0FBRTdEO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQXNDO0FBQ3hELG1CQUFtQiw4QkFBOEI7QUFDakQseUJBQXlCLDhCQUE4QjtBQUN2RCx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlFQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHdFQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbUNBQW1DO0FBQ3pELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQW1FO0FBQ2xGO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTWdDOztBQUVxQztBQUNBOztBQUU5RDtBQUNQLHFCQUFxQixvQ0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRkFBTztBQUNYO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLE9BQU8scUNBQUk7QUFDWCxtQkFBbUIsZUFBZTtBQUNsQyxFQUFFLHFDQUFxQyxxQ0FBSTtBQUMzQyxJQUFJLHVCQUF1QixxQ0FBSTtBQUMvQjtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmLGlDQUFpQyxNQUFNO0FBQ3ZDLHVCQUF1QixrQ0FBa0M7QUFDekQsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxNQUFNLHFDQUFJO0FBQ1Y7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixRQUFRLGlGQUFjLEVBQUUsY0FBYztBQUN0QztBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekMsaUJBQWlCLG1DQUFtQztBQUNwRCxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQztBQUM4Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxrQ0FBa0MsMkNBQVU7O0FBRTNEO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsb0JBQW9CLHVDQUF1QztBQUMzRCxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0VBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1RUFBVztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWdDOztBQUU2QztBQUNJO0FBQ1Y7O0FBRWhFO0FBQ1AscUJBQXFCLG9DQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9GQUFhO0FBQ2pCLElBQUksaUZBQVU7QUFDZCxJQUFJLHdGQUFhO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFTyxtQjtBQUNQLFNBQVMscUNBQUk7QUFDYiwrQkFBK0IsNENBQTRDO0FBQzNFO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QyxpQkFBaUIsZ0JBQWdCO0FBQ2pDLGtCQUFrQixtQkFBbUIsSUFBSSxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ29DO0FBQ2tCO0FBQ0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0IsY0FBYyxFQUFFO0FBQzNDO0FBQ0E7QUFDTyw2QkFBNkIsa0VBQWM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLFdBQVcsZ0RBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU8sdUJBQXVCLDJEQUFTLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixNQUFNO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFO0FBQ25DO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsK0VBQStFLEVBQUU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixRQUFRLGtGQUFrRixFQUFFO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxRQUFRLDRFQUE0RSxFQUFFO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLFFBQVEsNkVBQTZFLEVBQUU7QUFDakw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSw2R0FBNkcsa0JBQWtCO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7Ozs7Ozs7Ozs7QUNwMkJBLGFBQWEsbUJBQU8sQ0FBQyxvS0FBNEU7QUFDakcsMkJBQTJCLG1CQUFPLENBQUMsZ0tBQTBFO0FBQzdHOzs7QUFHQTtBQUNBLHlaQUF5WixnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsbUJBQW1CLGNBQWMsZUFBZSxjQUFjLGlCQUFpQixrQkFBa0IscUNBQXFDLHFDQUFxQyw2QkFBNkIsNkJBQTZCLEVBQUUsOENBQThDLGlCQUFpQixFQUFFLDBCQUEwQixvQkFBb0IsbUJBQW1CLEVBQUUscUNBQXFDLGlCQUFpQixnQkFBZ0IsRUFBRSxnSkFBZ0osZUFBZSxFQUFFLDRGQUE0RiwrQkFBK0IsbUJBQU8sQ0FBQyx3RkFBb0Isc0JBQXNCLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLEVBQUUsa0pBQWtKLHNOQUFzTix1Q0FBdUMsbUJBQU8sQ0FBQyx3RkFBb0IsUUFBUSxFQUFFLHNGQUFzRix1QkFBdUIsRUFBRSxFQUFFLDBCQUEwQixpQ0FBaUMsRUFBRSwwQkFBMEIscUNBQXFDLEVBQUUsdUJBQXVCLGtCQUFrQixFQUFFLDBDQUEwQyxtQkFBbUIsRUFBRSxpQ0FBaUMsaUNBQWlDLEVBQUUseUJBQXlCLGtCQUFrQixpQ0FBaUMsRUFBRSw2Q0FBNkMsbUJBQW1CLEVBQUUsMENBQTBDLGtDQUFrQyxFQUFFLDBIQUEwSCx1QkFBdUIsRUFBRSw2SUFBNkkscUJBQXFCLGFBQWEsc0JBQXNCLGdCQUFnQixrQkFBa0IsdUJBQXVCLEVBQUUsZ0NBQWdDLFlBQVksRUFBRSxpQ0FBaUMsYUFBYSxFQUFFLDRFQUE0RSxnQkFBZ0IsY0FBYyx5Q0FBeUMsaUJBQWlCLGdCQUFnQix1QkFBdUIsRUFBRSx1Q0FBdUMsY0FBYyxzQ0FBc0MsRUFBRSx3Q0FBd0MsZUFBZSxxQ0FBcUMsRUFBRSx3RkFBd0YsOEJBQThCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLEVBQUUsd0JBQXdCLG1CQUFtQixtQ0FBbUMsZ0JBQWdCLGlCQUFpQixXQUFXLFlBQVksa0JBQWtCLHVCQUF1QixrQkFBa0IsZUFBZSwrQ0FBK0MsK0NBQStDLHdDQUF3Qyx5QkFBeUIsRUFBRSxnQ0FBZ0Msa0JBQWtCLEVBQUUsMEJBQTBCLGtCQUFrQix1QkFBdUIscUJBQXFCLGNBQWMsdUJBQXVCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLHNEQUFzRCxzREFBc0QsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsZ0RBQWdELHdDQUF3Qyx3Q0FBd0MsMkJBQTJCLEVBQUUsNEJBQTRCLHFCQUFxQix3QkFBd0Isa0JBQWtCLDRCQUE0QixzQkFBc0Isd0JBQXdCLEVBQUUsb0NBQW9DLDhCQUE4QixvQkFBb0IsRUFBRSwwQ0FBMEMsMEZBQTBGLEVBQUUseUNBQXlDLG1DQUFtQyxFQUFFLGlDQUFpQyxlQUFlLEVBQUUsc0RBQXNELHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLEVBQUUsOEZBQThGLHVCQUF1QixFQUFFLG9DQUFvQyxnQkFBZ0IsbUJBQW1CLGFBQWEsY0FBYyx1QkFBdUIsZUFBZSxnQkFBZ0Isa0NBQWtDLDhCQUE4QixpQ0FBaUMsOEJBQThCLHlCQUF5QixFQUFFLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEVBQUUsMENBQTBDLG1DQUFtQyxFQUFFLGtDQUFrQyx3QkFBd0IsZ0JBQWdCLEVBQUUsb0NBQW9DLHFCQUFxQixtQkFBbUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsNEVBQTRFLHVCQUF1QixZQUFZLFdBQVcsaUJBQWlCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGtCQUFrQixvQkFBb0IsRUFBRSxpREFBaUQsdUJBQXVCLFlBQVksY0FBYyxnQkFBZ0IscUJBQXFCLEVBQUUsMEJBQTBCLHNCQUFzQixrQkFBa0IsRUFBRSw0QkFBNEIscUJBQXFCLHFCQUFxQixtQkFBbUIsb0JBQW9CLGtCQUFrQixzQkFBc0IsZ0JBQWdCLEVBQUUsMkJBQTJCLGtCQUFrQixFQUFFLG1HQUFtRyx1QkFBdUIsRUFBRSxnSkFBZ0osZ0JBQWdCLGlCQUFpQix1QkFBdUIsV0FBVyxjQUFjLHVCQUF1QixlQUFlLCtDQUErQywrQ0FBK0MseUJBQXlCLG1CQUFtQixFQUFFLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixFQUFFLDhCQUE4QixlQUFlLEVBQUUsb0RBQW9ELHFHQUFxRyxtQkFBTyxDQUFDLGtGQUFpQixzQkFBc0IsRUFBRSxtREFBbUQsZUFBZSxFQUFFLHlFQUF5RSx5REFBeUQseURBQXlELEVBQUUsMkVBQTJFLG9GQUFvRixvRkFBb0YsRUFBRSxnREFBZ0QscUJBQXFCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLGNBQWMsY0FBYyxFQUFFLGdEQUFnRCxnT0FBZ08sZUFBZSxpQkFBaUIscUJBQXFCLEVBQUUsa0RBQWtELG1DQUFtQyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsdUJBQXVCLG1DQUFtQyxxQ0FBcUMsdUJBQXVCLFdBQVcsWUFBWSxxQkFBcUIsY0FBYyxFQUFFLDJDQUEyQyxzQkFBc0IseUJBQXlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLG1CQUFtQixFQUFFLEVBQUUsa0NBQWtDLFFBQVEsc0NBQXNDLHNDQUFzQyxFQUFFLFVBQVUsd0NBQXdDLHdDQUF3QyxFQUFFLEVBQUUsMEJBQTBCLFFBQVEsc0NBQXNDLHNDQUFzQyxFQUFFLFVBQVUsd0NBQXdDLHdDQUF3QyxFQUFFLEVBQUUscUNBQXFDLFFBQVEsbUNBQW1DLG1DQUFtQyxFQUFFLFNBQVMseUNBQXlDLHlDQUF5QyxFQUFFLFVBQVUsbUNBQW1DLG1DQUFtQyxFQUFFLEVBQUUsNkJBQTZCLFFBQVEsbUNBQW1DLG1DQUFtQyxFQUFFLFNBQVMseUNBQXlDLHlDQUF5QyxFQUFFLFVBQVUsbUNBQW1DLG1DQUFtQyxFQUFFLEVBQUUsZ0ZBQWdGLGlDQUFpQyx3QkFBd0IsZUFBZSxrQkFBa0IsRUFBRSwrRUFBK0UsdUJBQXVCLFlBQVksV0FBVyxpQkFBaUIsZ0JBQWdCLEVBQUUsa0lBQWtJLHdDQUF3Qyx5QkFBeUIsb0VBQW9FLG9FQUFvRSxFQUFFLHNMQUFzTCx3QkFBd0IsRUFBRSxxQ0FBcUMseUNBQXlDLEVBQUUseUtBQXlLLHlDQUF5QyxFQUFFLDRJQUE0SSxlQUFlLEVBQUUsOEZBQThGLGVBQWUsRUFBRSxvU0FBb1MsaUZBQWlGLEVBQUUsK05BQStOLGtCQUFrQixFQUFFLDhCQUE4Qiw2QkFBNkIsRUFBRSx5Q0FBeUMscUJBQXFCLEVBQUU7O0FBRS84WDs7Ozs7Ozs7Ozs7QUNSQSwyQkFBMkIsbUJBQU8sQ0FBQyw2SkFBdUU7QUFDMUc7OztBQUdBO0FBQ0EsbU9BQW1PLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixZQUFZLFdBQVcscUJBQXFCLDJCQUEyQix1QkFBdUIsa0JBQWtCLG1DQUFtQywwSEFBMEgsa0JBQWtCLEVBQUUsYUFBYSxxQ0FBcUMscUNBQXFDLEVBQUUsZUFBZSxzQkFBc0IsRUFBRSxnR0FBZ0csMkhBQTJILHlCQUF5Qix1R0FBdUcsb0VBQW9FLEVBQUUsaUJBQWlCLG1CQUFtQixFQUFFLG9DQUFvQyx1REFBdUQseUJBQXlCLG9CQUFvQixFQUFFLGlDQUFpQyxvREFBb0Qsc0JBQXNCLGlCQUFpQixFQUFFLGdDQUFnQyx3REFBd0QsMEJBQTBCLHFCQUFxQixFQUFFLG9KQUFvSix1QkFBdUIsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIscUJBQXFCLGVBQWUscUNBQXFDLHFDQUFxQyx3Q0FBd0MseUJBQXlCLEVBQUUsd0JBQXdCLHVCQUF1QixZQUFZLFdBQVcsZ0JBQWdCLGlCQUFpQixxQkFBcUIsRUFBRSx5Q0FBeUMsMkJBQTJCLHVCQUF1Qix1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxFQUFFLCtFQUErRSw4QkFBOEIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsNkNBQTZDLGdDQUFnQyxFQUFFLHNCQUFzQix1QkFBdUIsZ0JBQWdCLHVDQUF1QyxtQ0FBbUMsK0JBQStCLGlIQUFpSCxzRUFBc0UsRUFBRSxlQUFlLHlCQUF5Qix1R0FBdUcsb0VBQW9FLEVBQUUsd0VBQXdFLDZCQUE2QixxQkFBcUIsRUFBRSx5Q0FBeUMsd0NBQXdDLEVBQUUsaUJBQWlCLHVCQUF1QixZQUFZLGFBQWEsV0FBVyxjQUFjLHFCQUFxQixFQUFFLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixXQUFXLFlBQVksRUFBRSw2S0FBNkssd0NBQXdDLEVBQUUsOEhBQThILHFCQUFxQixFQUFFLDBCQUEwQiwyQkFBMkIsNEJBQTRCLFlBQVksV0FBVyxFQUFFLHdIQUF3SCx1QkFBdUIsWUFBWSxhQUFhLGdCQUFnQix1QkFBdUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsZ0JBQWdCLEVBQUUsd0JBQXdCLGdCQUFnQiwrQkFBK0IsRUFBRTs7QUFFN3ZJOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkEsaUNBQWlDLG91Qjs7Ozs7Ozs7OztBQ0FqQyxxQ0FBcUMsZ2lFOzs7Ozs7Ozs7O0FDQXJDLGlDQUFpQyw0b0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBVDs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ25LdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3VCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDcmF1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN3BCdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEdUI7O0FBRXhCLGlFQUFlLG9DQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUR1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RnVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUR1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHVCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkl1Qjs7QUFFeEIsaUVBQWUsb0NBQUc7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3VCOztBQUV4QixpRUFBZSxvQ0FBRzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzliRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEO0FBQ1o7QUFDTjtBQUNiO0FBQ3pCO0FBQ0E7QUFDTyx3QkFBd0Isa0VBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlCQUF5QixrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsYUFBYTtBQUNwSDtBQUNBO0FBQ0Esd0dBQXdHLGFBQWE7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0ZBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBQ2tCO0FBQ1A7QUFDVjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNkJBQTZCLG9EQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrREFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtEQUFRO0FBQ25EO0FBQ0EseUNBQXlDLGtEQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CO0FBQ0EsMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7QUFDbkMsT0FBTyx3QkFBd0IsR0FBRywrQ0FBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzQ0FBc0MsUUFBUSw2RkFBNkY7QUFDbEo7QUFDQTtBQUNBO0FBQ08sc0NBQXNDLFFBQVEsNkVBQTZFO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxJQUFJLFdBQVcsTUFBTSxnQkFBZ0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1Q0FBdUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNLFVBQVUsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmtDeUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEc0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R1RjtBQUN2Rjs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCO0FBQ0EsS0FBSyxJQUEwQztBQUMvQyxFQUFFLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUNqQixFQUFFLE1BQU0sRUFJTjtBQUNGLENBQUM7O0FBRUQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSyw4RkFBOEYsS0FBSyxFQUFFO0FBQzFHLEtBQUssMEVBQTBFLE1BQU0sT0FBTyxLQUFLLEVBQUU7QUFDbkcsS0FBSztBQUNMLHFCQUFxQixLQUFLLFNBQVMsV0FBVyxlQUFlLE1BQU0sRUFBRTtBQUNyRSxLQUFLLDhDQUE4QyxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtDQUFrQztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLEtBQUs7QUFDbkQscUJBQXFCLFdBQVc7QUFDaEMscUJBQXFCLGVBQWU7QUFDcEMscUJBQXFCLE1BQU07O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxrQkFBa0Isb0NBQW9DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1AscUNBQXFDO0FBQ3JDOztBQUVBLE1BQU07O0FBRU4sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUEsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEJBQTRCO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOzs7O0FBSUE7QUFDQSxHO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0EsMkI7QUFDQSxJO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEk7QUFDQSxHQUFHO0FBQ0gsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQSxJO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJO0FBQ0EsR0FBRztBQUNILEc7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQTtBQUNBLEk7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQzs7QUFFQTs7QUFFQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkI7QUFDQTtBQUNBLHVEO0FBQ0EsbUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QztBQUNBO0FBQ0E7QUFDQSwwQjtBQUNBOztBQUVBLGtDOztBQUVBO0FBQ0Esa0NBQWtDLGdDQUFnQztBQUNsRTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7QUM1MUJEO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkI7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ2pCLEVBQUUsTUFBTSxFQUlOO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsNEY7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU8sV0FBVztBQUMzQztBQUNBOztBQUVBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsOEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDZDQUE2QztBQUM3QyxJO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsT0FBTztBQUN2Qjs7QUFFQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyQkFBMkIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLGlDO0FBQ0EsVUFBVSxTO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpRTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLDJDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksNEI7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxrRDtBQUNBOzs7Ozs7OztBQVFBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEk7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQSxJQUFJLGtEQUFrRDtBQUN0RCxJQUFJLGtEQUFrRDtBQUN0RCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RCxHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsd0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7OztBQUlGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5Qjs7O0FBR3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUixXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLEVBQUU7OztBQUdGO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCLEs7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsaUNBQWlDO0FBQ2pDLHNCQUFzQjtBQUN0QiwwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDRCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0Esa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixRQUFRLFFBQVE7QUFDaEIsUUFBUTtBQUNSO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOzs7OztBQUtGOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7Ozs7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOzs7O0FBSXpDO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYyw4Q0FBOEM7QUFDNUQ7QUFDQTtBQUNBLGNBQWMsOENBQThDO0FBQzVEO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrRztBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3RTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTs7QUFFQSxtRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIscUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7O0FBTUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7Ozs7O0FBS0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ3BwSEQscUJBQXFCLG1CQUFPLENBQUMsb09BQXdGOztBQUVySDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLHFCQUFxQixtQkFBTyxDQUFDLGdOQUFtRjs7QUFFaEg7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDYztBQUNJO0FBQ047QUFDZ0I7QUFDdEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzfSBmcm9tIFwiLi91Y2QtdGhlbWUtYWxlcnQudHBsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIFVjZFRoZW1lQWxlcnRcbiAqIEBjbGFzc2Rlc2MgVUkgY29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGEgYmFzaWMgbm9uLWRpc21pc3NhYmxlIGFsZXJ0LlxuICogUGF0dGVybiBMYWIgVXJsOiBodHRwOi8vZGV2LndlYnN0eWxlZ3VpZGUudWNkYXZpcy5lZHUvcmVkZXNpZ24vP3A9dmlld2FsbC1tb2xlY3VsZXMtbWVzc2FnaW5nXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlIC0gT3B0aW9uYWwgbW9kaWZpZXIuICdzdWNjZXNzJywgJ3dhcm5pbmcnLCBvciAnZXJyb3InXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBodG1sYFxuICogICA8dWNkLXRoZW1lLWFsZXJ0PkkgYW0gYW4gYWxlcnQhPC91Y2QtdGhlbWUtYWxlcnQ+XG4gKiAgIDx1Y2QtdGhlbWUtYWxlcnQgdHlwZT0nZXJyb3InPkkgYW0gYSByZWQgYWxlcnQhPC91Y2QtdGhlbWUtYWxlcnQ+XG4gKiBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lQWxlcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIF9zdHlsZU1vZGlmaWVyIDoge3R5cGU6IFN0cmluZ31cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9IFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnR5cGUgPSAnJztcbiAgICB0aGlzLnN0eWxlTW9kaWZpZXIgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHVwZGF0ZWRcbiAgICogQGRlc2NyaXB0aW9uIExpdCBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCBhZnRlciBlbGVtZW50IGhhcyBiZWVuIHVwZGF0ZWRcbiAgICogQHBhcmFtIHtNYXB9IHByb3BzIC0gUHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZFxuICAgKi9cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmKCBwcm9wcy5oYXMoJ3R5cGUnKSAmJiB0aGlzLnR5cGUgKSB7XG4gICAgICB0aGlzLl9zdHlsZU1vZGlmaWVyID0gJ2FsZXJ0LS0nK3RoaXMudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VjZC10aGVtZS1hbGVydCcsIFVjZFRoZW1lQWxlcnQpOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgYWxlcnRTdHlsZXMgZnJvbSAnQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fbWVzc2FnaW5nLWFsZXJ0LmNzcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGxldCBjdXN0b21Dc3MgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgO1xuICByZXR1cm4gW1xuICAgIGFsZXJ0U3R5bGVzLFxuICAgIGN1c3RvbUNzc1xuICBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgIFxuPGRpdiBjbGFzcz1cImFsZXJ0ICR7dGhpcy5fc3R5bGVNb2RpZmllcn1cIj5cbiAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLWNvbGxhcHNlLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZUNvbGxhcHNlXG4gKiBAY2xhc3NkZXNjIFVJIGNvbXBvbmVudCBjbGFzcyBmb3IgYSBjb2xsYXBzYWJsZSBwYW5lbCBib3hcbiAqIFBhdHRlcm4gTGFiIFVybDogaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduLz9wPW1vbGVjdWxlcy1jb2xsYXBzZVxuICogXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdGl0bGUgLSBUaGUgcGFuZWwgdGl0bGVcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gb3BlbmVkIC0gV2hldGhlciB0aGUgcGFuZWwgY29udGVudCBpcyBleHBhbmRlZFxuICogQHByb3BlcnR5IHtTdHJpbmd9IGJyYW5kQ2xhc3MgLSBBbnkgYWRkaXRpb25hbCBjbGFzcyBtb2RpZmVyc1xuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICAgPHVjZC10aGVtZS1jb2xsYXBzZSB0aXRsZT1cIkkgYW0gdGhlIHBhbmVsIHRpdGxlXCI+XG4gKiAgICAgSSBhbSB0aGUgY29udGVudC5cbiAqICAgPC91Y2QtdGhlbWUtY29sbGFwc2U+XG4gKiBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lQ29sbGFwc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIG9wZW5lZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgYnJhbmRDbGFzczoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImJyYW5kLWNsYXNzXCJ9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpdGxlID0gXCJcIjtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2Qgb3BlblxuICAgKiBAZGVzY3JpcHRpb24gRXhwYW5kcyB0aGUgcGFuZWwgY29udGVudFxuICAgKi9cbiAgb3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjbG9zZVxuICAgKiBAZGVzY3JpcHRpb24gQ29sbGFwc2VzIHRoZSBwYW5lbCBjb250ZW50XG4gICAqL1xuICBjbG9zZSgpe1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b2dnbGVcbiAgICogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHBhbmVsIGNvbnRlbnRcbiAgICovXG4gIHRvZ2dsZSgpe1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uVGl0bGVDbGlja1xuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gdGhlIHBhbmVsIHRpdGxlXG4gICAqL1xuICBfb25UaXRsZUNsaWNrKCl7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgICB0aGlzLl9kaXNwYXRjaFRvZ2dsZUV2ZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UaXRsZUtleVVwXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byB0aGUgcGFuZWwgdGl0bGVcbiAgICogXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgLSBrZXl1cCBldmVudFxuICAgKi9cbiAgX29uVGl0bGVLZXlVcChlKXtcbiAgICBpZiggZS53aGljaCAhPT0gMTMgKSByZXR1cm47XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgICB0aGlzLl9kaXNwYXRjaFRvZ2dsZUV2ZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZGlzcGF0Y2hUb2dnbGVFdmVudFxuICAgKiBAZGVzY3JpcHRpb24gRW1pdHMgY3VzdG9tICdhY2NvcmRpb24tdG9nZ2xlJyBldmVudCB3aGVuIHVzZXIgdG9nZ2xlcyBjb250ZW50IHZpc2liaWx0eS5cbiAgICovXG4gIF9kaXNwYXRjaFRvZ2dsZUV2ZW50KCl7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FjY29yZGlvbi10b2dnbGUnLCB7XG4gICAgICBkZXRhaWw6IHsgXG4gICAgICAgIG1lc3NhZ2U6ICdDb250ZW50IGFyZWEgaGFzIGJlZW4gZXhwYW5kZWQgb3IgY29sbGFwc2VkJywgXG4gICAgICAgIGlzT3BlbjogdGhpcy5vcGVuZWRcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2QtdGhlbWUtY29sbGFwc2UnLCBVY2RUaGVtZUNvbGxhcHNlKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgY29sbGFwc2VTdHlsZXMgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX2NvbGxhcHNlLmNzcy5qc1wiO1xuaW1wb3J0IGNvbG9yU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19jYXRlZ29yeS1icmFuZC5jc3MuanNcIjtcblxuaW1wb3J0IHsgbW90aW9uQ29sbGFwc2UgfSBmcm9tIFwiLi4vdXRpbHMvZGlyZWN0aXZlcy9tb3Rpb24tY29sbGFwc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgY29uc3QgZWxlbWVudFN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIFtcbiAgICBjb2xvclN0eWxlcyxcbiAgICBjb2xsYXBzZVN0eWxlcyxcbiAgICBlbGVtZW50U3R5bGVzXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxkaXYgY2xhc3M9XCJjb2xsYXBzZSAke3RoaXMuYnJhbmRDbGFzc31cIj5cbiAgPGgyIFxuICAgIGlkPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIGNsYXNzPVwiY29sbGFwc2VfX3RpdGxlICR7dGhpcy5vcGVuZWQgPyAnY29sbGFwc2VfX3RpdGxlLS1vcGVuJzogJ2NvbGxhcHNlX190aXRsZS0tY2xvc2VkJ31cIlxuICAgIGFyaWEtY29udHJvbHM9XCJjb250ZW50XCJcbiAgICBhcmlhLWV4cGFuZGVkPVwiJHt0aGlzLm9wZW5lZH1cIlxuICAgIEBjbGljaz1cIiR7dGhpcy5fb25UaXRsZUNsaWNrfVwiXG4gICAgQGtleXVwPVwiJHt0aGlzLl9vblRpdGxlS2V5VXB9XCJcbiAgICA+XG4gICAgJHt0aGlzLnRpdGxlfVxuICA8L2gyPlxuICA8ZGl2IFxuICAgIGlkPVwiY29udGVudFwiXG4gICAgJHttb3Rpb25Db2xsYXBzZSh7ZHVyYXRpb246IDMwMH0pfVxuICAgIGFyaWEtbGFiZWxsZWRieT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJjb2xsYXBzZV9fY29udGVudFwiID9oaWRkZW49XCIkeyF0aGlzLm9wZW5lZH1cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuYDt9IiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQge3JlbmRlciwgc3R5bGVzIH0gZnJvbSBcIi4vdWNkLXRoZW1lLWZvcm0tc2VhcmNoLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZUZvcm1TZWFyY2hcbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciByZW5kZXJpbmcgYSBiYXNpYyBzZWFyY2ggZm9ybS5cbiAqIFBhdHRlcm4gTGFiIFVybDogaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduLz9wPW1vbGVjdWxlcy1zZWFyY2gtZm9ybVxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgc2VhcmNoIHN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlaG9sZGVyIC0gVGhlIGlucHV0IHBsYWNlaG9sZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybUFjdGlvbiAtIFRoZSBhY3Rpb24gdG8gYmUgdGFrZW4gb24gZm9ybSBzdWJtaXQgKG9wdGlvbmFsKVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIGEgZm9ybSBhY3Rpb246XG4gKiBodG1sYFxuICogICA8dWNkLXRoZW1lLWZvcm0tc2VhcmNoIGZvcm0tYWN0aW9uPVwiL3VybC90by9wb3N0L3RvXCI+PC91Y2QtdGhlbWUtZm9ybS1zZWFyY2g+XG4gKiBgXG4gKiAvLyBVc2UgZXZlbnQgbGlzdGVuZXI6XG4gKiBodG1sYFxuICogIDx1Y2QtdGhlbWUtZm9ybS1zZWFyY2ggQHNlYXJjaD1cIiR7dGhpcy5fb25TZWFyY2h9XCI+PC91Y2QtdGhlbWUtZm9ybS1zZWFyY2g+XG4gKiBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVjZFRoZW1lRm9ybVNlYXJjaCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJwbGFjZWhvbGRlclwifSxcbiAgICAgIGZvcm1BY3Rpb246IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJmb3JtLWFjdGlvblwifSxcbiAgICAgIGZvcm1DbGFzczoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImZvcm0tY2xhc3NcIn0sXG4gICAgICBsYWJlbFRleHQ6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJsYWJlbC10ZXh0XCJ9LFxuICAgICAgaW5wdXRDbGFzczoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImlucHV0LWNsYXNzXCJ9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm1BY3Rpb24gPSBcIlwiO1xuICAgIHRoaXMuZm9ybUNsYXNzID0gXCJcIjtcbiAgICB0aGlzLmxhYmVsVGV4dCA9IFwiU2VhcmNoXCI7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiU2VhcmNoLi4uXCI7XG4gICAgdGhpcy5pbnB1dENsYXNzID0gXCJcIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblN1Ym1pdFxuICAgKiBAZGVzY3JpcHRpb24gQXR0YWNoZWQgdG8gZm9ybSBzdWJtaXRcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIHN1Ym1pdCBldmVudFxuICAgKi9cbiAgX29uU3VibWl0KGUpe1xuICAgIGlmICggIXRoaXMuZm9ybUFjdGlvbiApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLl9kaXNwYXRjaFNlYXJjaEV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX29uSW5wdXRcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIHNlYXJjaCBpbnB1dCBjaGFuZ2VcbiAgICogQHBhcmFtIHtFdmVudH0gZSAtIGlucHV0IGV2ZW50XG4gICAqL1xuICBfb25JbnB1dChlKXtcbiAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZGlzcGF0Y2hTZWFyY2hFdmVudFxuICAgKiBAZGVzY3JpcHRpb24gRmlyZXMgJ3NlYXJjaCcgY3VzdG9tIGV2ZW50XG4gICAqL1xuICBfZGlzcGF0Y2hTZWFyY2hFdmVudCgpIHtcbiAgICBsZXQgZSA9IG5ldyBDdXN0b21FdmVudCgnc2VhcmNoJywge1xuICAgICAgZGV0YWlsOiB7IFxuICAgICAgICBtZXNzYWdlOiAnQSBzZWFyY2ggaGFzIGJlZW4gaW5pdGlhdGVkJywgXG4gICAgICAgIHNlYXJjaFRlcm06IHRoaXMudmFsdWVcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUgfSk7XG4gIFxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLWZvcm0tc2VhcmNoJywgVWNkVGhlbWVGb3JtU2VhcmNoKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbm9ybWFsaXplQ3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzL25vcm1hbGl6ZS5jc3MuanNcIjtcbmltcG9ydCB1dGlsaXR5Q3NzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzZfdXRpbGl0eS9fdS12aXNpYmlsaXR5LmNzcy5qc1wiO1xuaW1wb3J0IHNlYXJjaENzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fc2VhcmNoLWZvcm0uY3NzLmpzXCI7XG5pbXBvcnQgZm9ybUNzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9fZm9ybXMuY3NzLmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgbGV0IGN1c3RvbUNzcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcbiAgcmV0dXJuIFtcbiAgICBub3JtYWxpemVDc3MsXG4gICAgdXRpbGl0eUNzcyxcbiAgICBmb3JtQ3NzLFxuICAgIHNlYXJjaENzcyxcbiAgICBjdXN0b21Dc3NcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYCBcbjxmb3JtIFxuICBAc3VibWl0PVwiJHt0aGlzLl9vblN1Ym1pdH1cIlxuICBhY3Rpb249XCIke3RoaXMuZm9ybUFjdGlvbn1cIiBcbiAgbWV0aG9kPVwiUE9TVFwiIFxuICBjbGFzcz1cInNlYXJjaC1mb3JtICR7dGhpcy5mb3JtQ2xhc3N9XCI+XG5cbiAgPGxhYmVsIGZvcj1cInNlYXJjaFwiIGNsYXNzPVwidS1oaWRkZW4tLXZpc3VhbGx5XCI+JHt0aGlzLmxhYmVsVGV4dH08L2xhYmVsPlxuICA8aW5wdXQgXG4gICAgdHlwZT1cInRleHRcIiBcbiAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIiBcbiAgICBpZD1cInNlYXJjaFwiIFxuICAgIGNsYXNzPVwic2VhcmNoLWZvcm1fX2lucHV0ICR7dGhpcy5pbnB1dENsYXNzfVwiIFxuICAgIG5hbWU9XCJzZWFyY2h0ZXJtXCIgXG4gICAgQGlucHV0PVwiJHt0aGlzLl9vbklucHV0fVwiXG4gICAgdmFsdWU9XCIke3RoaXMudmFsdWV9XCI+XG4gIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzZWFyY2gtZm9ybV9fc3VibWl0XCIgbmFtZT1cInNlYXJjaFwiIGFsdD1cIlNlYXJjaFwiIHZhbHVlPVwiJiN4ZjAwMjsgU3VibWl0XCI+XG5cbjwvZm9ybT5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLWhlYWRlci1zZWFyY2gtcG9wdXAudHBsLmpzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkVGhlbWVIZWFkZXJTZWFyY2hQb3B1cCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnV0dG9uVGV4dDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImJ1dHRvbi10ZXh0XCJ9LFxuICAgICAgb3BlbmVkOiB7dHlwZTogQm9vbGVhbn1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVG9nZ2xlIFNlYXJjaFwiO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG5cbiAgfVxuXG4gIF9vbkJ0bkNsaWNrKCl7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gIH1cblxuICBvcGVuKCl7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2QtdGhlbWUtaGVhZGVyLXNlYXJjaC1wb3B1cCcsIFVjZFRoZW1lSGVhZGVyU2VhcmNoUG9wdXApOyIsImltcG9ydCB7IGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5cbmltcG9ydCBmb3JtU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19mb3Jtcy5jc3MuanNcIjtcbmltcG9ydCBwb3B1cFN0eWxlcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy80X2NvbXBvbmVudC9fc2VhcmNoLXBvcHVwLmNzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCBlbGVtZW50U3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYDtcblxuICByZXR1cm4gW1xuICAgIGZvcm1TdHlsZXMsXG4gICAgcG9wdXBTdHlsZXMsXG4gICAgZWxlbWVudFN0eWxlc107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG48YnV0dG9uIFxuICBjbGFzcz1cInNlYXJjaC1wb3B1cF9fb3BlbiAke3RoaXMub3BlbmVkID8gJ3NlYXJjaC1wb3B1cF9fb3Blbi0tY2xvc2UnIDogJyd9XCIgXG4gIEBjbGljaz0ke3RoaXMuX29uQnRuQ2xpY2t9PlxuICA8c3BhbiBjbGFzcz1cInNlYXJjaC1wb3B1cF9fb3Blbi1pY29uXCI+JHt0aGlzLmJ1dHRvblRleHR9PC9zcGFuPlxuPC9idXR0b24+XG48ZGl2IGNsYXNzPVwic2VhcmNoLXBvcHVwICR7dGhpcy5vcGVuZWQgPyAnaXMtb3BlbicgOiAnJ31cIj5cbiAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+XG5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLWltYWdlLWdhbGxlcnkudHBsLmpzXCI7XG5cbmltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0IFBob3RvU3dpcGVVSSBmcm9tICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS11aS1kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWNkVGhlbWVJbWFnZUdhbGxlcnkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGlmaWVyOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIF9pbWFnZXM6IHthdHRyaWJ1dGU6IGZhbHNlLCBzdGF0ZTogdHJ1ZX0sXG4gICAgICBcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5tb2RpZmllciA9IFwiXCI7XG4gICAgdGhpcy5faW1hZ2VzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBjb25uZWN0ZWRDYWxsYmFja1xuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gZWxlbWVudCBpcyBjb25uZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB0aGlzLl9vbkNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgd2hlbiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcbiAgICB0aGlzLl9jaGlsZExpc3RPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoaWxkTGlzdE11dGF0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBzZWxmLCByZXNwb25kcyB0byBjaGFuZ2VzIGluIGNoaWxkcmVuXG4gICAqL1xuICBfb25DaGlsZExpc3RNdXRhdGlvbigpIHtcbiAgICBsZXQgaW1hZ2VzID0gW107XG4gICAgQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lICE9PSBcIklNR1wiKSAgcmV0dXJuO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzbG90JywgJ2ltYWdlLWluZGV4LScraW5kZXgpO1xuXG4gICAgICBjb25zdCBtc3JjID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gY2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgY29uc3QgYmlnSW1hZ2UgPSB7XG4gICAgICAgIHNyYzogdGhpcy5fZ2V0SW1nQXR0cihjaGlsZCwgJ3NyYycpLFxuICAgICAgICB3aWR0aDogdGhpcy5fZ2V0SW1nQXR0cihjaGlsZCwgJ3dpZHRoJyksXG4gICAgICAgIGhlaWdodDogdGhpcy5fZ2V0SW1nQXR0cihjaGlsZCwgJ2hlaWdodCcpLFxuICAgICAgfTtcblxuICAgICAgaW1hZ2VzLnB1c2goe1xuICAgICAgICBjaGlsZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGJpZ0ltYWdlLFxuICAgICAgICBtc3JjLFxuICAgICAgICBpbWFnZUluZGV4OiBpbmRleCxcbiAgICAgICAgc2xvdE5hbWU6J2ltYWdlLWluZGV4LScraW5kZXh9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ltYWdlcyA9IGltYWdlcztcbiAgICBjb25zb2xlLmxvZyhpbWFnZXMpO1xuICB9XG5cbiAgX29uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHRoaXMub3BlbkxpZ2h0Qm94KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW1hZ2UtaW5kZXgnKSk7XG5cblxuICB9XG5cbiAgX2dldEltZ0F0dHIoZWxlLCBhdHRyKXtcbiAgICByZXR1cm4gZWxlLmdldEF0dHJpYnV0ZShgYmlnLSR7YXR0cn1gKSA/IGVsZS5nZXRBdHRyaWJ1dGUoYGJpZy0ke2F0dHJ9YCkgOiBlbGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICB9XG5cbiAgb3BlbkxpZ2h0Qm94KGluZGV4PTApe1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbGlnaHQtYm94Jyk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9pbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyYzogaW1hZ2UuYmlnSW1hZ2Uuc3JjLFxuICAgICAgICB3OiBpbWFnZS5iaWdJbWFnZS53aWR0aCxcbiAgICAgICAgaDogaW1hZ2UuYmlnSW1hZ2UuaGVpZ2h0LFxuICAgICAgICB0aXRsZTogaW1hZ2UudGl0bGUsXG4gICAgICAgIG1zcmM6IGltYWdlLm1zcmNcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aHVtYm5haWwgPSB0aGlzLl9pbWFnZXNbaW5kZXhdLmNoaWxkO1xuICAgIGNvbnN0IHBhZ2VZU2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgcmVjdCA9IHRodW1ibmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaW5kZXgsXG4gICAgICBiZ09wYWNpdHk6IDAuOTUsXG4gICAgICBzaG93SGlkZU9wYWNpdHk6IHRydWUsXG4gICAgICBzaGFyZUVsOiBmYWxzZSxcbiAgICAgIGdldFRodW1iQm91bmRzRm4oKSB7XG4gICAgICAgIHJldHVybiB7eDogcmVjdC5sZWZ0LCB5OiByZWN0LnRvcCArIHBhZ2VZU2Nyb2xsLCB3OiByZWN0LndpZHRofTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZGlhbG9nLCBpdGVtcywgb3B0aW9ucyk7XG4gICAgY29uc3QgbGlnaHRCb3ggPSBuZXcgUGhvdG9Td2lwZShkaWFsb2csIFBob3RvU3dpcGVVSSwgaXRlbXMsIG9wdGlvbnMpO1xuICAgIGxpZ2h0Qm94LmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9zdHlsZU1vZGlmZXJcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIG1vZGlmaWVyIHByb3BlcnR5IGludG8gYSBjbGFzcyBzdHJpbmdcbiAgICogQHJldHVybnMge1N0cmluZ30gQ2xhc3MgbW9kaWZpZXJzIGZvciBnYWxsZXJ5IGNvbXBvbmVudFxuICAgKi9cbiAgX3N0eWxlTW9kaWZlcigpe1xuICAgIGlmICggIXRoaXMubW9kaWZpZXIgKSByZXR1cm4gXCJcIjtcblxuICAgIGxldCBjbGFzc2VzID0gdGhpcy5tb2RpZmllci5zcGxpdChcIiBcIikubWFwKG0gPT4gYGdhbGxlcnktLSR7bX1gKTtcbiAgICBjbGFzc2VzID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLWltYWdlLWdhbGxlcnknLCBVY2RUaGVtZUltYWdlR2FsbGVyeSk7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuaW1wb3J0IG1lZGlhU3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzFfYmFzZV9odG1sL19tZWRpYS5jc3MuanNcIjtcbmltcG9ydCBnYWxsZXJ5U3R5bGVzIGZyb20gXCJAdWNkLWxpYi90aGVtZS1zYXNzLzRfY29tcG9uZW50L19nYWxsZXJ5LmNzcy5qc1wiO1xuXG5pbXBvcnQgcGhvdG9Td2lwZUNzcyBmcm9tIFwicGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzXCI7XG5pbXBvcnQgcGhvdG9Td2lwZVNraW5Dc3MgZnJvbSBcInBob3Rvc3dpcGUvZGlzdC9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCBlbGVtZW50U3R5bGVzID0gY3NzYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuZ2FsbGVyeSBhOmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHdpZHRoPSczMnB4JyBoZWlnaHQ9JzMycHgnIHZpZXdCb3g9JzAgMCAzMiAzMicgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgMzIgMzInIHhtbDpzcGFjZT0ncHJlc2VydmUnPjxwYXRoIGZpbGw9JyUyM0ZGRkZGRicgZD0nTTAsMGgzMnYzMkgwVjB6IE0xOC40NDYsMTUuODc2bDYuMTY0LTYuMTY0bDIuOTQyLDIuOTRWNC40NDdoLTguMjA1bDIuOTQyLDIuOTQzbC02LjE2NCw2LjE2NCBMMTguNDQ2LDE1Ljg3NnogTTEzLjU1NCwxNi4xMjRMNy4zOSwyMi4yODhsLTIuOTQyLTIuOTR2OC4yMDVoOC4yMDVMOS43MSwyNC42MDlsNi4xNjQtNi4xNjRMMTMuNTU0LDE2LjEyNHonLz48L3N2Zz5cIik7XG4gICAgfVxuICAgIDo6c2xvdHRlZChpbWcpe1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICBgO1xuICBtZWRpYVN0eWxlcy5jc3NUZXh0ID0gbWVkaWFTdHlsZXMuY3NzVGV4dC5yZXBsYWNlQWxsKCdpbWcnLCAnOjpzbG90dGVkKGltZyknKTtcblxuICByZXR1cm4gW1xuICAgIG1lZGlhU3R5bGVzLFxuICAgIGdhbGxlcnlTdHlsZXMsXG4gICAgZWxlbWVudFN0eWxlc1xuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgJHtwaG90b1N3aXBlQ3NzfVxuICAgICR7cGhvdG9Td2lwZVNraW5Dc3N9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJnYWxsZXJ5ICR7dGhpcy5fc3R5bGVNb2RpZmVyKCl9XCI+XG4gICAgJHt0aGlzLl9pbWFnZXMubWFwKChpbWcsIGkpID0+IGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9faXRlbVwiPlxuICAgICAgICA8YSBAY2xpY2s9XCIke3RoaXMuX29uQ2xpY2t9XCIgaW1hZ2UtaW5kZXg9XCIke2ltZy5pbWFnZUluZGV4fVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPHNsb3QgbmFtZT1cIiR7aW1nLnNsb3ROYW1lfVwiPjwvc2xvdD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgYCl9XG4gIDwvZGl2PlxuXG48IS0tIFJvb3QgZWxlbWVudCBvZiBQaG90b1N3aXBlLiBNdXN0IGhhdmUgY2xhc3MgcHN3cC4gLS0+XG48ZGl2IGlkPVwibGlnaHQtYm94XCIgY2xhc3M9XCJwc3dwXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgPGRpdiBjbGFzcz1cInBzd3BfX2JnXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwc3dwX19zY3JvbGwtd3JhcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3RvcC1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NvdW50ZXJcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJDbG9zZSAoRXNjKVwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tc2hhcmVcIiB0aXRsZT1cIlNoYXJlXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1mc1wiIHRpdGxlPVwiVG9nZ2xlIGZ1bGxzY3JlZW5cIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb21cIiB0aXRsZT1cIlpvb20gaW4vb3V0XCI+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19pY25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19wcmVsb2FkZXJfX2N1dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19kb251dFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2hhcmUtbW9kYWwgcHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiBwc3dwX19zaW5nbGUtdGFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS10b29sdGlwXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdFwiIHRpdGxlPVwiUHJldmlvdXMgKGFycm93IGxlZnQpXCI+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHRcIiB0aXRsZT1cIk5leHQgKGFycm93IHJpZ2h0KVwiPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvbl9fY2VudGVyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uLnRwbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBVY2RUaGVtZUxpc3RBY2NvcmRpb25cbiAqIEBjbGFzc2Rlc2MgQ29tcG9uZW50IGNsYXNzIGZvciBkaXNwbGF5aW5nIGxpc3RzIHdpdGggYWNjb3JkaW9uIGNvbGxhcHNlL2V4cGFuZCBmdW5jdGlvbmFsaXR5LlxuICogUGF0dGVybiBMYWIgVXJsOiBcbiAqICAtIGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1hdG9tcy1saXN0LWFjY29yZGlvblxuICogIC0gaHR0cDovL2Rldi53ZWJzdHlsZWd1aWRlLnVjZGF2aXMuZWR1L3JlZGVzaWduLz9wPWF0b21zLWxpc3QtZmFxXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsaXN0U3R5bGUgLSAnYWNjb3JkaW9uJyBvciAnZmFxJ1xuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICA8dWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uPlxuICogICAgPGRpdj5DbGljayBtZSB0byBleHBhbmQgZGl2IGJlbG93PC9kaXY+XG4gKiAgICA8ZGl2Pkkgd2lsbCBiZSB0b2dnbGVkIHdoZW4gdGhlIGFib3ZlIGl0ZW0gaXMgY2xpY2tlZC48L2Rpdj5cbiAqICAgIDxkaXY+VGhlIGRpcmVjdCBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQgbXVzdCBiZSBkaXZzPC9kaXY+XG4gKiAgICA8ZGl2PkJ1dCB5b3UgY2FuIHBhc3MgdGhyb3VnaCA8YSBocmVmPVwiI1wiPnJpY2ggdGV4dDwvYT4gd2l0aGluLlxuICogIDwvdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uPlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZUxpc3RBY2NvcmRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpc3RTdHlsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImxpc3Qtc3R5bGVcIn0sXG4gICAgICBfbGlzdEl0ZW1zOiB7YXR0cmlidXRlOiBmYWxzZSwgc3RhdGU6IHRydWV9LFxuICAgICAgX2F2YWlsYWJsZVN0eWxlczoge2F0dHJpYnV0ZTogZmFsc2UsIHN0YXRlOiB0cnVlfSxcbiAgICAgIF9leHBhbmRlZEl0ZW1zOiB7YXR0cmlidXRlOiBmYWxzZSwgc3RhdGU6IHRydWV9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9saXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLl9hdmFpbGFibGVTdHlsZXMgPSBbJ2FjY29yZGlvbicsICdmYXEnXTtcbiAgICB0aGlzLmxpc3RTdHlsZSA9IHRoaXMuX2F2YWlsYWJsZVN0eWxlc1swXTtcbiAgICB0aGlzLl9leHBhbmRlZEl0ZW1zID0gbmV3IFNldCgpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdXBkYXRlZFxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIGFmdGVyIGVsZW1lbnQgaGFzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7TWFwfSBwcm9wcyAtIHByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWQgXG4gICAqL1xuICB1cGRhdGVkKHByb3BzKXtcbiAgICBpZiAoIHByb3BzLmhhcyhcImxpc3RTdHlsZVwiKSApIHtcbiAgICAgIGlmICggIXRoaXMuX2F2YWlsYWJsZVN0eWxlcy5pbmNsdWRlcyh0aGlzLmxpc3RTdHlsZS50b0xvd2VyQ2FzZSgpKSApIHtcbiAgICAgICAgdGhpcy5saXN0U3R5bGUgPSB0aGlzLl9hdmFpbGFibGVTdHlsZXNbMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgY29ubmVjdGVkXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpe1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2hpbGRMaXN0T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihcbiAgICAgIChtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikgPT4gdGhpcy5fb25DaGlsZExpc3RNdXRhdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikpO1xuICAgIHRoaXMuX2NoaWxkTGlzdE9ic2VydmVyLm9ic2VydmUodGhpcywge2NoaWxkTGlzdDogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzY29ubmVjdGVkQ2FsbGJhY2tcbiAgICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBsaWZlY3ljbGUgbWV0aG9kIGNhbGxlZCB3aGVuIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpe1xuICAgIHRoaXMuX2NoaWxkTGlzdE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdG9nZ2xlSXRlbVZpc2libGl0eVxuICAgKiBAZGVzY3JpcHRpb24gRXhwYW5kcy9jb2xsYXBzZXMgYW4gaXRlbVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gZXhwYW5kL2NvbGxhcHNlICh6ZXJvIGluZGV4ZWQpXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNQYWlySW5kZXggLSBUaGUgdHlwZSBvZiBpbmRleFxuICAgKiAgSWYgZmFsc2UsIHVzZSB0aGUgZmxhdHRlbmVkIGluZGV4IG9mIHRoZSBfbGlzdEl0ZW1zIGFycmF5OlxuICAgKiAgICBbcTEsIGExLCBxMiwgYTIsIHEzLCBhMy4uLl1cbiAgICogIElmIHRydWUsIHRyZWF0cyB0aGUgdGl0bGUgYW5kIGNvbnRlbnQgKG9yIHF1ZXN0aW9uIGFuZCBhbnN3ZXIpIGFzIGEgcGFpcjpcbiAgICogICAgMDogZmlyc3QgcGFpciwgMTogc2Vjb25kIHBhaXIsIGV0Y1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRpc3BhdGNoRXZlbnQgLSBXaWxsIGRpc3BhdGNoIGN1c3RvbSAnaXRlbS10b2dnbGUnIGV2ZW50XG4gICAqL1xuICBhc3luYyB0b2dnbGVJdGVtVmlzaWJsaXR5KGluZGV4LCBpc1BhaXJJbmRleD10cnVlLCBkaXNwYXRjaEV2ZW50PWZhbHNlKXtcbiAgICBsZXQgcGFpckluZGV4ID0gaXNQYWlySW5kZXggPyBpbmRleCA6IE1hdGguZmxvb3IoaW5kZXggLyAyKTtcbiAgICBpZiAoIHRoaXMuX2V4cGFuZGVkSXRlbXMuaGFzKHBhaXJJbmRleCkgKXtcbiAgICAgIHRoaXMuX2V4cGFuZGVkSXRlbXMuZGVsZXRlKHBhaXJJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4cGFuZGVkSXRlbXMuYWRkKHBhaXJJbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICBpZiAoIGRpc3BhdGNoRXZlbnQgKSB0aGlzLl9kaXNwYXRjaEl0ZW1Ub2dnbGVFdmVudChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpdGVtSXNFeHBhbmRlZFxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIGl0ZW0gaXMgZXhwYW5kZWRcbiAgICogQHBhcmFtIHtOdW5iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNQYWlySW5kZXggLSBEb2VzIHRoZSBpbmRleCBwYXJhbSByZWZlciB0byBRL0EgcGFpciBvciB0aGUgZmxhdHRlbmVkIGluZGV4P1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGl0ZW1Jc0V4cGFuZGVkKGluZGV4LCBpc1BhaXJJbmRleD10cnVlKSB7XG4gICAgbGV0IHBhaXJJbmRleCA9IGlzUGFpckluZGV4ID8gaW5kZXggOiBNYXRoLmZsb29yKGluZGV4IC8gMik7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkSXRlbXMuaGFzKHBhaXJJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25UaXRsZUNsaWNrXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBpdGVtIHRpdGxlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGUgXG4gICAqL1xuICBfb25UaXRsZUNsaWNrKGUpIHtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpdGVtLWluZGV4XCIpKTtcbiAgICB0aGlzLnRvZ2dsZUl0ZW1WaXNpYmxpdHkoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vblRpdGxlS2V5VXBcbiAgICogQGRlc2NyaXB0aW9uIEF0dGFjaGVkIHRvIGl0ZW0gdGl0bGVcbiAgICogQHBhcmFtIHtFdmVudH0gZSBcbiAgICovXG4gIF9vblRpdGxlS2V5VXAoZSkge1xuICAgIGlmKCBlLndoaWNoICE9PSAxMyApIHJldHVybjtcbiAgICBsZXQgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpdGVtLWluZGV4XCIpKTtcbiAgICB0aGlzLnRvZ2dsZUl0ZW1WaXNpYmxpdHkoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9vbkNoaWxkTGlzdE11dGF0aW9uXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBzZWxmLCByZXNwb25kcyB0byBjaGFuZ2VzIGluIGNoaWxkcmVuXG4gICAqL1xuICBfb25DaGlsZExpc3RNdXRhdGlvbigpIHtcbiAgICBsZXQgbGlzdEl0ZW1zID0gW107XG4gICAgQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lICE9PSBcIkRJVlwiKSAgcmV0dXJuO1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzbG90JywgJ2xpc3QtaXRlbS0nK2luZGV4KTtcbiAgICAgIGlmKCB0aGlzLmxpc3RTdHlsZSA9PT0gJ2ZhcScgKSB7XG4gICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgIH1cblxuICAgICAgbGlzdEl0ZW1zLnB1c2goe2NoaWxkLCBzbG90TmFtZTonbGlzdC1pdGVtLScraW5kZXh9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9saXN0SXRlbXMgPSBsaXN0SXRlbXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfZGlzcGF0Y2hJdGVtVG9nZ2xlRXZlbnRcbiAgICogQGRlc2NyaXB0aW9uIEZpcmVzICdpdGVtLXRvZ2dsZScgY3VzdG9tIGV2ZW50IHdoZW4gdXNlciBleHBhbmRzL2NvbGxhcHNlcyBhbiBpdGVtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgX2xpc3RJdGVtcyBhcnJheSBwcm9wZXJ0eVxuICAgKi9cbiAgX2Rpc3BhdGNoSXRlbVRvZ2dsZUV2ZW50KGluZGV4KSB7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2l0ZW0tdG9nZ2xlJywge1xuICAgICAgZGV0YWlsOiB7IFxuICAgICAgICBtZXNzYWdlOiAnQSBsaXN0IGl0ZW0gaGFzIGJlZW4gZXhwYW5kZWQgb3IgY29sbGFwc2VkJywgXG4gICAgICAgIGlzRXhwYW5kZWQ6IHRoaXMuaXRlbUlzRXhwYW5kZWQoaW5kZXgsIGZhbHNlKSxcbiAgICAgICAgaXRlbToge3RpdGxlOiB0aGlzLl9saXN0SXRlbXNbaW5kZXhdLCBjb250ZW50OiB0aGlzLl9saXN0SXRlbXNbaW5kZXggKyAxXX0sXG4gICAgICAgIGxpc3RJdGVtSW5kZXg6IGluZGV4LFxuICAgICAgICBsaXN0SXRlbVBhaXJJbmRleDogTWF0aC5mbG9vcihpbmRleCAvIDIpXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9pc1RpdGxlXG4gICAqIEBkZXNjcmlwdGlvbiBJdGVtIGlzIHRpdGxlIG9yIHF1ZXN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaSAtIEFycmF5IGluZGV4LlxuICAgKiBAcmV0dXJucyAge0Jvb2xlYW59XG4gICAqL1xuICBfaXNUaXRsZShpKSB7XG4gICAgcmV0dXJuIGkgJSAyID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX2lzQ29udGVudFxuICAgKiBAZGVzY3JpcHRpb24gSXRlbSBpcyBjb250ZW50IG9yIGFuc3dlci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBBcnJheSBpbmRleC5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBfaXNDb250ZW50KGkpe1xuICAgIHJldHVybiAhdGhpcy5faXNUaXRsZShpKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uJywgVWNkVGhlbWVMaXN0QWNjb3JkaW9uKTsiLCJpbXBvcnQgeyBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgbGlzdENzcyBmcm9tIFwiQHVjZC1saWIvdGhlbWUtc2Fzcy8yX2Jhc2VfY2xhc3MvX2xpc3RzLmNzcy5qc1wiO1xuaW1wb3J0IHsgbW90aW9uQ29sbGFwc2UgfSBmcm9tIFwiLi4vdXRpbHMvZGlyZWN0aXZlcy9tb3Rpb24tY29sbGFwc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgbGV0IGN1c3RvbVN0eWxlcyA9IGNzc2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLml0ZW0tdGl0bGUgOjpzbG90dGVkKCopIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgYDtcbiAgcmV0dXJuIFtcbiAgICBsaXN0Q3NzLCBcbiAgICBjdXN0b21TdHlsZXNcbiAgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuPHVsIGNsYXNzPVwibGlzdC0tJHt0aGlzLmxpc3RTdHlsZX1cIj5cbiR7dGhpcy5fbGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IGh0bWxgXG4gICR7dGhpcy5faXNUaXRsZShpbmRleCkgPyBodG1sYFxuICAgIDxsaSBcbiAgICAgIGlkPVwiYWNjb3JkaW9uLSR7aW5kZXh9XCJcbiAgICAgIGNsYXNzPVwiaXRlbS10aXRsZVwiXG4gICAgICBpdGVtLWluZGV4PVwiJHtpbmRleH1cIiBcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICBAY2xpY2s9JHt0aGlzLl9vblRpdGxlQ2xpY2t9XG4gICAgICBAa2V5dXA9JHt0aGlzLl9vblRpdGxlS2V5VXB9XG4gICAgICBhcmlhLWNvbnRyb2xzPVwiYWNjb3JkaW9uLSR7aW5kZXh9LXBhbmVsXCJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCIke3RoaXMuaXRlbUlzRXhwYW5kZWQoaW5kZXgsIGZhbHNlKX1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCIke2l0ZW0uc2xvdE5hbWV9XCI+PC9zbG90PlxuICAgIDwvbGk+XG4gIGAgOiBodG1sYFxuICAgIDxsaSBcbiAgICAgIGlkPVwiYWNjb3JkaW9uLSR7aW5kZXh9LXBhbmVsXCIgXG4gICAgICAke21vdGlvbkNvbGxhcHNlKHtkdXJhdGlvbjogMzAwfSl9XG4gICAgICBjbGFzcz1cIml0ZW0tY29udGVudFwiXG4gICAgICByb2xlPVwicmVnaW9uXCIgXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhY2NvcmRpb24tJHtpbmRleH1cIiBcbiAgICAgID9oaWRkZW49XCIkeyF0aGlzLml0ZW1Jc0V4cGFuZGVkKGluZGV4LCBmYWxzZSl9XCI+XG4gICAgICA8c2xvdCBuYW1lPVwiJHtpdGVtLnNsb3ROYW1lfVwiPjwvc2xvdD5cbiAgICA8L2xpPlxuICBgfVxuYCkgfVxuPC91bD5cbmA7fSIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHtyZW5kZXIsIHN0eWxlc30gZnJvbSBcIi4vdWNkLXRoZW1lLW1lc3NhZ2UtYXJlYS50cGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVWNkVGhlbWVNZXNzYWdlQXJlYVxuICogQGNsYXNzZGVzYyBVSSBjb21wb25lbnQgY2xhc3MgZm9yIGRpc3BsYXlpbmcgYSBkaXNtaXNzYWJsZSBtZXNzYWdlIHBhbmVsXG4gKiBQYXR0ZXJuIExhYiBVcmw6IGh0dHA6Ly9kZXYud2Vic3R5bGVndWlkZS51Y2RhdmlzLmVkdS9yZWRlc2lnbi8/cD1tb2xlY3VsZXMtbWVzc2FnZS1hcmVhXG4gKiBcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0aXRsZSAtIFRoZSBtZXNzYWdlIHBhbmVsIGhlYWRlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGJ1dHRvblRleHQgLSBUaGUgdGV4dCBvZiB0aGUgZGlzbWlzcyBidXR0b24gKGlzIGhpZGRlbilcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gY29sbGFwc2VkIC0gV2hldGhlciBvciBub3QgdGhlIHBhbmVsIGNvbnRlbnQgaXMgdmlzaWJsZVxuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICAgPHVjZC10aGVtZS1tZXNzYWdlLWFyZWEgdGl0bGU9J1lvdXIgbWVzc2FnZSBwYW5lbCBoZWFkZXInPlxuICogICAgWW91ciBjb250ZW50IGdvZXMgaGVyZS5cbiAqICAgPC91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhPlxuICogYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVY2RUaGVtZU1lc3NhZ2VBcmVhIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZSA6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYnV0dG9uVGV4dCA6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2J1dHRvbi10ZXh0J30sXG4gICAgICBjb2xsYXBzZWQgOiB7dHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZX1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25CdG5DbGlja2VkXG4gICAqIEBkZXNjcmlwdGlvbiBBdHRhY2hlZCB0byBkaXNtaXNzIGJ1dHRvbiBpbiB1cHBlci1yaWdodCBjb3JuZXIuXG4gICAqL1xuICBfb25CdG5DbGlja2VkKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIHRoaXMuX2Rpc3BhdGNoVG9nZ2xlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9kaXNwYXRjaFRvZ2dsZUV2ZW50XG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwYXRjaGVzICdhY2NvcmRpb24tdG9nZ2xlJyBjdXN0b20gZXZlbnQgd2hlbiB1c2VyIHRvZ2dsZXMgcGFuZWwgY29udGVudCB2aXNpYmlsaXR5LlxuICAgKi9cbiAgX2Rpc3BhdGNoVG9nZ2xlRXZlbnQoKXtcbiAgICBsZXQgZSA9IG5ldyBDdXN0b21FdmVudCgnYWNjb3JkaW9uLXRvZ2dsZScsIHtcbiAgICAgIGRldGFpbDogeyBcbiAgICAgICAgbWVzc2FnZTogJ01lc3NhZ2UgYXJlYSBjb250ZW50IGhhcyBiZWVuIGV4cGFuZGVkIG9yIGNvbGxhcHNlZCcsIFxuICAgICAgICBpc0NvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWRcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1Y2QtdGhlbWUtbWVzc2FnZS1hcmVhJywgVWNkVGhlbWVNZXNzYWdlQXJlYSk7IiwiaW1wb3J0IHsgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuaW1wb3J0IGhlYWRpbmdTdHlsZXMgZnJvbSAnQHVjZC1saWIvdGhlbWUtc2Fzcy8xX2Jhc2VfaHRtbC9faGVhZGluZ3MuY3NzLmpzJztcbmltcG9ydCBtZXNzYWdlU3R5bGVzIGZyb20gJ0B1Y2QtbGliL3RoZW1lLXNhc3MvNF9jb21wb25lbnQvX21lc3NhZ2UtYXJlYS5jc3MuanMnO1xuaW1wb3J0IGZvcm1TdHlsZXMgZnJvbSBcIkB1Y2QtbGliL3RoZW1lLXNhc3MvMV9iYXNlX2h0bWwvX2Zvcm1zLmNzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKCl7XG4gIGxldCBjdXN0b21TdHlsZXMgPSBjc3NgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5tZXNzYWdlLWFyZWEtLWNsb3NlZCB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICBgO1xuICByZXR1cm4gW1xuICAgIGhlYWRpbmdTdHlsZXMsXG4gICAgZm9ybVN0eWxlcyxcbiAgICBtZXNzYWdlU3R5bGVzLFxuICAgIGN1c3RvbVN0eWxlc1xuICBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7IFxuICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1hcmVhICR7dGhpcy5jb2xsYXBzZWQgPyAnbWVzc2FnZS1hcmVhLS1jbG9zZWQnOiAnJ31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWFyZWFfX2NvbnRlbnRcIiBkYXRhLWN5PVwiY29udGVudFwiIGlkPVwiY29udGVudFwiIGFyaWEtbGFiZWxsZWRieT1cImJ1dHRvblwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtZXNzYWdlLWFyZWFfX3RpdGxlXCI+JHt0aGlzLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWFyZWFfX2JvZHlcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwibWVzc2FnZS1hcmVhX19idXR0b25cIiBcbiAgICAgICAgZGF0YS1jeT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJjb250ZW50XCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cIiR7IXRoaXMuY29sbGFwc2VkfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGlzLmJ1dHRvblRleHR9XCIgXG4gICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25CdG5DbGlja2VkfVwiPiR7dGhpcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgO1xufSIsImltcG9ydCB7bm90aGluZ30gZnJvbSAnbGl0L2h0bWwuanMnO1xuaW1wb3J0IHtBc3luY0RpcmVjdGl2ZX0gZnJvbSAnbGl0L2FzeW5jLWRpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgUGFydFR5cGV9IGZyb20gJ2xpdC9kaXJlY3RpdmUuanMnO1xuXG5jb25zdCBhbmltYXRpb25PcHRpb25zID0gW1xuICAnZGVsYXknLFxuICAnZHVyYXRpb24nLFxuICAnZWFzaW5nJyxcbl07XG5cbi8qKlxuICogQGNsYXNzIE1vdGlvbkNvbGxhcHNlXG4gKiBAY2xhc3NkZXNjIExpdCBkaXJlY3RpdmUgY29udHJvbGVyIGZvciBhZGRpbmcgY29sbGFwc2UvZXhwYW5kIGFjY29yZGlvbi1saWtlIGFuaW1hdGlvbiB0byBhbiBlbGVtZW50LlxuICogXG4gKiBAZXhhbXBsZVxuICogaHRtbGBcbiAqICA8ZGl2ICR7bW90aW9uQ29sbGFwc2Uoe2R1cmF0aW9uOiAzMDB9KX0+SSBhbSBhbmltYXRlZDwvZGl2PlxuICogYFxuICovXG5leHBvcnQgY2xhc3MgTW90aW9uQ29sbGFwc2UgZXh0ZW5kcyBBc3luY0RpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY29uc3RydWN0b3JcbiAgICogQGRlc2NyaXB0aW9uIHNldHMgYW5pbWF0aW9uIGRlZmF1bHRzXG4gICAqIEBwYXJhbSB7QXR0cmlidXRlUGFydH0gcGFydCBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBzdXBlcihwYXJ0KTtcbiAgICBpZiAocGFydC50eXBlID09PSBQYXJ0VHlwZS5DSElMRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIGBtb3Rpb25Db2xsYXBzZWAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiBhdHRyaWJ1dGUgcG9zaXRpb24uJ1xuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5zdGF0dXMgPSBcIlwiO1xuXG4gICAgLy8gYW5pbWF0aW9uIGRlZmF1bHRzXG4gICAgdGhpcy5kdXJhdGlvbiA9IDQwMDtcbiAgICB0aGlzLmRlbGF5ID0gMDtcbiAgICB0aGlzLmVhc2luZyA9IFwibGluZWFyXCI7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRTdHlsZXNcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgc2VsZWN0IGNvbXB1dGVkIHN0eWxlcyBmb3IgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdHlsZXNcbiAgICovXG4gIGdldFN0eWxlcygpe1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgcGFkZGluZ1RvcDogY29tcHV0ZWRTdHlsZXMucGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b206IGNvbXB1dGVkU3R5bGVzLnBhZGRpbmdCb3R0b20sXG4gICAgICBtYXJnaW5Ub3A6IGNvbXB1dGVkU3R5bGVzLm1hcmdpblRvcCxcbiAgICAgIG1hcmdpbkJvdHRvbTogY29tcHV0ZWRTdHlsZXMubWFyZ2luQm90dG9tLFxuICAgICAgaGVpZ2h0OiBjb21wdXRlZFN0eWxlcy5oZWlnaHQsXG4gICAgICBkaXNwbGF5OiBjb21wdXRlZFN0eWxlcy5kaXNwbGF5LFxuICAgICAgdmlzaWJpbGl0eTogY29tcHV0ZWRTdHlsZXMudmlzaWJpbGl0eSxcbiAgICAgIG9mZnNldEhlaWdodDogdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQGRlc2NyaXB0aW9uIFJlcXVpcmVkIG1ldGhvZCBmb3IgYSBMaXQgZGlyZWN0aXZlXG4gICAqIEByZXR1cm5zIHtub3RoaW5nfSBEb2Vzbid0IHJlbmRlciBhbnl0aGluZ1xuICAgKi9cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIG5vdGhpbmc7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB1cGRhdGVcbiAgICogQGRlc2NyaXB0aW9uIExpdCBkaXJlY3RpdmUgbWV0aG9kLiBBdHRhY2hlcyBjb250cm9sbGVyIHdoZW4gZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge1BhcnR9IHBhcnQgXG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMgLSBhcmd1bWVudCBsaXN0IHBhc3NlZCB0byBkaXJlY3RpdmVcbiAgICogQHJldHVybnMgcmVuZGVyXG4gICAqL1xuICB1cGRhdGUocGFydCwgb3B0aW9ucyl7XG4gICAgdGhpcy5pc0ZpcnN0VXBkYXRlID0gdGhpcy5faG9zdCA9PT0gdW5kZWZpbmVkO1xuICAgIGlmICggdGhpcy5pc0ZpcnN0VXBkYXRlICYmIHBhcnQub3B0aW9ucyApIHtcbiAgICAgIHRoaXMuX2hvc3QgPSBwYXJ0Lm9wdGlvbnMuaG9zdDtcbiAgICAgIHRoaXMuX2hvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcnQuZWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX3NldE9wdGlvbnNcbiAgICogQGRlc2NyaXB0aW9uIENvbnZlcnRzIGRpcmVjdGl2ZSBhcmd1bWVudHMgdG8gY2xhc3MgcHJvcGVydGllc1xuICAgKiBGaXJzdCBhcmd1bWVudCBpcyBhbmltYXRpb24gc2V0dGluZ3NcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucyAtIGxpc3Qgb2YgZGlyZWN0aXZlIGFyZ3VtZW50c1xuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIF9zZXRPcHRpb25zKG9wdGlvbnMpe1xuICAgIGlmICggXG4gICAgICAhb3B0aW9ucyB8fFxuICAgICAgIW9wdGlvbnMubGVuZ3RoIHx8IFxuICAgICAgdHlwZW9mIG9wdGlvbnNbMF0gIT09ICdvYmplY3QnIHx8XG4gICAgICBBcnJheS5pc0FycmF5KCBvcHRpb25zWzBdIClcbiAgICApIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBhbmlLZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc1swXSk7XG4gICAgYW5pbWF0aW9uT3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICBpZiAoIGFuaUtleXMuaW5jbHVkZXMob3B0KSApIHtcbiAgICAgICAgdGhpc1tvcHRdID0gb3B0aW9uc1swXVtvcHRdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBob3N0VXBkYXRlXG4gICAqIEBkZXNjcmlwdGlvbiBMaXQgY29udHJvbGxlciBtZXRob2QgY2FsbGVkIHdoZW4gaG9zdCBlbGVtZW50IHVwZGF0ZSBjeWNsZSBpcyBzdGFydGVkXG4gICAqL1xuICBob3N0VXBkYXRlKCl7XG4gICAgaWYgKCB0aGlzLmFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGlvbi5wbGF5U3RhdGUgPT09ICdydW5uaW5nJyApIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVTdHlsZXMgPSB0aGlzLmdldFN0eWxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaG9zdFVwZGF0ZVxuICAgKiBAZGVzY3JpcHRpb24gTGl0IGNvbnRyb2xsZXIgbWV0aG9kIGNhbGxlZCB3aGVuIGhvc3QgZWxlbWVudCB1cGRhdGUgY3ljbGUgaXMgY29tcGxldGVkXG4gICAqL1xuICBob3N0VXBkYXRlZCgpe1xuICAgIHRoaXMuX3VwZGF0ZWRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcygpO1xuICAgIHRoaXMubWFpbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgX21ha2VGcmFtZVxuICAgKiBAZGVzY3JpcHRpb24gQ29uc3RydWN0cyBhbiBhbmltYXRpb24gZnJhbWUgdG8gYmUgcGFzc2VkIHRvIGVsZS5hbmltYXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmcmFtZVR5cGUgLSBleHBhbmRlZCBvciBjb2xsYXBzZWRcbiAgICogQHJldHVybnMge09iamVjdH0gU3R5bGVzIHRvIGFuaW1hdGVcbiAgICovXG4gIF9tYWtlRnJhbWUoZnJhbWVUeXBlKXtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0YXR1cyA9PT0gJ2V4cGFuZGluZycgPyB0aGlzLl91cGRhdGVkU3R5bGVzIDogdGhpcy5fdXBkYXRlU3R5bGVzO1xuICAgIGxldCBmcmFtZSA9IHt9O1xuICAgIGlmIChmcmFtZVR5cGUgPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICBmcmFtZSA9ICB7XG4gICAgICAgIGhlaWdodDogXCIwcHhcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIwcHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMHB4XCJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lID0gIHtcbiAgICAgICAgaGVpZ2h0OiBzdHlsZXMuaGVpZ2h0LFxuICAgICAgICBwYWRkaW5nVG9wOiBzdHlsZXMucGFkZGluZ1RvcCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogc3R5bGVzLnBhZGRpbmdCb3R0b20sXG4gICAgICAgIG1hcmdpblRvcDogc3R5bGVzLm1hcmdpblRvcCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBzdHlsZXMubWFyZ2luQm90dG9tXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBfb25BbmltYXRpb25FbmRcbiAgICogQGRlc2NyaXB0aW9uIEZpcmVzIHdoZW4gYW5pbWF0aW9uIGVuZHMgLSBlaXRoZXIgc3VjY2VzcyBvciBjYW5jZWxcbiAgICovXG4gIF9vbkFuaW1hdGlvbkVuZCgpe1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdleHBhbmRpbmcnKXtcbiAgICAgIHRoaXMuc3RhdHVzID0gXCJleHBhbmRlZFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdjb2xsYXBzaW5nJykge1xuICAgICAgdGhpcy5zdGF0dXMgPSBcImNvbGxhcHNlZFwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIF9lbGVtZW50SGFzQ2hhbmdlZFxuICAgKiBAZGVzY3JpcHRpb24gRGV0ZWN0cyB3aGV0aGVyIHRoZSBlbGVtZW50IHRoYXQgdGhpcyBkaXJlY3RpdmUgaXMgYXR0YWNoZWQgdG8gaGFzIGJlZW4gY2xpY2tlZFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIF9lbGVtZW50SGFzQ2hhbmdlZCgpe1xuICAgIGlmICggdGhpcy5fdXBkYXRlU3R5bGVzLm9mZnNldEhlaWdodCAhPSB0aGlzLl91cGRhdGVkU3R5bGVzLm9mZnNldEhlaWdodCApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuX3VwZGF0ZVN0eWxlcy52aXNpYmlsaXR5ICE9IHRoaXMuX3VwZGF0ZWRTdHlsZXMudmlzaWJpbGl0eSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBtYWluXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGNvbGxhcHNlL2V4cGFuZCBhbmltYXRpb24gdG8gZWxlbWVudC5cbiAgICogQHJldHVybnMgXG4gICAqL1xuICBhc3luYyBtYWluKCl7XG4gICAgaWYgKCBcbiAgICAgICF0aGlzLmVsZW1lbnQuaXNDb25uZWN0ZWQgfHxcbiAgICAgIHRoaXMuaXNGaXJzdFVwZGF0ZSB8fFxuICAgICAgIXRoaXMuX2VsZW1lbnRIYXNDaGFuZ2VkKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuX3VwZGF0ZWRTdHlsZXMudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgfHwgIXRoaXMuX3VwZGF0ZWRTdHlsZXMub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFwiY29sbGFwc2luZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFwiZXhwYW5kaW5nXCI7XG4gICAgfVxuXG4gICAgbGV0IGZyYW1lcyA9IFtdO1xuICAgIGNvbnN0IGNvbGxhcHNlZEZyYW1lID0gdGhpcy5fbWFrZUZyYW1lKCdjb2xsYXBzZWQnKTtcbiAgICBjb25zdCBleHBhbmRlZEZyYW1lID0gdGhpcy5fbWFrZUZyYW1lKCdleHBhbmRlZCcpO1xuXG4gICAgaWYgKCB0aGlzLnN0YXR1cyA9PT0gJ2V4cGFuZGluZycpIHsgXG4gICAgICBmcmFtZXMucHVzaChjb2xsYXBzZWRGcmFtZSwgZXhwYW5kZWRGcmFtZSk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX3VwZGF0ZWRTdHlsZXMuZGlzcGxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzLnB1c2goZXhwYW5kZWRGcmFtZSwgY29sbGFwc2VkRnJhbWUpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl91cGRhdGVTdHlsZXMuZGlzcGxheTtcbiAgICB9XG5cbiAgICBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmVsZW1lbnQuYW5pbWF0ZShcbiAgICAgIGZyYW1lcywgXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLCBcbiAgICAgICAgZGVsYXk6IHRoaXMuZGVsYXksXG4gICAgICAgIGVhc2luZzogdGhpcy5lYXNpbmdcbiAgICAgIH1cbiAgICApO1xuICAgIGlmICggIXRoaXMuYW5pbWF0aW9uLm9uZmluaXNoICkge1xuICAgICAgdGhpcy5hbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiB0aGlzLl9vbkFuaW1hdGlvbkVuZCgnZmluaXNoJyk7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5vbmNhbmNlbCA9ICgpID0+IHRoaXMuX29uQW5pbWF0aW9uRW5kKCdjYW5jZWwnKTtcbiAgICB9XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1vdGlvbkNvbGxhcHNlID0gZGlyZWN0aXZlKE1vdGlvbkNvbGxhcHNlKTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gd2luZG93LlNoYWRvd1Jvb3QgJiZcbiAgICAod2luZG93LlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc2FmZVRva2VuKSB7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gICAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgICAvLyBzdHlsZXNoZWV0cyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gTm90ZSwgaWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZVxuICAgICAgICAvLyBDU1NTdHlsZVNoZWV0IGlzIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgdGhpcy5fc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSBbW2Bjc3NgXV0gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KFN0cmluZyh2YWx1ZSksIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0Q2FjaGUgPSBuZXcgTWFwKCk7XG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBbW0xpdEVsZW1lbnQuc3R5bGVzIHxcbiAqIGBzdHlsZXNgXV0gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsXG4gKiBzdHJpbmcgdmFsdWVzIG1heSBiZSB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgW1tgdW5zYWZlQ1NTYF1dXG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYSB0ZW1wbGF0ZSBzdHJpbmcgcGFydC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgbGV0IHJlc3VsdCA9IGNzc1Jlc3VsdENhY2hlLmdldChjc3NUZXh0KTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3NzUmVzdWx0Q2FjaGUuc2V0KGNzc1RleHQsIChyZXN1bHQgPSBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xudmFyIF9mO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiBbW1JlYWN0aXZlRWxlbWVudF1dLlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gVE9ETyhzb3J2ZWxsKTogQWRkIGEgbGluayB0byB0aGUgZG9jcyBhYm91dCB1c2luZyBkZXYgdi4gcHJvZHVjdGlvbiBtb2RlLlxuICAgIGNvbnNvbGUud2FybihgUnVubmluZyBpbiBkZXYgbW9kZS4gRG8gbm90IHVzZSBpbiBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBsYXRmb3JtIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYSA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluVXNlKSAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBnbG9iYWxUaGlzWydyZWFjdGl2ZUVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2hhZG93IERPTSBpcyBiZWluZyBwb2x5ZmlsbGVkIHZpYSBTaGFkeURPTSBidXQgYCArXG4gICAgICAgICAgICBgdGhlIFxcYHBvbHlmaWxsLXN1cHBvcnRcXGAgbW9kdWxlIGhhcyBub3QgYmVlbiBsb2FkZWQuYCk7XG4gICAgfVxuICAgIHJlcXVlc3RVcGRhdGVUaGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGByZXF1ZXN0VXBkYXRlXFxgIG5vIGxvbmdlciByZXR1cm5zIGEgUHJvbWlzZS5gICtcbiAgICAgICAgICAgICAgICBgVXNlIFxcYHVwZGF0ZUNvbXBsZXRlXFxgIGluc3RlYWQuYCk7XG4gICAgICAgICAgICBpZiAob25mdWxmaWxsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9uZnVsZmlsbGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gJycgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19lbmFibGVDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIFByb3BlcnR5RGVjbGFyYXRpb24gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAqIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIHByb3BlcnR5IG9wdGlvblxuICAgICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICAgKiBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICAgKiAgIHN1cGVyLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAqICAgICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgICAqICAgICAgIHJldHVybiB7XG4gICAgICogICAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAqICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgICB9LFxuICAgICAqICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICAgIH1cbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIFByb3BlcnR5RGVjbGFyYXRpb24gdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGUgYGNyZWF0ZVByb3BlcnR5YC5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gVGhpcyBmb3Ivb2YgaXMgb2sgYmVjYXVzZSBwcm9wS2V5cyBpcyBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU2NyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFN0eWxlcyA9IHRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpO1xuICAgICAgICAvLyBERVYgbW9kZSB3YXJuaW5nc1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZCA9IChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkLiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhpcyB2ZXJzaW9uIG9mIFJlYWN0aXZlRWxlbWVudC5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgU2VlIHRoZSBjaGFuZ2Vsb2cgYXQgaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWh0bWwvYmxvYi9tYWluL3BhY2thZ2VzL3JlYWN0aXZlLWVsZW1lbnQvQ0hBTkdFTE9HLm1kYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFtgaW5pdGlhbGl6ZWAsIGByZXF1ZXN0VXBkYXRlSW50ZXJuYWxgLCBgX2dldFVwZGF0ZUNvbXBsZXRlYF0uZm9yRWFjaCgobmFtZSkgPT4gXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgd2FyblJlbW92ZWQodGhpcy5wcm90b3R5cGUsIG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBjYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF9pbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4gKHRoaXMuZW5hYmxlVXBkYXRpbmcgPSByZXMpKTtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAgICAgLy8gYHVwZGF0ZUNvbXBsZXRlYFxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jb25zdHJ1Y3Rvci5faW5pdGlhbGl6ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoaSkgPT4gaSh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5fX2NvbnRyb2xsZXJzID0gW10pKS5wdXNoKGNvbnRyb2xsZXIpO1xuICAgICAgICAvLyBJZiBhIGNvbnRyb2xsZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkLFxuICAgICAgICAvLyBjYWxsIGhvc3RDb25uZWN0ZWQuIE5vdGUsIHJlLXVzaW5nIGV4aXN0ZW5jZSBvZiBgcmVuZGVyUm9vdGAgaGVyZVxuICAgICAgICAvLyAod2hpY2ggaXMgc2V0IGluIGNvbm5lY3RlZENhbGxiYWNrKSB0byBhdm9pZCB0aGUgbmVlZCB0byB0cmFjayBhXG4gICAgICAgIC8vIGZpcnN0IGNvbm5lY3RlZCBzdGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIChfYiA9IGNvbnRyb2xsZXIuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gTm90ZSwgaWYgdGhlIGluZGV4T2YgaXMgLTEsIHRoZSA+Pj4gd2lsbCBmbGlwIHRoZSBzaWduIHdoaWNoIG1ha2VzIHRoZVxuICAgICAgICAvLyBzcGxpY2UgZG8gbm90aGluZy5cbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BsaWNlKHRoaXMuX19jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpID4+PiAwLCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5zZXQocCwgdGhpc1twXSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIHJlbmRlciBhbmQgYnkgZGVmYXVsdFxuICAgICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogY2hpbGROb2RlcywgcmV0dXJuIGB0aGlzYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IChfYSA9IHRoaXMuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XG4gICAgICAgIGFkb3B0U3R5bGVzKHJlbmRlclJvb3QsIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgICAqIGVsZW1lbnQgc3R5bGluZywgYW5kIGVuYWJsZXMgdXBkYXRpbmcuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290ID0gdGhpcy5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVVcGRhdGluZyh0cnVlKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgLy8gSWYgd2Ugd2VyZSBkaXNjb25uZWN0ZWQsIHJlLWVuYWJsZSB1cGRhdGluZyBieSByZXNvbHZpbmcgdGhlIHBlbmRpbmdcbiAgICAgICAgLy8gY29ubmVjdGlvbiBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2UgPSB0aGlzLl9fZW5hYmxlQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyKSA9PiAodGhpcy5fX2VuYWJsZUNvbm5lY3Rpb24gPSByKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzXG4gICAgICAgICAgICAuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IChfYiA9IChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHtuYW1lfSBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuIFRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbW92ZWQsIGJ1dCBpbiB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiBSZWFjdGl2ZUVsZW1lbnQsIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBmcm9tQXR0cmlidXRlID0gKF9jID0gKF9iID0gKF9hID0gY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogbnVsbCkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGRlZmF1bHRDb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREUgPyByZXF1ZXN0VXBkYXRlVGhlbmFibGUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGRpc2Nvbm5lY3RlZCwgd2FpdCB1bnRpbCByZS1jb25uZWN0ZWQgdG8gZmx1c2ggYW4gdXBkYXRlXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fX3BlbmRpbmdDb25uZWN0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX19wZW5kaW5nQ29ubmVjdGlvblByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgICAvLyBJZiBgcGVyZm9ybVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgdGltaW5nIG9mIHVwZGF0ZXMuIElmIHRoaXNcbiAgICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm90ZWN0ZWQgYXN5bmMgcGVyZm9ybVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5wZXJmb3JtVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBQcm9kdWNlIHdhcm5pbmcgaWYgYW55IGNsYXNzIHByb3BlcnRpZXMgYXJlIHNoYWRvd2VkIGJ5IGNsYXNzIGZpZWxkc1xuICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93ZWRQcm9wZXJ0aWVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApICYmICEoKF9hID0gdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhhcyhwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd2VkUHJvcGVydGllcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd2VkUHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogTGluayB0byBkb2NzIGV4cGxhbmF0aW9uIG9mIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIHdpbGwgbm90IHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBmaWVsZHM6IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFRvIGZpeCB0aGlzIGlzc3VlLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBlaXRoZXIgaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIGluIHRoZSBjb25zdHJ1Y3RvciBvciBhZGp1c3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgeW91ciBjb21waWxlciBzZXR0aW5nczsgZm9yIGV4YW1wbGUsIGZvciBUeXBlU2NyaXB0IHNldCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXGB1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkczogZmFsc2VcXGAgaW4geW91ciBcXGB0c2NvbmZpZy5qc29uXFxgLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQW4gdXBkYXRlIHdhcyByZXF1ZXN0ZWQgKGdlbmVyYWxseSBiZWNhdXNlIGEgcHJvcGVydHkgd2FzIHNldCkgYCArXG4gICAgICAgICAgICAgICAgYGFmdGVyIGFuIHVwZGF0ZSBjb21wbGV0ZWQsIGNhdXNpbmcgYSBuZXcgdXBkYXRlIHRvIGJlIHNjaGVkdWxlZC4gYCArXG4gICAgICAgICAgICAgICAgYFRoaXMgaXMgaW5lZmZpY2llbnQgYW5kIHNob3VsZCBiZSBhdm9pZGVkIHVubGVzcyB0aGUgbmV4dCB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYGNhbiBvbmx5IGJlIHNjaGVkdWxlZCBhcyBhIHNpZGUgZWZmZWN0IG9mIHRoZSBwcmV2aW91cyB1cGRhdGUuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGNvbXBsZXRlZCB1cGRhdGluZy5cbiAgICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgICAqIHVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuIFRoZSBQcm9taXNlIHJlc3VsdCBpcyBgZmFsc2VgIGlmXG4gICAgICogYSBwcm9wZXJ0eSB3YXMgc2V0IGluc2lkZSBgdXBkYXRlZCgpYC4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGFuXG4gICAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUbyBhd2FpdCBhZGRpdGlvbmFsIGFzeW5jaHJvbm91cyB3b3JrLCBvdmVycmlkZSB0aGUgYGdldFVwZGF0ZUNvbXBsZXRlYFxuICAgICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgICAqIGBzdXBlci5nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgdXBkYXRlIHJlc29sdmVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICAgIGFzeW5jIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAqICAgICAgIGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXBkYXRlUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgYHVwZGF0ZWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZiA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZl0gPSB0cnVlO1xuLyoqXG4gKiBPcHRpb25zIHVzZWQgd2hlbiBjYWxsaW5nIGBhdHRhY2hTaGFkb3dgLiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBjdXN0b21pemVcbiAqIHRoZSBvcHRpb25zIGZvciB0aGUgc2hhZG93Um9vdDsgZm9yIGV4YW1wbGUsIHRvIGNyZWF0ZSBhIGNsb3NlZFxuICogc2hhZG93Um9vdDogYHttb2RlOiAnY2xvc2VkJ31gLlxuICpcbiAqIE5vdGUsIHRoZXNlIG9wdGlvbnMgYXJlIHVzZWQgaW4gYGNyZWF0ZVJlbmRlclJvb3RgLiBJZiB0aGlzIG1ldGhvZFxuICogaXMgY3VzdG9taXplZCwgb3B0aW9ucyBzaG91bGQgYmUgcmVzcGVjdGVkIGlmIHBvc3NpYmxlLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAqL1xuUmVhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3RPcHRpb25zID0geyBtb2RlOiAnb3BlbicgfTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oX2MgPSAoX2IgPSBnbG9iYWxUaGlzKVsncmVhY3RpdmVFbGVtZW50UGxhdGZvcm1TdXBwb3J0J10pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iLCB7IFJlYWN0aXZlRWxlbWVudCB9KTtcbi8vIERldiBtb2RlIHdhcm5pbmdzLi4uXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBEZWZhdWx0IHdhcm5pbmcgc2V0LlxuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVkV2FybmluZ3MgPSBbJ2NoYW5nZS1pbi11cGRhdGUnXTtcbiAgICBjb25zdCBlbnN1cmVPd25XYXJuaW5ncyA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgIGlmICghY3Rvci5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdlbmFibGVkV2FybmluZ3MnLCBjdG9yKSkpIHtcbiAgICAgICAgICAgIGN0b3IuZW5hYmxlZFdhcm5pbmdzID0gY3Rvci5lbmFibGVkV2FybmluZ3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZykgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5wdXNoKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZGlzYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZyk7XG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIFJlYWN0aXZlRWxlbWVudCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKChfZCA9IChfZSA9IGdsb2JhbFRoaXMpWydyZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyddKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAoX2VbJ3JlYWN0aXZlRWxlbWVudFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wLXJjLjEnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9AdWNkLWxpYi9jb3JrLWFwcC1idWlsZC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9AdWNkLWxpYi9jb3JrLWFwcC1idWlsZC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIFBob3RvU3dpcGUgRGVmYXVsdCBVSSBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXFxuLypcXG5cXG5cXHRDb250ZW50czpcXG5cXG5cXHQxLiBCdXR0b25zXFxuXFx0Mi4gU2hhcmUgbW9kYWwgYW5kIGxpbmtzXFxuXFx0My4gSW5kZXggaW5kaWNhdG9yIChcXFwiMSBvZiBYXFxcIiBjb3VudGVyKVxcblxcdDQuIENhcHRpb25cXG5cXHQ1LiBMb2FkaW5nIGluZGljYXRvclxcblxcdDYuIEFkZGl0aW9uYWwgc3R5bGVzIChyb290IGVsZW1lbnQsIHRvcCBiYXIsIGlkbGUgc3RhdGUsIGhpZGRlbiBzdGF0ZSwgZXRjLilcXG5cXG4qL1xcbi8qXFxuXFx0XFxuXFx0MS4gQnV0dG9uc1xcblxcbiAqL1xcbi8qIDxidXR0b24+IGNzcyByZXNldCAqL1xcbi5wc3dwX19idXR0b24ge1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcbiAgLnBzd3BfX2J1dHRvbjpmb2N1cywgLnBzd3BfX2J1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5wc3dwX19idXR0b246YWN0aXZlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3BhY2l0eTogMC45OyB9XFxuICAucHN3cF9fYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwOyB9XFxuXFxuLyogcHN3cF9fdWktLW92ZXItY2xvc2UgY2xhc3MgaXQgYWRkZWQgd2hlbiBtb3VzZSBpcyBvdmVyIGVsZW1lbnQgdGhhdCBzaG91bGQgY2xvc2UgZ2FsbGVyeSAqL1xcbi5wc3dwX191aS0tb3Zlci1jbG9zZSAucHN3cF9fYnV0dG9uLS1jbG9zZSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLnBzd3BfX2J1dHRvbixcXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vZGVmYXVsdC1za2luLnBuZ1wiKSkgKyBcIikgMCAwIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjY0cHggODhweDtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiA0NHB4OyB9XFxuXFxuQG1lZGlhICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMSksICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMDkzNzUpLCAobWluLXJlc29sdXRpb246IDEwNWRwaSksIChtaW4tcmVzb2x1dGlvbjogMS4xZHBweCkge1xcbiAgLyogU2VydmUgU1ZHIHNwcml0ZSBpZiBicm93c2VyIHN1cHBvcnRzIFNWRyBhbmQgcmVzb2x1dGlvbiBpcyBtb3JlIHRoYW4gMTA1ZHBpICovXFxuICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24sXFxuICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcXG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9kZWZhdWx0LXNraW4uc3ZnXCIpKSArIFwiKTsgfVxcbiAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcXG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgfSB9XFxuXFxuLnBzd3BfX2J1dHRvbi0tY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDRweDsgfVxcblxcbi5wc3dwX19idXR0b24tLXNoYXJlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NHB4IC00NHB4OyB9XFxuXFxuLnBzd3BfX2J1dHRvbi0tZnMge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5wc3dwLS1zdXBwb3J0cy1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5wc3dwLS1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDRweCAwOyB9XFxuXFxuLnBzd3BfX2J1dHRvbi0tem9vbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTg4cHggMDsgfVxcblxcbi5wc3dwLS16b29tLWFsbG93ZWQgLnBzd3BfX2J1dHRvbi0tem9vbSB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5wc3dwLS16b29tZWQtaW4gLnBzd3BfX2J1dHRvbi0tem9vbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTMycHggMDsgfVxcblxcbi8qIG5vIGFycm93cyBvbiB0b3VjaCBzY3JlZW5zICovXFxuLnBzd3AtLXRvdWNoIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxcbi5wc3dwLS10b3VjaCAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLypcXG5cXHRBcnJvdyBidXR0b25zIGhpdCBhcmVhXFxuXFx0KGljb24gaXMgYWRkZWQgdG8gOmJlZm9yZSBwc2V1ZG8tZWxlbWVudClcXG4qL1xcbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0IHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHRvcDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuXFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlIHtcXG4gIGxlZnQ6IDZweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzhweCAtNDRweDsgfVxcblxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xcbiAgcmlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NHB4IC00NHB4OyB9XFxuXFxuLypcXG5cXG5cXHQyLiBTaGFyZSBtb2RhbC9wb3B1cCBhbmQgbGlua3NcXG5cXG4gKi9cXG4ucHN3cF9fY291bnRlcixcXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTYwMDtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQ7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQ7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5OyB9XFxuXFxuLnBzd3BfX3NoYXJlLW1vZGFsLS1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5wc3dwX19zaGFyZS10b29sdGlwIHtcXG4gIHotaW5kZXg6IDE2MjA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgdG9wOiA1NnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogYXV0bztcXG4gIHJpZ2h0OiA0NHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07IH1cXG4gIC5wc3dwX19zaGFyZS10b29sdGlwIGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7IH1cXG4gICAgLnBzd3BfX3NoYXJlLXRvb2x0aXAgYTpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgIC5wc3dwX19zaGFyZS10b29sdGlwIGE6Zmlyc3QtY2hpbGQge1xcbiAgICAgIC8qIHJvdW5kIGNvcm5lcnMgb24gdGhlIGZpcnN0L2xhc3QgbGlzdCBpdGVtICovXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7IH1cXG4gICAgLnBzd3BfX3NoYXJlLXRvb2x0aXAgYTpsYXN0LWNoaWxkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDsgfVxcblxcbi5wc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbiB7XFxuICBvcGFjaXR5OiAxOyB9XFxuICAucHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4gLnBzd3BfX3NoYXJlLXRvb2x0aXAge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLyogaW5jcmVhc2Ugc2l6ZSBvZiBzaGFyZSBsaW5rcyBvbiB0b3VjaCBkZXZpY2VzICovXFxuLnBzd3AtLXRvdWNoIC5wc3dwX19zaGFyZS10b29sdGlwIGEge1xcbiAgcGFkZGluZzogMTZweCAxMnB4OyB9XFxuXFxuYS5wc3dwX19zaGFyZS0tZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEycHg7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRjtcXG4gIC13ZWJraXQtcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAtbW96LXBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG5hLnBzd3BfX3NoYXJlLS1mYWNlYm9vazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM0U1QzlBO1xcbiAgY29sb3I6ICNGRkY7IH1cXG4gIGEucHN3cF9fc2hhcmUtLWZhY2Vib29rOmhvdmVyOmJlZm9yZSB7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzRTVDOUE7IH1cXG5cXG5hLnBzd3BfX3NoYXJlLS10d2l0dGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XFxuICBjb2xvcjogI0ZGRjsgfVxcblxcbmEucHN3cF9fc2hhcmUtLXBpbnRlcmVzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbiAgY29sb3I6ICNDRTI3MkQ7IH1cXG5cXG5hLnBzd3BfX3NoYXJlLS1kb3dubG9hZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjREREOyB9XFxuXFxuLypcXG5cXG5cXHQzLiBJbmRleCBpbmRpY2F0b3IgKFxcXCIxIG9mIFhcXFwiIGNvdW50ZXIpXFxuXFxuICovXFxuLnBzd3BfX2NvdW50ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNDRweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgY29sb3I6ICNGRkY7XFxuICBvcGFjaXR5OiAwLjc1O1xcbiAgcGFkZGluZzogMCAxMHB4OyB9XFxuXFxuLypcXG5cXHRcXG5cXHQ0LiBDYXB0aW9uXFxuXFxuICovXFxuLnBzd3BfX2NhcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDRweDsgfVxcbiAgLnBzd3BfX2NhcHRpb24gc21hbGwge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiAjQkJCOyB9XFxuXFxuLnBzd3BfX2NhcHRpb25fX2NlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWF4LXdpZHRoOiA0MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICNDQ0M7IH1cXG5cXG4ucHN3cF9fY2FwdGlvbi0tZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qIEZha2UgY2FwdGlvbiBlbGVtZW50LCB1c2VkIHRvIGNhbGN1bGF0ZSBoZWlnaHQgb2YgbmV4dC9wcmV2IGltYWdlICovXFxuLnBzd3BfX2NhcHRpb24tLWZha2Uge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLypcXG5cXG5cXHQ1LiBMb2FkaW5nIGluZGljYXRvciAocHJlbG9hZGVyKVxcblxcblxcdFlvdSBjYW4gcGxheSB3aXRoIGl0IGhlcmUgLSBodHRwOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1JcXG5cXG4gKi9cXG4ucHN3cF9fcHJlbG9hZGVyIHtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dDtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbiAgZGlyZWN0aW9uOiBsdHI7IH1cXG5cXG4ucHN3cF9fcHJlbG9hZGVyX19pY24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW46IDEycHg7IH1cXG5cXG4ucHN3cF9fcHJlbG9hZGVyLS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMTsgfVxcbiAgLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XFxuICAgIC8qIFdlIHVzZSAuZ2lmIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBDU1MgYW5pbWF0aW9uICovXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9wcmVsb2FkZXIuZ2lmXCIpKSArIFwiKSAwIDAgbm8tcmVwZWF0OyB9XFxuXFxuLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG4gIC5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSAucHN3cF9fcHJlbG9hZGVyX19pY24ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2xvY2t3aXNlIDUwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb246IGNsb2Nrd2lzZSA1MDBtcyBsaW5lYXIgaW5maW5pdGU7IH1cXG4gIC5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSAucHN3cF9fcHJlbG9hZGVyX19kb251dCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb251dC1yb3RhdGUgMTAwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZG9udXQtcm90YXRlIDEwMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKSBpbmZpbml0ZTsgfVxcblxcbi5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3BhY2l0eTogMC43NTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG4gIHRvcDogMTVweDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXJfX2N1dCB7XFxuICAvKiBcXG5cXHRcXHRcXHRUaGUgaWRlYSBvZiBhbmltYXRpbmcgaW5uZXIgY2lyY2xlIGlzIGJhc2VkIG9uIFBvbHltZXIgKFxcXCJtYXRlcmlhbFxcXCIpIGxvYWRpbmcgaW5kaWNhdG9yIFxcblxcdFxcdFxcdCBieSBLZWFudSBMZWUgaHR0cHM6Ly9ibG9nLmtlYW51bGVlLmNvbS8yMDE0LzEwLzIwL3RoZS10YWxlLW9mLXRocmVlLXNwaW5uZXJzLmh0bWxcXG5cXHRcXHQqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDdweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucHN3cC0tY3NzX2FuaW1hdGlvbiAucHN3cF9fcHJlbG9hZGVyX19kb251dCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAucHN3cF9fcHJlbG9hZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICB0b3A6IGF1dG87XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2xvY2t3aXNlIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGNsb2Nrd2lzZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGRvbnV0LXJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGRvbnV0LXJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9IH1cXG5cXG4vKlxcblxcdFxcblxcdDYuIEFkZGl0aW9uYWwgc3R5bGVzXFxuXFxuICovXFxuLyogcm9vdCBlbGVtZW50IG9mIFVJICovXFxuLnBzd3BfX3VpIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDE1NTA7IH1cXG5cXG4vKiB0b3AgYmxhY2sgYmFyIHdpdGggYnV0dG9ucyBhbmQgXFxcIjEgb2YgWFxcXCIgaW5kaWNhdG9yICovXFxuLnBzd3BfX3RvcC1iYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNDRweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnBzd3BfX2NhcHRpb24sXFxuLnBzd3BfX3RvcC1iYXIsXFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XFxuXFxuLyogcHN3cC0taGFzX21vdXNlIGNsYXNzIGlzIGFkZGVkIG9ubHkgd2hlbiB0d28gc3Vic2VxdWVudCBtb3VzZW1vdmUgZXZlbnRzIG9jY3VyICovXFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuXFxuLnBzd3BfX3RvcC1iYXIsXFxuLnBzd3BfX2NhcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXFxuLyogcHN3cF9fdWktLWZpdCBjbGFzcyBpcyBhZGRlZCB3aGVuIG1haW4gaW1hZ2UgXFxcImZpdHNcXFwiIGJldHdlZW4gdG9wIGJhciBhbmQgYm90dG9tIGJhciAoY2FwdGlvbikgKi9cXG4ucHN3cF9fdWktLWZpdCAucHN3cF9fdG9wLWJhcixcXG4ucHN3cF9fdWktLWZpdCAucHN3cF9fY2FwdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cXG5cXG4vKiBwc3dwX191aS0taWRsZSBjbGFzcyBpcyBhZGRlZCB3aGVuIG1vdXNlIGlzbid0IG1vdmluZyBmb3Igc2V2ZXJhbCBzZWNvbmRzIChKUyBvcHRpb24gdGltZVRvSWRsZSkgKi9cXG4ucHN3cF9fdWktLWlkbGUgLnBzd3BfX3RvcC1iYXIge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi5wc3dwX191aS0taWRsZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcXG4ucHN3cF9fdWktLWlkbGUgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKlxcblxcdHBzd3BfX3VpLS1oaWRkZW4gY2xhc3MgaXMgYWRkZWQgd2hlbiBjb250cm9scyBhcmUgaGlkZGVuXFxuXFx0ZS5nLiB3aGVuIHVzZXIgdGFwcyB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiBjb250cm9sc1xcbiovXFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX3RvcC1iYXIsXFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX2NhcHRpb24sXFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcXG4gIC8qIEZvcmNlIHBhaW50ICYgY3JlYXRlIGNvbXBvc2l0aW9uIGxheWVyIGZvciBjb250cm9scy4gKi9cXG4gIG9wYWNpdHk6IDAuMDAxOyB9XFxuXFxuLyogcHN3cF9fdWktLW9uZS1zbGlkZSBjbGFzcyBpcyBhZGRlZCB3aGVuIHRoZXJlIGlzIGp1c3Qgb25lIGl0ZW0gaW4gZ2FsbGVyeSAqL1xcbi5wc3dwX191aS0tb25lLXNsaWRlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxcbi5wc3dwX191aS0tb25lLXNsaWRlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCxcXG4ucHN3cF9fdWktLW9uZS1zbGlkZSAucHN3cF9fY291bnRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnBzd3BfX2VsZW1lbnQtLWRpc2FibGVkIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5wc3dwLS1taW5pbWFsLS1kYXJrIC5wc3dwX190b3AtYmFyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vQHVjZC1saWIvY29yay1hcHAtYnVpbGQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBQaG90b1N3aXBlIG1haW4gQ1NTIGJ5IERtaXRyeSBTZW1lbm92IHwgcGhvdG9zd2lwZS5jb20gfCBNSVQgbGljZW5zZSAqL1xcbi8qXFxuXFx0U3R5bGVzIGZvciBiYXNpYyBQaG90b1N3aXBlIGZ1bmN0aW9uYWxpdHkgKHNsaWRpbmcgYXJlYSwgb3Blbi9jbG9zZSB0cmFuc2l0aW9ucylcXG4qL1xcbi8qIHBzd3AgPSBwaG90b3N3aXBlICovXFxuLnBzd3Age1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgei1pbmRleDogMTUwMDtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIGNyZWF0ZSBzZXBhcmF0ZSBsYXllciwgdG8gYXZvaWQgcGFpbnQgb24gd2luZG93Lm9uc2Nyb2xsIGluIHdlYmtpdC9ibGluayAqL1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lOyB9XFxuICAucHN3cCAqIHtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gIC5wc3dwIGltZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcblxcbi8qIHN0eWxlIGlzIGFkZGVkIHdoZW4gSlMgb3B0aW9uIHNob3dIaWRlT3BhY2l0eSBpcyBzZXQgdG8gdHJ1ZSAqL1xcbi5wc3dwLS1hbmltYXRlX29wYWNpdHkge1xcbiAgLyogMC4wMDEsIGJlY2F1c2Ugb3BhY2l0eTowIGRvZXNuJ3QgdHJpZ2dlciBQYWludCBhY3Rpb24sIHdoaWNoIGNhdXNlcyBsYWcgYXQgc3RhcnQgb2YgdHJhbnNpdGlvbiAqL1xcbiAgb3BhY2l0eTogMC4wMDE7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcXG4gIC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTsgfVxcblxcbi5wc3dwLS1vcGVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9faW1nIHtcXG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXFxuICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcXG4gIGN1cnNvcjogLW1vei16b29tLWluO1xcbiAgY3Vyc29yOiB6b29tLWluOyB9XFxuXFxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9faW1nIHtcXG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgY3Vyc29yOiBncmFiOyB9XFxuXFxuLnBzd3AtLWRyYWdnaW5nIC5wc3dwX19pbWcge1xcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7IH1cXG5cXG4vKlxcblxcdEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LlxcblxcdEFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIG11Y2ggZmFzdGVyIHRoYW4gYW5pbWF0aW5nIHJnYmEoKSBiYWNrZ3JvdW5kLWNvbG9yLlxcbiovXFxuLnBzd3BfX2JnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7IH1cXG5cXG4ucHN3cF9fc2Nyb2xsLXdyYXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5wc3dwX19jb250YWluZXIsXFxuLnBzd3BfX3pvb20td3JhcCB7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLyogUHJldmVudCBzZWxlY3Rpb24gYW5kIHRhcCBoaWdobGlnaHRzICovXFxuLnBzd3BfX2NvbnRhaW5lcixcXG4ucHN3cF9faW1nIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgfVxcblxcbi5wc3dwX196b29tLXdyYXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cXG5cXG4ucHN3cF9fYmcge1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cXG5cXG4ucHN3cC0tYW5pbWF0ZWQtaW4gLnBzd3BfX2JnLFxcbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fem9vbS13cmFwIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7IH1cXG5cXG4ucHN3cF9fY29udGFpbmVyLFxcbi5wc3dwX196b29tLXdyYXAge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4ucHN3cF9faXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnBzd3BfX2ltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4vKlxcblxcdHN0cmV0Y2hlZCB0aHVtYm5haWwgb3IgZGl2IHBsYWNlaG9sZGVyIGVsZW1lbnQgKHNlZSBiZWxvdylcXG5cXHRzdHlsZSBpcyBhZGRlZCB0byBhdm9pZCBmbGlja2VyaW5nIGluIHdlYmtpdC9ibGluayB3aGVuIGxheWVycyBvdmVybGFwXFxuKi9cXG4ucHN3cF9faW1nLS1wbGFjZWhvbGRlciB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi8qXFxuXFx0ZGl2IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHNpemUgb2YgbGFyZ2UgaW1hZ2VcXG5cXHRsYXJnZSBpbWFnZSBsb2FkcyBvbiB0b3Agb2YgaXRcXG4qL1xcbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyLS1ibGFuayB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyOyB9XFxuXFxuLnBzd3AtLWllIC5wc3dwX19pbWcge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi8qXFxuXFx0RXJyb3IgbWVzc2FnZSBhcHBlYXJzIHdoZW4gaW1hZ2UgaXMgbm90IGxvYWRlZFxcblxcdChKUyBvcHRpb24gZXJyb3JNc2cgY29udHJvbHMgbWFya3VwKVxcbiovXFxuLnBzd3BfX2Vycm9yLW1zZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG4gIGNvbG9yOiAjQ0NDOyB9XFxuXFxuLnBzd3BfX2Vycm9yLW1zZyBhIHtcXG4gIGNvbG9yOiAjQ0NDO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUWdBQUFCWUNBUUFBQUNqQnFFM0FBQUI2a2xFUVZSNEFlM2JzV3BVUVJURzhZa2thbndDYTdHelZvdHNJL2dFZ2s5aDRWdTR5U0xZbU1ZZ2JKcmMzbHJ3WmJKd0MwRk10NGo3RjZZNG9JWnJzWHRneHZ4LzFjMHVmRVg0Y25ibUxDbVNKRW1TSkVtU0pFbVNKUDNYQ0JQdmJKVSs4ZG9XbURGd3lacExCbVlsTkplYnowS3d6eWt3c3VTWUpTTnd5a0VKcmVWMkJhQk1hTElRWjJ4WWNGZ3FEbG13NGF5RS9Gd0wwZERrNFFoNFczN0RBamdxSVQrM0hSYmlnakgraWlrVmR4Z1pTdGd5TjBTdTJzWEllVHdUVCtlc2RwY2JJbGZOQXVaL1R4cmVzRzR6VjhrWVdTWk5pS1VUb2tNTVNXZUl3VE5FbjRmSzJUVzNnUk5nVmtKTHVWa3NST0E5RytiRXZvQVRObEJDYTduWlhFd2R4RVp4enBLUktGaCtic3Y4TG1QRm1oWDFPd2ZJejgxaklSSlE1ZWVxRzlCK3JpUkpraVJKa2lSSmtpUkpraVJKa2lSSlVrdkEvOFJRb0VwS2xKV0lORmtKNjJBbHJFUC9tTkJpYm52Mnl6L0EzdDdVcTNMY3BveFA4Q09qQzFUNXZ4b0FENVZkb0VxZERyZDVRdVcxc3d0VVNhdWVoM3praXVCaXFndEEyT2xrZU1jUC91RHF1Z3NKZGJqSEY2NVZkUE1Ld1MwK1dRYy9NZ0t2cklPSHlzQjl2Z1B3azgrODVobVBiblFkdkhaeURNQUZEN0wzRU9wZ01jVmR2bkhGUzAvdmxhdHJYdkNWeDBVOWd0M2Z4dm5BMC9oQjRubVJKRW1TSkVtU0pFbVNKR21IZmdGTGFEUG9NdTV4V3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNalkwSWlCb1pXbG5hSFE5SWpnNElpQjJhV1YzUW05NFBTSXdJREFnTWpZMElEZzRJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQangwYVhSc1pUNWtaV1poZFd4MExYTnJhVzRnTWp3dmRHbDBiR1UrUEdjZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajQ4Wno0OGNHRjBhQ0JrUFNKTk5qY3VNREF5SURVNUxqVjJNeTQzTmpoakxUWXVNekEzTGpnMExUa3VNVGcwSURVdU56VXRNVEF1TURBeUlEa3VOek15SURJdU1qSXRNaTQ0TXlBMUxqVTJOQzAxTGpBNU9DQXhNQzR3TURJdE5TNHdPVGhXTnpFdU5VdzNNeUEyTlM0MU9EVWdOamN1TURBeUlEVTVMalY2SWlCcFpEMGlVMmhoY0dVaUlHWnBiR3c5SWlObVptWWlMejQ4WnlCbWFXeHNQU0lqWm1abUlqNDhjR0YwYUNCa1BTSk5NVE1nTWpsMkxUVm9Nbll6YUROMk1tZ3ROWHBOTVRNZ01UVm9OWFl5YUMwemRqTm9MVEoyTFRWNlRUTXhJREUxZGpWb0xUSjJMVE5vTFROMkxUSm9OWHBOTXpFZ01qbG9MVFYyTFRKb00zWXRNMmd5ZGpWNklpQnBaRDBpVTJoaGNHVWlMejQ4TDJjK1BHY2dabWxzYkQwaUkyWm1aaUkrUEhCaGRHZ2daRDBpVFRZeUlESTBkalZvTFRKMkxUTm9MVE4yTFRKb05YcE5OaklnTWpCb0xUVjJMVEpvTTNZdE0yZ3lkalY2VFRjd0lESXdkaTAxYURKMk0yZ3pkakpvTFRWNlRUY3dJREkwYURWMk1tZ3RNM1l6YUMweWRpMDFlaUl2UGp3dlp6NDhjR0YwYUNCa1BTSk5NakF1TlRnMklEWTJiQzAxTGpZMU5pMDFMalkxTmlBeExqUXhOQzB4TGpReE5Fd3lNaUEyTkM0MU9EWnNOUzQyTlRZdE5TNDJOVFlnTVM0ME1UUWdNUzQwTVRSTU1qTXVOREUwSURZMmJEVXVOalUySURVdU5qVTJMVEV1TkRFMElERXVOREUwVERJeUlEWTNMalF4Tkd3dE5TNDJOVFlnTlM0Mk5UWXRNUzQwTVRRdE1TNDBNVFJNTWpBdU5UZzJJRFkyZWlJZ1ptbHNiRDBpSTJabVppSXZQanh3WVhSb0lHUTlJazB4TVRFdU56ZzFJRFkxTGpBelRERXhNQ0EyTXk0MWJETXRNeTQxYUMweE1IWXRNbWd4TUd3dE15MHpMalVnTVM0M09EVXRNUzQwTmpoTU1URTNJRFU1YkMwMUxqSXhOU0EyTGpBemVpSWdabWxzYkQwaUkyWm1aaUl2UGp4d1lYUm9JR1E5SWsweE5USXVNakUxSURZMUxqQXpUREUxTkNBMk15NDFiQzB6TFRNdU5XZ3hNSFl0TW1ndE1UQnNNeTB6TGpVdE1TNDNPRFV0TVM0ME5qaE1NVFEzSURVNWJEVXVNakUxSURZdU1ETjZJaUJtYVd4c1BTSWpabVptSWk4K1BHYytQSEJoZEdnZ2FXUTlJbEpsWTNSaGJtZHNaUzB4TVNJZ1ptbHNiRDBpSTJabVppSWdaRDBpVFRFMk1DNDVOVGNnTWpndU5UUXpiQzB6TGpJMUxUTXVNalV0TVM0ME1UTWdNUzQwTVRRZ015NHlOU0F6TGpJMWVpSXZQanh3WVhSb0lHUTlJazB4TlRJdU5TQXlOMk16TGpBek9DQXdJRFV1TlMweUxqUTJNaUExTGpVdE5TNDFjeTB5TGpRMk1pMDFMalV0TlM0MUxUVXVOUzAxTGpVZ01pNDBOakl0TlM0MUlEVXVOU0F5TGpRMk1pQTFMalVnTlM0MUlEVXVOWG9pSUdsa1BTSlBkbUZzTFRFaUlITjBjbTlyWlQwaUkyWm1aaUlnYzNSeWIydGxMWGRwWkhSb1BTSXhMalVpTHo0OGNHRjBhQ0JtYVd4c1BTSWpabVptSWlCa1BTSk5NVFV3SURJeGFEVjJNV2d0TlhvaUx6NDhMMmMrUEdjK1BIQmhkR2dnWkQwaVRURXhOaTQ1TlRjZ01qZ3VOVFF6YkMweExqUXhOQ0F4TGpReE5DMHpMakkxTFRNdU1qVWdNUzQwTVRRdE1TNDBNVFFnTXk0eU5TQXpMakkxZWlJZ1ptbHNiRDBpSTJabVppSXZQanh3WVhSb0lHUTlJazB4TURndU5TQXlOMk16TGpBek9DQXdJRFV1TlMweUxqUTJNaUExTGpVdE5TNDFjeTB5TGpRMk1pMDFMalV0TlM0MUxUVXVOUzAxTGpVZ01pNDBOakl0TlM0MUlEVXVOU0F5TGpRMk1pQTFMalVnTlM0MUlEVXVOWG9pSUhOMGNtOXJaVDBpSTJabVppSWdjM1J5YjJ0bExYZHBaSFJvUFNJeExqVWlMejQ4Y0dGMGFDQm1hV3hzUFNJalptWm1JaUJrUFNKTk1UQTJJREl4YURWMk1XZ3ROWG9pTHo0OGNHRjBhQ0JtYVd4c1BTSWpabVptSWlCa1BTSk5NVEE1TGpBME15QXhPUzR3TURoc0xTNHdPRFVnTlMweExTNHdNVGN1TURnMUxUVjZJaTgrUEM5blBqd3ZaejQ4TDJjK1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRkFBVUFQTUlBSWVIaHo4L1AxZFhWeWNuSjgvUHo3ZTN0NStmbjI5dmIvLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUZCd0FJQUN3QUFBQUFGQUFVQUVBRVV4REpTYXRGeHR3YWdnV0FkSXlISkFoWG9SWVNRVWhEUEd4MFRibXVqYWhiWEdXWldxZERBWUVzcDVOdXBMUGtkRHdFN29Yd1dWYXNpbXpXckFFMXRLRkhFclFSSzhlTDhtTVVsUkJKVkkzMDd1b2lBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcFM2RTRXNXVwTWRVbUVRVDJmZUZJbHRNSllpdmJ2aG5aM1IwQTROTXdJRG9keitjTDduREVuNUNIOERHWmg4TXRFTUJFb3hrcWxYS1ZJZ1FDaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcGphRTRXNXNwQU5VbUZRWDJmZUZJbHRNSllpdmJ2aG5aM2QxeDRCTkJJRG9keitjTDduREVuNUNIOERHWkFzRnRNTUJFb3hrcWxYS1ZJZ0lCaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcEFhQTRXNXZwT2RVbUdRYjJmZUZJbHRNSllpdmJ2aG5aM1owZzRGTlJJRG9keitjTDduREVuNUNIOERHWmdjQ05RTUJFb3hrcWxYS1ZJZ1lEaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcHo2RTRXNXVwRU5VbUFRRDJmZUZJbHRNSllpdmJ2aG5aM1YwUTRKTmhJRG9keitjTDduREVuNUNIOERHWmc4R3RVTUJFb3hrcWxYS1ZJZ2dFaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcGhhQTRXNXRwQ05VbUhRZjJmZUZJbHRNSllpdmJ2aG5aM2QwdzRCTUFJRG9keitjTDduREVuNUNIOERHWkJNTE5ZTUJFb3hrcWxYS1ZJZ29GaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBZ0FMQUVBQVFBU0FCSUFBQVJPRU1rcFE2QTRXNXZwR05VbUNRTDJmZUZJbHRNSllpdmJ2aG5aM1IxQjROTnhJRG9keitjTDduREVuNUNIOERHWmhjSU5BTUJFb3hrcWxYS1ZJZ3dHaWJiSzlZTEJZdkx0SEg1SzBKMElBQ0g1QkFVSEFBY0FMQUVBQVFBU0FCSUFBQU5DZUxvNnd6QTZGeGtoYmFvUTRMM1p4blhMaDBFaldaNFJWNzFWVWNDTElCeXlUTnQyUHNPOG00NTJzQkdKQnNOeGtVd3VEMDNsQVFCQVNxblVKN2FxNVVZU0FEcz1cIiIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2ZhZmQ7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDIyODUxO1xufVxuZmllbGRzZXQgPiBsZWdlbmQge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpIGluc2V0O1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDA7XG59XG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZiZjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmVkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblt0eXBlPXRleHRdLFxuW3R5cGU9c2VhcmNoXSxcblt0eXBlPXVybF0sXG5bdHlwZT1udW1iZXJdLFxudGV4dGFyZWEge1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5idXR0b24sXG5bdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmZvY3VzLFxuW3R5cGU9c3VibWl0XTpmb2N1cyB7XG4gIGNvbG9yOiAjMDBiMmUzO1xufVxuXG5bdHlwZT1jaGVja2JveF0sXG5bdHlwZT1yYWRpb10ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xufVxuXG5bdHlwZT1zZWFyY2hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5oMSB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMS45MXJlbTtcbn1cbmgxOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmgxIGEge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oMSBhOmhvdmVyLCBoMSBhOmZvY3VzIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjk0cmVtO1xuICB9XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIGZvbnQtc2l6ZTogMS42MDU1cmVtO1xufVxuaDI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIuMDk5NXJlbTtcbiAgfVxufVxuaDIgYSB7XG4gIGNvbG9yOiAjMTM2MzllO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmgyIGE6aG92ZXIsIGgyIGE6Zm9jdXMge1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMC43NWVtIDAgMC4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzAyMjg1MTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEuMzMyNXJlbTtcbn1cbmgzOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjc0MjVyZW07XG4gIH1cbn1cbmgzIGEge1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oMyBhOmhvdmVyLCBoMyBhOmZvY3VzIHtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDQge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDEuMDkycmVtO1xufVxuaDQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaDQgYSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmg0IGE6aG92ZXIsIGg0IGE6Zm9jdXMge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuNDI4cmVtO1xuICB9XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaDU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaDUgYSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmg1IGE6aG92ZXIsIGg1IGE6Zm9jdXMge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEuMjA3cmVtO1xuICB9XG59XG5cbmg2IHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaDY6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaDYgYSB7XG4gIGNvbG9yOiAjMDIyODUxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmg2IGE6aG92ZXIsIGg2IGE6Zm9jdXMge1xuICBjb2xvcjogIzAyMjg1MTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbmVtYmVkLFxuaW1nLFxub2JqZWN0LFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaWZyYW1lIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5maWd1cmUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cbmZpZ3VyZSA+IGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuZmlnY2FwdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XG4gIGNhcHRpb24tc2lkZTogYm90dG9tO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmF1ZGlvLFxuY2FudmFzLFxuaWZyYW1lLFxuaW1nLFxuc3ZnLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgLS1saXN0LWFycm93LWNvbG9yOiAjZmZjNTE5O1xuICAtLWxpc3QtYm9yZGVyZWQtYm9yZGVyOiAjZGJlYWY3O1xuICAtLWxpc3QtZmFxLXF1ZXN0aW9uOiAjMTM2MzllO1xuICAtLWxpc3QtZmFxLXF1ZXN0aW9uLWhvdmVyOiAjMDAxMTI0O1xuICAtLWxpc3QtZmFxLWE6ICMwMjI4NTE7XG4gIC0tbGlzdC1waXBlLXBpcGU6ICM0YzRjNGM7XG4gIC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmc6IDEuNXJlbTtcbiAgLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmc6IDAuNXJlbTtcbn1cblxuLmxpc3QtLWZsdXNoLFxuLmxpc3Qtd3JhcHBlci0tZmx1c2ggdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG59XG5cbi5saXN0LS1hcnJvdyBsaSxcbi5saXN0LXdyYXBwZXItLWFycm93IHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWFycm93IGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWFycm93IHVsIGxpOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAtMC4xMjVlbSAwIDAgLTEuMjVlbTtcbiAgY29sb3I6IHZhcigtLWxpc3QtYXJyb3ctY29sb3IpO1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG4ubGlzdC0tYXJyb3cgbGkgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0tYXJyb3cgdWwgbGkgbGk6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDAgMCAtMS4yZW07XG4gIGNvbnRlbnQ6IFwi74SBXCI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuLmxpc3QtLWFycm93IGxpIGxpIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWFycm93IHVsIGxpIGxpIGxpOmJlZm9yZSB7XG4gIG1hcmdpbjogMCAwIDAgLTEuNmVtO1xuICBjb250ZW50OiBcIu+EuFwiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBsaW5lLWhlaWdodDogMi44O1xufVxuXG4ubGlzdC0td2hpdGUtYXJyb3csXG4ubGlzdC13cmFwcGVyLS13aGl0ZS1hcnJvdyB1bCB7XG4gIC0tbGlzdC1hcnJvdy1jb2xvcjogI2ZmZjtcbn1cbi5saXN0LS13aGl0ZS1hcnJvdyBsaSxcbi5saXN0LXdyYXBwZXItLXdoaXRlLWFycm93IHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXdoaXRlLWFycm93IGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLXdoaXRlLWFycm93IHVsIGxpOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAtMC4xMjVlbSAwIDAgLTEuMjVlbTtcbiAgY29sb3I6IHZhcigtLWxpc3QtYXJyb3ctY29sb3IpO1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG4ubGlzdC0td2hpdGUtYXJyb3cgbGkgbGk6YmVmb3JlLFxuLmxpc3Qtd3JhcHBlci0td2hpdGUtYXJyb3cgdWwgbGkgbGk6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDAgMCAtMS4yZW07XG4gIGNvbnRlbnQ6IFwi74SBXCI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuLmxpc3QtLXdoaXRlLWFycm93IGxpIGxpIGxpOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLXdoaXRlLWFycm93IHVsIGxpIGxpIGxpOmJlZm9yZSB7XG4gIG1hcmdpbjogMCAwIDAgLTEuNmVtO1xuICBjb250ZW50OiBcIu+EuFwiO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBsaW5lLWhlaWdodDogMi44O1xufVxuXG4ubGlzdC0tYm9yZGVyZWQsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1ib3JkZXJlZCB1bCxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIHVsIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpc3QtYm9yZGVyZWQtYm9yZGVyKTtcbn1cbi5saXN0LS1ib3JkZXJlZCB1bCBsaTpmaXJzdC1jaGlsZCxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG59XG4ubGlzdC0tYm9yZGVyZWQgbGksXG4ubGlzdC0tYm9yZGVyZWQgPiBkaXYsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCBsaSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKSAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlzdC1ib3JkZXJlZC1ib3JkZXIpO1xufVxuLmxpc3QtLWJvcmRlcmVkIGxpOmxhc3QtY2hpbGQsXG4ubGlzdC0tYm9yZGVyZWQgPiBkaXY6bGFzdC1jaGlsZCxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsIGxpOmxhc3QtY2hpbGQsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ubGlzdC0tYm9yZGVyZWQgbGkgbGksXG4ubGlzdC0tYm9yZGVyZWQgPiBkaXYgbGksXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCBsaSBsaSxcbi5saXN0LXdyYXBwZXItLWJvcmRlcmVkIHVsID4gZGl2IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmxpc3QtLWJvcmRlcmVkIGxpIGxpOmJlZm9yZSxcbi5saXN0LS1ib3JkZXJlZCA+IGRpdiBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCBsaSBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCA+IGRpdiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuLmxpc3QtLWJvcmRlcmVkIGxpOmJlZm9yZSxcbi5saXN0LS1ib3JkZXJlZCA+IGRpdjpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCBsaTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1ib3JkZXJlZCB1bCA+IGRpdjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCAwIDAgLTEuN2VtO1xuICBjb2xvcjogdmFyKC0tbGlzdC1hcnJvdy1jb2xvcik7XG4gIGNvbnRlbnQ6IFwi74S4XCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbn1cblxuLmxpc3QtLWZhcSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5saXN0LS1mYXEgbGksXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWZhcSA+IGxpLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGkge1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwLjVyZW0gdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChvZGQpLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKG9kZCkge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsIHZhcigtLWxpc3QtZmFxLXF1ZXN0aW9uKSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChvZGQpOmhvdmVyLFxuLmxpc3Qtd3JhcHBlci0tZmFxIHVsID4gbGk6bnRoLWNoaWxkKG9kZCk6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsIHZhcigtLWxpc3QtZmFxLXF1ZXN0aW9uLWhvdmVyKSk7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQob2RkKTpub3QoOmZpcnN0LWNoaWxkKSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChvZGQpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpc3QtYm9yZGVyZWQtYm9yZGVyKTtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQob2RkKTpiZWZvcmUsXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQob2RkKTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZyk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpKTtcbiAgY29udGVudDogXCJROlwiO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmxpc3QtLWZhcSA+IGxpOm50aC1jaGlsZChvZGQpID4gcCxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChvZGQpID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0LS1mYXEgPiBsaTpudGgtY2hpbGQoZXZlbiksXG4ubGlzdC13cmFwcGVyLS1mYXEgdWwgPiBsaTpudGgtY2hpbGQoZXZlbikge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubGlzdC0tZmFxID4gbGk6bnRoLWNoaWxkKGV2ZW4pOmJlZm9yZSxcbi5saXN0LXdyYXBwZXItLWZhcSB1bCA+IGxpOm50aC1jaGlsZChldmVuKTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogdmFyKC0tbGlzdC1mYXEtcHJlZml4LXNwYWNpbmcpO1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLWxpc3QtZmFxLXByZWZpeC1zcGFjaW5nKSk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgdmFyKC0tbGlzdC1mYXEtYSkpO1xuICBjb250ZW50OiBcIkE6XCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5saXN0LS1waXBlLFxuLmxpc3Qtd3JhcHBlci0tcGlwZSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLXBpcGUgbGksXG4ubGlzdC13cmFwcGVyLS1waXBlIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1waXBlIGxpLFxuLmxpc3Qtd3JhcHBlci0tcGlwZSB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCB2YXIoLS1saXN0LXBpcGUtcGlwZSkpO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5saXN0LS1waXBlIGxpOmxhc3QtY2hpbGQsXG4ubGlzdC13cmFwcGVyLS1waXBlIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmxpc3QtLWNvbW1lbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuMjVyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDJyZW07XG59XG4ubGlzdC0tY29tbWVudCB1bCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saXN0LWJvcmRlcmVkLWJvcmRlcik7XG59XG4ubGlzdC0tY29tbWVudCB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1saXN0LWJvcmRlcmVkLXZlcnRpY2FsLXNwYWNpbmcpO1xufVxuLmxpc3QtLWNvbW1lbnQgbGksXG4ubGlzdC0tY29tbWVudCA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbGlzdC1ib3JkZXJlZC12ZXJ0aWNhbC1zcGFjaW5nKTtcbiAgcGFkZGluZzogMCAwIHZhcigtLWxpc3QtYm9yZGVyZWQtdmVydGljYWwtc3BhY2luZykgMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpc3QtYm9yZGVyZWQtYm9yZGVyKTtcbn1cbi5saXN0LS1jb21tZW50IGxpOmxhc3QtY2hpbGQsXG4ubGlzdC0tY29tbWVudCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ubGlzdC0tY29tbWVudCBsaSBsaSxcbi5saXN0LS1jb21tZW50ID4gZGl2IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmxpc3QtLWNvbW1lbnQgbGkgbGk6YmVmb3JlLFxuLmxpc3QtLWNvbW1lbnQgPiBkaXYgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cbi5saXN0LS1jb21tZW50IGxpOmJlZm9yZSxcbi5saXN0LS1jb21tZW50ID4gZGl2OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIDAgMCAtMS43ZW07XG4gIGNvbG9yOiB2YXIoLS1saXN0LWFycm93LWNvbG9yKTtcbiAgY29udGVudDogXCLvhLhcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMi4xO1xufVxuXG4ubGlzdC0tc2ltcGxlLFxuLmxpc3Qtd3JhcHBlci0tc2ltcGxlIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tc2ltcGxlIGxpLFxuLmxpc3Qtd3JhcHBlci0tc2ltcGxlIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1zaW1wbGUgbGksXG4ubGlzdC13cmFwcGVyLS1zaW1wbGUgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5saXN0LS1zaW1wbGUgbGkgdWwsXG4ubGlzdC13cmFwcGVyLS1zaW1wbGUgdWwgbGkgdWwge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmxpc3QtLXNpbXBsZSBhLFxuLmxpc3Qtd3JhcHBlci0tc2ltcGxlIHVsIGEge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGlzdC0tZmlsdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tZmlsdGVyIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1maWx0ZXIgbGkge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAgMC4yNXJlbSAwLjVyZW07XG59XG5cbi5saXN0LS1tdWx0aWxldmVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuLmxpc3QtLW11bHRpbGV2ZWwgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWFscGhhO1xufVxuLmxpc3QtLW11bHRpbGV2ZWwgb2wgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xufVxuXG4ubGlzdC0tb3V0bGluZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogdXBwZXItcm9tYW47XG59XG4ubGlzdC0tb3V0bGluZSBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogdXBwZXItYWxwaGE7XG59XG4ubGlzdC0tb3V0bGluZSBvbCBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbn1cbi5saXN0LS1vdXRsaW5lIG9sIG9sIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1sYXRpbjtcbn1cbi5saXN0LS1vdXRsaW5lIG9sIG9sIG9sIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcbn1cblxuLmxpc3QtLXJlc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tcmVzZXQgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdC0tYWNjb3JkaW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubGlzdC0tYWNjb3JkaW9uIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LS1hY2NvcmRpb24gPiBsaSB7XG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSB2YXIoLS1saXN0LWZhcS1wcmVmaXgtc3BhY2luZyk7XG59XG4ubGlzdC0tYWNjb3JkaW9uID4gbGk6bnRoLWNoaWxkKG9kZCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjZTBmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjg1MTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLmxpc3QtLWFjY29yZGlvbiA+IGxpOm50aC1jaGlsZChvZGQpOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAtMC4xNWVtIDAgMCAtMS40M2VtO1xuICBjb2xvcjogdmFyKC0tbGlzdC1hcnJvdy1jb2xvcik7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cbi5saXN0LS1hY2NvcmRpb24gPiBsaTpudGgtY2hpbGQob2RkKSA+IHAge1xuICBtYXJnaW46IDA7XG59XG4ubGlzdC0tYWNjb3JkaW9uID4gbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmYzZmE7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxpc3QtLWFjY29yZGlvbiAuYWN0aXZlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmxpc3QtLWRvd25sb2FkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC0tZG93bmxvYWQgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtLWRvd25sb2FkIGEge1xuICBjb2xvcjogIzEzNjM5ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubGlzdC0tZG93bmxvYWQgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBiMmUzO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYXRlZ29yeS1icmFuZF9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG4uY2F0ZWdvcnktYnJhbmRfX3RleHQtLWtub2NrLW91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLCAjMTM2MzllKTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjZmZmKTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLCAjMTM2MzllKTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBhIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCBpbmhlcml0KTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCBpbmhlcml0KTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoMSxcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoMixcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoMyxcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoNCxcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoNSxcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBoNixcbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBmaWdjYXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCBpbmhlcml0KTtcbn1cbi5jYXRlZ29yeS1icmFuZF9fYmFja2dyb3VuZCBsaTpiZWZvcmUge1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsIGluaGVyaXQpO1xufVxuLmNhdGVnb3J5LWJyYW5kX19iYWNrZ3JvdW5kLS1saWdodGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jYXRlZ29yeS1icmFuZC1yZ2IsICMxMzYzOWUpLCAwLjEpO1xufVxuLmNhdGVnb3J5LWJyYW5kX19hcnJvdzpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjVlbSAwIC0xLjVlbTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLCBpbmhlcml0KTtcbiAgY29udGVudDogXCLihpJcIjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5hZG1pbi1ibHVlLFxuLmFkbWluLWJsdWUgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMxMzYzOWU7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tYWRtaW4tYmx1ZSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMxMzYzOWU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxOSwgOTksIDE1ODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEwLCA1MCwgNzk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4ucmVjLXBvb2wsXG4ucmVjLXBvb2wgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM2ZmNmZWI7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcmVjLXBvb2wge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmZjZmViO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTExLCAyMDcsIDIzNTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDU2LCAxMDQsIDExODtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi50YWhvZSxcbi50YWhvZSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwYjJlMztcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS10YWhvZSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGIyZTM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCAxNzgsIDIyNztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDg5LCAxMTQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uc2t5LWJsdWUsXG4uc2t5LWJsdWUgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGIyZTM7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc2t5LWJsdWUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDBiMmUzO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMCwgMTc4LCAyMjc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAwLCA4OSwgMTE0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmd1bnJvY2ssXG4uZ3Vucm9jayBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwNDdiYTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1ndW5yb2NrIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwNDdiYTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDcxLCAxODY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAwLCAzNiwgOTM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4uYm9kZWdhLFxuLmJvZGVnYSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwM2E1ZDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1ib2RlZ2Ege1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDAzYTVkO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMCwgNTgsIDkzO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgMjksIDQ3O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLndpbnRlci1za3ktZ3JheSxcbi53aW50ZXItc2t5LWdyYXkgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDNhNWQ7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0td2ludGVyLXNreS1ncmF5IHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwM2E1ZDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDU4LCA5MztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDI5LCA0NztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5yYWluLFxuLnJhaW4gYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwM2Y5ZTY7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcmFpbiB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwM2Y5ZTY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAzLCAyNDksIDIzMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDIsIDEyNSwgMTE1O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmFyYm9yZXR1bSxcbi5hcmJvcmV0dW0gYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMGM0YjM7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tYXJib3JldHVtIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwYzRiMztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDE5NiwgMTc5O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgOTgsIDkwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmNvcmstb2FrLFxuLmNvcmstb2FrIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDBjNGIzO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWNvcmstb2FrIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwYzRiMztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDE5NiwgMTc5O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgOTgsIDkwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnB1dGFoLWNyZWVrLFxuLnB1dGFoLWNyZWVrIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDA4ZWFhO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXB1dGFoLWNyZWVrIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzAwOGVhYTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDAsIDE0MiwgMTcwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgNzEsIDg1O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5yZWMtcG9vbC1ibHVlLFxuLnJlYy1wb29sLWJsdWUgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDhlYWE7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcmVjLXBvb2wtYmx1ZSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDhlYWE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAwLCAxNDIsIDE3MDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDAsIDcxLCA4NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uZGVsdGEsXG4uZGVsdGEgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMwMDUyNGM7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tZGVsdGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMDA1MjRjO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMCwgODIsIDc2O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMCwgNDEsIDM4O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLmZhcm1lcnMtbWFya2V0LFxuLmZhcm1lcnMtbWFya2V0IGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYWFkYTkxO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWZhcm1lcnMtbWFya2V0IHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2FhZGE5MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE3MCwgMjE4LCAxNDU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA4NSwgMTA5LCA3MztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzI2NjA0MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDM4LCA5NiwgNjU7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uaGFydC1oYWxsLXN0dWNjbyxcbi5oYXJ0LWhhbGwtc3R1Y2NvIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYWFkYTkxO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWhhcnQtaGFsbC1zdHVjY28ge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYWFkYTkxO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTcwLCAyMTgsIDE0NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDg1LCAxMDksIDczO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMjY2MDQxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMzgsIDk2LCA2NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5zYWdlLFxuLnNhZ2UgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM2Y2NhOTg7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc2FnZSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM2Y2NhOTg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxMDgsIDIwMiwgMTUyO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogNTQsIDEwMSwgNzY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDUyNGM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCA4MiwgNzY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uc2FnZS1ncmVlbixcbi5zYWdlLWdyZWVuIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmNjYTk4O1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXNhZ2UtZ3JlZW4ge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNmNjYTk4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTA4LCAyMDIsIDE1MjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDU0LCAxMDEsIDc2O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDA1MjRjO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMCwgODIsIDc2O1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnF1YWQsXG4ucXVhZCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzNkYWUyYjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1xdWFkIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzNkYWUyYjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDYxLCAxNzQsIDQzO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMzEsIDg3LCAyMjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5zdW5ueS1ncmFzcyxcbi5zdW5ueS1ncmFzcyBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzNkYWUyYjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1zdW5ueS1ncmFzcyB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICMzZGFlMmI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiA2MSwgMTc0LCA0MztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDMxLCA4NywgMjI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4ucmVkd29vZCxcbi5yZWR3b29kIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMjY2MDQxO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXJlZHdvb2Qge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMjY2MDQxO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMzgsIDk2LCA2NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDE5LCA0OCwgMzM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4uZXZlcmdyZWVuLFxuLmV2ZXJncmVlbiBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzI2NjA0MTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1ldmVyZ3JlZW4ge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjMjY2MDQxO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMzgsIDk2LCA2NTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDE5LCA0OCwgMzM7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4uZ29sZGVuLXN0YXRlLFxuLmdvbGRlbi1zdGF0ZSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmZmYzYjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1nb2xkZW4tc3RhdGUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmZmZjNiO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjU1LCAyNTUsIDU5O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTI4LCAxMjgsIDMwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnN1bmZsb3dlcixcbi5zdW5mbG93ZXIgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZmRjMDA7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tc3VuZmxvd2VyIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2ZmZGMwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI1NSwgMjIwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTI4LCAxMTAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uZ29sZGVuLWx1cGluZSxcbi5nb2xkZW4tbHVwaW5lIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmZkYzAwO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWdvbGRlbi1sdXBpbmUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmZkYzAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjU1LCAyMjAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiAxMjgsIDExMCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAyMjg1MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDIsIDQwLCA4MTtcbiAgLS1jYXRlZ29yeS1icmFuZC1mZWF0dXJlZDogdmFyKC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3IsICMxMzYzOWUpO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZpbHRlcjogYnJpZ2h0bmVzcygwJSk7XG59XG5cbi5wb3BweSxcbi5wb3BweSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2YxOGEwMDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1wb3BweSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmMThhMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAyNDEsIDEzOCwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyMSwgNjksIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmNhbGlmb3JuaWEtcG9wcHksXG4uY2FsaWZvcm5pYS1wb3BweSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2YxOGEwMDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1jYWxpZm9ybmlhLXBvcHB5IHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2YxOGEwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI0MSwgMTM4LCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTIxLCA2OSwgMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4uY2FsaWZvcm5pYSxcbi5jYWxpZm9ybmlhIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjOGE1MzJmO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLWNhbGlmb3JuaWEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjOGE1MzJmO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTM4LCA4MywgNDc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA2OSwgNDIsIDI0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLnNvdXRoLWhhbGwtYnJvd24sXG4uc291dGgtaGFsbC1icm93biBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzhhNTMyZjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1zb3V0aC1oYWxsLWJyb3duIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzhhNTMyZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDEzOCwgODMsIDQ3O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogNjksIDQyLCAyNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5yb3NlLFxuLnJvc2UgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZjgxODk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcm9zZSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZjgxODk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAyNTUsIDEyOSwgMTM3O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTI4LCA2NSwgNjk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMjI4NTE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyLCA0MCwgODE7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG4ubXUtYnJpY2ssXG4ubXUtYnJpY2sgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmZjgxODk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tbXUtYnJpY2sge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZmY4MTg5O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjU1LCAxMjksIDEzNztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyOCwgNjUsIDY5O1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjMDIyODUxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMiwgNDAsIDgxO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnN0cmF3YmVycnksXG4uc3RyYXdiZXJyeSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2Y5MzU0OTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1zdHJhd2JlcnJ5IHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2Y5MzU0OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDI0OSwgNTMsIDczO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogMTI1LCAyNywgMzc7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICMwMDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLmRvdWJsZS1kZWNrZXIsXG4uZG91YmxlLWRlY2tlciBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2MxMDIzMDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1kb3VibGUtZGVja2VyIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2MxMDIzMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE5MywgMiwgNDg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiLS1kYXJrOiA5NywgMSwgMjQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4udW5pdHJhbnMtcmVkLFxuLnVuaXRyYW5zLXJlZCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2MxMDIzMDtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS11bml0cmFucy1yZWQge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYzEwMjMwO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTkzLCAyLCA0ODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDk3LCAxLCAyNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5tZXJsb3QsXG4ubWVybG90IGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNzkyNDJmO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLW1lcmxvdCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM3OTI0MmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxMjEsIDM2LCA0NztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDYxLCAxOCwgMjQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4udGhpZWJhdWQtaWNpbmcsXG4udGhpZWJhdWQtaWNpbmcgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNmMDk1Y2Q7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tdGhpZWJhdWQtaWNpbmcge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjZjA5NWNkO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMjQwLCAxNDksIDIwNTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDEyMCwgNzUsIDEwMztcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzQ4MTI2ODtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDcyLCAxOCwgMTA0O1xuICAtLWNhdGVnb3J5LWJyYW5kLWZlYXR1cmVkOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgIzEzNjM5ZSk7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmlsdGVyOiBicmlnaHRuZXNzKDAlKTtcbn1cblxuLnJlZGJ1ZCxcbi5yZWRidWQgYSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNjNjAwN2U7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCk7XG59XG5cbi5jYXRlZ29yeS1icmFuZC0tcmVkYnVkIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2M2MDA3ZTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE5OCwgMCwgMTI2O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogOTksIDAsIDYzO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLndlc3Rlcm4tcmVkYnVkLFxuLndlc3Rlcm4tcmVkYnVkIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjYzYwMDdlO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXdlc3Rlcm4tcmVkYnVkIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2M2MDA3ZTtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDE5OCwgMCwgMTI2O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogOTksIDAsIDYzO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yOiAjZmZmO1xuICAtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbn1cblxuLnBpbm90LFxuLnBpbm90IGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNzYyMzZjO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXBpbm90IHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzc2MjM2YztcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2I6IDExOCwgMzUsIDEwODtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDU5LCAxOCwgNTQ7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3I6ICNmZmY7XG4gIC0tY2F0ZWdvcnktYnJhbmQtY29udHJhc3QtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xufVxuXG4ud2luZS1ncmFwZSxcbi53aW5lLWdyYXBlIGEge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNzYyMzZjO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYnJhbmQpO1xufVxuXG4uY2F0ZWdvcnktYnJhbmQtLXdpbmUtZ3JhcGUge1xuICAtLWNhdGVnb3J5LWJyYW5kOiAjNzYyMzZjO1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYjogMTE4LCAzNSwgMTA4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogNTksIDE4LCA1NDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5jYWJlcm5ldCxcbi5jYWJlcm5ldCBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogIzQ4MTI2ODtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1jYWJlcm5ldCB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICM0ODEyNjg7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiA3MiwgMTgsIDEwNDtcbiAgLS1jYXRlZ29yeS1icmFuZC1yZ2ItLWRhcms6IDM2LCA5LCA1MjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogI2ZmZjtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG59XG5cbi5jZW50ZW5uaWFsLXdhbGstZ3JheSxcbi5jZW50ZW5uaWFsLXdhbGstZ3JheSBhIHtcbiAgLS1jYXRlZ29yeS1icmFuZDogI2IyYjJiMjtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kKTtcbn1cblxuLmNhdGVnb3J5LWJyYW5kLS1jZW50ZW5uaWFsLXdhbGstZ3JheSB7XG4gIC0tY2F0ZWdvcnktYnJhbmQ6ICNiMmIyYjI7XG4gIC0tY2F0ZWdvcnktYnJhbmQtcmdiOiAxNzgsIDE3OCwgMTc4O1xuICAtLWNhdGVnb3J5LWJyYW5kLXJnYi0tZGFyazogODksIDg5LCA4OTtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvcjogIzAwMDtcbiAgLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0tY2F0ZWdvcnktYnJhbmQtZmVhdHVyZWQ6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjMTM2MzllKTtcbiAgLS1jYXRlZ29yeS1icmFuZC1maWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb2xsYXBzZV9fdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZCwgIzAyMjg1MSk7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS1icmFuZC1jb250cmFzdC1jb2xvciwgI2ZmZik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMS41cmVtIDJyZW0gMS41cmVtIDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLmNvbGxhcHNlX190aXRsZTphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuY29sbGFwc2VfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG4uY29sbGFwc2VfX3RpdGxlOmFmdGVyIHtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LWJyYW5kLWNvbnRyYXN0LWNvbG9yLCAjZmZiZjAwKTtcbiAgY29udGVudDogXCLvgadcIjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbn1cbi5jb2xsYXBzZV9fdGl0bGUtLW9wZW46YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuLmNvbGxhcHNlX19jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyMjg1MTtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jb2xsYXBzZV9fY29udGVudCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5jb2xsYXBzZV9fY29udGVudCBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4uZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmdhbGxlcnkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDExcmVtLCAxZnIpKTtcbiAgfVxufVxuLmdhbGxlcnlfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeV9fdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdhbGxlcnktLXBvc3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbGxlcnktLXBvc3RlciAuZ2FsbGVyeV9faXRlbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ2FsbGVyeS0tcG9zdGVyIC5nYWxsZXJ5X19pdGVtOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmdhbGxlcnktLXBvc3RlciAuZ2FsbGVyeV9faXRlbTpmaXJzdC1jaGlsZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5nYWxsZXJ5LS1wb3N0ZXIgLmdhbGxlcnlfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmQ6ICNmN2ZhZmQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZ2FsbGVyeSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ2FsbGVyeSBhOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICBib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy9leHBhbmQuc3ZnXCIpO1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmdhbGxlcnkgYTpob3ZlcjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4ubWVzc2FnZS1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWEge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XG4gIH1cbn1cbi5tZXNzYWdlLWFyZWEgYSB7XG4gIGNvbG9yOiAjMDIyODUxO1xufVxuLm1lc3NhZ2UtYXJlYSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tZXNzYWdlLWFyZWEtLWNsb3NlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxLjg1cmVtO1xuICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm1lc3NhZ2UtYXJlYS0tY2xvc2VkIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICB9XG59XG4ubWVzc2FnZS1hcmVhLS1jbG9zZWQgLm1lc3NhZ2UtYXJlYV9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tZXNzYWdlLWFyZWFfX3RpdGxlIHtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLm1lc3NhZ2UtYXJlYV9fYm9keSB7XG4gIGNvbG9yOiAjMDIyODUxO1xufVxuLm1lc3NhZ2UtYXJlYV9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMjVyZW07XG4gIHJpZ2h0OiAwLjI1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwLjEzcmVtIDAgMCAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tZXNzYWdlLWFyZWFfX2J1dHRvbiB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG4ubWVzc2FnZS1hcmVhX19idXR0b246YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbnRlbnQ6IFwi74GXXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4ubWVzc2FnZS1hcmVhLS1jbG9zZWQgLm1lc3NhZ2UtYXJlYV9fYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74S6XCI7XG59XG4ubWVzc2FnZS1hcmVhX19idXR0b246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tZXNzYWdlLWFyZWFfX2J1dHRvbjpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjI4NTE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjI4NTE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5gOyIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5hbGVydCB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY0ZmI7XG4gIGNvbG9yOiAjMDIyODUxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuYWxlcnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xuICAgIHBhZGRpbmctbGVmdDogMyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFsZXJ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5hbGVydCB7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgfVxufVxuLmwtY29udGFpbmVyIC5hbGVydCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5hbGVydC0tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmVkY2E7XG4gIGNvbG9yOiAjMDAzYTVkO1xufVxuLmFsZXJ0LS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE5OTtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG4uYWxlcnQtLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmVjMjtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG4uYWxlcnQtLWZsdXNoIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hbGVydCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hbGVydCAuYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmFsZXJ0IGxpIC5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogLTFyZW07XG59XG5cbmA7IiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcblxuLnNlYXJjaC1mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmNGQyO1xufVxuLnNlYXJjaC1mb3JtX19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgcGFkZGluZy1yaWdodDogNzBweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5zZWFyY2gtZm9ybV9fc3VibWl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMi4xZW07XG4gIGhlaWdodDogMi4xZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMi4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzYzOWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjZmZmYmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1pbmRlbnQ6IC0wLjJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnNlYXJjaC1mb3JtX19zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNhYmRkO1xufVxuLnNlYXJjaC1mb3JtX19zdWJtaXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xuICBjb2xvcjogI2ZmZmJlZDtcbn1cbi5zZWFyY2gtZm9ybV9faW5wdXQ6Zm9jdXMsIC5zZWFyY2gtZm9ybV9fc3VibWl0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMwMjI4NTE7XG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG5AY2hhcnNldCBcIlVURi04XCI7XG4uc2VhcmNoLXBvcHVwIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNlYXJjaC1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDg1MDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDhlbTtcbiAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgIGJvcmRlci1jb2xvcjogIzk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zZWFyY2gtcG9wdXAgLnNlYXJjaC1mb3JtIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICB9XG59XG4uc2VhcmNoLXBvcHVwLmlzLW9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuLnNlYXJjaC1wb3B1cF9fb3BlbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NDQ3YTtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW46YmVmb3JlIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMy4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC45NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NDQ3YTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkzJSAwLCAxMDAlIDAsIDEwMCUgMTAyJSwgMCUgMTAyJSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmZvY3VzOmJlZm9yZSwgLnNlYXJjaC1wb3B1cF9fb3Blbjpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjAwO1xufVxuLnNlYXJjaC1wb3B1cF9fb3BlbjphZnRlciB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDMuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuOTVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDQ0N2E7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgNyUgMTAwJSwgMCUgMTAwJSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmZvY3VzOmFmdGVyLCAuc2VhcmNoLXBvcHVwX19vcGVuOmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc2VhcmNoLXBvcHVwX19vcGVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmZvY3VzLCAuc2VhcmNoLXBvcHVwX19vcGVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYwMDtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoLXBvcHVwLS1lZGdlIC5zZWFyY2gtcG9wdXBfX29wZW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4uc2VhcmNoLXBvcHVwX19vcGVuOmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogMC4xNXJlbTtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW46YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMC4xNXJlbTtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW4taWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIuNDM3NXJlbTtcbiAgaGVpZ2h0OiAyLjQzNzVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyODUxO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xufVxuLnNlYXJjaC1wb3B1cF9fb3Blbi1pY29uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGNvbnRlbnQ6IFwi74CCXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zZWFyY2gtcG9wdXBfX29wZW4taWNvbi0tY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgI1cIjtcbn1cbi5zZWFyY2gtcG9wdXBfX2Nsb3NlLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuMXJlbTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zZWFyY2gtcG9wdXBfX2Nsb3NlLWljb246YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4MzA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4udS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi51LWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4udS1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi51LWhpZGRlbi0tdmlzdWFsbHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4udS1zaG93bi0tdmlzdWFsbHkge1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjbGlwOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udS1oaWRlLXRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWluZGVudDogMTEwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuYDsiLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuXG4vKiEgbm9ybWFsaXplLXNjc3MgfCBNSVQvR1BMdjIgTGljZW5zZSB8IGJpdC5seS9ub3JtYWxpemUtc2NzcyAqL1xuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW5cbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cbiAqL1xuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXG4gKi9cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbmFydGljbGUsXG5hc2lkZSxcbmZvb3RlcixcbmhlYWRlcixcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuZmlnY2FwdGlvbixcbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBtYXJnaW4gaW4gSUUgOC5cbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDEgKi9cbiAgaGVpZ2h0OiAwO1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXG4gKi9cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi9cbn1cblxuLyogTGlua3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cbiAqL1xuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG4gIC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctIGFuZCBGaXJlZm94IDM5LS5cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gIC8qIDIgKi9cbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXCJlbVwiIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzdHlsZSBpbiBBbmRyb2lkIDQuMy0uXG4gKi9cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXG4gKi9cbm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFwic3ViXCIgYW5kIFwic3VwXCIgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxuICovXG5hdWRpbyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXG4gKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cbiAqL1xuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKipcbiAqIEhpZGUgdGhlIG92ZXJmbG93IGluIElFLlxuICovXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7XG4gIC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIC8qIDEgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKi9cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgXCJhdWRpb1wiIGFuZCBcInZpZGVvXCJcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbiAqIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcbmh0bWwgW3R5cGU9YnV0dG9uXSxcblt0eXBlPXJlc2V0XSxcblt0eXBlPXN1Ym1pdF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xufVxuXG5idXR0b24sXG5bdHlwZT1idXR0b25dLFxuW3R5cGU9cmVzZXRdLFxuW3R5cGU9c3VibWl0XSB7XG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICAgKi9cbiAgLyoqXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAgICovXG59XG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cbiAqL1xuW3R5cGU9Y2hlY2tib3hdLFxuW3R5cGU9cmFkaW9dIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5bdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC8qIDIgKi9cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gICAqL1xufVxuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcImluaGVyaXRcIiBpbiBTYWZhcmkuXG4gKi9cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMSAqL1xuICBmb250OiBpbmhlcml0O1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcImZpZWxkc2V0XCIgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcImZpZWxkc2V0XCIgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAzICovXG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAyICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDEgKi9cbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbnByb2dyZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cbiAqL1xuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXG4gKi9cbm1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU2NyaXB0aW5nXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cbiAqL1xuY2FudmFzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxuICovXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGRlblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmA7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xudmFyIF9mO1xuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUgW1tgTGl0RWxlbWVudGBdXSBiYXNlIGNsYXNzIGFuZFxuICogcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQgW1tgTGl0RWxlbWVudGBdXSBhbmQgW1tgaHRtbGBdXSBmcm9tIHRoaXMgbW9kdWxlIHRvIGNyZWF0ZSBhXG4gKiBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIFtbYFJlYWN0aXZlRWxlbWVudGBdXSBhbmQgYWRkcyBsaXQtaHRtbCB0ZW1wbGF0aW5nLlxuICogVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG8gYnVpbGRcbiAqIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIG5vQ2hhbmdlIH0gZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBleHBvcnQgUmVhY3RpdmVFbGVtZW50IGFzIFVwZGF0aW5nRWxlbWVudC4gTm90ZSxcbi8vIElFIHRyYW5zcGlsYXRpb24gcmVxdWlyZXMgZXhwb3J0aW5nIGxpa2UgdGhpcy5cbmV4cG9ydCBjb25zdCBVcGRhdGluZ0VsZW1lbnQgPSBSZWFjdGl2ZUVsZW1lbnQ7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbigoX2EgPSAoX2YgPSBnbG9iYWxUaGlzKVsnbGl0RWxlbWVudFZlcnNpb25zJ10pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfZlsnbGl0RWxlbWVudFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzMuMC4wLXJjLjEnKTtcbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIFtbYHByb3BlcnRpZXNgXV0gcHJvcGVydHkgb3IgdGhlIFtbYHByb3BlcnR5YF1dIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBSZWFjdGl2ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgICAgIC8vIHNoYWRvd1Jvb3QgYnkgY3JlYXRlUmVuZGVyUm9vdC4gQWRqdXN0IHRoZSByZW5kZXJCZWZvcmUgbm9kZSBzbyB0aGF0XG4gICAgICAgIC8vIGFueSBzdHlsZXMgaW4gTGl0IGNvbnRlbnQgcmVuZGVyIGJlZm9yZSBhZG9wdGVkU3R5bGVTaGVldHMuIFRoaXMgaXNcbiAgICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgICAgICAvLyB0aGUgc2hhZG93Um9vdC5cbiAgICAgICAgKF9hID0gKF9iID0gdGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYi5yZW5kZXJCZWZvcmUgPSByZW5kZXJSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgICAgIC8vIHVwZGF0ZXMgYXJlIGFsbG93ZWQgYWZ0ZXIgc3VwZXIudXBkYXRlLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGByZW5kZXJgXG4gICAgICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSByZW5kZXIodmFsdWUsIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gVE9ETyhrc2NoYWFmKTogQ29uc2lkZXIgZGVib3VuY2luZyBkaXJlY3RpdmUgZGlzY29ubmVjdGlvbiBzbyBlbGVtZW50IG1vdmVzXG4gICAgLy8gZG8gbm90IHRocmFzaCBkaXJlY3RpdmUgY2FsbGJhY2tzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvbGl0LWh0bWwvaXNzdWVzLzE0NTdcbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZCh0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbkxpdEVsZW1lbnQuXyRsaXRFbGVtZW50JCA9IHRydWU7XG4vLyBJbnN0YWxsIGh5ZHJhdGlvbiBpZiBhdmFpbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4oX2MgPSAoX2IgPSBnbG9iYWxUaGlzKVsnbGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0J10pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9lID0gKF9kID0gZ2xvYmFsVGhpcylbJ2xpdEVsZW1lbnRQbGF0Zm9ybVN1cHBvcnQnXSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNhbGwoX2QsIHsgTGl0RWxlbWVudCB9KTtcbi8vIERFViBtb2RlIHdhcm5pbmdzXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBOb3RlLCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGNsb3N1cmUgY29tcGlsYXRpb24sIHRoaXMgYWNjZXNzXG4gICAgLy8gbmVlZHMgdG8gYmUgYXMgYSBzdHJpbmcgcHJvcGVydHkgaW5kZXguXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBMaXRFbGVtZW50WydmaW5hbGl6ZSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCBmaW5hbGl6ZWQgPSBSZWFjdGl2ZUVsZW1lbnQuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCFmaW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZCA9IChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmpbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZC4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuIGBcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBhZGQgbGluayB0byBjaGFuZ2Vsb2cgd2hlbiBsb2NhdGlvbiBoYXMgc3RhYmlsaXplZC5cbiAgICAgICAgICAgICAgICAvLyArIFNlZSB0aGUgY2hhbmdlbG9nIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL2xpdC1odG1sL2Jsb2IvbWFpbi9wYWNrYWdlcy9saXQtZWxlbWVudC9DSEFOR0VMT0cubWRgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgW2ByZW5kZXJgLCBgZ2V0U3R5bGVzYF0uZm9yRWFjaCgobmFtZSkgPT4gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdhcm5SZW1vdmVkKHRoaXMsIG5hbWUpKTtcbiAgICAgICAgW2BhZG9wdFN0eWxlc2BdLmZvckVhY2goKG5hbWUpID0+IFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3YXJuUmVtb3ZlZCh0aGlzLnByb3RvdHlwZSwgbmFtZSkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfzqYgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF/OpiA9IHtcbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHk6IChlbCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBfJGNoYW5nZWRQcm9wZXJ0aWVzOiAoZWwpID0+IGVsLl8kY2hhbmdlZFByb3BlcnRpZXMsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIE92ZXJ2aWV3OlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGRlc2lnbmVkIHRvIGFkZCBzdXBwb3J0IGZvciBhbiBhc3luYyBgc2V0VmFsdWVgIEFQSSBhbmRcbiAqIGBkaXNjb25uZWN0ZWRgIGNhbGxiYWNrIHRvIGRpcmVjdGl2ZXMgd2l0aCB0aGUgbGVhc3QgaW1wYWN0IG9uIHRoZSBjb3JlXG4gKiBydW50aW1lIG9yIHBheWxvYWQgd2hlbiB0aGF0IGZlYXR1cmUgaXMgbm90IHVzZWQuXG4gKlxuICogVGhlIHN0cmF0ZWd5IGlzIHRvIGludHJvZHVjZSBhIGBBc3luY0RpcmVjdGl2ZWAgc3ViY2xhc3Mgb2ZcbiAqIGBEaXJlY3RpdmVgIHRoYXQgY2xpbWJzIHRoZSBcInBhcmVudFwiIHRyZWUgaW4gaXRzIGNvbnN0cnVjdG9yIHRvIG5vdGUgd2hpY2hcbiAqIGJyYW5jaGVzIG9mIGxpdC1odG1sJ3MgXCJsb2dpY2FsIHRyZWVcIiBvZiBkYXRhIHN0cnVjdHVyZXMgY29udGFpbiBzdWNoXG4gKiBkaXJlY3RpdmVzIGFuZCB0aHVzIG5lZWQgdG8gYmUgY3Jhd2xlZCB3aGVuIGEgc3VidHJlZSBpcyBiZWluZyBjbGVhcmVkIChvclxuICogbWFudWFsbHkgZGlzY29ubmVjdGVkKSBpbiBvcmRlciB0byBydW4gdGhlIGBkaXNjb25uZWN0ZWRgIGNhbGxiYWNrLlxuICpcbiAqIFRoZSBcIm5vZGVzXCIgb2YgdGhlIGxvZ2ljYWwgdHJlZSBpbmNsdWRlIFBhcnRzLCBUZW1wbGF0ZUluc3RhbmNlcyAoZm9yIHdoZW4gYVxuICogVGVtcGxhdGVSZXN1bHQgaXMgY29tbWl0dGVkIHRvIGEgdmFsdWUgb2YgYSBDaGlsZFBhcnQpLCBhbmQgRGlyZWN0aXZlczsgdGhlc2VcbiAqIGFsbCBpbXBsZW1lbnQgYSBjb21tb24gaW50ZXJmYWNlIGNhbGxlZCBgRGlzY29ubmVjdGFibGVDaGlsZGAuIEVhY2ggaGFzIGFcbiAqIGBfJHBhcmVudGAgcmVmZXJlbmNlIHdoaWNoIGlzIHNldCBkdXJpbmcgY29uc3RydWN0aW9uIGluIHRoZSBjb3JlIGNvZGUsIGFuZCBhXG4gKiBgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuYCBmaWVsZCB3aGljaCBpcyBpbml0aWFsbHkgdW5kZWZpbmVkLlxuICpcbiAqIFRoZSBzcGFyc2UgdHJlZSBjcmVhdGVkIGJ5IG1lYW5zIG9mIHRoZSBgQXN5bmNEaXJlY3RpdmVgIGNvbnN0cnVjdG9yXG4gKiBjcmF3bGluZyB1cCB0aGUgYF8kcGFyZW50YCB0cmVlIGFuZCBwbGFjaW5nIGEgYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAgU2V0XG4gKiBvbiBlYWNoIHBhcmVudCB0aGF0IGluY2x1ZGVzIGVhY2ggY2hpbGQgdGhhdCBjb250YWlucyBhXG4gKiBgQXN5bmNEaXJlY3RpdmVgIGRpcmVjdGx5IG9yIHRyYW5zaXRpdmVseSB2aWEgaXRzIGNoaWxkcmVuLiBJbiBvcmRlclxuICogZGlzY29ubmVjdCAob3IgcmVjb25uZWN0KSBhIHRyZWUsIHRoZSBgXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWRgIEFQSSBpcyBwYXRjaGVkXG4gKiBvbnRvIENoaWxkUGFydHMgYXMgYSBkaXJlY3RpdmUgY2xpbWJzIHRoZSBwYXJlbnQgdHJlZSwgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZVxuICogY29yZSB3aGVuIGNsZWFyaW5nIGEgcGFydCBpZiBpdCBleGlzdHMuIFdoZW4gY2FsbGVkLCB0aGF0IG1ldGhvZCBpdGVyYXRlc1xuICogb3ZlciB0aGUgc3BhcnNlIHRyZWUgb2YgU2V0PERpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4+IGJ1aWx0IHVwIGJ5XG4gKiBBc3luY0RpcmVjdGl2ZXMsIGFuZCBjYWxscyBgXyRzZXREaXJlY3RpdmVDb25uZWN0ZWRgIG9uIGFueVxuICogZGlyZWN0aXZlcyB0aGF0IGFyZSBlbmNvdW50ZXJlZCBpbiB0aGF0IHRyZWUsIHJ1bm5pbmcgdGhlIHJlcXVpcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBBIGdpdmVuIFwibG9naWNhbCB0cmVlXCIgb2YgbGl0LWh0bWwgZGF0YS1zdHJ1Y3R1cmVzIG1pZ2h0IGxvb2sgbGlrZSB0aGlzOlxuICpcbiAqICBDaGlsZFBhcnQoTjEpIF8kZEM9W0QyLFQzXVxuICogICAuX2RpcmVjdGl2ZVxuICogICAgIEFzeW5jRGlyZWN0aXZlKEQyKVxuICogICAuX3ZhbHVlIC8vIHVzZXIgdmFsdWUgd2FzIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgVGVtcGxhdGVJbnN0YW5jZShUMykgXyRkQz1bQTQsQTYsTjEwLE4xMl1cbiAqICAgICAgLl9wYXJ0c1tdXG4gKiAgICAgICAgQXR0cmlidXRlUGFydChBNCkgXyRkQz1bRDVdXG4gKiAgICAgICAgIC5fZGlyZWN0aXZlc1tdXG4gKiAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDUpXG4gKiAgICAgICAgQXR0cmlidXRlUGFydChBNikgXyRkQz1bRDcsRDhdXG4gKiAgICAgICAgIC5fZGlyZWN0aXZlc1tdXG4gKiAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDcpXG4gKiAgICAgICAgICAgRGlyZWN0aXZlKEQ4KSBfJGRDPVtEOV1cbiAqICAgICAgICAgICAgLl9kaXJlY3RpdmVcbiAqICAgICAgICAgICAgICBBc3luY0RpcmVjdGl2ZShEOSlcbiAqICAgICAgICBDaGlsZFBhcnQoTjEwKSBfJGRDPVtEMTFdXG4gKiAgICAgICAgIC5fZGlyZWN0aXZlXG4gKiAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDExKVxuICogICAgICAgICAuX3ZhbHVlXG4gKiAgICAgICAgICAgc3RyaW5nXG4gKiAgICAgICAgQ2hpbGRQYXJ0KE4xMikgXyRkQz1bRDEzLE4xNCxOMTZdXG4gKiAgICAgICAgIC5fZGlyZWN0aXZlXG4gKiAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDEzKVxuICogICAgICAgICAuX3ZhbHVlIC8vIHVzZXIgdmFsdWUgd2FzIGl0ZXJhYmxlXG4gKiAgICAgICAgICAgQXJyYXk8Q2hpbGRQYXJ0PlxuICogICAgICAgICAgICAgQ2hpbGRQYXJ0KE4xNCkgXyRkQz1bRDE1XVxuICogICAgICAgICAgICAgIC5fdmFsdWVcbiAqICAgICAgICAgICAgICAgIHN0cmluZ1xuICogICAgICAgICAgICAgQ2hpbGRQYXJ0KE4xNikgXyRkQz1bRDE3LFQxOF1cbiAqICAgICAgICAgICAgICAuX2RpcmVjdGl2ZVxuICogICAgICAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDE3KVxuICogICAgICAgICAgICAgIC5fdmFsdWUgLy8gdXNlciB2YWx1ZSB3YXMgVGVtcGxhdGVSZXN1bHRcbiAqICAgICAgICAgICAgICAgIFRlbXBsYXRlSW5zdGFuY2UoVDE4KSBfJGRDPVtBMTksQTIxLE4yNV1cbiAqICAgICAgICAgICAgICAgICAuX3BhcnRzW11cbiAqICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZVBhcnQoQTE5KSBfJGRDPVtEMjBdXG4gKiAgICAgICAgICAgICAgICAgICAgLl9kaXJlY3RpdmVzW11cbiAqICAgICAgICAgICAgICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQyMClcbiAqICAgICAgICAgICAgICAgICAgIEF0dHJpYnV0ZVBhcnQoQTIxKSBfJGRDPVsyMiwyM11cbiAqICAgICAgICAgICAgICAgICAgICAuX2RpcmVjdGl2ZXNbXVxuICogICAgICAgICAgICAgICAgICAgICAgQXN5bmNEaXJlY3RpdmUoRDIyKVxuICogICAgICAgICAgICAgICAgICAgICAgRGlyZWN0aXZlKEQyMykgXyRkQz1bRDI0XVxuICogICAgICAgICAgICAgICAgICAgICAgIC5fZGlyZWN0aXZlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBBc3luY0RpcmVjdGl2ZShEMjQpXG4gKiAgICAgICAgICAgICAgICAgICBDaGlsZFBhcnQoTjI1KSBfJGRDPVtEMjZdXG4gKiAgICAgICAgICAgICAgICAgICAgLl9kaXJlY3RpdmVcbiAqICAgICAgICAgICAgICAgICAgICAgIEFzeW5jRGlyZWN0aXZlKEQyNilcbiAqICAgICAgICAgICAgICAgICAgICAuX3ZhbHVlXG4gKiAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdcbiAqXG4gKiBFeGFtcGxlIDE6IFRoZSBkaXJlY3RpdmUgaW4gQ2hpbGRQYXJ0KE4xMikgdXBkYXRlcyBhbmQgcmV0dXJucyBgbm90aGluZ2AuIFRoZVxuICogQ2hpbGRQYXJ0IHdpbGwgX2NsZWFyKCkgaXRzZWxmLCBhbmQgc28gd2UgbmVlZCB0byBkaXNjb25uZWN0IHRoZSBcInZhbHVlXCIgb2ZcbiAqIHRoZSBDaGlsZFBhcnQgKGJ1dCBub3QgaXRzIGRpcmVjdGl2ZSkuIEluIHRoaXMgY2FzZSwgd2hlbiBgX2NsZWFyKClgIGNhbGxzXG4gKiBgXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQoKWAsIHdlIGRvbid0IGl0ZXJhdGUgYWxsIG9mIHRoZVxuICogXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuLCByYXRoZXIgd2UgZG8gYSB2YWx1ZS1zcGVjaWZpYyBkaXNjb25uZWN0aW9uOiBpLmUuXG4gKiBzaW5jZSB0aGUgX3ZhbHVlIHdhcyBhbiBBcnJheTxDaGlsZFBhcnQ+IChiZWNhdXNlIGFuIGl0ZXJhYmxlIGhhZCBiZWVuXG4gKiBjb21taXR0ZWQpLCB3ZSBpdGVyYXRlIHRoZSBhcnJheSBvZiBDaGlsZFBhcnRzIChOMTQsIE4xNikgYW5kIHJ1blxuICogYHNldENvbm5lY3RlZGAgb24gdGhlbSAod2hpY2ggZG9lcyByZWN1cnNlIGRvd24gdGhlIGZ1bGwgdHJlZSBvZlxuICogYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAgYmVsb3cgaXQsIGFuZCBhbHNvIHJlbW92ZXMgTjE0IGFuZCBOMTYgZnJvbSBOMTInc1xuICogYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmApLiBPbmNlIHRoZSB2YWx1ZXMgaGF2ZSBiZWVuIGRpc2Nvbm5lY3RlZCwgd2UgdGhlblxuICogY2hlY2sgd2hldGhlciB0aGUgQ2hpbGRQYXJ0KE4xMikncyBsaXN0IG9mIGBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW5gIGlzIGVtcHR5XG4gKiAoYW5kIHdvdWxkIHJlbW92ZSBpdCBmcm9tIGl0cyBwYXJlbnQgVGVtcGxhdGVJbnN0YW5jZShUMykgaWYgc28pLCBidXQgc2luY2VcbiAqIGl0IHdvdWxkIHN0aWxsIGNvbnRhaW4gaXRzIGRpcmVjdGl2ZSBEMTMsIGl0IHN0YXlzIGluIHRoZSBkaXNjb25uZWN0YWJsZVxuICogdHJlZS5cbiAqXG4gKiBFeGFtcGxlIDI6IEluIHRoZSBjb3Vyc2Ugb2YgRXhhbXBsZSAxLCBgc2V0Q29ubmVjdGVkYCB3aWxsIHJlYWNoXG4gKiBDaGlsZFBhcnQoTjE2KTsgaW4gdGhpcyBjYXNlIHRoZSBlbnRpcmUgcGFydCBpcyBiZWluZyBkaXNjb25uZWN0ZWQsIHNvIHdlXG4gKiBzaW1wbHkgaXRlcmF0ZSBhbGwgb2YgTjE2J3MgYF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbmAgKEQxNyxUMTgpIGFuZFxuICogcmVjdXJzaXZlbHkgcnVuIGBzZXRDb25uZWN0ZWRgIG9uIHRoZW0uIE5vdGUgdGhhdCB3ZSBvbmx5IHJlbW92ZSBjaGlsZHJlblxuICogZnJvbSBgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuYCBmb3IgdGhlIHRvcC1sZXZlbCB2YWx1ZXMgYmVpbmcgZGlzY29ubmVjdGVkXG4gKiBvbiBhIGNsZWFyOyBkb2luZyB0aGlzIGJvb2trZWVwaW5nIGxvd2VyIGluIHRoZSB0cmVlIGlzIHdhc3RlZnVsIHNpbmNlIGl0J3NcbiAqIGFsbCBiZWluZyB0aHJvd24gYXdheS5cbiAqXG4gKiBFeGFtcGxlIDM6IElmIHRoZSBMaXRFbGVtZW50IGNvbnRhaW5pbmcgdGhlIGVudGlyZSB0cmVlIGFib3ZlIGJlY29tZXNcbiAqIGRpc2Nvbm5lY3RlZCwgaXQgd2lsbCBydW4gYGNoaWxkUGFydC5zZXRDb25uZWN0ZWQoKWAgKHdoaWNoIGNhbGxzXG4gKiBgY2hpbGRQYXJ0Ll8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKClgIGlmIGl0IGV4aXN0cyk7IGluIHRoaXMgY2FzZSwgd2VcbiAqIHJlY3Vyc2l2ZWx5IHJ1biBgc2V0Q29ubmVjdGVkKClgIG92ZXIgdGhlIGVudGlyZSB0cmVlLCB3aXRob3V0IHJlbW92aW5nIGFueVxuICogY2hpbGRyZW4gZnJvbSBgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuYCwgc2luY2UgdGhpcyB0cmVlIGlzIHJlcXVpcmVkIHRvXG4gKiByZS1jb25uZWN0IHRoZSB0cmVlLCB3aGljaCBkb2VzIHRoZSBzYW1lIG9wZXJhdGlvbiwgc2ltcGx5IHBhc3NpbmdcbiAqIGBpc0Nvbm5lY3RkOiB0cnVlYCBkb3duIHRoZSB0cmVlLCBzaWduYWxpbmcgd2hpY2ggY2FsbGJhY2sgdG8gcnVuLlxuICovXG5pbXBvcnQgeyBub0NoYW5nZSwgfSBmcm9tICcuL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGlzU2luZ2xlRXhwcmVzc2lvbiB9IGZyb20gJy4vZGlyZWN0aXZlLWhlbHBlcnMuanMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBQYXJ0VHlwZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbi8qKlxuICogUmVjdXJzaXZlbHkgd2Fsa3MgZG93biB0aGUgdHJlZSBvZiBQYXJ0cy9UZW1wbGF0ZUluc3RhbmNlcy9EaXJlY3RpdmVzIHRvIHNldFxuICogdGhlIGNvbm5lY3RlZCBzdGF0ZSBvZiBkaXJlY3RpdmVzIGFuZCBydW4gYGRpc2Nvbm5lY3RlZGAvIGByZWNvbm5lY3RlZGBcbiAqIGNhbGxiYWNrcy5cbiAqXG4gKiBAcmV0dXJuIFRydWUgaWYgdGhlcmUgd2VyZSBjaGlsZHJlbiB0byBkaXNjb25uZWN0OyBmYWxzZSBvdGhlcndpc2VcbiAqL1xuY29uc3Qgc2V0Q2hpbGRyZW5Db25uZWN0ZWQgPSAocGFyZW50LCBpc0Nvbm5lY3RlZCkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBjaGlsZHJlbikge1xuICAgICAgICAvLyBUaGUgZXhpc3RlbmNlIG9mIGBfJHNldERpcmVjdGl2ZUNvbm5lY3RlZGAgaXMgdXNlZCBhcyBhIFwiYnJhbmRcIiB0b1xuICAgICAgICAvLyBkaXNhbWJpZ3VhdGUgQXN5bmNEaXJlY3RpdmVzIGZyb20gb3RoZXIgRGlzY29ubmVjdGFibGVDaGlsZHJlblxuICAgICAgICAvLyAoYXMgb3Bwb3NlZCB0byB1c2luZyBhbiBpbnN0YW5jZW9mIGNoZWNrIHRvIGtub3cgd2hlbiB0byBjYWxsIGl0KTsgdGhlXG4gICAgICAgIC8vIHJlZHVuZGFuY3kgb2YgXCJEaXJlY3RpdmVcIiBpbiB0aGUgQVBJIG5hbWUgaXMgdG8gYXZvaWQgY29uZmxpY3Rpbmcgd2l0aFxuICAgICAgICAvLyBgXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWRgLCB3aGljaCBleGlzdHMgYENoaWxkUGFydHNgIHdoaWNoIGFyZSBhbHNvIGluXG4gICAgICAgIC8vIHRoaXMgbGlzdFxuICAgICAgICAvLyBEaXNjb25uZWN0IERpcmVjdGl2ZSAoYW5kIGFueSBuZXN0ZWQgZGlyZWN0aXZlcyBjb250YWluZWQgd2l0aGluKVxuICAgICAgICAoX2IgPSAoX2EgPSBvYmopLl8kc2V0RGlyZWN0aXZlQ29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgaXNDb25uZWN0ZWQsIGZhbHNlKTtcbiAgICAgICAgLy8gRGlzY29ubmVjdCBQYXJ0L1RlbXBsYXRlSW5zdGFuY2VcbiAgICAgICAgc2V0Q2hpbGRyZW5Db25uZWN0ZWQob2JqLCBpc0Nvbm5lY3RlZCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbi8qKlxuICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY2hpbGQgZnJvbSBpdHMgcGFyZW50IGxpc3Qgb2YgZGlzY29ubmVjdGFibGUgY2hpbGRyZW4sIGFuZFxuICogaWYgdGhlIHBhcmVudCBsaXN0IGJlY29tZXMgZW1wdHkgYXMgYSByZXN1bHQsIHJlbW92ZXMgdGhlIHBhcmVudCBmcm9tIGl0c1xuICogcGFyZW50LCBhbmQgc28gZm9ydGggdXAgdGhlIHRyZWUgd2hlbiB0aGF0IGNhdXNlcyBzdWJzZXF1ZW50IHBhcmVudCBsaXN0cyB0b1xuICogYmVjb21lIGVtcHR5LlxuICovXG5jb25zdCByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQgPSAob2JqKSA9PiB7XG4gICAgbGV0IHBhcmVudCwgY2hpbGRyZW47XG4gICAgZG8ge1xuICAgICAgICBpZiAoKHBhcmVudCA9IG9iai5fJHBhcmVudCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSBwYXJlbnQuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuLmRlbGV0ZShvYmopO1xuICAgICAgICBvYmogPSBwYXJlbnQ7XG4gICAgfSB3aGlsZSAoKGNoaWxkcmVuID09PSBudWxsIHx8IGNoaWxkcmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZHJlbi5zaXplKSA9PT0gMCk7XG59O1xuY29uc3QgYWRkRGlzY29ubmVjdGFibGVUb1BhcmVudCA9IChvYmopID0+IHtcbiAgICAvLyBDbGltYiB0aGUgcGFyZW50IHRyZWUsIGNyZWF0aW5nIGEgc3BhcnNlIHRyZWUgb2YgY2hpbGRyZW4gbmVlZGluZ1xuICAgIC8vIGRpc2Nvbm5lY3Rpb25cbiAgICBmb3IgKGxldCBwYXJlbnQ7IChwYXJlbnQgPSBvYmouXyRwYXJlbnQpOyBvYmogPSBwYXJlbnQpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcGFyZW50Ll8kZGlzY29ubmV0YWJsZUNoaWxkcmVuO1xuICAgICAgICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50Ll8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gY2hpbGRyZW4gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4uaGFzKG9iaikpIHtcbiAgICAgICAgICAgIC8vIE9uY2Ugd2UndmUgcmVhY2hlZCBhIHBhcmVudCB0aGF0IGFscmVhZHkgY29udGFpbnMgdGhpcyBjaGlsZCwgd2VcbiAgICAgICAgICAgIC8vIGNhbiBzaG9ydC1jaXJjdWl0XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbi5hZGQob2JqKTtcbiAgICAgICAgaW5zdGFsbERpc2Nvbm5lY3RBUEkocGFyZW50KTtcbiAgICB9XG59O1xuLyoqXG4gKiBDaGFuZ2VzIHRoZSBwYXJlbnQgcmVmZXJlbmNlIG9mIHRoZSBDaGlsZFBhcnQsIGFuZCB1cGRhdGVzIHRoZSBzcGFyc2UgdHJlZSBvZlxuICogRGlzY29ubmVjdGFibGUgY2hpbGRyZW4gYWNjb3JkaW5nbHkuXG4gKlxuICogTm90ZSwgdGhpcyBtZXRob2Qgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0IGluc3RhbmNlcyBhbmQgY2FsbGVkIGZyb21cbiAqIHRoZSBjb3JlIGNvZGUgd2hlbiBwYXJ0cyBhcmUgbW92ZWQgYmV0d2VlbiBkaWZmZXJlbnQgcGFyZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVwYXJlbnREaXNjb25uZWN0YWJsZXMobmV3UGFyZW50KSB7XG4gICAgaWYgKHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQodGhpcyk7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgICAgIGFkZERpc2Nvbm5lY3RhYmxlVG9QYXJlbnQodGhpcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gbmV3UGFyZW50O1xuICAgIH1cbn1cbi8qKlxuICogU2V0cyB0aGUgY29ubmVjdGVkIHN0YXRlIG9uIGFueSBkaXJlY3RpdmVzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGNvbW1pdHRlZFxuICogdmFsdWUgb2YgdGhpcyBwYXJ0IChpLmUuIHdpdGhpbiBhIFRlbXBsYXRlSW5zdGFuY2Ugb3IgaXRlcmFibGUgb2ZcbiAqIENoaWxkUGFydHMpIGFuZCBydW5zIHRoZWlyIGBkaXNjb25uZWN0ZWRgL2ByZWNvbm5lY3RlZGBzLCBhcyB3ZWxsIGFzIHdpdGhpblxuICogYW55IGRpcmVjdGl2ZXMgc3RvcmVkIG9uIHRoZSBDaGlsZFBhcnQgKHdoZW4gYHZhbHVlT25seWAgaXMgZmFsc2UpLlxuICpcbiAqIGBpc0NsZWFyaW5nVmFsdWVgIHNob3VsZCBiZSBwYXNzZWQgYXMgYHRydWVgIG9uIGEgdG9wLWxldmVsIHBhcnQgdGhhdCBpc1xuICogY2xlYXJpbmcgaXRzZWxmLCBhbmQgbm90IGFzIGEgcmVzdWx0IG9mIHJlY3Vyc2l2ZWx5IGRpc2Nvbm5lY3RpbmcgZGlyZWN0aXZlc1xuICogYXMgcGFydCBvZiBhIGBjbGVhcmAgb3BlcmF0aW9uIGhpZ2hlciB1cCB0aGUgdHJlZS4gVGhpcyBib3RoIGVuc3VyZXMgdGhhdCBhbnlcbiAqIGRpcmVjdGl2ZSBvbiB0aGlzIENoaWxkUGFydCB0aGF0IHByb2R1Y2VkIGEgdmFsdWUgdGhhdCBjYXVzZWQgdGhlIGNsZWFyXG4gKiBvcGVyYXRpb24gaXMgbm90IGRpc2Nvbm5lY3RlZCwgYW5kIGFsc28gc2VydmVzIGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXG4gKiB0byBhdm9pZCBuZWVkbGVzcyBib29ra2VlcGluZyB3aGVuIGEgc3VidHJlZSBpcyBnb2luZyBhd2F5OyB3aGVuIGNsZWFyaW5nIGFcbiAqIHN1YnRyZWUsIG9ubHkgdGhlIHRvcC1tb3N0IHBhcnQgbmVlZCB0byByZW1vdmUgaXRzZWxmIGZyb20gdGhlIHBhcmVudC5cbiAqXG4gKiBgZnJvbVBhcnRJbmRleGAgaXMgcGFzc2VkIG9ubHkgaW4gdGhlIGNhc2Ugb2YgYSBwYXJ0aWFsIGBfY2xlYXJgIHJ1bm5pbmcgYXMgYVxuICogcmVzdWx0IG9mIHRydW5jYXRpbmcgYW4gaXRlcmFibGUuXG4gKlxuICogTm90ZSwgdGhpcyBtZXRob2Qgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0IGluc3RhbmNlcyBhbmQgY2FsbGVkIGZyb20gdGhlXG4gKiBjb3JlIGNvZGUgd2hlbiBwYXJ0cyBhcmUgY2xlYXJlZCBvciB0aGUgY29ubmVjdGlvbiBzdGF0ZSBpcyBjaGFuZ2VkIGJ5IHRoZVxuICogdXNlci5cbiAqL1xuZnVuY3Rpb24gc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKGlzQ29ubmVjdGVkLCBpc0NsZWFyaW5nVmFsdWUgPSBmYWxzZSwgZnJvbVBhcnRJbmRleCA9IDApIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4uc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0NsZWFyaW5nVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBJdGVyYWJsZSBjYXNlOiBBbnkgQ2hpbGRQYXJ0cyBjcmVhdGVkIGJ5IHRoZSBpdGVyYWJsZSBzaG91bGQgYmVcbiAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3RlZCBhbmQgcmVtb3ZlZCBmcm9tIHRoaXMgQ2hpbGRQYXJ0J3MgZGlzY29ubmVjdGFibGVcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIChzdGFydGluZyBhdCBgZnJvbVBhcnRJbmRleGAgaW4gdGhlIGNhc2Ugb2YgdHJ1bmNhdGlvbilcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmcm9tUGFydEluZGV4OyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZXRDaGlsZHJlbkNvbm5lY3RlZCh2YWx1ZVtpXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJlbW92ZURpc2Nvbm5lY3RhYmxlRnJvbVBhcmVudCh2YWx1ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVGVtcGxhdGVJbnN0YW5jZSBjYXNlOiBJZiB0aGUgdmFsdWUgaGFzIGRpc2Nvbm5lY3RhYmxlIGNoaWxkcmVuICh3aWxsXG4gICAgICAgICAgICAvLyBvbmx5IGJlIGluIHRoZSBjYXNlIHRoYXQgaXQgaXMgYSBUZW1wbGF0ZUluc3RhbmNlKSwgd2UgZGlzY29ubmVjdCBpdFxuICAgICAgICAgICAgLy8gYW5kIHJlbW92ZSBpdCBmcm9tIHRoaXMgQ2hpbGRQYXJ0J3MgZGlzY29ubmVjdGFibGUgY2hpbGRyZW5cbiAgICAgICAgICAgIHNldENoaWxkcmVuQ29ubmVjdGVkKHZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICByZW1vdmVEaXNjb25uZWN0YWJsZUZyb21QYXJlbnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRDaGlsZHJlbkNvbm5lY3RlZCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgfVxufVxuLyoqXG4gKiBQYXRjaGVzIGRpc2Nvbm5lY3Rpb24gQVBJIG9udG8gQ2hpbGRQYXJ0cy5cbiAqL1xuY29uc3QgaW5zdGFsbERpc2Nvbm5lY3RBUEkgPSAob2JqKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgX2MsIF9kO1xuICAgIGlmIChvYmoudHlwZSA9PSBQYXJ0VHlwZS5DSElMRCkge1xuICAgICAgICAoX2EgPSAoX2MgPSBvYmopLl8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2MuXyRzZXRDaGlsZFBhcnRDb25uZWN0ZWQgPSBzZXRDaGlsZFBhcnRDb25uZWN0ZWQpO1xuICAgICAgICAoX2IgPSAoX2QgPSBvYmopLl8kcmVwYXJlbnREaXNjb25uZWN0YWJsZXMpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChfZC5fJHJlcGFyZW50RGlzY29ubmVjdGFibGVzID0gcmVwYXJlbnREaXNjb25uZWN0YWJsZXMpO1xuICAgIH1cbn07XG4vKipcbiAqIEFuIGFic3RyYWN0IGBEaXJlY3RpdmVgIGJhc2UgY2xhc3Mgd2hvc2UgYGRpc2Nvbm5lY3RlZGAgbWV0aG9kIHdpbGwgYmVcbiAqIGNhbGxlZCB3aGVuIHRoZSBwYXJ0IGNvbnRhaW5pbmcgdGhlIGRpcmVjdGl2ZSBpcyBjbGVhcmVkIGFzIGEgcmVzdWx0IG9mXG4gKiByZS1yZW5kZXJpbmcsIG9yIHdoZW4gdGhlIHVzZXIgY2FsbHMgYHBhcnQuc2V0RGlyZWN0aXZlQ29ubmVjdGlvbihmYWxzZSlgIG9uXG4gKiBhIHBhcnQgdGhhdCB3YXMgcHJldmlvdXNseSByZW5kZXJlZCBjb250YWluaW5nIHRoZSBkaXJlY3RpdmUuXG4gKlxuICogSWYgYHBhcnQuc2V0RGlyZWN0aXZlQ29ubmVjdGlvbih0cnVlKWAgaXMgc3Vic2VxdWVudGx5IGNhbGxlZCBvbiBhXG4gKiBjb250YWluaW5nIHBhcnQsIHRoZSBkaXJlY3RpdmUncyBgcmVjb25uZWN0ZWRgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBwcmlvclxuICogdG8gaXRzIG5leHQgYHVwZGF0ZWAvYHJlbmRlcmAgY2FsbGJhY2tzLiBXaGVuIGltcGxlbWVudGluZyBgZGlzY29ubmVjdGVkYCxcbiAqIGByZWNvbm5lY3RlZGAgc2hvdWxkIGFsc28gYmUgaW1wbGVtZW50ZWQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHJlY29ubmVjdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzeW5jRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAvLyBAaW50ZXJuYWxcbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5ldGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgcGFydCB3aXRoIGludGVybmFsIGZpZWxkc1xuICAgICAqIEBwYXJhbSBwYXJ0XG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVJbmRleFxuICAgICAqL1xuICAgIF8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgICAgIHN1cGVyLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgYWRkRGlzY29ubmVjdGFibGVUb1BhcmVudCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGZyb20gdGhlIGNvcmUgY29kZSB3aGVuIGEgZGlyZWN0aXZlIGlzIGdvaW5nIGF3YXkgZnJvbSBhIHBhcnQgKGluXG4gICAgICogd2hpY2ggY2FzZSBgc2hvdWxkUmVtb3ZlRnJvbVBhcmVudGAgc2hvdWxkIGJlIHRydWUpLCBhbmQgZnJvbSB0aGVcbiAgICAgKiBgc2V0Q2hpbGRyZW5Db25uZWN0ZWRgIGhlbHBlciBmdW5jdGlvbiB3aGVuIHJlY3Vyc2l2ZWx5IGNoYW5naW5nIHRoZVxuICAgICAqIGNvbm5lY3Rpb24gc3RhdGUgb2YgYSB0cmVlIChpbiB3aGljaCBjYXNlIGBzaG91bGRSZW1vdmVGcm9tUGFyZW50YCBzaG91bGRcbiAgICAgKiBiZSBmYWxzZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWRcbiAgICAgKiBAcGFyYW0gaXNDbGVhcmluZ0RpcmVjdGl2ZSAtIFRydWUgd2hlbiB0aGUgZGlyZWN0aXZlIGl0c2VsZiBpcyBiZWluZ1xuICAgICAqICAgICByZW1vdmVkOyBmYWxzZSB3aGVuIHRoZSB0cmVlIGlzIGJlaW5nIGRpc2Nvbm5lY3RlZFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kc2V0RGlyZWN0aXZlQ29ubmVjdGVkKGlzQ29ubmVjdGVkLCBpc0NsZWFyaW5nRGlyZWN0aXZlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zZXRDb25uZWN0ZWQoaXNDb25uZWN0ZWQpO1xuICAgICAgICBpZiAoaXNDbGVhcmluZ0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgc2V0Q2hpbGRyZW5Db25uZWN0ZWQodGhpcywgaXNDb25uZWN0ZWQpO1xuICAgICAgICAgICAgcmVtb3ZlRGlzY29ubmVjdGFibGVGcm9tUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByaXZhdGUgbWV0aG9kIHVzZWQgdG8gc2V0IHRoZSBjb25uZWN0aW9uIHN0YXRlIG9mIHRoZSBkaXJlY3RpdmUgYW5kIGNhbGxcbiAgICAgKiB0aGUgcmVzcGVjdGl2ZSBgZGlzY29ubmVjdGVkYCBvciBgcmVjb25uZWN0ZWRgIGNhbGxiYWNrLiBOb3RlIHRoYXRzaW5jZVxuICAgICAqIGBpc0Nvbm5lY3RlZGAgZGVmYXVsdHMgdG8gdHJ1ZSwgd2UgZG8gbm90IHJ1biBgcmVjb25uZWN0ZWRgIG9uIGZpcnN0XG4gICAgICogcmVuZGVyLlxuICAgICAqXG4gICAgICogSWYgYSBjYWxsIHRvIGBzZXRWYWx1ZWAgd2FzIG1hZGUgd2hpbGUgZGlzY29ubmVjdGVkLCBmbHVzaCBpdCB0byB0aGUgcGFydFxuICAgICAqIGJlZm9yZSByZWNvbm5lY3RpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaXNDb25uZWN0ZWRcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCAhPT0gdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl9wZW5kaW5nVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5yZWNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5kaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIG9mIHRoZSBiYXNlIGBfcmVzb2x2ZWAgbWV0aG9kIHRvIGVuc3VyZSBgcmVjb25uZWN0ZWRgIGlzIHJ1blxuICAgICAqIHByaW9yIHRvIHRoZSBuZXh0IHJlbmRlci5cbiAgICAgKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kcmVzb2x2ZShwYXJ0LCBwcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXN5bmNEaXJlY3RpdmUgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHdhcyBgICtcbiAgICAgICAgICAgICAgICBgcmVuZGVyZWQgd2hpbGUgaXRzIHRyZWUgd2FzIGRpc2Nvbm5lY3RlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuXyRyZXNvbHZlKHBhcnQsIHByb3BzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGRpcmVjdGl2ZSdzIFBhcnQgb3V0c2lkZSB0aGUgbm9ybWFsIGB1cGRhdGVgL2ByZW5kZXJgXG4gICAgICogbGlmZWN5Y2xlIG9mIGEgZGlyZWN0aXZlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG5vdCBiZSBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIGEgZGlyZWN0aXZlJ3MgYHVwZGF0ZWBcbiAgICAgKiBvciBgcmVuZGVyYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBtZXRob2QgaXMgY2FsbGVkIHdoaWxlIHRoZSBwYXJ0IGlzIGRpc2Nvbm5lY3RlZCwgdGhlIHZhbHVlIHdpbGwgYmVcbiAgICAgKiBxdWV1ZWQgdW50aWwgZGlyZWN0aXZlIGlzIHJlY29ubmVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRpcmVjdGl2ZSBUaGUgZGlyZWN0aXZlIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0XG4gICAgICovXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChpc1NpbmdsZUV4cHJlc3Npb24odGhpcy5fX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnQuXyRzZXRWYWx1ZSh2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9fYXR0cmlidXRlSW5kZXggd2lsbCBiZSBkZWZpbmVkIGluIHRoaXMgY2FzZSwgYnV0XG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0IGl0IGluIGRldiBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMuX19hdHRyaWJ1dGVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGhpcy5fX2F0dHJpYnV0ZUluZGV4IHRvIGJlIGEgbnVtYmVyYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IFsuLi50aGlzLl9fcGFydC5fJGNvbW1pdHRlZFZhbHVlXTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbdGhpcy5fX2F0dHJpYnV0ZUluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0Ll8kc2V0VmFsdWUobmV3VmFsdWVzLCB0aGlzLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZXIgY2FsbGJhY2tzIGZvciBpbXBsZW1lbnRpbmcgbG9naWMgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzL3N1YnNjcmlwdGlvbnNcbiAgICAgKiB0aGF0IG1heSBoYXZlIGJlZW4gcmV0YWluZWQgYnkgdGhpcyBkaXJlY3RpdmUuIFNpbmNlIGRpcmVjdGl2ZXMgbWF5IGFsc28gYmVcbiAgICAgKiByZS1jb25uZWN0ZWQsIGByZWNvbm5lY3RlZGAgc2hvdWxkIGFsc28gYmUgaW1wbGVtZW50ZWQgdG8gcmVzdG9yZSB0aGVcbiAgICAgKiB3b3JraW5nIHN0YXRlIG9mIHRoZSBkaXJlY3RpdmUgcHJpb3IgdG8gdGhlIG5leHQgcmVuZGVyLlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZCgpIHsgfVxuICAgIHJlY29ubmVjdGVkKCkgeyB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy1kaXJlY3RpdmUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iO1xuaW1wb3J0IHsgX86jIH0gZnJvbSAnLi9saXQtaHRtbC5qcyc7XG5jb25zdCB7IF9DaGlsZFBhcnQ6IENoaWxkUGFydCB9ID0gX86jO1xuY29uc3QgRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggPSB0cnVlO1xuY29uc3Qgd3JhcCA9IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIICYmICgoX2EgPSB3aW5kb3cuU2hhZHlET00pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pblVzZSkgJiZcbiAgICAoKF9iID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IHdpbmRvdy5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbi8qKlxuICogVGVzdHMgaWYgYSB2YWx1ZSBpcyBhIHByaW1pdGl2ZSB2YWx1ZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZW9mLW9wZXJhdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgVGVtcGxhdGVSZXN1bHRUeXBlID0ge1xuICAgIEhUTUw6IDEsXG4gICAgU1ZHOiAyLFxufTtcbi8qKlxuICogVGVzdHMgaWYgYSB2YWx1ZSBpcyBhIFRlbXBsYXRlUmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVJlc3VsdCA9ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIHR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICgoX2EgPSB2YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kbGl0VHlwZSQpICE9PSB1bmRlZmluZWRcbiAgICAgICAgOiAoKF9iID0gdmFsdWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5fJGxpdFR5cGUkKSA9PT0gdHlwZTtcbn07XG4vKipcbiAqIFRlc3RzIGlmIGEgdmFsdWUgaXMgYSBEaXJlY3RpdmVSZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZVJlc3VsdCA9ICh2YWx1ZSkgPT4geyB2YXIgX2E7IHJldHVybiAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGxpdERpcmVjdGl2ZSQpICE9PSB1bmRlZmluZWQ7IH07XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgRGlyZWN0aXZlIGNsYXNzIGZvciBhIERpcmVjdGl2ZVJlc3VsdFxuICovXG5leHBvcnQgY29uc3QgZ2V0RGlyZWN0aXZlQ2xhc3MgPSAodmFsdWUpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGxpdERpcmVjdGl2ZSQ7IH07XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYSBwYXJ0IGhhcyBvbmx5IGEgc2luZ2xlLWV4cHJlc3Npb24gd2l0aCBubyBzdHJpbmdzIHRvXG4gKiBpbnRlcnBvbGF0ZSBiZXR3ZWVuLlxuICpcbiAqIE9ubHkgQXR0cmlidXRlUGFydCBhbmQgUHJvcGVydHlQYXJ0IGNhbiBoYXZlIG11bHRpcGxlIGV4cHJlc3Npb25zLlxuICogTXVsdGktZXhwcmVzc2lvbiBwYXJ0cyBoYXZlIGEgYHN0cmluZ3NgIHByb3BlcnR5IGFuZCBzaW5nbGUtZXhwcmVzc2lvblxuICogcGFydHMgZG8gbm90LlxuICovXG5leHBvcnQgY29uc3QgaXNTaW5nbGVFeHByZXNzaW9uID0gKHBhcnQpID0+IHBhcnQuc3RyaW5ncyA9PT0gdW5kZWZpbmVkO1xuY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4vKipcbiAqIEluc2VydHMgYSBDaGlsZFBhcnQgaW50byB0aGUgZ2l2ZW4gY29udGFpbmVyIENoaWxkUGFydCdzIERPTSwgZWl0aGVyIGF0IHRoZVxuICogZW5kIG9mIHRoZSBjb250YWluZXIgQ2hpbGRQYXJ0LCBvciBiZWZvcmUgdGhlIG9wdGlvbmFsIGByZWZQYXJ0YC5cbiAqXG4gKiBUaGlzIGRvZXMgbm90IGFkZCB0aGUgcGFydCB0byB0aGUgY29udGFpbmVyUGFydCdzIGNvbW1pdHRlZCB2YWx1ZS4gVGhhdCBtdXN0XG4gKiBiZSBkb25lIGJ5IGNhbGxlcnMuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lclBhcnQgUGFydCB3aXRoaW4gd2hpY2ggdG8gYWRkIHRoZSBuZXcgQ2hpbGRQYXJ0XG4gKiBAcGFyYW0gcmVmUGFydCBQYXJ0IGJlZm9yZSB3aGljaCB0byBhZGQgdGhlIG5ldyBDaGlsZFBhcnQ7IHdoZW4gb21pdHRlZCB0aGVcbiAqICAgICBwYXJ0IGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGBjb250YWluZXJQYXJ0YFxuICogQHBhcmFtIHBhcnQgUGFydCB0byBpbnNlcnQsIG9yIHVuZGVmaW5lZCB0byBjcmVhdGUgYSBuZXcgcGFydFxuICovXG5leHBvcnQgY29uc3QgaW5zZXJ0UGFydCA9IChjb250YWluZXJQYXJ0LCByZWZQYXJ0LCBwYXJ0KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHdyYXAoY29udGFpbmVyUGFydC5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICBjb25zdCByZWZOb2RlID0gcmVmUGFydCA9PT0gdW5kZWZpbmVkID8gY29udGFpbmVyUGFydC5fJGVuZE5vZGUgOiByZWZQYXJ0Ll8kc3RhcnROb2RlO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnROb2RlID0gd3JhcChjb250YWluZXIpLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgcmVmTm9kZSk7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSB3cmFwKGNvbnRhaW5lcikuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCByZWZOb2RlKTtcbiAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQoc3RhcnROb2RlLCBlbmROb2RlLCBjb250YWluZXJQYXJ0LCBjb250YWluZXJQYXJ0Lm9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IHdyYXAocGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICBjb25zdCBwYXJlbnRDaGFuZ2VkID0gcGFydC5fJHBhcmVudCAhPT0gY29udGFpbmVyUGFydDtcbiAgICAgICAgaWYgKHBhcmVudENoYW5nZWQpIHtcbiAgICAgICAgICAgIChfYSA9IHBhcnQuXyRyZXBhcmVudERpc2Nvbm5lY3RhYmxlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwocGFydCwgY29udGFpbmVyUGFydCk7XG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgYWx0aG91Z2ggYF8kcmVwYXJlbnREaXNjb25uZWN0YWJsZXNgIHVwZGF0ZXMgdGhlIHBhcnQnc1xuICAgICAgICAgICAgLy8gYF8kcGFyZW50YCByZWZlcmVuY2UgYWZ0ZXIgdW5saW5raW5nIGZyb20gaXRzIGN1cnJlbnQgcGFyZW50LCB0aGF0XG4gICAgICAgICAgICAvLyBtZXRob2Qgb25seSBleGlzdHMgaWYgRGlzY29ubmVjdGFibGVzIGFyZSBwcmVzZW50LCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgICAgICAvLyB1bmNvbmRpdGlvbmFsbHkgc2V0IGl0IGhlcmVcbiAgICAgICAgICAgIHBhcnQuXyRwYXJlbnQgPSBjb250YWluZXJQYXJ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmROb2RlICE9PSByZWZOb2RlIHx8IHBhcmVudENoYW5nZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnQuXyRzdGFydE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgd3JhcChjb250YWluZXIpLmluc2VydEJlZm9yZShzdGFydCwgcmVmTm9kZSk7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0O1xufTtcbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgb2YgYSBQYXJ0LlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gc2V0L3VwZGF0ZSB0aGUgdmFsdWUgb2YgdXNlci1jcmVhdGVkXG4gKiBwYXJ0cyAoaS5lLiB0aG9zZSBjcmVhdGVkIHVzaW5nIGBpbnNlcnRQYXJ0YCk7IGl0IHNob3VsZCBub3QgYmUgdXNlZFxuICogYnkgZGlyZWN0aXZlcyB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSBkaXJlY3RpdmUncyBjb250YWluZXIgcGFydC4gRGlyZWN0aXZlc1xuICogc2hvdWxkIHJldHVybiBhIHZhbHVlIGZyb20gYHVwZGF0ZWAvYHJlbmRlcmAgdG8gdXBkYXRlIHRoZWlyIHBhcnQgc3RhdGUuXG4gKlxuICogRm9yIGRpcmVjdGl2ZXMgdGhhdCByZXF1aXJlIHNldHRpbmcgdGhlaXIgcGFydCB2YWx1ZSBhc3luY2hyb25vdXNseSwgdGhleVxuICogc2hvdWxkIGV4dGVuZCBgQXN5bmNEaXJlY3RpdmVgIGFuZCBjYWxsIGB0aGlzLnNldFZhbHVlKClgLlxuICpcbiAqIEBwYXJhbSBwYXJ0IFBhcnQgdG8gc2V0XG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gc2V0XG4gKiBAcGFyYW0gaW5kZXggRm9yIGBBdHRyaWJ1dGVQYXJ0YHMsIHRoZSBpbmRleCB0byBzZXRcbiAqIEBwYXJhbSBkaXJlY3RpdmVQYXJlbnQgVXNlZCBpbnRlcm5hbGx5OyBzaG91bGQgbm90IGJlIHNldCBieSB1c2VyXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRDaGlsZFBhcnRWYWx1ZSA9IChwYXJ0LCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gcGFydCkgPT4ge1xuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICByZXR1cm4gcGFydDtcbn07XG4vLyBBIHNlbnRpbmFsIHZhbHVlIHRoYXQgY2FuIG5ldmVyIGFwcGVhciBhcyBhIHBhcnQgdmFsdWUgZXhjZXB0IHdoZW4gc2V0IGJ5XG4vLyBsaXZlKCkuIFVzZWQgdG8gZm9yY2UgYSBkaXJ0eS1jaGVjayB0byBmYWlsIGFuZCBjYXVzZSBhIHJlLXJlbmRlci5cbmNvbnN0IFJFU0VUX1ZBTFVFID0ge307XG4vKipcbiAqIFNldHMgdGhlIGNvbW1pdHRlZCB2YWx1ZSBvZiBhIENoaWxkUGFydCBkaXJlY3RseSB3aXRob3V0IHRyaWdnZXJpbmcgdGhlXG4gKiBjb21taXQgc3RhZ2Ugb2YgdGhlIHBhcnQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgaW4gY2FzZXMgd2hlcmUgYSBkaXJlY3RpdmUgbmVlZHMgdG8gdXBkYXRlIHRoZSBwYXJ0IHN1Y2hcbiAqIHRoYXQgdGhlIG5leHQgdXBkYXRlIGRldGVjdHMgYSB2YWx1ZSBjaGFuZ2Ugb3Igbm90LiBXaGVuIHZhbHVlIGlzIG9taXR0ZWQsXG4gKiB0aGUgbmV4dCB1cGRhdGUgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGJlIGRldGVjdGVkIGFzIGEgY2hhbmdlLlxuICpcbiAqIEBwYXJhbSBwYXJ0XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldENvbW1pdHRlZFZhbHVlID0gKHBhcnQsIHZhbHVlID0gUkVTRVRfVkFMVUUpID0+IChwYXJ0Ll8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZSk7XG4vKipcbiAqIFJldHVybnMgdGhlIGNvbW1pdHRlZCB2YWx1ZSBvZiBhIENoaWxkUGFydC5cbiAqXG4gKiBUaGUgY29tbWl0dGVkIHZhbHVlIGlzIHVzZWQgZm9yIGNoYW5nZSBkZXRlY3Rpb24gYW5kIGVmZmljaWVudCB1cGRhdGVzIG9mXG4gKiB0aGUgcGFydC4gSXQgY2FuIGRpZmZlciBmcm9tIHRoZSB2YWx1ZSBzZXQgYnkgdGhlIHRlbXBsYXRlIG9yIGRpcmVjdGl2ZSBpblxuICogY2FzZXMgd2hlcmUgdGhlIHRlbXBsYXRlIHZhbHVlIGlzIHRyYW5zZm9ybWVkIGJlZm9yZSBiZWluZyBjb21taXRlZC5cbiAqXG4gKiAtIGBUZW1wbGF0ZVJlc3VsdGBzIGFyZSBjb21taXR0ZWQgYXMgYSBgVGVtcGxhdGVJbnN0YW5jZWBcbiAqIC0gSXRlcmFibGVzIGFyZSBjb21taXR0ZWQgYXMgYEFycmF5PENoaWxkUGFydD5gXG4gKiAtIEFsbCBvdGhlciB0eXBlcyBhcmUgY29tbWl0dGVkIGFzIHRoZSB0ZW1wbGF0ZSB2YWx1ZSBvciB2YWx1ZSByZXR1cm5lZCBvclxuICogICBzZXQgYnkgYSBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHBhcnRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbW1pdHRlZFZhbHVlID0gKHBhcnQpID0+IHBhcnQuXyRjb21taXR0ZWRWYWx1ZTtcbi8qKlxuICogUmVtb3ZlcyBhIENoaWxkUGFydCBmcm9tIHRoZSBET00sIGluY2x1ZGluZyBhbnkgb2YgaXRzIGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHBhcnQgVGhlIFBhcnQgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVQYXJ0ID0gKHBhcnQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gcGFydC5fJHNldENoaWxkUGFydENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwocGFydCwgZmFsc2UsIHRydWUpO1xuICAgIGxldCBzdGFydCA9IHBhcnQuXyRzdGFydE5vZGU7XG4gICAgY29uc3QgZW5kID0gd3JhcChwYXJ0Ll8kZW5kTm9kZSkubmV4dFNpYmxpbmc7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICB3cmFwKHN0YXJ0KS5yZW1vdmUoKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgY2xlYXJQYXJ0ID0gKHBhcnQpID0+IHtcbiAgICBwYXJ0Ll8kY2xlYXIoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXJlY3RpdmUtaGVscGVycy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydCBjb25zdCBQYXJ0VHlwZSA9IHtcbiAgICBBVFRSSUJVVEU6IDEsXG4gICAgQ0hJTEQ6IDIsXG4gICAgUFJPUEVSVFk6IDMsXG4gICAgQk9PTEVBTl9BVFRSSUJVVEU6IDQsXG4gICAgRVZFTlQ6IDUsXG4gICAgRUxFTUVOVDogNixcbn07XG4vKipcbiAqIENyZWF0ZXMgYSB1c2VyLWZhY2luZyBkaXJlY3RpdmUgZnVuY3Rpb24gZnJvbSBhIERpcmVjdGl2ZSBjbGFzcy4gVGhpc1xuICogZnVuY3Rpb24gaGFzIHRoZSBzYW1lIHBhcmFtZXRlcnMgYXMgdGhlIGRpcmVjdGl2ZSdzIHJlbmRlcigpIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChjKSA9PiAoLi4udmFsdWVzKSA9PiAoe1xuICAgIF8kbGl0RGlyZWN0aXZlJDogYyxcbiAgICB2YWx1ZXMsXG59KTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY3JlYXRpbmcgY3VzdG9tIGRpcmVjdGl2ZXMuIFVzZXJzIHNob3VsZCBleHRlbmQgdGhpcyBjbGFzcyxcbiAqIGltcGxlbWVudCBgcmVuZGVyYCBhbmQvb3IgYHVwZGF0ZWAsIGFuZCB0aGVuIHBhc3MgdGhlaXIgc3ViY2xhc3MgdG9cbiAqIGBkaXJlY3RpdmVgLlxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFydEluZm8pIHsgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgICAgICB0aGlzLl9fcGFydCA9IHBhcnQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVJbmRleCA9IGF0dHJpYnV0ZUluZGV4O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRyZXNvbHZlKHBhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShwYXJ0LCBwcm9wcyk7XG4gICAgfVxuICAgIHVwZGF0ZShfcGFydCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKC4uLnByb3BzKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXJlY3RpdmUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xudmFyIF9mO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmlmIChERVZfTU9ERSkge1xuICAgIGNvbnNvbGUud2FybignbGl0LWh0bWwgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiEnKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJiAoKF9hID0gd2luZG93LlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5Vc2UpICYmXG4gICAgKChfYiA9IHdpbmRvdy5TaGFkeURPTSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyB3aW5kb3cuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxUaGlzLnRydXN0ZWRUeXBlcztcbi8qKlxuICogT3VyIFRydXN0ZWRUeXBlUG9saWN5IGZvciBIVE1MIHdoaWNoIGlzIGRlY2xhcmVkIHVzaW5nIHRoZSBodG1sIHRlbXBsYXRlXG4gKiB0YWcgZnVuY3Rpb24uXG4gKlxuICogVGhhdCBIVE1MIGlzIGEgZGV2ZWxvcGVyLWF1dGhvcmVkIGNvbnN0YW50LCBhbmQgaXMgcGFyc2VkIHdpdGggaW5uZXJIVE1MXG4gKiBiZWZvcmUgYW55IHVudHJ1c3RlZCBleHByZXNzaW9ucyBoYXZlIGJlZW4gbWl4ZWQgaW4uIFRoZXJlZm9yIGl0IGlzXG4gKiBjb25zaWRlcmVkIHNhZmUgYnkgY29uc3RydWN0aW9uLlxuICovXG5jb25zdCBwb2xpY3kgPSB0cnVzdGVkVHlwZXNcbiAgICA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge1xuICAgICAgICBjcmVhdGVIVE1MOiAocykgPT4gcyxcbiAgICB9KVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgaWRlbnRpdHlGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBub29wU2FuaXRpemVyID0gKF9ub2RlLCBfbmFtZSwgX3R5cGUpID0+IGlkZW50aXR5RnVuY3Rpb247XG4vKiogU2V0cyB0aGUgZ2xvYmFsIHNhbml0aXplciBmYWN0b3J5LiAqL1xuY29uc3Qgc2V0U2FuaXRpemVyID0gKG5ld1Nhbml0aXplcikgPT4ge1xuICAgIGlmICghRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBvdmVyd3JpdGUgZXhpc3RpbmcgbGl0LWh0bWwgc2VjdXJpdHkgcG9saWN5LmAgK1xuICAgICAgICAgICAgYCBzZXRTYW5pdGl6ZURPTVZhbHVlRmFjdG9yeSBzaG91bGQgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZS5gKTtcbiAgICB9XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbmV3U2FuaXRpemVyO1xufTtcbi8qKlxuICogT25seSB1c2VkIGluIGludGVybmFsIHRlc3RzLCBub3QgYSBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJLlxuICovXG5jb25zdCBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSAoKSA9PiB7XG4gICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbn07XG5jb25zdCBjcmVhdGVTYW5pdGl6ZXIgPSAobm9kZSwgbmFtZSwgdHlwZSkgPT4ge1xuICAgIHJldHVybiBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwobm9kZSwgbmFtZSwgdHlwZSk7XG59O1xuLy8gQWRkZWQgdG8gYW4gYXR0cmlidXRlIG5hbWUgdG8gbWFyayB0aGUgYXR0cmlidXRlIGFzIGJvdW5kIHNvIHdlIGNhbiBmaW5kXG4vLyBpdCBlYXNpbHkuXG5jb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vLyBUaGlzIG1hcmtlciBpcyB1c2VkIGluIG1hbnkgc3ludGFjdGljIHBvc2l0aW9ucyBpbiBIVE1MLCBzbyBpdCBtdXN0IGJlXG4vLyBhIHZhbGlkIGVsZW1lbnQgbmFtZSBhbmQgYXR0cmlidXRlIG5hbWUuIFdlIGRvbid0IHN1cHBvcnQgZHluYW1pYyBuYW1lcyAoeWV0KVxuLy8gYnV0IHRoaXMgYXQgbGVhc3QgZW5zdXJlcyB0aGF0IHRoZSBwYXJzZSB0cmVlIGlzIGNsb3NlciB0byB0aGUgdGVtcGxhdGVcbi8vIGludGVudGlvbi5cbmNvbnN0IG1hcmtlciA9IGBsaXQkJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoOSl9JGA7XG4vLyBTdHJpbmcgdXNlZCB0byB0ZWxsIGlmIGEgY29tbWVudCBpcyBhIG1hcmtlciBjb21tZW50XG5jb25zdCBtYXJrZXJNYXRjaCA9ICc/JyArIG1hcmtlcjtcbi8vIFRleHQgdXNlZCB0byBpbnNlcnQgYSBjb21tZW50IG1hcmtlciBub2RlLiBXZSB1c2UgcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuLy8gc3ludGF4IGJlY2F1c2UgaXQncyBzbGlnaHRseSBzbWFsbGVyLCBidXQgcGFyc2VzIGFzIGEgY29tbWVudCBub2RlLlxuY29uc3Qgbm9kZU1hcmtlciA9IGA8JHttYXJrZXJNYXRjaH0+YDtcbmNvbnN0IGQgPSBkb2N1bWVudDtcbi8vIENyZWF0ZXMgYSBkeW5hbWljIG1hcmtlci4gV2UgbmV2ZXIgaGF2ZSB0byBzZWFyY2ggZm9yIHRoZXNlIGluIHRoZSBET00uXG5jb25zdCBjcmVhdGVNYXJrZXIgPSAodiA9ICcnKSA9PiBkLmNyZWF0ZUNvbW1lbnQodik7XG5jb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHR5cGVvZiAoKF9hID0gdmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtTeW1ib2wuaXRlcmF0b3JdKSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuLy8gVGhlc2UgcmVnZXhlcyByZXByZXNlbnQgdGhlIGZpdmUgcGFyc2luZyBzdGF0ZXMgdGhhdCB3ZSBjYXJlIGFib3V0IGluIHRoZVxuLy8gVGVtcGxhdGUncyBIVE1MIHNjYW5uZXIuIFRoZXkgbWF0Y2ggdGhlICplbmQqIG9mIHRoZSBzdGF0ZSB0aGV5J3JlIG5hbWVkXG4vLyBhZnRlci5cbi8vIERlcGVuZGluZyBvbiB0aGUgbWF0Y2gsIHdlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUuIElmIHRoZXJlJ3Mgbm8gbWF0Y2gsXG4vLyB3ZSBzdGF5IGluIHRoZSBzYW1lIHN0YXRlLlxuLy8gTm90ZSB0aGF0IHRoZSByZWdleGVzIGFyZSBzdGF0ZWZ1bC4gV2UgdXRpbGl6ZSBsYXN0SW5kZXggYW5kIHN5bmMgaXRcbi8vIGFjcm9zcyB0aGUgbXVsdGlwbGUgcmVnZXhlcyB1c2VkLiBJbiBhZGRpdGlvbiB0byB0aGUgZml2ZSByZWdleGVzIGJlbG93XG4vLyB3ZSBhbHNvIGR5bmFtaWNhbGx5IGNyZWF0ZSBhIHJlZ2V4IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVuZCB0YWdzIGZvciByYXdcbi8vIHRleHQgZWxlbWVudHMuXG4vKipcbiAqIEVuZCBvZiB0ZXh0IGlzOiBgPGAgZm9sbG93ZWQgYnk6XG4gKiAgIChjb21tZW50IHN0YXJ0KSBvciAodGFnKSBvciAoZHluYW1pYyB0YWcgYmluZGluZylcbiAqL1xuY29uc3QgdGV4dEVuZFJlZ2V4ID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nO1xuY29uc3QgQ09NTUVOVF9TVEFSVCA9IDE7XG5jb25zdCBUQUdfTkFNRSA9IDI7XG5jb25zdCBEWU5BTUlDX1RBR19OQU1FID0gMztcbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcbi8qKlxuICogVGhlIHRhZ0VuZCByZWdleCBtYXRjaGVzIHRoZSBlbmQgb2YgdGhlIFwiaW5zaWRlIGFuIG9wZW5pbmdcIiB0YWcgc3ludGF4XG4gKiBwb3NpdGlvbi4gSXQgZWl0aGVyIG1hdGNoZXMgYSBgPmAsIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlLCBvciB0aGUgZW5kXG4gKiBvZiB0aGUgc3RyaW5nIGFmdGVyIGEgc3BhY2UgKGF0dHJpYnV0ZS1uYW1lIHBvc2l0aW9uIGVuZGluZykuXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx0XFxuXFxmXFxyXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIChcIiksICgnKSwgXCI+XCIsXG4gKiAgICBcIj1cIiwgb3IgXCIvXCIuIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEhUTUwgc3BlYyB3aGljaCBhbHNvIGV4Y2x1ZGVzIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IHRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsICdnJyk7XG5jb25zdCBFTlRJUkVfTUFUQ0ggPSAwO1xuY29uc3QgQVRUUklCVVRFX05BTUUgPSAxO1xuY29uc3QgU1BBQ0VTX0FORF9FUVVBTFMgPSAyO1xuY29uc3QgUVVPVEVfQ0hBUiA9IDM7XG5jb25zdCBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCA9IC8nL2c7XG5jb25zdCBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCA9IC9cIi9nO1xuLyoqXG4gKiBNYXRjaGVzIHRoZSByYXcgdGV4dCBlbGVtZW50cy5cbiAqXG4gKiBDb21tZW50cyBhcmUgbm90IHBhcnNlZCB3aXRoaW4gcmF3IHRleHQgZWxlbWVudHMsIHNvIHdlIG5lZWQgdG8gc2VhcmNoIHRoZWlyXG4gKiB0ZXh0IGNvbnRlbnQgZm9yIG1hcmtlciBzdHJpbmdzLlxuICovXG5jb25zdCByYXdUZXh0RWxlbWVudCA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhKSQvaTtcbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG4vLyBUZW1wbGF0ZVBhcnQgdHlwZXNcbi8vIElNUE9SVEFOVDogdGhlc2UgbXVzdCBtYXRjaCB0aGUgdmFsdWVzIGluIFBhcnRUeXBlXG5jb25zdCBBVFRSSUJVVEVfUEFSVCA9IDE7XG5jb25zdCBDSElMRF9QQVJUID0gMjtcbmNvbnN0IFBST1BFUlRZX1BBUlQgPSAzO1xuY29uc3QgQk9PTEVBTl9BVFRSSUJVVEVfUEFSVCA9IDQ7XG5jb25zdCBFVkVOVF9QQVJUID0gNTtcbmNvbnN0IEVMRU1FTlRfUEFSVCA9IDY7XG5jb25zdCBDT01NRU5UX1BBUlQgPSA3O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBUZW1wbGF0ZVJlc3VsdCB3aXRoXG4gKiB0aGUgZ2l2ZW4gcmVzdWx0IHR5cGUuXG4gKi9cbmNvbnN0IHRhZyA9IChfJGxpdFR5cGUkKSA9PiAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiAoe1xuICAgIF8kbGl0VHlwZSQsXG4gICAgc3RyaW5ncyxcbiAgICB2YWx1ZXMsXG59KTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBjb250YWluZXJcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZS5fJGxpdFBhcnQkO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZW5kTm9kZSA9IChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHBhcnRPd25lck5vZGUuXyRsaXRQYXJ0JCA9IHBhcnQgPSBuZXcgQ2hpbGRQYXJ0KGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGVuZE5vZGUpLCBlbmROb2RlLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPSBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGVcbiAqIGBDaGlsZFBhcnRgcyBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZHluYW1pYyB0YWcgbmFtZVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gUmV0dXJuZWQgYXMgYW4gYXJyYXkgZm9yIHRlcnNlbmVzc1xuICAgIHJldHVybiBbXG4gICAgICAgIHBvbGljeSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBvbGljeS5jcmVhdGVIVE1MKGh0bWxSZXN1bHQpXG4gICAgICAgICAgICA6IGh0bWxSZXN1bHQsXG4gICAgICAgIGF0dHJOYW1lcyxcbiAgICBdO1xufTtcbmNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHN0cmluZ3MsIF8kbGl0VHlwZSQ6IHR5cGUgfSwgb3B0aW9ucykge1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgYXR0ck5hbWVJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHBhcnRDb3VudCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xuICAgICAgICAvLyBDcmVhdGUgdGVtcGxhdGUgZWxlbWVudFxuICAgICAgICBjb25zdCBbaHRtbCwgYXR0ck5hbWVzXSA9IGdldFRlbXBsYXRlSHRtbChzdHJpbmdzLCB0eXBlKTtcbiAgICAgICAgdGhpcy5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQoaHRtbCwgb3B0aW9ucyk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgLy8gUmVwYXJlbnQgU1ZHIG5vZGVzIGludG8gdGVtcGxhdGUgcm9vdFxuICAgICAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZWwuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBzdmdFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoLi4uc3ZnRWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXYWxrIHRoZSB0ZW1wbGF0ZSB0byBmaW5kIGJpbmRpbmcgbWFya2VycyBhbmQgY3JlYXRlIFRlbXBsYXRlUGFydHNcbiAgICAgICAgd2hpbGUgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpICE9PSBudWxsICYmIHBhcnRzLmxlbmd0aCA8IHBhcnRDb3VudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgaW4gc29tZSBicm93c2VycyAoVE9ETzogY2hlY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tpXSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgcGFzdCB0aGUgbWFya2VyIG5vZGUgd2UganVzdCBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogKytub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIGJlY2F1c2UgdGhpcyBtYXJrZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIHdhbGtlcidzIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUsIGl0IHdpbGwgYmUgd2Fsa2VkIHRvIGluIHRoZSBvdXRlciBsb29wIChhbmQgaWdub3JlZCksIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGFkanVzdCBub2RlSW5kZXggaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tsYXN0SW5kZXhdLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbWFya2VyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiBub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUGxhdGZvcm1TdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoaHRtbCwgX29wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIHZhbHVlLCBwYXJlbnQgPSBwYXJ0LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHZhciBfZDtcbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZSB2YWx1ZSBpcyBleHBsaWNpdGx5IG5vQ2hhbmdlLiBOb3RlLCB0aGlzIG1lYW5zIGFueVxuICAgIC8vIG5lc3RlZCBkaXJlY3RpdmUgaXMgc3RpbGwgYXR0YWNoZWQgYW5kIGlzIG5vdCBydW4uXG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlyZWN0aXZlID0gYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IChfYSA9IHBhcmVudC5fX2RpcmVjdGl2ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVthdHRyaWJ1dGVJbmRleF0gOiBwYXJlbnQuX19kaXJlY3RpdmU7XG4gICAgY29uc3QgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID0gaXNQcmltaXRpdmUodmFsdWUpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogdmFsdWUuXyRsaXREaXJlY3RpdmUkO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5fJHNldERpcmVjdGl2ZUNvbm5lY3RlZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY3VycmVudERpcmVjdGl2ZSwgZmFsc2UpO1xuICAgICAgICBpZiAobmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoKF9jID0gKF9kID0gcGFyZW50KS5fX2RpcmVjdGl2ZXMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChfZC5fX2RpcmVjdGl2ZXMgPSBbXSkpW2F0dHJpYnV0ZUluZGV4XSA9IGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyR0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyBlbDogeyBjb250ZW50IH0sIHBhcnRzOiBwYXJ0cywgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNyZWF0aW9uU2NvcGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZyYWdtZW50O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ID09PSB0ZW1wbGF0ZVBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IENISUxEX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQobm9kZSwgbm9kZS5uZXh0U2libGluZywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBBVFRSSUJVVEVfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBFTEVNRU5UX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBFbGVtZW50UGFydChub2RlLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSAodGVtcGxhdGVQYXJ0ID09PSBudWxsIHx8IHRlbXBsYXRlUGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVQYXJ0LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuICAgIF91cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXMsIHBhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHZhbHVlcyB0aGUgcGFydCBjb25zdW1lcyBpcyBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB2YWx1ZXMgYXJlIGluIGJldHdlZW4gdGVtcGxhdGUgc3BhbnMuIFdlIGluY3JlbWVudCBpIGJ5IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gbGF0ZXIgaW4gdGhlIGxvb3AsIHNvIGluY3JlbWVudCBpdCBieSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMiBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGkgKz0gcGFydC5zdHJpbmdzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBDaGlsZFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0Tm9kZSwgZW5kTm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IENISUxEX1BBUlQ7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydHMgd2hlbiByZXF1aXJlZCBieVxuICAgICAgICAvLyBBc3luY0RpcmVjdGl2ZVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRzdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgLy8gRXhwbGljaXRseSBpbml0aWFsaXplIGZvciBjb25zaXN0ZW50IGNsYXNzIHNoYXBlLlxuICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb25uZWN0aW9uIHN0YXRlIGZvciBhbnkgYEFzeW5jRGlyZWN0aXZlc2AgY29udGFpbmVkXG4gICAgICogd2l0aGluIHRoaXMgcGFydCBhbmQgcnVucyB0aGVpciBgZGlzY29ubmVjdGVkYCBvciBgcmVjb25uZWN0ZWRgLCBhY2NvcmRpbmdcbiAgICAgKiB0byB0aGUgYGlzQ29ubmVjdGVkYCBhcmd1bWVudC5cbiAgICAgKi9cbiAgICBzZXRDb25uZWN0ZWQoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kc2V0Q2hpbGRQYXJ0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIGxlYWRpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgc3RhcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyB0cmFpbGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBlbmROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJGVuZE5vZGU7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQpO1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBOb24tcmVuZGVyaW5nIGNoaWxkIHZhbHVlcy4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBkbyBub3QgcmVuZGVyXG4gICAgICAgICAgICAvLyBlbXB0eSB0ZXh0IG5vZGVzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHByZXZlbnRpbmcgZGVmYXVsdCA8c2xvdD5cbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5fJGxpdFR5cGUkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9pbnNlcnQobm9kZSwgcmVmID0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAod3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlKS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTICYmXG4gICAgICAgICAgICAgICAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSAoX2EgPSB0aGlzLl8kc3RhcnROb2RlLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScgfHwgcGFyZW50Tm9kZU5hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydChuZXcgVGV4dCgnLyogbGl0LWh0bWwgd2lsbCBub3Qgd3JpdGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGVtcGxhdGVSZXN1bHRzIHRvIHNjcmlwdHMgYW5kIHN0eWxlcyAqLycpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmc7XG4gICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovICYmXG4gICAgICAgICAgICAodGhpcy5fJGVuZE5vZGUgPT09IG51bGxcbiAgICAgICAgICAgICAgICA/IHdyYXAobm9kZSkubmV4dFNpYmxpbmcgPT09IG51bGxcbiAgICAgICAgICAgICAgICA6IG5vZGUgPT09IHdyYXAodGhpcy5fJGVuZE5vZGUpLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIobm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgICAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gc2V0dGluZyB0ZXh0IGNvbnRlbnQsIGZvciBzZWN1cml0eSBwdXJwb3NlcyBpdCBtYXR0ZXJzIGEgbG90XG4gICAgICAgICAgICAgICAgLy8gd2hhdCB0aGUgcGFyZW50IGlzLiBGb3IgZXhhbXBsZSwgPHN0eWxlPiBhbmQgPHNjcmlwdD4gbmVlZCB0byBiZVxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZWQgd2l0aCBjYXJlLCB3aGlsZSA8c3Bhbj4gZG9lcyBub3QuIFNvIGZpcnN0IHdlIG5lZWQgdG8gcHV0IGFcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IG5vZGUgaW50byB0aGUgZG9jdW1lbnQsIHRoZW4gd2UgY2FuIHNhbml0aXplIGl0cyBjb250ZW50eC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIodGV4dE5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZW1wbGF0ZVJlc3VsdChyZXN1bHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgXyRsaXRUeXBlJCB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgXyRsaXRUeXBlJCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKF8kbGl0VHlwZSQuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChfJGxpdFR5cGUkLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChfJGxpdFR5cGUkLmgsIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIF8kbGl0VHlwZSQpO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kdGVtcGxhdGUpID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGluc3RhbmNlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQbGF0Zm9ybVN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRnZXRUZW1wbGF0ZShyZXN1bHQpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocmVzdWx0LnN0cmluZ3MsICh0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBfY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIHZhbHVlIHdpbGwgY29udGFpbiB0aGUgQ2hpbGRQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBDaGlsZFBhcnRzLlxuICAgICAgICBpZiAoIWlzQXJyYXkodGhpcy5fJGNvbW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogdGVzdCBwZXJmIGltcGFjdCBvZiBhbHdheXMgY3JlYXRpbmcgdHdvIHBhcnRzXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBzaGFyaW5nIHBhcnRzIGJldHdlZW4gbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9saXQtaHRtbC9pc3N1ZXMvMTI2NlxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKChpdGVtUGFydCA9IG5ldyBDaGlsZFBhcnQodGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcywgdGhpcy5vcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5fJHNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGl0ZW1QYXJ0cyBhbHdheXMgaGF2ZSBlbmQgbm9kZXNcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcihpdGVtUGFydCAmJiB3cmFwKGl0ZW1QYXJ0Ll8kZW5kTm9kZSkubmV4dFNpYmxpbmcsIHBhcnRJbmRleCk7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG5vZGVzIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBQYXJ0IGZyb20gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCBTdGFydCBub2RlIHRvIGNsZWFyIGZyb20sIGZvciBjbGVhcmluZyBhIHN1YnNldCBvZiB0aGUgcGFydCdzXG4gICAgICogICAgIERPTSAodXNlZCB3aGVuIHRydW5jYXRpbmcgaXRlcmFibGVzKVxuICAgICAqIEBwYXJhbSBmcm9tICBXaGVuIGBzdGFydGAgaXMgc3BlY2lmaWVkLCB0aGUgaW5kZXggd2l0aGluIHRoZSBpdGVyYWJsZSBmcm9tXG4gICAgICogICAgIHdoaWNoIENoaWxkUGFydHMgYXJlIGJlaW5nIHJlbW92ZWQsIHVzZWQgZm9yIGRpc2Nvbm5lY3RpbmcgZGlyZWN0aXZlcyBpblxuICAgICAqICAgICB0aG9zZSBQYXJ0cy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kY2xlYXIoc3RhcnQgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLCBmcm9tKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fJHNldENoaWxkUGFydENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywgZmFsc2UsIHRydWUsIGZyb20pO1xuICAgICAgICB3aGlsZSAoc3RhcnQgJiYgc3RhcnQgIT09IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gd3JhcChzdGFydCkubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB3cmFwKHN0YXJ0KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBBVFRSSUJVVEVfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZXRhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fc2V0RGlyZWN0aXZlQ29ubmVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXcgQXJyYXkoc3RyaW5ncy5sZW5ndGggLSAxKS5maWxsKG5vdGhpbmcpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFBST1BFUlRZX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gRVZFTlRfUEFSVDtcbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBuZXdMaXN0ZW5lciA9IChfYSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdGhpbmc7XG4gICAgICAgIGlmIChuZXdMaXN0ZW5lciA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IChuZXdMaXN0ZW5lciA9PT0gbm90aGluZyAmJiBvbGRMaXN0ZW5lciAhPT0gbm90aGluZykgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLnBhc3NpdmU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgICAgIC8vIHRvIGFkZCB0aGUgcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICAob2xkTGlzdGVuZXIgPT09IG5vdGhpbmcgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgb2xkTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgLy8gQmV3YXJlOiBJRTExIGFuZCBDaHJvbWUgNDEgZG9uJ3QgbGlrZSB1c2luZyB0aGUgbGlzdGVuZXIgYXMgdGhlXG4gICAgICAgICAgICAvLyBvcHRpb25zIG9iamVjdC4gRmlndXJlIG91dCBob3cgdG8gZGVhbCB3LyB0aGlzIGluIElFMTEgLSBtYXliZVxuICAgICAgICAgICAgLy8gcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcywgbmV3TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGRvIHdlIG5lZWQgdG8gZGVmYXVsdCB0byB0aGlzLmVsZW1lbnQ/XG4gICAgICAgICAgICAvLyBJdCdsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGUuY3VycmVudFRhcmdldGAuXG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCgoX2IgPSAoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmV0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuX3NldERpcmVjdGl2ZUNvbm5lY3RlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF/OoyBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1lbGVtZW50LCB3aGljaCByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgX86jID0ge1xuICAgIC8vIFVzZWQgaW4gbGl0LXNzclxuICAgIF9ib3VuZEF0dHJpYnV0ZVN1ZmZpeDogYm91bmRBdHRyaWJ1dGVTdWZmaXgsXG4gICAgX21hcmtlcjogbWFya2VyLFxuICAgIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gICAgX0hUTUxfUkVTVUxUOiBIVE1MX1JFU1VMVCxcbiAgICBfZ2V0VGVtcGxhdGVIdG1sOiBnZXRUZW1wbGF0ZUh0bWwsXG4gICAgLy8gVXNlZCBpbiBoeWRyYXRlXG4gICAgX1RlbXBsYXRlSW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gICAgX3Jlc29sdmVEaXJlY3RpdmU6IHJlc29sdmVEaXJlY3RpdmUsXG4gICAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICAgIF9DaGlsZFBhcnQ6IENoaWxkUGFydCxcbiAgICBfQXR0cmlidXRlUGFydDogQXR0cmlidXRlUGFydCxcbiAgICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICAgIF9FdmVudFBhcnQ6IEV2ZW50UGFydCxcbiAgICBfUHJvcGVydHlQYXJ0OiBQcm9wZXJ0eVBhcnQsXG4gICAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKF9kID0gKF9jID0gZ2xvYmFsVGhpcylbJ2xpdEh0bWxQbGF0Zm9ybVN1cHBvcnQnXSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNhbGwoX2MsIFRlbXBsYXRlLCBDaGlsZFBhcnQpO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKChfZSA9IChfZiA9IGdsb2JhbFRoaXMpWydsaXRIdG1sVmVyc2lvbnMnXSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogKF9mWydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMi4wLjAtcmMuMicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2FzeW5jLWRpcmVjdGl2ZS5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMtZGlyZWN0aXZlLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZS5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcFxuIiwiZXhwb3J0KmZyb21cImxpdC1odG1sXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLmpzLm1hcFxuIiwiaW1wb3J0XCJsaXQtaHRtbFwiO2ltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qISBQaG90b1N3aXBlIERlZmF1bHQgVUkgLSA0LjEuMyAtIDIwMTktMDEtMDhcbiogaHR0cDovL3Bob3Rvc3dpcGUuY29tXG4qIENvcHlyaWdodCAoYykgMjAxOSBEbWl0cnkgU2VtZW5vdjsgKi9cbi8qKlxuKlxuKiBVSSBvbiB0b3Agb2YgbWFpbiBzbGlkaW5nIGFyZWEgKGNhcHRpb24sIGFycm93cywgY2xvc2UgYnV0dG9uLCBldGMuKS5cbiogQnVpbHQganVzdCB1c2luZyBwdWJsaWMgbWV0aG9kcy9wcm9wZXJ0aWVzIG9mIFBob3RvU3dpcGUuXG4qIFxuKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkgeyBcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290LlBob3RvU3dpcGVVSV9EZWZhdWx0ID0gZmFjdG9yeSgpO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cblxudmFyIFBob3RvU3dpcGVVSV9EZWZhdWx0ID1cbiBmdW5jdGlvbihwc3dwLCBmcmFtZXdvcmspIHtcblxuXHR2YXIgdWkgPSB0aGlzO1xuXHR2YXIgX292ZXJsYXlVSVVwZGF0ZWQgPSBmYWxzZSxcblx0XHRfY29udHJvbHNWaXNpYmxlID0gdHJ1ZSxcblx0XHRfZnVsbHNjcmVuQVBJLFxuXHRcdF9jb250cm9scyxcblx0XHRfY2FwdGlvbkNvbnRhaW5lcixcblx0XHRfZmFrZUNhcHRpb25Db250YWluZXIsXG5cdFx0X2luZGV4SW5kaWNhdG9yLFxuXHRcdF9zaGFyZUJ1dHRvbixcblx0XHRfc2hhcmVNb2RhbCxcblx0XHRfc2hhcmVNb2RhbEhpZGRlbiA9IHRydWUsXG5cdFx0X2luaXRhbENsb3NlT25TY3JvbGxWYWx1ZSxcblx0XHRfaXNJZGxlLFxuXHRcdF9saXN0ZW4sXG5cblx0XHRfbG9hZGluZ0luZGljYXRvcixcblx0XHRfbG9hZGluZ0luZGljYXRvckhpZGRlbixcblx0XHRfbG9hZGluZ0luZGljYXRvclRpbWVvdXQsXG5cblx0XHRfZ2FsbGVyeUhhc09uZVNsaWRlLFxuXG5cdFx0X29wdGlvbnMsXG5cdFx0X2RlZmF1bHRVSU9wdGlvbnMgPSB7XG5cdFx0XHRiYXJzU2l6ZToge3RvcDo0NCwgYm90dG9tOidhdXRvJ30sXG5cdFx0XHRjbG9zZUVsQ2xhc3NlczogWydpdGVtJywgJ2NhcHRpb24nLCAnem9vbS13cmFwJywgJ3VpJywgJ3RvcC1iYXInXSwgXG5cdFx0XHR0aW1lVG9JZGxlOiA0MDAwLCBcblx0XHRcdHRpbWVUb0lkbGVPdXRzaWRlOiAxMDAwLFxuXHRcdFx0bG9hZGluZ0luZGljYXRvckRlbGF5OiAxMDAwLCAvLyAyc1xuXHRcdFx0XG5cdFx0XHRhZGRDYXB0aW9uSFRNTEZuOiBmdW5jdGlvbihpdGVtLCBjYXB0aW9uRWwgLyosIGlzRmFrZSAqLykge1xuXHRcdFx0XHRpZighaXRlbS50aXRsZSkge1xuXHRcdFx0XHRcdGNhcHRpb25FbC5jaGlsZHJlblswXS5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FwdGlvbkVsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2VFbDp0cnVlLFxuXHRcdFx0Y2FwdGlvbkVsOiB0cnVlLFxuXHRcdFx0ZnVsbHNjcmVlbkVsOiB0cnVlLFxuXHRcdFx0em9vbUVsOiB0cnVlLFxuXHRcdFx0c2hhcmVFbDogdHJ1ZSxcblx0XHRcdGNvdW50ZXJFbDogdHJ1ZSxcblx0XHRcdGFycm93RWw6IHRydWUsXG5cdFx0XHRwcmVsb2FkZXJFbDogdHJ1ZSxcblxuXHRcdFx0dGFwVG9DbG9zZTogZmFsc2UsXG5cdFx0XHR0YXBUb1RvZ2dsZUNvbnRyb2xzOiB0cnVlLFxuXG5cdFx0XHRjbGlja1RvQ2xvc2VOb25ab29tYWJsZTogdHJ1ZSxcblxuXHRcdFx0c2hhcmVCdXR0b25zOiBbXG5cdFx0XHRcdHtpZDonZmFjZWJvb2snLCBsYWJlbDonU2hhcmUgb24gRmFjZWJvb2snLCB1cmw6J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PXt7dXJsfX0nfSxcblx0XHRcdFx0e2lkOid0d2l0dGVyJywgbGFiZWw6J1R3ZWV0JywgdXJsOidodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PXt7dGV4dH19JnVybD17e3VybH19J30sXG5cdFx0XHRcdHtpZDoncGludGVyZXN0JywgbGFiZWw6J1BpbiBpdCcsIHVybDonaHR0cDovL3d3dy5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLycrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc/dXJsPXt7dXJsfX0mbWVkaWE9e3tpbWFnZV91cmx9fSZkZXNjcmlwdGlvbj17e3RleHR9fSd9LFxuXHRcdFx0XHR7aWQ6J2Rvd25sb2FkJywgbGFiZWw6J0Rvd25sb2FkIGltYWdlJywgdXJsOid7e3Jhd19pbWFnZV91cmx9fScsIGRvd25sb2FkOnRydWV9XG5cdFx0XHRdLFxuXHRcdFx0Z2V0SW1hZ2VVUkxGb3JTaGFyZTogZnVuY3Rpb24oIC8qIHNoYXJlQnV0dG9uRGF0YSAqLyApIHtcblx0XHRcdFx0cmV0dXJuIHBzd3AuY3Vyckl0ZW0uc3JjIHx8ICcnO1xuXHRcdFx0fSxcblx0XHRcdGdldFBhZ2VVUkxGb3JTaGFyZTogZnVuY3Rpb24oIC8qIHNoYXJlQnV0dG9uRGF0YSAqLyApIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0fSxcblx0XHRcdGdldFRleHRGb3JTaGFyZTogZnVuY3Rpb24oIC8qIHNoYXJlQnV0dG9uRGF0YSAqLyApIHtcblx0XHRcdFx0cmV0dXJuIHBzd3AuY3Vyckl0ZW0udGl0bGUgfHwgJyc7XG5cdFx0XHR9LFxuXHRcdFx0XHRcblx0XHRcdGluZGV4SW5kaWNhdG9yU2VwOiAnIC8gJyxcblx0XHRcdGZpdENvbnRyb2xzV2lkdGg6IDEyMDBcblxuXHRcdH0sXG5cdFx0X2Jsb2NrQ29udHJvbHNUYXAsXG5cdFx0X2Jsb2NrQ29udHJvbHNUYXBUaW1lb3V0O1xuXG5cblxuXHR2YXIgX29uQ29udHJvbHNUYXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZihfYmxvY2tDb250cm9sc1RhcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cblx0XHRcdGlmKF9vcHRpb25zLnRpbWVUb0lkbGUgJiYgX29wdGlvbnMubW91c2VVc2VkICYmICFfaXNJZGxlKSB7XG5cdFx0XHRcdC8vIHJlc2V0IGlkbGUgdGltZXJcblx0XHRcdFx0X29uSWRsZU1vdXNlTW92ZSgpO1xuXHRcdFx0fVxuXG5cblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQsXG5cdFx0XHRcdHVpRWxlbWVudCxcblx0XHRcdFx0Y2xpY2tlZENsYXNzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJyxcblx0XHRcdFx0Zm91bmQ7XG5cblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfdWlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR1aUVsZW1lbnQgPSBfdWlFbGVtZW50c1tpXTtcblx0XHRcdFx0aWYodWlFbGVtZW50Lm9uVGFwICYmIGNsaWNrZWRDbGFzcy5pbmRleE9mKCdwc3dwX18nICsgdWlFbGVtZW50Lm5hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRcdHVpRWxlbWVudC5vblRhcCgpO1xuXHRcdFx0XHRcdGZvdW5kID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZvdW5kKSB7XG5cdFx0XHRcdGlmKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfYmxvY2tDb250cm9sc1RhcCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gU29tZSB2ZXJzaW9ucyBvZiBBbmRyb2lkIGRvbid0IHByZXZlbnQgZ2hvc3QgY2xpY2sgZXZlbnQgXG5cdFx0XHRcdC8vIHdoZW4gcHJldmVudERlZmF1bHQoKSB3YXMgY2FsbGVkIG9uIHRvdWNoc3RhcnQgYW5kL29yIHRvdWNoZW5kLlxuXHRcdFx0XHQvLyBcblx0XHRcdFx0Ly8gVGhpcyBoYXBwZW5zIG9uIHY0LjMsIDQuMiwgNC4xLCBcblx0XHRcdFx0Ly8gb2xkZXIgdmVyc2lvbnMgc3RyYW5nZWx5IHdvcmsgY29ycmVjdGx5LCBcblx0XHRcdFx0Ly8gYnV0IGp1c3QgaW4gY2FzZSB3ZSBhZGQgZGVsYXkgb24gYWxsIG9mIHRoZW0pXHRcblx0XHRcdFx0dmFyIHRhcERlbGF5ID0gZnJhbWV3b3JrLmZlYXR1cmVzLmlzT2xkQW5kcm9pZCA/IDYwMCA6IDMwO1xuXHRcdFx0XHRfYmxvY2tDb250cm9sc1RhcFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9ibG9ja0NvbnRyb2xzVGFwID0gZmFsc2U7XG5cdFx0XHRcdH0sIHRhcERlbGF5KTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0X2ZpdENvbnRyb2xzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICFwc3dwLmxpa2VseVRvdWNoRGV2aWNlIHx8IF9vcHRpb25zLm1vdXNlVXNlZCB8fCBzY3JlZW4ud2lkdGggPiBfb3B0aW9ucy5maXRDb250cm9sc1dpZHRoO1xuXHRcdH0sXG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjTmFtZSwgYWRkKSB7XG5cdFx0XHRmcmFtZXdvcmtbIChhZGQgPyAnYWRkJyA6ICdyZW1vdmUnKSArICdDbGFzcycgXShlbCwgJ3Bzd3BfXycgKyBjTmFtZSk7XG5cdFx0fSxcblxuXHRcdC8vIGFkZCBjbGFzcyB3aGVuIHRoZXJlIGlzIGp1c3Qgb25lIGl0ZW0gaW4gdGhlIGdhbGxlcnlcblx0XHQvLyAoYnkgZGVmYXVsdCBpdCBoaWRlcyBsZWZ0L3JpZ2h0IGFycm93cyBhbmQgMW9mWCBjb3VudGVyKVxuXHRcdF9jb3VudE51bUl0ZW1zID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaGFzT25lU2xpZGUgPSAoX29wdGlvbnMuZ2V0TnVtSXRlbXNGbigpID09PSAxKTtcblxuXHRcdFx0aWYoaGFzT25lU2xpZGUgIT09IF9nYWxsZXJ5SGFzT25lU2xpZGUpIHtcblx0XHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0tb25lLXNsaWRlJywgaGFzT25lU2xpZGUpO1xuXHRcdFx0XHRfZ2FsbGVyeUhhc09uZVNsaWRlID0gaGFzT25lU2xpZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfdG9nZ2xlUHN3cENsYXNzKF9zaGFyZU1vZGFsLCAnc2hhcmUtbW9kYWwtLWhpZGRlbicsIF9zaGFyZU1vZGFsSGlkZGVuKTtcblx0XHR9LFxuXHRcdF90b2dnbGVTaGFyZU1vZGFsID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdF9zaGFyZU1vZGFsSGlkZGVuID0gIV9zaGFyZU1vZGFsSGlkZGVuO1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbENsYXNzKCk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoX3NoYXJlTW9kYWwsICdwc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMzApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9zaGFyZU1vZGFsLCAncHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4nKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZihfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWxDbGFzcygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF91cGRhdGVTaGFyZVVSTHMoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0X29wZW5XaW5kb3dQb3B1cCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHRcdHBzd3Auc2hvdXQoJ3NoYXJlTGlua0NsaWNrJywgZSwgdGFyZ2V0KTtcblxuXHRcdFx0aWYoIXRhcmdldC5ocmVmKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cub3Blbih0YXJnZXQuaHJlZiwgJ3Bzd3Bfc2hhcmUnLCAnc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx0b29sYmFyPW5vLCcrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdsb2NhdGlvbj15ZXMsd2lkdGg9NTUwLGhlaWdodD00MjAsdG9wPTEwMCxsZWZ0PScgKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KHdpbmRvdy5zY3JlZW4gPyBNYXRoLnJvdW5kKHNjcmVlbi53aWR0aCAvIDIgLSAyNzUpIDogMTAwKSAgKTtcblxuXHRcdFx0aWYoIV9zaGFyZU1vZGFsSGlkZGVuKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdF91cGRhdGVTaGFyZVVSTHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzaGFyZUJ1dHRvbk91dCA9ICcnLFxuXHRcdFx0XHRzaGFyZUJ1dHRvbkRhdGEsXG5cdFx0XHRcdHNoYXJlVVJMLFxuXHRcdFx0XHRpbWFnZV91cmwsXG5cdFx0XHRcdHBhZ2VfdXJsLFxuXHRcdFx0XHRzaGFyZV90ZXh0O1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMuc2hhcmVCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHNoYXJlQnV0dG9uRGF0YSA9IF9vcHRpb25zLnNoYXJlQnV0dG9uc1tpXTtcblxuXHRcdFx0XHRpbWFnZV91cmwgPSBfb3B0aW9ucy5nZXRJbWFnZVVSTEZvclNoYXJlKHNoYXJlQnV0dG9uRGF0YSk7XG5cdFx0XHRcdHBhZ2VfdXJsID0gX29wdGlvbnMuZ2V0UGFnZVVSTEZvclNoYXJlKHNoYXJlQnV0dG9uRGF0YSk7XG5cdFx0XHRcdHNoYXJlX3RleHQgPSBfb3B0aW9ucy5nZXRUZXh0Rm9yU2hhcmUoc2hhcmVCdXR0b25EYXRhKTtcblxuXHRcdFx0XHRzaGFyZVVSTCA9IHNoYXJlQnV0dG9uRGF0YS51cmwucmVwbGFjZSgne3t1cmx9fScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlX3VybCkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3t7aW1hZ2VfdXJsfX0nLCBlbmNvZGVVUklDb21wb25lbnQoaW1hZ2VfdXJsKSApXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgne3tyYXdfaW1hZ2VfdXJsfX0nLCBpbWFnZV91cmwgKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3t7dGV4dH19JywgZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlX3RleHQpICk7XG5cblx0XHRcdFx0c2hhcmVCdXR0b25PdXQgKz0gJzxhIGhyZWY9XCInICsgc2hhcmVVUkwgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgJytcblx0XHRcdFx0XHRcdFx0XHRcdCdjbGFzcz1cInBzd3BfX3NoYXJlLS0nICsgc2hhcmVCdXR0b25EYXRhLmlkICsgJ1wiJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQoc2hhcmVCdXR0b25EYXRhLmRvd25sb2FkID8gJ2Rvd25sb2FkJyA6ICcnKSArICc+JyArIFxuXHRcdFx0XHRcdFx0XHRcdFx0c2hhcmVCdXR0b25EYXRhLmxhYmVsICsgJzwvYT4nO1xuXG5cdFx0XHRcdGlmKF9vcHRpb25zLnBhcnNlU2hhcmVCdXR0b25PdXQpIHtcblx0XHRcdFx0XHRzaGFyZUJ1dHRvbk91dCA9IF9vcHRpb25zLnBhcnNlU2hhcmVCdXR0b25PdXQoc2hhcmVCdXR0b25EYXRhLCBzaGFyZUJ1dHRvbk91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IHNoYXJlQnV0dG9uT3V0O1xuXHRcdFx0X3NoYXJlTW9kYWwuY2hpbGRyZW5bMF0ub25jbGljayA9IF9vcGVuV2luZG93UG9wdXA7XG5cblx0XHR9LFxuXHRcdF9oYXNDbG9zZUNsYXNzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0XHRmb3IodmFyICBpID0gMDsgaSA8IF9vcHRpb25zLmNsb3NlRWxDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKCBmcmFtZXdvcmsuaGFzQ2xhc3ModGFyZ2V0LCAncHN3cF9fJyArIF9vcHRpb25zLmNsb3NlRWxDbGFzc2VzW2ldKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X2lkbGVJbnRlcnZhbCxcblx0XHRfaWRsZVRpbWVyLFxuXHRcdF9pZGxlSW5jcmVtZW50ID0gMCxcblx0XHRfb25JZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2lkbGVUaW1lcik7XG5cdFx0XHRfaWRsZUluY3JlbWVudCA9IDA7XG5cdFx0XHRpZihfaXNJZGxlKSB7XG5cdFx0XHRcdHVpLnNldElkbGUoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uTW91c2VMZWF2ZVdpbmRvdyA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUgPSBlID8gZSA6IHdpbmRvdy5ldmVudDtcblx0XHRcdHZhciBmcm9tID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGUudG9FbGVtZW50O1xuXHRcdFx0aWYgKCFmcm9tIHx8IGZyb20ubm9kZU5hbWUgPT09ICdIVE1MJykge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoX2lkbGVUaW1lcik7XG5cdFx0XHRcdF9pZGxlVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHVpLnNldElkbGUodHJ1ZSk7XG5cdFx0XHRcdH0sIF9vcHRpb25zLnRpbWVUb0lkbGVPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cEZ1bGxzY3JlZW5BUEkgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLmZ1bGxzY3JlZW5FbCAmJiAhZnJhbWV3b3JrLmZlYXR1cmVzLmlzT2xkQW5kcm9pZCkge1xuXHRcdFx0XHRpZighX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkgPSB1aS5nZXRGdWxsc2NyZWVuQVBJKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSSkge1xuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCBfZnVsbHNjcmVuQVBJLmV2ZW50SywgdWkudXBkYXRlRnVsbHNjcmVlbik7XG5cdFx0XHRcdFx0dWkudXBkYXRlRnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyhwc3dwLnRlbXBsYXRlLCAncHN3cC0tc3VwcG9ydHMtZnMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLXN1cHBvcnRzLWZzJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdF9zZXR1cExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFNldHVwIGxvYWRpbmcgaW5kaWNhdG9yXG5cdFx0XHRpZihfb3B0aW9ucy5wcmVsb2FkZXJFbCkge1xuXHRcdFx0XG5cdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKHRydWUpO1xuXG5cdFx0XHRcdF9saXN0ZW4oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9sb2FkaW5nSW5kaWNhdG9yVGltZW91dCk7XG5cblx0XHRcdFx0XHQvLyBkaXNwbGF5IGxvYWRpbmcgaW5kaWNhdG9yIHdpdGggZGVsYXlcblx0XHRcdFx0XHRfbG9hZGluZ0luZGljYXRvclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRpZihwc3dwLmN1cnJJdGVtICYmIHBzd3AuY3Vyckl0ZW0ubG9hZGluZykge1xuXG5cdFx0XHRcdFx0XHRcdGlmKCAhcHN3cC5hbGxvd1Byb2dyZXNzaXZlSW1nKCkgfHwgKHBzd3AuY3Vyckl0ZW0uaW1nICYmICFwc3dwLmN1cnJJdGVtLmltZy5uYXR1cmFsV2lkdGgpICApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBzaG93IHByZWxvYWRlciBpZiBwcm9ncmVzc2l2ZSBsb2FkaW5nIGlzIG5vdCBlbmFibGVkLCBcblx0XHRcdFx0XHRcdFx0XHQvLyBvciBpbWFnZSB3aWR0aCBpcyBub3QgZGVmaW5lZCB5ZXQgKGJlY2F1c2Ugb2Ygc2xvdyBjb25uZWN0aW9uKVxuXHRcdFx0XHRcdFx0XHRcdF90b2dnbGVMb2FkaW5nSW5kaWNhdG9yKGZhbHNlKTsgXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXRlbXMtY29udHJvbGxlci5qcyBmdW5jdGlvbiBhbGxvd1Byb2dyZXNzaXZlSW1nXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRfdG9nZ2xlTG9hZGluZ0luZGljYXRvcih0cnVlKTsgLy8gaGlkZSBwcmVsb2FkZXJcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0sIF9vcHRpb25zLmxvYWRpbmdJbmRpY2F0b3JEZWxheSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRfbGlzdGVuKCdpbWFnZUxvYWRDb21wbGV0ZScsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG5cdFx0XHRcdFx0aWYocHN3cC5jdXJySXRlbSA9PT0gaXRlbSkge1xuXHRcdFx0XHRcdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3RvZ2dsZUxvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbihoaWRlKSB7XG5cdFx0XHRpZiggX2xvYWRpbmdJbmRpY2F0b3JIaWRkZW4gIT09IGhpZGUgKSB7XG5cdFx0XHRcdF90b2dnbGVQc3dwQ2xhc3MoX2xvYWRpbmdJbmRpY2F0b3IsICdwcmVsb2FkZXItLWFjdGl2ZScsICFoaWRlKTtcblx0XHRcdFx0X2xvYWRpbmdJbmRpY2F0b3JIaWRkZW4gPSBoaWRlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X2FwcGx5TmF2QmFyR2FwcyA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdHZhciBnYXAgPSBpdGVtLnZHYXA7XG5cblx0XHRcdGlmKCBfZml0Q29udHJvbHNJblZpZXdwb3J0KCkgKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgYmFycyA9IF9vcHRpb25zLmJhcnNTaXplOyBcblx0XHRcdFx0aWYoX29wdGlvbnMuY2FwdGlvbkVsICYmIGJhcnMuYm90dG9tID09PSAnYXV0bycpIHtcblx0XHRcdFx0XHRpZighX2Zha2VDYXB0aW9uQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHRfZmFrZUNhcHRpb25Db250YWluZXIgPSBmcmFtZXdvcmsuY3JlYXRlRWwoJ3Bzd3BfX2NhcHRpb24gcHN3cF9fY2FwdGlvbi0tZmFrZScpO1xuXHRcdFx0XHRcdFx0X2Zha2VDYXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKCBmcmFtZXdvcmsuY3JlYXRlRWwoJ3Bzd3BfX2NhcHRpb25fX2NlbnRlcicpICk7XG5cdFx0XHRcdFx0XHRfY29udHJvbHMuaW5zZXJ0QmVmb3JlKF9mYWtlQ2FwdGlvbkNvbnRhaW5lciwgX2NhcHRpb25Db250YWluZXIpO1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKF9jb250cm9scywgJ3Bzd3BfX3VpLS1maXQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIF9vcHRpb25zLmFkZENhcHRpb25IVE1MRm4oaXRlbSwgX2Zha2VDYXB0aW9uQ29udGFpbmVyLCB0cnVlKSApIHtcblxuXHRcdFx0XHRcdFx0dmFyIGNhcHRpb25TaXplID0gX2Zha2VDYXB0aW9uQ29udGFpbmVyLmNsaWVudEhlaWdodDtcblx0XHRcdFx0XHRcdGdhcC5ib3R0b20gPSBwYXJzZUludChjYXB0aW9uU2l6ZSwxMCkgfHwgNDQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGdhcC5ib3R0b20gPSBiYXJzLnRvcDsgLy8gaWYgbm8gY2FwdGlvbiwgc2V0IHNpemUgb2YgYm90dG9tIGdhcCB0byBzaXplIG9mIHRvcFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRnYXAuYm90dG9tID0gYmFycy5ib3R0b20gPT09ICdhdXRvJyA/IDAgOiBiYXJzLmJvdHRvbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8gaGVpZ2h0IG9mIHRvcCBiYXIgaXMgc3RhdGljLCBubyBuZWVkIHRvIGNhbGN1bGF0ZSBpdFxuXHRcdFx0XHRnYXAudG9wID0gYmFycy50b3A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnYXAudG9wID0gZ2FwLmJvdHRvbSA9IDA7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBJZGxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBIaWRlIGNvbnRyb2xzIHdoZW4gbW91c2UgaXMgdXNlZFxuXHRcdFx0aWYoX29wdGlvbnMudGltZVRvSWRsZSkge1xuXHRcdFx0XHRfbGlzdGVuKCdtb3VzZVVzZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbklkbGVNb3VzZU1vdmUpO1xuXHRcdFx0XHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAnbW91c2VvdXQnLCBfb25Nb3VzZUxlYXZlV2luZG93KTtcblxuXHRcdFx0XHRcdF9pZGxlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdF9pZGxlSW5jcmVtZW50Kys7XG5cdFx0XHRcdFx0XHRpZihfaWRsZUluY3JlbWVudCA9PT0gMikge1xuXHRcdFx0XHRcdFx0XHR1aS5zZXRJZGxlKHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIF9vcHRpb25zLnRpbWVUb0lkbGUgLyAyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfc2V0dXBIaWRpbmdDb250cm9sc0R1cmluZ0dlc3R1cmVzID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEhpZGUgY29udHJvbHMgb24gdmVydGljYWwgZHJhZ1xuXHRcdFx0X2xpc3Rlbignb25WZXJ0aWNhbERyYWcnLCBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0aWYoX2NvbnRyb2xzVmlzaWJsZSAmJiBub3cgPCAwLjk1KSB7XG5cdFx0XHRcdFx0dWkuaGlkZUNvbnRyb2xzKCk7XG5cdFx0XHRcdH0gZWxzZSBpZighX2NvbnRyb2xzVmlzaWJsZSAmJiBub3cgPj0gMC45NSkge1xuXHRcdFx0XHRcdHVpLnNob3dDb250cm9scygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gSGlkZSBjb250cm9scyB3aGVuIHBpbmNoaW5nIHRvIGNsb3NlXG5cdFx0XHR2YXIgcGluY2hDb250cm9sc0hpZGRlbjtcblx0XHRcdF9saXN0ZW4oJ29uUGluY2hDbG9zZScgLCBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0aWYoX2NvbnRyb2xzVmlzaWJsZSAmJiBub3cgPCAwLjkpIHtcblx0XHRcdFx0XHR1aS5oaWRlQ29udHJvbHMoKTtcblx0XHRcdFx0XHRwaW5jaENvbnRyb2xzSGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmKHBpbmNoQ29udHJvbHNIaWRkZW4gJiYgIV9jb250cm9sc1Zpc2libGUgJiYgbm93ID4gMC45KSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCd6b29tR2VzdHVyZUVuZGVkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBpbmNoQ29udHJvbHNIaWRkZW4gPSBmYWxzZTtcblx0XHRcdFx0aWYocGluY2hDb250cm9sc0hpZGRlbiAmJiAhX2NvbnRyb2xzVmlzaWJsZSkge1xuXHRcdFx0XHRcdHVpLnNob3dDb250cm9scygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdH07XG5cblxuXG5cdHZhciBfdWlFbGVtZW50cyA9IFtcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2NhcHRpb24nLCBcblx0XHRcdG9wdGlvbjogJ2NhcHRpb25FbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7ICBcblx0XHRcdFx0X2NhcHRpb25Db250YWluZXIgPSBlbDsgXG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdzaGFyZS1tb2RhbCcsIFxuXHRcdFx0b3B0aW9uOiAnc2hhcmVFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7ICBcblx0XHRcdFx0X3NoYXJlTW9kYWwgPSBlbDtcblx0XHRcdH0sXG5cdFx0XHRvblRhcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLXNoYXJlJywgXG5cdFx0XHRvcHRpb246ICdzaGFyZUVsJyxcblx0XHRcdG9uSW5pdDogZnVuY3Rpb24oZWwpIHsgXG5cdFx0XHRcdF9zaGFyZUJ1dHRvbiA9IGVsO1xuXHRcdFx0fSxcblx0XHRcdG9uVGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RvZ2dsZVNoYXJlTW9kYWwoKTtcblx0XHRcdH0gXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tem9vbScsIFxuXHRcdFx0b3B0aW9uOiAnem9vbUVsJyxcblx0XHRcdG9uVGFwOiBwc3dwLnRvZ2dsZURlc2t0b3Bab29tXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2NvdW50ZXInLCBcblx0XHRcdG9wdGlvbjogJ2NvdW50ZXJFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7ICBcblx0XHRcdFx0X2luZGV4SW5kaWNhdG9yID0gZWw7XG5cdFx0XHR9IFxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLWNsb3NlJywgXG5cdFx0XHRvcHRpb246ICdjbG9zZUVsJyxcblx0XHRcdG9uVGFwOiBwc3dwLmNsb3NlXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tYXJyb3ctLWxlZnQnLCBcblx0XHRcdG9wdGlvbjogJ2Fycm93RWwnLFxuXHRcdFx0b25UYXA6IHBzd3AucHJldlxuXHRcdH0sXG5cdFx0eyBcblx0XHRcdG5hbWU6ICdidXR0b24tLWFycm93LS1yaWdodCcsIFxuXHRcdFx0b3B0aW9uOiAnYXJyb3dFbCcsXG5cdFx0XHRvblRhcDogcHN3cC5uZXh0XG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0bmFtZTogJ2J1dHRvbi0tZnMnLCBcblx0XHRcdG9wdGlvbjogJ2Z1bGxzY3JlZW5FbCcsXG5cdFx0XHRvblRhcDogZnVuY3Rpb24oKSB7ICBcblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSkge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZXhpdCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9mdWxsc2NyZW5BUEkuZW50ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHRuYW1lOiAncHJlbG9hZGVyJywgXG5cdFx0XHRvcHRpb246ICdwcmVsb2FkZXJFbCcsXG5cdFx0XHRvbkluaXQ6IGZ1bmN0aW9uKGVsKSB7ICBcblx0XHRcdFx0X2xvYWRpbmdJbmRpY2F0b3IgPSBlbDtcblx0XHRcdH0gXG5cdFx0fVxuXG5cdF07XG5cblx0dmFyIF9zZXR1cFVJRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaXRlbSxcblx0XHRcdGNsYXNzQXR0cixcblx0XHRcdHVpRWxlbWVudDtcblxuXHRcdHZhciBsb29wVGhyb3VnaENoaWxkRWxlbWVudHMgPSBmdW5jdGlvbihzQ2hpbGRyZW4pIHtcblx0XHRcdGlmKCFzQ2hpbGRyZW4pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbCA9IHNDaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBzQ2hpbGRyZW5baV07XG5cdFx0XHRcdGNsYXNzQXR0ciA9IGl0ZW0uY2xhc3NOYW1lO1xuXG5cdFx0XHRcdGZvcih2YXIgYSA9IDA7IGEgPCBfdWlFbGVtZW50cy5sZW5ndGg7IGErKykge1xuXHRcdFx0XHRcdHVpRWxlbWVudCA9IF91aUVsZW1lbnRzW2FdO1xuXG5cdFx0XHRcdFx0aWYoY2xhc3NBdHRyLmluZGV4T2YoJ3Bzd3BfXycgKyB1aUVsZW1lbnQubmFtZSkgPiAtMSAgKSB7XG5cblx0XHRcdFx0XHRcdGlmKCBfb3B0aW9uc1t1aUVsZW1lbnQub3B0aW9uXSApIHsgLy8gaWYgZWxlbWVudCBpcyBub3QgZGlzYWJsZWQgZnJvbSBvcHRpb25zXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoaXRlbSwgJ3Bzd3BfX2VsZW1lbnQtLWRpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGlmKHVpRWxlbWVudC5vbkluaXQpIHtcblx0XHRcdFx0XHRcdFx0XHR1aUVsZW1lbnQub25Jbml0KGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvL2l0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoaXRlbSwgJ3Bzd3BfX2VsZW1lbnQtLWRpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdC8vaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0bG9vcFRocm91Z2hDaGlsZEVsZW1lbnRzKF9jb250cm9scy5jaGlsZHJlbik7XG5cblx0XHR2YXIgdG9wQmFyID0gIGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3MoX2NvbnRyb2xzLCAncHN3cF9fdG9wLWJhcicpO1xuXHRcdGlmKHRvcEJhcikge1xuXHRcdFx0bG9vcFRocm91Z2hDaGlsZEVsZW1lbnRzKCB0b3BCYXIuY2hpbGRyZW4gKTtcblx0XHR9XG5cdH07XG5cblxuXHRcblxuXHR1aS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBleHRlbmQgb3B0aW9uc1xuXHRcdGZyYW1ld29yay5leHRlbmQocHN3cC5vcHRpb25zLCBfZGVmYXVsdFVJT3B0aW9ucywgdHJ1ZSk7XG5cblx0XHQvLyBjcmVhdGUgbG9jYWwgbGluayBmb3IgZmFzdCBhY2Nlc3Ncblx0XHRfb3B0aW9ucyA9IHBzd3Aub3B0aW9ucztcblxuXHRcdC8vIGZpbmQgcHN3cF9fdWkgZWxlbWVudFxuXHRcdF9jb250cm9scyA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3MocHN3cC5zY3JvbGxXcmFwLCAncHN3cF9fdWknKTtcblxuXHRcdC8vIGNyZWF0ZSBsb2NhbCBsaW5rXG5cdFx0X2xpc3RlbiA9IHBzd3AubGlzdGVuO1xuXG5cblx0XHRfc2V0dXBIaWRpbmdDb250cm9sc0R1cmluZ0dlc3R1cmVzKCk7XG5cblx0XHQvLyB1cGRhdGUgY29udHJvbHMgd2hlbiBzbGlkZXMgY2hhbmdlXG5cdFx0X2xpc3RlbignYmVmb3JlQ2hhbmdlJywgdWkudXBkYXRlKTtcblxuXHRcdC8vIHRvZ2dsZSB6b29tIG9uIGRvdWJsZS10YXBcblx0XHRfbGlzdGVuKCdkb3VibGVUYXAnLCBmdW5jdGlvbihwb2ludCkge1xuXHRcdFx0dmFyIGluaXRpYWxab29tTGV2ZWwgPSBwc3dwLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRpZihwc3dwLmdldFpvb21MZXZlbCgpICE9PSBpbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdHBzd3Auem9vbVRvKGluaXRpYWxab29tTGV2ZWwsIHBvaW50LCAzMzMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHN3cC56b29tVG8oX29wdGlvbnMuZ2V0RG91YmxlVGFwWm9vbShmYWxzZSwgcHN3cC5jdXJySXRlbSksIHBvaW50LCAzMzMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gQWxsb3cgdGV4dCBzZWxlY3Rpb24gaW4gY2FwdGlvblxuXHRcdF9saXN0ZW4oJ3ByZXZlbnREcmFnRXZlbnQnLCBmdW5jdGlvbihlLCBpc0Rvd24sIHByZXZlbnRPYmopIHtcblx0XHRcdHZhciB0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXHRcdFx0aWYoXG5cdFx0XHRcdHQgJiYgXG5cdFx0XHRcdHQuZ2V0QXR0cmlidXRlKCdjbGFzcycpICYmIGUudHlwZS5pbmRleE9mKCdtb3VzZScpID4gLTEgJiYgXG5cdFx0XHRcdCggdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5kZXhPZignX19jYXB0aW9uJykgPiAwIHx8ICgvKFNNQUxMfFNUUk9OR3xFTSkvaSkudGVzdCh0LnRhZ05hbWUpICkgXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJldmVudE9iai5wcmV2ZW50ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBiaW5kIGV2ZW50cyBmb3IgVUlcblx0XHRfbGlzdGVuKCdiaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChfY29udHJvbHMsICdwc3dwVGFwIGNsaWNrJywgX29uQ29udHJvbHNUYXApO1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQocHN3cC5zY3JvbGxXcmFwLCAncHN3cFRhcCcsIHVpLm9uR2xvYmFsVGFwKTtcblxuXHRcdFx0aWYoIXBzd3AubGlrZWx5VG91Y2hEZXZpY2UpIHtcblx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQocHN3cC5zY3JvbGxXcmFwLCAnbW91c2VvdmVyJywgdWkub25Nb3VzZU92ZXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gdW5iaW5kIGV2ZW50cyBmb3IgVUlcblx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCFfc2hhcmVNb2RhbEhpZGRlbikge1xuXHRcdFx0XHRfdG9nZ2xlU2hhcmVNb2RhbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfaWRsZUludGVydmFsKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2lkbGVJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0XHRmcmFtZXdvcmsudW5iaW5kKGRvY3VtZW50LCAnbW91c2VvdXQnLCBfb25Nb3VzZUxlYXZlV2luZG93KTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25JZGxlTW91c2VNb3ZlKTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQoX2NvbnRyb2xzLCAncHN3cFRhcCBjbGljaycsIF9vbkNvbnRyb2xzVGFwKTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQocHN3cC5zY3JvbGxXcmFwLCAncHN3cFRhcCcsIHVpLm9uR2xvYmFsVGFwKTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQocHN3cC5zY3JvbGxXcmFwLCAnbW91c2VvdmVyJywgdWkub25Nb3VzZU92ZXIpO1xuXG5cdFx0XHRpZihfZnVsbHNjcmVuQVBJKSB7XG5cdFx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsIF9mdWxsc2NyZW5BUEkuZXZlbnRLLCB1aS51cGRhdGVGdWxsc2NyZWVuKTtcblx0XHRcdFx0aWYoX2Z1bGxzY3JlbkFQSS5pc0Z1bGxzY3JlZW4oKSkge1xuXHRcdFx0XHRcdF9vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG5cdFx0XHRcdFx0X2Z1bGxzY3JlbkFQSS5leGl0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2Z1bGxzY3JlbkFQSSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdC8vIGNsZWFuIHVwIHRoaW5ncyB3aGVuIGdhbGxlcnkgaXMgZGVzdHJveWVkXG5cdFx0X2xpc3RlbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX29wdGlvbnMuY2FwdGlvbkVsKSB7XG5cdFx0XHRcdGlmKF9mYWtlQ2FwdGlvbkNvbnRhaW5lcikge1xuXHRcdFx0XHRcdF9jb250cm9scy5yZW1vdmVDaGlsZChfZmFrZUNhcHRpb25Db250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyhfY2FwdGlvbkNvbnRhaW5lciwgJ3Bzd3BfX2NhcHRpb24tLWVtcHR5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9zaGFyZU1vZGFsKSB7XG5cdFx0XHRcdF9zaGFyZU1vZGFsLmNoaWxkcmVuWzBdLm9uY2xpY2sgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9jb250cm9scywgJ3Bzd3BfX3VpLS1vdmVyLWNsb3NlJyk7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRcdHVpLnNldElkbGUoZmFsc2UpO1xuXHRcdH0pO1xuXHRcdFxuXG5cdFx0aWYoIV9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbikge1xuXHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0fVxuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW4nLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKF9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbikge1xuXHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3MoIF9jb250cm9scywgJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRfbGlzdGVuKCdpbml0aWFsWm9vbU91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnJhbWV3b3JrLmFkZENsYXNzKCBfY29udHJvbHMsICdwc3dwX191aS0taGlkZGVuJyk7XG5cdFx0fSk7XG5cblx0XHRfbGlzdGVuKCdwYXJzZVZlcnRpY2FsTWFyZ2luJywgX2FwcGx5TmF2QmFyR2Fwcyk7XG5cdFx0XG5cdFx0X3NldHVwVUlFbGVtZW50cygpO1xuXG5cdFx0aWYoX29wdGlvbnMuc2hhcmVFbCAmJiBfc2hhcmVCdXR0b24gJiYgX3NoYXJlTW9kYWwpIHtcblx0XHRcdF9zaGFyZU1vZGFsSGlkZGVuID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRfY291bnROdW1JdGVtcygpO1xuXG5cdFx0X3NldHVwSWRsZSgpO1xuXG5cdFx0X3NldHVwRnVsbHNjcmVlbkFQSSgpO1xuXG5cdFx0X3NldHVwTG9hZGluZ0luZGljYXRvcigpO1xuXHR9O1xuXG5cdHVpLnNldElkbGUgPSBmdW5jdGlvbihpc0lkbGUpIHtcblx0XHRfaXNJZGxlID0gaXNJZGxlO1xuXHRcdF90b2dnbGVQc3dwQ2xhc3MoX2NvbnRyb2xzLCAndWktLWlkbGUnLCBpc0lkbGUpO1xuXHR9O1xuXG5cdHVpLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIERvbid0IHVwZGF0ZSBVSSBpZiBpdCdzIGhpZGRlblxuXHRcdGlmKF9jb250cm9sc1Zpc2libGUgJiYgcHN3cC5jdXJySXRlbSkge1xuXHRcdFx0XG5cdFx0XHR1aS51cGRhdGVJbmRleEluZGljYXRvcigpO1xuXG5cdFx0XHRpZihfb3B0aW9ucy5jYXB0aW9uRWwpIHtcblx0XHRcdFx0X29wdGlvbnMuYWRkQ2FwdGlvbkhUTUxGbihwc3dwLmN1cnJJdGVtLCBfY2FwdGlvbkNvbnRhaW5lcik7XG5cblx0XHRcdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY2FwdGlvbkNvbnRhaW5lciwgJ2NhcHRpb24tLWVtcHR5JywgIXBzd3AuY3Vyckl0ZW0udGl0bGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRfb3ZlcmxheVVJVXBkYXRlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0X292ZXJsYXlVSVVwZGF0ZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZighX3NoYXJlTW9kYWxIaWRkZW4pIHtcblx0XHRcdF90b2dnbGVTaGFyZU1vZGFsKCk7XG5cdFx0fVxuXG5cdFx0X2NvdW50TnVtSXRlbXMoKTtcblx0fTtcblxuXHR1aS51cGRhdGVGdWxsc2NyZWVuID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0aWYoZSkge1xuXHRcdFx0Ly8gc29tZSBicm93c2VycyBjaGFuZ2Ugd2luZG93IHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgdGhlIGZ1bGxzY3JlZW5cblx0XHRcdC8vIHNvIFBob3RvU3dpcGUgdXBkYXRlcyBpdCBqdXN0IGluIGNhc2Vcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBzd3Auc2V0U2Nyb2xsT2Zmc2V0KCAwLCBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpICk7XG5cdFx0XHR9LCA1MCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHRvb2dsZSBwc3dwLS1mcyBjbGFzcyBvbiByb290IGVsZW1lbnRcblx0XHRmcmFtZXdvcmtbIChfZnVsbHNjcmVuQVBJLmlzRnVsbHNjcmVlbigpID8gJ2FkZCcgOiAncmVtb3ZlJykgKyAnQ2xhc3MnIF0ocHN3cC50ZW1wbGF0ZSwgJ3Bzd3AtLWZzJyk7XG5cdH07XG5cblx0dWkudXBkYXRlSW5kZXhJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfb3B0aW9ucy5jb3VudGVyRWwpIHtcblx0XHRcdF9pbmRleEluZGljYXRvci5pbm5lckhUTUwgPSAocHN3cC5nZXRDdXJyZW50SW5kZXgoKSsxKSArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfb3B0aW9ucy5pbmRleEluZGljYXRvclNlcCArIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfb3B0aW9ucy5nZXROdW1JdGVtc0ZuKCk7XG5cdFx0fVxuXHR9O1xuXHRcblx0dWkub25HbG9iYWxUYXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuXHRcdHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cblx0XHRpZihfYmxvY2tDb250cm9sc1RhcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKGUuZGV0YWlsICYmIGUuZGV0YWlsLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB7XG5cblx0XHRcdC8vIGNsb3NlIGdhbGxlcnkgaWYgY2xpY2tlZCBvdXRzaWRlIG9mIHRoZSBpbWFnZVxuXHRcdFx0aWYoX2hhc0Nsb3NlQ2xhc3ModGFyZ2V0KSkge1xuXHRcdFx0XHRwc3dwLmNsb3NlKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoZnJhbWV3b3JrLmhhc0NsYXNzKHRhcmdldCwgJ3Bzd3BfX2ltZycpKSB7XG5cdFx0XHRcdGlmKHBzd3AuZ2V0Wm9vbUxldmVsKCkgPT09IDEgJiYgcHN3cC5nZXRab29tTGV2ZWwoKSA8PSBwc3dwLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0aWYoX29wdGlvbnMuY2xpY2tUb0Nsb3NlTm9uWm9vbWFibGUpIHtcblx0XHRcdFx0XHRcdHBzd3AuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHN3cC50b2dnbGVEZXNrdG9wWm9vbShlLmRldGFpbC5yZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyB0YXAgYW55d2hlcmUgKGV4Y2VwdCBidXR0b25zKSB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiBjb250cm9sc1xuXHRcdFx0aWYoX29wdGlvbnMudGFwVG9Ub2dnbGVDb250cm9scykge1xuXHRcdFx0XHRpZihfY29udHJvbHNWaXNpYmxlKSB7XG5cdFx0XHRcdFx0dWkuaGlkZUNvbnRyb2xzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dWkuc2hvd0NvbnRyb2xzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gdGFwIHRvIGNsb3NlIGdhbGxlcnlcblx0XHRcdGlmKF9vcHRpb25zLnRhcFRvQ2xvc2UgJiYgKGZyYW1ld29yay5oYXNDbGFzcyh0YXJnZXQsICdwc3dwX19pbWcnKSB8fCBfaGFzQ2xvc2VDbGFzcyh0YXJnZXQpKSApIHtcblx0XHRcdFx0cHN3cC5jbG9zZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH07XG5cdHVpLm9uTW91c2VPdmVyID0gZnVuY3Rpb24oZSkge1xuXHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG5cdFx0Ly8gYWRkIGNsYXNzIHdoZW4gbW91c2UgaXMgb3ZlciBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGNsb3NlIHRoZSBnYWxsZXJ5XG5cdFx0X3RvZ2dsZVBzd3BDbGFzcyhfY29udHJvbHMsICd1aS0tb3Zlci1jbG9zZScsIF9oYXNDbG9zZUNsYXNzKHRhcmdldCkpO1xuXHR9O1xuXG5cdHVpLmhpZGVDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay5hZGRDbGFzcyhfY29udHJvbHMsJ3Bzd3BfX3VpLS1oaWRkZW4nKTtcblx0XHRfY29udHJvbHNWaXNpYmxlID0gZmFsc2U7XG5cdH07XG5cblx0dWkuc2hvd0NvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdFx0X2NvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG5cdFx0aWYoIV9vdmVybGF5VUlVcGRhdGVkKSB7XG5cdFx0XHR1aS51cGRhdGUoKTtcblx0XHR9XG5cdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKF9jb250cm9scywncHN3cF9fdWktLWhpZGRlbicpO1xuXHR9O1xuXG5cdHVpLnN1cHBvcnRzRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkID0gZG9jdW1lbnQ7XG5cdFx0cmV0dXJuICEhKGQuZXhpdEZ1bGxzY3JlZW4gfHwgZC5tb3pDYW5jZWxGdWxsU2NyZWVuIHx8IGQud2Via2l0RXhpdEZ1bGxzY3JlZW4gfHwgZC5tc0V4aXRGdWxsc2NyZWVuKTtcblx0fTtcblxuXHR1aS5nZXRGdWxsc2NyZWVuQVBJID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRFID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuXHRcdFx0YXBpLFxuXHRcdFx0dEYgPSAnZnVsbHNjcmVlbmNoYW5nZSc7XG5cblx0XHRpZiAoZEUucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ2V4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICdmdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogdEZcblx0XHRcdH07XG5cblx0XHR9IGVsc2UgaWYoZEUubW96UmVxdWVzdEZ1bGxTY3JlZW4gKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcblx0XHRcdFx0ZXhpdEs6ICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ21veicgKyB0RlxuXHRcdFx0fTtcblxuXHRcdFx0XG5cblx0XHR9IGVsc2UgaWYoZEUud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGFwaSA9IHtcblx0XHRcdFx0ZW50ZXJLOiAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHRcdFx0ZWxlbWVudEs6ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG5cdFx0XHRcdGV2ZW50SzogJ3dlYmtpdCcgKyB0RlxuXHRcdFx0fTtcblxuXHRcdH0gZWxzZSBpZihkRS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRhcGkgPSB7XG5cdFx0XHRcdGVudGVySzogJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRleGl0SzogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdFx0XHRlbGVtZW50SzogJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdFx0XHRldmVudEs6ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmKGFwaSkge1xuXHRcdFx0YXBpLmVudGVyID0gZnVuY3Rpb24oKSB7IFxuXHRcdFx0XHQvLyBkaXNhYmxlIGNsb3NlLW9uLXNjcm9sbCBpbiBmdWxsc2NyZWVuXG5cdFx0XHRcdF9pbml0YWxDbG9zZU9uU2Nyb2xsVmFsdWUgPSBfb3B0aW9ucy5jbG9zZU9uU2Nyb2xsOyBcblx0XHRcdFx0X29wdGlvbnMuY2xvc2VPblNjcm9sbCA9IGZhbHNlOyBcblxuXHRcdFx0XHRpZih0aGlzLmVudGVySyA9PT0gJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJykge1xuXHRcdFx0XHRcdHBzd3AudGVtcGxhdGVbdGhpcy5lbnRlcktdKCBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBzd3AudGVtcGxhdGVbdGhpcy5lbnRlcktdKCk7IFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0YXBpLmV4aXQgPSBmdW5jdGlvbigpIHsgXG5cdFx0XHRcdF9vcHRpb25zLmNsb3NlT25TY3JvbGwgPSBfaW5pdGFsQ2xvc2VPblNjcm9sbFZhbHVlO1xuXG5cdFx0XHRcdHJldHVybiBkb2N1bWVudFt0aGlzLmV4aXRLXSgpOyBcblxuXHRcdFx0fTtcblx0XHRcdGFwaS5pc0Z1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIGRvY3VtZW50W3RoaXMuZWxlbWVudEtdOyB9O1xuXHRcdH1cblxuXHRcdHJldHVybiBhcGk7XG5cdH07XG5cblxuXG59O1xucmV0dXJuIFBob3RvU3dpcGVVSV9EZWZhdWx0O1xuXG5cbn0pO1xuIiwiLyohIFBob3RvU3dpcGUgLSB2NC4xLjMgLSAyMDE5LTAxLTA4XG4qIGh0dHA6Ly9waG90b3N3aXBlLmNvbVxuKiBDb3B5cmlnaHQgKGMpIDIwMTkgRG1pdHJ5IFNlbWVub3Y7ICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHsgXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5QaG90b1N3aXBlID0gZmFjdG9yeSgpO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgUGhvdG9Td2lwZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBVaUNsYXNzLCBpdGVtcywgb3B0aW9ucyl7XG5cbi8qPj5mcmFtZXdvcmstYnJpZGdlKi9cbi8qKlxuICpcbiAqIFNldCBvZiBnZW5lcmljIGZ1bmN0aW9ucyB1c2VkIGJ5IGdhbGxlcnkuXG4gKiBcbiAqIFlvdSdyZSBmcmVlIHRvIG1vZGlmeSBhbnl0aGluZyBoZXJlIGFzIGxvbmcgYXMgZnVuY3Rpb25hbGl0eSBpcyBrZXB0LlxuICogXG4gKi9cbnZhciBmcmFtZXdvcmsgPSB7XG5cdGZlYXR1cmVzOiBudWxsLFxuXHRiaW5kOiBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB1bmJpbmQpIHtcblx0XHR2YXIgbWV0aG9kTmFtZSA9ICh1bmJpbmQgPyAncmVtb3ZlJyA6ICdhZGQnKSArICdFdmVudExpc3RlbmVyJztcblx0XHR0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlW2ldKSB7XG5cdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggdHlwZVtpXSwgbGlzdGVuZXIsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGlzQXJyYXk6IGZ1bmN0aW9uKG9iaikge1xuXHRcdHJldHVybiAob2JqIGluc3RhbmNlb2YgQXJyYXkpO1xuXHR9LFxuXHRjcmVhdGVFbDogZnVuY3Rpb24oY2xhc3NlcywgdGFnKSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcgfHwgJ2RpdicpO1xuXHRcdGlmKGNsYXNzZXMpIHtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fSxcblx0Z2V0U2Nyb2xsWTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0cmV0dXJuIHlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHlPZmZzZXQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcblx0XHRmcmFtZXdvcmsuYmluZCh0YXJnZXQsdHlwZSxsaXN0ZW5lcix0cnVlKTtcblx0fSxcblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcblx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNsYXNzTmFtZSArICcoXFxcXHN8JCknKTtcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJykucmVwbGFjZSgvXlxcc1xccyovLCAnJykucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7IFxuXHR9LFxuXHRhZGRDbGFzczogZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRcdGlmKCAhZnJhbWV3b3JrLmhhc0NsYXNzKGVsLGNsYXNzTmFtZSkgKSB7XG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gKGVsLmNsYXNzTmFtZSA/ICcgJyA6ICcnKSArIGNsYXNzTmFtZTtcblx0XHR9XG5cdH0sXG5cdGhhc0NsYXNzOiBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIGVsLmNsYXNzTmFtZSAmJiBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QoZWwuY2xhc3NOYW1lKTtcblx0fSxcblx0Z2V0Q2hpbGRCeUNsYXNzOiBmdW5jdGlvbihwYXJlbnRFbCwgY2hpbGRDbGFzc05hbWUpIHtcblx0XHR2YXIgbm9kZSA9IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUobm9kZSkge1xuXHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyhub2RlLCBjaGlsZENsYXNzTmFtZSkgKSB7XG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9LFxuXHRhcnJheVNlYXJjaDogZnVuY3Rpb24oYXJyYXksIHZhbHVlLCBrZXkpIHtcblx0XHR2YXIgaSA9IGFycmF5Lmxlbmd0aDtcblx0XHR3aGlsZShpLS0pIHtcblx0XHRcdGlmKGFycmF5W2ldW2tleV0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fSBcblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9LFxuXHRleHRlbmQ6IGZ1bmN0aW9uKG8xLCBvMiwgcHJldmVudE92ZXJ3cml0ZSkge1xuXHRcdGZvciAodmFyIHByb3AgaW4gbzIpIHtcblx0XHRcdGlmIChvMi5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRpZihwcmV2ZW50T3ZlcndyaXRlICYmIG8xLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bzFbcHJvcF0gPSBvMltwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGVhc2luZzoge1xuXHRcdHNpbmU6IHtcblx0XHRcdG91dDogZnVuY3Rpb24oaykge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIChNYXRoLlBJIC8gMikpO1xuXHRcdFx0fSxcblx0XHRcdGluT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtIChNYXRoLmNvcyhNYXRoLlBJICogaykgLSAxKSAvIDI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjdWJpYzoge1xuXHRcdFx0b3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qXG5cdFx0XHRlbGFzdGljOiB7XG5cdFx0XHRcdG91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRcdFx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtIDEwICogaykgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgMSApO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0YmFjazoge1xuXHRcdFx0XHRvdXQ6IGZ1bmN0aW9uICggayApIHtcblx0XHRcdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Ki9cblx0fSxcblxuXHQvKipcblx0ICogXG5cdCAqIEByZXR1cm4ge29iamVjdH1cblx0ICogXG5cdCAqIHtcblx0ICogIHJhZiA6IHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICBjYWYgOiBjYW5jZWwgYW5pbWF0aW9uIGZyYW1lIGZ1bmN0aW9uXG5cdCAqICB0cmFuc2Zyb20gOiB0cmFuc2Zvcm0gcHJvcGVydHkga2V5ICh3aXRoIHZlbmRvciksIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZFxuXHQgKiAgb2xkSUUgOiBJRTggb3IgYmVsb3dcblx0ICogfVxuXHQgKiBcblx0ICovXG5cdGRldGVjdEZlYXR1cmVzOiBmdW5jdGlvbigpIHtcblx0XHRpZihmcmFtZXdvcmsuZmVhdHVyZXMpIHtcblx0XHRcdHJldHVybiBmcmFtZXdvcmsuZmVhdHVyZXM7XG5cdFx0fVxuXHRcdHZhciBoZWxwZXJFbCA9IGZyYW1ld29yay5jcmVhdGVFbCgpLFxuXHRcdFx0aGVscGVyU3R5bGUgPSBoZWxwZXJFbC5zdHlsZSxcblx0XHRcdHZlbmRvciA9ICcnLFxuXHRcdFx0ZmVhdHVyZXMgPSB7fTtcblxuXHRcdC8vIElFOCBhbmQgYmVsb3dcblx0XHRmZWF0dXJlcy5vbGRJRSA9IGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtcblxuXHRcdGZlYXR1cmVzLnRvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXG5cdFx0aWYod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0ZmVhdHVyZXMucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHRcdGZlYXR1cmVzLmNhZiA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcblx0XHR9XG5cblx0XHRmZWF0dXJlcy5wb2ludGVyRXZlbnQgPSAhISh3aW5kb3cuUG9pbnRlckV2ZW50KSB8fCBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcblxuXHRcdC8vIGZpeCBmYWxzZS1wb3NpdGl2ZSBkZXRlY3Rpb24gb2Ygb2xkIEFuZHJvaWQgaW4gbmV3IElFXG5cdFx0Ly8gKElFMTEgdWEgc3RyaW5nIGNvbnRhaW5zIFwiQW5kcm9pZCA0LjBcIilcblx0XHRcblx0XHRpZighZmVhdHVyZXMucG9pbnRlckV2ZW50KSB7IFxuXG5cdFx0XHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdFx0XHQvLyBEZXRlY3QgaWYgZGV2aWNlIGlzIGlQaG9uZSBvciBpUG9kIGFuZCBpZiBpdCdzIG9sZGVyIHRoYW4gaU9TIDhcblx0XHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0MjIzOTIwXG5cdFx0XHQvLyBcblx0XHRcdC8vIFRoaXMgZGV0ZWN0aW9uIGlzIG1hZGUgYmVjYXVzZSBvZiBidWdneSB0b3AvYm90dG9tIHRvb2xiYXJzXG5cdFx0XHQvLyB0aGF0IGRvbid0IHRyaWdnZXIgd2luZG93LnJlc2l6ZSBldmVudC5cblx0XHRcdC8vIEZvciBtb3JlIGluZm8gcmVmZXIgdG8gX2lzRml4ZWRQb3NpdGlvbiB2YXJpYWJsZSBpbiBjb3JlLmpzXG5cblx0XHRcdGlmICgvaVAoaG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSkge1xuXHRcdFx0XHR2YXIgdiA9IChuYXZpZ2F0b3IuYXBwVmVyc2lvbikubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcblx0XHRcdFx0aWYodiAmJiB2Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2ID0gcGFyc2VJbnQodlsxXSwgMTApO1xuXHRcdFx0XHRcdGlmKHYgPj0gMSAmJiB2IDwgOCApIHtcblx0XHRcdFx0XHRcdGZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXRlY3Qgb2xkIEFuZHJvaWQgKGJlZm9yZSBLaXRLYXQpXG5cdFx0XHQvLyBkdWUgdG8gYnVncyByZWxhdGVkIHRvIHBvc2l0aW9uOmZpeGVkXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcxODQ1NzMvcGljay11cC10aGUtYW5kcm9pZC12ZXJzaW9uLWluLXRoZS1icm93c2VyLWJ5LWphdmFzY3JpcHRcblx0XHRcdFxuXHRcdFx0dmFyIG1hdGNoID0gdWEubWF0Y2goL0FuZHJvaWRcXHMoWzAtOVxcLl0qKS8pO1xuXHRcdFx0dmFyIGFuZHJvaWR2ZXJzaW9uID0gIG1hdGNoID8gbWF0Y2hbMV0gOiAwO1xuXHRcdFx0YW5kcm9pZHZlcnNpb24gPSBwYXJzZUZsb2F0KGFuZHJvaWR2ZXJzaW9uKTtcblx0XHRcdGlmKGFuZHJvaWR2ZXJzaW9uID49IDEgKSB7XG5cdFx0XHRcdGlmKGFuZHJvaWR2ZXJzaW9uIDwgNC40KSB7XG5cdFx0XHRcdFx0ZmVhdHVyZXMuaXNPbGRBbmRyb2lkID0gdHJ1ZTsgLy8gZm9yIGZpeGVkIHBvc2l0aW9uIGJ1ZyAmIHBlcmZvcm1hbmNlXG5cdFx0XHRcdH1cblx0XHRcdFx0ZmVhdHVyZXMuYW5kcm9pZFZlcnNpb24gPSBhbmRyb2lkdmVyc2lvbjsgLy8gZm9yIHRvdWNoZW5kIGJ1Z1xuXHRcdFx0fVx0XG5cdFx0XHRmZWF0dXJlcy5pc01vYmlsZU9wZXJhID0gL29wZXJhIG1pbml8b3BlcmEgbW9iaS9pLnRlc3QodWEpO1xuXG5cdFx0XHQvLyBwLnMuIHllcywgeWVzLCBVQSBzbmlmZmluZyBpcyBiYWQsIHByb3Bvc2UgeW91ciBzb2x1dGlvbiBmb3IgYWJvdmUgYnVncy5cblx0XHR9XG5cdFx0XG5cdFx0dmFyIHN0eWxlQ2hlY2tzID0gWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnLCAnYW5pbWF0aW9uTmFtZSddLFxuXHRcdFx0dmVuZG9ycyA9IFsnJywgJ3dlYmtpdCcsJ01veicsJ21zJywnTyddLFxuXHRcdFx0c3R5bGVDaGVja0l0ZW0sXG5cdFx0XHRzdHlsZU5hbWU7XG5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR2ZW5kb3IgPSB2ZW5kb3JzW2ldO1xuXG5cdFx0XHRmb3IodmFyIGEgPSAwOyBhIDwgMzsgYSsrKSB7XG5cdFx0XHRcdHN0eWxlQ2hlY2tJdGVtID0gc3R5bGVDaGVja3NbYV07XG5cblx0XHRcdFx0Ly8gdXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiBwcm9wZXJ0eSBuYW1lLCBpZiB2ZW5kb3IgaXMgcHJlc2VudFxuXHRcdFx0XHRzdHlsZU5hbWUgPSB2ZW5kb3IgKyAodmVuZG9yID8gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlQ2hlY2tJdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3R5bGVDaGVja0l0ZW0uc2xpY2UoMSkgOiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVDaGVja0l0ZW0pO1xuXHRcdFx0XG5cdFx0XHRcdGlmKCFmZWF0dXJlc1tzdHlsZUNoZWNrSXRlbV0gJiYgc3R5bGVOYW1lIGluIGhlbHBlclN0eWxlICkge1xuXHRcdFx0XHRcdGZlYXR1cmVzW3N0eWxlQ2hlY2tJdGVtXSA9IHN0eWxlTmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih2ZW5kb3IgJiYgIWZlYXR1cmVzLnJhZikge1xuXHRcdFx0XHR2ZW5kb3IgPSB2ZW5kb3IudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0ZmVhdHVyZXMucmFmID0gd2luZG93W3ZlbmRvcisnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0XHRcdGlmKGZlYXR1cmVzLnJhZikge1xuXHRcdFx0XHRcdGZlYXR1cmVzLmNhZiA9IHdpbmRvd1t2ZW5kb3IrJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3dbdmVuZG9yKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFxuXHRcdGlmKCFmZWF0dXJlcy5yYWYpIHtcblx0XHRcdHZhciBsYXN0VGltZSA9IDA7XG5cdFx0XHRmZWF0dXJlcy5yYWYgPSBmdW5jdGlvbihmbikge1xuXHRcdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0dmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG5cdFx0XHRcdHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBmbihjdXJyVGltZSArIHRpbWVUb0NhbGwpOyB9LCB0aW1lVG9DYWxsKTtcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH07XG5cdFx0XHRmZWF0dXJlcy5jYWYgPSBmdW5jdGlvbihpZCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBTVkcgc3VwcG9ydFxuXHRcdGZlYXR1cmVzLnN2ZyA9ICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmIFxuXHRcdFx0XHRcdFx0ISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3Q7XG5cblx0XHRmcmFtZXdvcmsuZmVhdHVyZXMgPSBmZWF0dXJlcztcblxuXHRcdHJldHVybiBmZWF0dXJlcztcblx0fVxufTtcblxuZnJhbWV3b3JrLmRldGVjdEZlYXR1cmVzKCk7XG5cbi8vIE92ZXJyaWRlIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG9sZCB2ZXJzaW9ucyBvZiBJRVxuaWYoZnJhbWV3b3JrLmZlYXR1cmVzLm9sZElFKSB7XG5cblx0ZnJhbWV3b3JrLmJpbmQgPSBmdW5jdGlvbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB1bmJpbmQpIHtcblx0XHRcblx0XHR0eXBlID0gdHlwZS5zcGxpdCgnICcpO1xuXG5cdFx0dmFyIG1ldGhvZE5hbWUgPSAodW5iaW5kID8gJ2RldGFjaCcgOiAnYXR0YWNoJykgKyAnRXZlbnQnLFxuXHRcdFx0ZXZOYW1lLFxuXHRcdFx0X2hhbmRsZUV2ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIpO1xuXHRcdFx0fTtcblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRldk5hbWUgPSB0eXBlW2ldO1xuXHRcdFx0aWYoZXZOYW1lKSB7XG5cblx0XHRcdFx0aWYodHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0JyAmJiBsaXN0ZW5lci5oYW5kbGVFdmVudCkge1xuXHRcdFx0XHRcdGlmKCF1bmJpbmQpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyWydvbGRJRScgKyBldk5hbWVdID0gX2hhbmRsZUV2O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZighbGlzdGVuZXJbJ29sZElFJyArIGV2TmFtZV0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggJ29uJyArIGV2TmFtZSwgbGlzdGVuZXJbJ29sZElFJyArIGV2TmFtZV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFttZXRob2ROYW1lXSggJ29uJyArIGV2TmFtZSwgbGlzdGVuZXIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdFxufVxuXG4vKj4+ZnJhbWV3b3JrLWJyaWRnZSovXG5cbi8qPj5jb3JlKi9cbi8vZnVuY3Rpb24odGVtcGxhdGUsIFVpQ2xhc3MsIGl0ZW1zLCBvcHRpb25zKVxuXG52YXIgc2VsZiA9IHRoaXM7XG5cbi8qKlxuICogU3RhdGljIHZhcnMsIGRvbid0IGNoYW5nZSB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gKi9cbnZhciBET1VCTEVfVEFQX1JBRElVUyA9IDI1LCBcblx0TlVNX0hPTERFUlMgPSAzO1xuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xudmFyIF9vcHRpb25zID0ge1xuXHRhbGxvd1BhblRvTmV4dDp0cnVlLFxuXHRzcGFjaW5nOiAwLjEyLFxuXHRiZ09wYWNpdHk6IDEsXG5cdG1vdXNlVXNlZDogZmFsc2UsXG5cdGxvb3A6IHRydWUsXG5cdHBpbmNoVG9DbG9zZTogdHJ1ZSxcblx0Y2xvc2VPblNjcm9sbDogdHJ1ZSxcblx0Y2xvc2VPblZlcnRpY2FsRHJhZzogdHJ1ZSxcblx0dmVydGljYWxEcmFnUmFuZ2U6IDAuNzUsXG5cdGhpZGVBbmltYXRpb25EdXJhdGlvbjogMzMzLFxuXHRzaG93QW5pbWF0aW9uRHVyYXRpb246IDMzMyxcblx0c2hvd0hpZGVPcGFjaXR5OiBmYWxzZSxcblx0Zm9jdXM6IHRydWUsXG5cdGVzY0tleTogdHJ1ZSxcblx0YXJyb3dLZXlzOiB0cnVlLFxuXHRtYWluU2Nyb2xsRW5kRnJpY3Rpb246IDAuMzUsXG5cdHBhbkVuZEZyaWN0aW9uOiAwLjM1LFxuXHRpc0NsaWNrYWJsZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnQSc7XG4gICAgfSxcbiAgICBnZXREb3VibGVUYXBab29tOiBmdW5jdGlvbihpc01vdXNlQ2xpY2ssIGl0ZW0pIHtcbiAgICBcdGlmKGlzTW91c2VDbGljaykge1xuICAgIFx0XHRyZXR1cm4gMTtcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBpdGVtLmluaXRpYWxab29tTGV2ZWwgPCAwLjcgPyAxIDogMS4zMztcbiAgICBcdH1cbiAgICB9LFxuICAgIG1heFNwcmVhZFpvb206IDEuMzMsXG5cdG1vZGFsOiB0cnVlLFxuXG5cdC8vIG5vdCBmdWxseSBpbXBsZW1lbnRlZCB5ZXRcblx0c2NhbGVNb2RlOiAnZml0JyAvLyBUT0RPXG59O1xuZnJhbWV3b3JrLmV4dGVuZChfb3B0aW9ucywgb3B0aW9ucyk7XG5cblxuLyoqXG4gKiBQcml2YXRlIGhlbHBlciB2YXJpYWJsZXMgJiBmdW5jdGlvbnNcbiAqL1xuXG52YXIgX2dldEVtcHR5UG9pbnQgPSBmdW5jdGlvbigpIHsgXG5cdFx0cmV0dXJuIHt4OjAseTowfTsgXG5cdH07XG5cbnZhciBfaXNPcGVuLFxuXHRfaXNEZXN0cm95aW5nLFxuXHRfY2xvc2VkQnlTY3JvbGwsXG5cdF9jdXJyZW50SXRlbUluZGV4LFxuXHRfY29udGFpbmVyU3R5bGUsXG5cdF9jb250YWluZXJTaGlmdEluZGV4LFxuXHRfY3VyclBhbkRpc3QgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfc3RhcnRQYW5PZmZzZXQgPSBfZ2V0RW1wdHlQb2ludCgpLFxuXHRfcGFuT2Zmc2V0ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X3VwTW92ZUV2ZW50cywgLy8gZHJhZyBtb3ZlLCBkcmFnIGVuZCAmIGRyYWcgY2FuY2VsIGV2ZW50cyBhcnJheVxuXHRfZG93bkV2ZW50cywgLy8gZHJhZyBzdGFydCBldmVudHMgYXJyYXlcblx0X2dsb2JhbEV2ZW50SGFuZGxlcnMsXG5cdF92aWV3cG9ydFNpemUgPSB7fSxcblx0X2N1cnJab29tTGV2ZWwsXG5cdF9zdGFydFpvb21MZXZlbCxcblx0X3RyYW5zbGF0ZVByZWZpeCxcblx0X3RyYW5zbGF0ZVN1Zml4LFxuXHRfdXBkYXRlU2l6ZUludGVydmFsLFxuXHRfaXRlbXNOZWVkVXBkYXRlLFxuXHRfY3VyclBvc2l0aW9uSW5kZXggPSAwLFxuXHRfb2Zmc2V0ID0ge30sXG5cdF9zbGlkZVNpemUgPSBfZ2V0RW1wdHlQb2ludCgpLCAvLyBzaXplIG9mIHNsaWRlIGFyZWEsIGluY2x1ZGluZyBzcGFjaW5nXG5cdF9pdGVtSG9sZGVycyxcblx0X3ByZXZJdGVtSW5kZXgsXG5cdF9pbmRleERpZmYgPSAwLCAvLyBkaWZmZXJlbmNlIG9mIGluZGV4ZXMgc2luY2UgbGFzdCBjb250ZW50IHVwZGF0ZVxuXHRfZHJhZ1N0YXJ0RXZlbnQsXG5cdF9kcmFnTW92ZUV2ZW50LFxuXHRfZHJhZ0VuZEV2ZW50LFxuXHRfZHJhZ0NhbmNlbEV2ZW50LFxuXHRfdHJhbnNmb3JtS2V5LFxuXHRfcG9pbnRlckV2ZW50RW5hYmxlZCxcblx0X2lzRml4ZWRQb3NpdGlvbiA9IHRydWUsXG5cdF9saWtlbHlUb3VjaERldmljZSxcblx0X21vZHVsZXMgPSBbXSxcblx0X3JlcXVlc3RBRixcblx0X2NhbmNlbEFGLFxuXHRfaW5pdGFsQ2xhc3NOYW1lLFxuXHRfaW5pdGFsV2luZG93U2Nyb2xsWSxcblx0X29sZElFLFxuXHRfY3VycmVudFdpbmRvd1Njcm9sbFksXG5cdF9mZWF0dXJlcyxcblx0X3dpbmRvd1Zpc2libGVTaXplID0ge30sXG5cdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gZmFsc2UsXG5cdF9vcmllbnRhdGlvbkNoYW5nZVRpbWVvdXQsXG5cblxuXHQvLyBSZWdpc3RlcnMgUGhvdG9TV2lwZSBtb2R1bGUgKEhpc3RvcnksIENvbnRyb2xsZXIgLi4uKVxuXHRfcmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbihuYW1lLCBtb2R1bGUpIHtcblx0XHRmcmFtZXdvcmsuZXh0ZW5kKHNlbGYsIG1vZHVsZS5wdWJsaWNNZXRob2RzKTtcblx0XHRfbW9kdWxlcy5wdXNoKG5hbWUpO1xuXHR9LFxuXG5cdF9nZXRMb29wZWRJZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIG51bVNsaWRlcyA9IF9nZXROdW1JdGVtcygpO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0XG5cdC8vIE1pY3JvIGJpbmQvdHJpZ2dlclxuXHRfbGlzdGVuZXJzID0ge30sXG5cdF9saXN0ZW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRcdGlmKCFfbGlzdGVuZXJzW25hbWVdKSB7XG5cdFx0XHRfbGlzdGVuZXJzW25hbWVdID0gW107XG5cdFx0fVxuXHRcdHJldHVybiBfbGlzdGVuZXJzW25hbWVdLnB1c2goZm4pO1xuXHR9LFxuXHRfc2hvdXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0dmFyIGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbbmFtZV07XG5cblx0XHRpZihsaXN0ZW5lcnMpIHtcblx0XHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHRcdGFyZ3Muc2hpZnQoKTtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsaXN0ZW5lcnNbaV0uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdF9nZXRDdXJyZW50VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fSxcblx0X2FwcGx5QmdPcGFjaXR5ID0gZnVuY3Rpb24ob3BhY2l0eSkge1xuXHRcdF9iZ09wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdHNlbGYuYmcuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHkgKiBfb3B0aW9ucy5iZ09wYWNpdHk7XG5cdH0sXG5cblx0X2FwcGx5Wm9vbVRyYW5zZm9ybSA9IGZ1bmN0aW9uKHN0eWxlT2JqLHgseSx6b29tLGl0ZW0pIHtcblx0XHRpZighX3JlbmRlck1heFJlc29sdXRpb24gfHwgKGl0ZW0gJiYgaXRlbSAhPT0gc2VsZi5jdXJySXRlbSkgKSB7XG5cdFx0XHR6b29tID0gem9vbSAvIChpdGVtID8gaXRlbS5maXRSYXRpbyA6IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pO1x0XG5cdFx0fVxuXHRcdFx0XG5cdFx0c3R5bGVPYmpbX3RyYW5zZm9ybUtleV0gPSBfdHJhbnNsYXRlUHJlZml4ICsgeCArICdweCwgJyArIHkgKyAncHgnICsgX3RyYW5zbGF0ZVN1Zml4ICsgJyBzY2FsZSgnICsgem9vbSArICcpJztcblx0fSxcblx0X2FwcGx5Q3VycmVudFpvb21QYW4gPSBmdW5jdGlvbiggYWxsb3dSZW5kZXJSZXNvbHV0aW9uICkge1xuXHRcdGlmKF9jdXJyWm9vbUVsZW1lbnRTdHlsZSkge1xuXG5cdFx0XHRpZihhbGxvd1JlbmRlclJlc29sdXRpb24pIHtcblx0XHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0aWYoIV9yZW5kZXJNYXhSZXNvbHV0aW9uKSB7XG5cdFx0XHRcdFx0XHRfc2V0SW1hZ2VTaXplKHNlbGYuY3Vyckl0ZW0sIGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdF9yZW5kZXJNYXhSZXNvbHV0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYoX3JlbmRlck1heFJlc29sdXRpb24pIHtcblx0XHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoc2VsZi5jdXJySXRlbSk7XG5cdFx0XHRcdFx0XHRfcmVuZGVyTWF4UmVzb2x1dGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHRcdF9hcHBseVpvb21UcmFuc2Zvcm0oX2N1cnJab29tRWxlbWVudFN0eWxlLCBfcGFuT2Zmc2V0LngsIF9wYW5PZmZzZXQueSwgX2N1cnJab29tTGV2ZWwpO1xuXHRcdH1cblx0fSxcblx0X2FwcGx5Wm9vbVBhblRvSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZihpdGVtLmNvbnRhaW5lcikge1xuXG5cdFx0XHRfYXBwbHlab29tVHJhbnNmb3JtKGl0ZW0uY29udGFpbmVyLnN0eWxlLCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbi54LCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxQb3NpdGlvbi55LCBcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwsXG5cdFx0XHRcdFx0XHRcdFx0aXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKHgsIGVsU3R5bGUpIHtcblx0XHRlbFN0eWxlW190cmFuc2Zvcm1LZXldID0gX3RyYW5zbGF0ZVByZWZpeCArIHggKyAncHgsIDBweCcgKyBfdHJhbnNsYXRlU3VmaXg7XG5cdH0sXG5cdF9tb3ZlTWFpblNjcm9sbCA9IGZ1bmN0aW9uKHgsIGRyYWdnaW5nKSB7XG5cblx0XHRpZighX29wdGlvbnMubG9vcCAmJiBkcmFnZ2luZykge1xuXHRcdFx0dmFyIG5ld1NsaWRlSW5kZXhPZmZzZXQgPSBfY3VycmVudEl0ZW1JbmRleCArIChfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXggLSB4KSAvIF9zbGlkZVNpemUueCxcblx0XHRcdFx0ZGVsdGEgPSBNYXRoLnJvdW5kKHggLSBfbWFpblNjcm9sbFBvcy54KTtcblxuXHRcdFx0aWYoIChuZXdTbGlkZUluZGV4T2Zmc2V0IDwgMCAmJiBkZWx0YSA+IDApIHx8IFxuXHRcdFx0XHQobmV3U2xpZGVJbmRleE9mZnNldCA+PSBfZ2V0TnVtSXRlbXMoKSAtIDEgJiYgZGVsdGEgPCAwKSApIHtcblx0XHRcdFx0eCA9IF9tYWluU2Nyb2xsUG9zLnggKyBkZWx0YSAqIF9vcHRpb25zLm1haW5TY3JvbGxFbmRGcmljdGlvbjtcblx0XHRcdH0gXG5cdFx0fVxuXHRcdFxuXHRcdF9tYWluU2Nyb2xsUG9zLnggPSB4O1xuXHRcdF9zZXRUcmFuc2xhdGVYKHgsIF9jb250YWluZXJTdHlsZSk7XG5cdH0sXG5cdF9jYWxjdWxhdGVQYW5PZmZzZXQgPSBmdW5jdGlvbihheGlzLCB6b29tTGV2ZWwpIHtcblx0XHR2YXIgbSA9IF9taWRab29tUG9pbnRbYXhpc10gLSBfb2Zmc2V0W2F4aXNdO1xuXHRcdHJldHVybiBfc3RhcnRQYW5PZmZzZXRbYXhpc10gKyBfY3VyclBhbkRpc3RbYXhpc10gKyBtIC0gbSAqICggem9vbUxldmVsIC8gX3N0YXJ0Wm9vbUxldmVsICk7XG5cdH0sXG5cdFxuXHRfZXF1YWxpemVQb2ludHMgPSBmdW5jdGlvbihwMSwgcDIpIHtcblx0XHRwMS54ID0gcDIueDtcblx0XHRwMS55ID0gcDIueTtcblx0XHRpZihwMi5pZCkge1xuXHRcdFx0cDEuaWQgPSBwMi5pZDtcblx0XHR9XG5cdH0sXG5cdF9yb3VuZFBvaW50ID0gZnVuY3Rpb24ocCkge1xuXHRcdHAueCA9IE1hdGgucm91bmQocC54KTtcblx0XHRwLnkgPSBNYXRoLnJvdW5kKHAueSk7XG5cdH0sXG5cblx0X21vdXNlTW92ZVRpbWVvdXQgPSBudWxsLFxuXHRfb25GaXJzdE1vdXNlTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFdhaXQgdW50aWwgbW91c2UgbW92ZSBldmVudCBpcyBmaXJlZCBhdCBsZWFzdCB0d2ljZSBkdXJpbmcgMTAwbXNcblx0XHQvLyBXZSBkbyB0aGlzLCBiZWNhdXNlIHNvbWUgbW9iaWxlIGJyb3dzZXJzIHRyaWdnZXIgaXQgb24gdG91Y2hzdGFydFxuXHRcdGlmKF9tb3VzZU1vdmVUaW1lb3V0ICkgeyBcblx0XHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfb25GaXJzdE1vdXNlTW92ZSk7XG5cdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1oYXNfbW91c2UnKTtcblx0XHRcdF9vcHRpb25zLm1vdXNlVXNlZCA9IHRydWU7XG5cdFx0XHRfc2hvdXQoJ21vdXNlVXNlZCcpO1xuXHRcdH1cblx0XHRfbW91c2VNb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRfbW91c2VNb3ZlVGltZW91dCA9IG51bGw7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRfYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGZyYW1ld29yay5iaW5kKGRvY3VtZW50LCAna2V5ZG93bicsIHNlbGYpO1xuXG5cdFx0aWYoX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0Ly8gZG9uJ3QgYmluZCBjbGljayBldmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdHJhbnNmb3JtIChtb3N0bHkgSUU4KVxuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoc2VsZi5zY3JvbGxXcmFwLCAnY2xpY2snLCBzZWxmKTtcblx0XHR9XG5cdFx0XG5cblx0XHRpZighX29wdGlvbnMubW91c2VVc2VkKSB7XG5cdFx0XHRmcmFtZXdvcmsuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbkZpcnN0TW91c2VNb3ZlKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsuYmluZCh3aW5kb3csICdyZXNpemUgc2Nyb2xsIG9yaWVudGF0aW9uY2hhbmdlJywgc2VsZik7XG5cblx0XHRfc2hvdXQoJ2JpbmRFdmVudHMnKTtcblx0fSxcblxuXHRfdW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdyZXNpemUgc2Nyb2xsIG9yaWVudGF0aW9uY2hhbmdlJywgc2VsZik7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdzY3JvbGwnLCBfZ2xvYmFsRXZlbnRIYW5kbGVycy5zY3JvbGwpO1xuXHRcdGZyYW1ld29yay51bmJpbmQoZG9jdW1lbnQsICdrZXlkb3duJywgc2VsZik7XG5cdFx0ZnJhbWV3b3JrLnVuYmluZChkb2N1bWVudCwgJ21vdXNlbW92ZScsIF9vbkZpcnN0TW91c2VNb3ZlKTtcblxuXHRcdGlmKF9mZWF0dXJlcy50cmFuc2Zvcm0pIHtcblx0XHRcdGZyYW1ld29yay51bmJpbmQoc2VsZi5zY3JvbGxXcmFwLCAnY2xpY2snLCBzZWxmKTtcblx0XHR9XG5cblx0XHRpZihfaXNEcmFnZ2luZykge1xuXHRcdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csIF91cE1vdmVFdmVudHMsIHNlbGYpO1xuXHRcdH1cblxuXHRcdGNsZWFyVGltZW91dChfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0KTtcblxuXHRcdF9zaG91dCgndW5iaW5kRXZlbnRzJyk7XG5cdH0sXG5cdFxuXHRfY2FsY3VsYXRlUGFuQm91bmRzID0gZnVuY3Rpb24oem9vbUxldmVsLCB1cGRhdGUpIHtcblx0XHR2YXIgYm91bmRzID0gX2NhbGN1bGF0ZUl0ZW1TaXplKCBzZWxmLmN1cnJJdGVtLCBfdmlld3BvcnRTaXplLCB6b29tTGV2ZWwgKTtcblx0XHRpZih1cGRhdGUpIHtcblx0XHRcdF9jdXJyUGFuQm91bmRzID0gYm91bmRzO1xuXHRcdH1cblx0XHRyZXR1cm4gYm91bmRzO1xuXHR9LFxuXHRcblx0X2dldE1pblpvb21MZXZlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRpZighaXRlbSkge1xuXHRcdFx0aXRlbSA9IHNlbGYuY3Vyckl0ZW07XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdH0sXG5cdF9nZXRNYXhab29tTGV2ZWwgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoIWl0ZW0pIHtcblx0XHRcdGl0ZW0gPSBzZWxmLmN1cnJJdGVtO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbS53ID4gMCA/IF9vcHRpb25zLm1heFNwcmVhZFpvb20gOiAxO1xuXHR9LFxuXG5cdC8vIFJldHVybiB0cnVlIGlmIG9mZnNldCBpcyBvdXQgb2YgdGhlIGJvdW5kc1xuXHRfbW9kaWZ5RGVzdFBhbk9mZnNldCA9IGZ1bmN0aW9uKGF4aXMsIGRlc3RQYW5Cb3VuZHMsIGRlc3RQYW5PZmZzZXQsIGRlc3Rab29tTGV2ZWwpIHtcblx0XHRpZihkZXN0Wm9vbUxldmVsID09PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdGRlc3RQYW5PZmZzZXRbYXhpc10gPSBzZWxmLmN1cnJJdGVtLmluaXRpYWxQb3NpdGlvbltheGlzXTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gX2NhbGN1bGF0ZVBhbk9mZnNldChheGlzLCBkZXN0Wm9vbUxldmVsKTsgXG5cblx0XHRcdGlmKGRlc3RQYW5PZmZzZXRbYXhpc10gPiBkZXN0UGFuQm91bmRzLm1pbltheGlzXSkge1xuXHRcdFx0XHRkZXN0UGFuT2Zmc2V0W2F4aXNdID0gZGVzdFBhbkJvdW5kcy5taW5bYXhpc107XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmKGRlc3RQYW5PZmZzZXRbYXhpc10gPCBkZXN0UGFuQm91bmRzLm1heFtheGlzXSApIHtcblx0XHRcdFx0ZGVzdFBhbk9mZnNldFtheGlzXSA9IGRlc3RQYW5Cb3VuZHMubWF4W2F4aXNdO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9zZXR1cFRyYW5zZm9ybXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF90cmFuc2Zvcm1LZXkpIHtcblx0XHRcdC8vIHNldHVwIDNkIHRyYW5zZm9ybXNcblx0XHRcdHZhciBhbGxvdzNkVHJhbnNmb3JtID0gX2ZlYXR1cmVzLnBlcnNwZWN0aXZlICYmICFfbGlrZWx5VG91Y2hEZXZpY2U7XG5cdFx0XHRfdHJhbnNsYXRlUHJlZml4ID0gJ3RyYW5zbGF0ZScgKyAoYWxsb3czZFRyYW5zZm9ybSA/ICczZCgnIDogJygnKTtcblx0XHRcdF90cmFuc2xhdGVTdWZpeCA9IF9mZWF0dXJlcy5wZXJzcGVjdGl2ZSA/ICcsIDBweCknIDogJyknO1x0XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT3ZlcnJpZGUgem9vbS9wYW4vbW92ZSBmdW5jdGlvbnMgaW4gY2FzZSBvbGQgYnJvd3NlciBpcyB1c2VkIChtb3N0IGxpa2VseSBJRSlcblx0XHQvLyAoc28gdGhleSB1c2UgbGVmdC90b3Avd2lkdGgvaGVpZ2h0LCBpbnN0ZWFkIG9mIENTUyB0cmFuc2Zvcm0pXG5cdFxuXHRcdF90cmFuc2Zvcm1LZXkgPSAnbGVmdCc7XG5cdFx0ZnJhbWV3b3JrLmFkZENsYXNzKHRlbXBsYXRlLCAncHN3cC0taWUnKTtcblxuXHRcdF9zZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24oeCwgZWxTdHlsZSkge1xuXHRcdFx0ZWxTdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0fTtcblx0XHRfYXBwbHlab29tUGFuVG9JdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgem9vbVJhdGlvID0gaXRlbS5maXRSYXRpbyA+IDEgPyAxIDogaXRlbS5maXRSYXRpbyxcblx0XHRcdFx0cyA9IGl0ZW0uY29udGFpbmVyLnN0eWxlLFxuXHRcdFx0XHR3ID0gem9vbVJhdGlvICogaXRlbS53LFxuXHRcdFx0XHRoID0gem9vbVJhdGlvICogaXRlbS5oO1xuXG5cdFx0XHRzLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRzLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFx0cy5sZWZ0ID0gaXRlbS5pbml0aWFsUG9zaXRpb24ueCArICdweCc7XG5cdFx0XHRzLnRvcCA9IGl0ZW0uaW5pdGlhbFBvc2l0aW9uLnkgKyAncHgnO1xuXG5cdFx0fTtcblx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoX2N1cnJab29tRWxlbWVudFN0eWxlKSB7XG5cblx0XHRcdFx0dmFyIHMgPSBfY3Vyclpvb21FbGVtZW50U3R5bGUsXG5cdFx0XHRcdFx0aXRlbSA9IHNlbGYuY3Vyckl0ZW0sXG5cdFx0XHRcdFx0em9vbVJhdGlvID0gaXRlbS5maXRSYXRpbyA+IDEgPyAxIDogaXRlbS5maXRSYXRpbyxcblx0XHRcdFx0XHR3ID0gem9vbVJhdGlvICogaXRlbS53LFxuXHRcdFx0XHRcdGggPSB6b29tUmF0aW8gKiBpdGVtLmg7XG5cblx0XHRcdFx0cy53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0XHRzLmhlaWdodCA9IGggKyAncHgnO1xuXG5cblx0XHRcdFx0cy5sZWZ0ID0gX3Bhbk9mZnNldC54ICsgJ3B4Jztcblx0XHRcdFx0cy50b3AgPSBfcGFuT2Zmc2V0LnkgKyAncHgnO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fTtcblx0fSxcblxuXHRfb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBrZXlkb3duQWN0aW9uID0gJyc7XG5cdFx0aWYoX29wdGlvbnMuZXNjS2V5ICYmIGUua2V5Q29kZSA9PT0gMjcpIHsgXG5cdFx0XHRrZXlkb3duQWN0aW9uID0gJ2Nsb3NlJztcblx0XHR9IGVsc2UgaWYoX29wdGlvbnMuYXJyb3dLZXlzKSB7XG5cdFx0XHRpZihlLmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRcdGtleWRvd25BY3Rpb24gPSAncHJldic7XG5cdFx0XHR9IGVsc2UgaWYoZS5rZXlDb2RlID09PSAzOSkgeyBcblx0XHRcdFx0a2V5ZG93bkFjdGlvbiA9ICduZXh0Jztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihrZXlkb3duQWN0aW9uKSB7XG5cdFx0XHQvLyBkb24ndCBkbyBhbnl0aGluZyBpZiBzcGVjaWFsIGtleSBwcmVzc2VkIHRvIHByZXZlbnQgZnJvbSBvdmVycmlkaW5nIGRlZmF1bHQgYnJvd3NlciBhY3Rpb25zXG5cdFx0XHQvLyBlLmcuIGluIENocm9tZSBvbiBNYWMgY21kK2Fycm93LWxlZnQgcmV0dXJucyB0byBwcmV2aW91cyBwYWdlXG5cdFx0XHRpZiggIWUuY3RybEtleSAmJiAhZS5hbHRLZXkgJiYgIWUuc2hpZnRLZXkgJiYgIWUubWV0YUtleSApIHtcblx0XHRcdFx0aWYoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0XHRcdH0gXG5cdFx0XHRcdHNlbGZba2V5ZG93bkFjdGlvbl0oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0X29uR2xvYmFsQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBkb24ndCBhbGxvdyBjbGljayBldmVudCB0byBwYXNzIHRocm91Z2ggd2hlbiB0cmlnZ2VyaW5nIGFmdGVyIGRyYWcgb3Igc29tZSBvdGhlciBnZXN0dXJlXG5cdFx0aWYoX21vdmVkIHx8IF96b29tU3RhcnRlZCB8fCBfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfdmVydGljYWxEcmFnSW5pdGlhdGVkKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblxuXHRfdXBkYXRlUGFnZVNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuc2V0U2Nyb2xsT2Zmc2V0KDAsIGZyYW1ld29yay5nZXRTY3JvbGxZKCkpO1x0XHRcblx0fTtcblx0XG5cblxuXHRcblxuXG5cbi8vIE1pY3JvIGFuaW1hdGlvbiBlbmdpbmVcbnZhciBfYW5pbWF0aW9ucyA9IHt9LFxuXHRfbnVtQW5pbWF0aW9ucyA9IDAsXG5cdF9zdG9wQW5pbWF0aW9uID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdGlmKF9hbmltYXRpb25zW25hbWVdKSB7XG5cdFx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXS5yYWYpIHtcblx0XHRcdFx0X2NhbmNlbEFGKCBfYW5pbWF0aW9uc1tuYW1lXS5yYWYgKTtcblx0XHRcdH1cblx0XHRcdF9udW1BbmltYXRpb25zLS07XG5cdFx0XHRkZWxldGUgX2FuaW1hdGlvbnNbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfcmVnaXN0ZXJTdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRpZihfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0X3N0b3BBbmltYXRpb24obmFtZSk7XG5cdFx0fVxuXHRcdGlmKCFfYW5pbWF0aW9uc1tuYW1lXSkge1xuXHRcdFx0X251bUFuaW1hdGlvbnMrKztcblx0XHRcdF9hbmltYXRpb25zW25hbWVdID0ge307XG5cdFx0fVxuXHR9LFxuXHRfc3RvcEFsbEFuaW1hdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBwcm9wIGluIF9hbmltYXRpb25zKSB7XG5cblx0XHRcdGlmKCBfYW5pbWF0aW9ucy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuXHRcdFx0XHRfc3RvcEFuaW1hdGlvbihwcm9wKTtcblx0XHRcdH0gXG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdF9hbmltYXRlUHJvcCA9IGZ1bmN0aW9uKG5hbWUsIGIsIGVuZFByb3AsIGQsIGVhc2luZ0ZuLCBvblVwZGF0ZSwgb25Db21wbGV0ZSkge1xuXHRcdHZhciBzdGFydEFuaW1UaW1lID0gX2dldEN1cnJlbnRUaW1lKCksIHQ7XG5cdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24obmFtZSk7XG5cblx0XHR2YXIgYW5pbWxvb3AgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCBfYW5pbWF0aW9uc1tuYW1lXSApIHtcblx0XHRcdFx0XG5cdFx0XHRcdHQgPSBfZ2V0Q3VycmVudFRpbWUoKSAtIHN0YXJ0QW5pbVRpbWU7IC8vIHRpbWUgZGlmZlxuXHRcdFx0XHQvL2IgLSBiZWdpbm5pbmcgKHN0YXJ0IHByb3ApXG5cdFx0XHRcdC8vZCAtIGFuaW0gZHVyYXRpb25cblxuXHRcdFx0XHRpZiAoIHQgPj0gZCApIHtcblx0XHRcdFx0XHRfc3RvcEFuaW1hdGlvbihuYW1lKTtcblx0XHRcdFx0XHRvblVwZGF0ZShlbmRQcm9wKTtcblx0XHRcdFx0XHRpZihvbkNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRvblVwZGF0ZSggKGVuZFByb3AgLSBiKSAqIGVhc2luZ0ZuKHQvZCkgKyBiICk7XG5cblx0XHRcdFx0X2FuaW1hdGlvbnNbbmFtZV0ucmFmID0gX3JlcXVlc3RBRihhbmltbG9vcCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRhbmltbG9vcCgpO1xuXHR9O1xuXHRcblxuXG52YXIgcHVibGljTWV0aG9kcyA9IHtcblxuXHQvLyBtYWtlIGEgZmV3IGxvY2FsIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zIHB1YmxpY1xuXHRzaG91dDogX3Nob3V0LFxuXHRsaXN0ZW46IF9saXN0ZW4sXG5cdHZpZXdwb3J0U2l6ZTogX3ZpZXdwb3J0U2l6ZSxcblx0b3B0aW9uczogX29wdGlvbnMsXG5cblx0aXNNYWluU2Nyb2xsQW5pbWF0aW5nOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX21haW5TY3JvbGxBbmltYXRpbmc7XG5cdH0sXG5cdGdldFpvb21MZXZlbDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9jdXJyWm9vbUxldmVsO1xuXHR9LFxuXHRnZXRDdXJyZW50SW5kZXg6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfY3VycmVudEl0ZW1JbmRleDtcblx0fSxcblx0aXNEcmFnZ2luZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9pc0RyYWdnaW5nO1xuXHR9LFx0XG5cdGlzWm9vbWluZzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9pc1pvb21pbmc7XG5cdH0sXG5cdHNldFNjcm9sbE9mZnNldDogZnVuY3Rpb24oeCx5KSB7XG5cdFx0X29mZnNldC54ID0geDtcblx0XHRfY3VycmVudFdpbmRvd1Njcm9sbFkgPSBfb2Zmc2V0LnkgPSB5O1xuXHRcdF9zaG91dCgndXBkYXRlU2Nyb2xsT2Zmc2V0JywgX29mZnNldCk7XG5cdH0sXG5cdGFwcGx5Wm9vbVBhbjogZnVuY3Rpb24oem9vbUxldmVsLHBhblgscGFuWSxhbGxvd1JlbmRlclJlc29sdXRpb24pIHtcblx0XHRfcGFuT2Zmc2V0LnggPSBwYW5YO1xuXHRcdF9wYW5PZmZzZXQueSA9IHBhblk7XG5cdFx0X2N1cnJab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oIGFsbG93UmVuZGVyUmVzb2x1dGlvbiApO1xuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYoX2lzT3BlbiB8fCBfaXNEZXN0cm95aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGk7XG5cblx0XHRzZWxmLmZyYW1ld29yayA9IGZyYW1ld29yazsgLy8gYmFzaWMgZnVuY3Rpb25hbGl0eVxuXHRcdHNlbGYudGVtcGxhdGUgPSB0ZW1wbGF0ZTsgLy8gcm9vdCBET00gZWxlbWVudCBvZiBQaG90b1N3aXBlXG5cdFx0c2VsZi5iZyA9IGZyYW1ld29yay5nZXRDaGlsZEJ5Q2xhc3ModGVtcGxhdGUsICdwc3dwX19iZycpO1xuXG5cdFx0X2luaXRhbENsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcblx0XHRfaXNPcGVuID0gdHJ1ZTtcblx0XHRcdFx0XG5cdFx0X2ZlYXR1cmVzID0gZnJhbWV3b3JrLmRldGVjdEZlYXR1cmVzKCk7XG5cdFx0X3JlcXVlc3RBRiA9IF9mZWF0dXJlcy5yYWY7XG5cdFx0X2NhbmNlbEFGID0gX2ZlYXR1cmVzLmNhZjtcblx0XHRfdHJhbnNmb3JtS2V5ID0gX2ZlYXR1cmVzLnRyYW5zZm9ybTtcblx0XHRfb2xkSUUgPSBfZmVhdHVyZXMub2xkSUU7XG5cdFx0XG5cdFx0c2VsZi5zY3JvbGxXcmFwID0gZnJhbWV3b3JrLmdldENoaWxkQnlDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3BfX3Njcm9sbC13cmFwJyk7XG5cdFx0c2VsZi5jb250YWluZXIgPSBmcmFtZXdvcmsuZ2V0Q2hpbGRCeUNsYXNzKHNlbGYuc2Nyb2xsV3JhcCwgJ3Bzd3BfX2NvbnRhaW5lcicpO1xuXG5cdFx0X2NvbnRhaW5lclN0eWxlID0gc2VsZi5jb250YWluZXIuc3R5bGU7IC8vIGZvciBmYXN0IGFjY2Vzc1xuXG5cdFx0Ly8gT2JqZWN0cyB0aGF0IGhvbGQgc2xpZGVzICh0aGVyZSBhcmUgb25seSAzIGluIERPTSlcblx0XHRzZWxmLml0ZW1Ib2xkZXJzID0gX2l0ZW1Ib2xkZXJzID0gW1xuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzBdICwgd3JhcDowLCBpbmRleDogLTF9LFxuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzFdICwgd3JhcDowLCBpbmRleDogLTF9LFxuXHRcdFx0e2VsOnNlbGYuY29udGFpbmVyLmNoaWxkcmVuWzJdICwgd3JhcDowLCBpbmRleDogLTF9XG5cdFx0XTtcblxuXHRcdC8vIGhpZGUgbmVhcmJ5IGl0ZW0gaG9sZGVycyB1bnRpbCBpbml0aWFsIHpvb20gYW5pbWF0aW9uIGZpbmlzaGVzICh0byBhdm9pZCBleHRyYSBQYWludHMpXG5cdFx0X2l0ZW1Ib2xkZXJzWzBdLmVsLnN0eWxlLmRpc3BsYXkgPSBfaXRlbUhvbGRlcnNbMl0uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdF9zZXR1cFRyYW5zZm9ybXMoKTtcblxuXHRcdC8vIFNldHVwIGdsb2JhbCBldmVudHNcblx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycyA9IHtcblx0XHRcdHJlc2l6ZTogc2VsZi51cGRhdGVTaXplLFxuXG5cdFx0XHQvLyBGaXhlczogaU9TIDEwLjMgcmVzaXplIGV2ZW50XG5cdFx0XHQvLyBkb2VzIG5vdCB1cGRhdGUgc2Nyb2xsV3JhcC5jbGllbnRXaWR0aCBpbnN0YW50bHkgYWZ0ZXIgcmVzaXplXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9QaG90b1N3aXBlL2lzc3Vlcy8xMzE1XG5cdFx0XHRvcmllbnRhdGlvbmNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChfb3JpZW50YXRpb25DaGFuZ2VUaW1lb3V0KTtcblx0XHRcdFx0X29yaWVudGF0aW9uQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoX3ZpZXdwb3J0U2l6ZS54ICE9PSBzZWxmLnNjcm9sbFdyYXAuY2xpZW50V2lkdGgpIHtcblx0XHRcdFx0XHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0sXG5cdFx0XHRzY3JvbGw6IF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0LFxuXHRcdFx0a2V5ZG93bjogX29uS2V5RG93bixcblx0XHRcdGNsaWNrOiBfb25HbG9iYWxDbGlja1xuXHRcdH07XG5cblx0XHQvLyBkaXNhYmxlIHNob3cvaGlkZSBlZmZlY3RzIG9uIG9sZCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgQ1NTIGFuaW1hdGlvbnMgb3IgdHJhbnNmb3JtcywgXG5cdFx0Ly8gb2xkIElPUywgQW5kcm9pZCBhbmQgT3BlcmEgbW9iaWxlLiBCbGFja2JlcnJ5IHNlZW1zIHRvIHdvcmsgZmluZSwgZXZlbiBvbGRlciBtb2RlbHMuXG5cdFx0dmFyIG9sZFBob25lID0gX2ZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgfHwgX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCB8fCBfZmVhdHVyZXMuaXNNb2JpbGVPcGVyYTtcblx0XHRpZighX2ZlYXR1cmVzLmFuaW1hdGlvbk5hbWUgfHwgIV9mZWF0dXJlcy50cmFuc2Zvcm0gfHwgb2xkUGhvbmUpIHtcblx0XHRcdF9vcHRpb25zLnNob3dBbmltYXRpb25EdXJhdGlvbiA9IF9vcHRpb25zLmhpZGVBbmltYXRpb25EdXJhdGlvbiA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gaW5pdCBtb2R1bGVzXG5cdFx0Zm9yKGkgPSAwOyBpIDwgX21vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNlbGZbJ2luaXQnICsgX21vZHVsZXNbaV1dKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGluaXRcblx0XHRpZihVaUNsYXNzKSB7XG5cdFx0XHR2YXIgdWkgPSBzZWxmLnVpID0gbmV3IFVpQ2xhc3Moc2VsZiwgZnJhbWV3b3JrKTtcblx0XHRcdHVpLmluaXQoKTtcblx0XHR9XG5cblx0XHRfc2hvdXQoJ2ZpcnN0VXBkYXRlJyk7XG5cdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBfY3VycmVudEl0ZW1JbmRleCB8fCBfb3B0aW9ucy5pbmRleCB8fCAwO1xuXHRcdC8vIHZhbGlkYXRlIGluZGV4XG5cdFx0aWYoIGlzTmFOKF9jdXJyZW50SXRlbUluZGV4KSB8fCBfY3VycmVudEl0ZW1JbmRleCA8IDAgfHwgX2N1cnJlbnRJdGVtSW5kZXggPj0gX2dldE51bUl0ZW1zKCkgKSB7XG5cdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IDA7XG5cdFx0fVxuXHRcdHNlbGYuY3Vyckl0ZW0gPSBfZ2V0SXRlbUF0KCBfY3VycmVudEl0ZW1JbmRleCApO1xuXG5cdFx0XG5cdFx0aWYoX2ZlYXR1cmVzLmlzT2xkSU9TUGhvbmUgfHwgX2ZlYXR1cmVzLmlzT2xkQW5kcm9pZCkge1xuXHRcdFx0X2lzRml4ZWRQb3NpdGlvbiA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHR0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0aWYoX29wdGlvbnMubW9kYWwpIHtcblx0XHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uKSB7XG5cdFx0XHRcdHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUudG9wID0gZnJhbWV3b3JrLmdldFNjcm9sbFkoKSArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX2N1cnJlbnRXaW5kb3dTY3JvbGxZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9zaG91dCgnaW5pdGlhbExheW91dCcpO1xuXHRcdFx0X2N1cnJlbnRXaW5kb3dTY3JvbGxZID0gX2luaXRhbFdpbmRvd1Njcm9sbFkgPSBmcmFtZXdvcmsuZ2V0U2Nyb2xsWSgpO1xuXHRcdH1cblx0XHRcblx0XHQvLyBhZGQgY2xhc3NlcyB0byByb290IGVsZW1lbnQgb2YgUGhvdG9Td2lwZVxuXHRcdHZhciByb290Q2xhc3NlcyA9ICdwc3dwLS1vcGVuICc7XG5cdFx0aWYoX29wdGlvbnMubWFpbkNsYXNzKSB7XG5cdFx0XHRyb290Q2xhc3NlcyArPSBfb3B0aW9ucy5tYWluQ2xhc3MgKyAnICc7XG5cdFx0fVxuXHRcdGlmKF9vcHRpb25zLnNob3dIaWRlT3BhY2l0eSkge1xuXHRcdFx0cm9vdENsYXNzZXMgKz0gJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eSAnO1xuXHRcdH1cblx0XHRyb290Q2xhc3NlcyArPSBfbGlrZWx5VG91Y2hEZXZpY2UgPyAncHN3cC0tdG91Y2gnIDogJ3Bzd3AtLW5vdG91Y2gnO1xuXHRcdHJvb3RDbGFzc2VzICs9IF9mZWF0dXJlcy5hbmltYXRpb25OYW1lID8gJyBwc3dwLS1jc3NfYW5pbWF0aW9uJyA6ICcnO1xuXHRcdHJvb3RDbGFzc2VzICs9IF9mZWF0dXJlcy5zdmcgPyAnIHBzd3AtLXN2ZycgOiAnJztcblx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsIHJvb3RDbGFzc2VzKTtcblxuXHRcdHNlbGYudXBkYXRlU2l6ZSgpO1xuXG5cdFx0Ly8gaW5pdGlhbCB1cGRhdGVcblx0XHRfY29udGFpbmVyU2hpZnRJbmRleCA9IC0xO1xuXHRcdF9pbmRleERpZmYgPSBudWxsO1xuXHRcdGZvcihpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdF9zZXRUcmFuc2xhdGVYKCAoaStfY29udGFpbmVyU2hpZnRJbmRleCkgKiBfc2xpZGVTaXplLngsIF9pdGVtSG9sZGVyc1tpXS5lbC5zdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYoIV9vbGRJRSkge1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQoc2VsZi5zY3JvbGxXcmFwLCBfZG93bkV2ZW50cywgc2VsZik7IC8vIG5vIGRyYWdnaW5nIGZvciBvbGQgSUVcblx0XHR9XHRcblxuXHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW5FbmQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMF0sIF9jdXJyZW50SXRlbUluZGV4LTEpO1xuXHRcdFx0c2VsZi5zZXRDb250ZW50KF9pdGVtSG9sZGVyc1syXSwgX2N1cnJlbnRJdGVtSW5kZXgrMSk7XG5cblx0XHRcdF9pdGVtSG9sZGVyc1swXS5lbC5zdHlsZS5kaXNwbGF5ID0gX2l0ZW1Ib2xkZXJzWzJdLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRpZihfb3B0aW9ucy5mb2N1cykge1xuXHRcdFx0XHQvLyBmb2N1cyBjYXVzZXMgbGF5b3V0LCBcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGxhZyBkdXJpbmcgdGhlIGFuaW1hdGlvbiwgXG5cdFx0XHRcdC8vIHRoYXQncyB3aHkgd2UgZGVsYXkgaXQgdW50aWxsIHRoZSBpbml0aWFsIHpvb20gdHJhbnNpdGlvbiBlbmRzXG5cdFx0XHRcdHRlbXBsYXRlLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0XHQgXG5cblx0XHRcdF9iaW5kRXZlbnRzKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBzZXQgY29udGVudCBmb3IgY2VudGVyIHNsaWRlIChmaXJzdCB0aW1lKVxuXHRcdHNlbGYuc2V0Q29udGVudChfaXRlbUhvbGRlcnNbMV0sIF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHRcblx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cblx0XHRfc2hvdXQoJ2FmdGVySW5pdCcpO1xuXG5cdFx0aWYoIV9pc0ZpeGVkUG9zaXRpb24pIHtcblxuXHRcdFx0Ly8gT24gYWxsIHZlcnNpb25zIG9mIGlPUyBsb3dlciB0aGFuIDguMCwgd2UgY2hlY2sgc2l6ZSBvZiB2aWV3cG9ydCBldmVyeSBzZWNvbmQuXG5cdFx0XHQvLyBcblx0XHRcdC8vIFRoaXMgaXMgZG9uZSB0byBkZXRlY3Qgd2hlbiBTYWZhcmkgdG9wICYgYm90dG9tIGJhcnMgYXBwZWFyLCBcblx0XHRcdC8vIGFzIHRoaXMgYWN0aW9uIGRvZXNuJ3QgdHJpZ2dlciBhbnkgZXZlbnRzIChsaWtlIHJlc2l6ZSkuIFxuXHRcdFx0Ly8gXG5cdFx0XHQvLyBPbiBpT1M4IHRoZXkgZml4ZWQgdGhpcy5cblx0XHRcdC8vIFxuXHRcdFx0Ly8gMTAgTm92IDIwMTQ6IGlPUyA3IHVzYWdlIH40MCUuIGlPUyA4IHVzYWdlIDU2JS5cblx0XHRcdFxuXHRcdFx0X3VwZGF0ZVNpemVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZighX251bUFuaW1hdGlvbnMgJiYgIV9pc0RyYWdnaW5nICYmICFfaXNab29taW5nICYmIChfY3Vyclpvb21MZXZlbCA9PT0gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsKSAgKSB7XG5cdFx0XHRcdFx0c2VsZi51cGRhdGVTaXplKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApO1xuXHRcdH1cblxuXHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXZpc2libGUnKTtcblx0fSxcblxuXHQvLyBDbG9zZSB0aGUgZ2FsbGVyeSwgdGhlbiBkZXN0cm95IGl0XG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRpZighX2lzT3Blbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF9pc09wZW4gPSBmYWxzZTtcblx0XHRfaXNEZXN0cm95aW5nID0gdHJ1ZTtcblx0XHRfc2hvdXQoJ2Nsb3NlJyk7XG5cdFx0X3VuYmluZEV2ZW50cygpO1xuXG5cdFx0X3Nob3dPckhpZGUoc2VsZi5jdXJySXRlbSwgbnVsbCwgdHJ1ZSwgc2VsZi5kZXN0cm95KTtcblx0fSxcblxuXHQvLyBkZXN0cm95cyB0aGUgZ2FsbGVyeSAodW5iaW5kcyBldmVudHMsIGNsZWFucyB1cCBpbnRlcnZhbHMgYW5kIHRpbWVvdXRzIHRvIGF2b2lkIG1lbW9yeSBsZWFrcylcblx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0X3Nob3V0KCdkZXN0cm95Jyk7XG5cblx0XHRpZihfc2hvd09ySGlkZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChfc2hvd09ySGlkZVRpbWVvdXQpO1xuXHRcdH1cblx0XHRcblx0XHR0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHR0ZW1wbGF0ZS5jbGFzc05hbWUgPSBfaW5pdGFsQ2xhc3NOYW1lO1xuXG5cdFx0aWYoX3VwZGF0ZVNpemVJbnRlcnZhbCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChfdXBkYXRlU2l6ZUludGVydmFsKTtcblx0XHR9XG5cblx0XHRmcmFtZXdvcmsudW5iaW5kKHNlbGYuc2Nyb2xsV3JhcCwgX2Rvd25FdmVudHMsIHNlbGYpO1xuXG5cdFx0Ly8gd2UgdW5iaW5kIHNjcm9sbCBldmVudCBhdCB0aGUgZW5kLCBhcyBjbG9zaW5nIGFuaW1hdGlvbiBtYXkgZGVwZW5kIG9uIGl0XG5cdFx0ZnJhbWV3b3JrLnVuYmluZCh3aW5kb3csICdzY3JvbGwnLCBzZWxmKTtcblxuXHRcdF9zdG9wRHJhZ1VwZGF0ZUxvb3AoKTtcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0X2xpc3RlbmVycyA9IG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBhbiBpbWFnZSB0byBwb3NpdGlvblxuXHQgKiBAcGFyYW0ge051bWJlcn0geCAgICAgXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB5ICAgICBcblx0ICogQHBhcmFtIHtCb29sZWFufSBmb3JjZSBXaWxsIGlnbm9yZSBib3VuZHMgaWYgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRwYW5UbzogZnVuY3Rpb24oeCx5LGZvcmNlKSB7XG5cdFx0aWYoIWZvcmNlKSB7XG5cdFx0XHRpZih4ID4gX2N1cnJQYW5Cb3VuZHMubWluLngpIHtcblx0XHRcdFx0eCA9IF9jdXJyUGFuQm91bmRzLm1pbi54O1xuXHRcdFx0fSBlbHNlIGlmKHggPCBfY3VyclBhbkJvdW5kcy5tYXgueCkge1xuXHRcdFx0XHR4ID0gX2N1cnJQYW5Cb3VuZHMubWF4Lng7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHkgPiBfY3VyclBhbkJvdW5kcy5taW4ueSkge1xuXHRcdFx0XHR5ID0gX2N1cnJQYW5Cb3VuZHMubWluLnk7XG5cdFx0XHR9IGVsc2UgaWYoeSA8IF9jdXJyUGFuQm91bmRzLm1heC55KSB7XG5cdFx0XHRcdHkgPSBfY3VyclBhbkJvdW5kcy5tYXgueTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0X3Bhbk9mZnNldC54ID0geDtcblx0XHRfcGFuT2Zmc2V0LnkgPSB5O1xuXHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdH0sXG5cdFxuXHRoYW5kbGVFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG5cdFx0aWYoX2dsb2JhbEV2ZW50SGFuZGxlcnNbZS50eXBlXSkge1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbZS50eXBlXShlKTtcblx0XHR9XG5cdH0sXG5cblxuXHRnb1RvOiBmdW5jdGlvbihpbmRleCkge1xuXG5cdFx0aW5kZXggPSBfZ2V0TG9vcGVkSWQoaW5kZXgpO1xuXG5cdFx0dmFyIGRpZmYgPSBpbmRleCAtIF9jdXJyZW50SXRlbUluZGV4O1xuXHRcdF9pbmRleERpZmYgPSBkaWZmO1xuXG5cdFx0X2N1cnJlbnRJdGVtSW5kZXggPSBpbmRleDtcblx0XHRzZWxmLmN1cnJJdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRfY3VyclBvc2l0aW9uSW5kZXggLT0gZGlmZjtcblx0XHRcblx0XHRfbW92ZU1haW5TY3JvbGwoX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KTtcblx0XHRcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXHRcdF9tYWluU2Nyb2xsQW5pbWF0aW5nID0gZmFsc2U7XG5cblx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYuZ29UbyggX2N1cnJlbnRJdGVtSW5kZXggKyAxKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5nb1RvKCBfY3VycmVudEl0ZW1JbmRleCAtIDEpO1xuXHR9LFxuXG5cdC8vIHVwZGF0ZSBjdXJyZW50IHpvb20vcGFuIG9iamVjdHNcblx0dXBkYXRlQ3Vyclpvb21JdGVtOiBmdW5jdGlvbihlbXVsYXRlU2V0Q29udGVudCkge1xuXHRcdGlmKGVtdWxhdGVTZXRDb250ZW50KSB7XG5cdFx0XHRfc2hvdXQoJ2JlZm9yZUNoYW5nZScsIDApO1xuXHRcdH1cblxuXHRcdC8vIGl0ZW1Ib2xkZXJbMV0gaXMgbWlkZGxlIChjdXJyZW50KSBpdGVtXG5cdFx0aWYoX2l0ZW1Ib2xkZXJzWzFdLmVsLmNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0dmFyIHpvb21FbGVtZW50ID0gX2l0ZW1Ib2xkZXJzWzFdLmVsLmNoaWxkcmVuWzBdO1xuXHRcdFx0aWYoIGZyYW1ld29yay5oYXNDbGFzcyh6b29tRWxlbWVudCwgJ3Bzd3BfX3pvb20td3JhcCcpICkge1xuXHRcdFx0XHRfY3Vyclpvb21FbGVtZW50U3R5bGUgPSB6b29tRWxlbWVudC5zdHlsZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9jdXJyWm9vbUVsZW1lbnRTdHlsZSA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XHRcblx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblxuXHRcdF9wYW5PZmZzZXQueCA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci54O1xuXHRcdF9wYW5PZmZzZXQueSA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci55O1xuXG5cdFx0aWYoZW11bGF0ZVNldENvbnRlbnQpIHtcblx0XHRcdF9zaG91dCgnYWZ0ZXJDaGFuZ2UnKTtcblx0XHR9XG5cdH0sXG5cblxuXHRpbnZhbGlkYXRlQ3Vyckl0ZW1zOiBmdW5jdGlvbigpIHtcblx0XHRfaXRlbXNOZWVkVXBkYXRlID0gdHJ1ZTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgTlVNX0hPTERFUlM7IGkrKykge1xuXHRcdFx0aWYoIF9pdGVtSG9sZGVyc1tpXS5pdGVtICkge1xuXHRcdFx0XHRfaXRlbUhvbGRlcnNbaV0uaXRlbS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHVwZGF0ZUN1cnJJdGVtOiBmdW5jdGlvbihiZWZvcmVBbmltYXRpb24pIHtcblxuXHRcdGlmKF9pbmRleERpZmYgPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlmZkFicyA9IE1hdGguYWJzKF9pbmRleERpZmYpLFxuXHRcdFx0dGVtcEhvbGRlcjtcblxuXHRcdGlmKGJlZm9yZUFuaW1hdGlvbiAmJiBkaWZmQWJzIDwgMikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXG5cdFx0c2VsZi5jdXJySXRlbSA9IF9nZXRJdGVtQXQoIF9jdXJyZW50SXRlbUluZGV4ICk7XG5cdFx0X3JlbmRlck1heFJlc29sdXRpb24gPSBmYWxzZTtcblx0XHRcblx0XHRfc2hvdXQoJ2JlZm9yZUNoYW5nZScsIF9pbmRleERpZmYpO1xuXG5cdFx0aWYoZGlmZkFicyA+PSBOVU1fSE9MREVSUykge1xuXHRcdFx0X2NvbnRhaW5lclNoaWZ0SW5kZXggKz0gX2luZGV4RGlmZiArIChfaW5kZXhEaWZmID4gMCA/IC1OVU1fSE9MREVSUyA6IE5VTV9IT0xERVJTKTtcblx0XHRcdGRpZmZBYnMgPSBOVU1fSE9MREVSUztcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRpZmZBYnM7IGkrKykge1xuXHRcdFx0aWYoX2luZGV4RGlmZiA+IDApIHtcblx0XHRcdFx0dGVtcEhvbGRlciA9IF9pdGVtSG9sZGVycy5zaGlmdCgpO1xuXHRcdFx0XHRfaXRlbUhvbGRlcnNbTlVNX0hPTERFUlMtMV0gPSB0ZW1wSG9sZGVyOyAvLyBtb3ZlIGZpcnN0IHRvIGxhc3RcblxuXHRcdFx0XHRfY29udGFpbmVyU2hpZnRJbmRleCsrO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggKF9jb250YWluZXJTaGlmdEluZGV4KzIpICogX3NsaWRlU2l6ZS54LCB0ZW1wSG9sZGVyLmVsLnN0eWxlKTtcblx0XHRcdFx0c2VsZi5zZXRDb250ZW50KHRlbXBIb2xkZXIsIF9jdXJyZW50SXRlbUluZGV4IC0gZGlmZkFicyArIGkgKyAxICsgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZW1wSG9sZGVyID0gX2l0ZW1Ib2xkZXJzLnBvcCgpO1xuXHRcdFx0XHRfaXRlbUhvbGRlcnMudW5zaGlmdCggdGVtcEhvbGRlciApOyAvLyBtb3ZlIGxhc3QgdG8gZmlyc3RcblxuXHRcdFx0XHRfY29udGFpbmVyU2hpZnRJbmRleC0tO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggX2NvbnRhaW5lclNoaWZ0SW5kZXggKiBfc2xpZGVTaXplLngsIHRlbXBIb2xkZXIuZWwuc3R5bGUpO1xuXHRcdFx0XHRzZWxmLnNldENvbnRlbnQodGVtcEhvbGRlciwgX2N1cnJlbnRJdGVtSW5kZXggKyBkaWZmQWJzIC0gaSAtIDEgLSAxKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdC8vIHJlc2V0IHpvb20vcGFuIG9uIHByZXZpb3VzIGl0ZW1cblx0XHRpZihfY3Vyclpvb21FbGVtZW50U3R5bGUgJiYgTWF0aC5hYnMoX2luZGV4RGlmZikgPT09IDEpIHtcblxuXHRcdFx0dmFyIHByZXZJdGVtID0gX2dldEl0ZW1BdChfcHJldkl0ZW1JbmRleCk7XG5cdFx0XHRpZihwcmV2SXRlbS5pbml0aWFsWm9vbUxldmVsICE9PSBfY3Vyclpvb21MZXZlbCkge1xuXHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUocHJldkl0ZW0gLCBfdmlld3BvcnRTaXplICk7XG5cdFx0XHRcdF9zZXRJbWFnZVNpemUocHJldkl0ZW0pO1xuXHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKCBwcmV2SXRlbSApOyBcdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gcmVzZXQgZGlmZiBhZnRlciB1cGRhdGVcblx0XHRfaW5kZXhEaWZmID0gMDtcblxuXHRcdHNlbGYudXBkYXRlQ3Vyclpvb21JdGVtKCk7XG5cblx0XHRfcHJldkl0ZW1JbmRleCA9IF9jdXJyZW50SXRlbUluZGV4O1xuXG5cdFx0X3Nob3V0KCdhZnRlckNoYW5nZScpO1xuXHRcdFxuXHR9LFxuXG5cblxuXHR1cGRhdGVTaXplOiBmdW5jdGlvbihmb3JjZSkge1xuXHRcdFxuXHRcdGlmKCFfaXNGaXhlZFBvc2l0aW9uICYmIF9vcHRpb25zLm1vZGFsKSB7XG5cdFx0XHR2YXIgd2luZG93U2Nyb2xsWSA9IGZyYW1ld29yay5nZXRTY3JvbGxZKCk7XG5cdFx0XHRpZihfY3VycmVudFdpbmRvd1Njcm9sbFkgIT09IHdpbmRvd1Njcm9sbFkpIHtcblx0XHRcdFx0dGVtcGxhdGUuc3R5bGUudG9wID0gd2luZG93U2Nyb2xsWSArICdweCc7XG5cdFx0XHRcdF9jdXJyZW50V2luZG93U2Nyb2xsWSA9IHdpbmRvd1Njcm9sbFk7XG5cdFx0XHR9XG5cdFx0XHRpZighZm9yY2UgJiYgX3dpbmRvd1Zpc2libGVTaXplLnggPT09IHdpbmRvdy5pbm5lcldpZHRoICYmIF93aW5kb3dWaXNpYmxlU2l6ZS55ID09PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0X3dpbmRvd1Zpc2libGVTaXplLnggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdF93aW5kb3dWaXNpYmxlU2l6ZS55ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5cdFx0XHQvL3RlbXBsYXRlLnN0eWxlLndpZHRoID0gX3dpbmRvd1Zpc2libGVTaXplLnggKyAncHgnO1xuXHRcdFx0dGVtcGxhdGUuc3R5bGUuaGVpZ2h0ID0gX3dpbmRvd1Zpc2libGVTaXplLnkgKyAncHgnO1xuXHRcdH1cblxuXG5cblx0XHRfdmlld3BvcnRTaXplLnggPSBzZWxmLnNjcm9sbFdyYXAuY2xpZW50V2lkdGg7XG5cdFx0X3ZpZXdwb3J0U2l6ZS55ID0gc2VsZi5zY3JvbGxXcmFwLmNsaWVudEhlaWdodDtcblxuXHRcdF91cGRhdGVQYWdlU2Nyb2xsT2Zmc2V0KCk7XG5cblx0XHRfc2xpZGVTaXplLnggPSBfdmlld3BvcnRTaXplLnggKyBNYXRoLnJvdW5kKF92aWV3cG9ydFNpemUueCAqIF9vcHRpb25zLnNwYWNpbmcpO1xuXHRcdF9zbGlkZVNpemUueSA9IF92aWV3cG9ydFNpemUueTtcblxuXHRcdF9tb3ZlTWFpblNjcm9sbChfc2xpZGVTaXplLnggKiBfY3VyclBvc2l0aW9uSW5kZXgpO1xuXG5cdFx0X3Nob3V0KCdiZWZvcmVSZXNpemUnKTsgLy8gZXZlbiBtYXkgYmUgdXNlZCBmb3IgZXhhbXBsZSB0byBzd2l0Y2ggaW1hZ2Ugc291cmNlc1xuXG5cblx0XHQvLyBkb24ndCByZS1jYWxjdWxhdGUgc2l6ZSBvbiBpbml0YWwgc2l6ZSB1cGRhdGVcblx0XHRpZihfY29udGFpbmVyU2hpZnRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHZhciBob2xkZXIsXG5cdFx0XHRcdGl0ZW0sXG5cdFx0XHRcdGhJbmRleDtcblxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IE5VTV9IT0xERVJTOyBpKyspIHtcblx0XHRcdFx0aG9sZGVyID0gX2l0ZW1Ib2xkZXJzW2ldO1xuXHRcdFx0XHRfc2V0VHJhbnNsYXRlWCggKGkrX2NvbnRhaW5lclNoaWZ0SW5kZXgpICogX3NsaWRlU2l6ZS54LCBob2xkZXIuZWwuc3R5bGUpO1xuXG5cdFx0XHRcdGhJbmRleCA9IF9jdXJyZW50SXRlbUluZGV4K2ktMTtcblxuXHRcdFx0XHRpZihfb3B0aW9ucy5sb29wICYmIF9nZXROdW1JdGVtcygpID4gMikge1xuXHRcdFx0XHRcdGhJbmRleCA9IF9nZXRMb29wZWRJZChoSW5kZXgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdXBkYXRlIHpvb20gbGV2ZWwgb24gaXRlbXMgYW5kIHJlZnJlc2ggc291cmNlIChpZiBuZWVkc1VwZGF0ZSlcblx0XHRcdFx0aXRlbSA9IF9nZXRJdGVtQXQoIGhJbmRleCApO1xuXG5cdFx0XHRcdC8vIHJlLXJlbmRlciBnYWxsZXJ5IGl0ZW0gaWYgYG5lZWRzVXBkYXRlYCxcblx0XHRcdFx0Ly8gb3IgZG9lc24ndCBoYXZlIGBib3VuZHNgIChlbnRpcmVseSBuZXcgc2xpZGUgb2JqZWN0KVxuXHRcdFx0XHRpZiggaXRlbSAmJiAoX2l0ZW1zTmVlZFVwZGF0ZSB8fCBpdGVtLm5lZWRzVXBkYXRlIHx8ICFpdGVtLmJvdW5kcykgKSB7XG5cblx0XHRcdFx0XHRzZWxmLmNsZWFuU2xpZGUoIGl0ZW0gKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzZWxmLnNldENvbnRlbnQoIGhvbGRlciwgaEluZGV4ICk7XG5cblx0XHRcdFx0XHQvLyBpZiBcImNlbnRlclwiIHNsaWRlXG5cdFx0XHRcdFx0aWYoaSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0c2VsZi5jdXJySXRlbSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpdGVtLm5lZWRzVXBkYXRlID0gZmFsc2U7XG5cblx0XHRcdFx0fSBlbHNlIGlmKGhvbGRlci5pbmRleCA9PT0gLTEgJiYgaEluZGV4ID49IDApIHtcblx0XHRcdFx0XHQvLyBhZGQgY29udGVudCBmaXJzdCB0aW1lXG5cdFx0XHRcdFx0c2VsZi5zZXRDb250ZW50KCBob2xkZXIsIGhJbmRleCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGl0ZW0gJiYgaXRlbS5jb250YWluZXIpIHtcblx0XHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRfYXBwbHlab29tUGFuVG9JdGVtKCBpdGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRfaXRlbXNOZWVkVXBkYXRlID0gZmFsc2U7XG5cdFx0fVx0XG5cblx0XHRfc3RhcnRab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbDtcblx0XHRfY3VyclBhbkJvdW5kcyA9IHNlbGYuY3Vyckl0ZW0uYm91bmRzO1xuXG5cdFx0aWYoX2N1cnJQYW5Cb3VuZHMpIHtcblx0XHRcdF9wYW5PZmZzZXQueCA9IF9jdXJyUGFuQm91bmRzLmNlbnRlci54O1xuXHRcdFx0X3Bhbk9mZnNldC55ID0gX2N1cnJQYW5Cb3VuZHMuY2VudGVyLnk7XG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbiggdHJ1ZSApO1xuXHRcdH1cblx0XHRcblx0XHRfc2hvdXQoJ3Jlc2l6ZScpO1xuXHR9LFxuXHRcblx0Ly8gWm9vbSBjdXJyZW50IGl0ZW0gdG9cblx0em9vbVRvOiBmdW5jdGlvbihkZXN0Wm9vbUxldmVsLCBjZW50ZXJQb2ludCwgc3BlZWQsIGVhc2luZ0ZuLCB1cGRhdGVGbikge1xuXHRcdC8qXG5cdFx0XHRpZihkZXN0Wm9vbUxldmVsID09PSAnZml0Jykge1xuXHRcdFx0XHRkZXN0Wm9vbUxldmVsID0gc2VsZi5jdXJySXRlbS5maXRSYXRpbztcblx0XHRcdH0gZWxzZSBpZihkZXN0Wm9vbUxldmVsID09PSAnZmlsbCcpIHtcblx0XHRcdFx0ZGVzdFpvb21MZXZlbCA9IHNlbGYuY3Vyckl0ZW0uZmlsbFJhdGlvO1xuXHRcdFx0fVxuXHRcdCovXG5cblx0XHRpZihjZW50ZXJQb2ludCkge1xuXHRcdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnggPSBNYXRoLmFicyhjZW50ZXJQb2ludC54KSAtIF9wYW5PZmZzZXQueCA7XG5cdFx0XHRfbWlkWm9vbVBvaW50LnkgPSBNYXRoLmFicyhjZW50ZXJQb2ludC55KSAtIF9wYW5PZmZzZXQueSA7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UGFuT2Zmc2V0LCBfcGFuT2Zmc2V0KTtcblx0XHR9XG5cblx0XHR2YXIgZGVzdFBhbkJvdW5kcyA9IF9jYWxjdWxhdGVQYW5Cb3VuZHMoZGVzdFpvb21MZXZlbCwgZmFsc2UpLFxuXHRcdFx0ZGVzdFBhbk9mZnNldCA9IHt9O1xuXG5cdFx0X21vZGlmeURlc3RQYW5PZmZzZXQoJ3gnLCBkZXN0UGFuQm91bmRzLCBkZXN0UGFuT2Zmc2V0LCBkZXN0Wm9vbUxldmVsKTtcblx0XHRfbW9kaWZ5RGVzdFBhbk9mZnNldCgneScsIGRlc3RQYW5Cb3VuZHMsIGRlc3RQYW5PZmZzZXQsIGRlc3Rab29tTGV2ZWwpO1xuXG5cdFx0dmFyIGluaXRpYWxab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbDtcblx0XHR2YXIgaW5pdGlhbFBhbk9mZnNldCA9IHtcblx0XHRcdHg6IF9wYW5PZmZzZXQueCxcblx0XHRcdHk6IF9wYW5PZmZzZXQueVxuXHRcdH07XG5cblx0XHRfcm91bmRQb2ludChkZXN0UGFuT2Zmc2V0KTtcblxuXHRcdHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0aWYobm93ID09PSAxKSB7XG5cdFx0XHRcdF9jdXJyWm9vbUxldmVsID0gZGVzdFpvb21MZXZlbDtcblx0XHRcdFx0X3Bhbk9mZnNldC54ID0gZGVzdFBhbk9mZnNldC54O1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSBkZXN0UGFuT2Zmc2V0Lnk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IChkZXN0Wm9vbUxldmVsIC0gaW5pdGlhbFpvb21MZXZlbCkgKiBub3cgKyBpbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0XHRfcGFuT2Zmc2V0LnggPSAoZGVzdFBhbk9mZnNldC54IC0gaW5pdGlhbFBhbk9mZnNldC54KSAqIG5vdyArIGluaXRpYWxQYW5PZmZzZXQueDtcblx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKGRlc3RQYW5PZmZzZXQueSAtIGluaXRpYWxQYW5PZmZzZXQueSkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHVwZGF0ZUZuKSB7XG5cdFx0XHRcdHVwZGF0ZUZuKG5vdyk7XG5cdFx0XHR9XG5cblx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCBub3cgPT09IDEgKTtcblx0XHR9O1xuXG5cdFx0aWYoc3BlZWQpIHtcblx0XHRcdF9hbmltYXRlUHJvcCgnY3VzdG9tWm9vbVRvJywgMCwgMSwgc3BlZWQsIGVhc2luZ0ZuIHx8IGZyYW1ld29yay5lYXNpbmcuc2luZS5pbk91dCwgb25VcGRhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvblVwZGF0ZSgxKTtcblx0XHR9XG5cdH1cblxuXG59O1xuXG5cbi8qPj5jb3JlKi9cblxuLyo+Pmdlc3R1cmVzKi9cbi8qKlxuICogTW91c2UvdG91Y2gvcG9pbnRlciBldmVudCBoYW5kbGVycy5cbiAqIFxuICogc2VwYXJhdGVkIGZyb20gQGNvcmUuanMgZm9yIHJlYWRhYmlsaXR5XG4gKi9cblxudmFyIE1JTl9TV0lQRV9ESVNUQU5DRSA9IDMwLFxuXHRESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUID0gMTA7IC8vIGFtb3VudCBvZiBwaXhlbHMgdG8gZHJhZyB0byBkZXRlcm1pbmUgZGlyZWN0aW9uIG9mIHN3aXBlXG5cbnZhciBfZ2VzdHVyZVN0YXJ0VGltZSxcblx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSxcblxuXHQvLyBwb29sIG9mIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBkdXJpbmcgZHJhZ2dpbmcgb2Ygem9vbWluZ1xuXHRwID0ge30sIC8vIGZpcnN0IHBvaW50XG5cdHAyID0ge30sIC8vIHNlY29uZCBwb2ludCAoZm9yIHpvb20gZ2VzdHVyZSlcblx0ZGVsdGEgPSB7fSxcblx0X2N1cnJQb2ludCA9IHt9LFxuXHRfc3RhcnRQb2ludCA9IHt9LFxuXHRfY3VyclBvaW50ZXJzID0gW10sXG5cdF9zdGFydE1haW5TY3JvbGxQb3MgPSB7fSxcblx0X3JlbGVhc2VBbmltRGF0YSxcblx0X3Bvc1BvaW50cyA9IFtdLCAvLyBhcnJheSBvZiBwb2ludHMgZHVyaW5nIGRyYWdnaW5nLCB1c2VkIHRvIGRldGVybWluZSB0eXBlIG9mIGdlc3R1cmVcblx0X3RlbXBQb2ludCA9IHt9LFxuXG5cdF9pc1pvb21pbmdJbixcblx0X3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCxcblx0X29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQsXG5cdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gMCxcblx0X2NlbnRlclBvaW50ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2xhc3RSZWxlYXNlVGltZSA9IDAsXG5cdF9pc0RyYWdnaW5nLCAvLyBhdCBsZWFzdCBvbmUgcG9pbnRlciBpcyBkb3duXG5cdF9pc011bHRpdG91Y2gsIC8vIGF0IGxlYXN0IHR3byBfcG9pbnRlcnMgYXJlIGRvd25cblx0X3pvb21TdGFydGVkLCAvLyB6b29tIGxldmVsIGNoYW5nZWQgZHVyaW5nIHpvb20gZ2VzdHVyZVxuXHRfbW92ZWQsXG5cdF9kcmFnQW5pbUZyYW1lLFxuXHRfbWFpblNjcm9sbFNoaWZ0ZWQsXG5cdF9jdXJyZW50UG9pbnRzLCAvLyBhcnJheSBvZiBjdXJyZW50IHRvdWNoIHBvaW50c1xuXHRfaXNab29taW5nLFxuXHRfY3VyclBvaW50c0Rpc3RhbmNlLFxuXHRfc3RhcnRQb2ludHNEaXN0YW5jZSxcblx0X2N1cnJQYW5Cb3VuZHMsXG5cdF9tYWluU2Nyb2xsUG9zID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2N1cnJab29tRWxlbWVudFN0eWxlLFxuXHRfbWFpblNjcm9sbEFuaW1hdGluZywgLy8gdHJ1ZSwgaWYgYW5pbWF0aW9uIGFmdGVyIHN3aXBlIGdlc3R1cmUgaXMgcnVubmluZ1xuXHRfbWlkWm9vbVBvaW50ID0gX2dldEVtcHR5UG9pbnQoKSxcblx0X2N1cnJDZW50ZXJQb2ludCA9IF9nZXRFbXB0eVBvaW50KCksXG5cdF9kaXJlY3Rpb24sXG5cdF9pc0ZpcnN0TW92ZSxcblx0X29wYWNpdHlDaGFuZ2VkLFxuXHRfYmdPcGFjaXR5LFxuXHRfd2FzT3ZlckluaXRpYWxab29tLFxuXG5cdF9pc0VxdWFsUG9pbnRzID0gZnVuY3Rpb24ocDEsIHAyKSB7XG5cdFx0cmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueTtcblx0fSxcblx0X2lzTmVhcmJ5UG9pbnRzID0gZnVuY3Rpb24odG91Y2gwLCB0b3VjaDEpIHtcblx0XHRyZXR1cm4gTWF0aC5hYnModG91Y2gwLnggLSB0b3VjaDEueCkgPCBET1VCTEVfVEFQX1JBRElVUyAmJiBNYXRoLmFicyh0b3VjaDAueSAtIHRvdWNoMS55KSA8IERPVUJMRV9UQVBfUkFESVVTO1xuXHR9LFxuXHRfY2FsY3VsYXRlUG9pbnRzRGlzdGFuY2UgPSBmdW5jdGlvbihwMSwgcDIpIHtcblx0XHRfdGVtcFBvaW50LnggPSBNYXRoLmFicyggcDEueCAtIHAyLnggKTtcblx0XHRfdGVtcFBvaW50LnkgPSBNYXRoLmFicyggcDEueSAtIHAyLnkgKTtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KF90ZW1wUG9pbnQueCAqIF90ZW1wUG9pbnQueCArIF90ZW1wUG9pbnQueSAqIF90ZW1wUG9pbnQueSk7XG5cdH0sXG5cdF9zdG9wRHJhZ1VwZGF0ZUxvb3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfZHJhZ0FuaW1GcmFtZSkge1xuXHRcdFx0X2NhbmNlbEFGKF9kcmFnQW5pbUZyYW1lKTtcblx0XHRcdF9kcmFnQW5pbUZyYW1lID0gbnVsbDtcblx0XHR9XG5cdH0sXG5cdF9kcmFnVXBkYXRlTG9vcCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKF9pc0RyYWdnaW5nKSB7XG5cdFx0XHRfZHJhZ0FuaW1GcmFtZSA9IF9yZXF1ZXN0QUYoX2RyYWdVcGRhdGVMb29wKTtcblx0XHRcdF9yZW5kZXJNb3ZlbWVudCgpO1xuXHRcdH1cblx0fSxcblx0X2NhblBhbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAhKF9vcHRpb25zLnNjYWxlTW9kZSA9PT0gJ2ZpdCcgJiYgX2N1cnJab29tTGV2ZWwgPT09ICBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpO1xuXHR9LFxuXHRcblx0Ly8gZmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgRE9NIGVsZW1lbnRcblx0X2Nsb3Nlc3RFbGVtZW50ID0gZnVuY3Rpb24oZWwsIGZuKSB7XG5cdCAgXHRpZighZWwgfHwgZWwgPT09IGRvY3VtZW50KSB7XG5cdCAgXHRcdHJldHVybiBmYWxzZTtcblx0ICBcdH1cblxuXHQgIFx0Ly8gZG9uJ3Qgc2VhcmNoIGVsZW1lbnRzIGFib3ZlIHBzd3BfX3Njcm9sbC13cmFwXG5cdCAgXHRpZihlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgJiYgZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluZGV4T2YoJ3Bzd3BfX3Njcm9sbC13cmFwJykgPiAtMSApIHtcblx0ICBcdFx0cmV0dXJuIGZhbHNlO1xuXHQgIFx0fVxuXG5cdCAgXHRpZiggZm4oZWwpICkge1xuXHQgIFx0XHRyZXR1cm4gZWw7XG5cdCAgXHR9XG5cblx0ICBcdHJldHVybiBfY2xvc2VzdEVsZW1lbnQoZWwucGFyZW50Tm9kZSwgZm4pO1xuXHR9LFxuXG5cdF9wcmV2ZW50T2JqID0ge30sXG5cdF9wcmV2ZW50RGVmYXVsdEV2ZW50QmVoYXZpb3VyID0gZnVuY3Rpb24oZSwgaXNEb3duKSB7XG5cdCAgICBfcHJldmVudE9iai5wcmV2ZW50ID0gIV9jbG9zZXN0RWxlbWVudChlLnRhcmdldCwgX29wdGlvbnMuaXNDbGlja2FibGVFbGVtZW50KTtcblxuXHRcdF9zaG91dCgncHJldmVudERyYWdFdmVudCcsIGUsIGlzRG93biwgX3ByZXZlbnRPYmopO1xuXHRcdHJldHVybiBfcHJldmVudE9iai5wcmV2ZW50O1xuXG5cdH0sXG5cdF9jb252ZXJ0VG91Y2hUb1BvaW50ID0gZnVuY3Rpb24odG91Y2gsIHApIHtcblx0XHRwLnggPSB0b3VjaC5wYWdlWDtcblx0XHRwLnkgPSB0b3VjaC5wYWdlWTtcblx0XHRwLmlkID0gdG91Y2guaWRlbnRpZmllcjtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0X2ZpbmRDZW50ZXJPZlBvaW50cyA9IGZ1bmN0aW9uKHAxLCBwMiwgcENlbnRlcikge1xuXHRcdHBDZW50ZXIueCA9IChwMS54ICsgcDIueCkgKiAwLjU7XG5cdFx0cENlbnRlci55ID0gKHAxLnkgKyBwMi55KSAqIDAuNTtcblx0fSxcblx0X3B1c2hQb3NQb2ludCA9IGZ1bmN0aW9uKHRpbWUsIHgsIHkpIHtcblx0XHRpZih0aW1lIC0gX2dlc3R1cmVDaGVja1NwZWVkVGltZSA+IDUwKSB7XG5cdFx0XHR2YXIgbyA9IF9wb3NQb2ludHMubGVuZ3RoID4gMiA/IF9wb3NQb2ludHMuc2hpZnQoKSA6IHt9O1xuXHRcdFx0by54ID0geDtcblx0XHRcdG8ueSA9IHk7IFxuXHRcdFx0X3Bvc1BvaW50cy5wdXNoKG8pO1xuXHRcdFx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSA9IHRpbWU7XG5cdFx0fVxuXHR9LFxuXG5cdF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgeU9mZnNldCA9IF9wYW5PZmZzZXQueSAtIHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFBvc2l0aW9uLnk7IC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBpbml0aWFsIGFuZCBjdXJyZW50IHBvc2l0aW9uXG5cdFx0cmV0dXJuIDEgLSAgTWF0aC5hYnMoIHlPZmZzZXQgLyAoX3ZpZXdwb3J0U2l6ZS55IC8gMikgICk7XG5cdH0sXG5cblx0XG5cdC8vIHBvaW50cyBwb29sLCByZXVzZWQgZHVyaW5nIHRvdWNoIGV2ZW50c1xuXHRfZVBvaW50MSA9IHt9LFxuXHRfZVBvaW50MiA9IHt9LFxuXHRfdGVtcFBvaW50c0FyciA9IFtdLFxuXHRfdGVtcENvdW50ZXIsXG5cdF9nZXRUb3VjaFBvaW50cyA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBjbGVhbiB1cCBwcmV2aW91cyBwb2ludHMsIHdpdGhvdXQgcmVjcmVhdGluZyBhcnJheVxuXHRcdHdoaWxlKF90ZW1wUG9pbnRzQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdF90ZW1wUG9pbnRzQXJyLnBvcCgpO1xuXHRcdH1cblxuXHRcdGlmKCFfcG9pbnRlckV2ZW50RW5hYmxlZCkge1xuXHRcdFx0aWYoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSkge1xuXG5cdFx0XHRcdGlmKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzBdID0gX2NvbnZlcnRUb3VjaFRvUG9pbnQoZS50b3VjaGVzWzBdLCBfZVBvaW50MSk7XG5cdFx0XHRcdFx0aWYoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzFdID0gX2NvbnZlcnRUb3VjaFRvUG9pbnQoZS50b3VjaGVzWzFdLCBfZVBvaW50Mik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2VQb2ludDEueCA9IGUucGFnZVg7XG5cdFx0XHRcdF9lUG9pbnQxLnkgPSBlLnBhZ2VZO1xuXHRcdFx0XHRfZVBvaW50MS5pZCA9ICcnO1xuXHRcdFx0XHRfdGVtcFBvaW50c0FyclswXSA9IF9lUG9pbnQxOy8vX2VQb2ludDE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF90ZW1wQ291bnRlciA9IDA7XG5cdFx0XHQvLyB3ZSBjYW4gdXNlIGZvckVhY2gsIGFzIHBvaW50ZXIgZXZlbnRzIGFyZSBzdXBwb3J0ZWQgb25seSBpbiBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdF9jdXJyUG9pbnRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG5cdFx0XHRcdGlmKF90ZW1wQ291bnRlciA9PT0gMCkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzBdID0gcDtcblx0XHRcdFx0fSBlbHNlIGlmKF90ZW1wQ291bnRlciA9PT0gMSkge1xuXHRcdFx0XHRcdF90ZW1wUG9pbnRzQXJyWzFdID0gcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGVtcENvdW50ZXIrKztcblxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBfdGVtcFBvaW50c0Fycjtcblx0fSxcblxuXHRfcGFuT3JNb3ZlTWFpblNjcm9sbCA9IGZ1bmN0aW9uKGF4aXMsIGRlbHRhKSB7XG5cblx0XHR2YXIgcGFuRnJpY3Rpb24sXG5cdFx0XHRvdmVyRGlmZiA9IDAsXG5cdFx0XHRuZXdPZmZzZXQgPSBfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10sXG5cdFx0XHRzdGFydE92ZXJEaWZmLFxuXHRcdFx0ZGlyID0gZGVsdGFbYXhpc10gPiAwLFxuXHRcdFx0bmV3TWFpblNjcm9sbFBvc2l0aW9uID0gX21haW5TY3JvbGxQb3MueCArIGRlbHRhLngsXG5cdFx0XHRtYWluU2Nyb2xsRGlmZiA9IF9tYWluU2Nyb2xsUG9zLnggLSBfc3RhcnRNYWluU2Nyb2xsUG9zLngsXG5cdFx0XHRuZXdQYW5Qb3MsXG5cdFx0XHRuZXdNYWluU2Nyb2xsUG9zO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGZkaXN0YW5jZSBvdmVyIHRoZSBib3VuZHMgYW5kIGZyaWN0aW9uXG5cdFx0aWYobmV3T2Zmc2V0ID4gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIHx8IG5ld09mZnNldCA8IF9jdXJyUGFuQm91bmRzLm1heFtheGlzXSkge1xuXHRcdFx0cGFuRnJpY3Rpb24gPSBfb3B0aW9ucy5wYW5FbmRGcmljdGlvbjtcblx0XHRcdC8vIExpbmVhciBpbmNyZWFzaW5nIG9mIGZyaWN0aW9uLCBzbyBhdCAxLzQgb2Ygdmlld3BvcnQgaXQncyBhdCBtYXggdmFsdWUuIFxuXHRcdFx0Ly8gTG9va3Mgbm90IGFzIG5pY2UgYXMgd2FzIGV4cGVjdGVkLiBMZWZ0IGZvciBoaXN0b3J5LlxuXHRcdFx0Ly8gcGFuRnJpY3Rpb24gPSAoMSAtIChfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10gKyBwYW5Cb3VuZHMubWluW2F4aXNdKSAvIChfdmlld3BvcnRTaXplW2F4aXNdIC8gNCkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFuRnJpY3Rpb24gPSAxO1xuXHRcdH1cblx0XHRcblx0XHRuZXdPZmZzZXQgPSBfcGFuT2Zmc2V0W2F4aXNdICsgZGVsdGFbYXhpc10gKiBwYW5GcmljdGlvbjtcblxuXHRcdC8vIG1vdmUgbWFpbiBzY3JvbGwgb3Igc3RhcnQgcGFubmluZ1xuXHRcdGlmKF9vcHRpb25zLmFsbG93UGFuVG9OZXh0IHx8IF9jdXJyWm9vbUxldmVsID09PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblxuXG5cdFx0XHRpZighX2N1cnJab29tRWxlbWVudFN0eWxlKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0XHR9IGVsc2UgaWYoX2RpcmVjdGlvbiA9PT0gJ2gnICYmIGF4aXMgPT09ICd4JyAmJiAhX3pvb21TdGFydGVkICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoZGlyKSB7XG5cdFx0XHRcdFx0aWYobmV3T2Zmc2V0ID4gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdKSB7XG5cdFx0XHRcdFx0XHRwYW5GcmljdGlvbiA9IF9vcHRpb25zLnBhbkVuZEZyaWN0aW9uO1xuXHRcdFx0XHRcdFx0b3ZlckRpZmYgPSBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10gLSBuZXdPZmZzZXQ7XG5cdFx0XHRcdFx0XHRzdGFydE92ZXJEaWZmID0gX2N1cnJQYW5Cb3VuZHMubWluW2F4aXNdIC0gX3N0YXJ0UGFuT2Zmc2V0W2F4aXNdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBkcmFnIHJpZ2h0XG5cdFx0XHRcdFx0aWYoIChzdGFydE92ZXJEaWZmIDw9IDAgfHwgbWFpblNjcm9sbERpZmYgPCAwKSAmJiBfZ2V0TnVtSXRlbXMoKSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXHRcdFx0XHRcdFx0aWYobWFpblNjcm9sbERpZmYgPCAwICYmIG5ld01haW5TY3JvbGxQb3NpdGlvbiA+IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gX3N0YXJ0TWFpblNjcm9sbFBvcy54O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZihfY3VyclBhbkJvdW5kcy5taW4ueCAhPT0gX2N1cnJQYW5Cb3VuZHMubWF4LngpIHtcblx0XHRcdFx0XHRcdFx0bmV3UGFuUG9zID0gbmV3T2Zmc2V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRpZihuZXdPZmZzZXQgPCBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc10gKSB7XG5cdFx0XHRcdFx0XHRwYW5GcmljdGlvbiA9X29wdGlvbnMucGFuRW5kRnJpY3Rpb247XG5cdFx0XHRcdFx0XHRvdmVyRGlmZiA9IG5ld09mZnNldCAtIF9jdXJyUGFuQm91bmRzLm1heFtheGlzXTtcblx0XHRcdFx0XHRcdHN0YXJ0T3ZlckRpZmYgPSBfc3RhcnRQYW5PZmZzZXRbYXhpc10gLSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIChzdGFydE92ZXJEaWZmIDw9IDAgfHwgbWFpblNjcm9sbERpZmYgPiAwKSAmJiBfZ2V0TnVtSXRlbXMoKSA+IDEgKSB7XG5cdFx0XHRcdFx0XHRuZXdNYWluU2Nyb2xsUG9zID0gbmV3TWFpblNjcm9sbFBvc2l0aW9uO1xuXG5cdFx0XHRcdFx0XHRpZihtYWluU2Nyb2xsRGlmZiA+IDAgJiYgbmV3TWFpblNjcm9sbFBvc2l0aW9uIDwgX3N0YXJ0TWFpblNjcm9sbFBvcy54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld01haW5TY3JvbGxQb3MgPSBfc3RhcnRNYWluU2Nyb2xsUG9zLng7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0XHRcdG5ld1BhblBvcyA9IG5ld09mZnNldDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0Ly9cblx0XHRcdH1cblxuXHRcdFx0aWYoYXhpcyA9PT0gJ3gnKSB7XG5cblx0XHRcdFx0aWYobmV3TWFpblNjcm9sbFBvcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X21vdmVNYWluU2Nyb2xsKG5ld01haW5TY3JvbGxQb3MsIHRydWUpO1xuXHRcdFx0XHRcdGlmKG5ld01haW5TY3JvbGxQb3MgPT09IF9zdGFydE1haW5TY3JvbGxQb3MueCkge1xuXHRcdFx0XHRcdFx0X21haW5TY3JvbGxTaGlmdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF9tYWluU2Nyb2xsU2hpZnRlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoX2N1cnJQYW5Cb3VuZHMubWluLnggIT09IF9jdXJyUGFuQm91bmRzLm1heC54KSB7XG5cdFx0XHRcdFx0aWYobmV3UGFuUG9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IG5ld1BhblBvcztcblx0XHRcdFx0XHR9IGVsc2UgaWYoIV9tYWluU2Nyb2xsU2hpZnRlZCkge1xuXHRcdFx0XHRcdFx0X3Bhbk9mZnNldC54ICs9IGRlbHRhLnggKiBwYW5GcmljdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbmV3TWFpblNjcm9sbFBvcyAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYoIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRcblx0XHRcdGlmKCFfbWFpblNjcm9sbFNoaWZ0ZWQpIHtcblx0XHRcdFx0aWYoX2N1cnJab29tTGV2ZWwgPiBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdFx0X3Bhbk9mZnNldFtheGlzXSArPSBkZWx0YVtheGlzXSAqIHBhbkZyaWN0aW9uO1xuXHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdH0sXG5cblx0Ly8gUG9pbnRlcmRvd24vdG91Y2hzdGFydC9tb3VzZWRvd24gaGFuZGxlclxuXHRfb25EcmFnU3RhcnQgPSBmdW5jdGlvbihlKSB7XG5cblx0XHQvLyBBbGxvdyBkcmFnZ2luZyBvbmx5IHZpYSBsZWZ0IG1vdXNlIGJ1dHRvbi5cblx0XHQvLyBBcyB0aGlzIGhhbmRsZXIgaXMgbm90IGFkZGVkIGluIElFOCAtIHdlIGlnbm9yZSBlLndoaWNoXG5cdFx0Ly8gXG5cdFx0Ly8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2V2ZW50LmJ1dHRvblxuXHRcdGlmKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZS5idXR0b24gPiAwICApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihfaW5pdGlhbFpvb21SdW5uaW5nKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoX29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgJiYgZS50eXBlID09PSAnbW91c2Vkb3duJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKF9wcmV2ZW50RGVmYXVsdEV2ZW50QmVoYXZpb3VyKGUsIHRydWUpKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cblxuXHRcdF9zaG91dCgncG9pbnRlckRvd24nKTtcblxuXHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHR2YXIgcG9pbnRlckluZGV4ID0gZnJhbWV3b3JrLmFycmF5U2VhcmNoKF9jdXJyUG9pbnRlcnMsIGUucG9pbnRlcklkLCAnaWQnKTtcblx0XHRcdGlmKHBvaW50ZXJJbmRleCA8IDApIHtcblx0XHRcdFx0cG9pbnRlckluZGV4ID0gX2N1cnJQb2ludGVycy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHRfY3VyclBvaW50ZXJzW3BvaW50ZXJJbmRleF0gPSB7eDplLnBhZ2VYLCB5OmUucGFnZVksIGlkOiBlLnBvaW50ZXJJZH07XG5cdFx0fVxuXHRcdFxuXG5cblx0XHR2YXIgc3RhcnRQb2ludHNMaXN0ID0gX2dldFRvdWNoUG9pbnRzKGUpLFxuXHRcdFx0bnVtUG9pbnRzID0gc3RhcnRQb2ludHNMaXN0Lmxlbmd0aDtcblxuXHRcdF9jdXJyZW50UG9pbnRzID0gbnVsbDtcblxuXHRcdF9zdG9wQWxsQW5pbWF0aW9ucygpO1xuXG5cdFx0Ly8gaW5pdCBkcmFnXG5cdFx0aWYoIV9pc0RyYWdnaW5nIHx8IG51bVBvaW50cyA9PT0gMSkge1xuXG5cdFx0XHRcblxuXHRcdFx0X2lzRHJhZ2dpbmcgPSBfaXNGaXJzdE1vdmUgPSB0cnVlO1xuXHRcdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblxuXHRcdFx0X2lzWm9vbWluZ0luID0gXG5cdFx0XHRcdF93YXNPdmVySW5pdGlhbFpvb20gPSBcblx0XHRcdFx0X29wYWNpdHlDaGFuZ2VkID0gXG5cdFx0XHRcdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQgPSBcblx0XHRcdFx0X21haW5TY3JvbGxTaGlmdGVkID0gXG5cdFx0XHRcdF9tb3ZlZCA9IFxuXHRcdFx0XHRfaXNNdWx0aXRvdWNoID0gXG5cdFx0XHRcdF96b29tU3RhcnRlZCA9IGZhbHNlO1xuXG5cdFx0XHRfZGlyZWN0aW9uID0gbnVsbDtcblxuXHRcdFx0X3Nob3V0KCdmaXJzdFRvdWNoU3RhcnQnLCBzdGFydFBvaW50c0xpc3QpO1xuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX3N0YXJ0UGFuT2Zmc2V0LCBfcGFuT2Zmc2V0KTtcblxuXHRcdFx0X2N1cnJQYW5EaXN0LnggPSBfY3VyclBhbkRpc3QueSA9IDA7XG5cdFx0XHRfZXF1YWxpemVQb2ludHMoX2N1cnJQb2ludCwgc3RhcnRQb2ludHNMaXN0WzBdKTtcblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhfc3RhcnRQb2ludCwgX2N1cnJQb2ludCk7XG5cblx0XHRcdC8vX2VxdWFsaXplUG9pbnRzKF9zdGFydE1haW5TY3JvbGxQb3MsIF9tYWluU2Nyb2xsUG9zKTtcblx0XHRcdF9zdGFydE1haW5TY3JvbGxQb3MueCA9IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleDtcblxuXHRcdFx0X3Bvc1BvaW50cyA9IFt7XG5cdFx0XHRcdHg6IF9jdXJyUG9pbnQueCxcblx0XHRcdFx0eTogX2N1cnJQb2ludC55XG5cdFx0XHR9XTtcblxuXHRcdFx0X2dlc3R1cmVDaGVja1NwZWVkVGltZSA9IF9nZXN0dXJlU3RhcnRUaW1lID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cblx0XHRcdC8vX21haW5TY3JvbGxBbmltYXRpb25FbmQodHJ1ZSk7XG5cdFx0XHRfY2FsY3VsYXRlUGFuQm91bmRzKCBfY3Vyclpvb21MZXZlbCwgdHJ1ZSApO1xuXHRcdFx0XG5cdFx0XHQvLyBTdGFydCByZW5kZXJpbmdcblx0XHRcdF9zdG9wRHJhZ1VwZGF0ZUxvb3AoKTtcblx0XHRcdF9kcmFnVXBkYXRlTG9vcCgpO1xuXHRcdFx0XG5cdFx0fVxuXG5cdFx0Ly8gaW5pdCB6b29tXG5cdFx0aWYoIV9pc1pvb21pbmcgJiYgbnVtUG9pbnRzID4gMSAmJiAhX21haW5TY3JvbGxBbmltYXRpbmcgJiYgIV9tYWluU2Nyb2xsU2hpZnRlZCkge1xuXHRcdFx0X3N0YXJ0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWw7XG5cdFx0XHRfem9vbVN0YXJ0ZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiB6b29tIGNoYW5nZWQgYXQgbGVhc3Qgb25jZVxuXG5cdFx0XHRfaXNab29taW5nID0gX2lzTXVsdGl0b3VjaCA9IHRydWU7XG5cdFx0XHRfY3VyclBhbkRpc3QueSA9IF9jdXJyUGFuRGlzdC54ID0gMDtcblxuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBhbk9mZnNldCwgX3Bhbk9mZnNldCk7XG5cblx0XHRcdF9lcXVhbGl6ZVBvaW50cyhwLCBzdGFydFBvaW50c0xpc3RbMF0pO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKHAyLCBzdGFydFBvaW50c0xpc3RbMV0pO1xuXG5cdFx0XHRfZmluZENlbnRlck9mUG9pbnRzKHAsIHAyLCBfY3VyckNlbnRlclBvaW50KTtcblxuXHRcdFx0X21pZFpvb21Qb2ludC54ID0gTWF0aC5hYnMoX2N1cnJDZW50ZXJQb2ludC54KSAtIF9wYW5PZmZzZXQueDtcblx0XHRcdF9taWRab29tUG9pbnQueSA9IE1hdGguYWJzKF9jdXJyQ2VudGVyUG9pbnQueSkgLSBfcGFuT2Zmc2V0Lnk7XG5cdFx0XHRfY3VyclBvaW50c0Rpc3RhbmNlID0gX3N0YXJ0UG9pbnRzRGlzdGFuY2UgPSBfY2FsY3VsYXRlUG9pbnRzRGlzdGFuY2UocCwgcDIpO1xuXHRcdH1cblxuXG5cdH0sXG5cblx0Ly8gUG9pbnRlcm1vdmUvdG91Y2htb3ZlL21vdXNlbW92ZSBoYW5kbGVyXG5cdF9vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZSkge1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdHZhciBwb2ludGVySW5kZXggPSBmcmFtZXdvcmsuYXJyYXlTZWFyY2goX2N1cnJQb2ludGVycywgZS5wb2ludGVySWQsICdpZCcpO1xuXHRcdFx0aWYocG9pbnRlckluZGV4ID4gLTEpIHtcblx0XHRcdFx0dmFyIHAgPSBfY3VyclBvaW50ZXJzW3BvaW50ZXJJbmRleF07XG5cdFx0XHRcdHAueCA9IGUucGFnZVg7XG5cdFx0XHRcdHAueSA9IGUucGFnZVk7IFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9pc0RyYWdnaW5nKSB7XG5cdFx0XHR2YXIgdG91Y2hlc0xpc3QgPSBfZ2V0VG91Y2hQb2ludHMoZSk7XG5cdFx0XHRpZighX2RpcmVjdGlvbiAmJiAhX21vdmVkICYmICFfaXNab29taW5nKSB7XG5cblx0XHRcdFx0aWYoX21haW5TY3JvbGxQb3MueCAhPT0gX3NsaWRlU2l6ZS54ICogX2N1cnJQb3NpdGlvbkluZGV4KSB7XG5cdFx0XHRcdFx0Ly8gaWYgbWFpbiBzY3JvbGwgcG9zaXRpb24gaXMgc2hpZnRlZCDigJMgZGlyZWN0aW9uIGlzIGFsd2F5cyBob3Jpem9udGFsXG5cdFx0XHRcdFx0X2RpcmVjdGlvbiA9ICdoJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgZGlmZiA9IE1hdGguYWJzKHRvdWNoZXNMaXN0WzBdLnggLSBfY3VyclBvaW50LngpIC0gTWF0aC5hYnModG91Y2hlc0xpc3RbMF0ueSAtIF9jdXJyUG9pbnQueSk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgdGhlIGRpcmVjdGlvbiBvZiBtb3ZlbWVudFxuXHRcdFx0XHRcdGlmKE1hdGguYWJzKGRpZmYpID49IERJUkVDVElPTl9DSEVDS19PRkZTRVQpIHtcblx0XHRcdFx0XHRcdF9kaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdoJyA6ICd2Jztcblx0XHRcdFx0XHRcdF9jdXJyZW50UG9pbnRzID0gdG91Y2hlc0xpc3Q7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2N1cnJlbnRQb2ludHMgPSB0b3VjaGVzTGlzdDtcblx0XHRcdH1cblx0XHR9XHRcblx0fSxcblx0Ly8gXG5cdF9yZW5kZXJNb3ZlbWVudCA9ICBmdW5jdGlvbigpIHtcblxuXHRcdGlmKCFfY3VycmVudFBvaW50cykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBudW1Qb2ludHMgPSBfY3VycmVudFBvaW50cy5sZW5ndGg7XG5cblx0XHRpZihudW1Qb2ludHMgPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfZXF1YWxpemVQb2ludHMocCwgX2N1cnJlbnRQb2ludHNbMF0pO1xuXG5cdFx0ZGVsdGEueCA9IHAueCAtIF9jdXJyUG9pbnQueDtcblx0XHRkZWx0YS55ID0gcC55IC0gX2N1cnJQb2ludC55O1xuXG5cdFx0aWYoX2lzWm9vbWluZyAmJiBudW1Qb2ludHMgPiAxKSB7XG5cdFx0XHQvLyBIYW5kbGUgYmVoYXZpb3VyIGZvciBtb3JlIHRoYW4gMSBwb2ludFxuXG5cdFx0XHRfY3VyclBvaW50LnggPSBwLng7XG5cdFx0XHRfY3VyclBvaW50LnkgPSBwLnk7XG5cdFx0XG5cdFx0XHQvLyBjaGVjayBpZiBvbmUgb2YgdHdvIHBvaW50cyBjaGFuZ2VkXG5cdFx0XHRpZiggIWRlbHRhLnggJiYgIWRlbHRhLnkgJiYgX2lzRXF1YWxQb2ludHMoX2N1cnJlbnRQb2ludHNbMV0sIHAyKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfZXF1YWxpemVQb2ludHMocDIsIF9jdXJyZW50UG9pbnRzWzFdKTtcblxuXG5cdFx0XHRpZighX3pvb21TdGFydGVkKSB7XG5cdFx0XHRcdF96b29tU3RhcnRlZCA9IHRydWU7XG5cdFx0XHRcdF9zaG91dCgnem9vbUdlc3R1cmVTdGFydGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIERpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xuXHRcdFx0dmFyIHBvaW50c0Rpc3RhbmNlID0gX2NhbGN1bGF0ZVBvaW50c0Rpc3RhbmNlKHAscDIpO1xuXG5cdFx0XHR2YXIgem9vbUxldmVsID0gX2NhbGN1bGF0ZVpvb21MZXZlbChwb2ludHNEaXN0YW5jZSk7XG5cblx0XHRcdC8vIHNsaWdodGx5IG92ZXIgdGhlIG9mIGluaXRpYWwgem9vbSBsZXZlbFxuXHRcdFx0aWYoem9vbUxldmVsID4gc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsICsgc2VsZi5jdXJySXRlbS5pbml0aWFsWm9vbUxldmVsIC8gMTUpIHtcblx0XHRcdFx0X3dhc092ZXJJbml0aWFsWm9vbSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IHRoZSBmcmljdGlvbiBpZiB6b29tIGxldmVsIGlzIG91dCBvZiB0aGUgYm91bmRzXG5cdFx0XHR2YXIgem9vbUZyaWN0aW9uID0gMSxcblx0XHRcdFx0bWluWm9vbUxldmVsID0gX2dldE1pblpvb21MZXZlbCgpLFxuXHRcdFx0XHRtYXhab29tTGV2ZWwgPSBfZ2V0TWF4Wm9vbUxldmVsKCk7XG5cblx0XHRcdGlmICggem9vbUxldmVsIDwgbWluWm9vbUxldmVsICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoX29wdGlvbnMucGluY2hUb0Nsb3NlICYmICFfd2FzT3ZlckluaXRpYWxab29tICYmIF9zdGFydFpvb21MZXZlbCA8PSBzZWxmLmN1cnJJdGVtLmluaXRpYWxab29tTGV2ZWwpIHtcblx0XHRcdFx0XHQvLyBmYWRlIG91dCBiYWNrZ3JvdW5kIGlmIHpvb21pbmcgb3V0XG5cdFx0XHRcdFx0dmFyIG1pbnVzRGlmZiA9IG1pblpvb21MZXZlbCAtIHpvb21MZXZlbDtcblx0XHRcdFx0XHR2YXIgcGVyY2VudCA9IDEgLSBtaW51c0RpZmYgLyAobWluWm9vbUxldmVsIC8gMS4yKTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eShwZXJjZW50KTtcblx0XHRcdFx0XHRfc2hvdXQoJ29uUGluY2hDbG9zZScsIHBlcmNlbnQpO1xuXHRcdFx0XHRcdF9vcGFjaXR5Q2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gKG1pblpvb21MZXZlbCAtIHpvb21MZXZlbCkgLyBtaW5ab29tTGV2ZWw7XG5cdFx0XHRcdFx0aWYoem9vbUZyaWN0aW9uID4gMSkge1xuXHRcdFx0XHRcdFx0em9vbUZyaWN0aW9uID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0em9vbUxldmVsID0gbWluWm9vbUxldmVsIC0gem9vbUZyaWN0aW9uICogKG1pblpvb21MZXZlbCAvIDMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICggem9vbUxldmVsID4gbWF4Wm9vbUxldmVsICkge1xuXHRcdFx0XHQvLyAxLjUgLSBleHRyYSB6b29tIGxldmVsIGFib3ZlIHRoZSBtYXguIEUuZy4gaWYgbWF4IGlzIHg2LCByZWFsIG1heCA2ICsgMS41ID0gNy41XG5cdFx0XHRcdHpvb21GcmljdGlvbiA9ICh6b29tTGV2ZWwgLSBtYXhab29tTGV2ZWwpIC8gKCBtaW5ab29tTGV2ZWwgKiA2ICk7XG5cdFx0XHRcdGlmKHpvb21GcmljdGlvbiA+IDEpIHtcblx0XHRcdFx0XHR6b29tRnJpY3Rpb24gPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHpvb21MZXZlbCA9IG1heFpvb21MZXZlbCArIHpvb21GcmljdGlvbiAqIG1pblpvb21MZXZlbDtcblx0XHRcdH1cblxuXHRcdFx0aWYoem9vbUZyaWN0aW9uIDwgMCkge1xuXHRcdFx0XHR6b29tRnJpY3Rpb24gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBkaXN0YW5jZSBiZXR3ZWVuIHRvdWNoIHBvaW50cyBhZnRlciBmcmljdGlvbiBpcyBhcHBsaWVkXG5cdFx0XHRfY3VyclBvaW50c0Rpc3RhbmNlID0gcG9pbnRzRGlzdGFuY2U7XG5cblx0XHRcdC8vIF9jZW50ZXJQb2ludCAtIFRoZSBwb2ludCBpbiB0aGUgbWlkZGxlIG9mIHR3byBwb2ludGVyc1xuXHRcdFx0X2ZpbmRDZW50ZXJPZlBvaW50cyhwLCBwMiwgX2NlbnRlclBvaW50KTtcblx0XHRcblx0XHRcdC8vIHBhbmluZyB3aXRoIHR3byBwb2ludGVycyBwcmVzc2VkXG5cdFx0XHRfY3VyclBhbkRpc3QueCArPSBfY2VudGVyUG9pbnQueCAtIF9jdXJyQ2VudGVyUG9pbnQueDtcblx0XHRcdF9jdXJyUGFuRGlzdC55ICs9IF9jZW50ZXJQb2ludC55IC0gX2N1cnJDZW50ZXJQb2ludC55O1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9jdXJyQ2VudGVyUG9pbnQsIF9jZW50ZXJQb2ludCk7XG5cblx0XHRcdF9wYW5PZmZzZXQueCA9IF9jYWxjdWxhdGVQYW5PZmZzZXQoJ3gnLCB6b29tTGV2ZWwpO1xuXHRcdFx0X3Bhbk9mZnNldC55ID0gX2NhbGN1bGF0ZVBhbk9mZnNldCgneScsIHpvb21MZXZlbCk7XG5cblx0XHRcdF9pc1pvb21pbmdJbiA9IHpvb21MZXZlbCA+IF9jdXJyWm9vbUxldmVsO1xuXHRcdFx0X2N1cnJab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gaGFuZGxlIGJlaGF2aW91ciBmb3Igb25lIHBvaW50IChkcmFnZ2luZyBvciBwYW5uaW5nKVxuXG5cdFx0XHRpZighX2RpcmVjdGlvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9pc0ZpcnN0TW92ZSkge1xuXHRcdFx0XHRfaXNGaXJzdE1vdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBzdWJ0cmFjdCBkcmFnIGRpc3RhbmNlIHRoYXQgd2FzIHVzZWQgZHVyaW5nIHRoZSBkZXRlY3Rpb24gZGlyZWN0aW9uICBcblxuXHRcdFx0XHRpZiggTWF0aC5hYnMoZGVsdGEueCkgPj0gRElSRUNUSU9OX0NIRUNLX09GRlNFVCkge1xuXHRcdFx0XHRcdGRlbHRhLnggLT0gX2N1cnJlbnRQb2ludHNbMF0ueCAtIF9zdGFydFBvaW50Lng7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKCBNYXRoLmFicyhkZWx0YS55KSA+PSBESVJFQ1RJT05fQ0hFQ0tfT0ZGU0VUKSB7XG5cdFx0XHRcdFx0ZGVsdGEueSAtPSBfY3VycmVudFBvaW50c1swXS55IC0gX3N0YXJ0UG9pbnQueTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY3VyclBvaW50LnggPSBwLng7XG5cdFx0XHRfY3VyclBvaW50LnkgPSBwLnk7XG5cblx0XHRcdC8vIGRvIG5vdGhpbmcgaWYgcG9pbnRlcnMgcG9zaXRpb24gaGFzbid0IGNoYW5nZWRcblx0XHRcdGlmKGRlbHRhLnggPT09IDAgJiYgZGVsdGEueSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9kaXJlY3Rpb24gPT09ICd2JyAmJiBfb3B0aW9ucy5jbG9zZU9uVmVydGljYWxEcmFnKSB7XG5cdFx0XHRcdGlmKCFfY2FuUGFuKCkpIHtcblx0XHRcdFx0XHRfY3VyclBhbkRpc3QueSArPSBkZWx0YS55O1xuXHRcdFx0XHRcdF9wYW5PZmZzZXQueSArPSBkZWx0YS55O1xuXG5cdFx0XHRcdFx0dmFyIG9wYWNpdHlSYXRpbyA9IF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8oKTtcblxuXHRcdFx0XHRcdF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdF9zaG91dCgnb25WZXJ0aWNhbERyYWcnLCBvcGFjaXR5UmF0aW8pO1xuXG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KG9wYWNpdHlSYXRpbyk7XG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0XHRyZXR1cm4gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9wdXNoUG9zUG9pbnQoX2dldEN1cnJlbnRUaW1lKCksIHAueCwgcC55KTtcblxuXHRcdFx0X21vdmVkID0gdHJ1ZTtcblx0XHRcdF9jdXJyUGFuQm91bmRzID0gc2VsZi5jdXJySXRlbS5ib3VuZHM7XG5cdFx0XHRcblx0XHRcdHZhciBtYWluU2Nyb2xsQ2hhbmdlZCA9IF9wYW5Pck1vdmVNYWluU2Nyb2xsKCd4JywgZGVsdGEpO1xuXHRcdFx0aWYoIW1haW5TY3JvbGxDaGFuZ2VkKSB7XG5cdFx0XHRcdF9wYW5Pck1vdmVNYWluU2Nyb2xsKCd5JywgZGVsdGEpO1xuXG5cdFx0XHRcdF9yb3VuZFBvaW50KF9wYW5PZmZzZXQpO1xuXHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0sXG5cdFxuXHQvLyBQb2ludGVydXAvcG9pbnRlcmNhbmNlbC90b3VjaGVuZC90b3VjaGNhbmNlbC9tb3VzZXVwIGV2ZW50IGhhbmRsZXJcblx0X29uRHJhZ1JlbGVhc2UgPSBmdW5jdGlvbihlKSB7XG5cblx0XHRpZihfZmVhdHVyZXMuaXNPbGRBbmRyb2lkICkge1xuXG5cdFx0XHRpZihfb2xkQW5kcm9pZFRvdWNoRW5kVGltZW91dCAmJiBlLnR5cGUgPT09ICdtb3VzZXVwJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG9uIEFuZHJvaWQgKHY0LjEsIDQuMiwgNC4zICYgcG9zc2libHkgb2xkZXIpIFxuXHRcdFx0Ly8gZ2hvc3QgbW91c2Vkb3duL3VwIGV2ZW50IGlzbid0IHByZXZlbnRhYmxlIHZpYSBlLnByZXZlbnREZWZhdWx0LFxuXHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGZha2UgbW91c2Vkb3duIGV2ZW50XG5cdFx0XHQvLyBzbyB3ZSBibG9jayBtb3VzZWRvd24vdXAgZm9yIDYwMG1zXG5cdFx0XHRpZiggZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSApIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0KTtcblx0XHRcdFx0X29sZEFuZHJvaWRUb3VjaEVuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdF9vbGRBbmRyb2lkVG91Y2hFbmRUaW1lb3V0ID0gMDtcblx0XHRcdFx0fSwgNjAwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdF9zaG91dCgncG9pbnRlclVwJyk7XG5cblx0XHRpZihfcHJldmVudERlZmF1bHRFdmVudEJlaGF2aW91cihlLCBmYWxzZSkpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHR2YXIgcmVsZWFzZVBvaW50O1xuXG5cdFx0aWYoX3BvaW50ZXJFdmVudEVuYWJsZWQpIHtcblx0XHRcdHZhciBwb2ludGVySW5kZXggPSBmcmFtZXdvcmsuYXJyYXlTZWFyY2goX2N1cnJQb2ludGVycywgZS5wb2ludGVySWQsICdpZCcpO1xuXHRcdFx0XG5cdFx0XHRpZihwb2ludGVySW5kZXggPiAtMSkge1xuXHRcdFx0XHRyZWxlYXNlUG9pbnQgPSBfY3VyclBvaW50ZXJzLnNwbGljZShwb2ludGVySW5kZXgsIDEpWzBdO1xuXG5cdFx0XHRcdGlmKG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG5cdFx0XHRcdFx0dmFyIE1TUE9JTlRFUl9UWVBFUyA9IHtcblx0XHRcdFx0XHRcdDQ6ICdtb3VzZScsIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX01PVVNFXG5cdFx0XHRcdFx0XHQyOiAndG91Y2gnLCAvLyBldmVudC5NU1BPSU5URVJfVFlQRV9UT1VDSCBcblx0XHRcdFx0XHRcdDM6ICdwZW4nIC8vIGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1BFTlxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50LnR5cGUgPSBNU1BPSU5URVJfVFlQRVNbZS5wb2ludGVyVHlwZV07XG5cblx0XHRcdFx0XHRpZighcmVsZWFzZVBvaW50LnR5cGUpIHtcblx0XHRcdFx0XHRcdHJlbGVhc2VQb2ludC50eXBlID0gZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQudHlwZSA9IGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJztcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHRvdWNoTGlzdCA9IF9nZXRUb3VjaFBvaW50cyhlKSxcblx0XHRcdGdlc3R1cmVUeXBlLFxuXHRcdFx0bnVtUG9pbnRzID0gdG91Y2hMaXN0Lmxlbmd0aDtcblxuXHRcdGlmKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG5cdFx0XHRudW1Qb2ludHMgPSAwO1xuXHRcdH1cblxuXHRcdC8vIERvIG5vdGhpbmcgaWYgdGhlcmUgd2VyZSAzIHRvdWNoIHBvaW50cyBvciBtb3JlXG5cdFx0aWYobnVtUG9pbnRzID09PSAyKSB7XG5cdFx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBzZWNvbmQgcG9pbnRlciByZWxlYXNlZFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMSkge1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9zdGFydFBvaW50LCB0b3VjaExpc3RbMF0pO1xuXHRcdH1cdFx0XHRcdFxuXG5cblx0XHQvLyBwb2ludGVyIGhhc24ndCBtb3ZlZCwgc2VuZCBcInRhcCByZWxlYXNlXCIgcG9pbnRcblx0XHRpZihudW1Qb2ludHMgPT09IDAgJiYgIV9kaXJlY3Rpb24gJiYgIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRpZighcmVsZWFzZVBvaW50KSB7XG5cdFx0XHRcdGlmKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG5cdFx0XHRcdFx0cmVsZWFzZVBvaW50ID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVksIHR5cGU6J21vdXNlJ307XG5cdFx0XHRcdH0gZWxzZSBpZihlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHtcblx0XHRcdFx0XHRyZWxlYXNlUG9pbnQgPSB7eDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCwgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSwgdHlwZTondG91Y2gnfTtcblx0XHRcdFx0fVx0XHRcblx0XHRcdH1cblxuXHRcdFx0X3Nob3V0KCd0b3VjaFJlbGVhc2UnLCBlLCByZWxlYXNlUG9pbnQpO1xuXHRcdH1cblxuXHRcdC8vIERpZmZlcmVuY2UgaW4gdGltZSBiZXR3ZWVuIHJlbGVhc2luZyBvZiB0d28gbGFzdCB0b3VjaCBwb2ludHMgKHpvb20gZ2VzdHVyZSlcblx0XHR2YXIgcmVsZWFzZVRpbWVEaWZmID0gLTE7XG5cblx0XHQvLyBHZXN0dXJlIGNvbXBsZXRlZCwgbm8gcG9pbnRlcnMgbGVmdFxuXHRcdGlmKG51bVBvaW50cyA9PT0gMCkge1xuXHRcdFx0X2lzRHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGZyYW1ld29yay51bmJpbmQod2luZG93LCBfdXBNb3ZlRXZlbnRzLCBzZWxmKTtcblxuXHRcdFx0X3N0b3BEcmFnVXBkYXRlTG9vcCgpO1xuXG5cdFx0XHRpZihfaXNab29taW5nKSB7XG5cdFx0XHRcdC8vIFR3byBwb2ludHMgcmVsZWFzZWQgYXQgdGhlIHNhbWUgdGltZVxuXHRcdFx0XHRyZWxlYXNlVGltZURpZmYgPSAwO1xuXHRcdFx0fSBlbHNlIGlmKF9sYXN0UmVsZWFzZVRpbWUgIT09IC0xKSB7XG5cdFx0XHRcdHJlbGVhc2VUaW1lRGlmZiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2xhc3RSZWxlYXNlVGltZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X2xhc3RSZWxlYXNlVGltZSA9IG51bVBvaW50cyA9PT0gMSA/IF9nZXRDdXJyZW50VGltZSgpIDogLTE7XG5cdFx0XG5cdFx0aWYocmVsZWFzZVRpbWVEaWZmICE9PSAtMSAmJiByZWxlYXNlVGltZURpZmYgPCAxNTApIHtcblx0XHRcdGdlc3R1cmVUeXBlID0gJ3pvb20nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXN0dXJlVHlwZSA9ICdzd2lwZSc7XG5cdFx0fVxuXG5cdFx0aWYoX2lzWm9vbWluZyAmJiBudW1Qb2ludHMgPCAyKSB7XG5cdFx0XHRfaXNab29taW5nID0gZmFsc2U7XG5cblx0XHRcdC8vIE9ubHkgc2Vjb25kIHBvaW50IHJlbGVhc2VkXG5cdFx0XHRpZihudW1Qb2ludHMgPT09IDEpIHtcblx0XHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbVBvaW50ZXJVcCc7XG5cdFx0XHR9XG5cdFx0XHRfc2hvdXQoJ3pvb21HZXN0dXJlRW5kZWQnKTtcblx0XHR9XG5cblx0XHRfY3VycmVudFBvaW50cyA9IG51bGw7XG5cdFx0aWYoIV9tb3ZlZCAmJiAhX3pvb21TdGFydGVkICYmICFfbWFpblNjcm9sbEFuaW1hdGluZyAmJiAhX3ZlcnRpY2FsRHJhZ0luaXRpYXRlZCkge1xuXHRcdFx0Ly8gbm90aGluZyB0byBhbmltYXRlXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0XHRfc3RvcEFsbEFuaW1hdGlvbnMoKTtcblxuXHRcdFxuXHRcdGlmKCFfcmVsZWFzZUFuaW1EYXRhKSB7XG5cdFx0XHRfcmVsZWFzZUFuaW1EYXRhID0gX2luaXREcmFnUmVsZWFzZUFuaW1hdGlvbkRhdGEoKTtcblx0XHR9XG5cdFx0XG5cdFx0X3JlbGVhc2VBbmltRGF0YS5jYWxjdWxhdGVTd2lwZVNwZWVkKCd4Jyk7XG5cblxuXHRcdGlmKF92ZXJ0aWNhbERyYWdJbml0aWF0ZWQpIHtcblxuXHRcdFx0dmFyIG9wYWNpdHlSYXRpbyA9IF9jYWxjdWxhdGVWZXJ0aWNhbERyYWdPcGFjaXR5UmF0aW8oKTtcblxuXHRcdFx0aWYob3BhY2l0eVJhdGlvIDwgX29wdGlvbnMudmVydGljYWxEcmFnUmFuZ2UpIHtcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGluaXRhbFBhblkgPSBfcGFuT2Zmc2V0LnksXG5cdFx0XHRcdFx0aW5pdGlhbEJnT3BhY2l0eSA9IF9iZ09wYWNpdHk7XG5cblx0XHRcdFx0X2FuaW1hdGVQcm9wKCd2ZXJ0aWNhbERyYWcnLCAwLCAxLCAzMDAsIGZyYW1ld29yay5lYXNpbmcuY3ViaWMub3V0LCBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSAoc2VsZi5jdXJySXRlbS5pbml0aWFsUG9zaXRpb24ueSAtIGluaXRhbFBhblkpICogbm93ICsgaW5pdGFsUGFuWTtcblxuXHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggICgxIC0gaW5pdGlhbEJnT3BhY2l0eSkgKiBub3cgKyBpbml0aWFsQmdPcGFjaXR5ICk7XG5cdFx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0X3Nob3V0KCdvblZlcnRpY2FsRHJhZycsIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cblx0XHQvLyBtYWluIHNjcm9sbCBcblx0XHRpZiggIChfbWFpblNjcm9sbFNoaWZ0ZWQgfHwgX21haW5TY3JvbGxBbmltYXRpbmcpICYmIG51bVBvaW50cyA9PT0gMCkge1xuXHRcdFx0dmFyIGl0ZW1DaGFuZ2VkID0gX2ZpbmlzaFN3aXBlTWFpblNjcm9sbEdlc3R1cmUoZ2VzdHVyZVR5cGUsIF9yZWxlYXNlQW5pbURhdGEpO1xuXHRcdFx0aWYoaXRlbUNoYW5nZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2VzdHVyZVR5cGUgPSAnem9vbVBvaW50ZXJVcCc7XG5cdFx0fVxuXG5cdFx0Ly8gcHJldmVudCB6b29tL3BhbiBhbmltYXRpb24gd2hlbiBtYWluIHNjcm9sbCBhbmltYXRpb24gcnVuc1xuXHRcdGlmKF9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdC8vIENvbXBsZXRlIHNpbXBsZSB6b29tIGdlc3R1cmUgKHJlc2V0IHpvb20gbGV2ZWwgaWYgaXQncyBvdXQgb2YgdGhlIGJvdW5kcykgIFxuXHRcdGlmKGdlc3R1cmVUeXBlICE9PSAnc3dpcGUnKSB7XG5cdFx0XHRfY29tcGxldGVab29tR2VzdHVyZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdFx0Ly8gQ29tcGxldGUgcGFuIGdlc3R1cmUgaWYgbWFpbiBzY3JvbGwgaXMgbm90IHNoaWZ0ZWQsIGFuZCBpdCdzIHBvc3NpYmxlIHRvIHBhbiBjdXJyZW50IGltYWdlXG5cdFx0aWYoIV9tYWluU2Nyb2xsU2hpZnRlZCAmJiBfY3Vyclpvb21MZXZlbCA+IHNlbGYuY3Vyckl0ZW0uZml0UmF0aW8pIHtcblx0XHRcdF9jb21wbGV0ZVBhbkdlc3R1cmUoX3JlbGVhc2VBbmltRGF0YSk7XG5cdFx0fVxuXHR9LFxuXG5cblx0Ly8gUmV0dXJucyBvYmplY3Qgd2l0aCBkYXRhIGFib3V0IGdlc3R1cmVcblx0Ly8gSXQncyBjcmVhdGVkIG9ubHkgb25jZSBhbmQgdGhlbiByZXVzZWRcblx0X2luaXREcmFnUmVsZWFzZUFuaW1hdGlvbkRhdGEgID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGVtcCBsb2NhbCB2YXJzXG5cdFx0dmFyIGxhc3RGbGlja0R1cmF0aW9uLFxuXHRcdFx0dGVtcFJlbGVhc2VQb3M7XG5cblx0XHQvLyBzID0gdGhpc1xuXHRcdHZhciBzID0ge1xuXHRcdFx0bGFzdEZsaWNrT2Zmc2V0OiB7fSxcblx0XHRcdGxhc3RGbGlja0Rpc3Q6IHt9LFxuXHRcdFx0bGFzdEZsaWNrU3BlZWQ6IHt9LFxuXHRcdFx0c2xvd0Rvd25SYXRpbzogIHt9LFxuXHRcdFx0c2xvd0Rvd25SYXRpb1JldmVyc2U6ICB7fSxcblx0XHRcdHNwZWVkRGVjZWxlcmF0aW9uUmF0aW86ICB7fSxcblx0XHRcdHNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnM6ICB7fSxcblx0XHRcdGRpc3RhbmNlT2Zmc2V0OiAge30sXG5cdFx0XHRiYWNrQW5pbURlc3RpbmF0aW9uOiB7fSxcblx0XHRcdGJhY2tBbmltU3RhcnRlZDoge30sXG5cdFx0XHRjYWxjdWxhdGVTd2lwZVNwZWVkOiBmdW5jdGlvbihheGlzKSB7XG5cdFx0XHRcdFxuXG5cdFx0XHRcdGlmKCBfcG9zUG9pbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRsYXN0RmxpY2tEdXJhdGlvbiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2dlc3R1cmVDaGVja1NwZWVkVGltZSArIDUwO1xuXHRcdFx0XHRcdHRlbXBSZWxlYXNlUG9zID0gX3Bvc1BvaW50c1tfcG9zUG9pbnRzLmxlbmd0aC0yXVtheGlzXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsYXN0RmxpY2tEdXJhdGlvbiA9IF9nZXRDdXJyZW50VGltZSgpIC0gX2dlc3R1cmVTdGFydFRpbWU7IC8vIHRvdGFsIGdlc3R1cmUgZHVyYXRpb25cblx0XHRcdFx0XHR0ZW1wUmVsZWFzZVBvcyA9IF9zdGFydFBvaW50W2F4aXNdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdID0gX2N1cnJQb2ludFtheGlzXSAtIHRlbXBSZWxlYXNlUG9zO1xuXHRcdFx0XHRzLmxhc3RGbGlja0Rpc3RbYXhpc10gPSBNYXRoLmFicyhzLmxhc3RGbGlja09mZnNldFtheGlzXSk7XG5cdFx0XHRcdGlmKHMubGFzdEZsaWNrRGlzdFtheGlzXSA+IDIwKSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IHMubGFzdEZsaWNrT2Zmc2V0W2F4aXNdIC8gbGFzdEZsaWNrRHVyYXRpb247XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cy5sYXN0RmxpY2tTcGVlZFtheGlzXSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoIE1hdGguYWJzKHMubGFzdEZsaWNrU3BlZWRbYXhpc10pIDwgMC4xICkge1xuXHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRzLnNsb3dEb3duUmF0aW9bYXhpc10gPSAwLjk1O1xuXHRcdFx0XHRzLnNsb3dEb3duUmF0aW9SZXZlcnNlW2F4aXNdID0gMSAtIHMuc2xvd0Rvd25SYXRpb1theGlzXTtcblx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvW2F4aXNdID0gMTtcblx0XHRcdH0sXG5cblx0XHRcdGNhbGN1bGF0ZU92ZXJCb3VuZHNBbmltT2Zmc2V0OiBmdW5jdGlvbihheGlzLCBzcGVlZCkge1xuXHRcdFx0XHRpZighcy5iYWNrQW5pbVN0YXJ0ZWRbYXhpc10pIHtcblxuXHRcdFx0XHRcdGlmKF9wYW5PZmZzZXRbYXhpc10gPiBfY3VyclBhbkJvdW5kcy5taW5bYXhpc10pIHtcblx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSA9IF9jdXJyUGFuQm91bmRzLm1pbltheGlzXTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSBpZihfcGFuT2Zmc2V0W2F4aXNdIDwgX2N1cnJQYW5Cb3VuZHMubWF4W2F4aXNdKSB7XG5cdFx0XHRcdFx0XHRzLmJhY2tBbmltRGVzdGluYXRpb25bYXhpc10gPSBfY3VyclBhbkJvdW5kcy5tYXhbYXhpc107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYocy5iYWNrQW5pbURlc3RpbmF0aW9uW2F4aXNdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1theGlzXSA9IDAuNztcblx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gPSAxIC0gcy5zbG93RG93blJhdGlvW2F4aXNdO1xuXHRcdFx0XHRcdFx0aWYocy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzW2F4aXNdIDwgMC4wNSkge1xuXG5cdFx0XHRcdFx0XHRcdHMubGFzdEZsaWNrU3BlZWRbYXhpc10gPSAwO1xuXHRcdFx0XHRcdFx0XHRzLmJhY2tBbmltU3RhcnRlZFtheGlzXSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0X2FuaW1hdGVQcm9wKCdib3VuY2Vab29tUGFuJytheGlzLF9wYW5PZmZzZXRbYXhpc10sIFxuXHRcdFx0XHRcdFx0XHRcdHMuYmFja0FuaW1EZXN0aW5hdGlvbltheGlzXSwgXG5cdFx0XHRcdFx0XHRcdFx0c3BlZWQgfHwgMzAwLCBcblx0XHRcdFx0XHRcdFx0XHRmcmFtZXdvcmsuZWFzaW5nLnNpbmUub3V0LCBcblx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbihwb3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gPSBwb3M7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVkdWNlcyB0aGUgc3BlZWQgYnkgc2xvd0Rvd25SYXRpbyAocGVyIDEwbXMpXG5cdFx0XHRjYWxjdWxhdGVBbmltT2Zmc2V0OiBmdW5jdGlvbihheGlzKSB7XG5cdFx0XHRcdGlmKCFzLmJhY2tBbmltU3RhcnRlZFtheGlzXSkge1xuXHRcdFx0XHRcdHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSA9IHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSAqIChzLnNsb3dEb3duUmF0aW9bYXhpc10gKyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gLSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHMuc2xvd0Rvd25SYXRpb1JldmVyc2VbYXhpc10gKiBzLnRpbWVEaWZmIC8gMTApO1xuXG5cdFx0XHRcdFx0cy5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzW2F4aXNdID0gTWF0aC5hYnMocy5sYXN0RmxpY2tTcGVlZFtheGlzXSAqIHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb1theGlzXSk7XG5cdFx0XHRcdFx0cy5kaXN0YW5jZU9mZnNldFtheGlzXSA9IHMubGFzdEZsaWNrU3BlZWRbYXhpc10gKiBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9bYXhpc10gKiBzLnRpbWVEaWZmO1xuXHRcdFx0XHRcdF9wYW5PZmZzZXRbYXhpc10gKz0gcy5kaXN0YW5jZU9mZnNldFtheGlzXTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRwYW5BbmltTG9vcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggX2FuaW1hdGlvbnMuem9vbVBhbiApIHtcblx0XHRcdFx0XHRfYW5pbWF0aW9ucy56b29tUGFuLnJhZiA9IF9yZXF1ZXN0QUYocy5wYW5BbmltTG9vcCk7XG5cblx0XHRcdFx0XHRzLm5vdyA9IF9nZXRDdXJyZW50VGltZSgpO1xuXHRcdFx0XHRcdHMudGltZURpZmYgPSBzLm5vdyAtIHMubGFzdE5vdztcblx0XHRcdFx0XHRzLmxhc3ROb3cgPSBzLm5vdztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZUFuaW1PZmZzZXQoJ3gnKTtcblx0XHRcdFx0XHRzLmNhbGN1bGF0ZUFuaW1PZmZzZXQoJ3knKTtcblxuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cy5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0XHRcdHMuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3knKTtcblxuXG5cdFx0XHRcdFx0aWYgKHMuc3BlZWREZWNlbGVyYXRpb25SYXRpb0Ficy54IDwgMC4wNSAmJiBzLnNwZWVkRGVjZWxlcmF0aW9uUmF0aW9BYnMueSA8IDAuMDUpIHtcblxuXHRcdFx0XHRcdFx0Ly8gcm91bmQgcGFuIHBvc2l0aW9uXG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSBNYXRoLnJvdW5kKF9wYW5PZmZzZXQueCk7XG5cdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnkgPSBNYXRoLnJvdW5kKF9wYW5PZmZzZXQueSk7XG5cdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRfc3RvcEFuaW1hdGlvbignem9vbVBhbicpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcztcblx0fSxcblxuXHRfY29tcGxldGVQYW5HZXN0dXJlID0gZnVuY3Rpb24oYW5pbURhdGEpIHtcblx0XHQvLyBjYWxjdWxhdGUgc3dpcGUgc3BlZWQgZm9yIFkgYXhpcyAocGFhbm5pbmcpXG5cdFx0YW5pbURhdGEuY2FsY3VsYXRlU3dpcGVTcGVlZCgneScpO1xuXG5cdFx0X2N1cnJQYW5Cb3VuZHMgPSBzZWxmLmN1cnJJdGVtLmJvdW5kcztcblx0XHRcblx0XHRhbmltRGF0YS5iYWNrQW5pbURlc3RpbmF0aW9uID0ge307XG5cdFx0YW5pbURhdGEuYmFja0FuaW1TdGFydGVkID0ge307XG5cblx0XHQvLyBBdm9pZCBhY2NlbGVyYXRpb24gYW5pbWF0aW9uIGlmIHNwZWVkIGlzIHRvbyBsb3dcblx0XHRpZihNYXRoLmFicyhhbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54KSA8PSAwLjA1ICYmIE1hdGguYWJzKGFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLnkpIDw9IDAuMDUgKSB7XG5cdFx0XHRhbmltRGF0YS5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnggPSBhbmltRGF0YS5zcGVlZERlY2VsZXJhdGlvblJhdGlvQWJzLnkgPSAwO1xuXG5cdFx0XHQvLyBSdW4gcGFuIGRyYWcgcmVsZWFzZSBhbmltYXRpb24uIEUuZy4gaWYgeW91IGRyYWcgaW1hZ2UgYW5kIHJlbGVhc2UgZmluZ2VyIHdpdGhvdXQgbW9tZW50dW0uXG5cdFx0XHRhbmltRGF0YS5jYWxjdWxhdGVPdmVyQm91bmRzQW5pbU9mZnNldCgneCcpO1xuXHRcdFx0YW5pbURhdGEuY2FsY3VsYXRlT3ZlckJvdW5kc0FuaW1PZmZzZXQoJ3knKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEFuaW1hdGlvbiBsb29wIHRoYXQgY29udHJvbHMgdGhlIGFjY2VsZXJhdGlvbiBhZnRlciBwYW4gZ2VzdHVyZSBlbmRzXG5cdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24oJ3pvb21QYW4nKTtcblx0XHRhbmltRGF0YS5sYXN0Tm93ID0gX2dldEN1cnJlbnRUaW1lKCk7XG5cdFx0YW5pbURhdGEucGFuQW5pbUxvb3AoKTtcblx0fSxcblxuXG5cdF9maW5pc2hTd2lwZU1haW5TY3JvbGxHZXN0dXJlID0gZnVuY3Rpb24oZ2VzdHVyZVR5cGUsIF9yZWxlYXNlQW5pbURhdGEpIHtcblx0XHR2YXIgaXRlbUNoYW5nZWQ7XG5cdFx0aWYoIV9tYWluU2Nyb2xsQW5pbWF0aW5nKSB7XG5cdFx0XHRfY3Vyclpvb21lZEl0ZW1JbmRleCA9IF9jdXJyZW50SXRlbUluZGV4O1xuXHRcdH1cblxuXG5cdFx0XG5cdFx0dmFyIGl0ZW1zRGlmZjtcblxuXHRcdGlmKGdlc3R1cmVUeXBlID09PSAnc3dpcGUnKSB7XG5cdFx0XHR2YXIgdG90YWxTaGlmdERpc3QgPSBfY3VyclBvaW50LnggLSBfc3RhcnRQb2ludC54LFxuXHRcdFx0XHRpc0Zhc3RMYXN0RmxpY2sgPSBfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja0Rpc3QueCA8IDEwO1xuXG5cdFx0XHQvLyBpZiBjb250YWluZXIgaXMgc2hpZnRlZCBmb3IgbW9yZSB0aGFuIE1JTl9TV0lQRV9ESVNUQU5DRSwgXG5cdFx0XHQvLyBhbmQgbGFzdCBmbGljayBnZXN0dXJlIHdhcyBpbiByaWdodCBkaXJlY3Rpb25cblx0XHRcdGlmKHRvdGFsU2hpZnREaXN0ID4gTUlOX1NXSVBFX0RJU1RBTkNFICYmIFxuXHRcdFx0XHQoaXNGYXN0TGFzdEZsaWNrIHx8IF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrT2Zmc2V0LnggPiAyMCkgKSB7XG5cdFx0XHRcdC8vIGdvIHRvIHByZXYgaXRlbVxuXHRcdFx0XHRpdGVtc0RpZmYgPSAtMTtcblx0XHRcdH0gZWxzZSBpZih0b3RhbFNoaWZ0RGlzdCA8IC1NSU5fU1dJUEVfRElTVEFOQ0UgJiYgXG5cdFx0XHRcdChpc0Zhc3RMYXN0RmxpY2sgfHwgX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tPZmZzZXQueCA8IC0yMCkgKSB7XG5cdFx0XHRcdC8vIGdvIHRvIG5leHQgaXRlbVxuXHRcdFx0XHRpdGVtc0RpZmYgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBuZXh0Q2lyY2xlO1xuXG5cdFx0aWYoaXRlbXNEaWZmKSB7XG5cdFx0XHRcblx0XHRcdF9jdXJyZW50SXRlbUluZGV4ICs9IGl0ZW1zRGlmZjtcblxuXHRcdFx0aWYoX2N1cnJlbnRJdGVtSW5kZXggPCAwKSB7XG5cdFx0XHRcdF9jdXJyZW50SXRlbUluZGV4ID0gX29wdGlvbnMubG9vcCA/IF9nZXROdW1JdGVtcygpLTEgOiAwO1xuXHRcdFx0XHRuZXh0Q2lyY2xlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZihfY3VycmVudEl0ZW1JbmRleCA+PSBfZ2V0TnVtSXRlbXMoKSkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9vcHRpb25zLmxvb3AgPyAwIDogX2dldE51bUl0ZW1zKCktMTtcblx0XHRcdFx0bmV4dENpcmNsZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFuZXh0Q2lyY2xlIHx8IF9vcHRpb25zLmxvb3ApIHtcblx0XHRcdFx0X2luZGV4RGlmZiArPSBpdGVtc0RpZmY7XG5cdFx0XHRcdF9jdXJyUG9zaXRpb25JbmRleCAtPSBpdGVtc0RpZmY7XG5cdFx0XHRcdGl0ZW1DaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRcblx0XHR9XG5cblx0XHR2YXIgYW5pbWF0ZVRvWCA9IF9zbGlkZVNpemUueCAqIF9jdXJyUG9zaXRpb25JbmRleDtcblx0XHR2YXIgYW5pbWF0ZVRvRGlzdCA9IE1hdGguYWJzKCBhbmltYXRlVG9YIC0gX21haW5TY3JvbGxQb3MueCApO1xuXHRcdHZhciBmaW5pc2hBbmltRHVyYXRpb247XG5cblxuXHRcdGlmKCFpdGVtQ2hhbmdlZCAmJiBhbmltYXRlVG9YID4gX21haW5TY3JvbGxQb3MueCAhPT0gX3JlbGVhc2VBbmltRGF0YS5sYXN0RmxpY2tTcGVlZC54ID4gMCkge1xuXHRcdFx0Ly8gXCJyZXR1cm4gdG8gY3VycmVudFwiIGR1cmF0aW9uLCBlLmcuIHdoZW4gZHJhZ2dpbmcgZnJvbSBzbGlkZSAwIHRvIC0xXG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSAzMzM7IFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmaW5pc2hBbmltRHVyYXRpb24gPSBNYXRoLmFicyhfcmVsZWFzZUFuaW1EYXRhLmxhc3RGbGlja1NwZWVkLngpID4gMCA/IFxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVRvRGlzdCAvIE1hdGguYWJzKF9yZWxlYXNlQW5pbURhdGEubGFzdEZsaWNrU3BlZWQueCkgOiBcblx0XHRcdFx0XHRcdFx0XHRcdDMzMztcblxuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gTWF0aC5taW4oZmluaXNoQW5pbUR1cmF0aW9uLCA0MDApO1xuXHRcdFx0ZmluaXNoQW5pbUR1cmF0aW9uID0gTWF0aC5tYXgoZmluaXNoQW5pbUR1cmF0aW9uLCAyNTApO1xuXHRcdH1cblxuXHRcdGlmKF9jdXJyWm9vbWVkSXRlbUluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0aXRlbUNoYW5nZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0X21haW5TY3JvbGxBbmltYXRpbmcgPSB0cnVlO1xuXHRcdFxuXHRcdF9zaG91dCgnbWFpblNjcm9sbEFuaW1TdGFydCcpO1xuXG5cdFx0X2FuaW1hdGVQcm9wKCdtYWluU2Nyb2xsJywgX21haW5TY3JvbGxQb3MueCwgYW5pbWF0ZVRvWCwgZmluaXNoQW5pbUR1cmF0aW9uLCBmcmFtZXdvcmsuZWFzaW5nLmN1YmljLm91dCwgXG5cdFx0XHRfbW92ZU1haW5TY3JvbGwsXG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0X3N0b3BBbGxBbmltYXRpb25zKCk7XG5cdFx0XHRcdF9tYWluU2Nyb2xsQW5pbWF0aW5nID0gZmFsc2U7XG5cdFx0XHRcdF9jdXJyWm9vbWVkSXRlbUluZGV4ID0gLTE7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihpdGVtQ2hhbmdlZCB8fCBfY3Vyclpvb21lZEl0ZW1JbmRleCAhPT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJJdGVtKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdF9zaG91dCgnbWFpblNjcm9sbEFuaW1Db21wbGV0ZScpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZihpdGVtQ2hhbmdlZCkge1xuXHRcdFx0c2VsZi51cGRhdGVDdXJySXRlbSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlbUNoYW5nZWQ7XG5cdH0sXG5cblx0X2NhbGN1bGF0ZVpvb21MZXZlbCA9IGZ1bmN0aW9uKHRvdWNoZXNEaXN0YW5jZSkge1xuXHRcdHJldHVybiAgMSAvIF9zdGFydFBvaW50c0Rpc3RhbmNlICogdG91Y2hlc0Rpc3RhbmNlICogX3N0YXJ0Wm9vbUxldmVsO1xuXHR9LFxuXG5cdC8vIFJlc2V0cyB6b29tIGlmIGl0J3Mgb3V0IG9mIGJvdW5kc1xuXHRfY29tcGxldGVab29tR2VzdHVyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkZXN0Wm9vbUxldmVsID0gX2N1cnJab29tTGV2ZWwsXG5cdFx0XHRtaW5ab29tTGV2ZWwgPSBfZ2V0TWluWm9vbUxldmVsKCksXG5cdFx0XHRtYXhab29tTGV2ZWwgPSBfZ2V0TWF4Wm9vbUxldmVsKCk7XG5cblx0XHRpZiAoIF9jdXJyWm9vbUxldmVsIDwgbWluWm9vbUxldmVsICkge1xuXHRcdFx0ZGVzdFpvb21MZXZlbCA9IG1pblpvb21MZXZlbDtcblx0XHR9IGVsc2UgaWYgKCBfY3Vyclpvb21MZXZlbCA+IG1heFpvb21MZXZlbCApIHtcblx0XHRcdGRlc3Rab29tTGV2ZWwgPSBtYXhab29tTGV2ZWw7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc3RPcGFjaXR5ID0gMSxcblx0XHRcdG9uVXBkYXRlLFxuXHRcdFx0aW5pdGlhbE9wYWNpdHkgPSBfYmdPcGFjaXR5O1xuXG5cdFx0aWYoX29wYWNpdHlDaGFuZ2VkICYmICFfaXNab29taW5nSW4gJiYgIV93YXNPdmVySW5pdGlhbFpvb20gJiYgX2N1cnJab29tTGV2ZWwgPCBtaW5ab29tTGV2ZWwpIHtcblx0XHRcdC8vX2Nsb3NlZEJ5U2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmKF9vcGFjaXR5Q2hhbmdlZCkge1xuXHRcdFx0b25VcGRhdGUgPSBmdW5jdGlvbihub3cpIHtcblx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KCAgKGRlc3RPcGFjaXR5IC0gaW5pdGlhbE9wYWNpdHkpICogbm93ICsgaW5pdGlhbE9wYWNpdHkgKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0c2VsZi56b29tVG8oZGVzdFpvb21MZXZlbCwgMCwgMjAwLCAgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIG9uVXBkYXRlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5fcmVnaXN0ZXJNb2R1bGUoJ0dlc3R1cmVzJywge1xuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRpbml0R2VzdHVyZXM6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdGhhdCBidWlsZHMgdG91Y2gvcG9pbnRlci9tb3VzZSBldmVudHNcblx0XHRcdHZhciBhZGRFdmVudE5hbWVzID0gZnVuY3Rpb24ocHJlZiwgZG93biwgbW92ZSwgdXAsIGNhbmNlbCkge1xuXHRcdFx0XHRfZHJhZ1N0YXJ0RXZlbnQgPSBwcmVmICsgZG93bjtcblx0XHRcdFx0X2RyYWdNb3ZlRXZlbnQgPSBwcmVmICsgbW92ZTtcblx0XHRcdFx0X2RyYWdFbmRFdmVudCA9IHByZWYgKyB1cDtcblx0XHRcdFx0aWYoY2FuY2VsKSB7XG5cdFx0XHRcdFx0X2RyYWdDYW5jZWxFdmVudCA9IHByZWYgKyBjYW5jZWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X2RyYWdDYW5jZWxFdmVudCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRfcG9pbnRlckV2ZW50RW5hYmxlZCA9IF9mZWF0dXJlcy5wb2ludGVyRXZlbnQ7XG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCAmJiBfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0Ly8gd2UgZG9uJ3QgbmVlZCB0b3VjaCBldmVudHMsIGlmIGJyb3dzZXIgc3VwcG9ydHMgcG9pbnRlciBldmVudHNcblx0XHRcdFx0X2ZlYXR1cmVzLnRvdWNoID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9wb2ludGVyRXZlbnRFbmFibGVkKSB7XG5cdFx0XHRcdGlmKG5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG5cdFx0XHRcdFx0Ly8gSUUxMCBwb2ludGVyIGV2ZW50cyBhcmUgY2FzZS1zZW5zaXRpdmVcblx0XHRcdFx0XHRhZGRFdmVudE5hbWVzKCdNU1BvaW50ZXInLCAnRG93bicsICdNb3ZlJywgJ1VwJywgJ0NhbmNlbCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ3BvaW50ZXInLCAnZG93bicsICdtb3ZlJywgJ3VwJywgJ2NhbmNlbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoX2ZlYXR1cmVzLnRvdWNoKSB7XG5cdFx0XHRcdGFkZEV2ZW50TmFtZXMoJ3RvdWNoJywgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJywgJ2NhbmNlbCcpO1xuXHRcdFx0XHRfbGlrZWx5VG91Y2hEZXZpY2UgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkRXZlbnROYW1lcygnbW91c2UnLCAnZG93bicsICdtb3ZlJywgJ3VwJyk7XHRcblx0XHRcdH1cblxuXHRcdFx0X3VwTW92ZUV2ZW50cyA9IF9kcmFnTW92ZUV2ZW50ICsgJyAnICsgX2RyYWdFbmRFdmVudCAgKyAnICcgKyAgX2RyYWdDYW5jZWxFdmVudDtcblx0XHRcdF9kb3duRXZlbnRzID0gX2RyYWdTdGFydEV2ZW50O1xuXG5cdFx0XHRpZihfcG9pbnRlckV2ZW50RW5hYmxlZCAmJiAhX2xpa2VseVRvdWNoRGV2aWNlKSB7XG5cdFx0XHRcdF9saWtlbHlUb3VjaERldmljZSA9IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSB8fCAobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKTtcblx0XHRcdH1cblx0XHRcdC8vIG1ha2UgdmFyaWFibGUgcHVibGljXG5cdFx0XHRzZWxmLmxpa2VseVRvdWNoRGV2aWNlID0gX2xpa2VseVRvdWNoRGV2aWNlOyBcblx0XHRcdFxuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdTdGFydEV2ZW50XSA9IF9vbkRyYWdTdGFydDtcblx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnTW92ZUV2ZW50XSA9IF9vbkRyYWdNb3ZlO1xuXHRcdFx0X2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF0gPSBfb25EcmFnUmVsZWFzZTsgLy8gdGhlIEtyYWtlblxuXG5cdFx0XHRpZihfZHJhZ0NhbmNlbEV2ZW50KSB7XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzW19kcmFnQ2FuY2VsRXZlbnRdID0gX2dsb2JhbEV2ZW50SGFuZGxlcnNbX2RyYWdFbmRFdmVudF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJpbmQgbW91c2UgZXZlbnRzIG9uIGRldmljZSB3aXRoIGRldGVjdGVkIGhhcmR3YXJlIHRvdWNoIHN1cHBvcnQsIGluIGNhc2UgaXQgc3VwcG9ydHMgbXVsdGlwbGUgdHlwZXMgb2YgaW5wdXQuXG5cdFx0XHRpZihfZmVhdHVyZXMudG91Y2gpIHtcblx0XHRcdFx0X2Rvd25FdmVudHMgKz0gJyBtb3VzZWRvd24nO1xuXHRcdFx0XHRfdXBNb3ZlRXZlbnRzICs9ICcgbW91c2Vtb3ZlIG1vdXNldXAnO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZWRvd24gPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ1N0YXJ0RXZlbnRdO1xuXHRcdFx0XHRfZ2xvYmFsRXZlbnRIYW5kbGVycy5tb3VzZW1vdmUgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ01vdmVFdmVudF07XG5cdFx0XHRcdF9nbG9iYWxFdmVudEhhbmRsZXJzLm1vdXNldXAgPSBfZ2xvYmFsRXZlbnRIYW5kbGVyc1tfZHJhZ0VuZEV2ZW50XTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBkb24ndCBhbGxvdyBwYW4gdG8gbmV4dCBzbGlkZSBmcm9tIHpvb21lZCBzdGF0ZSBvbiBEZXNrdG9wXG5cdFx0XHRcdF9vcHRpb25zLmFsbG93UGFuVG9OZXh0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cbi8qPj5nZXN0dXJlcyovXG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG4vKipcbiAqIHNob3ctaGlkZS10cmFuc2l0aW9uLmpzOlxuICpcbiAqIE1hbmFnZXMgaW5pdGlhbCBvcGVuaW5nIG9yIGNsb3NpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiBJZiB5b3UncmUgbm90IHBsYW5uaW5nIHRvIHVzZSB0cmFuc2l0aW9uIGZvciBnYWxsZXJ5IGF0IGFsbCxcbiAqIHlvdSBtYXkgc2V0IG9wdGlvbnMgaGlkZUFuaW1hdGlvbkR1cmF0aW9uIGFuZCBzaG93QW5pbWF0aW9uRHVyYXRpb24gdG8gMCxcbiAqIGFuZCBqdXN0IGRlbGV0ZSBzdGFydEFuaW1hdGlvbiBmdW5jdGlvbi5cbiAqIFxuICovXG5cblxudmFyIF9zaG93T3JIaWRlVGltZW91dCxcblx0X3Nob3dPckhpZGUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG91dCwgY29tcGxldGVGbikge1xuXG5cdFx0aWYoX3Nob3dPckhpZGVUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3Nob3dPckhpZGVUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRfaW5pdGlhbFpvb21SdW5uaW5nID0gdHJ1ZTtcblx0XHRfaW5pdGlhbENvbnRlbnRTZXQgPSB0cnVlO1xuXHRcdFxuXHRcdC8vIGRpbWVuc2lvbnMgb2Ygc21hbGwgdGh1bWJuYWlsIHt4Oix5Oix3On0uXG5cdFx0Ly8gSGVpZ2h0IGlzIG9wdGlvbmFsLCBhcyBjYWxjdWxhdGVkIGJhc2VkIG9uIGxhcmdlIGltYWdlLlxuXHRcdHZhciB0aHVtYkJvdW5kczsgXG5cdFx0aWYoaXRlbS5pbml0aWFsTGF5b3V0KSB7XG5cdFx0XHR0aHVtYkJvdW5kcyA9IGl0ZW0uaW5pdGlhbExheW91dDtcblx0XHRcdGl0ZW0uaW5pdGlhbExheW91dCA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRodW1iQm91bmRzID0gX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbiAmJiBfb3B0aW9ucy5nZXRUaHVtYkJvdW5kc0ZuKF9jdXJyZW50SXRlbUluZGV4KTtcblx0XHR9XG5cblx0XHR2YXIgZHVyYXRpb24gPSBvdXQgPyBfb3B0aW9ucy5oaWRlQW5pbWF0aW9uRHVyYXRpb24gOiBfb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb247XG5cblx0XHR2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0X3N0b3BBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRpZighb3V0KSB7XG5cdFx0XHRcdF9hcHBseUJnT3BhY2l0eSgxKTtcblx0XHRcdFx0aWYoaW1nKSB7XG5cdFx0XHRcdFx0aW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXRFbmQnIDogJ0luRW5kJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi50ZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cdFx0XHRcdHNlbGYuYmcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihjb21wbGV0ZUZuKSB7XG5cdFx0XHRcdGNvbXBsZXRlRm4oKTtcblx0XHRcdH1cblx0XHRcdF9pbml0aWFsWm9vbVJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Ly8gaWYgYm91bmRzIGFyZW4ndCBwcm92aWRlZCwganVzdCBvcGVuIGdhbGxlcnkgd2l0aG91dCBhbmltYXRpb25cblx0XHRpZighZHVyYXRpb24gfHwgIXRodW1iQm91bmRzIHx8IHRodW1iQm91bmRzLnggPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRfc2hvdXQoJ2luaXRpYWxab29tJyArIChvdXQgPyAnT3V0JyA6ICdJbicpICk7XG5cblx0XHRcdF9jdXJyWm9vbUxldmVsID0gaXRlbS5pbml0aWFsWm9vbUxldmVsO1xuXHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblxuXHRcdFx0dGVtcGxhdGUuc3R5bGUub3BhY2l0eSA9IG91dCA/IDAgOiAxO1xuXHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRpZihkdXJhdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9uQ29tcGxldGUoKTtcblx0XHRcdFx0fSwgZHVyYXRpb24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25Db21wbGV0ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvc2VXaXRoUmFmID0gX2Nsb3NlZEJ5U2Nyb2xsLFxuXHRcdFx0XHRmYWRlRXZlcnl0aGluZyA9ICFzZWxmLmN1cnJJdGVtLnNyYyB8fCBzZWxmLmN1cnJJdGVtLmxvYWRFcnJvciB8fCBfb3B0aW9ucy5zaG93SGlkZU9wYWNpdHk7XG5cdFx0XHRcblx0XHRcdC8vIGFwcGx5IGh3LWFjY2VsZXJhdGlvbiB0byBpbWFnZVxuXHRcdFx0aWYoaXRlbS5taW5pSW1nKSB7XG5cdFx0XHRcdGl0ZW0ubWluaUltZy5zdHlsZS53ZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdH1cblxuXHRcdFx0aWYoIW91dCkge1xuXHRcdFx0XHRfY3Vyclpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLnc7XG5cdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdF9wYW5PZmZzZXQueSA9IHRodW1iQm91bmRzLnkgLSBfaW5pdGFsV2luZG93U2Nyb2xsWTtcblxuXHRcdFx0XHRzZWxmW2ZhZGVFdmVyeXRoaW5nID8gJ3RlbXBsYXRlJyA6ICdiZyddLnN0eWxlLm9wYWNpdHkgPSAwLjAwMTtcblx0XHRcdFx0X2FwcGx5Q3VycmVudFpvb21QYW4oKTtcblx0XHRcdH1cblxuXHRcdFx0X3JlZ2lzdGVyU3RhcnRBbmltYXRpb24oJ2luaXRpYWxab29tJyk7XG5cdFx0XHRcblx0XHRcdGlmKG91dCAmJiAhY2xvc2VXaXRoUmFmKSB7XG5cdFx0XHRcdGZyYW1ld29yay5yZW1vdmVDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVkLWluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGZhZGVFdmVyeXRoaW5nKSB7XG5cdFx0XHRcdGlmKG91dCkge1xuXHRcdFx0XHRcdGZyYW1ld29ya1sgKGNsb3NlV2l0aFJhZiA/ICdyZW1vdmUnIDogJ2FkZCcpICsgJ0NsYXNzJyBdKHRlbXBsYXRlLCAncHN3cC0tYW5pbWF0ZV9vcGFjaXR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLWFuaW1hdGVfb3BhY2l0eScpO1xuXHRcdFx0XHRcdH0sIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdF9zaG91dCgnaW5pdGlhbFpvb20nICsgKG91dCA/ICdPdXQnIDogJ0luJykgKTtcblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIW91dCkge1xuXG5cdFx0XHRcdFx0Ly8gXCJpblwiIGFuaW1hdGlvbiBhbHdheXMgdXNlcyBDU1MgdHJhbnNpdGlvbnMgKGluc3RlYWQgb2YgckFGKS5cblx0XHRcdFx0XHQvLyBDU1MgdHJhbnNpdGlvbiB3b3JrIGZhc3RlciBoZXJlLCBcblx0XHRcdFx0XHQvLyBhcyBkZXZlbG9wZXIgbWF5IGFsc28gd2FudCB0byBhbmltYXRlIG90aGVyIHRoaW5ncywgXG5cdFx0XHRcdFx0Ly8gbGlrZSB1aSBvbiB0b3Agb2Ygc2xpZGluZyBhcmVhLCB3aGljaCBjYW4gYmUgYW5pbWF0ZWQganVzdCB2aWEgQ1NTXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBpdGVtLmluaXRpYWxab29tTGV2ZWw7XG5cdFx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKF9wYW5PZmZzZXQsICBpdGVtLmluaXRpYWxQb3NpdGlvbiApO1xuXHRcdFx0XHRcdF9hcHBseUN1cnJlbnRab29tUGFuKCk7XG5cdFx0XHRcdFx0X2FwcGx5QmdPcGFjaXR5KDEpO1xuXG5cdFx0XHRcdFx0aWYoZmFkZUV2ZXJ5dGhpbmcpIHtcblx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlCZ09wYWNpdHkoMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3Nob3dPckhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChvbkNvbXBsZXRlLCBkdXJhdGlvbiArIDIwKTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIFwib3V0XCIgYW5pbWF0aW9uIHVzZXMgckFGIG9ubHkgd2hlbiBQaG90b1N3aXBlIGlzIGNsb3NlZCBieSBicm93c2VyIHNjcm9sbCwgdG8gcmVjYWxjdWxhdGUgcG9zaXRpb25cblx0XHRcdFx0XHR2YXIgZGVzdFpvb21MZXZlbCA9IHRodW1iQm91bmRzLncgLyBpdGVtLncsXG5cdFx0XHRcdFx0XHRpbml0aWFsUGFuT2Zmc2V0ID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBfcGFuT2Zmc2V0LngsXG5cdFx0XHRcdFx0XHRcdHk6IF9wYW5PZmZzZXQueVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGluaXRpYWxab29tTGV2ZWwgPSBfY3Vyclpvb21MZXZlbCxcblx0XHRcdFx0XHRcdGluaXRhbEJnT3BhY2l0eSA9IF9iZ09wYWNpdHksXG5cdFx0XHRcdFx0XHRvblVwZGF0ZSA9IGZ1bmN0aW9uKG5vdykge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYobm93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSBkZXN0Wm9vbUxldmVsO1xuXHRcdFx0XHRcdFx0XHRcdF9wYW5PZmZzZXQueCA9IHRodW1iQm91bmRzLng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gdGh1bWJCb3VuZHMueSAgLSBfY3VycmVudFdpbmRvd1Njcm9sbFk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2N1cnJab29tTGV2ZWwgPSAoZGVzdFpvb21MZXZlbCAtIGluaXRpYWxab29tTGV2ZWwpICogbm93ICsgaW5pdGlhbFpvb21MZXZlbDtcblx0XHRcdFx0XHRcdFx0XHRfcGFuT2Zmc2V0LnggPSAodGh1bWJCb3VuZHMueCAtIGluaXRpYWxQYW5PZmZzZXQueCkgKiBub3cgKyBpbml0aWFsUGFuT2Zmc2V0Lng7XG5cdFx0XHRcdFx0XHRcdFx0X3Bhbk9mZnNldC55ID0gKHRodW1iQm91bmRzLnkgLSBfY3VycmVudFdpbmRvd1Njcm9sbFkgLSBpbml0aWFsUGFuT2Zmc2V0LnkpICogbm93ICsgaW5pdGlhbFBhbk9mZnNldC55O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRfYXBwbHlDdXJyZW50Wm9vbVBhbigpO1xuXHRcdFx0XHRcdFx0XHRpZihmYWRlRXZlcnl0aGluZykge1xuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlLnN0eWxlLm9wYWNpdHkgPSAxIC0gbm93O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdF9hcHBseUJnT3BhY2l0eSggaW5pdGFsQmdPcGFjaXR5IC0gbm93ICogaW5pdGFsQmdPcGFjaXR5ICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZihjbG9zZVdpdGhSYWYpIHtcblx0XHRcdFx0XHRcdF9hbmltYXRlUHJvcCgnaW5pdGlhbFpvb20nLCAwLCAxLCBkdXJhdGlvbiwgZnJhbWV3b3JrLmVhc2luZy5jdWJpYy5vdXQsIG9uVXBkYXRlLCBvbkNvbXBsZXRlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b25VcGRhdGUoMSk7XG5cdFx0XHRcdFx0XHRfc2hvd09ySGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uQ29tcGxldGUsIGR1cmF0aW9uICsgMjApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR9LCBvdXQgPyAyNSA6IDkwKTsgLy8gTWFpbiBwdXJwb3NlIG9mIHRoaXMgZGVsYXkgaXMgdG8gZ2l2ZSBicm93c2VyIHRpbWUgdG8gcGFpbnQgYW5kXG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGNvbXBvc2l0ZSBsYXllcnMgb2YgUGhvdG9Td2lwZSBVSSBwYXJ0cyAoYmFja2dyb3VuZCwgY29udHJvbHMsIGNhcHRpb24sIGFycm93cykuXG5cdFx0XHRcdFx0Ly8gV2hpY2ggYXZvaWRzIGxhZyBhdCB0aGUgYmVnaW5uaW5nIG9mIHNjYWxlIHRyYW5zaXRpb24uXG5cdFx0fTtcblx0XHRzdGFydEFuaW1hdGlvbigpO1xuXG5cdFx0XG5cdH07XG5cbi8qPj5zaG93LWhpZGUtdHJhbnNpdGlvbiovXG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cbi8qKlxuKlxuKiBDb250cm9sbGVyIG1hbmFnZXMgZ2FsbGVyeSBpdGVtcywgdGhlaXIgZGltZW5zaW9ucywgYW5kIHRoZWlyIGNvbnRlbnQuXG4qIFxuKi9cblxudmFyIF9pdGVtcyxcblx0X3RlbXBQYW5BcmVhU2l6ZSA9IHt9LFxuXHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gW10sXG5cdF9pbml0aWFsQ29udGVudFNldCxcblx0X2luaXRpYWxab29tUnVubmluZyxcblx0X2NvbnRyb2xsZXJEZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRpbmRleDogMCxcblx0XHRlcnJvck1zZzogJzxkaXYgY2xhc3M9XCJwc3dwX19lcnJvci1tc2dcIj48YSBocmVmPVwiJXVybCVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9kaXY+Jyxcblx0XHRmb3JjZVByb2dyZXNzaXZlTG9hZGluZzogZmFsc2UsIC8vIFRPRE9cblx0XHRwcmVsb2FkOiBbMSwxXSxcblx0XHRnZXROdW1JdGVtc0ZuOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBfaXRlbXMubGVuZ3RoO1xuXHRcdH1cblx0fTtcblxuXG52YXIgX2dldEl0ZW1BdCxcblx0X2dldE51bUl0ZW1zLFxuXHRfaW5pdGlhbElzTG9vcCxcblx0X2dldFplcm9Cb3VuZHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2VudGVyOnt4OjAseTowfSwgXG5cdFx0XHRtYXg6e3g6MCx5OjB9LCBcblx0XHRcdG1pbjp7eDowLHk6MH1cblx0XHR9O1xuXHR9LFxuXHRfY2FsY3VsYXRlU2luZ2xlSXRlbVBhbkJvdW5kcyA9IGZ1bmN0aW9uKGl0ZW0sIHJlYWxQYW5FbGVtZW50VywgcmVhbFBhbkVsZW1lbnRIICkge1xuXHRcdHZhciBib3VuZHMgPSBpdGVtLmJvdW5kcztcblxuXHRcdC8vIHBvc2l0aW9uIG9mIGVsZW1lbnQgd2hlbiBpdCdzIGNlbnRlcmVkXG5cdFx0Ym91bmRzLmNlbnRlci54ID0gTWF0aC5yb3VuZCgoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSAvIDIpO1xuXHRcdGJvdW5kcy5jZW50ZXIueSA9IE1hdGgucm91bmQoKF90ZW1wUGFuQXJlYVNpemUueSAtIHJlYWxQYW5FbGVtZW50SCkgLyAyKSArIGl0ZW0udkdhcC50b3A7XG5cblx0XHQvLyBtYXhpbXVtIHBhbiBwb3NpdGlvblxuXHRcdGJvdW5kcy5tYXgueCA9IChyZWFsUGFuRWxlbWVudFcgPiBfdGVtcFBhbkFyZWFTaXplLngpID8gXG5cdFx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3RlbXBQYW5BcmVhU2l6ZS54IC0gcmVhbFBhbkVsZW1lbnRXKSA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLng7XG5cdFx0XG5cdFx0Ym91bmRzLm1heC55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBcblx0XHRcdFx0XHRcdFx0TWF0aC5yb3VuZChfdGVtcFBhbkFyZWFTaXplLnkgLSByZWFsUGFuRWxlbWVudEgpICsgaXRlbS52R2FwLnRvcCA6IFxuXHRcdFx0XHRcdFx0XHRib3VuZHMuY2VudGVyLnk7XG5cdFx0XG5cdFx0Ly8gbWluaW11bSBwYW4gcG9zaXRpb25cblx0XHRib3VuZHMubWluLnggPSAocmVhbFBhbkVsZW1lbnRXID4gX3RlbXBQYW5BcmVhU2l6ZS54KSA/IDAgOiBib3VuZHMuY2VudGVyLng7XG5cdFx0Ym91bmRzLm1pbi55ID0gKHJlYWxQYW5FbGVtZW50SCA+IF90ZW1wUGFuQXJlYVNpemUueSkgPyBpdGVtLnZHYXAudG9wIDogYm91bmRzLmNlbnRlci55O1xuXHR9LFxuXHRfY2FsY3VsYXRlSXRlbVNpemUgPSBmdW5jdGlvbihpdGVtLCB2aWV3cG9ydFNpemUsIHpvb21MZXZlbCkge1xuXG5cdFx0aWYgKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0dmFyIGlzSW5pdGlhbCA9ICF6b29tTGV2ZWw7XG5cdFx0XHRcblx0XHRcdGlmKGlzSW5pdGlhbCkge1xuXHRcdFx0XHRpZighaXRlbS52R2FwKSB7XG5cdFx0XHRcdFx0aXRlbS52R2FwID0ge3RvcDowLGJvdHRvbTowfTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhbGxvd3Mgb3ZlcnJpZGluZyB2ZXJ0aWNhbCBtYXJnaW4gZm9yIGluZGl2aWR1YWwgaXRlbXNcblx0XHRcdFx0X3Nob3V0KCdwYXJzZVZlcnRpY2FsTWFyZ2luJywgaXRlbSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0X3RlbXBQYW5BcmVhU2l6ZS54ID0gdmlld3BvcnRTaXplLng7XG5cdFx0XHRfdGVtcFBhbkFyZWFTaXplLnkgPSB2aWV3cG9ydFNpemUueSAtIGl0ZW0udkdhcC50b3AgLSBpdGVtLnZHYXAuYm90dG9tO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsKSB7XG5cdFx0XHRcdHZhciBoUmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnggLyBpdGVtLnc7XG5cdFx0XHRcdHZhciB2UmF0aW8gPSBfdGVtcFBhbkFyZWFTaXplLnkgLyBpdGVtLmg7XG5cblx0XHRcdFx0aXRlbS5maXRSYXRpbyA9IGhSYXRpbyA8IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblx0XHRcdFx0Ly9pdGVtLmZpbGxSYXRpbyA9IGhSYXRpbyA+IHZSYXRpbyA/IGhSYXRpbyA6IHZSYXRpbztcblxuXHRcdFx0XHR2YXIgc2NhbGVNb2RlID0gX29wdGlvbnMuc2NhbGVNb2RlO1xuXG5cdFx0XHRcdGlmIChzY2FsZU1vZGUgPT09ICdvcmlnJykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NhbGVNb2RlID09PSAnZml0Jykge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IGl0ZW0uZml0UmF0aW87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoem9vbUxldmVsID4gMSkge1xuXHRcdFx0XHRcdHpvb21MZXZlbCA9IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSB6b29tTGV2ZWw7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXRlbS5ib3VuZHMpIHtcblx0XHRcdFx0XHQvLyByZXVzZSBib3VuZHMgb2JqZWN0XG5cdFx0XHRcdFx0aXRlbS5ib3VuZHMgPSBfZ2V0WmVyb0JvdW5kcygpOyBcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighem9vbUxldmVsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVNpbmdsZUl0ZW1QYW5Cb3VuZHMoaXRlbSwgaXRlbS53ICogem9vbUxldmVsLCBpdGVtLmggKiB6b29tTGV2ZWwpO1xuXG5cdFx0XHRpZiAoaXNJbml0aWFsICYmIHpvb21MZXZlbCA9PT0gaXRlbS5pbml0aWFsWm9vbUxldmVsKSB7XG5cdFx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXRlbS5ib3VuZHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW0udyA9IGl0ZW0uaCA9IDA7XG5cdFx0XHRpdGVtLmluaXRpYWxab29tTGV2ZWwgPSBpdGVtLmZpdFJhdGlvID0gMTtcblx0XHRcdGl0ZW0uYm91bmRzID0gX2dldFplcm9Cb3VuZHMoKTtcblx0XHRcdGl0ZW0uaW5pdGlhbFBvc2l0aW9uID0gaXRlbS5ib3VuZHMuY2VudGVyO1xuXG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBpbWFnZSwgd2UgcmV0dXJuIHplcm8gYm91bmRzIChjb250ZW50IGlzIG5vdCB6b29tYWJsZSlcblx0XHRcdHJldHVybiBpdGVtLmJvdW5kcztcblx0XHR9XG5cdFx0XG5cdH0sXG5cblx0XG5cblxuXHRfYXBwZW5kSW1hZ2UgPSBmdW5jdGlvbihpbmRleCwgaXRlbSwgYmFzZURpdiwgaW1nLCBwcmV2ZW50QW5pbWF0aW9uLCBrZWVwUGxhY2Vob2xkZXIpIHtcblx0XHRcblxuXHRcdGlmKGl0ZW0ubG9hZEVycm9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoaW1nKSB7XG5cblx0XHRcdGl0ZW0uaW1hZ2VBcHBlbmRlZCA9IHRydWU7XG5cdFx0XHRfc2V0SW1hZ2VTaXplKGl0ZW0sIGltZywgKGl0ZW0gPT09IHNlbGYuY3Vyckl0ZW0gJiYgX3JlbmRlck1heFJlc29sdXRpb24pICk7XG5cdFx0XHRcblx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuXHRcdFx0aWYoa2VlcFBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSAmJiBpdGVtLmxvYWRlZCAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRpdGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcblxuXG5cdF9wcmVsb2FkSW1hZ2UgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aXRlbS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRpdGVtLmxvYWRlZCA9IGZhbHNlO1xuXHRcdHZhciBpbWcgPSBpdGVtLmltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdHZhciBvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0aWYoaXRlbS5sb2FkQ29tcGxldGUpIHtcblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUoaXRlbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLmltZyA9IG51bGw7IC8vIG5vIG5lZWQgdG8gc3RvcmUgaW1hZ2Ugb2JqZWN0XG5cdFx0XHR9XG5cdFx0XHRpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBudWxsO1xuXHRcdFx0aW1nID0gbnVsbDtcblx0XHR9O1xuXHRcdGltZy5vbmxvYWQgPSBvbkNvbXBsZXRlO1xuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRvbkNvbXBsZXRlKCk7XG5cdFx0fTtcdFx0XG5cblx0XHRpbWcuc3JjID0gaXRlbS5zcmM7Ly8gKyAnP2E9JyArIE1hdGgucmFuZG9tKCk7XG5cblx0XHRyZXR1cm4gaW1nO1xuXHR9LFxuXHRfY2hlY2tGb3JFcnJvciA9IGZ1bmN0aW9uKGl0ZW0sIGNsZWFuVXApIHtcblx0XHRpZihpdGVtLnNyYyAmJiBpdGVtLmxvYWRFcnJvciAmJiBpdGVtLmNvbnRhaW5lcikge1xuXG5cdFx0XHRpZihjbGVhblVwKSB7XG5cdFx0XHRcdGl0ZW0uY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLmNvbnRhaW5lci5pbm5lckhUTUwgPSBfb3B0aW9ucy5lcnJvck1zZy5yZXBsYWNlKCcldXJsJScsICBpdGVtLnNyYyApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdF9zZXRJbWFnZVNpemUgPSBmdW5jdGlvbihpdGVtLCBpbWcsIG1heFJlcykge1xuXHRcdGlmKCFpdGVtLnNyYykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCFpbWcpIHtcblx0XHRcdGltZyA9IGl0ZW0uY29udGFpbmVyLmxhc3RDaGlsZDtcblx0XHR9XG5cblx0XHR2YXIgdyA9IG1heFJlcyA/IGl0ZW0udyA6IE1hdGgucm91bmQoaXRlbS53ICogaXRlbS5maXRSYXRpbyksXG5cdFx0XHRoID0gbWF4UmVzID8gaXRlbS5oIDogTWF0aC5yb3VuZChpdGVtLmggKiBpdGVtLmZpdFJhdGlvKTtcblx0XHRcblx0XHRpZihpdGVtLnBsYWNlaG9sZGVyICYmICFpdGVtLmxvYWRlZCkge1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHR9XG5cblx0XHRpbWcuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRpbWcuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cdF9hcHBlbmRJbWFnZXNQb29sID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZihfaW1hZ2VzVG9BcHBlbmRQb29sLmxlbmd0aCkge1xuXHRcdFx0dmFyIHBvb2xJdGVtO1xuXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2ltYWdlc1RvQXBwZW5kUG9vbC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwb29sSXRlbSA9IF9pbWFnZXNUb0FwcGVuZFBvb2xbaV07XG5cdFx0XHRcdGlmKCBwb29sSXRlbS5ob2xkZXIuaW5kZXggPT09IHBvb2xJdGVtLmluZGV4ICkge1xuXHRcdFx0XHRcdF9hcHBlbmRJbWFnZShwb29sSXRlbS5pbmRleCwgcG9vbEl0ZW0uaXRlbSwgcG9vbEl0ZW0uYmFzZURpdiwgcG9vbEl0ZW0uaW1nLCBmYWxzZSwgcG9vbEl0ZW0uY2xlYXJQbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9pbWFnZXNUb0FwcGVuZFBvb2wgPSBbXTtcblx0XHR9XG5cdH07XG5cdFxuXG5cbl9yZWdpc3Rlck1vZHVsZSgnQ29udHJvbGxlcicsIHtcblxuXHRwdWJsaWNNZXRob2RzOiB7XG5cblx0XHRsYXp5TG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR2YXIgaXRlbSA9IF9nZXRJdGVtQXQoaW5kZXgpO1xuXG5cdFx0XHRpZighaXRlbSB8fCAoKGl0ZW0ubG9hZGVkIHx8IGl0ZW0ubG9hZGluZykgJiYgIV9pdGVtc05lZWRVcGRhdGUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X3Nob3V0KCdnZXR0aW5nRGF0YScsIGluZGV4LCBpdGVtKTtcblxuXHRcdFx0aWYgKCFpdGVtLnNyYykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0fSxcblx0XHRpbml0Q29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRmcmFtZXdvcmsuZXh0ZW5kKF9vcHRpb25zLCBfY29udHJvbGxlckRlZmF1bHRPcHRpb25zLCB0cnVlKTtcblx0XHRcdHNlbGYuaXRlbXMgPSBfaXRlbXMgPSBpdGVtcztcblx0XHRcdF9nZXRJdGVtQXQgPSBzZWxmLmdldEl0ZW1BdDtcblx0XHRcdF9nZXROdW1JdGVtcyA9IF9vcHRpb25zLmdldE51bUl0ZW1zRm47IC8vc2VsZi5nZXROdW1JdGVtcztcblxuXG5cblx0XHRcdF9pbml0aWFsSXNMb29wID0gX29wdGlvbnMubG9vcDtcblx0XHRcdGlmKF9nZXROdW1JdGVtcygpIDwgMykge1xuXHRcdFx0XHRfb3B0aW9ucy5sb29wID0gZmFsc2U7IC8vIGRpc2FibGUgbG9vcCBpZiBsZXNzIHRoZW4gMyBpdGVtc1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdGVuKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihkaWZmKSB7XG5cblx0XHRcdFx0dmFyIHAgPSBfb3B0aW9ucy5wcmVsb2FkLFxuXHRcdFx0XHRcdGlzTmV4dCA9IGRpZmYgPT09IG51bGwgPyB0cnVlIDogKGRpZmYgPj0gMCksXG5cdFx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIF9nZXROdW1JdGVtcygpICksXG5cdFx0XHRcdFx0cHJlbG9hZEFmdGVyID0gTWF0aC5taW4ocFsxXSwgX2dldE51bUl0ZW1zKCkgKSxcblx0XHRcdFx0XHRpO1xuXG5cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgraSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChpc05leHQgPyBwcmVsb2FkQmVmb3JlIDogcHJlbG9hZEFmdGVyKTsgaSsrKSB7XG5cdFx0XHRcdFx0c2VsZi5sYXp5TG9hZEl0ZW0oX2N1cnJlbnRJdGVtSW5kZXgtaSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCdpbml0aWFsTGF5b3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuY3Vyckl0ZW0uaW5pdGlhbExheW91dCA9IF9vcHRpb25zLmdldFRodW1iQm91bmRzRm4gJiYgX29wdGlvbnMuZ2V0VGh1bWJCb3VuZHNGbihfY3VycmVudEl0ZW1JbmRleCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X2xpc3RlbignbWFpblNjcm9sbEFuaW1Db21wbGV0ZScsIF9hcHBlbmRJbWFnZXNQb29sKTtcblx0XHRcdF9saXN0ZW4oJ2luaXRpYWxab29tSW5FbmQnLCBfYXBwZW5kSW1hZ2VzUG9vbCk7XG5cblxuXG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpdGVtO1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aXRlbSA9IF9pdGVtc1tpXTtcblx0XHRcdFx0XHQvLyByZW1vdmUgcmVmZXJlbmNlIHRvIERPTSBlbGVtZW50cywgZm9yIEdDXG5cdFx0XHRcdFx0aWYoaXRlbS5jb250YWluZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0uY29udGFpbmVyID0gbnVsbDsgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGl0ZW0ucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmltZykge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLnByZWxvYWRlcikge1xuXHRcdFx0XHRcdFx0aXRlbS5wcmVsb2FkZXIgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSBpdGVtLmxvYWRFcnJvciA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sID0gbnVsbDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblxuXHRcdGdldEl0ZW1BdDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdHJldHVybiBfaXRlbXNbaW5kZXhdICE9PSB1bmRlZmluZWQgPyBfaXRlbXNbaW5kZXhdIDogZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFsbG93UHJvZ3Jlc3NpdmVJbWc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gMS4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBpc24ndCB3b3JraW5nIG9uIHdlYmtpdC9ibGluayBcblx0XHRcdC8vICAgIHdoZW4gaHctYWNjZWxlcmF0aW9uIChlLmcuIHRyYW5zbGF0ZVopIGlzIGFwcGxpZWQgdG8gSU1HIGVsZW1lbnQuXG5cdFx0XHQvLyAgICBUaGF0J3Mgd2h5IGluIFBob3RvU3dpcGUgcGFyZW50IGVsZW1lbnQgZ2V0cyB6b29tIHRyYW5zZm9ybSwgbm90IGltYWdlIGl0c2VsZi5cblx0XHRcdC8vICAgIFxuXHRcdFx0Ly8gMi4gUHJvZ3Jlc3NpdmUgaW1hZ2UgbG9hZGluZyBzb21ldGltZXMgYmxpbmtzIGluIHdlYmtpdC9ibGluayB3aGVuIGFwcGx5aW5nIGFuaW1hdGlvbiB0byBwYXJlbnQgZWxlbWVudC5cblx0XHRcdC8vICAgIFRoYXQncyB3aHkgaXQncyBkaXNhYmxlZCBvbiB0b3VjaCBkZXZpY2VzIChtYWlubHkgYmVjYXVzZSBvZiBzd2lwZSB0cmFuc2l0aW9uKVxuXHRcdFx0Ly8gICAgXG5cdFx0XHQvLyAzLiBQcm9ncmVzc2l2ZSBpbWFnZSBsb2FkaW5nIHNvbWV0aW1lcyBkb2Vzbid0IHdvcmsgaW4gSUUgKHVwIHRvIDExKS5cblxuXHRcdFx0Ly8gRG9uJ3QgYWxsb3cgcHJvZ3Jlc3NpdmUgbG9hZGluZyBvbiBub24tbGFyZ2UgdG91Y2ggZGV2aWNlc1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLmZvcmNlUHJvZ3Jlc3NpdmVMb2FkaW5nIHx8ICFfbGlrZWx5VG91Y2hEZXZpY2UgfHwgX29wdGlvbnMubW91c2VVc2VkIHx8IHNjcmVlbi53aWR0aCA+IDEyMDA7IFxuXHRcdFx0Ly8gMTIwMCAtIHRvIGVsaW1pbmF0ZSB0b3VjaCBkZXZpY2VzIHdpdGggbGFyZ2Ugc2NyZWVuIChsaWtlIENocm9tZWJvb2sgUGl4ZWwpXG5cdFx0fSxcblxuXHRcdHNldENvbnRlbnQ6IGZ1bmN0aW9uKGhvbGRlciwgaW5kZXgpIHtcblxuXHRcdFx0aWYoX29wdGlvbnMubG9vcCkge1xuXHRcdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwcmV2SXRlbSA9IHNlbGYuZ2V0SXRlbUF0KGhvbGRlci5pbmRleCk7XG5cdFx0XHRpZihwcmV2SXRlbSkge1xuXHRcdFx0XHRwcmV2SXRlbS5jb250YWluZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcblx0XHRcdHZhciBpdGVtID0gc2VsZi5nZXRJdGVtQXQoaW5kZXgpLFxuXHRcdFx0XHRpbWc7XG5cdFx0XHRcblx0XHRcdGlmKCFpdGVtKSB7XG5cdFx0XHRcdGhvbGRlci5lbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhbGxvdyB0byBvdmVycmlkZSBkYXRhXG5cdFx0XHRfc2hvdXQoJ2dldHRpbmdEYXRhJywgaW5kZXgsIGl0ZW0pO1xuXG5cdFx0XHRob2xkZXIuaW5kZXggPSBpbmRleDtcblx0XHRcdGhvbGRlci5pdGVtID0gaXRlbTtcblxuXHRcdFx0Ly8gYmFzZSBjb250YWluZXIgRElWIGlzIGNyZWF0ZWQgb25seSBvbmNlIGZvciBlYWNoIG9mIDMgaG9sZGVyc1xuXHRcdFx0dmFyIGJhc2VEaXYgPSBpdGVtLmNvbnRhaW5lciA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9fem9vbS13cmFwJyk7IFxuXG5cdFx0XHRcblxuXHRcdFx0aWYoIWl0ZW0uc3JjICYmIGl0ZW0uaHRtbCkge1xuXHRcdFx0XHRpZihpdGVtLmh0bWwudGFnTmFtZSkge1xuXHRcdFx0XHRcdGJhc2VEaXYuYXBwZW5kQ2hpbGQoaXRlbS5odG1sKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRiYXNlRGl2LmlubmVySFRNTCA9IGl0ZW0uaHRtbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY2hlY2tGb3JFcnJvcihpdGVtKTtcblxuXHRcdFx0X2NhbGN1bGF0ZUl0ZW1TaXplKGl0ZW0sIF92aWV3cG9ydFNpemUpO1xuXHRcdFx0XG5cdFx0XHRpZihpdGVtLnNyYyAmJiAhaXRlbS5sb2FkRXJyb3IgJiYgIWl0ZW0ubG9hZGVkKSB7XG5cblx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdFx0XHQvLyBnYWxsZXJ5IGNsb3NlZCBiZWZvcmUgaW1hZ2UgZmluaXNoZWQgbG9hZGluZ1xuXHRcdFx0XHRcdGlmKCFfaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgaG9sZGVyIGhhc24ndCBjaGFuZ2VkIHdoaWxlIGltYWdlIHdhcyBsb2FkaW5nXG5cdFx0XHRcdFx0aWYoaG9sZGVyICYmIGhvbGRlci5pbmRleCA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRpZiggX2NoZWNrRm9yRXJyb3IoaXRlbSwgdHJ1ZSkgKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ubG9hZENvbXBsZXRlID0gaXRlbS5pbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfY2FsY3VsYXRlSXRlbVNpemUoaXRlbSwgX3ZpZXdwb3J0U2l6ZSk7XG5cdFx0XHRcdFx0XHRcdF9hcHBseVpvb21QYW5Ub0l0ZW0oaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0aWYoaG9sZGVyLmluZGV4ID09PSBfY3VycmVudEl0ZW1JbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHJlY2FsY3VsYXRlIGRpbWVuc2lvbnNcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZUN1cnJab29tSXRlbSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKCAhaXRlbS5pbWFnZUFwcGVuZGVkICkge1xuXHRcdFx0XHRcdFx0XHRpZihfZmVhdHVyZXMudHJhbnNmb3JtICYmIChfbWFpblNjcm9sbEFuaW1hdGluZyB8fCBfaW5pdGlhbFpvb21SdW5uaW5nKSApIHtcblx0XHRcdFx0XHRcdFx0XHRfaW1hZ2VzVG9BcHBlbmRQb29sLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJQbGFjZWhvbGRlcjp0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgX21haW5TY3JvbGxBbmltYXRpbmcgfHwgX2luaXRpYWxab29tUnVubmluZywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBwcmVsb2FkZXIgJiBtaW5pLWltZ1xuXHRcdFx0XHRcdFx0XHRpZighX2luaXRpYWxab29tUnVubmluZyAmJiBpdGVtLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aXRlbS5sb2FkQ29tcGxldGUgPSBudWxsO1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gbnVsbDsgLy8gbm8gbmVlZCB0byBzdG9yZSBpbWFnZSBlbGVtZW50IGFmdGVyIGl0J3MgYWRkZWRcblxuXHRcdFx0XHRcdF9zaG91dCgnaW1hZ2VMb2FkQ29tcGxldGUnLCBpbmRleCwgaXRlbSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0aWYoZnJhbWV3b3JrLmZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlckNsYXNzTmFtZSA9ICdwc3dwX19pbWcgcHN3cF9faW1nLS1wbGFjZWhvbGRlcic7IFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyQ2xhc3NOYW1lICs9IChpdGVtLm1zcmMgPyAnJyA6ICcgcHN3cF9faW1nLS1wbGFjZWhvbGRlci0tYmxhbmsnKTtcblxuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IGZyYW1ld29yay5jcmVhdGVFbChwbGFjZWhvbGRlckNsYXNzTmFtZSwgaXRlbS5tc3JjID8gJ2ltZycgOiAnJyk7XG5cdFx0XHRcdFx0aWYoaXRlbS5tc3JjKSB7XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlci5zcmMgPSBpdGVtLm1zcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdF9zZXRJbWFnZVNpemUoaXRlbSwgcGxhY2Vob2xkZXIpO1xuXG5cdFx0XHRcdFx0YmFzZURpdi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0aXRlbS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0XG5cblx0XHRcdFx0aWYoIWl0ZW0ubG9hZGluZykge1xuXHRcdFx0XHRcdF9wcmVsb2FkSW1hZ2UoaXRlbSk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGlmKCBzZWxmLmFsbG93UHJvZ3Jlc3NpdmVJbWcoKSApIHtcblx0XHRcdFx0XHQvLyBqdXN0IGFwcGVuZCBpbWFnZVxuXHRcdFx0XHRcdGlmKCFfaW5pdGlhbENvbnRlbnRTZXQgJiYgX2ZlYXR1cmVzLnRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFx0X2ltYWdlc1RvQXBwZW5kUG9vbC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aXRlbTppdGVtLCBcblx0XHRcdFx0XHRcdFx0YmFzZURpdjpiYXNlRGl2LCBcblx0XHRcdFx0XHRcdFx0aW1nOml0ZW0uaW1nLCBcblx0XHRcdFx0XHRcdFx0aW5kZXg6aW5kZXgsIFxuXHRcdFx0XHRcdFx0XHRob2xkZXI6aG9sZGVyXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X2FwcGVuZEltYWdlKGluZGV4LCBpdGVtLCBiYXNlRGl2LCBpdGVtLmltZywgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uc3JjICYmICFpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHQvLyBpbWFnZSBvYmplY3QgaXMgY3JlYXRlZCBldmVyeSB0aW1lLCBkdWUgdG8gYnVncyBvZiBpbWFnZSBsb2FkaW5nICYgZGVsYXkgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cdFx0XHRcdGltZyA9IGZyYW1ld29yay5jcmVhdGVFbCgncHN3cF9faW1nJywgJ2ltZycpO1xuXHRcdFx0XHRpbWcuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblx0XHRcdFx0X3NldEltYWdlU2l6ZShpdGVtLCBpbWcpO1xuXHRcdFx0XHRfYXBwZW5kSW1hZ2UoaW5kZXgsIGl0ZW0sIGJhc2VEaXYsIGltZywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0aWYoIV9pbml0aWFsQ29udGVudFNldCAmJiBpbmRleCA9PT0gX2N1cnJlbnRJdGVtSW5kZXgpIHtcblx0XHRcdFx0X2N1cnJab29tRWxlbWVudFN0eWxlID0gYmFzZURpdi5zdHlsZTtcblx0XHRcdFx0X3Nob3dPckhpZGUoaXRlbSwgKGltZyB8fGl0ZW0uaW1nKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2FwcGx5Wm9vbVBhblRvSXRlbShpdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0aG9sZGVyLmVsLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0aG9sZGVyLmVsLmFwcGVuZENoaWxkKGJhc2VEaXYpO1xuXHRcdH0sXG5cblx0XHRjbGVhblNsaWRlOiBmdW5jdGlvbiggaXRlbSApIHtcblx0XHRcdGlmKGl0ZW0uaW1nICkge1xuXHRcdFx0XHRpdGVtLmltZy5vbmxvYWQgPSBpdGVtLmltZy5vbmVycm9yID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGl0ZW0ubG9hZGVkID0gaXRlbS5sb2FkaW5nID0gaXRlbS5pbWcgPSBpdGVtLmltYWdlQXBwZW5kZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0fVxufSk7XG5cbi8qPj5pdGVtcy1jb250cm9sbGVyKi9cblxuLyo+PnRhcCovXG4vKipcbiAqIHRhcC5qczpcbiAqXG4gKiBEaXNwbGF0Y2hlcyB0YXAgYW5kIGRvdWJsZS10YXAgZXZlbnRzLlxuICogXG4gKi9cblxudmFyIHRhcFRpbWVyLFxuXHR0YXBSZWxlYXNlUG9pbnQgPSB7fSxcblx0X2Rpc3BhdGNoVGFwRXZlbnQgPSBmdW5jdGlvbihvcmlnRXZlbnQsIHJlbGVhc2VQb2ludCwgcG9pbnRlclR5cGUpIHtcdFx0XG5cdFx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApLFxuXHRcdFx0ZURldGFpbCA9IHtcblx0XHRcdFx0b3JpZ0V2ZW50Om9yaWdFdmVudCwgXG5cdFx0XHRcdHRhcmdldDpvcmlnRXZlbnQudGFyZ2V0LCBcblx0XHRcdFx0cmVsZWFzZVBvaW50OiByZWxlYXNlUG9pbnQsIFxuXHRcdFx0XHRwb2ludGVyVHlwZTpwb2ludGVyVHlwZSB8fCAndG91Y2gnXG5cdFx0XHR9O1xuXG5cdFx0ZS5pbml0Q3VzdG9tRXZlbnQoICdwc3dwVGFwJywgdHJ1ZSwgdHJ1ZSwgZURldGFpbCApO1xuXHRcdG9yaWdFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcblx0fTtcblxuX3JlZ2lzdGVyTW9kdWxlKCdUYXAnLCB7XG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0VGFwOiBmdW5jdGlvbigpIHtcblx0XHRcdF9saXN0ZW4oJ2ZpcnN0VG91Y2hTdGFydCcsIHNlbGYub25UYXBTdGFydCk7XG5cdFx0XHRfbGlzdGVuKCd0b3VjaFJlbGVhc2UnLCBzZWxmLm9uVGFwUmVsZWFzZSk7XG5cdFx0XHRfbGlzdGVuKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRhcFJlbGVhc2VQb2ludCA9IHt9O1xuXHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG9uVGFwU3RhcnQ6IGZ1bmN0aW9uKHRvdWNoTGlzdCkge1xuXHRcdFx0aWYodG91Y2hMaXN0Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0dGFwVGltZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25UYXBSZWxlYXNlOiBmdW5jdGlvbihlLCByZWxlYXNlUG9pbnQpIHtcblx0XHRcdGlmKCFyZWxlYXNlUG9pbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX21vdmVkICYmICFfaXNNdWx0aXRvdWNoICYmICFfbnVtQW5pbWF0aW9ucykge1xuXHRcdFx0XHR2YXIgcDAgPSByZWxlYXNlUG9pbnQ7XG5cdFx0XHRcdGlmKHRhcFRpbWVyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcFRpbWVyKTtcblx0XHRcdFx0XHR0YXBUaW1lciA9IG51bGw7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0YXBlZCBvbiB0aGUgc2FtZSBwbGFjZVxuXHRcdFx0XHRcdGlmICggX2lzTmVhcmJ5UG9pbnRzKHAwLCB0YXBSZWxlYXNlUG9pbnQpICkge1xuXHRcdFx0XHRcdFx0X3Nob3V0KCdkb3VibGVUYXAnLCBwMCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocmVsZWFzZVBvaW50LnR5cGUgPT09ICdtb3VzZScpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQsICdtb3VzZScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjbGlja2VkVGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0Ly8gYXZvaWQgZG91YmxlIHRhcCBkZWxheSBvbiBidXR0b25zIGFuZCBlbGVtZW50cyB0aGF0IGhhdmUgY2xhc3MgcHN3cF9fc2luZ2xlLXRhcFxuXHRcdFx0XHRpZihjbGlja2VkVGFnTmFtZSA9PT0gJ0JVVFRPTicgfHwgZnJhbWV3b3JrLmhhc0NsYXNzKGUudGFyZ2V0LCAncHN3cF9fc2luZ2xlLXRhcCcpICkge1xuXHRcdFx0XHRcdF9kaXNwYXRjaFRhcEV2ZW50KGUsIHJlbGVhc2VQb2ludCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2VxdWFsaXplUG9pbnRzKHRhcFJlbGVhc2VQb2ludCwgcDApO1xuXG5cdFx0XHRcdHRhcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfZGlzcGF0Y2hUYXBFdmVudChlLCByZWxlYXNlUG9pbnQpO1xuXHRcdFx0XHRcdHRhcFRpbWVyID0gbnVsbDtcblx0XHRcdFx0fSwgMzAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+dGFwKi9cblxuLyo+PmRlc2t0b3Atem9vbSovXG4vKipcbiAqXG4gKiBkZXNrdG9wLXpvb20uanM6XG4gKlxuICogLSBCaW5kcyBtb3VzZXdoZWVsIGV2ZW50IGZvciBwYW5pbmcgem9vbWVkIGltYWdlLlxuICogLSBNYW5hZ2VzIFwiZHJhZ2dpbmdcIiwgXCJ6b29tZWQtaW5cIiwgXCJ6b29tLW91dFwiIGNsYXNzZXMuXG4gKiAgICh3aGljaCBhcmUgdXNlZCBmb3IgY3Vyc29ycyBhbmQgem9vbSBpY29uKVxuICogLSBBZGRzIHRvZ2dsZURlc2t0b3Bab29tIGZ1bmN0aW9uLlxuICogXG4gKi9cblxudmFyIF93aGVlbERlbHRhO1xuXHRcbl9yZWdpc3Rlck1vZHVsZSgnRGVza3RvcFpvb20nLCB7XG5cblx0cHVibGljTWV0aG9kczoge1xuXG5cdFx0aW5pdERlc2t0b3Bab29tOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0aWYoX29sZElFKSB7XG5cdFx0XHRcdC8vIG5vIHpvb20gZm9yIG9sZCBJRSAoPD04KVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9saWtlbHlUb3VjaERldmljZSkge1xuXHRcdFx0XHQvLyBpZiBkZXRlY3RlZCBoYXJkd2FyZSB0b3VjaCBzdXBwb3J0LCB3ZSB3YWl0IHVudGlsIG1vdXNlIGlzIHVzZWQsXG5cdFx0XHRcdC8vIGFuZCBvbmx5IHRoZW4gYXBwbHkgZGVza3RvcC16b29tIGZlYXR1cmVzXG5cdFx0XHRcdF9saXN0ZW4oJ21vdXNlVXNlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuc2V0dXBEZXNrdG9wWm9vbSh0cnVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRzZXR1cERlc2t0b3Bab29tOiBmdW5jdGlvbihvbkluaXQpIHtcblxuXHRcdFx0X3doZWVsRGVsdGEgPSB7fTtcblxuXHRcdFx0dmFyIGV2ZW50cyA9ICd3aGVlbCBtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsJztcblx0XHRcdFxuXHRcdFx0X2xpc3RlbignYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsuYmluZCh0ZW1wbGF0ZSwgZXZlbnRzLCAgc2VsZi5oYW5kbGVNb3VzZVdoZWVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbGlzdGVuKCd1bmJpbmRFdmVudHMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoX3doZWVsRGVsdGEpIHtcblx0XHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHRlbXBsYXRlLCBldmVudHMsIHNlbGYuaGFuZGxlTW91c2VXaGVlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSBmYWxzZTtcblxuXHRcdFx0dmFyIGhhc0RyYWdnaW5nQ2xhc3MsXG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoc2VsZi5tb3VzZVpvb21lZEluKSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHRcdFx0XHRcdHNlbGYubW91c2Vab29tZWRJbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8IDEpIHtcblx0XHRcdFx0XHRcdGZyYW1ld29yay5hZGRDbGFzcyh0ZW1wbGF0ZSwgJ3Bzd3AtLXpvb20tYWxsb3dlZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmcmFtZXdvcmsucmVtb3ZlQ2xhc3ModGVtcGxhdGUsICdwc3dwLS16b29tLWFsbG93ZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlRHJhZ2dpbmdDbGFzcygpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVEcmFnZ2luZ0NsYXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaGFzRHJhZ2dpbmdDbGFzcykge1xuXHRcdFx0XHRcdFx0ZnJhbWV3b3JrLnJlbW92ZUNsYXNzKHRlbXBsYXRlLCAncHN3cC0tZHJhZ2dpbmcnKTtcblx0XHRcdFx0XHRcdGhhc0RyYWdnaW5nQ2xhc3MgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdF9saXN0ZW4oJ3Jlc2l6ZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScgLCB1cGRhdGVab29tYWJsZSk7XG5cdFx0XHRfbGlzdGVuKCdwb2ludGVyRG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihzZWxmLm1vdXNlWm9vbWVkSW4pIHtcblx0XHRcdFx0XHRoYXNEcmFnZ2luZ0NsYXNzID0gdHJ1ZTtcblx0XHRcdFx0XHRmcmFtZXdvcmsuYWRkQ2xhc3ModGVtcGxhdGUsICdwc3dwLS1kcmFnZ2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ3BvaW50ZXJVcCcsIHJlbW92ZURyYWdnaW5nQ2xhc3MpO1xuXG5cdFx0XHRpZighb25Jbml0KSB7XG5cdFx0XHRcdHVwZGF0ZVpvb21hYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXG5cdFx0aGFuZGxlTW91c2VXaGVlbDogZnVuY3Rpb24oZSkge1xuXG5cdFx0XHRpZihfY3Vyclpvb21MZXZlbCA8PSBzZWxmLmN1cnJJdGVtLmZpdFJhdGlvKSB7XG5cdFx0XHRcdGlmKCBfb3B0aW9ucy5tb2RhbCApIHtcblxuXHRcdFx0XHRcdGlmICghX29wdGlvbnMuY2xvc2VPblNjcm9sbCB8fCBfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihfdHJhbnNmb3JtS2V5ICYmIE1hdGguYWJzKGUuZGVsdGFZKSA+IDIpIHtcblx0XHRcdFx0XHRcdC8vIGNsb3NlIFBob3RvU3dpcGVcblx0XHRcdFx0XHRcdC8vIGlmIGJyb3dzZXIgc3VwcG9ydHMgdHJhbnNmb3JtcyAmIHNjcm9sbCBjaGFuZ2VkIGVub3VnaFxuXHRcdFx0XHRcdFx0X2Nsb3NlZEJ5U2Nyb2xsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWxsb3cganVzdCBvbmUgZXZlbnQgdG8gZmlyZVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXG5cdFx0XHRfd2hlZWxEZWx0YS54ID0gMDtcblxuXHRcdFx0aWYoJ2RlbHRhWCcgaW4gZSkge1xuXHRcdFx0XHRpZihlLmRlbHRhTW9kZSA9PT0gMSAvKiBET01fREVMVEFfTElORSAqLykge1xuXHRcdFx0XHRcdC8vIDE4IC0gYXZlcmFnZSBsaW5lIGhlaWdodFxuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWCAqIDE4O1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRlbHRhWSAqIDE4O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF93aGVlbERlbHRhLnggPSBlLmRlbHRhWDtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gZS5kZWx0YVk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignd2hlZWxEZWx0YScgaW4gZSkge1xuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFYKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueCA9IC0wLjE2ICogZS53aGVlbERlbHRhWDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihlLndoZWVsRGVsdGFZKSB7XG5cdFx0XHRcdFx0X3doZWVsRGVsdGEueSA9IC0wLjE2ICogZS53aGVlbERlbHRhWTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfd2hlZWxEZWx0YS55ID0gLTAuMTYgKiBlLndoZWVsRGVsdGE7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZignZGV0YWlsJyBpbiBlKSB7XG5cdFx0XHRcdF93aGVlbERlbHRhLnkgPSBlLmRldGFpbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0X2NhbGN1bGF0ZVBhbkJvdW5kcyhfY3Vyclpvb21MZXZlbCwgdHJ1ZSk7XG5cblx0XHRcdHZhciBuZXdQYW5YID0gX3Bhbk9mZnNldC54IC0gX3doZWVsRGVsdGEueCxcblx0XHRcdFx0bmV3UGFuWSA9IF9wYW5PZmZzZXQueSAtIF93aGVlbERlbHRhLnk7XG5cblx0XHRcdC8vIG9ubHkgcHJldmVudCBzY3JvbGxpbmcgaW4gbm9ubW9kYWwgbW9kZSB3aGVuIG5vdCBhdCBlZGdlc1xuXHRcdFx0aWYgKF9vcHRpb25zLm1vZGFsIHx8XG5cdFx0XHRcdChcblx0XHRcdFx0bmV3UGFuWCA8PSBfY3VyclBhbkJvdW5kcy5taW4ueCAmJiBuZXdQYW5YID49IF9jdXJyUGFuQm91bmRzLm1heC54ICYmXG5cdFx0XHRcdG5ld1BhblkgPD0gX2N1cnJQYW5Cb3VuZHMubWluLnkgJiYgbmV3UGFuWSA+PSBfY3VyclBhbkJvdW5kcy5tYXgueVxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRPRE86IHVzZSByQUYgaW5zdGVhZCBvZiBtb3VzZXdoZWVsP1xuXHRcdFx0c2VsZi5wYW5UbyhuZXdQYW5YLCBuZXdQYW5ZKTtcblx0XHR9LFxuXG5cdFx0dG9nZ2xlRGVza3RvcFpvb206IGZ1bmN0aW9uKGNlbnRlclBvaW50KSB7XG5cdFx0XHRjZW50ZXJQb2ludCA9IGNlbnRlclBvaW50IHx8IHt4Ol92aWV3cG9ydFNpemUueC8yICsgX29mZnNldC54LCB5Ol92aWV3cG9ydFNpemUueS8yICsgX29mZnNldC55IH07XG5cblx0XHRcdHZhciBkb3VibGVUYXBab29tTGV2ZWwgPSBfb3B0aW9ucy5nZXREb3VibGVUYXBab29tKHRydWUsIHNlbGYuY3Vyckl0ZW0pO1xuXHRcdFx0dmFyIHpvb21PdXQgPSBfY3Vyclpvb21MZXZlbCA9PT0gZG91YmxlVGFwWm9vbUxldmVsO1xuXHRcdFx0XG5cdFx0XHRzZWxmLm1vdXNlWm9vbWVkSW4gPSAhem9vbU91dDtcblxuXHRcdFx0c2VsZi56b29tVG8oem9vbU91dCA/IHNlbGYuY3Vyckl0ZW0uaW5pdGlhbFpvb21MZXZlbCA6IGRvdWJsZVRhcFpvb21MZXZlbCwgY2VudGVyUG9pbnQsIDMzMyk7XG5cdFx0XHRmcmFtZXdvcmtbICghem9vbU91dCA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJ10odGVtcGxhdGUsICdwc3dwLS16b29tZWQtaW4nKTtcblx0XHR9XG5cblx0fVxufSk7XG5cblxuLyo+PmRlc2t0b3Atem9vbSovXG5cbi8qPj5oaXN0b3J5Ki9cbi8qKlxuICpcbiAqIGhpc3RvcnkuanM6XG4gKlxuICogLSBCYWNrIGJ1dHRvbiB0byBjbG9zZSBnYWxsZXJ5LlxuICogXG4gKiAtIFVuaXF1ZSBVUkwgZm9yIGVhY2ggc2xpZGU6IGV4YW1wbGUuY29tLyZwaWQ9MSZnaWQ9M1xuICogICAod2hlcmUgUElEIGlzIHBpY3R1cmUgaW5kZXgsIGFuZCBHSUQgYW5kIGdhbGxlcnkgaW5kZXgpXG4gKiAgIFxuICogLSBTd2l0Y2ggVVJMIHdoZW4gc2xpZGVzIGNoYW5nZS5cbiAqIFxuICovXG5cblxudmFyIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMgPSB7XG5cdGhpc3Rvcnk6IHRydWUsXG5cdGdhbGxlcnlVSUQ6IDFcbn07XG5cbnZhciBfaGlzdG9yeVVwZGF0ZVRpbWVvdXQsXG5cdF9oYXNoQ2hhbmdlVGltZW91dCxcblx0X2hhc2hBbmltQ2hlY2tUaW1lb3V0LFxuXHRfaGFzaENoYW5nZWRCeVNjcmlwdCxcblx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5LFxuXHRfaGFzaFJlc2V0ZWQsXG5cdF9pbml0aWFsSGFzaCxcblx0X2hpc3RvcnlDaGFuZ2VkLFxuXHRfY2xvc2VkRnJvbVVSTCxcblx0X3VybENoYW5nZWRPbmNlLFxuXHRfd2luZG93TG9jLFxuXG5cdF9zdXBwb3J0c1B1c2hTdGF0ZSxcblxuXHRfZ2V0SGFzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfd2luZG93TG9jLmhhc2guc3Vic3RyaW5nKDEpO1xuXHR9LFxuXHRfY2xlYW5IaXN0b3J5VGltZW91dHMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oaXN0b3J5VXBkYXRlVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oaXN0b3J5VXBkYXRlVGltZW91dCk7XG5cdFx0fVxuXG5cdFx0aWYoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hBbmltQ2hlY2tUaW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gcGlkIC0gUGljdHVyZSBpbmRleFxuXHQvLyBnaWQgLSBHYWxsZXJ5IGluZGV4XG5cdF9wYXJzZUl0ZW1JbmRleEZyb21VUkwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFzaCA9IF9nZXRIYXNoKCksXG5cdFx0XHRwYXJhbXMgPSB7fTtcblxuXHRcdGlmKGhhc2gubGVuZ3RoIDwgNSkgeyAvLyBwaWQ9MVxuXHRcdFx0cmV0dXJuIHBhcmFtcztcblx0XHR9XG5cblx0XHR2YXIgaSwgdmFycyA9IGhhc2guc3BsaXQoJyYnKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoIXZhcnNbaV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcdFxuXHRcdFx0aWYocGFpci5sZW5ndGggPCAyKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cGFyYW1zW3BhaXJbMF1dID0gcGFpclsxXTtcblx0XHR9XG5cdFx0aWYoX29wdGlvbnMuZ2FsbGVyeVBJRHMpIHtcblx0XHRcdC8vIGRldGVjdCBjdXN0b20gcGlkIGluIGhhc2ggYW5kIHNlYXJjaCBmb3IgaXQgYW1vbmcgdGhlIGl0ZW1zIGNvbGxlY3Rpb25cblx0XHRcdHZhciBzZWFyY2hmb3IgPSBwYXJhbXMucGlkO1xuXHRcdFx0cGFyYW1zLnBpZCA9IDA7IC8vIGlmIGN1c3RvbSBwaWQgY2Fubm90IGJlIGZvdW5kLCBmYWxsYmFjayB0byB0aGUgZmlyc3QgaXRlbVxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKF9pdGVtc1tpXS5waWQgPT09IHNlYXJjaGZvcikge1xuXHRcdFx0XHRcdHBhcmFtcy5waWQgPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcmFtcy5waWQgPSBwYXJzZUludChwYXJhbXMucGlkLDEwKS0xO1xuXHRcdH1cblx0XHRpZiggcGFyYW1zLnBpZCA8IDAgKSB7XG5cdFx0XHRwYXJhbXMucGlkID0gMDtcblx0XHR9XG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fSxcblx0X3VwZGF0ZUhhc2ggPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmKF9oYXNoQW5pbUNoZWNrVGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KF9oYXNoQW5pbUNoZWNrVGltZW91dCk7XG5cdFx0fVxuXG5cblx0XHRpZihfbnVtQW5pbWF0aW9ucyB8fCBfaXNEcmFnZ2luZykge1xuXHRcdFx0Ly8gY2hhbmdpbmcgYnJvd3NlciBVUkwgZm9yY2VzIGxheW91dC9wYWludCBpbiBzb21lIGJyb3dzZXJzLCB3aGljaCBjYXVzZXMgbm90aWNhYmxlIGxhZyBkdXJpbmcgYW5pbWF0aW9uXG5cdFx0XHQvLyB0aGF0J3Mgd2h5IHdlIHVwZGF0ZSBoYXNoIG9ubHkgd2hlbiBubyBhbmltYXRpb25zIHJ1bm5pbmdcblx0XHRcdF9oYXNoQW5pbUNoZWNrVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDUwMCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGlmKF9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoX2hhc2hDaGFuZ2VUaW1lb3V0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2hhc2hDaGFuZ2VkQnlTY3JpcHQgPSB0cnVlO1xuXHRcdH1cblxuXG5cdFx0dmFyIHBpZCA9IChfY3VycmVudEl0ZW1JbmRleCArIDEpO1xuXHRcdHZhciBpdGVtID0gX2dldEl0ZW1BdCggX2N1cnJlbnRJdGVtSW5kZXggKTtcblx0XHRpZihpdGVtLmhhc093blByb3BlcnR5KCdwaWQnKSkge1xuXHRcdFx0Ly8gY2FycnkgZm9yd2FyZCBhbnkgY3VzdG9tIHBpZCBhc3NpZ25lZCB0byB0aGUgaXRlbVxuXHRcdFx0cGlkID0gaXRlbS5waWQ7XG5cdFx0fVxuXHRcdHZhciBuZXdIYXNoID0gX2luaXRpYWxIYXNoICsgJyYnICArICAnZ2lkPScgKyBfb3B0aW9ucy5nYWxsZXJ5VUlEICsgJyYnICsgJ3BpZD0nICsgcGlkO1xuXG5cdFx0aWYoIV9oaXN0b3J5Q2hhbmdlZCkge1xuXHRcdFx0aWYoX3dpbmRvd0xvYy5oYXNoLmluZGV4T2YobmV3SGFzaCkgPT09IC0xKSB7XG5cdFx0XHRcdF91cmxDaGFuZ2VkT25jZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBmaXJzdCB0aW1lIC0gYWRkIG5ldyBoaXNvcnkgcmVjb3JkLCB0aGVuIGp1c3QgcmVwbGFjZVxuXHRcdH1cblxuXHRcdHZhciBuZXdVUkwgPSBfd2luZG93TG9jLmhyZWYuc3BsaXQoJyMnKVswXSArICcjJyArICBuZXdIYXNoO1xuXG5cdFx0aWYoIF9zdXBwb3J0c1B1c2hTdGF0ZSApIHtcblxuXHRcdFx0aWYoJyMnICsgbmV3SGFzaCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0aGlzdG9yeVtfaGlzdG9yeUNoYW5nZWQgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSgnJywgZG9jdW1lbnQudGl0bGUsIG5ld1VSTCk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF93aW5kb3dMb2MucmVwbGFjZSggbmV3VVJMICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfd2luZG93TG9jLmhhc2ggPSBuZXdIYXNoO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRcblxuXHRcdF9oaXN0b3J5Q2hhbmdlZCA9IHRydWU7XG5cdFx0X2hhc2hDaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdF9oYXNoQ2hhbmdlZEJ5U2NyaXB0ID0gZmFsc2U7XG5cdFx0fSwgNjApO1xuXHR9O1xuXG5cblxuXHRcblxuX3JlZ2lzdGVyTW9kdWxlKCdIaXN0b3J5Jywge1xuXG5cdFxuXG5cdHB1YmxpY01ldGhvZHM6IHtcblx0XHRpbml0SGlzdG9yeTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGZyYW1ld29yay5leHRlbmQoX29wdGlvbnMsIF9oaXN0b3J5RGVmYXVsdE9wdGlvbnMsIHRydWUpO1xuXG5cdFx0XHRpZiggIV9vcHRpb25zLmhpc3RvcnkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXG5cdFx0XHRfd2luZG93TG9jID0gd2luZG93LmxvY2F0aW9uO1xuXHRcdFx0X3VybENoYW5nZWRPbmNlID0gZmFsc2U7XG5cdFx0XHRfY2xvc2VkRnJvbVVSTCA9IGZhbHNlO1xuXHRcdFx0X2hpc3RvcnlDaGFuZ2VkID0gZmFsc2U7XG5cdFx0XHRfaW5pdGlhbEhhc2ggPSBfZ2V0SGFzaCgpO1xuXHRcdFx0X3N1cHBvcnRzUHVzaFN0YXRlID0gKCdwdXNoU3RhdGUnIGluIGhpc3RvcnkpO1xuXG5cblx0XHRcdGlmKF9pbml0aWFsSGFzaC5pbmRleE9mKCdnaWQ9JykgPiAtMSkge1xuXHRcdFx0XHRfaW5pdGlhbEhhc2ggPSBfaW5pdGlhbEhhc2guc3BsaXQoJyZnaWQ9JylbMF07XG5cdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zcGxpdCgnP2dpZD0nKVswXTtcblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRfbGlzdGVuKCdhZnRlckNoYW5nZScsIHNlbGYudXBkYXRlVVJMKTtcblx0XHRcdF9saXN0ZW4oJ3VuYmluZEV2ZW50cycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmcmFtZXdvcmsudW5iaW5kKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBzZWxmLm9uSGFzaENoYW5nZSk7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHR2YXIgcmV0dXJuVG9PcmlnaW5hbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfaGFzaFJlc2V0ZWQgPSB0cnVlO1xuXHRcdFx0XHRpZighX2Nsb3NlZEZyb21VUkwpIHtcblxuXHRcdFx0XHRcdGlmKF91cmxDaGFuZ2VkT25jZSkge1xuXHRcdFx0XHRcdFx0aGlzdG9yeS5iYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWYoX2luaXRpYWxIYXNoKSB7XG5cdFx0XHRcdFx0XHRcdF93aW5kb3dMb2MuaGFzaCA9IF9pbml0aWFsSGFzaDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChfc3VwcG9ydHNQdXNoU3RhdGUpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBoYXNoIGZyb20gdXJsIHdpdGhvdXQgcmVmcmVzaGluZyBpdCBvciBzY3JvbGxpbmcgdG8gdG9wXG5cdFx0XHRcdFx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCAgX3dpbmRvd0xvYy5wYXRobmFtZSArIF93aW5kb3dMb2Muc2VhcmNoICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X3dpbmRvd0xvYy5oYXNoID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdH07XG5cblxuXHRcdFx0X2xpc3RlbigndW5iaW5kRXZlbnRzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKF9jbG9zZWRCeVNjcm9sbCkge1xuXHRcdFx0XHRcdC8vIGlmIFBob3RvU3dpcGUgaXMgY2xvc2VkIGJ5IHNjcm9sbCwgd2UgZ28gXCJiYWNrXCIgYmVmb3JlIHRoZSBjbG9zaW5nIGFuaW1hdGlvbiBzdGFydHNcblx0XHRcdFx0XHQvLyB0aGlzIGlzIGRvbmUgdG8ga2VlcCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG5cdFx0XHRcdFx0cmV0dXJuVG9PcmlnaW5hbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9saXN0ZW4oJ2Rlc3Ryb3knLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoIV9oYXNoUmVzZXRlZCkge1xuXHRcdFx0XHRcdHJldHVyblRvT3JpZ2luYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRfbGlzdGVuKCdmaXJzdFVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfY3VycmVudEl0ZW1JbmRleCA9IF9wYXJzZUl0ZW1JbmRleEZyb21VUkwoKS5waWQ7XG5cdFx0XHR9KTtcblxuXHRcdFx0XG5cblx0XHRcdFxuXHRcdFx0dmFyIGluZGV4ID0gX2luaXRpYWxIYXNoLmluZGV4T2YoJ3BpZD0nKTtcblx0XHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0X2luaXRpYWxIYXNoID0gX2luaXRpYWxIYXNoLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdGlmKF9pbml0aWFsSGFzaC5zbGljZSgtMSkgPT09ICcmJykge1xuXHRcdFx0XHRcdF9pbml0aWFsSGFzaCA9IF9pbml0aWFsSGFzaC5zbGljZSgwLCAtMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihfaXNPcGVuKSB7IC8vIGhhc24ndCBkZXN0cm95ZWQgeWV0XG5cdFx0XHRcdFx0ZnJhbWV3b3JrLmJpbmQod2luZG93LCAnaGFzaGNoYW5nZScsIHNlbGYub25IYXNoQ2hhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgNDApO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRvbkhhc2hDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZihfZ2V0SGFzaCgpID09PSBfaW5pdGlhbEhhc2gpIHtcblxuXHRcdFx0XHRfY2xvc2VkRnJvbVVSTCA9IHRydWU7XG5cdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYoIV9oYXNoQ2hhbmdlZEJ5U2NyaXB0KSB7XG5cblx0XHRcdFx0X2hhc2hDaGFuZ2VkQnlIaXN0b3J5ID0gdHJ1ZTtcblx0XHRcdFx0c2VsZi5nb1RvKCBfcGFyc2VJdGVtSW5kZXhGcm9tVVJMKCkucGlkICk7XG5cdFx0XHRcdF9oYXNoQ2hhbmdlZEJ5SGlzdG9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHR1cGRhdGVVUkw6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEZWxheSB0aGUgdXBkYXRlIG9mIFVSTCwgdG8gYXZvaWQgbGFnIGR1cmluZyB0cmFuc2l0aW9uLCBcblx0XHRcdC8vIGFuZCB0byBub3QgdG8gdHJpZ2dlciBhY3Rpb25zIGxpa2UgXCJyZWZyZXNoIHBhZ2Ugc291bmRcIiBvciBcImJsaW5raW5nIGZhdmljb25cIiB0byBvZnRlblxuXHRcdFx0XG5cdFx0XHRfY2xlYW5IaXN0b3J5VGltZW91dHMoKTtcblx0XHRcdFxuXG5cdFx0XHRpZihfaGFzaENoYW5nZWRCeUhpc3RvcnkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighX2hpc3RvcnlDaGFuZ2VkKSB7XG5cdFx0XHRcdF91cGRhdGVIYXNoKCk7IC8vIGZpcnN0IHRpbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9oaXN0b3J5VXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoX3VwZGF0ZUhhc2gsIDgwMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0fVxufSk7XG5cblxuLyo+Pmhpc3RvcnkqL1xuXHRmcmFtZXdvcmsuZXh0ZW5kKHNlbGYsIHB1YmxpY01ldGhvZHMpOyB9O1xuXHRyZXR1cm4gUGhvdG9Td2lwZTtcbn0pOyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vQHVjZC1saWIvY29yay1hcHAtYnVpbGQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kZWZhdWx0LXNraW4uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uL0B1Y2QtbGliL2NvcmstYXBwLWJ1aWxkL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGhvdG9zd2lwZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2VsZW1lbnRzL3VjZC10aGVtZS1hbGVydC91Y2QtdGhlbWUtYWxlcnQnO1xuaW1wb3J0ICcuLi9lbGVtZW50cy91Y2QtdGhlbWUtbWVzc2FnZS1hcmVhL3VjZC10aGVtZS1tZXNzYWdlLWFyZWEnO1xuaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWxpc3QtYWNjb3JkaW9uL3VjZC10aGVtZS1saXN0LWFjY29yZGlvblwiO1xuaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWZvcm0tc2VhcmNoL3VjZC10aGVtZS1mb3JtLXNlYXJjaFwiO1xuaW1wb3J0IFwiLi4vZWxlbWVudHMvdWNkLXRoZW1lLWhlYWRlci1zZWFyY2gtcG9wdXAvdWNkLXRoZW1lLWhlYWRlci1zZWFyY2gtcG9wdXBcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL3VjZC10aGVtZS1jb2xsYXBzZS91Y2QtdGhlbWUtY29sbGFwc2VcIjtcbmltcG9ydCBcIi4uL2VsZW1lbnRzL3VjZC10aGVtZS1pbWFnZS1nYWxsZXJ5L3VjZC10aGVtZS1pbWFnZS1nYWxsZXJ5XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==