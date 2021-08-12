import { LitElement } from 'lit';
import { Mixin, MutationObserverElement, MainDomElement} from "../../utils";

/**
 * @class UCdlibIconset
 * @classdesc Component for creating svg iconsets to be consumed by the 'icon' attribute of ucdlib-icon
 * 
 * @property {String} name - Name of the icon set. Usage: <ucdlib-icon icon="{thisProperty}:{icon}"></ucdlib-icon>
 * @property {Number} size - The size of an individual icon. Note that icons must be square. 
 */
export default class UcdlibIconset extends Mixin(LitElement)
  .with(MutationObserverElement, MainDomElement) {

  static get properties() {
    return {
      name: {type: String},
      size: {type: Number},
      _iconMap: {type: Object, state: true}
    };
  }

  constructor() {
    super();

    this.name = "";
    this.size = 24;
    this._iconMap = {};
    this.style.display = "none";
  }

  updated( props ){
    if (props.has('name') && this.name ) {
      this.dispatchEvent(
        new CustomEvent('ucdlib-iconset-added', {bubbles: true, composed: true})
      );
    }
  }

  applyIcon(element, iconName){
    this.removeIcon(element);
    let svg = this._cloneIcon(iconName);
    if ( svg ) {
      let eleRoot = this._getElementRoot(element);
      eleRoot.insertBefore(svg, eleRoot.childNodes[0]);
      return element._svgIcon = svg;
    }
    return  null;
  }

  /**
   * @method removeIcon
   * @description Remove an icon from the given element by undoing the changes effected by `applyIcon`.
   * 
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon(element){
    if (element._svgIcon) {
      this._getElementRoot(element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  }

  _cloneIcon(id){
    if ( !this._iconMap ) this._updateIconMap();
    if ( this._iconMap[id] ){
      let content = this._iconMap[id].cloneNode(true), 
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        viewBox =
          content.getAttribute('viewBox') || '0 0 ' + this.size + ' ' + this.size,
        cssText =
          'pointer-events: none; display: block; width: 100%; height: 100%;';
      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }

    return null;
  }

  /**
   * @method _getElementRoot
   * @description Returns shadowroot if exists
   * @param {Element} element
   * @returns {Object}
   */
  _getElementRoot(element){
    if ( element.renderRoot ) {
      return element.renderRoot;
    }
    if ( element.shadowRoot ) {
      return element.shadowRoot;
    }
    return element;
  }

  _onChildListMutation(){
    this._updateIconMap();
  }

  _updateIconMap(){
    let iconMap = {};
    this.querySelectorAll('g[id]').forEach(icon => {
      iconMap[icon.id] = icon;
    });

    if ( !Object.keys(iconMap).length ) {
      console.warn('No g elements with an id attribute found!.');
    }
    this._iconMap = iconMap;
  }

}

customElements.define('ucdlib-iconset', UcdlibIconset);