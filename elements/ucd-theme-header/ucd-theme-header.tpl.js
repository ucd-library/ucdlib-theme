import { html, css } from 'lit';

import headerStyles from "@ucd-lib/theme-sass/4_component/_header.css.js";
import headerLayoutStyles from "@ucd-lib/theme-sass/5_layout/_l-header.css.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;

  return [
    headerStyles,
    headerLayoutStyles,
    elementStyles
  ];
}

export function render() { 
return html`
<header class="l-header header">
  <div class="header__bar" ?hidden="${this.hideUCDBar}">
      <div class="header__university">
        <p>Steve is great</p>
      </div>
  </div>
</header>
  

`;}