import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import resetCss from "@ucd-lib/theme-sass/1_base_html/_reset.css.js";
import paginationCss from "@ucd-lib/theme-sass/4_component/_pagination.css"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    @media (min-width: 991px) {
      .pager__item--next {
        display: flex;
        justify-content: center;
        align-items: center;
      }
  `;

  return [normalizeCss, resetCss, paginationCss, elementStyles];
}

export function render() { 
return html`

  <ul class="pager">
    ${this._renderLink(
      this.currentPage-1, 
      {label: 'Prev', class: 'pager__item--previous', noHighlight: false}
    )}
    
    ${this._pages.map(page => this._renderLink(page))}

    ${this.xs_screen ? 
      html`
        <span style="display: flex;justify-content: center;align-items: center;">of ${this.maxPages}</span>  
        ${this._renderLink(
          this.currentPage+1, 
          {label: 'Next', class: 'pager__item--next', noHighlight: false}
        )} 
      `: 
      html `
        ${this._renderLink(
          this.currentPage+1, 
          {label: 'Next', class: 'pager__item--next', noHighlight: false}
        )} 
      `
    }
  </ul>

`;}