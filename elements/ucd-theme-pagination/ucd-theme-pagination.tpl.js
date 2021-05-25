import { html, css } from 'lit';

import paginationCss from "@ucd-lib/theme-sass/4_component/_pagination.css"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles, paginationCss];
}

export function render() { 
return html`

  <ul class="pager">
    ${this._renderLink(
      this.currentPage-1, 
      {label: 'Prev', class: 'pager__item--previous'}
    )}

    ${this._pages.map(page => this._renderLink(page))}

    ${this._renderLink(
      this.currentPage+1, 
      {label: 'Next', class: 'pager__item--next'}
    )}

  </ul>


`;}