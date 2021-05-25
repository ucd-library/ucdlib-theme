import { LitElement, html } from 'lit';
import {render, styles} from "./ucd-theme-pagination.tpl.js";


export default class UcdThemePagination extends LitElement {

  static get properties() {
    return {
      type : {type: String},
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
      visibleLinks : {
        type : Number,
        attribute : 'visible-links'
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
    this.ALLOWED_TYPES = ['virtual', 'link'];
    this.render = render.bind(this);
  }

  firstUpdated() {
    if( this.ALLOWED_TYPES.includes(this.type) ) {
      this.type = this.ALLOWED_TYPES[0];
    }
    if( !this.visibleLinks ) {
      this.visibleLinks = 7;
    }
  }

  updated(props) {

    if( props.has('currentPage') ) {
      let startIndex = Math.floor(this.currentPage - (this.visibleLinks/2));
      
      if( startIndex < 0 ) {
        startIndex = 0;
      } else if( this.currentPage + startIndex > this.maxPages ) {
        startIndex -= (this.currentPage + startIndex) - this.maxPages;
      }
      if( startIndex < 0 ) {
        startIndex = 0;
      }
      let endIndex = this.visibleLinks;
      if( endIndex > this.maxPages ) endIndex = this.maxPages;

      let pages = [];
      for( let i = startIndex; i <= endIndex; i++ ) {
        pages.push(i);
      }
      this._pages = pages;
    }
  }

  _renderLink(page, args={}) {
    if( page === this.currentPage ) {
      if( !args.class ) args.class = '';
      args.class += ' pager__item--current';
    }


    if( this.type === 'virtual' ) {
      return html`<li  class="pager__item ${args.class || ''}">
        <a style="cursor:pointer" tabindex="1" @click="${this._onPageClicked}" page="${page}">${args.label || page}</a>
      </li>`;
    }

    let href = (this.useHash ? '#' : '') + (this.basePath || '') + page;
    return html`<li class="pager__item ${args.class || ''}">
      <a href="${href}">${args.label || page}</a>
    </li>`;
  }


  _onPageClicked(e) {
    this.dispatchEven(new CustomEvent('page-change', {
      detail : {page: parseInt(e.currentTarge.getAttribute('page'))}
    }));
  }


}

customElements.define('ucd-theme-pagination', UcdThemePagination);