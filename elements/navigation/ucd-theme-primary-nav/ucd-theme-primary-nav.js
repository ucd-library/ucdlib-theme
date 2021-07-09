import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-primary-nav.tpl.js";

import Mixin from "../../utils/mixin";
import { MutationObserverElement } from "../../utils/mutation-observer";

/**
 * @class UcdThemePrimaryNav
 * @classdesc Component class for displaying a primary site nav
 * Pattern Lab Url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html
 * 
 * @property {String} styleModifier - Apply an alternate style with a keyword:
 *  'mega' - Hovering over any top-level link opens a single nav with all subnav links
 * @property {Number} hoverDelay - How long (ms) after hover will menu open/close
 * 
 * @example
 * html`
 *  <ucd-theme-primary-nav>
 *    <a href="#">link 1</a>
 *    <a href="#">link 2</a>
 *    <ul name="link with subnav" href="#">
 *      <li><a href="#">subnav link 1</a></li>
 *    </ul>
 *  </ucd-theme-primary-nav>
 * `
 */
export default class UcdThemePrimaryNav extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      styleModifier: {type: String, attribute: "style-modifier"},
      hoverDelay: {type: Number, attribute: "hover-delay"},
      navItems: {type: Array},
      maxDepth: {type: Number, attribute: "max-depth"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.styleModifier = "";
    this.hoverDelay = 300;
    this.navItems = [];
    this.maxDepth = 2;

    this._classPrefix = "primary-nav";
  }

  /**
   * @method _onChildListMutation
   * @description Fires when light dom child list changes. Injected by MutationObserverElement mixin.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    const children = Array.from(this.children);

    let navItems = children.map((child) => this._makeNavItemTree(child)).filter(navItem => navItem.linkText);
    if ( navItems.length ) this.navItems = navItems;
  }

  /**
   * @method _makeNavItemTree
   * @description Extracts menu item data from DOM Element
   * @param {DOM Node} ele - Element
   * @returns {Object} Formatted object describing the menu item and its children
   */
  _makeNavItemTree(ele){
    let linkText, href, subItems = [];
    if ( ele.tagName === 'LI' && ele.children.length > 0) ele = ele.children[0];

    if ( ele.tagName === 'A' ) {
      linkText = ele.innerText;
      href = ele.href;
    } else if ( ele.tagName === 'OL' || ele.tagName === 'UL' ) {
      linkText = ele.getAttribute('link-text');
      href = ele.getAttribute('href');

      for (const child of Array.from(ele.children)) {
        let childItem = this._makeNavItemTree(child);
        if ( childItem.linkText ) subItems.push(childItem);
      }
    }

    if ( linkText ) linkText = linkText.trim();
    return {linkText, href, subItems};

  }

  /**
   * @method _renderNavItem
   * @description Renders a menu item and all its children to the specified max depth
   * @param {Object} navItem - An item from the 'navItems' element property
   * @param {Number} depth - The current depth within the menu hierarchy
   * @returns {TemplateResult}
   */
  _renderNavItem(navItem, depth=0){
    if ( this._hasSubNav(navItem) && depth < this.maxDepth) {
      return html`
      <li>
        <div class="submenu-toggle__wrapper ${depth === 0 ? `${this._classPrefix}__top-link` : ''}">
          <a href=${navItem.href}>${navItem.linkText}<span class="${this._classPrefix}__submenu-indicator"></span></a>
          <button class="submenu-toggle" aria-label="Toggle Submenu"><span class="submenu-toggle__icon"></span></button>
        </div>
        <ul class="menu">
          ${navItem.subItems.map(subItem => this._renderNavItem(subItem, depth + 1))}
        </ul>
      </li>
    `;
    }

    return html`
      <li class="${depth === 0 ? `${this._classPrefix}__top-link`: '' }">
        ${navItem.href ? html`
          <a href=${navItem.href}>${navItem.linkText}</a>
        ` : html`
          <span class="${this._classPrefix}__nolink">${navItem.linkText}</span>
        `}
      </li>
    `;

  }

  /**
   * @method _hasSubNav
   * @description Utility function for determining if a menu has subitems
   * @param {Object} navItem - A member of the navItems array.
   * @returns {Boolean}
   */
  _hasSubNav(navItem){
    if ( navItem && navItem.subItems && navItem.subItems.length) return true;
    return false;
  }

}

customElements.define('ucd-theme-primary-nav', UcdThemePrimaryNav);