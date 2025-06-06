import { html, css } from 'lit';

import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.css.js";

export function styles() {
  let customStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none;
    }
    .item-title ::slotted(*) {
      pointer-events: none;
    }
    .list--accordion {
      margin-bottom: 0;
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
  ${this._listItems.map((item, index) => html`
    ${this._isTitle(index) ? html`
      <li
        id="accordion-${index}"
        class="item-title ${this.itemIsExpanded(index, false) ? 'active' : ''}"
        item-index="${index}"
        tabindex="0"
        @click=${this._onTitleClick}
        @keyup=${this._onTitleKeyUp}
        aria-controls="accordion-${index + 1}-panel"
        aria-expanded="${this.itemIsExpanded(index, false)}">
        <slot name="${item.slotName}"></slot>
      </li>
    ` : html`
      <li
        id="accordion-${index}-panel"
        class="item-content"
        aria-labelledby="accordion-${index - 1}"
        ?hidden="${!this.itemIsExpanded(index, false)}">
        <slot name="${item.slotName}"></slot>
      </li>
    `}
  `) }
  </ul>
`;}
