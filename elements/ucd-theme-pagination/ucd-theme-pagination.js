import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-pagination.tpl.js";

/**
 * @class UcdThemePagination
 * @classdesc Component class for pagination
 * Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination
 * 
 * @property {String} base-path - for anchor tag href
 * @property {String} current-page - Page to show and highlight
 * @property {String} max-pages - Max number of total pages
 * @property {String} visible-link-count - How many page links to show
 * 
 * @examples
 * 
 * <ucd-theme-pagination
 *  current-page="50"
 *  max-pages="100"
 *  use-hash>
 * </ucd-theme-pagination>
 * <ucd-theme-pagination
 *  current-page="1"
 *  max-pages="10">
 * </ucd-theme-pagination>
 * <ucd-theme-pagination
 *  current-page="2"
 *  max-pages="33"
 *  base-path="/foo/bar/">
 * </ucd-theme-pagination>
 * 
 */
export default class UcdThemePagination extends LitElement {

  static get properties() {
    return {
      basePath : {
        type: String, 
        attribute: 'base-path'
      },
      useHash : {
        type: Boolean, 
        attribute: 'use-hash'
      },
      currentPage : {
        type : Number,
        attribute: 'current-page',
        reflect: true
      },
      maxPages : {
        type : Number,
        attribute : 'max-pages'
      },
      visibleLinkCount : {
        type : Number,
        attribute : 'visible-link-count'
      },
      _pages : {type: Array}
    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();

    this._pages = [];
    this.useHash = false;
    this.type = 'virtual';
    this.basePath = '';
    this.visibleLinkCount = 7;
    this.currentPage = 1;
    this.maxPages = 1;

    this.render = render.bind(this);
  }

  updated(props) {
    if( props.has('currentPage') ) {
      let startIndex = Math.floor(this.currentPage - (this.visibleLinkCount/2));
      
      if( startIndex < 0 ) {
        startIndex = 0;
      } else if( (this.currentPage + (this.visibleLinkCount/2)) > this.maxPages ) {
        startIndex -= Math.ceil(this.currentPage + (this.visibleLinkCount/2)) - this.maxPages - 1;
      }
      if( startIndex < 0 ) {
        startIndex = 0;
      }

      let endIndex = startIndex + this.visibleLinkCount;
      if( endIndex > this.maxPages ) endIndex = this.maxPages;

      let pages = [];
      for( let i = startIndex; i < endIndex; i++ ) {
        pages.push(i+1);
      }
      this._pages = pages;
    }
  }

  _renderLink(page, args={}) {
    if( page < 1 ) page = 1;
    if( page > this.maxPages ) page = this.maxPages;

    if( args.noHighlight !== true && page === this.currentPage ) {
      if( !args.class ) args.class = '';
      args.class += ' pager__item--current';
    }

    if( !this.basePath && !this.useHash ) {
      return html`<li  class="pager__item ${args.class || ''}">
        <a style="cursor:pointer" tabindex="1" @click="${this._onPageClicked}" page="${page}">${args.label || page}</a>
      </li>`;
    }

    let href = (this.useHash ? '#' : '') + (this.basePath || '/') + page;
    return html`<li class="pager__item ${args.class || ''}">
      <a href="${href}">${args.label || page}</a>
    </li>`;
  }


  _onPageClicked(e) {
    this.dispatchEvent(new CustomEvent('page-change', {
      detail : {page: parseInt(e.currentTarget.getAttribute('page'))}
    }));
  }


}

customElements.define('ucd-theme-pagination', UcdThemePagination);