import { LitElement, svg } from 'lit';
import {render, styles} from "./ucdlib-branding-bar.tpl.js";

import {Mixin, NavElement} from "../../utils/mixins";
import { MutationObserverController } from '../../utils/controllers';
import logo from "./logo.js";
import bookLogo from "./book.js";

/**
 * @class UcdlibBrandingBar
 * @classdesc Component class for displaying a Library branding bar in a header
 * 
 * @property {String} figure - Figure to display: 'book' or 'logo'
 * @property {String} siteName - Name of website to display
 * @property {String} slogan - Optional text to display below site name
 * @property {String} siteUrl - Url to use for links around site name and figure
 * 
 * @examples
 *  <ucdlib-branding-bar>
 *   <a href="#">My Account</a>
 *   <a href="#">Access VPN</a>
 *   <a href="#">Give</a>
 *  </ucdlib-branding-bar>
 */
export default class UcdlibBrandingBar extends Mixin(LitElement)
  .with(NavElement) {

  static get properties() {
    return {
      figure: {type: String},
      siteName: {type: String, attribute: "site-name"},
      slogan: {type: String},
      siteUrl: {type: String, attribute: "site-url"},
      navItems: {type: Array}
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
      {childList: true, characterData: true, attributes: true}
    );

    this.figure = "book";
    this.siteName = "UC Davis Library";
    this.slogan = "";
    this.siteUrl = "/";
    this.navItems = [];
  }

  /**
   * @method willUpdate
   * @description Lit lifecycle method called before an update
   * @private
   * @param {Map} props - Properties that have changed
   */
  willUpdate(props){
    if ( props.has("figure") && props.get("figure") !== undefined ){
      const allowedKeywords = ['book', 'logo'];
      if ( !allowedKeywords.includes(props.get('figure')) ){
        console.warn(`${props.get('figure')} is not a recognized "figure" keyword.
          Allowed values: ${JSON.stringify(allowedKeywords)}
        `);
        this.figure = allowedKeywords[0];
      }
    }
  }

  /**
   * @method _renderFigure
   * @description Renders an svg logo
   * @private
   * @returns {TemplateResult}
   */
  _renderFigure(){
    if ( this.figure === 'logo') return logo;
    if ( this.figure === 'book' ) return bookLogo;
    return svg``;
  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Fires when light dom child list changes. Called by MutationObserverController.
   *  Sets the 'navItems' property.
   */
  _onChildListMutation(){
    let navItems = this.parseNavChildren();
    if ( navItems.length ) {
      this.navItems = navItems;
    } else {
      this.navItems = [];
    }
    this.dispatchEvent(new CustomEvent('nav-update', {bubbles: true, composed: false}));
  }

}

customElements.define('ucdlib-branding-bar', UcdlibBrandingBar);