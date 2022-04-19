import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-slim-select.tpl.js";

import SlimSelect from 'slim-select';

import { MutationObserverController } from '../../utils/controllers';

/**
 * @class UcdThemeSlimSelect
 * @classdesc UI component class for displaying a fancy select. This is a wrapper element around the 'slim-select' package.
 * 
 * Patternlab URL:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-select-menu
 */
export default class UcdThemeSlimSelect extends LitElement {

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
    this.mutationObserver = new MutationObserverController(
      this, 
      {subtree: true, childList: true, attributes: true, characterData: true},
      "_onLightDomMutation"
    );
  }

  /**
   * @method _onLightDomMutation
   * @private
   * @description Fires when light dom child list changes. Called by MutationObserverController.
   */
  _onLightDomMutation(){
    const children = Array.from(this.children);
    if (children.length == 0 || children[0].tagName != "SELECT") return;
    const select = children[0].cloneNode(true);
    if ( this.slimSelect ){
      this.slimSelect.destroy();
      this.renderRoot.querySelector('.ss-main').remove();
      this.renderRoot.querySelector('select').remove();
    }
    this.renderRoot.appendChild(select);

    this.slimSelect = new SlimSelect({
      select: select,
      onChange: (info) => this.dispatchEvent(new CustomEvent("change", {detail: info}))
    });

  }

}

customElements.define('ucd-theme-slim-select', UcdThemeSlimSelect);