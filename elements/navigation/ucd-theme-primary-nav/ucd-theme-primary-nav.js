import { LitElement } from 'lit';
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
      navItems: {type: Array}
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
  }

  /**
   * @method _onChildListMutation
   * @description Fires when light dom child list changes. Injected by MutationObserverElement mixin.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    const children = Array.from(this.children);
    if ( !children || !children.length ) return;

    let navItems = [];
    for (const child of children) {

      // Item without subnav
      if (child.tagName === 'A' && child.innerText ) {
        navItems.push(this._makeNavItemObject(child));
      }

      // Item with subnav
      else if( child.tagName === 'OL' || child.tagName === 'UL' ) {
        let itemWithSubNav = this._makeNavItemObject(child);
        if ( !itemWithSubNav.name ) continue;
        for ( const listItem of Array.from(child.children) ) {
          let listItemObject = this._makeNavItemObject(listItem);
          if ( !listItemObject.name ) continue;
          itemWithSubNav.subItems.push(listItemObject);
        }
      }
    }
    if ( navItems.length ) this.navItems = navItems;
  }

  /**
   * @method _makeNavItemObject
   * @description Extracts menu item data from DOM Element
   * @param {DOM Node} ele - Element
   * @returns {Object} Formatted object describing the menu item
   */
  _makeNavItemObject(ele){
    let name = "";
    let href = "";
    let subItems = [];
    if ( ele.tagName === 'A' ) {
      name = ele.innerText;
      href = ele.href;
    } else if ( ele.tagName === 'LI' ) {
      if ( ele.children.length === 1 && ele.children[0].tagName == 'A') {
        name = ele.children[0].innerText;
        href = ele.children[0].href;
      }
    } else {
      if ( ele.getAttribute('href') ) href = ele.getAttribute('href');
      if ( ele.getAttribute('name') ) href = ele.getAttribute('name');
    }

    name = name.trim();
    return {name, href, subItems};

  }

}

customElements.define('ucd-theme-primary-nav', UcdThemePrimaryNav);