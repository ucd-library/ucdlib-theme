import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-subnav.tpl.js";
import { ifDefined } from 'lit/directives/if-defined.js';

import { styleMap } from 'lit/directives/style-map.js';

import {Mixin, NavElement} from "../../utils/mixins";
import { MutationObserverController, WaitController } from '../../utils/controllers';

/**
 * @class UcdThemeSubnav
 * @classdesc Component class for displaying a subnav
 * 
 * Patternlab url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav-linked-title
 * 
 * @property {String} navTitle - Subnav header text
 * @property {String} titleHref - Link for subnav header (optional)
 * @property {Boolean} titleClickEvent - If navTitle, will fire an event when clicked.
 * 
 * @example
 *  <ucd-theme-subnav nav-title="A subnav">
 *    <li><a href="#">Link 1</a></li>
 *    <li><a href="#">Link 2</a></li>
 *    <ul link-text="Link with Children" href="#">
 *      <li><a href="#">Child 1</a></li>
 *      <li><a href="#">Child 2</a></li>
 *      <li><a href="#">Child 3</a></li>
 *    </ul>
 *  </ucd-theme-subnav>
 */
export default class UcdThemeSubnav extends Mixin(LitElement)
  .with(NavElement) {

  static get properties() {
    return {
      navTitle: {type: String, attribute: "nav-title"},
      titleHref: {type: String, attribute: "title-href"},
      titleClickEvent: {type: Boolean, attribute: 'title-click-event'},
      navAriaLabel: {type: String, attribute: "nav-aria-label"},
      navItems: {type: Array},
      animationDuration: {type: Number, attribute: "animation-duration"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.mutationObserver = new MutationObserverController(this, {subtree: true, childList: true});
    this.wait = new WaitController(this);

    this.navTitle = "";
    this.titleHref = "";
    this.titleClickEvent = false;
    this.navAriaLabel = "Sub navigation";
    this.animationDuration = 300;
  }

  /**
   * @method openNavItem
   * @description Shows children of a nav item (if applicable)
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Boolean}
   */
  async openNavItem(navLocation){
    let navItem = this.getNavItem(navLocation);
    if ( !navItem || navItem.isTransitioning ) return false;

    let navEle = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
    if ( !navEle ) return false;
    let navUL = navEle.querySelector('ul');
    if ( !navUL ) return false;
    navItem.isTransitioning = true;

    // Get expanded height
    navItem.inlineStyles.display = "block";
    navItem.inlineStyles.height = "0px";
    await this.wait.waitForUpdate();
    const expandedHeight = navUL.scrollHeight + "px";   
    
    // Set expanded height
    navItem.inlineStyles.height = expandedHeight;
    await this.wait.waitForUpdate();

    // Complete animation
    await this.wait.wait(this.animationDuration);
    navItem.inlineStyles = {};
    navItem.isOpen = true;
    navItem.isTransitioning = false;
    this.requestUpdate();

    return true;
  }

  /**
   * @method closeNavItem
   * @description Hides children of a nav item (if applicable)
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Boolean}
   */
  async closeNavItem(navLocation){
    let navItem = this.getNavItem(navLocation);
    if ( !navItem || navItem.isTransitioning ) return false;

    let navEle = this.renderRoot.getElementById(`nav--${navLocation.join("-")}`);
    if ( !navEle ) return false;
    let navUL = navEle.querySelector('ul');
    if ( !navUL ) return false;
    navItem.isTransitioning = true;

    // Set expanded height
    navItem.inlineStyles.height = navUL.scrollHeight + "px";
    navItem.inlineStyles.display = "block";
    await this.wait.waitForUpdate();

    // Set height to zero
    await this.wait.waitForFrames(2);
    navItem.inlineStyles.height = "0px";
    await this.wait.waitForUpdate();

    // Complete animation
    await this.wait.wait(this.animationDuration);
    navItem.inlineStyles = {};
    navItem.isOpen = false;
    navItem.isTransitioning = false;
    this.requestUpdate();  

    return true;

  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Fires when light dom child list changes. Injected by MutationObserverController.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    let navItems = this.parseNavChildren();
    if ( navItems.length ) this.navItems = navItems;
  }

  /**
   * @method _dispatchItemClick
   * @private
   * @description Fires an 'item-click' event
   * @param {Object} item - The link item
   * @param {Array} location - The link location in links array
   */
  _dispatchItemClick(item, location){
    if (item.href) return;
    const options = {
      detail: {
        linkText: item.linkText,
        location
      },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('item-click', options));
  }

  /**
   * @method _dispatchTitleClick
   * @private
   * @description fires a 'title-click' ecent
   */
  _dispatchTitleClick(){
    if ( !this.titleClickEvent ) return;
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('title-click', options));
  }

  /**
   * @method _renderNavItem
   * @private
   * @description Renders a menu item and all its children to the specified max depth
   * @param {Object} item - An item from the 'navItems' element property
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]
   * @returns {TemplateResult}
   */
  _renderNavItem(item, location){
    const depth = location.length - 1;

    if ( this.itemHasSubNav(item) && depth < this.maxDepth) {
      return html`
        <li id="nav--${location.join("-")}">
          <div class="submenu-toggle__wrapper">
            <a href=${ifDefined(item.href ? item.href : undefined)} @click=${() => this._dispatchItemClick(item, location)}>${item.linkText}</a>
            <button 
              @click=${() => this._toggleItemMenu(location)}
              class="submenu-toggle ${item.isOpen ? "submenu-toggle--open" : ""}" 
              ?disabled=${item.isTransitioning}
              aria-label="Toggle Submenu">
              <span class="submenu-toggle__icon"></span>
            </button>
          </div>
          <ul style=${styleMap(item.inlineStyles)} class="${item.isOpen ? "is-open": "" }">
            ${item.subItems.map((subItem, i) => this._renderNavItem(subItem, location.concat([i])))}
          </ul>
        </li>
      `;
    }
    return html`
      <li id="nav--${location.join("-")}"><a href=${ifDefined(item.href ? item.href : undefined)} @click=${() => this._dispatchItemClick(item, location)}>${item.linkText}</a></li>
    `;
  }

  /**
   * @method _toggleItemMenu
   * @private
   * @description Attached to nav item button click. Shows/hides children.
   * @param {Array} navLocation - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]
   */
  _toggleItemMenu(navLocation){
    let navItem = this.getNavItem(navLocation);
    if ( navItem.isOpen ) {
      this.closeNavItem(navLocation);
    } else {
      this.openNavItem(navLocation);
    }
  }

}

customElements.define('ucd-theme-subnav', UcdThemeSubnav);