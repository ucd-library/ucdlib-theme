import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import resetCss from "@ucd-lib/theme-sass/1_base_html/_reset.css.js";
import paginationCss from "@ucd-lib/theme-sass/4_component/_pagination.css"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [normalizeCss, resetCss, paginationCss, elementStyles];
}

export function render() { 
return html`

  <ul class="pager">
    ${this._renderLink(
      this.currentPage-1, 
      {label: 'Prev', class: 'pager__item--previous', noHighlight: true}
    )}

    ${this._pages.map(page => this._renderLink(page))}

    ${this._renderLink(
      this.currentPage+1, 
      {label: 'Next', class: 'pager__item--next', noHighlight: true}
    )}

  </ul>


`;}