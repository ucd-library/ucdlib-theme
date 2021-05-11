import { html, css } from 'lit';

import collapseStyles from "@ucd-lib/theme-sass/4_component/_collapse.css.js";

import { motionCollapse } from "../utils/directives/motion-collapse";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none;
    }
  `;

  return [
    collapseStyles,
    elementStyles
  ];
}

export function render() { 
return html`

<div class="collapse">
  <h2 
    id="button"
    tabindex="0"
    class="collapse__title ${this.opened ? 'collapse__title--open': 'collapse__title--closed'}"
    aria-controls="content"
    aria-expanded="${this.opened}"
    @click="${this._onTitleClick}"
    @keyup="${this._onTitleKeyUp}"
    >
    ${this.title}
  </h2>
  <div 
    id="content"
    ${motionCollapse()}
    aria-labelledby="button"
    class="collapse__content" ?hidden="${!this.opened}">
    <slot></slot>
  </div>
</div>


`;}