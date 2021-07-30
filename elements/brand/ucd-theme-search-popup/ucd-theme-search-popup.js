import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-search-popup.tpl.js";

import { Mixin, MutationObserverElement } from "../../utils/index.js";


export default class UcdThemeSearchPopup extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      buttonText: {type: String, attribute: "button-text"},
      opened: {type: Boolean},
      _defaultForm: {type: Boolean, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.buttonText = "Toggle Search";
    this.opened = false;
    this._defaultForm = false;

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

  _onChildListMutation(){
    if ( this.querySelector('ucd-theme-search-form') ){
      this._defaultForm = true;
    } else {
      this._defaultForm = false;
    }
  }

}

customElements.define('ucd-theme-search-popup', UcdThemeSearchPopup);