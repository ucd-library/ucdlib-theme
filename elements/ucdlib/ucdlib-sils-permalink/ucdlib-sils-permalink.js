import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-sils-permalink.tpl.js";

/**
 * @class UcdlibSilsPermalink
 * @description This component allows you to easily add individual objects from
 * the UC SILS catalog into your webpage.
 * @property {String} href - Pointer to the permalink
 * @property {String} cite - Specify the citation style
 *
 * <ucdlib-sils-permalink href="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126"/>
 */

export default class UcdlibSilsPermalink extends LitElement {
  static get properties() {
    return {
      href:{type:String},
      cite:{type: String, state: "title"},
      filter : {
        type: String,
      },
      results : {type: Array},
      basePath : {
        type : String,
        attribute : 'base-path'
      },
      resultsPerPage : {
        type: Number,
        reflect : true,
        attribute : 'results-per-page'
      }
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.results = {
      results : []
    };
    this.resultsPerPage = 9999;
    this.page = 1;
    console.log(this.results);
    this.render=render.bind(this);
  }

  updated(props) {
    if( props.has('resultsPerPage') || props.has('page') ) {
      this._request();
    }
  }

  async _request(){

    let body = {
      offset: (this.page-1)*this.resultsPerPage,
      limit: this.resultsPerPage,
      facets: {}
    };

    let resp = await fetch(
      'https://search.library.ucdavis.edu/primaws/rest/pub?_wadl',
      {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(body)
      }
    );

    let results = await resp.json();

    console.log("Results:", results);
  }

  _getHref(item) {
    if( !this.renderLink ) {
      return (AGGIE_EXPERTS_LOADER.host || '') + item['@id'].replace(/^ucdrp:/, '/');
    }
    return this.renderLink(item);
  }

  _appendFilter(filters, key, value) {
    filters[key] = {
      type : 'keyword',
      op: 'and',
      value : [value]
    };
  }
}

customElements.define('ucdlib-sils-permalink',UcdlibSilsPermalink);
