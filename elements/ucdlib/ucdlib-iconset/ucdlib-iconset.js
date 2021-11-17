import { LitElement } from 'lit';
import { Mixin, MainDomElement} from "../../utils/mixins";
import { MutationObserverController } from '../../utils/controllers';


/**
 * @class UcdlibIconset
 * @classdesc Component for creating svg iconsets to be consumed by the 'icon' attribute of ucdlib-icon
 * 
 * @property {String} name - Name of the icon set. Usage: <ucdlib-icon icon="{thisProperty}:{icon}"></ucdlib-icon>
 * @property {Number} size - The size of an individual icon. Note that icons must be square. 
 * @example
 * <ucdlib-iconset name="arrows">
    <svg>
      <defs>
        <g id="back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
        <g id="downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
      </defs>
    </svg>
  </ucdlib-iconset>
 */
export default class UcdlibIconset extends Mixin(LitElement)
  .with(MainDomElement) {

  static get properties() {
    return {
      name: {type: String},
      size: {type: Number},
      _iconMap: {type: Object, state: true}
    };
  }

  constructor() {
    super();
    this.mutationObserver = new MutationObserverController(this, {subtree: true, childList: true});

    this.name = "";
    this.size = 24;
    this._iconMap = {};
    this.style.display = "none";
  }

  /**
   * @method updated
   * @description Lit lifecyle method called after element updates
   * @param {Map} props - Updated properties
   * @private
   */
  updated( props ){
    if (props.has('name') && this.name ) {
      this.dispatchEvent(
        new CustomEvent('ucdlib-iconset-added', {bubbles: true, composed: true})
      );
    }
  }

  /**
   * @method getIconNames
   * @description Returns a list of icon names for this set
   * @returns {Array} 
   */
  getIconNames(){
    return Object.keys(this._iconMap);
  }

  /**
   * @method applyIcon
   * @description Adds icon to ucdlib-icon element from iconset
   * @param {Element} element - A ucdlib-icon element
   * @param {String} iconName - The icon identifier
   * @returns {Boolean}
   */
  applyIcon(element, iconName){
    this.removeIcon(element);
    let svg = this._cloneIcon(iconName);
    if ( svg ) {
      let eleRoot = this._getElementRoot(element);
      eleRoot.insertBefore(svg, eleRoot.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
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

  /**
   * @method _cloneIcon
   * @description Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   * @param {String} id - Icon id
   * @returns {Element} - an SVG element
   * @private
   */
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
   * @private
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

  /**
   * @method _onChildListMutation
   * @description Fires when element child list changes
   * @private
   */
  _onChildListMutation(){
    this._updateIconMap();
  }

  /**
   * @method _updateIconMap
   * @description Sets the _iconMap property with object: {icon_id: icon}
   * @private
   */
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