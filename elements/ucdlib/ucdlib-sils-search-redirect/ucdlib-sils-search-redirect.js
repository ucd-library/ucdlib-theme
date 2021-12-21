import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-sils-search-redirect.tpl.js";

import { SilsPrimoController } from '../../utils/controllers';

/**
 * @class UcdlibSilsSearchRedirect
 * @classdesc Search widget that redirects a user's query to SILS Primo
 * @property {String} query - The search query
 * @property {Boolean} ucdOnly - Limits search to UC Davis libraries only
 * @property {Boolean} darkBackground - Adjusts colors for display on a dark background
 * @property {Boolean} preventRedirect - Will not send user to Primo on form submission
 * @property {String} headingText - Text to display above main text input
 * @property {String} inputPlaceholder - Placeholder for main text input
 * @property {String} host - Primo host
 */
export default class UcdlibSilsSearchRedirect extends LitElement {

  static get properties() {
    return {
      query: {type: String},
      ucdOnly: {type: Boolean, attribute: "ucd-only"},
      darkBackground: {type: Boolean, attribute: "dark-background"},
      preventRedirect: {type: Boolean, attribute: "prevent-redirect"},
      headingText: {type: String, attribute: "heading-text"},
      inputPlaceholder: {type: String, attribute: "input-placeholder"},
      host: {type: String},
      role: {type: String, reflect: true},
      ariaLabel: {type: String, attribute: "aria-label", reflect: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.query = "";
    this.ucdOnly = false;
    this.darkBackground = false;
    this.headingText = "Search UC Library Materials";
    this.inputPlaceholder = "All UC books, journals, articles + more";
    this.role = "form";
    this.ariaLabel = "Search UC Library Materials";
    this.host = "";
    this._updatePrimoController();
  }

  /**
   * @method willUpdate
   * @description Lit lifecycle hook
   * @private
   * @param {Map} props - Properties that have changed
   */
  willUpdate(props){
    this._updatePrimoController(props);
  }

  /**
   * @method _onQueryChange
   * @private
   * @description Attached to primary text input
   * @param {Event} e - Input event
   */
  _onQueryChange(e){
    let text = e.target.value ? e.target.value : "";
    this.query = text;
  }

  /**
   * @method _onCorpusChange
   * @private
   * @description Attached to ucd-only checkbox
   * @param {Event} e - Input event
   */
  _onCorpusChange(e){
    this.ucdOnly = e.target.checked;
  }

  /**
   * @method _onSubmit
   * @description Called on form submit
   * @private
   * @param {Event} e - submit event
   */
  _onSubmit(e){
    e.preventDefault();
    let corpus = this.ucdOnly ? "ucd" : "everything";
    let advanced = e.submitter.id == "advanced-search";

    let url = this.primo.makeSearchUrl(this.query, corpus, advanced);
    if ( this.preventRedirect ) {
      this.dispatchEvent(new CustomEvent('search', {
        detail : {url}
      }));
    } else {
      window.location = url;
    }
  }


  /**
   * @method _updatePrimoController
   * @description Updates the config values of the Primo controller based on ele attributes
   * @private
   * @param {Map} props - Properties that have changed in current lifecycle
   */
  _updatePrimoController(props){
    let primoConfig = {};
    
    // Get primo config values from ele attributes
    const attrs = [
      {ele: 'host', ctl: 'host'}
    ];
    if ( props ){
      attrs.forEach(attr => {
        if ( props.has(attr.ele) && this[attr.ele] ) {
          primoConfig[attr.ctl] = this[attr.ele];
        }
      });
    }

    // instantiate or update controller
    if ( !this.primo ) {
      this.primo = new SilsPrimoController(
        this,
        primoConfig
      );
    } else {
      this.primo.updateConfig(primoConfig);
    }
  }

}

customElements.define('ucdlib-sils-search-redirect', UcdlibSilsSearchRedirect);