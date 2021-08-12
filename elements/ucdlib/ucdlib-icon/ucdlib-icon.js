import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-icon.tpl.js";

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

  disconnectedCallback() {
    window.removeEventListener('ucdlib-iconset-added', this._onAddedIconset);
    super.disconnectedCallback();
  }

  updated(props){
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

  _onAddedIconset(){
    this._updateIcon();
  }

  _updateIcon(){
    // using the icon attribute
    if ( this._usesIconSet() ) {
      if ( this._img && this._img.parentNode ) this.renderRoot.removeChild(this._img);

      if ( this._iconName === '') {
        if ( this._iconset ) this._iconset.removeIcon(this);
      } else if ( this._iconsetName ){
        this._iconset = this._getIconset();
        if ( this._iconset ) {
          this._iconset.applyIcon(this, this._iconName);
          window.addEventListener('ucdlib-iconset-added', this._onAddedIconset);
        } else {
          window.removeEventListener('ucdlib-iconset-added', this._onAddedIconset);
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

  _usesIconSet(){
    return this.icon || !this.src;
  }

  _getIconset(name){
    return document.head.querySelector(`ucdlib-iconset[name=${this._iconsetName}]`);
  }

}

customElements.define('ucdlib-icon', UcdlibIcon);