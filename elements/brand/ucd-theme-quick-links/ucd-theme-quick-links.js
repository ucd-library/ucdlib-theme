import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-quick-links.tpl.js";

import { MutationObserverController, WaitController } from '../../utils/controllers';

/**
 * @class UcdThemeQuickLinks
 * @classdesc Component class for displaying a quick links nav
 * 
 *  Patternlab Url:
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-2-columns
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-highlight
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-home-site
 * @property {String} title - Text to be displayed instead of "Quick Links"
 * @property {String} styleModifiers - Apply alternate styles with a space-separated list.
 * @property {Boolean} opened - Menu is open
 * @property {Number} animationDuration - Length of animation when opening/closing menu
 */
export default class UcdThemeQuickLinks extends LitElement {

  mutationObserver = new MutationObserverController(this);
  wait = new WaitController(this);

  static get properties() {
    return {
      title: {type: String},
      styleModifiers: {type: String, attribute: "style-modifiers"},
      opened: {type: Boolean},
      animationDuration: {type: Number, attribute: "animation-duration"},
      _links: {type: Array, state: true},
      _hasCustomIcons: {type: Boolean, state: true},
      _transitioning: {type: Boolean, state: true},
      _openedHeight: {type: Number, state: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.title = "Quick Links";
    this.styleModifiers = "";
    this.opened = false;
    this.animationDuration = 300;

    this._links = [];
    this._classPrefix = "quick-links";
    this._hasCustomIcons = false;
    this._transitioning = false;
    this._openedHeight = 0;
  }

  /**
   * @method open
   * @description Opens the quick links menu if not already open or in a transition state.
   * @returns {Promise} Returns true if successful
   */
  async open(){
    if ( this._transitioning || this.opened ) return false;

    this._openedHeight = 0;
    this._transitioning = true;
    await this.updateComplete;
    this._openedHeight = this.renderRoot.getElementById('menu').scrollHeight + "px";
    await this.updateComplete;

    await this.wait.wait(this.animationDuration);
    this._transitioning = false;
    this.opened = true;
    return true;
  }

  /**
   * @method close
   * @description Closes the quick links menu if not already closed or in a transition state.
   * @returns {Promise} Returns true if successful
   */
  async close(){
    if ( this._transitioning || !this.opened ) return false;
    this._transitioning = true;

    this._openedHeight = this.renderRoot.getElementById('menu').scrollHeight + "px";
    await this.updateComplete;
    await this.wait.waitForFrames(2);
    this._openedHeight = 0;
    await this.updateComplete;

    await this.wait.wait(this.animationDuration);

    this._transitioning = false;
    this.opened = false;
    return true;
  }

  /**
   * @method ingestChildren
   * @description Copies lightdom children into the shadowdom.
   */
  ingestChildren(){
    // remove any slotted icons created from a previous render
    this.querySelectorAll('[slot]').forEach(ele => ele.remove());
    this._hasCustomIcons = false;

    let links = [];
    this.querySelectorAll('a').forEach((child, index) => {
      if (child.tagName !== "A")  return;
      let link = {};

      // if first child exists, we assume it is an icon
      if ( 
        child.childElementCount > 0 && 
        index < 3 &&
        child.children[0].tagName !== 'A'
      ){
        this._hasCustomIcons = true;
        let icon = child.children[0].cloneNode(true);
        let iconSlot = `icon-${index}`;
        icon.setAttribute('slot', iconSlot);
        this.appendChild(icon);
        link.iconSlot = iconSlot;
      }

      if ( child.href ) link.href = child.href;
      link.text = child.innerText;
      link.ele = child;

      links.push(link);
    });

    if ( links.length > 0 ) this._links = links;
  }

  /**
   * @method _onBtnClick
   * @private
   * @description Attached to menu open/close button
   */
  async _onBtnClick(){
    let didToggle;
    if ( this.opened ) {
      didToggle = await this.close();
    } else {
      didToggle = await this.open();
    }
    if ( didToggle ) {
      this.dispatchEvent(new CustomEvent('toggle', {
        detail : {open: this.opened}
      }));
    }
  }

  /**
   * @method _onItemClick
   * @private
   * @description Attached to menu item links without an href
   * @param {Event} e 
   */
  _onItemClick(e){
    this._dispatchItemClick(e.target.index);
  }

  /**
   * @method _onItemKeyup
   * @private
   * @description Attached to menu item links without an href
   * @param {Event} e 
   */
  _onItemKeyup(e){
    if( e.which !== 13 ) return;
    this._dispatchItemClick(e.target.index);
  }

  /**
   * @method _dispatchItemClick
   * @private
   * @description Fires the item-click event
   * @param {Number} index - The array index of the selected menu item
   */
  _dispatchItemClick(index){
    this.dispatchEvent(new CustomEvent('item-click', {
      detail : {
        index: index,
        item: this._links[index]
      }
    }));

  }

  /**
   * @method _getNavClasses
   * @private
   * @description Get classes to be applied to the 'nav' element
   * @returns {Object}
   */
  _getNavClasses(){
    let classes = {};
    classes[`${this._classPrefix}__menu`] = true;
    
    if ( this.styleModifiers ) {
      this.styleModifiers.split(" ").forEach(mod => {
        if (mod) classes[`${this._classPrefix}--${mod}`] = true;
      });
    }

    classes['transitioning'] = this._transitioning;
    classes['open'] = this.opened;

    return classes;
  }

  /**
   * @method _getNavStyles
   * @private
   * @description Get styles to be applied to the 'nav' element
   * @returns {Object}
   */
  _getNavStyles(){
    let styles = {};
    if ( this._transitioning) {
      styles['height'] = this._openedHeight;
    }
    return styles;
  }

  /**
   * @method _onChildListMutation
   * @param {Array} mutationsList - List of mutation records
   * @private
   * @description Fires when light dom child list changes. Injected by MutationObserverController.
   *  Sets the '_links' property.
   */
  _onChildListMutation(mutationsList){

    // Check to see if this element triggered the mutation and avoid infinite loop.
    if ( mutationsList ) {
      for (const mutation of mutationsList) {
        for (const n of Array.from(mutation.addedNodes)){
          if ( n instanceof Element && n.hasAttribute('slot')) return;
        }
        for (const n of Array.from(mutation.removedNodes)){
          if ( n instanceof Element && n.hasAttribute('slot')) return;
        }
      }
    }
    this.ingestChildren();
  }

  /**
   * @method _renderSlot
   * @private
   * @description Renders slot for an icon
   * @param {Object} link - Member of the _links property.
   * @returns {TemplateResult}
   */
  _renderSlot(link) {
    if ( link.iconSlot ) {
      return html`<div class='slot-parent'><slot name=${link.iconSlot}></slot></div>`;
    }
    return html``;
  }

}

customElements.define('ucd-theme-quick-links', UcdThemeQuickLinks);