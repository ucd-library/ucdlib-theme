import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import resetCss from "@ucd-lib/theme-sass/1_base_html/_reset.css.js";
import paginationCss from "@ucd-lib/theme-sass/4_component/_pagination.css"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .default {
      display: inherit;
    }
    .xs-screen {
      display:none;
    }

    @media (min-width: 991px) {
      .pager__item--next {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @media (max-width: 992px) {
      .default {
        display: none;
      }
      .xs-screen {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .pager__item.darkmode a {
      color: white;
    }

    .pager .darkmode span {
      color: white;
    }

    .pager__item--current.darkmode a {
      background-color: #FFBF00;
      color: #002851;
    }

    .pager__item.darkmode:hover a {
      color: #002851 !important;
    }

    .pager__item--previous.pager__item--current.darkmode,
    .pager__item--previous.pager__item--current.darkmode:hover,
    .pager__item--next.pager__item--current.darkmode,
    .pager__item--next.pager__item--current.darkmode:hover {
      background-color: transparent;
    }

    .pager__item--previous.pager__item--current.darkmode:hover a,
    .pager__item--next.pager__item--current.darkmode:hover a {
      color: #cccccc !important;
    }
    .pager__item button {
      all: unset;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 2rem;
      padding: 0.25rem 0.5rem;
      color: rgb(76, 76, 76);
      text-decoration: none;
      transition: 0.2s ease-in-out;
    }
    .pager__item--previous button::before {
      margin-right: 0.5rem;
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }
    .pager__item--next button::after {
      margin-left: 0.5rem;
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }
  `;

  return [normalizeCss, resetCss, paginationCss, elementStyles];
}

export function render() { 
return html`

  <ul class="pager">
    ${this.xs_screen ? 
      html`
        <li class="xs-screen${this.darkmode ? ' darkmode' : ''}">
          <ul class="pager">
          ${this._renderLink(
            this.currentPage-1, 
            {label: 'Prev', class: 'pager__item--previous', noHighlight: false}
          )}
          </ul>

          <ul class="pager">
          ${this._renderLink(this.currentPage)}
          </ul class="pager">

          <span>of ${this.maxPages}</span> 

          <ul class="pager">
            ${this._renderLink(
              this.currentPage+1, 
              {label: 'Next', class: 'pager__item--next', noHighlight: false}
            )} 
          </ul>

        </li>

        <li class="default${this.darkmode ? ' darkmode' : ''}">
          <ul class="pager">
            ${this._renderLink(
              this.currentPage-1, 
              {label: 'Prev', class: 'pager__item--previous', noHighlight: false}
            )}
          </ul>
        
          <ul class="pager">
            ${this._pages.map(page => this._renderLink(page))}
          </ul>

          <ul class="pager">
          ${this._renderLink(
            this.currentPage+1, 
            {label: 'Next', class: 'pager__item--next', noHighlight: false}
          )} 
          </ul>
        </li>
      `
      :html`
        
        ${this._renderLink(
          this.currentPage-1, 
          {label: 'Prev', class: 'pager__item--previous', noHighlight: false}
        )}
        
        ${this._pages.map(page => this._renderLink(page))}

        ${this._renderLink(
          this.currentPage+1, 
        {label: 'Next', class: 'pager__item--next', noHighlight: false}
      )} 
    `    
    }
  </ul>

      

`;}