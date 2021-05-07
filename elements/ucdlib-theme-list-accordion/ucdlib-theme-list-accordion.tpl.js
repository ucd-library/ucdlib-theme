import { html, css } from 'lit';

import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.css.js";

export function styles() {
  window.steve = listCss;
  let customStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    .item-title ::slotted(*) {
      pointer-events: none;
    }
  `;
  return [
    listCss, 
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
      class="item-title"
      item-index="${index}" 
      tabindex="0"
      @click=${this._onTitleClick}
      @keyup=${this._onTitleKeyUp}
      aria-controls="accordion-${index}-panel"
      aria-expanded="${this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  ` : html`
    <li 
      id="accordion-${index}-panel" 
      class="item-content"
      role="region" 
      aria-labelledby="accordion-${index}" 
      ?hidden="${!this.itemIsExpanded(index, false)}">
      <slot name="${item.slotName}"></slot>
    </li>
  `}
`) }
</ul>
`;}