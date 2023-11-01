import { LitElement, html } from 'lit';
//import { Page } from 'puppeteer';
import {render, styles} from "./ucd-theme-pagination.tpl.js";

import { BreakPointsController } from '../../utils/controllers';

/**
 * @class UcdThemePagination
 * @classdesc Component class for pagination
 * 
 * Pattern Lab Url: 
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination
 * 
 * @property {String} base-path - for anchor tag href
 * @property {String} queryParams - Append query parameters if constructing an anchor tag
 * @property {String} current-page - Page to show and highlight
 * @property {String} max-pages - Max number of total pages
 * @property {String} visible-link-count - How many page links to show
 * 
 * @examples
 * change!!!
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
      queryParams: {
        type: String,
        attribute: 'query-params'
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
      disableLabel : {
        type: Boolean,
        attribute : 'disable-label'
      },
      _pages : {
        type: Array
      },
      ellipses : {
        type: Boolean,
        attribute : 'ellipses'
      },
      xs_screen : {
        type: Boolean,
        attribute : 'xs-screen'
      },
      size : {
        type: String,
        attribute : 'size'
      },
      darkmode : {
        type: Boolean,
        attribute : 'darkmode'
      }
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();

    this.breakPoints = new BreakPointsController(this);

    this._pages = [];
    this.useHash = false;
    this.disableLabel = false;
    this.type = 'virtual';
    this.basePath = '';
    this.queryParams = '';
    this.visibleLinkCount = 7;
    this.currentPage = 1;
    this.maxPages = 1;
    this.ellipses = false;
    this.xs_screen = false;
    this.size = '';
    this.darkmode = false;

    this.screen_check = (window.innerWidth <= this.breakPoints.mobileBreakPoint)  ? true : false;

    this.render = render.bind(this);    
  }

  /**
   * @method willUpdate()
   * @description Changes before updated
   */
  willUpdate(props) {
    if( props.has('currentPage') || props.has('maxPages') ) {
      
      if( this.xs_screen && this.screen_check ) {
        let pages = [this.currentPage];
        this._pages = pages;  // Mobile Pagination
      } else {
        if( this.ellipses && this.maxPages >= 8 ) {
          this._pages = this._renderEllipse();
        } else if ( this.ellipses && this.maxPages < 8 ) {
          this._pages = this._renderOriginal();
        } else {
          let startIndex = Math.floor(this.currentPage - (this.visibleLinkCount/2));
          
          if( startIndex < 0 ) {
            startIndex = 0;
          } else if ( (this.currentPage + (this.visibleLinkCount/2)) > this.maxPages ) {
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
      } // Desktop Pagination
    }
  }

  /**
   * @method _constructClasses
   * @description Makes a class map object based on element properties/attributes. 
   * Classes are applied to the element.
   * 
   * @returns {Object} - {class1: true, class2: false}
   */
   _constructClasses() {
    let classes = {'main': true};

    if (this.size) {
      classes['size-' + this.size] = true;
    }
    
    return classes;
  }


  /**
   * @method _renderLink
   * @description render the links on the pagination 
   * @returns {HTML}
   */
  _renderLink(page, args={}) {
    if( page < 1 ) page = 1;
    if( page > this.maxPages ) page = this.maxPages;

    if( args.noHighlight !== true && page === this.currentPage ) {
      if( !args.class ) args.class = '';
      args.class += ' pager__item--current';
    }

    if( this.darkmode ) {
      args.class += ' darkmode';
    }

    if( !this.basePath && !this.useHash ) { 
      return html `<li class="pager__item ${args.class || ''}">
        ${((this.currentPage == 1 && args.label == "Prev") || (this.currentPage == this.maxPages && args.label == "Next") ) ? 
        html`<a style="pointer-events: none; cursor: default; color: ${this.darkmode ? '#cccccc' : '#999999'}; background: ${this.darkmode ? 'transparent' : 'white'}" tabindex="1" @click="${this._onPageClicked}" page="${page}">${args.label || page}</a>`:
        html`<a style="cursor:pointer;" tabindex="1" @click="${this._onPageClicked}" page="${page}">${args.label || page}</a>`
         }  
        </li>`;            
    }

    let href = (this.useHash ? '#' : '') + (this.basePath || '/') + page + (this.queryParams ? '?' + this.queryParams : '');
    return html`<li class="pager__item ${args.class || ''}">
        ${((this.currentPage == 1 && args.label == "Prev") || (this.currentPage == this.maxPages && args.label == "Next") ) ? 
          html` <a style="pointer-events: none; cursor: default; color: ${this.darkmode ? '#cccccc' : '#999999'}; background: ${this.darkmode ? 'transparent' : 'white'};" href="${href}">${args.label || page}</a>`: 
          html` <a href="${href}">${args.label || page}</a>`
        }   
        </li>`;
  }

  /**
   * @method _renderOriginal
   * @description render the ellipses pattern in pagination
   * @returns {Array} pages
   */  
  _renderOriginal(){
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

    return pages;
  }

  /**
   * @method _renderEllipse
   * @description render the ellipses pattern in pagination
   * @returns {Array} pages
   */  
  _renderEllipse(){
    let startIndex = 0;
    let endIndex = this.maxPages;

    let pages = [];
    if ((this.currentPage <= endIndex - 4) && (this.currentPage >= startIndex + 4)){
      for( let i = startIndex; i < endIndex; i++ ) {
        if(i == 0) pages.push(i+1);    
        else if (i == (startIndex + 1)) pages.push("...");
        else if (i > (startIndex + 1) && i < this.currentPage - 3) continue; 
        else if (i >= (this.currentPage - 3) && i < (this.currentPage + 2)) pages.push(i+1);
        else if (i < 4 && i < this.currentPage + 2) continue; 
        else if (i == (endIndex - 2)) pages.push("...");
        else if (i == endIndex - 1) pages.push(i+1);  
      }
    } //Middle ellipses
    else if(this.currentPage >= startIndex + 4){
      for( let i = startIndex; i < endIndex; i++ ) {
        if (i == 0) pages.push(i+1);
        else if(i > 0 && i < (endIndex - 6)) continue;
        else if (i == (endIndex - 6)) pages.push("...");
        else pages.push(i+1);       
      }
    } //Left ellipses
    else if(this.currentPage <= endIndex - 4){
      for( let i = startIndex; i < endIndex; i++ ) {
        if(i < 6) pages.push(i+1);
        else if (i == 6) pages.push("...");
        else if (i > 6 && i < (endIndex - 2)) continue; 
        else if (i == endIndex - 1) pages.push(i+1);  
      }
    } //Right ellipses
    return pages;
  }

  /**
   * @method _onPageClicked
   * @description event fires on page click
   * 
   */    
  _onPageClicked(e) {
    this.dispatchEvent(new CustomEvent('page-change', {
      detail : {page: parseInt(e.currentTarget.getAttribute('page'))}
    }));
  }


}

customElements.define('ucd-theme-pagination', UcdThemePagination);