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
      // fire loaded event
    }
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