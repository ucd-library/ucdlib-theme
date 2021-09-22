import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-slim-select.tpl.js";

import SlimSelect from 'slim-select';

import { Mixin, MutationObserverElement } from "../../utils/index.js";

/**
 * @class UcdThemeSlimSelect
 * @classdesc UI component class for displaying a fancy select. This is a wrapper element around the 'slim-select' package.
 * 
 * Patternlab URL:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-select-menu
 */
export default class UcdThemeSlimSelect extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }
  /**
   * @method connectedCallback
   * @private
   * @description Native lifecycle method called when element is connected
   */
  connectedCallback(){
    super.connectedCallback();
    this._childListObserver.disconnect();
    this._childListObserver.observe(this, {subtree: true, childList: true, attributes: true, characterData: true});
  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Fires when light dom child list changes. Injected by MutationObserverElement mixin.
   */
  _onChildListMutation(){
    const children = Array.from(this.children);
    if (children.length == 0 || children[0].tagName != "SELECT") return;
    const select = children[0].cloneNode(true);
    this.renderRoot.innerHTML= "";
    this.renderRoot.appendChild(select);

    this.slimSelect = new SlimSelect({
      select: select,
      onChange: (info) => this.dispatchEvent(new CustomEvent("change", {detail: info}))
    });

  }

}

customElements.define('ucd-theme-slim-select', UcdThemeSlimSelect);