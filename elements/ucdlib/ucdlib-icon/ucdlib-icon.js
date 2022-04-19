import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-icon.tpl.js";

/**
 * @class UcdlibIcon
 * @classdesc Component class for displaying an icon
 * @property {String} icon - name of icon within a registered icon set.
 *  Format: ${iconset name}:${icon name}
 *  Or just the icon name if using the default ucdlib iconset.
 * @property {String} src -  If using ucdlib-icon without an iconset, you can set the src to be
 *  the URL of an individual icon image file. Note that this will take
 *  precedence over a given icon attribute.
 */
export default class UcdlibIcon extends LitElement {

  static get properties() {
    return {
      icon: {type: String},
      src: {type: String},
      _iconName: {type: String, state: true},
      _iconsetName: {type: String, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.icon = "";
    this.src = "";

    this._iconName = "";
    this._iconsetName = "";
    this._default_iconset = "ucdlib";
    this._onAddedIconset = this._onAddedIconset.bind(this);
  }

  /**
   * @method disconnectedCallback
   * @description native web component life cycle method
   * @private
   */
  disconnectedCallback() {
    if ( this._setListener ){
      window.removeEventListener('ucdlib-iconset-added', this._onAddedIconset);
    }
    super.disconnectedCallback();
  }

  /**
   * @method willUpdate
   * @description Lit lifecyle method called right before element updates
   * @param {Map} props - Updated properties
   * @private
   */
  willUpdate(props){
    if ( props.has('icon') || props.has('src') ){
      if ( this.src ) {
        this._updateIcon();
      } else if ( this.icon ) {
        let parts = this.icon.split(":");
        this._iconName = parts.pop();
        this._iconsetName = parts.pop() || this._default_iconset;
        this._updateIcon();
      }
    }
  }

  /**
   * @method _onAddedIconset
   * @description Attached to custom event fired by a ucdlib-iconset element
   * @private
   */
  _onAddedIconset(){
    this._updateIcon();
  }

  /**
   * @method _updateIcon
   * @description Prepends a new svg or img icon to the shadowroot. 
   *  Called on icon or src property change.
   * @private
   */
  _updateIcon(){
    // using the icon attribute
    if ( this._usesIconSet() ) {
      
      // previously using the src attribute. remove it.
      if ( this._img && this._img.parentNode ) this.renderRoot.removeChild(this._img);

      // empty icon name, remove it
      if ( this._iconName === '') {
        if ( this._iconset ) this._iconset.removeIcon(this);
      
      // check if iconset exists, add event listener if it doesn't
      } else if ( this._iconsetName ){
        this._iconset = this._getIconset();
        if ( this._iconset && this._iconset.applyIcon ) {
          this._iconset.applyIcon(this, this._iconName);
          if ( this._setListener ){
            window.removeEventListener('ucdlib-iconset-added', this._onAddedIconset);
            this._setListener = false;
          }
        } else {
          if ( !this._setListener ){
            this._setListener = window.addEventListener('ucdlib-iconset-added', this._onAddedIconset);
          }
        }
      }

    // using the src attribute
    } else {
      if ( this._iconset ) this._iconset.removeIcon(this);
      if ( !this._img ) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      this.renderRoot.appendChild(this._img);
    }

  }

  /**
   * @method _usesIconSet
   * @description Element is using an icon set as opposed to an img src
   * @returns {Boolean}
   * @private
   */
  _usesIconSet(){
    return this.icon || !this.src;
  }

  /**
   * @method _getIconset
   * @description Return the specified ucdlib-iconset element from the head
   * @returns {Element}
   * @private
   */
  _getIconset(){
    return document.head.querySelector(`ucdlib-iconset[name=${this._iconsetName}]`);
  }
}

customElements.define('ucdlib-icon', UcdlibIcon);