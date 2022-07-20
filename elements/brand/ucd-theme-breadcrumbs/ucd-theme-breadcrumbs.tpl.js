import { html, css } from 'lit';

import isEqual from 'lodash.isequal';
import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import breadcrumbsStyles from "@ucd-lib/theme-sass/4_component/_index.css";


export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    formStyles,
    elementStyles,
    breadcrumbsStyles
  ];
}

export function render() { 
return html`
  <ol class="breadcrumbs">
    ${this.links ? html`
      ${this.links.map(link =>html`
      ${isEqual(link, this.lastElement) ? html`
          <li><a>${link.linkTitle}</a></li>
        `: html`
          <li><a href="${link.url}">${link.linkTitle}</a></li>   
        `}
      `)}
    `
    : html``}
  </ol>
`;}