import { html, css } from 'lit';

import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.css.js";

//how do we determine what other styles to include in this element?
import linkCss from "@ucd-lib/theme-sass/1_base_html/_links.css.js";

export function styles() {
  window.steve = listCss;
  let customStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;
  return [
    listCss, 
    linkCss, 
    customStyles
  ]
}

export function render() { 
return html`
<ul class="list--${this.listStyle}">
${this.listItems.map((item, index) => html`
  ${this._isTitle(index) ? html`
    <li 
      id="accordion-${index}"
      item-index="${index}" 
      tabindex="0"
      @click=${this._onTitleClick}
      @keyup=${this._onTitleKeyUp}
      aria-controls="accordion-${index}-panel"
      aria-expanded="${this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  ` : html`
    <li id="accordion-${index}-panel" 
      role="region" 
      aria-labelledby="accordion-${index}" 
      ?hidden="${!this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  `}
`) }
</ul>
`;}