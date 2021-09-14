import { LitElement } from 'lit';
import {render, styles} from "./page-ucdlib-icons.tpl.js";
import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-icon/ucdlib-icon";

export default class PageUcdlibIcons extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement) {

  static get properties() {
    return {
      iconSets: {type: Array},
      selectedSet: {type: Number}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.iconSets = [
      {id: "ucdlib", label: "Default Set", path: "ucdlib-icons"}, 
      {id: "academic", label: "Academic Icons"}];
    this.selectedSet = 0;
  }

  firstUpdated(){
    this.iconSets.forEach(d => {
      const iconSet = document.querySelector(`ucdlib-iconset[name=${d.id}]`);
      d.iconNames = iconSet.getIconNames();
    });
  }

  _getIconName(iconName, setName){
    if ( setName == "ucdlib" ) {
      return iconName;
    }
    return `${setName}:${iconName}`;
  }

}

customElements.define('page-ucdlib-icons', PageUcdlibIcons);